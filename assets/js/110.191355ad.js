(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{540:function(t,e,i){"use strict";i.r(e);var a=i(28),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"搜索"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#搜索"}},[t._v("#")]),t._v(" 搜索")]),t._v(" "),i("p",[t._v("无论仓库里的代码量有多少，你经常需要查找一个函数是在哪里调用或者定义的，或者显示一个方法的变更历史。\nGit 提供了两个有用的工具来快速地从它的数据库中浏览代码和提交。\n我们来简单的看一下。")]),t._v(" "),i("h2",{attrs:{id:"git-grep"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-grep"}},[t._v("#")]),t._v(" Git Grep")]),t._v(" "),i("p",[t._v("Git 提供了一个 "),i("code",{staticClass:"literal"},[t._v("grep")]),t._v(" 命令，你可以很方便地从提交历史、工作目录、甚至索引中查找一个字符串或者正则表达式。\n我们用 Git 本身源代码的查找作为例子。")]),t._v(" "),i("p",[t._v("默认情况下 "),i("code",{staticClass:"literal"},[t._v("git grep")]),t._v(" 会查找你工作目录的文件。\n第一种变体是，你可以传递 "),i("code",{staticClass:"literal"},[t._v("-n")]),t._v(" 或 "),i("code",{staticClass:"literal"},[t._v("--line-number")]),t._v(" 选项数来输出 Git 找到的匹配行的行号。")]),t._v(" "),i("pre",{staticClass:"language-bash"},[i("code",[i("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git grep -n gmtime_r\n"),i("span",{staticStyle:{"font-weight":"bold"}},[t._v("compat/gmtime.c:3:#")]),t._v("undef gmtime_r\ncompat/gmtime.c:8:      return git_gmtime_r(timep, &result);\ncompat/gmtime.c:11:struct tm *git_gmtime_r(const time_t *timep, struct tm *result)\ncompat/gmtime.c:16:     ret = gmtime_r(timep, result);\ncompat/mingw.c:826:struct tm *gmtime_r(const time_t *timep, struct tm *result)\ncompat/mingw.h:206:struct tm *gmtime_r(const time_t *timep, struct tm *result);\ndate.c:482:             if (gmtime_r(&now, &now_tm))\ndate.c:545:             if (gmtime_r(&time, tm)) {\ndate.c:758:             /* gmtime_r() in match_digit() may have clobbered it */\ngit-compat-util.h:1138:struct tm *git_gmtime_r(const time_t *, struct tm *);\n"),i("span",{staticStyle:{"font-weight":"bold"}},[t._v("git-compat-util.h:1140:#")]),t._v("define gmtime_r git_gmtime_r")])]),t._v(" "),i("p",[t._v("除了上面的基本搜索命令外，"),i("code",{staticClass:"literal"},[t._v("git grep")]),t._v(" 还支持大量其它有趣的选项。")]),t._v(" "),i("p",[t._v("例如，若不想打印所有匹配的项，你可以使用 "),i("code",{staticClass:"literal"},[t._v("-c")]),t._v(" 或 "),i("code",{staticClass:"literal"},[t._v("--count")]),t._v(" 选项来让 "),i("code",{staticClass:"literal"},[t._v("git grep")]),t._v(" 输出概述的信息，\n其中仅包括那些包含匹配字符串的文件，以及每个文件中包含了多少个匹配。")]),t._v(" "),i("pre",{staticClass:"language-bash"},[i("code",[i("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git grep --count gmtime_r\ncompat/gmtime.c:4\ncompat/mingw.c:1\ncompat/mingw.h:1\ndate.c:3\ngit-compat-util.h:2")])]),t._v(" "),i("p",[t._v("如果你还关心搜索字符串的 "),i("strong",[t._v("上下文")]),t._v("，那么可以传入 "),i("code",{staticClass:"literal"},[t._v("-p")]),t._v(" 或 "),i("code",{staticClass:"literal"},[t._v("--show-function")]),t._v("\n选项来显示每一个匹配的字符串所在的方法或函数：")]),t._v(" "),i("pre",{staticClass:"language-bash"},[i("code",[i("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git grep -p gmtime_r *.c\ndate.c=static int match_multi_number(timestamp_t num, char c, const char *date,\ndate.c:         if (gmtime_r(&now, &now_tm))\ndate.c=static int match_digit(const char *date, struct tm *tm, int *offset, int *tm_gmt)\ndate.c:         if (gmtime_r(&time, tm)) {\ndate.c=int parse_date_basic(const char *date, timestamp_t *timestamp, int *offset)\ndate.c:         /* gmtime_r() in match_digit() may have clobbered it */")])]),t._v(" "),i("p",[t._v("如你所见，date.c 文件中的 "),i("code",{staticClass:"literal"},[t._v("match_multi_number")]),t._v(" 和 "),i("code",{staticClass:"literal"},[t._v("match_digit")]),t._v(" 两个函数都调用了 "),i("code",{staticClass:"literal"},[t._v("gmtime_r")]),t._v(" 例程\n（第三个显示的匹配只是注释中的字符串）。")]),t._v(" "),i("p",[t._v("你还可以使用 "),i("code",{staticClass:"literal"},[t._v("--and")]),t._v(" 标志来查看复杂的字符串组合，它确保了多个匹配出现在同一文本行中。\n比如，我们要查看在旧版本 1.8.0 的 Git 代码库中定义了常量名包含 “LINK” 或者 “BUF_MAX” 这两个字符串的行\n（这里也用到了 "),i("code",{staticClass:"literal"},[t._v("--break")]),t._v(" 和 "),i("code",{staticClass:"literal"},[t._v("--heading")]),t._v(" 选项来使输出更加容易阅读）。")]),t._v(" "),i("pre",{staticClass:"language-bash"},[i("code",[i("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git grep --break --heading "),i("span",{staticStyle:{"font-weight":"bold","font-style":"italic"}},[t._v("\\")]),t._v("\n    -n -e "),i("span",{staticStyle:{"font-style":"italic"}},[t._v("'#define'")]),t._v(" --and "),i("span",{staticStyle:{"font-weight":"bold","font-style":"italic"}},[t._v("\\(")]),t._v(" -e LINK -e BUF_MAX "),i("span",{staticStyle:{"font-weight":"bold","font-style":"italic"}},[t._v("\\)")]),t._v(" v1.8.0\nv1.8.0:builtin/index-pack.c\n62:#define FLAG_LINK (1u<<20)\n\nv1.8.0:cache.h\n73:#define S_IFGITLINK  0160000\n74:#define S_ISGITLINK(m)       (((m) & S_IFMT) == S_IFGITLINK)\n\nv1.8.0:environment.c\n54:#define OBJECT_CREATION_MODE OBJECT_CREATION_USES_HARDLINKS\n\nv1.8.0:strbuf.c\n326:#define STRBUF_MAXLINK (2*PATH_MAX)\n\nv1.8.0:symlinks.c\n53:#define FL_SYMLINK  (1 << 2)\n\nv1.8.0:zlib.c\n"),i("span",{staticStyle:{"font-weight":"bold"}},[t._v("30:/* #")]),t._v("define ZLIB_BUF_MAX ((uInt)-1) */\n31:#define ZLIB_BUF_MAX ((uInt) 1024 * 1024 * 1024) /* 1GB */")])]),t._v(" "),i("p",[t._v("相比于一些常用的搜索命令比如 "),i("code",{staticClass:"literal"},[t._v("grep")]),t._v(" 和 "),i("code",{staticClass:"literal"},[t._v("ack")]),t._v("，"),i("code",{staticClass:"literal"},[t._v("git grep")]),t._v(" 命令有一些的优点。\n第一就是速度非常快，第二是你不仅仅可以可以搜索工作目录，还可以搜索任意的 Git 树。\n在上一个例子中，我们在一个旧版本的 Git 源代码中查找，而不是当前检出的版本。")]),t._v(" "),i("h2",{attrs:{id:"git-日志搜索"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-日志搜索"}},[t._v("#")]),t._v(" Git 日志搜索")]),t._v(" "),i("p",[t._v("或许你不想知道某一项在 "),i("strong",[t._v("哪里")]),t._v(" ，而是想知道是什么 "),i("strong",[t._v("时候")]),t._v(" 存在或者引入的。\n"),i("code",{staticClass:"literal"},[t._v("git log")]),t._v(" 命令有许多强大的工具可以通过提交信息甚至是 diff 的内容来找到某个特定的提交。")]),t._v(" "),i("p",[t._v("例如，如果我们想找到 "),i("code",{staticClass:"literal"},[t._v("ZLIB_BUF_MAX")]),t._v(" 常量是什么时候引入的，我们可以使用 "),i("code",{staticClass:"literal"},[t._v("-S")]),t._v(" 选项\n（在 Git 中俗称“鹤嘴锄（pickaxe）”选项）来显示新增和删除该字符串的提交。")]),t._v(" "),i("pre",{staticClass:"language-bash"},[i("code",[i("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git log -S ZLIB_BUF_MAX --oneline\ne01503b zlib: allow feeding more than 4GB in one go\nef49a7a zlib: zlib can only process 4GB at a time")])]),t._v(" "),i("p",[t._v("如果我们查看这些提交的 diff，我们可以看到在 "),i("code",{staticClass:"literal"},[t._v("ef49a7a")]),t._v(" 这个提交引入了常量，并且在 "),i("code",{staticClass:"literal"},[t._v("e01503b")]),t._v(" 这个提交中被修改了。")]),t._v(" "),i("p",[t._v("如果你希望得到更精确的结果，你可以使用 "),i("code",{staticClass:"literal"},[t._v("-G")]),t._v(" 选项来使用正则表达式搜索。")]),t._v(" "),i("h3",{attrs:{id:"行日志搜索"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#行日志搜索"}},[t._v("#")]),t._v(" 行日志搜索")]),t._v(" "),i("p",[t._v("行日志搜索是另一个相当高级并且有用的日志搜索功能。\n在 "),i("code",{staticClass:"literal"},[t._v("git log")]),t._v(" 后加上 "),i("code",{staticClass:"literal"},[t._v("-L")]),t._v(" 选项即可调用，它可以展示代码中一行或者一个函数的历史。")]),t._v(" "),i("p",[t._v("例如，假设我们想查看 "),i("code",{staticClass:"literal"},[t._v("zlib.c")]),t._v(" 文件中`git_deflate_bound` 函数的每一次变更，\n我们可以执行 "),i("code",{staticClass:"literal"},[t._v("git log -L :git_deflate_bound:zlib.c")]),t._v("。\nGit 会尝试找出这个函数的范围，然后查找历史记录，并且显示从函数创建之后一系列变更对应的补丁。")]),t._v(" "),i("pre",{staticClass:"language-bash"},[i("code",[i("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git log -L :git_deflate_bound:zlib.c\ncommit ef49a7a0126d64359c974b4b3b71d7ad42ee3bca\nAuthor: Junio C Hamano <gitster@pobox.com>\nDate:   Fri Jun 10 11:52:15 2011 -0700\n\n    zlib: zlib can only process 4GB at a time\n\ndiff --git a/zlib.c b/zlib.c\n--- a/zlib.c\n+++ b/zlib.c\n@@ -85,5 +130,5 @@\n-unsigned long git_deflate_bound(z_streamp strm, unsigned long size)\n+unsigned long git_deflate_bound(git_zstream *strm, unsigned long size)\n {\n-       return deflateBound(strm, size);\n+       return deflateBound(&strm->z, size);\n }\n\n\ncommit 225a6f1068f71723a910e8565db4e252b3ca21fa\nAuthor: Junio C Hamano <gitster@pobox.com>\nDate:   Fri Jun 10 11:18:17 2011 -0700\n\n    zlib: wrap deflateBound() too\n\ndiff --git a/zlib.c b/zlib.c\n--- a/zlib.c\n+++ b/zlib.c\n@@ -81,0 +85,5 @@\n+unsigned long git_deflate_bound(z_streamp strm, unsigned long size)\n+{\n+       return deflateBound(strm, size);\n+}\n+")])]),t._v(" "),i("p",[t._v("如果 Git 无法计算出如何匹配你代码中的函数或者方法，你可以提供一个正则表达式。\n例如，这个命令和上面的是等同的："),i("code",{staticClass:"literal"},[t._v("git log -L '/unsigned long git_deflate_bound/',/^}/:zlib.c")]),t._v("。\n你也可以提供单行或者一个范围的行号来获得相同的输出。")])])}),[],!1,null,null,null);e.default=n.exports}}]);