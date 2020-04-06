(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{539:function(t,a,e){"use strict";e.r(a);var n=e(28),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"签署工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#签署工作"}},[t._v("#")]),t._v(" 签署工作")]),t._v(" "),e("p",[t._v("Git 虽然是密码级安全的，但它不是万无一失的。\n如果你从因特网上的其他人那里拿取工作，并且想要验证提交是不是真正地来自于可信来源，\nGit 提供了几种通过 GPG 来签署和验证工作的方式。")]),t._v(" "),e("h2",{attrs:{id:"gpg-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gpg-介绍"}},[t._v("#")]),t._v(" GPG 介绍")]),t._v(" "),e("p",[t._v("首先，在开始签名之前你需要先配置 GPG 并安装个人密钥。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" gpg --list-keys\n/Users/schacon/.gnupg/pubring.gpg\n---------------------------------\npub   2048R/0A46826A 2014-06-04\nuid                  Scott Chacon (Git signing key) <schacon@gmail.com>\nsub   2048R/874529A9 2014-06-04")])]),t._v(" "),e("p",[t._v("如果你还没有安装一个密钥，可以使用 "),e("code",{staticClass:"literal"},[t._v("gpg --gen-key")]),t._v(" 生成一个。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" gpg --gen-key")])]),t._v(" "),e("p",[t._v("一旦你有一个可以签署的私钥，可以通过设置 Git 的 "),e("code",{staticClass:"literal"},[t._v("user.signingkey")]),t._v(" 选项来签署。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git config --global user.signingkey 0A46826A")])]),t._v(" "),e("p",[t._v("现在 Git 默认使用你的密钥来签署标签与提交。")]),t._v(" "),e("h2",{attrs:{id:"签署标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#签署标签"}},[t._v("#")]),t._v(" 签署标签")]),t._v(" "),e("p",[t._v("如果已经设置好一个 GPG 私钥，可以使用它来签署新的标签。\n所有需要做的只是使用 "),e("code",{staticClass:"literal"},[t._v("-s")]),t._v(" 代替 "),e("code",{staticClass:"literal"},[t._v("-a")]),t._v(" 即可：")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git tag -s v1.5 -m "),e("span",{staticStyle:{"font-style":"italic"}},[t._v("'my signed 1.5 tag'")]),t._v('\n\nYou need a passphrase to unlock the secret key for\nuser: "Ben Straub <ben@straub.cc>"\n2048-bit RSA key, ID 800430EB, created 2014-05-04')])]),t._v(" "),e("p",[t._v("如果在那个标签上运行 "),e("code",{staticClass:"literal"},[t._v("git show")]),t._v("，会看到你的 GPG 签名附属在后面：")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git show v1.5\ntag v1.5\nTagger: Ben Straub <ben@straub.cc>\nDate:   Sat May 3 20:29:41 2014 -0700\n\nmy signed 1.5 tag\n-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v1\n\niQEcBAABAgAGBQJTZbQlAAoJEF0+sviABDDrZbQH/09PfE51KPVPlanr6q1v4/Ut\nLQxfojUWiLQdg2ESJItkcuweYg+kc3HCyFejeDIBw9dpXt00rY26p05qrpnG+85b\nhM1/PswpPLuBSr+oCIDj5GMC2r2iEKsfv2fJbNW8iWAXVLoWZRF8B0MfqX/YTMbm\necorc4iXzQu7tupRihslbNkfvfciMnSDeSvzCpWAHl7h8Wj6hhqePmLm9lAYqnKp\n8S5B/1SSQuEAjRZgI4IexpZoeKGVDptPHxLLS38fozsyi0QyDyzEgJxcJQVMXxVi\nRUysgqjcpT8+iQM1PblGfHR4XAhuOqN5Fx06PSaFZhqvWFezJ28/CLyX5q+oIVk=\n=EFTF\n-----END PGP SIGNATURE-----\n\ncommit ca82a6dff817ec66f44342007202690a93763949\nAuthor: Scott Chacon <schacon@gee-mail.com>\nDate:   Mon Mar 17 21:52:11 2008 -0700\n\n    changed the version number")])]),t._v(" "),e("h2",{attrs:{id:"验证标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证标签"}},[t._v("#")]),t._v(" 验证标签")]),t._v(" "),e("p",[t._v("要验证一个签署的标签，可以运行 "),e("code",{staticClass:"literal"},[t._v("git tag -v <tag-name>")]),t._v("。\n这个命令使用 GPG 来验证签名。\n为了验证能正常工作，签署者的公钥需要在你的钥匙链中。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(' git tag -v v1.4.2.1\nobject 883653babd8ee7ea23e6a5c392bb739348b1eb61\ntype commit\ntag v1.4.2.1\ntagger Junio C Hamano <junkio@cox.net> 1158138501 -0700\n\nGIT 1.4.2.1\n\nMinor fixes since 1.4.2, including git-mv and git-http with alternates.\ngpg: Signature made Wed Sep 13 02:08:25 2006 PDT using DSA key ID F3119B9A\ngpg: Good signature from "Junio C Hamano <junkio@cox.net>"\ngpg:                 aka "[jpeg image of size 1513]"\nPrimary key fingerprint: 3565 2A26 2040 E066 C9A7  4A7D C0C6 D9A4 F311 9B9A')])]),t._v(" "),e("p",[t._v("如果没有签署者的公钥，那么你将会得到类似下面的东西：")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[t._v("gpg: Signature made Wed Sep 13 02:08:25 2006 PDT using DSA key ID F3119B9A\ngpg: Can't check signature: public key not found\nerror: could not verify the tag 'v1.4.2.1'")])]),t._v(" "),e("h2",{attrs:{id:"签署提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#签署提交"}},[t._v("#")]),t._v(" 签署提交")]),t._v(" "),e("p",[t._v("在最新版本的 Git 中（v1.7.9 及以上），也可以签署个人提交。\n如果相对于标签而言你对直接签署到提交更感兴趣的话，所有要做的只是增加一个 "),e("code",{staticClass:"literal"},[t._v("-S")]),t._v(" 到 "),e("code",{staticClass:"literal"},[t._v("git commit")]),t._v(" 命令。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git commit -a -S -m "),e("span",{staticStyle:{"font-style":"italic"}},[t._v("'signed commit'")]),t._v('\n\nYou need a passphrase to unlock the secret key for\nuser: "Scott Chacon (Git signing key) <schacon@gmail.com>"\n2048-bit RSA key, ID 0A46826A, created 2014-06-04\n\n[master 5c3386c] signed commit\n 4 files changed, 4 insertions(+), 24 deletions(-)\n rewrite Rakefile (100%)\n create mode 100644 lib/git.rb')])]),t._v(" "),e("p",[e("code",{staticClass:"literal"},[t._v("git log")]),t._v(" 也有一个 "),e("code",{staticClass:"literal"},[t._v("--show-signature")]),t._v(" 选项来查看及验证这些签名。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(' git log --show-signature -1\ncommit 5c3386cf54bba0a33a32da706aa52bc0155503c2\ngpg: Signature made Wed Jun  4 19:49:17 2014 PDT using RSA key ID 0A46826A\ngpg: Good signature from "Scott Chacon (Git signing key) <schacon@gmail.com>"\nAuthor: Scott Chacon <schacon@gmail.com>\nDate:   Wed Jun 4 19:49:17 2014 -0700\n\n    signed commit')])]),t._v(" "),e("p",[t._v("另外，也可以配置 "),e("code",{staticClass:"literal"},[t._v("git log")]),t._v(" 来验证任何找到的签名并将它们以 "),e("code",{staticClass:"literal"},[t._v("%G?")]),t._v(" 格式列在输出中。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git log --pretty="),e("span",{staticStyle:{"font-style":"italic"}},[t._v('"format:%h %G? %aN  %s"')]),t._v("\n\n5c3386c G Scott Chacon  signed commit\nca82a6d N Scott Chacon  changed the version number\n085bb3b N Scott Chacon  removed unnecessary test code\na11bef0 N Scott Chacon  first commit")])]),t._v(" "),e("p",[t._v("这里我们可以看到只有最后一次提交是签署并有效的，而之前的提交都不是。")]),t._v(" "),e("p",[t._v("在 Git 1.8.3 及以后的版本中，"),e("code",{staticClass:"literal"},[t._v("git merge")]),t._v(" 与 "),e("code",{staticClass:"literal"},[t._v("git pull")]),t._v(" 可以使用\n"),e("code",{staticClass:"literal"},[t._v("--verify-signatures")]),t._v(" 选项来检查并拒绝没有携带可信 GPG 签名的提交。")]),t._v(" "),e("p",[t._v("如果使用这个选项来合并一个包含未签名或有效的提交的分支时，合并不会生效。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git merge --verify-signatures non-verify\nfatal: Commit ab06180 does not have a GPG signature.")])]),t._v(" "),e("p",[t._v("如果合并包含的只有有效的签名的提交，合并命令会提示所有的签名它已经检查过了然后会继续向前。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git merge --verify-signatures signed-branch\nCommit 13ad65e has a good GPG signature by Scott Chacon (Git signing key) <schacon@gmail.com>\nUpdating 5c3386c..13ad65e\nFast-forward\n README | 2 ++\n 1 file changed, 2 insertions(+)")])]),t._v(" "),e("p",[t._v("也可以给 "),e("code",{staticClass:"literal"},[t._v("git merge")]),t._v(" 命令附加 "),e("code",{staticClass:"literal"},[t._v("-S")]),t._v(" 选项来签署自己生成的合并提交。\n下面的例子演示了验证将要合并的分支的每一个提交都是签名的并且签署最后生成的合并提交。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("$")]),t._v(" git merge --verify-signatures -S  signed-branch\nCommit 13ad65e has a good GPG signature by Scott Chacon (Git signing key) <schacon@gmail.com>\n\nYou need a passphrase to unlock the secret key for\nuser: \"Scott Chacon (Git signing key) <schacon@gmail.com>\"\n2048-bit RSA key, ID 0A46826A, created 2014-06-04\n\nMerge made by the 'recursive' strategy.\n README | 2 ++\n 1 file changed, 2 insertions(+)")])]),t._v(" "),e("h2",{attrs:{id:"每个人必须签署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每个人必须签署"}},[t._v("#")]),t._v(" 每个人必须签署")]),t._v(" "),e("p",[t._v("签署标签与提交很棒，但是如果决定在正常的工作流程中使用它，你必须确保团队中的每一个人都理解如何这样做。\n如果没有，你将会花费大量时间帮助其他人找出并用签名的版本重写提交。\n在采用签署成为标准工作流程的一部分前，确保你完全理解 GPG 及签署带来的好处。")])])}),[],!1,null,null,null);a.default=s.exports}}]);