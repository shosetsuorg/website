(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{390:function(t,e,s){"use strict";s.r(e);var a=s(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frequently-asked-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[t._v("#")]),t._v(" Frequently Asked Questions")]),t._v(" "),s("h2",{attrs:{id:"how-to-edit-backup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-edit-backup"}},[t._v("#")]),t._v(" How to edit backup")]),t._v(" "),s("p",[t._v("First, one must understand what is going on in a Shosetsu backup file.")]),t._v(" "),s("p",[t._v("Shosetsu takes the data from the application, Turns it into a JSON file, then gzips it, then encodes via base64, then puts it all into a file.")]),t._v(" "),s("p",[t._v("To reverse this, the following command can be used in a Linux terminal.\nPlease ensure no other file exists with the same name.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" BACKUPFILE.sbk "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64 -d - "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" decompressed-backup.sbk.json\n")])])]),s("p",[t._v("This will print out the entire backup into the file "),s("code",[t._v("decompressed-backup.sbk.json")])]),t._v(" "),s("p",[t._v("Now you can format it, edit it, and look through it however you would like.")]),t._v(" "),s("p",[t._v("Upon completion, you can return it to the normal state with the following commands,\nEnsuring no other file exists with the same name.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" decompressed-backup.sbk.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" restored-backup.sbk\n")])])]),s("h2",{attrs:{id:"work-in-progress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#work-in-progress"}},[t._v("#")]),t._v(" Work in Progress")]),t._v(" "),s("p",[t._v("You can help fill this in by pressing the "),s("strong",[s("code",[t._v("Help us improve this page")])]),t._v(" link.")])])}),[],!1,null,null,null);e.default=n.exports}}]);