var BM=BM||{};BM.config={B:{delay:7e3,maxUrlLength:300,sendlimit:20},D:{delay:1e3},S:{delay:500,distance:20},V:{buffer:30,timeout:5e3},TP:{delay:1e3},TK:{delay:2e3},TM:{delay:500,distance:50}},BM=BM||{},BM.rules={".b_scopebar":[0,80,0],".b_logo":[-1,-1,0],".b_searchboxForm":[100,19,0],"#id_h":[-1,-1,0],"#b_tween":[-1,-1,1],"#b_results":[100,-1,1],"#b_context":[710,-1,1],".b_ad > ul":[-1,-1,1],".b_footer":[0,-1,0],"#b_notificationContainer":[-1,-1,0],"#ajaxMaskLayer":[-1,-1,0],"img,div[data-src]":[-1,-1,0],iframe:[-1,-1,0]},function(n){function lt(){var n;if(!document.querySelector||!document.querySelectorAll){b('{"T": "CI.BoxModelError", "FID": "CI", "Name": '+tt+"}");return}c={},ut=0,o=[],r=document.documentElement,s=document.body,w=0,g=0,rt=0,u=[],f=0,y=!1;var l=r.clientWidth,v=r.clientHeight,p=window.pageXOffset||r.scrollLeft,h=window.pageYOffset||r.scrollTop;ft=a(window,"devicePixelRatio")?window.devicePixelRatio:-1,n=Math.floor(Math.random()*1e4).toString(36),t={P:{C:0,N:0,I:n,S:"T",T:0,K:i},B:{S:{x:p,y:h,w:l,h:v,dw:s.clientWidth,dh:s.clientHeight,d:ft},L:[],D:[]}},dt(),sj_be(window,"beforeunload",e,!1),sj_evt.bind("unload",e),sj_evt.bind("BMU",e)}function ct(n){var r,u,t;if(n.querySelectorAll)for(r in at){var f=at[r],e=f[0],o=f[1];for(r+=!f[2]?i:" >*",u=n.querySelectorAll(r),t=0;t<u.length;t++)vt(u[t],e,o)}}function ii(n,i){if(n){for(var r=0;r<t.B.L.length;r++)if(n===t.B.L[r]._e)return r;return i&&ct(n),vt(n)}return null}function vt(n,i,r){var u=et(n),f;if(!(u.x<0)&&!(u.y<0))return i&&(u._ex=i),r&&(u._ey=r),(n.tagName==="IMG"||n.tagName==="IFRAME")&&(u._s=gt(n)),f=t.B.L.length,t.B.L.push(u),f}function k(n,t){if(!y){b('{"T": "CI.BoxModelError", "FID": "CI", "Name": '+tt+', "S": '+n+"}");return}t=t||0;var i=+new Date+t;h(u,n)===-1&&u.push(n),t===0?(ot(),st()):i>f&&(ot(),rt=sb_st(st,t),f=i)}function ot(){f>0&&(sb_ct(rt),f=0)}function st(){var i,n;(w++<=pt||h(u,"U")>=0)&&(t.P.S=u.join(p[1]),i=sb_gt(),ri(),t.P.N=w,t.P.T=l(),t.P.C+=sb_gt()-i,n=oi(t),t.P.C=0,b(n),u=[],f=0)}function ri(){var n,i,r;for(ti(),n=0;n<t.B.L.length;n++)i=t.B.L[n],r=et(i._e),ni(i,r,n);it("compute")}function ni(n,i,r){for(var e=["x","y","w","h","n"],u,f=0;f<e.length;f++)u=e[f],n[u]!==i[u]&&(n[u]=i[u],"_c"in n&&t.B.D.push({l:r,p:u,v:i[u]}))}function ti(){for(var a=t.B.S.x,b=a+t.B.S.w,c=t.B.S.y,w=c+t.B.S.h,e=window.pageXOffset||r.scrollLeft,k=e+r.clientWidth,f=window.pageYOffset||r.scrollTop,g=f+r.clientHeight,d=l(),o=h(u,"V")>=0?0:d-ut,i=0;i<t.B.L.length;i++){var n=t.B.L[i],y=t.B.L[i].f,p=n.y+n.h,v=n.x+n.w;n.y>=c&&p<=w&&n.x>=a&&v<=b&&(n.f+=o),n.f>y&&"_c"in n&&t.B.D.push({l:i,p:"f",v:n.f})}ut=l(),t.P.T+=o,t.B.S={x:e,y:f,w:k-e,h:g-f,dw:s.clientWidth,dh:s.clientHeight,d:ft}}function b(n){if(a(window,"Log2")&&Log2.LogEvent&&JSON)Log2.LogEvent("ClientInst",JSON.parse(n));else{var r="/fd/ls/lsp.aspx",i=+new Date,f="<E><T>Event.ClientInst<\/T><IG>"+_G.IG+"<\/IG><TS>"+i+"<\/TS><D><![CDATA[["+n.replace("]\]>","]]]\]><![CDATA[>")+"]]\]><\/D><\/E>",u="<ClientInstRequest><Events>"+f+"<\/Events><STS>"+i+"<\/STS><\/ClientInstRequest>",t=sj_gx();t.open("POST",r,!0),t.setRequestHeader("Content-Type","text/xml"),t.send(u)}sj_evt.fire("BM",n)}function d(n){var r=i,f,t;for(f in n)if(t=n[f],t!==i){var o=typeof t=="number",u='"',e=o||t.indexOf("{")===0?i:u;r+=u+f+u+":"+e+t+e+","}return"{"+(r.length>0?r.substr(0,r.length-1):i)+"}"}function ei(n){return n.tagName+(n.id?"#"+n.id:n.className?"."+n.className:i)}function oi(n){function w(n,t){function y(n){return n.replace(fi,encodeURIComponent)}var a=!0,o=[],f,u,e,h,s,c,l;if(t=t||0,!("_c"in n)||t<=1){for(f in n)if(u=n[f],h=f.charCodeAt(0)>=65&&f.charCodeAt(0)<=90,h&&o.push(f),f.indexOf("_")===0)continue;else typeof u=="number"?(e=parseInt(u).toString(36),o.push(e),b(e)):typeof u=="string"?(e=y(u),o.push(e),b(e)):u==null?o.push(i):typeof u=="object"&&(s=w(u,t+1,f),(s&&s.length>0||h)&&o.push(s),a=!1);a&&(n._c=!0)}return c=p[t],l=o.join(v+c+v),l}function b(n){n.length>2&&(n in nt&&h(o,n)===-1?o.push(n):nt[n]=1)}var rt=sb_gt(),nt={},y={T:"CI.BoxModel",FID:"CI",Name:tt,P:i},f={},k,r,it,l,e,s,u,a;for(r in n)r!=="P"&&(f[r]=w(n[r]).split(v));k=o.slice(g).join(p[1]),g=o.length,t.P.K=k;for(r in f){for(u=0;u<f[r].length;u++)it=f[r][u],l=h(o,it),l>=0&&(f[r][u]=v+l.toString(36));for(e=f[r].join(i).split(p[0]),s={},u=0;u<e.length;u=u+2)s[e[u]]=e[u+1];a=d(s),r in c&&c[r]===a||(y[r]=c[r]=a)}return t.P.C+=sb_gt()-rt,y.P=d(t.P),d(y)}function h(n,t){for(var i=0;i<n.length;i++)if(n[i]===t)return i;return-1}function et(n){var t={s:ei(n),k:i,x:0,y:0,w:n.offsetWidth,h:n.offsetHeight,f:0,_e:n,_s:i,_ex:-1,_ey:-1},r=n.querySelector("a[h]"),u;t.k=r?r.getAttribute("h"):i,a(t,"k")&&(t.k=t.k?t.k.substr(t.k.indexOf("=")+1):i,t.k=t.k&&t.k.indexOf("javascript")>=0?i:t.k),u=n;try{if(n.offsetParent)do t.x+=n.offsetLeft,t.y+=n.offsetTop;while(n=n.offsetParent)}catch(f){t.x=-1,t.y=-1}return t}function gt(n){try{if(a(n,"src")&&n.src.indexOf("data")!==0)return n.src?n.src:i}catch(t){}return i}function l(){return _w.performance&&performance.now?yt(performance.now()):new Date-window.si_ST}function a(n,t){return typeof n[t]!="undefined"}function yt(n){return n<-1?-1:parseInt(n)}function dt(){var n=sb_gt();it("load"),y=!0,ct(document),k("T",wt),t.P.C+=sb_gt()-n}function e(){sj_ue(window,"beforeunload",e),sj_evt.unbind("unload",e),sj_evt.unbind("BMR",e),k("U"),y=!1,it("unload")}function it(n){for(var i=0;i<nt.length;i++)nt[i][n](t)}function bt(n){nt.push(n)}function kt(){sj_evt.bind("onP1",lt,!0),sj_evt.bind("ajax.postload",lt,!0)}if(!_w.BM||!n.register){var ui="B",tt="v2.5",i="",at=n.rules,ht=n.config[ui],wt=ht.delay,pt=ht.sendlimit,v="@",p=["$","+","/",":",";"],fi=/([%$+\/:;])/g,o,t,nt=[],ft,c,ut,u,f,rt,g,w,y,s,r;sb_st(kt,0),n.register=bt,n.snapshot=k,n.observe=ii,n.time=l}}(BM),function(n){function l(n){n[i]={S:[]},a=n,r=document.documentElement,sj_be(window,"scroll",u)}function u(){return t.push({t:n.time(),x:window.pageXOffset||r.scrollLeft,y:window.pageYOffset||r.scrollTop}),n.snapshot(i,c),!0}function o(n,t){var r=n.x-t.x,i=n.y-t.y;return Math.sqrt(r*r+i*i)}function s(n){for(var e,f=t.length,u,r=0;r<f;r++)u=t[r],(r===0||r===f-1||o(u,e)>=h)&&(n[i].S.push(u),e=u);t=[]}function e(){sj_ue(window,"scroll",u)}var i="S",t=[],f=n.config[i],c=f.delay,h=f.distance,r,a;n.register({load:l,compute:s,unload:e})}(BM),function(n){function f(){sj_be(window,"resize",t)}function t(){n.snapshot(u)}function r(){}function i(){sj_ue(window,"resize",t)}var u="R";n.register({load:f,compute:r,unload:i})}(BM),function(n){function e(){t in document&&sj_be(document,"visibilitychange",i,!1)}function i(){n.snapshot(document[t]?"H":f)}function u(){}function r(){t in document&&sj_ue(document,"visibilitychange",i)}var f="V",t="hidden";n.register({load:e,compute:u,unload:r})}(BM),function(n){function o(n){c=n;var t=typeof window.MutationObserver!="undefined"?new MutationObserver(u):null;t&&t.observe(document.body,{childList:!0,subtree:!0})}function u(u){var o,e,h,f,c;if(t!==null){for(o=[],e=0;e<u.length;e++)for(h=0;h<u[e].addedNodes.length;h++)f=u[e].addedNodes[h],c=f.tagName,r(f)&&(n.observe(f,!0),o.push(f.parentNode));o.length>0&&(i=o,n.snapshot("M",s))}}function r(n){var r=n.offsetWidth>=20||n.offsetHeight>=20,t=i.indexOf(n.parentNode)>=0;return r&&!t}function f(){}function e(){t&&t.disconnect(),t=null,i=[]}var l="D",h=n.config[l],s=h.delay,i=[],t,c;n.register({load:o,compute:f,unload:e})}(BM),function(n){function tt(n){n[u]={E:[]},a=n}function g(n){for(var tt=n[f].S.w,k,g,nt,c=0;c<n[f].L.length;c++){var a=n[f].L[c],r=a._e,w=a._s,v=a._ex,d=a._ey,y=b;v=_G.RTL&&v>=0?tt-v-r.offsetWidth:v,v>=0&&!o(a.x,v)&&(y=a.k.length===0?l(r):y,n[u].E.push({l:c,e:"X",v:Math.abs(a.x-v),m:y})),d>=0&&!o(a.y,d)&&(y=a.k.length===0?l(r):y,n[u].E.push({l:c,e:"Y",v:Math.abs(a.y-d),m:y})),r.tagName!=="IMG"||!w||c in t||(k=h(r,k)?r[k]:!0,g=h(r,p)?r[p]>1:!0,k?g||(t[c]={_e:r,_s:w,_d:!0,_b:!1},s(c,w)):(t[c]={_e:r,_s:w,_d:!1,_b:!0},e(r,!0))),r.tagName!=="DIV"||!r.hasAttribute("data-src")||c in t||(w=r.getAttribute("data-src"),nt=r.style.backgroundImage,nt||(t[c]={_e:r,_s:w,_d:!1,_b:!1},e(r,!1)))}}function e(n,t){t&&(sj_be(n,"load",i),sj_be(n,"error",i)),r||(r=sb_st(c,nt))}function i(n){var i=window.event||n,t=sj_et(n);return c(i.type,t)}function c(u,f){var c=0,e,o,h;for(e in t)if(!t[e]._d&&(!f||t[e]._e===f)&&(o=t[e]._e,h=o.tagName==="IMG"?!o[k]||u&&u==="error":!o.style.backgroundImage,t[e]._b&&(sj_ue(o,"load",i),sj_ue(o,"error",i)),h&&(s(e,t[e]._s),c++),t[e]._d=!0,f))return;c>0&&n.snapshot("E"),r=0}function s(n,t){a[u].E.push({l:n,e:"S",v:404,m:t.substr(0,v)})}function h(n,t){return typeof n[t]!="undefined"}function l(n){var t=n.querySelector("a");return t&&t.href?t.href.substr(0,v):b}function o(n,t){return n>=t-w&&n<=t+w}function d(){var u,n;for(u in t)n=t[u],n._b&&!n._d&&(sj_ue(n._e,"load",i),sj_ue(n._e,"error",i));r&&(sb_ct(r),r=0),t={}}var u="V",f="B",b="",k="complete",p="naturalWidth",y=n.config[u],w=y.buffer,v=n.config[f].maxUrlLength,nt=y.timeout,r=0,t={},a;n.register({load:tt,compute:g,unload:d})}(BM),function(n){function y(n){n[o]={F:0,E:0,N:[]}}function a(n){var u,g,d,b,w,p,v;if(_w.performance&&performance.now&&performance.getEntries){for(u=n[o],g=performance.timing,u.F=u.F>0?u.F:t(g.loadEventEnd-g.navigationStart),d=performance.getEntries(),b=d.length,w=s;w<b;w++){var c=d[w],y=c.name,a=l(y),nt=!0;for(y.indexOf("format=json")>=0?(u.F=t(c.duration),f=c.startTime):f>0&&location.hostname===a[0]&&y.toLowerCase().indexOf("event.cpt")>0&&(u.F=Math.max(u.F,t(c.startTime-f))),p=0;p<h.length;p++)if(a[0].indexOf(h[p])>=0||a[0]===r){nt=!1;break}var it=t(c.startTime-f),rt=t(c.duration),ut=null;for(v=0;v<n[e].L.length;v++){var k=n[e].L[v],ft=k._e,tt=k._s;if(tt&&y===tt){ut=v,u.F=k.y<=n[e].S.h?Math.max(it+rt,u.F):u.F;break}}u.N.push({l:ut,h:a[0],p:nt||a[0].length===0?a[2]:a[1],i:c.initiatorType,t:it,d:rt}),nt&&u.E++}s=b}}function l(n){var o,l,f,s,t,e,h;return i.href=n,s=i.hostname,t=i.pathname,t=t.indexOf(u)===0?t.substr(1):t,e=i.search.toLowerCase(),h=s.length>0?t.substr(0,c):n.substr(0,c),e.length>0&&(o=e.indexOf("event."))>0&&(l=e.indexOf("&data"))>0?t=e.substr(o,l-o).replace("event.",r):t.indexOf("rms/")===0&&(f=t.split(u))&&f.length>1?t=f[1].replace("rms%20answers%20",r).replace(".source",r):(f=t.split(u))&&f.length>=2&&(t=f[f.length-2]+u+f[f.length-1]),[s,t,h]}function t(n){return n<-1?-1:parseInt(n)}function v(){}var o="N",e="B",s=0,f=0,p=0,c=n.config[e].maxUrlLength,i=document.createElement("A"),r="",u="/",h=[location.hostname,"live.com","virtualearth.net","fbcdn.net","bing.net","akamaihd.net","twimg.com","msedge.net","skype.com","cloudfront.net"];n.register({load:y,compute:a,unload:v})}(BM)