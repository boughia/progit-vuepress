(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{493:function(t,e,a){"use strict";a.r(e);var s=a(28),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"撤消操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤消操作"}},[t._v("#")]),t._v(" 撤消操作")]),t._v(" "),a("p",[t._v("在任何一个阶段，你都有可能想要撤消某些操作。\n这里，我们将会学习几个撤消你所做修改的基本工具。\n注意，有些撤消操作是不可逆的。\n这是在使用 Git 的过程中，会因为操作失误而导致之前的工作丢失的少有的几个地方之一。")]),t._v(" "),a("p",[t._v("有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。\n此时，可以运行带有 "),a("code",{staticClass:"literal"},[t._v("--amend")]),t._v(" 选项的提交命令来重新提交：")]),t._v(" "),a("pre",{staticClass:"language-bash"},[a("code",[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git commit --amend")])]),t._v(" "),a("p",[t._v("这个命令会将暂存区中的文件提交。\n如果自上次提交以来你还未做任何修改（例如，在上次提交后马上执行了此命令），\n那么快照会保持不变，而你所修改的只是提交信息。")]),t._v(" "),a("p",[t._v("文本编辑器启动后，可以看到之前的提交信息。\n编辑后保存会覆盖原来的提交信息。")]),t._v(" "),a("p",[t._v("例如，你提交后发现忘记了暂存某些需要的修改，可以像下面这样操作：")]),t._v(" "),a("pre",{staticClass:"language-bash"},[a("code",[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git commit -m "),a("span",{staticStyle:{"font-style":"italic"}},[t._v("'initial commit'")]),t._v("\n"),a("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git add forgotten_file\n"),a("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git commit --amend")])]),t._v(" "),a("p",[t._v("最终你只会有一个提交——第二次提交将代替第一次提交的结果。")]),t._v(" "),a("aside",{staticClass:"admonition note custom-block tip",attrs:{title:"Note","epub:type":"note"}},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("div",{staticClass:"content"},[a("p",[t._v("当你在修补最后的提交时，并不是通过用改进后的提交 "),a("strong",[t._v("原位替换")]),t._v(" 掉旧有提交的方式来修复的，\n理解这一点非常重要。从效果上来说，就像是旧有的提交从未存在过一样，它并不会出现在仓库的历史中。")]),t._v(" "),a("p",[t._v("修补提交最明显的价值是可以稍微改进你最后的提交，而不会让“啊，忘了添加一个文件”或者\n“小修补，修正笔误”这种提交信息弄乱你的仓库历史。")])])]),t._v(" "),a("h2",{attrs:{id:"取消暂存的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消暂存的文件"}},[t._v("#")]),t._v(" 取消暂存的文件")]),t._v(" "),a("p",[t._v("接下来的两个小节演示如何操作暂存区和工作目录中已修改的文件。\n这些命令在修改文件状态的同时，也会提示如何撤消操作。\n例如，你已经修改了两个文件并且想要将它们作为两次独立的修改提交，\n但是却意外地输入 "),a("code",{staticClass:"literal"},[t._v("git add *")]),t._v(" 暂存了它们两个。如何只取消暂存两个中的一个呢？\n"),a("code",{staticClass:"literal"},[t._v("git status")]),t._v(" 命令提示了你：")]),t._v(" "),a("pre",{staticClass:"language-bash"},[a("code",[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git add *\n"),a("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(' git status\nOn branch master\nChanges to be committed:\n  (use "git reset HEAD <file>..." to unstage)\n\n    renamed:    README.md -> README\n    modified:   CONTRIBUTING.md')])]),t._v(" "),a("p",[t._v("在 “Changes to be committed” 文字正下方，提示使用 "),a("code",{staticClass:"literal"},[t._v("git reset HEAD <file>...")]),t._v(" 来取消暂存。\n所以，我们可以这样来取消暂存 "),a("code",{staticClass:"literal"},[t._v("CONTRIBUTING.md")]),t._v(" 文件：")]),t._v(" "),a("pre",{staticClass:"language-bash"},[a("code",[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git reset HEAD CONTRIBUTING.md\nUnstaged changes after reset:\nM\tCONTRIBUTING.md\n"),a("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(' git status\nOn branch master\nChanges to be committed:\n  (use "git reset HEAD <file>..." to unstage)\n\n    renamed:    README.md -> README\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git checkout -- <file>..." to discard changes in working directory)\n\n    modified:   CONTRIBUTING.md')])]),t._v(" "),a("p",[t._v("这个命令有点儿奇怪，但是起作用了。\n"),a("code",{staticClass:"literal"},[t._v("CONTRIBUTING.md")]),t._v(" 文件已经是修改未暂存的状态了。")]),t._v(" "),a("aside",{staticClass:"admonition note custom-block tip",attrs:{title:"Note","epub:type":"note"}},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("div",{staticClass:"content"},[a("p",[a("code",{staticClass:"literal"},[t._v("git reset")]),t._v(" 确实是个危险的命令，如果加上了 "),a("code",{staticClass:"literal"},[t._v("--hard")]),t._v(" 选项则更是如此。\n然而在上述场景中，工作目录中的文件尚未修改，因此相对安全一些。")])])]),t._v(" "),a("p",[t._v("到目前为止这个神奇的调用就是你需要对 "),a("code",{staticClass:"literal"},[t._v("git reset")]),t._v(" 命令了解的全部。\n我们将会在 "),a("a",{staticClass:"xref",attrs:{id:"xref--ch07-git-tools--_git_reset",href:"/chapter-7/7.html#重置揭密"}},[t._v("重置揭密")]),t._v(" 中了解 "),a("code",{staticClass:"literal"},[t._v("reset")]),t._v(" 的更多细节以及如何掌握它做一些真正有趣的事。")]),t._v(" "),a("h2",{attrs:{id:"撤消对文件的修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤消对文件的修改"}},[t._v("#")]),t._v(" 撤消对文件的修改")]),t._v(" "),a("p",[t._v("如果你并不想保留对 "),a("code",{staticClass:"literal"},[t._v("CONTRIBUTING.md")]),t._v(" 文件的修改怎么办？\n你该如何方便地撤消修改——将它还原成上次提交时的样子（或者刚克隆完的样子，或者刚把它放入工作目录时的样子）？\n幸运的是，"),a("code",{staticClass:"literal"},[t._v("git status")]),t._v(" 也告诉了你应该如何做。\n在最后一个例子中，未暂存区域是这样：")]),t._v(" "),a("pre",{staticClass:"language-bash"},[a("code",[t._v('Changes not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git checkout -- <file>..." to discard changes in working directory)\n\n    modified:   CONTRIBUTING.md')])]),t._v(" "),a("p",[t._v("它非常清楚地告诉了你如何撤消之前所做的修改。\n让我们来按照提示执行：")]),t._v(" "),a("pre",{staticClass:"language-bash"},[a("code",[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git checkout -- CONTRIBUTING.md\n"),a("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(' git status\nOn branch master\nChanges to be committed:\n  (use "git reset HEAD <file>..." to unstage)\n\n    renamed:    README.md -> README')])]),t._v(" "),a("p",[t._v("可以看到那些修改已经被撤消了。")]),t._v(" "),a("aside",{staticClass:"admonition important",attrs:{title:"Important","epub:type":"warning"}},[a("div",{staticClass:"content"},[a("p",[t._v("请务必记得 "),a("code",{staticClass:"literal"},[t._v("git checkout -- <file>")]),t._v(" 是一个危险的命令。\n你对那个文件在本地的任何修改都会消失——Git 会用最近提交的版本覆盖掉它。\n除非你确实清楚不想要对那个文件的本地修改了，否则请不要使用这个命令。")])])]),t._v(" "),a("p",[t._v("如果你仍然想保留对那个文件做出的修改，但是现在仍然需要撤消，我们将会在\n"),a("a",{staticClass:"xref",attrs:{href:"/chapter-3/index.html"}},[t._v("Git 分支")]),t._v(" 介绍保存进度与分支，这通常是更好的做法。")]),t._v(" "),a("p",[t._v("记住，在 Git 中任何 "),a("strong",[t._v("已提交")]),t._v(" 的东西几乎总是可以恢复的。\n甚至那些被删除的分支中的提交或使用 "),a("code",{staticClass:"literal"},[t._v("--amend")]),t._v(" 选项覆盖的提交也可以恢复\n（阅读 "),a("a",{staticClass:"xref",attrs:{id:"xref--ch10-git-internals--_data_recovery",href:"/chapter-10/7.html#数据恢复"}},[t._v("数据恢复")]),t._v(" 了解数据恢复）。\n然而，任何你未提交的东西丢失后很可能再也找不到了。")])])}),[],!1,null,null,null);e.default=i.exports}}]);