(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{496:function(t,a,s){"use strict";s.r(a);var i=s(28),l=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-别名"}},[t._v("#")]),t._v(" Git 别名")]),t._v(" "),s("p",[t._v("\n在我们结束本章 Git 基础之前，正好有一个小技巧可以使你的 Git 体验更简单、容易、熟悉：别名。\n我们不会在之后的章节中引用到或假定你使用过它们，但是你大概应该知道如何使用它们。")]),t._v(" "),s("p",[t._v("Git 并不会在你输入部分命令时自动推断出你想要的命令。\n如果不想每次都输入完整的 Git 命令，可以通过 "),s("code",{staticClass:"literal"},[t._v("git config")]),t._v(" 文件来轻松地为每一个命令设置一个别名。\n这里有一些例子你可以试试：")]),t._v(" "),s("pre",{staticClass:"language-bash"},[s("code",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git config --global alias.co checkout\n"),s("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git config --global alias.br branch\n"),s("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git config --global alias.ci commit\n"),s("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git config --global alias.st status")])]),t._v(" "),s("p",[t._v("这意味着，当要输入 "),s("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 时，只需要输入 "),s("code",{staticClass:"literal"},[t._v("git ci")]),t._v("。\n随着你继续不断地使用 Git，可能也会经常使用其他命令，所以创建别名时不要犹豫。")]),t._v(" "),s("p",[t._v("在创建你认为应该存在的命令时这个技术会很有用。\n例如，为了解决取消暂存文件的易用性问题，可以向 Git 中添加你自己的取消暂存别名：")]),t._v(" "),s("pre",{staticClass:"language-bash"},[s("code",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git config --global alias.unstage "),s("span",{staticStyle:{"font-style":"italic"}},[t._v("'reset HEAD --'")])])]),t._v(" "),s("p",[t._v("这会使下面的两个命令等价：")]),t._v(" "),s("pre",{staticClass:"language-bash"},[s("code",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git unstage fileA\n"),s("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git reset HEAD -- fileA")])]),t._v(" "),s("p",[t._v("这样看起来更清楚一些。\n通常也会添加一个 "),s("code",{staticClass:"literal"},[t._v("last")]),t._v(" 命令，像这样：")]),t._v(" "),s("pre",{staticClass:"language-bash"},[s("code",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git config --global alias.last "),s("span",{staticStyle:{"font-style":"italic"}},[t._v("'log -1 HEAD'")])])]),t._v(" "),s("p",[t._v("这样，可以轻松地看到最后一次提交：")]),t._v(" "),s("pre",{staticClass:"language-bash"},[s("code",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git last\ncommit 66938dae3329c7aebe598c2246a8e6af90d04646\nAuthor: Josh Goebel <dreamer3@example.com>\nDate:   Tue Aug 26 19:48:51 2008 +0800\n\n    test for current head\n\n    Signed-off-by: Scott Chacon <schacon@example.com>")])]),t._v(" "),s("p",[t._v("可以看出，Git 只是简单地将别名替换为对应的命令。\n然而，你可能想要执行外部命令，而不是一个 Git 子命令。\n如果是那样的话，可以在命令前面加入 "),s("code",{staticClass:"literal"},[t._v("!")]),t._v(" 符号。\n如果你自己要写一些与 Git 仓库协作的工具的话，那会很有用。\n我们现在演示将 "),s("code",{staticClass:"literal"},[t._v("git visual")]),t._v(" 定义为 "),s("code",{staticClass:"literal"},[t._v("gitk")]),t._v(" 的别名：")]),t._v(" "),s("pre",{staticClass:"language-bash"},[s("code",[s("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git config --global alias.visual "),s("span",{staticStyle:{"font-style":"italic"}},[t._v("'!gitk'")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);