webpackJsonp([1],[,,,,,,,,,,,,,,,function(t,e,n){function s(t){n(77)}var a=n(5)(n(53),n(90),s,"data-v-0fd0e5ba",null);t.exports=a.exports},,,,,,,,,function(t,e,n){function s(t){n(81)}var a=n(5)(n(57),n(94),s,"data-v-5a063174",null);t.exports=a.exports},function(t,e,n){"use strict";var s=n(2),a=n(95),i=n(24),r=n.n(i),c=n(87),o=n.n(c),l=n(88),u=n.n(l);s.default.use(a.a),e.a=new a.a({history:!0,mode:"history",routes:[{path:"/",name:"index",component:r.a},{path:"/case",name:"case",component:u.a},{path:"/article",name:"article",component:o.a},{path:"*",redirect:"/"}]})},,function(t,e){},function(t,e,n){function s(t){n(78)}var a=n(5)(n(52),n(91),s,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),a=n(26),i=n.n(a),r=n(27),c=(n.n(r),n(25)),o=n(28),l=n.n(o);s.default.config.productionTip=!1,s.default.use(i.a),new s.default({el:"#app",router:c.a,ElementUI:i.a,template:"<App/>",components:{App:l.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(24),a=n.n(s);e.default={name:"app",components:{Index:a.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{data:[{name:"首页",link:"/"},{name:"demo展示",link:"/case"},{name:"好文推荐",link:"/article"}]}},methods:{handleSelect:function(t,e){console.log(t,e)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{slides:{type:Array,default:[]},inv:{type:Number,default:1e3}},data:function(){return{nowIndex:0,isShow:!0}},computed:{prevIndex:function(){return 0===this.nowIndex?this.slides.length-1:this.nowIndex-1},nextIndex:function(){return this.nowIndex===this.slides.length-1?0:this.nowIndex+1}},methods:{goto:function(t){var e=this;this.isShow=!1,setTimeout(function(){e.isShow=!0,e.nowIndex=t},10),this.$emit("onchange",t)},runInterval:function(){var t=this;this.invId=setInterval(function(){t.goto(t.nextIndex)},this.inv)},clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){clearInterval(this.invId)})},mounted:function(){console.log(this.slides),this.runInterval()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(15),a=n.n(s);e.default={components:{NavMenu:a.a},data:function(){return{msg:"我是文章页"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(15),a=n.n(s),i=n(86),r=n.n(i);e.default={components:{NavMenu:a.a,SlideShow:r.a},data:function(){return{msg:"我是案例页",slideSpeed:2e3,slides:[{src:n(82),title:"xxx1",href:"javascript"},{src:n(83),title:"xxx2",href:"javascript"},{src:n(84),title:"xxx3",href:"javascript"},{src:n(85),title:"xxx4",href:"javascript"}]}},metch:{dosomethingOnSlide:function(){}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(15),a=n.n(s);e.default={components:{NavMenu:a.a},data:function(){return{msg:"我是首页"}}}},,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){t.exports=n.p+"static/img/slide1.c7fec15.jpg"},function(t,e,n){t.exports=n.p+"static/img/slide2.a8554ab.jpg"},function(t,e,n){t.exports=n.p+"static/img/slide3.4c41120.jpg"},function(t,e,n){t.exports=n.p+"static/img/slide4.ee802e7.jpg"},function(t,e,n){function s(t){n(76)}var a=n(5)(n(54),n(89),s,"data-v-0095ef06",null);t.exports=a.exports},function(t,e,n){function s(t){n(80)}var a=n(5)(n(55),n(93),s,"data-v-2706126a",null);t.exports=a.exports},function(t,e,n){function s(t){n(79)}var a=n(5)(n(56),n(92),s,"data-v-1e6b7528",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide-show",on:{mouseover:t.clearInterval,mouseout:t.runInterval}},[n("div",{staticClass:"slide-img"},[n("a",{attrs:{href:t.slides[t.nowIndex].href}},[n("transition",{attrs:{name:"slide-trans"}},[t.isShow?n("img",{attrs:{src:t.slides[t.nowIndex].src}}):t._e()]),t._v(" "),n("transition",{attrs:{name:"slide-trans-old"}},[t.isShow?t._e():n("img",{attrs:{src:t.slides[t.nowIndex].src}})])],1)]),t._v(" "),n("h2",[t._v(t._s(t.slides[t.nowIndex].title))]),t._v(" "),n("ul",{staticClass:"slide-pages"},[n("li",{on:{click:function(e){t.goto(t.prevIndex)}}},[t._v("<")]),t._v(" "),t._l(t.slides,function(e,s){return n("li",{on:{click:function(e){t.goto(s)}}},[n("a",{staticClass:"choose-num",class:{on:s===t.nowIndex},attrs:{href:"javascript"}},[t._v(t._s(s+1))])])}),t._v(" "),n("li",{on:{click:function(e){t.goto(t.nextIndex)}}},[t._v(">")])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"wrap-row"},[n("div",{staticClass:"wrap"},[n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content"})]),t._v(" "),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"wrap-main"},t._l(t.data,function(e,s){return n("a",{staticClass:"option",attrs:{href:e.link}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content"})])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("nav-menu"),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content"})]),t._v(" "),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"content"},[t._v("\n      我是案例页\n      \n        "),n("slide-show",{attrs:{slides:t.slides,inv:t.slideSpeed},on:{onchange:t.dosomethingOnSlide}})],1)]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content"})])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("nav-menu"),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content"})]),t._v(" "),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"content"},[n("div",{staticClass:"main"},[n("a",{staticClass:"link-article",attrs:{href:"https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md",target:"_blank"}},[t._v("Airbnb代码规范")]),t._v(" "),n("a",{staticClass:"link-article",attrs:{href:"http://www.fefork.com/fetool/",target:"_blank"}},[t._v("有点老的大前端工具集")]),t._v(" "),n("a",{staticClass:"link-article",attrs:{href:"http://es6.ruanyifeng.com",target:"_blank"}},[t._v("ES6教程--阮一峰经典")]),t._v(" "),n("a",{staticClass:"link-article",attrs:{href:"https://github.com/mqyqingfeng/Blog",target:"_blank"}},[t._v("冴羽博客--JavaScript深入系列")]),t._v(" "),n("a",{staticClass:"link-article",attrs:{href:"https://github.com/camsong/blog/issues/3",target:"_blank"}},[t._v("React Immutable Data")]),t._v(" "),n("a",{staticClass:"link-article",attrs:{href:"https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000",target:"_blank"}},[t._v("廖雪峰-git教程")]),t._v(" "),n("a",{staticClass:"link-article",attrs:{href:"https://github.com/kangbin/You-Dont-Know-JS",target:"_blank"}},[t._v("你不知道的JavaScript")]),t._v(" "),n("a",{staticClass:"link-article",attrs:{href:"https://segmentfault.com/a/1190000004322487",target:"_blank"}},[t._v("XMLHttpRequest 解读")]),t._v(" "),n("a",{staticClass:"link-article",attrs:{href:"http://www.css88.com/doc/chrome-devtools/",target:"_blank"}},[t._v("chrome调试工具详解")]),t._v(" "),n("a",{staticClass:"link-article",attrs:{href:"http://dockone.io/article/101",target:"_blank"}},[t._v("Docker经典")])])])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content"})])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("nav-menu"),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content"})]),t._v(" "),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"content"},[n("div",{staticClass:"main"},[n("h2",{staticClass:"title"},[t._v("掌握技能")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("1. 熟悉W3C标准，理解表现与数据分离、Web语义化。")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("2. 精通PC端HTML+CSS页面架构和布局方式。 ")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("3. 熟练使用JavaScript，熟练运用ES5，ES6及严格模式开发。   ")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("4. 有一定JavaScript面向对象思想，对代码模块化、组件化有一定理解。")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("   有项目模块化经验，能够使用require.js，可进行基于jQuery插件开发。")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("5. 理解AJAX运作机制，熟练使用AJAX进行数据获取及跨域请求。")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("7. 掌握HTML5，CSS3新增标签及属性。  ")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("8. 熟练使用，jQuery、Zepto.js类库进行PC及移动端开发。")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("9. 熟练使用React.js，Vue.js，Angular.js，ionic，bootstrap等框架类库。  ")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("10. 掌握webpack、gulp前端工程构建化工具。")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("11. 能够使用Github、SVN版本迭代工具。")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("12. 掌握sass/less、postcss开发规范。")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("13. 熟练运用windows及Mac OS系统进行开发。 ")]),t._v(" "),n("p",{staticClass:"line-txt"},[t._v("14. 后端语言了解Java、Node.js。")])])])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content"})])],1)},staticRenderFns:[]}}],[51]);
//# sourceMappingURL=app.258930e26ec6a53729a8.js.map