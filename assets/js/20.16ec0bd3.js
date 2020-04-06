(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{260:function(t,s,a){t.exports=a.p+"assets/img/local.3377a814.png"},261:function(t,s,a){t.exports=a.p+"assets/img/centralized.26b91a15.png"},262:function(t,s,a){t.exports=a.p+"assets/img/distributed.b9f6bb1c.png"},471:function(t,s,a){"use strict";a.r(s);var n=a(28),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"关于版本控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于版本控制"}},[t._v("#")]),t._v(" 关于版本控制")]),t._v(" "),n("p",[t._v("\n什么是“版本控制”？我为什么要关心它呢？\n版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。\n在本书所展示的例子中，我们对保存着软件源代码的文件作版本控制，但实际上，你可以对任何类型的文件进行版本控制。")]),t._v(" "),n("p",[t._v("如果你是位图形或网页设计师，可能会需要保存某一幅图片或页面布局文件的所有修订版本（这或许是你非常渴望拥有的功能），采用版本控制系统（VCS）是个明智的选择。\n有了它你就可以将选定的文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，你可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。\n使用版本控制系统通常还意味着，就算你乱来一气把整个项目中的文件改的改删的删，你也照样可以轻松恢复到原先的样子。\n但额外增加的工作量却微乎其微。")]),t._v(" "),n("h2",{attrs:{id:"本地版本控制系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地版本控制系统"}},[t._v("#")]),t._v(" 本地版本控制系统")]),t._v(" "),n("p",[t._v("\n许多人习惯用复制整个项目目录的方式来保存不同的版本，或许还会改名加上备份时间以示区别。\n这么做唯一的好处就是简单，但是特别容易犯错。\n有时候会混淆所在的工作目录，一不小心会写错文件或者覆盖意想外的文件。")]),t._v(" "),n("p",[t._v("为了解决这个问题，人们很久以前就开发了许多种本地版本控制系统，大多都是采用某种简单的数据库来记录文件的历次更新差异。")]),t._v(" "),n("figure",{staticClass:"image"},[n("div",{staticClass:"content"},[n("img",{attrs:{src:a(260),alt:"本地版本控制图解"}})]),t._v(" "),n("figcaption",[t._v("Figure 1. 本地版本控制.")])]),t._v(" "),n("p",[t._v("其中最流行的一种叫做 RCS，现今许多计算机系统上都还看得到它的踪影。\n"),n("a",{staticClass:"link",attrs:{href:"https://www.gnu.org/software/rcs/"}},[t._v("RCS")]),t._v("\n的工作原理是在硬盘上保存补丁集（补丁是指文件修订前后的变化）；通过应用所有的补丁，可以重新计算出各个版本的文件内容。")]),t._v(" "),n("h2",{attrs:{id:"集中化的版本控制系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集中化的版本控制系统"}},[t._v("#")]),t._v(" 集中化的版本控制系统")]),t._v(" "),n("p",[t._v("\n接下来人们又遇到一个问题，如何让在不同系统上的开发者协同工作？\n于是，集中化的版本控制系统（Centralized Version Control Systems，简称 CVCS）应运而生。\n这类系统，诸如 CVS、Subversion 以及 Perforce 等，都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。\n多年以来，这已成为版本控制系统的标准做法。")]),t._v(" "),n("figure",{staticClass:"image"},[n("div",{staticClass:"content"},[n("img",{attrs:{src:a(261),alt:"集中化的版本控制图解"}})]),t._v(" "),n("figcaption",[t._v("Figure 2. 集中化的版本控制.")])]),t._v(" "),n("p",[t._v("这种做法带来了许多好处，特别是相较于老式的本地 VCS 来说。\n现在，每个人都可以在一定程度上看到项目中的其他人正在做些什么。\n而管理员也可以轻松掌控每个开发者的权限，并且管理一个 CVCS 要远比在各个客户端上维护本地数据库来得轻松容易。")]),t._v(" "),n("p",[t._v("事分两面，有好有坏。\n这么做最显而易见的缺点是中央服务器的单点故障。\n如果宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作。\n如果中心数据库所在的磁盘发生损坏，又没有做恰当备份，毫无疑问你将丢失所有数据——包括项目的整个变更历史，只剩下人们在各自机器上保留的单独快照。\n本地版本控制系统也存在类似问题，只要整个项目的历史记录被保存在单一位置，就有丢失所有历史更新记录的风险。")]),t._v(" "),n("h2",{attrs:{id:"分布式版本控制系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分布式版本控制系统"}},[t._v("#")]),t._v(" 分布式版本控制系统")]),t._v(" "),n("p",[t._v("\n于是分布式版本控制系统（Distributed Version Control System，简称 DVCS）面世了。\n在这类系统中，像 Git、Mercurial、Bazaar 以及 Darcs 等，客户端并不只提取最新版本的文件快照，\n而是把代码仓库完整地镜像下来，包括完整的历史记录。\n这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。\n因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。")]),t._v(" "),n("figure",{staticClass:"image"},[n("div",{staticClass:"content"},[n("img",{attrs:{src:a(262),alt:"分布式版本控制图解"}})]),t._v(" "),n("figcaption",[t._v("Figure 3. 分布式版本控制.")])]),t._v(" "),n("p",[t._v("更进一步，许多这类系统都可以指定和若干不同的远端代码仓库进行交互。籍此，你就可以在同一个项目中，分别和不同工作小组的人相互协作。\n你可以根据需要设定不同的协作流程，比如层次模型式的工作流，而这在以前的集中式系统中是无法实现的。")])])}),[],!1,null,null,null);s.default=r.exports}}]);