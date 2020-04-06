(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{406:function(t,s,a){t.exports=a.p+"assets/img/reset-workflow.7d8a0685.png"},407:function(t,s,a){t.exports=a.p+"assets/img/reset-ex1.2af73d25.png"},408:function(t,s,a){t.exports=a.p+"assets/img/reset-ex2.4c5377d9.png"},409:function(t,s,a){t.exports=a.p+"assets/img/reset-ex3.e7356b44.png"},410:function(t,s,a){t.exports=a.p+"assets/img/reset-ex4.e961ab64.png"},411:function(t,s,a){t.exports=a.p+"assets/img/reset-ex5.403abc40.png"},412:function(t,s,a){t.exports=a.p+"assets/img/reset-ex6.19922894.png"},413:function(t,s,a){t.exports=a.p+"assets/img/reset-start.9f172c68.png"},414:function(t,s,a){t.exports=a.p+"assets/img/reset-soft.f7eaaba7.png"},415:function(t,s,a){t.exports=a.p+"assets/img/reset-mixed.db24d5d6.png"},416:function(t,s,a){t.exports=a.p+"assets/img/reset-hard.9a4df6ec.png"},417:function(t,s,a){t.exports=a.p+"assets/img/reset-path1.41e7c15f.png"},418:function(t,s,a){t.exports=a.p+"assets/img/reset-path2.6dfef937.png"},419:function(t,s,a){t.exports=a.p+"assets/img/reset-path3.5d460d4a.png"},420:function(t,s,a){t.exports=a.p+"assets/img/reset-squash-r1.51adb0c5.png"},421:function(t,s,a){t.exports=a.p+"assets/img/reset-squash-r2.2da8d827.png"},422:function(t,s,a){t.exports=a.p+"assets/img/reset-squash-r3.2a3ce36e.png"},423:function(t,s,a){t.exports=a.p+"assets/img/reset-checkout.0c12d0a8.png"},542:function(t,s,a){"use strict";a.r(s);var e=a(28),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"重置揭密"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重置揭密"}},[t._v("#")]),t._v(" 重置揭密")]),t._v(" "),e("p",[t._v("在继续了解更专业的工具前，我们先探讨一下 Git 的 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 和 "),e("code",{staticClass:"literal"},[t._v("checkout")]),t._v(" 命令。\n在初遇的 Git 命令中，这两个是最让人困惑的。\n它们能做很多事情，所以看起来我们很难真正地理解并恰当地运用它们。\n针对这一点，我们先来做一个简单的比喻。")]),t._v(" "),e("h2",{attrs:{id:"三棵树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三棵树"}},[t._v("#")]),t._v(" 三棵树")]),t._v(" "),e("p",[t._v("理解 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 和 "),e("code",{staticClass:"literal"},[t._v("checkout")]),t._v(" 的最简方法，就是以 Git 的思维框架（将其作为内容管理器）来管理三棵不同的树。\n“树” 在我们这里的实际意思是 “文件的集合”，而不是指特定的数据结构。\n（在某些情况下索引看起来并不像一棵树，不过我们现在的目的是用简单的方式思考它。）")]),t._v(" "),e("p",[t._v("Git 作为一个系统，是以它的一般操作来管理并操纵这三棵树的：")]),t._v(" "),e("div",{staticClass:"table"},[e("div",{staticClass:"content"},[e("table",{staticClass:"table table-framed-topbot table-grid-rows",staticStyle:{width:"100%"}},[e("colgroup",[e("col"),t._v(" "),e("col")]),t._v(" "),e("thead",[e("tr",[e("th",[t._v("树")]),t._v(" "),e("th",[t._v("用途")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("p",[t._v("HEAD")])]),t._v(" "),e("td",[e("p",[t._v("上一次提交的快照，下一次提交的父结点")])])]),t._v(" "),e("tr",[e("td",[e("p",[t._v("Index")])]),t._v(" "),e("td",[e("p",[t._v("预期的下一次提交的快照")])])]),t._v(" "),e("tr",[e("td",[e("p",[t._v("Working Directory")])]),t._v(" "),e("td",[e("p",[t._v("沙盒")])])])])])])]),t._v(" "),e("h3",{attrs:{id:"head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[t._v("#")]),t._v(" HEAD")]),t._v(" "),e("p",[t._v("HEAD 是当前分支引用的指针，它总是指向该分支上的最后一次提交。\n这表示 HEAD 将是下一次提交的父结点。\n通常，理解 HEAD 的最简方式，就是将它看做 "),e("strong",[t._v("该分支上的最后一次提交")]),t._v(" 的快照。")]),t._v(" "),e("p",[t._v("其实，查看快照的样子很容易。\n下例就显示了 HEAD 快照实际的目录列表，以及其中每个文件的 SHA-1 校验和：")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git cat-file -p HEAD\ntree cfda3bf379e4f8dba8717dee55aab78aef7f4daf\nauthor Scott Chacon  1301511835 -0700\ncommitter Scott Chacon  1301511835 -0700\n\ninitial commit\n\n"),e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git ls-tree -r HEAD\n100644 blob a906cb2a4a904a152...   README\n100644 blob 8f94139338f9404f2...   Rakefile\n040000 tree 99f1a6d12cb4b6f19...   lib")])]),t._v(" "),e("p",[t._v("Git 的 "),e("code",{staticClass:"literal"},[t._v("cat-file")]),t._v(" 和 "),e("code",{staticClass:"literal"},[t._v("ls-tree")]),t._v(" 是底层命令，它们一般用于底层工作，在日常工作中并不使用。\n不过它们能帮助我们了解到底发生了什么。")]),t._v(" "),e("h3",{attrs:{id:"索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),e("p",[t._v("索引是你的 "),e("strong",[t._v("预期的下一次提交")]),t._v("。\n我们也会将这个概念引用为 Git 的“暂存区”，这就是当你运行 "),e("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 时 Git 看起来的样子。")]),t._v(" "),e("p",[t._v("Git 将上一次检出到工作目录中的所有文件填充到索引区，它们看起来就像最初被检出时的样子。\n之后你会将其中一些文件替换为新版本，接着通过 "),e("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 将它们转换为树来用作新的提交。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git ls-files -s\n100644 a906cb2a4a904a152e80877d4088654daad0c859 0\tREADME\n100644 8f94139338f9404f26296befa88755fc2598c289 0\tRakefile\n100644 47c6340d6459e05787f644c2447d2595f5d3a54b 0\tlib/simplegit.rb")])]),t._v(" "),e("p",[t._v("再说一次，我们在这里又用到了 "),e("code",{staticClass:"literal"},[t._v("git ls-files")]),t._v(" 这个幕后的命令，它会显示出索引当前的样子。")]),t._v(" "),e("p",[t._v("确切来说，索引在技术上并非树结构，它其实是以扁平的清单实现的。不过对我们而言，把它当做树就够了。")]),t._v(" "),e("h3",{attrs:{id:"工作目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作目录"}},[t._v("#")]),t._v(" 工作目录")]),t._v(" "),e("p",[t._v("最后，你就有了自己的 "),e("strong",[t._v("工作目录")]),t._v("（通常也叫 "),e("strong",[t._v("工作区")]),t._v("）。\n另外两棵树以一种高效但并不直观的方式，将它们的内容存储在 "),e("code",{staticClass:"literal"},[t._v(".git")]),t._v(" 文件夹中。\n工作目录会将它们解包为实际的文件以便编辑。\n你可以把工作目录当做 "),e("strong",[t._v("沙盒")]),t._v("。在你将修改提交到暂存区并记录到历史之前，可以随意更改。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" tree\n.\n├── README\n├── Rakefile\n└── lib\n    └── simplegit.rb\n\n1 directory, 3 files")])]),t._v(" "),e("h2",{attrs:{id:"工作流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),e("p",[t._v("经典的 Git 工作流程是通过操纵这三个区域来以更加连续的状态记录项目快照的。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(406),alt:"reset workflow"}})])]),t._v(" "),e("p",[t._v("让我们来可视化这个过程：假设我们进入到一个新目录，其中有一个文件。\n我们称其为该文件的 "),e("strong",[t._v("v1")]),t._v(" 版本，将它标记为蓝色。\n现在运行 "),e("code",{staticClass:"literal"},[t._v("git init")]),t._v("，这会创建一个 Git 仓库，其中的 HEAD 引用指向未创建的 "),e("code",{staticClass:"literal"},[t._v("master")]),t._v(" 分支。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(407),alt:"reset ex1"}})])]),t._v(" "),e("p",[t._v("此时，只有工作目录有内容。")]),t._v(" "),e("p",[t._v("现在我们想要提交这个文件，所以用 "),e("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 来获取工作目录中的内容，并将其复制到索引中。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(408),alt:"reset ex2"}})])]),t._v(" "),e("p",[t._v("接着运行 "),e("code",{staticClass:"literal"},[t._v("git commit")]),t._v("，它会取得索引中的内容并将它保存为一个永久的快照，\n然后创建一个指向该快照的提交对象，最后更新 "),e("code",{staticClass:"literal"},[t._v("master")]),t._v(" 来指向本次提交。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(409),alt:"reset ex3"}})])]),t._v(" "),e("p",[t._v("此时如果我们运行 "),e("code",{staticClass:"literal"},[t._v("git status")]),t._v("，会发现没有任何改动，因为现在三棵树完全相同。")]),t._v(" "),e("p",[t._v("现在我们想要对文件进行修改然后提交它。\n我们将会经历同样的过程；首先在工作目录中修改文件。\n我们称其为该文件的 "),e("strong",[t._v("v2")]),t._v(" 版本，并将它标记为红色。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(410),alt:"reset ex4"}})])]),t._v(" "),e("p",[t._v("如果现在运行 "),e("code",{staticClass:"literal"},[t._v("git status")]),t._v("，我们会看到文件显示在 “Changes not staged for commit”\n下面并被标记为红色，因为该条目在索引与工作目录之间存在不同。\n接着我们运行 "),e("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 来将它暂存到索引中。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(411),alt:"reset ex5"}})])]),t._v(" "),e("p",[t._v("此时，由于索引和 HEAD 不同，若运行 "),e("code",{staticClass:"literal"},[t._v("git status")]),t._v(" 的话就会看到 “Changes to be committed” 下的该文件变为绿色\n——也就是说，现在预期的下一次提交与上一次提交不同。\n最后，我们运行 "),e("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 来完成提交。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(412),alt:"reset ex6"}})])]),t._v(" "),e("p",[t._v("现在运行 "),e("code",{staticClass:"literal"},[t._v("git status")]),t._v(" 会没有输出，因为三棵树又变得相同了。")]),t._v(" "),e("p",[t._v("切换分支或克隆的过程也类似。\n当检出一个分支时，它会修改 "),e("strong",[t._v("HEAD")]),t._v(" 指向新的分支引用，将 "),e("strong",[t._v("索引")]),t._v(" 填充为该次提交的快照，\n然后将 "),e("strong",[t._v("索引")]),t._v(" 的内容复制到 "),e("strong",[t._v("工作目录")]),t._v(" 中。")]),t._v(" "),e("h2",{attrs:{id:"重置的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重置的作用"}},[t._v("#")]),t._v(" 重置的作用")]),t._v(" "),e("p",[t._v("在以下情景中观察 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 命令会更有意义。")]),t._v(" "),e("p",[t._v("为了演示这些例子，假设我们再次修改了 "),e("code",{staticClass:"literal"},[t._v("file.txt")]),t._v(" 文件并第三次提交它。\n现在的历史看起来是这样的：")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(413),alt:"reset start"}})])]),t._v(" "),e("p",[t._v("让我们跟着 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 看看它都做了什么。\n它以一种简单可预见的方式直接操纵这三棵树。\n它做了三个基本操作。")]),t._v(" "),e("h3",{attrs:{id:"第-1-步：移动-head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-1-步：移动-head"}},[t._v("#")]),t._v(" 第 1 步：移动 HEAD")]),t._v(" "),e("p",[e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 做的第一件事是移动 HEAD 的指向。\n这与改变 HEAD 自身不同（"),e("code",{staticClass:"literal"},[t._v("checkout")]),t._v(" 所做的）；"),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 移动 HEAD 指向的分支。\n这意味着如果 HEAD 设置为 "),e("code",{staticClass:"literal"},[t._v("master")]),t._v(" 分支（例如，你正在 "),e("code",{staticClass:"literal"},[t._v("master")]),t._v(" 分支上），\n运行 "),e("code",{staticClass:"literal"},[t._v("git reset 9e5e6a4")]),t._v(" 将会使 "),e("code",{staticClass:"literal"},[t._v("master")]),t._v(" 指向 "),e("code",{staticClass:"literal"},[t._v("9e5e6a4")]),t._v("。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(414),alt:"reset soft"}})])]),t._v(" "),e("p",[t._v("无论你调用了何种形式的带有一个提交的 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v("，它首先都会尝试这样做。\n使用 "),e("code",{staticClass:"literal"},[t._v("reset --soft")]),t._v("，它将仅仅停在那儿。")]),t._v(" "),e("p",[t._v("现在看一眼上图，理解一下发生的事情：它本质上是撤销了上一次 "),e("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 命令。\n当你在运行 "),e("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 时，Git 会创建一个新的提交，并移动 HEAD 所指向的分支来使其指向该提交。\n当你将它 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 回 "),e("code",{staticClass:"literal"},[t._v("HEAD~")]),t._v("（HEAD 的父结点）时，其实就是把该分支移动回原来的位置，而不会改变索引和工作目录。\n现在你可以更新索引并再次运行 "),e("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 来完成 "),e("code",{staticClass:"literal"},[t._v("git commit --amend")]),t._v(" 所要做的事情了（见 "),e("a",{staticClass:"xref",attrs:{id:"xref-_git_amend",href:"#_git_amend"}},[t._v("修改最后一次提交")]),t._v("）。")]),t._v(" "),e("h3",{attrs:{id:"第-2-步：更新索引（-mixed）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-2-步：更新索引（-mixed）"}},[t._v("#")]),t._v(" 第 2 步：更新索引（--mixed）")]),t._v(" "),e("p",[t._v("注意，如果你现在运行 "),e("code",{staticClass:"literal"},[t._v("git status")]),t._v(" 的话，就会看到新的 HEAD 和以绿色标出的它和索引之间的区别。")]),t._v(" "),e("p",[t._v("接下来，"),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 会用 HEAD 指向的当前快照的内容来更新索引。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(415),alt:"reset mixed"}})])]),t._v(" "),e("p",[t._v("如果指定 "),e("code",{staticClass:"literal"},[t._v("--mixed")]),t._v(" 选项，"),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 将会在这时停止。\n这也是默认行为，所以如果没有指定任何选项（在本例中只是 "),e("code",{staticClass:"literal"},[t._v("git reset HEAD~")]),t._v("），这就是命令将会停止的地方。")]),t._v(" "),e("p",[t._v("现在再看一眼上图，理解一下发生的事情：它依然会撤销一上次 "),e("code",{staticClass:"literal"},[t._v("提交")]),t._v("，但还会 "),e("em",[t._v("取消暂存")]),t._v(" 所有的东西。\n于是，我们回滚到了所有 "),e("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 和 "),e("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 的命令执行之前。")]),t._v(" "),e("h3",{attrs:{id:"第-3-步：更新工作目录（-hard）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-3-步：更新工作目录（-hard）"}},[t._v("#")]),t._v(" 第 3 步：更新工作目录（--hard）")]),t._v(" "),e("p",[e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 要做的的第三件事情就是让工作目录看起来像索引。\n如果使用 "),e("code",{staticClass:"literal"},[t._v("--hard")]),t._v(" 选项，它将会继续这一步。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(416),alt:"reset hard"}})])]),t._v(" "),e("p",[t._v("现在让我们回想一下刚才发生的事情。\n你撤销了最后的提交、"),e("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 和 "),e("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 命令 "),e("strong",[t._v("以及")]),t._v(" 工作目录中的所有工作。")]),t._v(" "),e("p",[t._v("必须注意，"),e("code",{staticClass:"literal"},[t._v("--hard")]),t._v(" 标记是 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 命令唯一的危险用法，它也是 Git 会真正地销毁数据的仅有的几个操作之一。\n其他任何形式的 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 调用都可以轻松撤消，但是 "),e("code",{staticClass:"literal"},[t._v("--hard")]),t._v(" 选项不能，因为它强制覆盖了工作目录中的文件。\n在这种特殊情况下，我们的 Git 数据库中的一个提交内还留有该文件的 "),e("strong",[t._v("v3")]),t._v(" 版本，\n我们可以通过 "),e("code",{staticClass:"literal"},[t._v("reflog")]),t._v(" 来找回它。但是若该文件还未提交，Git 仍会覆盖它从而导致无法恢复。")]),t._v(" "),e("h3",{attrs:{id:"回顾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),e("p",[e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 命令会以特定的顺序重写这三棵树，在你指定以下选项时停止：")]),t._v(" "),e("div",{staticClass:"ordered-list arabic"},[e("ol",{staticClass:"arabic"},[e("li",[e("span",{staticClass:"principal"},[t._v("移动 HEAD 分支的指向 "),e("em",[t._v("（若指定了 "),e("code",{staticClass:"literal"},[t._v("--soft")]),t._v("，则到此停止）")])])]),t._v(" "),e("li",[e("span",{staticClass:"principal"},[t._v("使索引看起来像 HEAD "),e("em",[t._v("（若未指定 "),e("code",{staticClass:"literal"},[t._v("--hard")]),t._v("，则到此停止）")])])]),t._v(" "),e("li",[e("span",{staticClass:"principal"},[t._v("使工作目录看起来像索引")])])])]),t._v(" "),e("h2",{attrs:{id:"通过路径来重置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过路径来重置"}},[t._v("#")]),t._v(" 通过路径来重置")]),t._v(" "),e("p",[t._v("前面讲述了 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 基本形式的行为，不过你还可以给它提供一个作用路径。\n若指定了一个路径，"),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 将会跳过第 1 步，并且将它的作用范围限定为指定的文件或文件集合。\n这样做自然有它的道理，因为 HEAD 只是一个指针，你无法让它同时指向两个提交中各自的一部分。\n不过索引和工作目录 "),e("em",[t._v("可以部分更新")]),t._v("，所以重置会继续进行第 2、3 步。")]),t._v(" "),e("p",[t._v("现在，假如我们运行 "),e("code",{staticClass:"literal"},[t._v("git reset file.txt")]),t._v("\n（这其实是 "),e("code",{staticClass:"literal"},[t._v("git reset --mixed HEAD file.txt")]),t._v(" 的简写形式，因为你既没有指定一个提交的\nSHA-1 或分支，也没有指定 "),e("code",{staticClass:"literal"},[t._v("--soft")]),t._v(" 或 "),e("code",{staticClass:"literal"},[t._v("--hard")]),t._v("），它会：")]),t._v(" "),e("div",{staticClass:"ordered-list arabic"},[e("ol",{staticClass:"arabic"},[e("li",[e("span",{staticClass:"principal"},[t._v("移动 HEAD 分支的指向 "),e("em",[t._v("（已跳过）")])])]),t._v(" "),e("li",[e("span",{staticClass:"principal"},[t._v("让索引看起来像 HEAD "),e("em",[t._v("（到此处停止）")])])])])]),t._v(" "),e("p",[t._v("所以它本质上只是将 "),e("code",{staticClass:"literal"},[t._v("file.txt")]),t._v(" 从 HEAD 复制到索引中。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(417),alt:"reset path1"}})])]),t._v(" "),e("p",[t._v("它还有 "),e("em",[t._v("取消暂存文件")]),t._v(" 的实际效果。\n如果我们查看该命令的示意图，然后再想想 "),e("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 所做的事，就会发现它们正好相反。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(418),alt:"reset path2"}})])]),t._v(" "),e("p",[t._v("这就是为什么 "),e("code",{staticClass:"literal"},[t._v("git status")]),t._v(" 命令的输出会建议运行此命令来取消暂存一个文件。\n（查看 "),e("a",{staticClass:"xref",attrs:{id:"xref--ch02-git-basics-chapter--_unstaging",href:"/chapter-2/4.html#取消暂存的文件"}},[t._v("取消暂存的文件")]),t._v(" 来了解更多。）")]),t._v(" "),e("p",[t._v("我们可以不让 Git 从 HEAD 拉取数据，而是通过具体指定一个提交来拉取该文件的对应版本。\n我们只需运行类似于 "),e("code",{staticClass:"literal"},[t._v("git reset eb43bf file.txt")]),t._v(" 的命令即可。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(419),alt:"reset path3"}})])]),t._v(" "),e("p",[t._v("它其实做了同样的事情，也就是把工作目录中的文件恢复到 "),e("strong",[t._v("v1")]),t._v(" 版本，运行 "),e("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 添加它，\n然后再将它恢复到 "),e("strong",[t._v("v3")]),t._v(" 版本（只是不用真的过一遍这些步骤）。\n如果我们现在运行 "),e("code",{staticClass:"literal"},[t._v("git commit")]),t._v("，它就会记录一条“将该文件恢复到 "),e("strong",[t._v("v1")]),t._v(" 版本”的更改，\n尽管我们并未在工作目录中真正地再次拥有它。")]),t._v(" "),e("p",[t._v("还有一点同 "),e("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 一样，就是 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 命令也可以接受一个 "),e("code",{staticClass:"literal"},[t._v("--patch")]),t._v(" 选项来一块一块地取消暂存的内容。\n这样你就可以根据选择来取消暂存或恢复内容了。")]),t._v(" "),e("h2",{attrs:{id:"压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[t._v("#")]),t._v(" 压缩")]),t._v(" "),e("p",[t._v("我们来看看如何利用这种新的功能来做一些有趣的事情——压缩提交。")]),t._v(" "),e("p",[t._v("假设你的一系列提交信息中有 “oops.”“WIP” 和 “forgot this file”，\n聪明的你就能使用 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 来轻松快速地将它们压缩成单个提交，也显出你的聪明。\n（"),e("a",{staticClass:"xref",attrs:{id:"xref-_squashing",href:"#_squashing"}},[t._v("压缩提交")]),t._v(" 展示了另一种方式，不过在本例中用 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 更简单。）")]),t._v(" "),e("p",[t._v("假设你有一个项目，第一次提交中有一个文件，第二次提交增加了一个新的文件并修改了第一个文件，第三次提交再次修改了第一个文件。\n由于第二次提交是一个未完成的工作，因此你想要压缩它。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(420),alt:"reset squash r1"}})])]),t._v(" "),e("p",[t._v("那么可以运行 "),e("code",{staticClass:"literal"},[t._v("git reset --soft HEAD~2")]),t._v(" 来将 HEAD 分支移动到一个旧一点的提交上（即你想要保留的最近的提交）：")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(421),alt:"reset squash r2"}})])]),t._v(" "),e("p",[t._v("然后只需再次运行 "),e("code",{staticClass:"literal"},[t._v("git commit")]),t._v("：")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(422),alt:"reset squash r3"}})])]),t._v(" "),e("p",[t._v("现在你可以查看可到达的历史，即将会推送的历史，现在看起来有个 v1 版 "),e("code",{staticClass:"literal"},[t._v("file-a.txt")]),t._v(" 的提交，\n接着第二个提交将 "),e("code",{staticClass:"literal"},[t._v("file-a.txt")]),t._v(" 修改成了 v3 版并增加了 "),e("code",{staticClass:"literal"},[t._v("file-b.txt")]),t._v("。\n包含 v2 版本的文件已经不在历史中了。")]),t._v(" "),e("h2",{attrs:{id:"检出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检出"}},[t._v("#")]),t._v(" 检出")]),t._v(" "),e("p",[t._v("最后，你大概还想知道 "),e("code",{staticClass:"literal"},[t._v("checkout")]),t._v(" 和 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 之间的区别。\n和 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 一样，"),e("code",{staticClass:"literal"},[t._v("checkout")]),t._v(" 也操纵三棵树，不过它有一点不同，这取决于你是否传给该命令一个文件路径。")]),t._v(" "),e("h3",{attrs:{id:"不带路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不带路径"}},[t._v("#")]),t._v(" 不带路径")]),t._v(" "),e("p",[t._v("运行 "),e("code",{staticClass:"literal"},[t._v("git checkout [branch]")]),t._v(" 与运行 "),e("code",{staticClass:"literal"},[t._v("git reset --hard [branch]")]),t._v(" 非常相似，它会更新所有三棵树使其看起来像 "),e("code",{staticClass:"literal"},[t._v("[branch]")]),t._v("，不过有两点重要的区别。")]),t._v(" "),e("p",[t._v("首先不同于 "),e("code",{staticClass:"literal"},[t._v("reset --hard")]),t._v("，"),e("code",{staticClass:"literal"},[t._v("checkout")]),t._v(" 对工作目录是安全的，它会通过检查来确保不会将已更改的文件弄丢。\n其实它还更聪明一些。它会在工作目录中先试着简单合并一下，这样所有_还未修改过的_文件都会被更新。\n而 "),e("code",{staticClass:"literal"},[t._v("reset --hard")]),t._v(" 则会不做检查就全面地替换所有东西。")]),t._v(" "),e("p",[t._v("第二个重要的区别是 "),e("code",{staticClass:"literal"},[t._v("checkout")]),t._v(" 如何更新 HEAD。\n"),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 会移动 HEAD 分支的指向，而 "),e("code",{staticClass:"literal"},[t._v("checkout")]),t._v(" 只会移动 HEAD 自身来指向另一个分支。")]),t._v(" "),e("p",[t._v("例如，假设我们有 "),e("code",{staticClass:"literal"},[t._v("master")]),t._v(" 和 "),e("code",{staticClass:"literal"},[t._v("develop")]),t._v(" 分支，它们分别指向不同的提交；我们现在在 "),e("code",{staticClass:"literal"},[t._v("develop")]),t._v(" 上（所以 HEAD 指向它）。\n如果我们运行 "),e("code",{staticClass:"literal"},[t._v("git reset master")]),t._v("，那么 "),e("code",{staticClass:"literal"},[t._v("develop")]),t._v(" 自身现在会和 "),e("code",{staticClass:"literal"},[t._v("master")]),t._v(" 指向同一个提交。\n而如果我们运行 "),e("code",{staticClass:"literal"},[t._v("git checkout master")]),t._v(" 的话，"),e("code",{staticClass:"literal"},[t._v("develop")]),t._v(" 不会移动，HEAD 自身会移动。\n现在 HEAD 将会指向 "),e("code",{staticClass:"literal"},[t._v("master")]),t._v("。")]),t._v(" "),e("p",[t._v("所以，虽然在这两种情况下我们都移动 HEAD 使其指向了提交 A，但_做法_是非常不同的。\n"),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 会移动 HEAD 分支的指向，而 "),e("code",{staticClass:"literal"},[t._v("checkout")]),t._v(" 则移动 HEAD 自身。")]),t._v(" "),e("figure",{staticClass:"image"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:a(423),alt:"reset checkout"}})])]),t._v(" "),e("h3",{attrs:{id:"带路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#带路径"}},[t._v("#")]),t._v(" 带路径")]),t._v(" "),e("p",[t._v("运行 "),e("code",{staticClass:"literal"},[t._v("checkout")]),t._v(" 的另一种方式就是指定一个文件路径，这会像 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 一样不会移动 HEAD。\n它就像 "),e("code",{staticClass:"literal"},[t._v("git reset [branch] file")]),t._v(" 那样用该次提交中的那个文件来更新索引，但是它也会覆盖工作目录中对应的文件。\n它就像是 "),e("code",{staticClass:"literal"},[t._v("git reset --hard [branch] file")]),t._v("（如果 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 允许你这样运行的话），\n这样对工作目录并不安全，它也不会移动 HEAD。")]),t._v(" "),e("p",[t._v("此外，同 "),e("code",{staticClass:"literal"},[t._v("git reset")]),t._v(" 和 "),e("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 一样，"),e("code",{staticClass:"literal"},[t._v("checkout")]),t._v(" 也接受一个 "),e("code",{staticClass:"literal"},[t._v("--patch")]),t._v(" 选项，允许你根据选择一块一块地恢复文件内容。")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("希望你现在熟悉并理解了 "),e("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 命令，不过关于它和 "),e("code",{staticClass:"literal"},[t._v("checkout")]),t._v(" 之间的区别，你可能还是会有点困惑，毕竟不太可能记住不同调用的所有规则。")]),t._v(" "),e("p",[t._v("下面的速查表列出了命令对树的影响。\n“HEAD” 一列中的 “REF” 表示该命令移动了 HEAD 指向的分支引用，而 “HEAD” 则表示只移动了 HEAD 自身。\n特别注意 "),e("em",[t._v("WD Safe?")]),t._v(" 一列——如果它标记为 "),e("strong",[t._v("NO")]),t._v("，那么运行该命令之前请考虑一下。")]),t._v(" "),e("div",{staticClass:"table"},[e("div",{staticClass:"content"},[e("table",{staticClass:"table table-framed-topbot table-grid-rows",staticStyle:{width:"100%"}},[e("colgroup",[e("col"),t._v(" "),e("col"),t._v(" "),e("col"),t._v(" "),e("col"),t._v(" "),e("col")]),t._v(" "),e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("HEAD")]),t._v(" "),e("th",[t._v("Index")]),t._v(" "),e("th",[t._v("Workdir")]),t._v(" "),e("th",[t._v("WD Safe?")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("p",[e("strong",[t._v("Commit Level")])])]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("p",[e("code",{staticClass:"literal"},[t._v("reset --soft [commit]")])])]),t._v(" "),e("td",[e("p",[t._v("REF")])]),t._v(" "),e("td",[e("p",[t._v("NO")])]),t._v(" "),e("td",[e("p",[t._v("NO")])]),t._v(" "),e("td",[e("p",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",[e("p",[e("code",{staticClass:"literal"},[t._v("reset [commit]")])])]),t._v(" "),e("td",[e("p",[t._v("REF")])]),t._v(" "),e("td",[e("p",[t._v("YES")])]),t._v(" "),e("td",[e("p",[t._v("NO")])]),t._v(" "),e("td",[e("p",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",[e("p",[e("code",{staticClass:"literal"},[t._v("reset --hard [commit]")])])]),t._v(" "),e("td",[e("p",[t._v("REF")])]),t._v(" "),e("td",[e("p",[t._v("YES")])]),t._v(" "),e("td",[e("p",[t._v("YES")])]),t._v(" "),e("td",[e("p",[e("strong",[t._v("NO")])])])]),t._v(" "),e("tr",[e("td",[e("p",[e("code",{staticClass:"literal"},[t._v("checkout <commit>")])])]),t._v(" "),e("td",[e("p",[t._v("HEAD")])]),t._v(" "),e("td",[e("p",[t._v("YES")])]),t._v(" "),e("td",[e("p",[t._v("YES")])]),t._v(" "),e("td",[e("p",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",[e("p",[e("strong",[t._v("File Level")])])]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("p",[e("code",{staticClass:"literal"},[t._v("reset [commit] <paths>")])])]),t._v(" "),e("td",[e("p",[t._v("NO")])]),t._v(" "),e("td",[e("p",[t._v("YES")])]),t._v(" "),e("td",[e("p",[t._v("NO")])]),t._v(" "),e("td",[e("p",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",[e("p",[e("code",{staticClass:"literal"},[t._v("checkout [commit] <paths>")])])]),t._v(" "),e("td",[e("p",[t._v("NO")])]),t._v(" "),e("td",[e("p",[t._v("YES")])]),t._v(" "),e("td",[e("p",[t._v("YES")])]),t._v(" "),e("td",[e("p",[e("strong",[t._v("NO")])])])])])])])])])}),[],!1,null,null,null);s.default=v.exports}}]);