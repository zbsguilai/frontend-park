(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dbb56a1"],{"04d1":function(t,e,n){var i=n("342f"),a=i.match(/firefox\/(\d+)/i);t.exports=!!a&&+a[1]},"107c":function(t,e,n){var i=n("d039");t.exports=i((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var i=n("d784"),a=n("44e7"),o=n("825a"),r=n("1d80"),c=n("4840"),s=n("8aa5"),l=n("50c4"),u=n("14c3"),h=n("9263"),d=n("9f7f"),f=n("d039"),g=d.UNSUPPORTED_Y,v=[].push,p=Math.min,b=4294967295,m=!f((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(r(this)),o=void 0===n?b:n>>>0;if(0===o)return[];if(void 0===t)return[i];if(!a(t))return e.call(i,t,o);var c,s,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,g=new RegExp(t.source,d+"g");while(c=h.call(g,i)){if(s=g.lastIndex,s>f&&(u.push(i.slice(f,c.index)),c.length>1&&c.index<i.length&&v.apply(u,c.slice(1)),l=c[0].length,f=s,u.length>=o))break;g.lastIndex===c.index&&g.lastIndex++}return f===i.length?!l&&g.test("")||u.push(""):u.push(i.slice(f)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=r(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,a,n):i.call(String(a),e,n)},function(t,a){var r=n(i,this,t,a,i!==e);if(r.done)return r.value;var h=o(this),d=String(t),f=c(h,RegExp),v=h.unicode,m=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"g":"y"),x=new f(g?"^(?:"+h.source+")":h,m),w=void 0===a?b:a>>>0;if(0===w)return[];if(0===d.length)return null===u(x,d)?[d]:[];var y=0,k=0,I=[];while(k<d.length){x.lastIndex=g?0:k;var C,E=u(x,g?d.slice(k):d);if(null===E||(C=p(l(x.lastIndex+(g?k:0)),d.length))===y)k=s(d,k,v);else{if(I.push(d.slice(y,k)),I.length===w)return I;for(var R=1;R<=E.length-1;R++)if(I.push(E[R]),I.length===w)return I;k=y=C}}return I.push(d.slice(y)),I}]}),!m,g)},"14c3":function(t,e,n){var i=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"1dde":function(t,e,n){var i=n("d039"),a=n("b622"),o=n("2d00"),r=a("species");t.exports=function(t){return o>=51||!i((function(){var e=[],n=e.constructor={};return n[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1dee":function(t,e,n){},"2af8":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content",style:"background:"+t.background},[t._m(0),n("canvas",{ref:"canvas",attrs:{id:"canvas",width:"800",height:"800"}})]),n("div",{staticClass:"operations"},[n("div",{staticStyle:{height:"800px"}},[n("EasyForm",{attrs:{formParams:t.formParams},scopedSlots:t._u([{key:"inputFile",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.inputFile}},[t._v(" 选择文件 ")]),n("div",[t._v("共选择"+t._s(t.imgList.length)+"个文件")])]}}])}),n("el-button",{attrs:{type:"primary",size:"default"},on:{click:t.reload}},[t._v("重置")]),n("el-button",{attrs:{type:"primary",size:"default"},on:{click:t.generateImg}},[t._v("生成图片")]),n("el-button",{attrs:{type:"success",size:"default"},on:{click:t.exportCanvas}},[t._v("导出图片")])],1)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"left",width:"800px"}},[n("p",[t._v("使用方法:")]),n("p",{staticStyle:{"font-size":"12px"}},[t._v(" 选取目标文件后,再选取需要用来合成目标文件的素材图片,通过自定义的一些配置,生成像素图,点击导出图片即可 ")])])}],o=n("1da1");n("96cf"),n("4e82"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("99af");function r(t){return new Promise((function(e,n){try{var i=document.createElement("canvas");i.width=20,i.height=20;var a=new Image;a.src=t,a.onload=function(){console.log(a.width,a.height);var n=i.getContext("2d"),o=i.height/a.height;a.height=i.height,a.width=a.width*o,n.drawImage(a,0,0,i.width,i.height);for(var r=n.getImageData(0,0,i.width,i.height).data,c=0,s=0,l=0,u=0,h=0;h<i.height;h++)for(var d=0;d<i.width;d++)c+=r[4*(i.width*h+d)],s+=r[4*(i.width*h+d)+1],l+=r[4*(i.width*h+d)+2],u+=r[4*(i.width*h+d)+3];c/=i.width*i.height,s/=i.width*i.height,l/=i.width*i.height,u/=i.width*i.height,c=Math.round(c),s=Math.round(s),l=Math.round(l),u=Math.round(u),console.log("%c ".concat("rgba("+c+","+s+","+l+","+u+")","\n                                                                        "),"background: ".concat("rgba("+c+","+s+","+l+","+u+")",";")),e({color:[c,s,l,u],url:t})}}catch(o){n(o)}}))}var c=n("0a07");n("ac1f"),n("1276");function s(t){for(var e=[],n=0;n<t.length;n++){for(var i=[],a="",o=0;o<t[o].color.length;o++)a=t[n].color[o],a in i?++i[a]:i[a]=1;var r=[];for(var c in i)r.push({color:c.split(","),count:i[c]});r.sort((function(t,e){return e.count-t.count})),r[0].position=t[n].position,e.push(r[0])}return e}var l=n("7a94"),u={name:"Home",components:{},data:function(){return{imgList:[],blockList:[],blockMainColors:[],loading:!1,formParams:{data:{},formList:{targetFile:{type:"upload",label:"目标图片",limit:1,action:"#",listType:"file-list",fileList:[],autoUpload:!1,onChange:this.slectFile},inputFile:{type:"customItem",label:"素材图片",name:"inputFile"},aaa:{type:"select",label:"分布方式",placeholder:"请选择",selectOptions:[],disabled:!0},bbb:{type:"select",label:"高清程度",placeholder:"请选择",selectOptions:[],disabled:!0},ccc:{type:"switch",label:"连续重复:",placeholder:"请选择",disabled:!0},ddd:{type:"switch",label:"按比例调整",disabled:!0},eee:{type:"select",label:"方向／比例",selectOptions:[],disabled:!0},fff:{type:"slider",label:"贴片高度",disabled:!0},ggg:{type:"slider",label:"贴片宽度",disabled:!0}},labelWidth:"90px",rules:{}},background:"#91A8D0",ctx:null,canvas:null}},mounted:function(){this.initCanvas()},methods:{initCanvas:function(){this.canvas=new l["fabric"].Canvas("canvas",{isDrawingMode:!1,selectable:!1,selection:!1,hoverCursor:"pointer",devicePixelRatio:!0,stroke:"lightgreen",strokeWidth:4}),this.ctx=canvas.getContext("2d"),this.canvas.freeDrawingBrush.color="blue",this.canvas.freeDrawingBrush.width=5,this.addCanvasEvent()},reload:function(){console.log(this.canvas.viewportTransform),this.canvas.deactivateAll().renderAll()},generateImg:function(){var t=this;this.loading=!0;for(var e=[],n=0;n<this.blockMainColors.length;n++){e[n]={diffs:[]};for(var i=0;i<this.imgList.length;i++)e[n].diffs.push({url:this.imgList[i].url,diff:this.colorDiff(this.blockMainColors[n].color,this.imgList[i].color),color:this.imgList[i].color});e[n].diffs.sort((function(t,e){return t.diff-e.diff})),e[n].url=e[n].diffs[0].url,e[n].position=this.blockMainColors[n].position,e[n].Acolor=this.blockMainColors[n].color,e[n].Bcolor=e[n].diffs[0].color}this.loading=!1,console.log(e),e.forEach((function(e){l["fabric"].Image.fromURL(e.url,(function(n){var i=n.height>n.width?8/n.width:8/n.height;n.set({left:8*e.position[0],top:8*e.position[1],originX:"center",scaleX:i,scaleY:i}),t.canvas.add(n)}))}))},slectFile:function(t,e){var n=window.URL.createObjectURL(t.raw);this.drawImage(n)},inputFile:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])();case 2:n=e.sent,t.loading=!0,i=0;case 5:if(!(i<n.length)){e.next=13;break}return e.next=8,r(n[i]);case 8:a=e.sent,t.imgList.push(a);case 10:i++,e.next=5;break;case 13:console.log(t.imgList),t.loading=!1;case 15:case"end":return e.stop()}}),e)})))()},drawLine:function(){for(var t=8,e=0;e<=this.canvas.width/t;e++)this.canvas.add(new l["fabric"].Line([e*t,0,e*t,this.canvas.height],{left:e*t,stroke:"gray",selectable:!1})),this.canvas.add(new l["fabric"].Line([0,e*t,this.canvas.height,e*t],{top:e*t,stroke:"gray",selectable:!1}))},getCanvasData:function(){for(var t=0;t<this.canvas.height/8;t++)for(var e=0;e<this.canvas.width/8;e++){var n=this.ctx.getImageData(8*e,8*t,8,8).data;this.blockList[100*t+e]={position:[e,t],color:[]};for(var i=0;i<n.length;i+=4)this.blockList[100*t+e].color.push([n[i],n[i+1],n[i+2],n[i+3]])}console.log(s(this.blockList)),this.mostBlockColor(this.blockList),this.loading=!1},drawImage:function(t){var e=this;this.loading=!0,l["fabric"].Image.fromURL(t,(function(t){var n=t.height>t.width?e.canvas.width/t.width:e.canvas.height/t.height;t.set({left:e.canvas.width/2,originX:"center",originY:"center",top:e.canvas.height/2,scaleX:n,scaleY:n,selectable:!1}),t.on("added",(function(t){setTimeout((function(){e.getCanvasData()}),500)})),e.canvas.add(t)}))},mostBlockColor:function(t){for(var e=0;e<t.length;e++){for(var n=0,i=0,a=0,o=0,r=0;r<t[e].color[r].length;r++)n+=t[e].color[r][0],i+=t[e].color[r][1],a+=t[e].color[r][2],o+=t[e].color[r][3];n/=t[e].color[0].length,i/=t[e].color[0].length,a/=t[e].color[0].length,o/=t[e].color[0].length,n=Math.round(n),i=Math.round(i),a=Math.round(a),o=Math.round(o),this.blockMainColors.push({position:t[e].position,color:[n,i,a,o]})}console.log(this.blockMainColors)},colorDiff:function(t,e){for(var n=0,i=0;i<t.length;i++)n+=Math.pow(t[i]-e[i],2);return Math.sqrt(n)},addCanvasEvent:function(){var t=this;this.canvas.on("after:render",(function(t){})),this.canvas.on("object:added",(function(t){})),this.canvas.on("mouse:down",(function(e){if(e.e.ctrlKey){var n=t.canvas.getPointer(e.e),i=parseInt(n.x),a=parseInt(n.y),o=t.ctx.getImageData(i,a,1,1).data;console.log("%c x,y:(".concat(i,",").concat(a,")/rgba(").concat(o[0],",").concat(o[1],",").concat(o[2],",").concat(o[3],")"),"background: rgba(".concat(o[0],",").concat(o[1],",").concat(o[2],",").concat(o[3],");"))}})),this.canvas.on("mouse:wheel",(function(e){e.e.preventDefault(),e.e.stopPropagation();var n=.05,i=new l["fabric"].Point(t.canvas.width/2-1,t.canvas.height/2-1);e.e.ctrlKey&&(e.e.altKey&&e.e.ctrlKey&&(i=new l["fabric"].Point(e.pointer.x,e.pointer.y)),t.zoom=(e.e.deltaY>0?-n:n)+t.canvas.getZoom(),t.zoom=Math.max(.1,t.zoom),t.zoom=Math.min(10,t.zoom),t.canvas.zoomToPoint(i,t.zoom))})),this.canvas.on({"mouse:down":function(e){e.e.altKey&&(t.panning=!0,t.canvas.selection=!1)},"mouse:up":function(e){t.panning=!1,t.canvas.selection=!0},"mouse:move":function(e){if(t.panning&&e&&e.e){var n=new l["fabric"].Point(e.e.movementX,e.e.movementY);t.canvas.relativePan(n)}}}),this.canvas.on({"object:moving":function(t){t.target.opacity=.5},"object:modified":function(t){t.target.opacity=1}})},exportCanvas:function(){var t=this.canvas.toDataURL({width:this.canvas.width,height:this.canvas.height,left:0,top:0,format:"png"}),e=document.createElement("a");e.download="canvas.png",e.href=t,document.body.appendChild(e),e.click(),document.body.removeChild(e)}}},h=u,d=(n("ef37"),n("2877")),f=Object(d["a"])(h,i,a,!1,null,"4964d3a2",null);e["default"]=f.exports},"44e7":function(t,e,n){var i=n("861d"),a=n("c6b6"),o=n("b622"),r=o("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==a(t))}},"4e82":function(t,e,n){"use strict";var i=n("23e7"),a=n("1c0b"),o=n("7b0b"),r=n("50c4"),c=n("d039"),s=n("addb"),l=n("a640"),u=n("04d1"),h=n("d998"),d=n("2d00"),f=n("512ce"),g=[],v=g.sort,p=c((function(){g.sort(void 0)})),b=c((function(){g.sort(null)})),m=l("sort"),x=!c((function(){if(d)return d<70;if(!(u&&u>3)){if(h)return!0;if(f)return f<603;var t,e,n,i,a="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(i=0;i<47;i++)g.push({k:e+i,v:n})}for(g.sort((function(t,e){return e.v-t.v})),i=0;i<g.length;i++)e=g[i].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}})),w=p||!b||!m||!x,y=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:String(e)>String(n)?1:-1}};i({target:"Array",proto:!0,forced:w},{sort:function(t){void 0!==t&&a(t);var e=o(this);if(x)return void 0===t?v.call(e):v.call(e,t);var n,i,c=[],l=r(e.length);for(i=0;i<l;i++)i in e&&c.push(e[i]);c=s(c,y(t)),n=c.length,i=0;while(i<n)e[i]=c[i++];while(i<l)delete e[i++];return e}})},"512ce":function(t,e,n){var i=n("342f"),a=i.match(/AppleWebKit\/(\d+)\./);t.exports=!!a&&+a[1]},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},9263:function(t,e,n){"use strict";var i=n("ad6d"),a=n("9f7f"),o=n("5692"),r=n("7c73"),c=n("69f3").get,s=n("fce3"),l=n("107c"),u=RegExp.prototype.exec,h=o("native-string-replace",String.prototype.replace),d=u,f=function(){var t=/a/,e=/b*/g;return u.call(t,"a"),u.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),g=a.UNSUPPORTED_Y||a.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],p=f||v||g||s||l;p&&(d=function(t){var e,n,a,o,s,l,p,b=this,m=c(b),x=m.raw;if(x)return x.lastIndex=b.lastIndex,e=d.call(x,t),b.lastIndex=x.lastIndex,e;var w=m.groups,y=g&&b.sticky,k=i.call(b),I=b.source,C=0,E=t;if(y&&(k=k.replace("y",""),-1===k.indexOf("g")&&(k+="g"),E=String(t).slice(b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==t[b.lastIndex-1])&&(I="(?: "+I+")",E=" "+E,C++),n=new RegExp("^(?:"+I+")",k)),v&&(n=new RegExp("^"+I+"$(?!\\s)",k)),f&&(a=b.lastIndex),o=u.call(y?n:b,E),y?o?(o.input=o.input.slice(C),o[0]=o[0].slice(C),o.index=b.lastIndex,b.lastIndex+=o[0].length):b.lastIndex=0:f&&o&&(b.lastIndex=b.global?o.index+o[0].length:a),v&&o&&o.length>1&&h.call(o[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o&&w)for(o.groups=l=r(null),s=0;s<w.length;s++)p=w[s],l[p[0]]=o[p[1]];return o}),t.exports=d},"99af":function(t,e,n){"use strict";var i=n("23e7"),a=n("d039"),o=n("e8b5"),r=n("861d"),c=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),h=n("1dde"),d=n("b622"),f=n("2d00"),g=d("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",b=f>=51||!a((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=h("concat"),x=function(t){if(!r(t))return!1;var e=t[g];return void 0!==e?!!e:o(t)},w=!b||!m;i({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,i,a,o,r=c(this),h=u(r,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(o=-1===e?r:arguments[e],x(o)){if(a=s(o.length),d+a>v)throw TypeError(p);for(n=0;n<a;n++,d++)n in o&&l(h,d,o[n])}else{if(d>=v)throw TypeError(p);l(h,d++,o)}return h.length=d,h}})},"9f7f":function(t,e,n){var i=n("d039"),a=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=i((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,n){"use strict";var i=n("23e7"),a=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},addb:function(t,e){var n=Math.floor,i=function(t,e){var r=t.length,c=n(r/2);return r<8?a(t,e):o(i(t.slice(0,c),e),i(t.slice(c),e),e)},a=function(t,e){var n,i,a=t.length,o=1;while(o<a){i=o,n=t[o];while(i&&e(t[i-1],n)>0)t[i]=t[--i];i!==o++&&(t[i]=n)}return t},o=function(t,e,n){var i=t.length,a=e.length,o=0,r=0,c=[];while(o<i||r<a)o<i&&r<a?c.push(n(t[o],e[r])<=0?t[o++]:e[r++]):c.push(o<i?t[o++]:e[r++]);return c};t.exports=i},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),a=n("9263"),o=n("d039"),r=n("b622"),c=n("9112"),s=r("species"),l=RegExp.prototype;t.exports=function(t,e,n,u){var h=r(t),d=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),f=d&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!d||!f||n){var g=/./[h],v=e(h,""[t],(function(t,e,n,i,o){var r=e.exec;return r===a||r===l.exec?d&&!o?{done:!0,value:g.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}));i(String.prototype,t,v[0]),i(l,h,v[1])}u&&c(l[h],"sham",!0)}},d998:function(t,e,n){var i=n("342f");t.exports=/MSIE|Trident/.test(i)},ef37:function(t,e,n){"use strict";n("1dee")},fce3:function(t,e,n){var i=n("d039");t.exports=i((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-6dbb56a1.f816733a.js.map