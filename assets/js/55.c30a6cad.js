(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{462:function(t,a,e){"use strict";e.r(a);var i=e(28),s=Object(i.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"获取与创建项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取与创建项目"}},[t._v("#")]),t._v(" 获取与创建项目")]),t._v(" "),e("p",[t._v("有几种方式获取一个 Git 仓库。\n一种是从网络上或者其他地方拷贝一个现有的仓库，另一种就是在一个目录中创建一个新的仓库。")]),t._v(" "),e("h2",{attrs:{id:"git-init"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-init"}},[t._v("#")]),t._v(" git init")]),t._v(" "),e("p",[t._v("你只需要简单地运行 "),e("code",{staticClass:"literal"},[t._v("git init")]),t._v(" 就可以将一个目录转变成一个 Git 仓库，这样你就可以开始对它进行版本管理了。")]),t._v(" "),e("p",[t._v("我们一开始在 "),e("a",{staticClass:"xref",attrs:{id:"xref--ch02-git-basics-chapter--_getting_a_repo",href:"/chapter-2/1.html#获取-git-仓库"}},[t._v("获取 Git 仓库")]),t._v(" 一节中介绍了如何创建一个新的仓库来开始工作。")]),t._v(" "),e("p",[t._v("在 "),e("a",{staticClass:"xref",attrs:{id:"xref--ch03-git-branching--_remote_branches",href:"/chapter-3/5.html#远程分支"}},[t._v("远程分支")]),t._v(" 一节中我们简单的讨论了如何改变默认分支。")]),t._v(" "),e("p",[t._v("在 "),e("a",{staticClass:"xref",attrs:{id:"xref--ch04-git-on-the-server--_bare_repo",href:"/chapter-4/2.html#把裸仓库放到服务器上"}},[t._v("把裸仓库放到服务器上")]),t._v(" 一节中我们使用此命令来为一个服务器创建一个空的祼仓库。")]),t._v(" "),e("p",[t._v("最后，我们在 "),e("a",{staticClass:"xref",attrs:{id:"xref--ch10-git-internals--_plumbing_porcelain",href:"/chapter-10/1.html#底层命令与上层命令"}},[t._v("底层命令与上层命令")]),t._v(" 一节中介绍了此命令背后工作的原理的一些细节。")]),t._v(" "),e("h2",{attrs:{id:"git-clone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-clone"}},[t._v("#")]),t._v(" git clone")]),t._v(" "),e("p",[e("code",{staticClass:"literal"},[t._v("git clone")]),t._v(" 实际上是一个封装了其他几个命令的命令。\n它创建了一个新目录，切换到新的目录，然后 "),e("code",{staticClass:"literal"},[t._v("git init")]),t._v(" 来初始化一个空的 Git 仓库， 然后为你指定的 URL 添加一个（默认名称为 "),e("code",{staticClass:"literal"},[t._v("origin")]),t._v(" 的）远程仓库（"),e("code",{staticClass:"literal"},[t._v("git remote add")]),t._v("），再针对远程仓库执行 "),e("code",{staticClass:"literal"},[t._v("git fetch")]),t._v("，最后通过 "),e("code",{staticClass:"literal"},[t._v("git checkout")]),t._v(" 将远程仓库的最新提交检出到本地的工作目录。")]),t._v(" "),e("p",[e("code",{staticClass:"literal"},[t._v("git clone")]),t._v(" 命令在本书中多次用到，这里只列举几个有意思的地方。")]),t._v(" "),e("p",[t._v("在 "),e("a",{staticClass:"xref",attrs:{id:"xref--ch02-git-basics-chapter--_git_cloning",href:"/chapter-2/1.html#克隆现有的仓库"}},[t._v("克隆现有的仓库")]),t._v(" 一节中我们通过几个示例详细介绍了此命令。")]),t._v(" "),e("p",[t._v("在 "),e("a",{staticClass:"xref",attrs:{id:"xref--ch04-git-on-the-server--_getting_git_on_a_server",href:"/chapter-4/2.html#在服务器上搭建-git"}},[t._v("在服务器上搭建 Git")]),t._v(" 一节中，我们使用了 "),e("code",{staticClass:"literal"},[t._v("--bare")]),t._v(" 选项来创建一个没有任何工作目录的 Git 仓库副本。")]),t._v(" "),e("p",[t._v("在 "),e("a",{staticClass:"xref",attrs:{id:"xref--ch07-git-tools--_bundling",href:"/chapter-7/12.html#打包"}},[t._v("打包")]),t._v(" 一节中我们使用它来解包一个打包好的 Git 仓库。")]),t._v(" "),e("p",[t._v("最后，在 "),e("a",{staticClass:"xref",attrs:{id:"xref--ch07-git-tools--_cloning_submodules",href:"/chapter-7/11.html#克隆含有子模块的项目"}},[t._v("克隆含有子模块的项目")]),t._v(" 一节中我们学习了使用 "),e("code",{staticClass:"literal"},[t._v("--recursive")]),t._v(" 选项来让克隆一个带有子模块的仓库变得简单。")]),t._v(" "),e("p",[t._v("虽然在本书的其他地方都有用到此命令，但是上面这些用法是特例，或者使用方式有点特别。")])])}),[],!1,null,null,null);a.default=s.exports}}]);