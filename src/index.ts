import cheerio from 'cheerio';
import fs, { existsSync, mkdirSync, writeFileSync } from 'fs';
import * as path from 'path';
import glob from 'glob';
// @ts-ignore
import toSource from 'tosource';

function escapeRegExp(str: string) {
    const escaped = str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
    return escaped; // $& means the whole matched string
}

function replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

const docfolder = path.join(__dirname, '../doc/');

const h1regexp = /<h1\s+id="(.+)">(.+)<\/h1>/g;
const h2regexp = /<h2\s+id="(.+)">(.+)<\/h2>/g;
const h3regexp = /<h3\s+id="(.+)">(.+)<\/h3>/g;
const h4regexp = /<h4\s+id="(.+)">(.+)<\/h4>/g;
const h5regexp = /<h5\s+id="(.+)">(.+)<\/h5>/g;
const sectregexp = /<section\s+.+>/g;
const sectendregexp = /<\/section>/g
const imageregexp = /src="images\//g;

const titles: [RegExp, string][] = [
    [h2regexp, '\n# $2\n'],
    [h3regexp, '\n## $2\n'],
    [h4regexp, '\n### $2\n'],
    [h5regexp, '\n#### $2\n'],
]

const replaces: [RegExp, string][] = [
    [sectregexp, ''],
    [sectendregexp, ''],
    [imageregexp, 'src="../images/'],
    [/<span><\/span>/g, ''],
    [/<figure class="listing">/g, ''],
    [/<\/code>\n?<\/pre>\n?<\/figure>/g, '</code></pre>'],
    [/<pre class="source language-console"/g, '<pre class="language-bash"'],
    // [/<span style="font-weight: bold">\$<\/span>\s*/g, '']
    // [/(<code\s+.+>.*)<(\w+)>(.*<\/code>)/g, '$1&#60;$2&#62;$3']
    // [/<figure class="listing">\s*<pre\s+class="source language-console"><code>/g, '\n```bash\n'],
    // [/<\/code><\/pre>/g, '\n'],
    // [/<figure class="listing">\n?<pre class="source language-console"><code>(.+)<\/code><\/pre>\n?<\/figure>/g, '\n```bash\n$1\n```\n']
]

const xrefMap: Map<string, string> = new Map();
const sidebar: {}[] = [];

const cheerioOption = { decodeEntities: false, _useHtmlParser2: true, };
function processChapter(file: string, chapFolder: string, titlePrefix: string = '') {
    const folderPath = path.join(docfolder, chapFolder);
    if (!existsSync(folderPath)) {
        mkdirSync(folderPath, { recursive: true });
    }

    function processSubChapter(el: CheerioElement, subchap: number, toc: string[]) {
        function replaceAnchor(replace: string) {
            return (substring: string, ...args: any[]) => {
                const [p1, p2] = args;
                const newancher = p2.toLowerCase().replace(/\s/g, '-');
                xrefMap.set(`${file}#${p1}`, `/${chapFolder}/${subchap}.html#${newancher}`);
                return replace.replace('$2', p2);
            }
        }

        const md = path.join(folderPath, `${subchap}.md`);
        let html = cheerio.html(el, cheerioOption);
        titles.forEach(x => html = html.replace(x[0], replaceAnchor(x[1])))
        replaces.forEach(x => html = html.replace(x[0], x[1]));

        writeFileSync(md, html, { encoding: 'utf8' });
        toc.push(`/${chapFolder}/${subchap}`);
    }

    const fullpath = path.join(__dirname, '../book/', file)
    const html = fs.readFileSync(fullpath);
    const $ = cheerio.load(html, { decodeEntities: false, _useHtmlParser2: true });

    const title = $('title').text();
    const group = {
        title: `${titlePrefix}${title}`,
        path: `/${chapFolder}/`,
        // collapsable: false,
        children: []
    }
    sidebar.push(group);

    const introhtml = $('body .abstract').html() || $('body > section > p').toArray().map(x => cheerio.html(x, cheerioOption)).join('\n');
    const intro = `---\nnext: true\n---\n\n# ${title}\n${introhtml}`;
    writeFileSync(path.join(folderPath, 'index.md'), intro);

    $('aside.tip').prepend('<p class="custom-block-title">提示</p>').addClass('custom-block')
    $('aside.note').prepend('<p class="custom-block-title">提示</p>').addClass('custom-block tip')
    $('aside.warning').prepend('<p class="custom-block-title">警告</p>').addClass('custom-block')
    $('aside.caution').prepend('<p class="custom-block-title">注意</p>').addClass('custom-block warning')

    const sect1s = $('body > section > .sect1');
    sect1s.toArray().forEach((el, index) => processSubChapter(el, index + 1, group.children));

    xrefMap.set(file, `/${chapFolder}/index.html`);
}

function rewriteXRef(file: string) {
    let content = fs.readFileSync(file).toString();
    xrefMap.forEach((val, key) => {
        content = replaceAll(content, key, val);
    })
    writeFileSync(file, content);
}

function processPreface(file: string) {
    const fullpath = path.join(__dirname, '../book/', file)
    const html = fs.readFileSync(fullpath);
    const $ = cheerio.load(html, { decodeEntities: false, _useHtmlParser2: true });

    sidebar.push('/');

    $('body header').remove();
    const intro = `---\nnext: true\n---\n\n# ${$('title').text()}\n${$('body > section').html()}`;
    writeFileSync(path.join(docfolder, 'index.md'), intro);
}

const chapters = [
    'ch01-getting-started.xhtml',
    'ch02-git-basics-chapter.xhtml',
    'ch03-git-branching.xhtml',
    'ch04-git-on-the-server.xhtml',
    'ch05-distributed-git.xhtml',
    'ch06-github.xhtml',
    'ch07-git-tools.xhtml',
    'ch08-customizing-git.xhtml',
    'ch09-git-and-other-systems.xhtml',
    'ch10-git-internals.xhtml'
]

const appendices = [
    'A-git-in-other-environments.xhtml',
    'B-embedding-git-in-your-applications.xhtml',
    'C-git-commands.xhtml',
]

processPreface('_引言.xhtml');
// processChapter('_引言.xhtml', './');

chapters.forEach((file, idx) => {
    processChapter(file, `chapter-${idx + 1}`, `${idx + 1}. `)
});

appendices.forEach((file, idx) => {
    processChapter(file, `appendix-${file[0]}`, `附录 ${file[0]}. `);
})


glob('**/*.md', { cwd: docfolder }, (err, files) => {
    files.forEach(x => {
        rewriteXRef(path.join(docfolder, x));
    });
})

const vuepressConfig = {
    markdown: {
        //@ts-ignore
        extendMarkdown: md => {
            md.disable('lheading')
        }
    },
    title: 'Pro Git',
    description: 'Pro Git 第二版中文版',
    themeConfig: {
        sidebar
    }
}
const configString = `module.exports =${toSource(vuepressConfig)}`;
writeFileSync(path.join(docfolder, '.vuepress/config.js'), configString);
// console.log(sidebar);