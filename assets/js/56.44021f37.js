(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{463:function(t,a,s){"use strict";s.r(a);var i=s(28),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快照基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快照基础"}},[t._v("#")]),t._v(" 快照基础")]),t._v(" "),s("p",[t._v("对于基本的暂存内容及提交到你的历史记录中的工作流，只有少数基本的命令。")]),t._v(" "),s("h2",{attrs:{id:"git-add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-add"}},[t._v("#")]),t._v(" git add")]),t._v(" "),s("p",[s("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 命令将内容从工作目录添加到暂存区（或称为索引（index）区），以备下次提交。\n当 "),s("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 命令执行时，默认情况下它只会检查暂存区域，因此 "),s("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 是用来确定下一次提交时快照的样子的。")]),t._v(" "),s("p",[t._v("这个命令对于 Git 来说特别重要，所以在本书中被无数次地提及和使用。\n我们将快速地过一遍一些可以看到的独特的用法。")]),t._v(" "),s("p",[t._v("我们在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch02-git-basics-chapter--_tracking_files",href:"/chapter-2/2.html#跟踪新文件"}},[t._v("跟踪新文件")]),t._v(" 一节中介绍并详细解释了 "),s("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 命令。")]),t._v(" "),s("p",[t._v("然后，我们在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch03-git-branching--_basic_merge_conflicts",href:"/chapter-3/2.html#遇到冲突时的分支合并"}},[t._v("遇到冲突时的分支合并")]),t._v(" 一节中提到了如何使用它来解决合并冲突。")]),t._v(" "),s("p",[t._v("接下来，我们在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch07-git-tools--_interactive_staging",href:"/chapter-7/2.html#交互式暂存"}},[t._v("交互式暂存")]),t._v(" 一章中使用它来交互式的暂存一个已修改文件的特定部分。")]),t._v(" "),s("p",[t._v("最后，在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch10-git-internals--_tree_objects",href:"/chapter-10/2.html#树对象"}},[t._v("树对象")]),t._v(" 一节中我们在底层模拟了它的用法，以便你了解幕后发生了什么。")]),t._v(" "),s("h2",{attrs:{id:"git-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-status"}},[t._v("#")]),t._v(" git status")]),t._v(" "),s("p",[s("code",{staticClass:"literal"},[t._v("git status")]),t._v(" 命令会显示工作区及暂存区域中不同状态的文件。\n其中包含了已修改但未暂存，或已经暂存但没有提交的文件。\n在一般的显示形式中，它会给你一些如何在这些暂存区之间移动文件的提示。")]),t._v(" "),s("p",[t._v("首先，我们在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch02-git-basics-chapter--_checking_status",href:"/chapter-2/2.html#检查当前文件状态"}},[t._v("检查当前文件状态")]),t._v(" 一节中介绍了 "),s("code",{staticClass:"literal"},[t._v("status")]),t._v(" 的基本及简单的形式。\n虽然我们在全书中都有用到它，但是绝大部分的你能用 "),s("code",{staticClass:"literal"},[t._v("git status")]),t._v(" 做的事情都在这一章讲到了。")]),t._v(" "),s("h2",{attrs:{id:"git-diff"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-diff"}},[t._v("#")]),t._v(" git diff")]),t._v(" "),s("p",[t._v("当需要查看任意两棵树的差异时，可以使用 "),s("code",{staticClass:"literal"},[t._v("git diff")]),t._v(" 命令。\n此命令可以查看你工作环境与你的暂存区的差异（"),s("code",{staticClass:"literal"},[t._v("git diff")]),t._v(" 默认的做法），你暂存区域与你最后提交之间的差异（"),s("code",{staticClass:"literal"},[t._v("git diff --staged")]),t._v("），或者比较两个提交记录的差异（"),s("code",{staticClass:"literal"},[t._v("git diff master branchB")]),t._v("）。")]),t._v(" "),s("p",[t._v("首先，我们在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch02-git-basics-chapter--_git_diff_staged",href:"/chapter-2/2.html#查看已暂存和未暂存的修改"}},[t._v("查看已暂存和未暂存的修改")]),t._v(" 一章中研究了 "),s("code",{staticClass:"literal"},[t._v("git diff")]),t._v(" 的基本用法，在此节中我们展示了如何查看哪些变化已经暂存了，哪些没有。")]),t._v(" "),s("p",[t._v("在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch05-distributed-git--_commit_guidelines",href:"/chapter-5/2.html#提交准则"}},[t._v("提交准则")]),t._v(" 一节中,我们在提交前使用 "),s("code",{staticClass:"literal"},[t._v("--check")]),t._v(" 选项来检查可能存在的空白字符问题。")]),t._v(" "),s("p",[t._v("在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch05-distributed-git--_what_is_introduced",href:"/chapter-5/3.html#确定引入了哪些东西"}},[t._v("确定引入了哪些东西")]),t._v(" 一节中,了解了使用 "),s("code",{staticClass:"literal"},[t._v("git diff A...B")]),t._v(" 语法来更有效地比较不同分支之间的差异。")]),t._v(" "),s("p",[t._v("在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch07-git-tools--_advanced_merging",href:"/chapter-7/8.html#高级合并"}},[t._v("高级合并")]),t._v(" 一节中我们使用 "),s("code",{staticClass:"literal"},[t._v("-b")]),t._v(" 选项来过滤掉空白字符的差异，及通过 "),s("code",{staticClass:"literal"},[t._v("--theirs")]),t._v("、"),s("code",{staticClass:"literal"},[t._v("--ours")]),t._v(" 和 "),s("code",{staticClass:"literal"},[t._v("--base")]),t._v(" 选项来比较不同暂存区冲突文件的差异。")]),t._v(" "),s("p",[t._v("最后，在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch07-git-tools--_starting_submodules",href:"/chapter-7/11.html#开始使用子模块"}},[t._v("开始使用子模块")]),t._v(" 一节中,我们使用此命令合 "),s("code",{staticClass:"literal"},[t._v("--submodule")]),t._v(" 选项来有效地比较子模块的变化。")]),t._v(" "),s("h2",{attrs:{id:"git-difftool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-difftool"}},[t._v("#")]),t._v(" git difftool")]),t._v(" "),s("p",[t._v("当你不想使用内置的 "),s("code",{staticClass:"literal"},[t._v("git diff")]),t._v(" 命令时。"),s("code",{staticClass:"literal"},[t._v("git difftool")]),t._v(" 可以用来简单地启动一个外部工具来为你展示两棵树之间的差异。")]),t._v(" "),s("p",[t._v("我们只在 "),s("a",{staticClass:"xref",attrs:{href:"/chapter-2/2.html#查看已暂存和未暂存的修改"}},[t._v("查看已暂存和未暂存的修改")]),t._v(" 一节中简单的提到了此命令。")]),t._v(" "),s("h2",{attrs:{id:"git-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[t._v("#")]),t._v(" git commit")]),t._v(" "),s("p",[s("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 命令将所有通过 "),s("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 暂存的文件内容在数据库中创建一个持久的快照，然后将当前分支上的分支指针移到其之上。")]),t._v(" "),s("p",[t._v("首先，我们在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch02-git-basics-chapter--_committing_changes",href:"/chapter-2/2.html#提交更新"}},[t._v("提交更新")]),t._v(" 一节中涉及了此命令的基本用法。\n我们演示了如何在日常的工作流程中通过使用 "),s("code",{staticClass:"literal"},[t._v("-a")]),t._v(" 标志来跳过 "),s("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 这一步，及如何使用 "),s("code",{staticClass:"literal"},[t._v("-m")]),t._v(" 标志通过命令行而不启动一个编辑器来传递提交信息。")]),t._v(" "),s("p",[t._v("在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch02-git-basics-chapter--_undoing",href:"/chapter-2/4.html#撤消操作"}},[t._v("撤消操作")]),t._v(" 一节中我们介绍了使用 "),s("code",{staticClass:"literal"},[t._v("--amend")]),t._v(" 选项来重做最后的提交。")]),t._v(" "),s("p",[t._v("在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch03-git-branching--_git_branches_overview",href:"/chapter-3/1.html#分支简介"}},[t._v("分支简介")]),t._v("，我们探讨了 "),s("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 的更多细节，及工作原理。")]),t._v(" "),s("p",[t._v("在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch07-git-tools--_signing_commits",href:"/chapter-7/4.html#签署工作_commits"}},[t._v("签署提交")]),t._v(" 一节中我们探讨了如何使用 "),s("code",{staticClass:"literal"},[t._v("-S")]),t._v(" 标志来为提交签名加密。")]),t._v(" "),s("p",[t._v("最后，在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch10-git-internals--_git_commit_objects",href:"/chapter-10/2.html#提交对象"}},[t._v("提交对象")]),t._v(" 一节中，我们了解了 "),s("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 在背后做了什么，及它是如何实现的。")]),t._v(" "),s("h2",{attrs:{id:"git-reset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-reset"}},[t._v("#")]),t._v(" git reset")]),t._v(" "),s("p",[s("code",{staticClass:"literal"},[t._v("git reset")]),t._v(" 命令主要用来根据你传递给动作的参数来执行撤销操作。\n它可以移动 "),s("code",{staticClass:"literal"},[t._v("HEAD")]),t._v(" 指针并且可选的改变 "),s("code",{staticClass:"literal"},[t._v("index")]),t._v(" 或者暂存区，如果你使用 "),s("code",{staticClass:"literal"},[t._v("--hard")]),t._v(" 参数的话你甚至可以改变工作区。\n如果错误地为这个命令附加后面的参数，你可能会丢失你的工作，所以在使用前你要确定你已经完全理解了它。")]),t._v(" "),s("p",[t._v("首先，我们在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch02-git-basics-chapter--_unstaging",href:"/chapter-2/4.html#取消暂存的文件"}},[t._v("取消暂存的文件")]),t._v(" 一节中介绍了 "),s("code",{staticClass:"literal"},[t._v("git reset")]),t._v(" 简单高效的用法，用来对执行过 "),s("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 命令的文件取消暂存。")]),t._v(" "),s("p",[t._v("在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch07-git-tools--_git_reset",href:"/chapter-7/7.html#重置揭密"}},[t._v("重置揭密")]),t._v(" 一节中我们详细介绍了此命令，几乎整节都在解释此命令。")]),t._v(" "),s("p",[t._v("在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch07-git-tools--_abort_merge",href:"/chapter-7/8.html#中断一次合并"}},[t._v("中断一次合并")]),t._v(" 一节中，我们使用 "),s("code",{staticClass:"literal"},[t._v("git reset --hard")]),t._v(" 来取消一个合并，同时我们也使用了 "),s("code",{staticClass:"literal"},[t._v("git merge --abort")]),t._v(" 命令，它是 "),s("code",{staticClass:"literal"},[t._v("git reset")]),t._v(" 的一个简单的封装。")]),t._v(" "),s("h2",{attrs:{id:"git-rm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-rm"}},[t._v("#")]),t._v(" git rm")]),t._v(" "),s("p",[s("code",{staticClass:"literal"},[t._v("git rm")]),t._v(" 是 Git 用来从工作区，或者暂存区移除文件的命令。\n在为下一次提交暂存一个移除操作上，它与 "),s("code",{staticClass:"literal"},[t._v("git add")]),t._v(" 有一点类似。")]),t._v(" "),s("p",[t._v("我们在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch02-git-basics-chapter--_removing_files",href:"/chapter-2/2.html#移除文件"}},[t._v("移除文件")]),t._v(" 一节中提到了 "),s("code",{staticClass:"literal"},[t._v("git rm")]),t._v(" 的一些细节，包括递归地移除文件，和使用 "),s("code",{staticClass:"literal"},[t._v("--cached")]),t._v(" 选项来只移除暂存区域的文件但是保留工作区的文件。")]),t._v(" "),s("p",[t._v("在本书的 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch10-git-internals--_removing_objects",href:"/chapter-10/7.html#移除对象"}},[t._v("移除对象")]),t._v(" 一节中，介绍了 "),s("code",{staticClass:"literal"},[t._v("git rm")]),t._v(" 仅有的几种不同用法，如在执行 "),s("code",{staticClass:"literal"},[t._v("git filter-branch")]),t._v(" 中使用和解释了 "),s("code",{staticClass:"literal"},[t._v("--ignore-unmatch")]),t._v(" 选项。\n这对脚本来说很有用。")]),t._v(" "),s("h2",{attrs:{id:"git-mv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-mv"}},[t._v("#")]),t._v(" git mv")]),t._v(" "),s("p",[s("code",{staticClass:"literal"},[t._v("git mv")]),t._v(" 命令是一个便利命令，用于移到一个文件并且在新文件上执行`git add`命令及在老文件上执行`git rm`命令。")]),t._v(" "),s("p",[t._v("我们只是在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch02-git-basics-chapter--_git_mv",href:"/chapter-2/2.html#移动文件"}},[t._v("移动文件")]),t._v(" 一节中简单地提到了此命令。")]),t._v(" "),s("h2",{attrs:{id:"git-clean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-clean"}},[t._v("#")]),t._v(" git clean")]),t._v(" "),s("p",[s("code",{staticClass:"literal"},[t._v("git clean")]),t._v(" 是一个用来从工作区中移除不想要的文件的命令。\n可以是编译的临时文件或者合并冲突的文件。")]),t._v(" "),s("p",[t._v("在 "),s("a",{staticClass:"xref",attrs:{id:"xref--ch07-git-tools--_git_clean",href:"/chapter-7/3.html#清理工作目录"}},[t._v("清理工作目录")]),t._v(" 一节中我们介绍了你可能会使用 "),s("code",{staticClass:"literal"},[t._v("clean")]),t._v(" 命令的大量选项及场景。")])])}),[],!1,null,null,null);a.default=e.exports}}]);