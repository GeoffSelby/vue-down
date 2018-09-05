(function(e){function t(t){for(var r,i,l=t[0],s=t[1],u=t[2],d=0,f=[];d<l.length;d++)i=l[d],a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a69":function(e,t,n){"use strict";var r=n("1e39"),a=n.n(r);a.a},"1e39":function(e,t,n){},"330f":function(e,t,n){},"557b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("557b"),n("e4cb");var r=n("2b0e"),a=n("2f62"),o=n("339e"),i=n.n(o),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col h-full min-h-full",attrs:{id:"app"}},[e._m(0),n("section",{staticClass:"flex h-full"},[n("Editor"),n("Preview")],1)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"w-full bg-white border-b border-grey"},[n("div",{staticClass:"px-6"},[n("nav",{staticClass:"flex items-center justify-between flex-wrap py-6"},[n("div",{staticClass:"flex items-center flex-no-shrink mr-6 text-lg"},[e._v("\n          VueDown\n        ")]),n("div",{staticClass:"text-sm flex items-center"},[n("a",{staticClass:"no-underline text-grey-darker",attrs:{href:"https://github.com/GeoffSelby/vue-down",target:"_blank"}},[e._v("GitHub")])])])])])}],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-1/2 border-r border-grey-light editor"})},c=[],d=n("84a6"),f={name:"Editor",data:function(){return{markdown:"Hello"}},watch:{markdown:function(e){window.store.commit("convertToHtml",{source:e})}},mounted:function(){var e=this,t=new d["a"](this.$el,{language:"markdown",lineNumbers:!0,defaultTheme:!1});t.addLanguage("markdown",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),t.onUpdate(function(t){e.markdown=t}),document.querySelector(".codeflask__textarea").focus()}},p=f,v=(n("1a69"),n("2877")),b=Object(v["a"])(p,u,c,!1,null,"43b93e08",null);b.options.__file="Editor.vue";var m=b.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-1/2"},[n("div",{staticClass:"preview",class:""==e.code?"bg-grey-lighter":"bg-white"},[""==e.code?n("div",{staticClass:"empty-state h-full w-full flex flex-col justify-center items-center"},[n("h1",{staticClass:"block text-xl text-grey font-medium pb-2"},[e._v("Nothing to see here")]),n("p",{staticClass:"block text-grey"},[e._v("Type some markdown in the editor and see a live preview here!")])]):n("div",[n("article",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.code)}})])])])},w=[],_={name:"Preview",computed:{code:function(){return window.store.state.code}}},g=_,y=(n("d85c"),Object(v["a"])(g,h,w,!1,null,"93710f06",null));y.options.__file="Preview.vue";var x=y.exports,k={name:"app",components:{Editor:m,Preview:x}},C=k,$=Object(v["a"])(C,l,s,!1,null,null,null);$.options.__file="App.vue";var j=$.exports;r["a"].use(a["a"]),r["a"].config.productionTip=!1,window.store=new a["a"].Store({state:{code:""},mutations:{convertToHtml:function(e,t){var n=new i.a.Converter;n.setFlavor("github"),e.code=n.makeHtml(t.source)}}}),new r["a"]({render:function(e){return e(j)}}).$mount("#app")},d85c:function(e,t,n){"use strict";var r=n("330f"),a=n.n(r);a.a}});
//# sourceMappingURL=app.69a90a94.js.map