var ae=Object.defineProperty,oe=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var Y=(n,e,t)=>e in n?ae(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,L=(n,e)=>{for(var t in e||(e={}))G.call(e,t)&&Y(n,t,e[t]);if(U)for(var t of U(e))M.call(e,t)&&Y(n,t,e[t]);return n},H=(n,e)=>oe(n,le(e));var X=(n,e)=>{var t={};for(var s in n)G.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&U)for(var s of U(n))e.indexOf(s)<0&&M.call(n,s)&&(t[s]=n[s]);return t};import{S as ce,i as ue,s as fe,e as he,c as de,a as _e,d as R,b as C,f as k,t as pe,g as ge,h as me,j as S,k as we,l as b,m as N,n as ve,o as O,p as z,q as x,r as I,u as y,v as T,w as q,x as w,y as be,z as ye,A as Ee,B,C as K}from"./chunks/vendor-c87c98e0.js";function F(n){let e,t,s;const r=[n[2]||{}];var a=n[0][1];function i(o){let l={$$slots:{default:[Re]},$$scope:{ctx:o}};for(let c=0;c<r.length;c+=1)l=B(l,r[c]);return{props:l}}return a&&(e=new a(i(n))),{c(){e&&S(e.$$.fragment),t=b()},l(o){e&&N(e.$$.fragment,o),t=b()},m(o,l){e&&O(e,o,l),k(o,t,l),s=!0},p(o,l){const c=l&4?z(r,[x(o[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:o}),a!==(a=o[0][1])){if(e){I();const f=e;y(f.$$.fragment,1,0,()=>{T(f,1)}),q()}a?(e=new a(i(o)),S(e.$$.fragment),w(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else a&&e.$set(c)},i(o){s||(e&&w(e.$$.fragment,o),s=!0)},o(o){e&&y(e.$$.fragment,o),s=!1},d(o){o&&R(t),e&&T(e,o)}}}function Q(n){let e,t,s;const r=[n[3]||{}];var a=n[0][2];function i(o){let l={};for(let c=0;c<r.length;c+=1)l=B(l,r[c]);return{props:l}}return a&&(e=new a(i())),{c(){e&&S(e.$$.fragment),t=b()},l(o){e&&N(e.$$.fragment,o),t=b()},m(o,l){e&&O(e,o,l),k(o,t,l),s=!0},p(o,l){const c=l&8?z(r,[x(o[3]||{})]):{};if(a!==(a=o[0][2])){if(e){I();const f=e;y(f.$$.fragment,1,0,()=>{T(f,1)}),q()}a?(e=new a(i()),S(e.$$.fragment),w(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else a&&e.$set(c)},i(o){s||(e&&w(e.$$.fragment,o),s=!0)},o(o){e&&y(e.$$.fragment,o),s=!1},d(o){o&&R(t),e&&T(e,o)}}}function Re(n){let e,t,s=n[0][2]&&Q(n);return{c(){s&&s.c(),e=b()},l(r){s&&s.l(r),e=b()},m(r,a){s&&s.m(r,a),k(r,e,a),t=!0},p(r,a){r[0][2]?s?(s.p(r,a),a&1&&w(s,1)):(s=Q(r),s.c(),w(s,1),s.m(e.parentNode,e)):s&&(I(),y(s,1,1,()=>{s=null}),q())},i(r){t||(w(s),t=!0)},o(r){y(s),t=!1},d(r){s&&s.d(r),r&&R(e)}}}function $e(n){let e,t,s=n[0][1]&&F(n);return{c(){s&&s.c(),e=b()},l(r){s&&s.l(r),e=b()},m(r,a){s&&s.m(r,a),k(r,e,a),t=!0},p(r,a){r[0][1]?s?(s.p(r,a),a&1&&w(s,1)):(s=F(r),s.c(),w(s,1),s.m(e.parentNode,e)):s&&(I(),y(s,1,1,()=>{s=null}),q())},i(r){t||(w(s),t=!0)},o(r){y(s),t=!1},d(r){s&&s.d(r),r&&R(e)}}}function Z(n){let e,t=n[5]&&ee(n);return{c(){e=he("div"),t&&t.c(),this.h()},l(s){e=de(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=_e(e);t&&t.l(r),r.forEach(R),this.h()},h(){C(e,"id","svelte-announcer"),C(e,"aria-live","assertive"),C(e,"aria-atomic","true"),C(e,"class","svelte-1j55zn5")},m(s,r){k(s,e,r),t&&t.m(e,null)},p(s,r){s[5]?t?t.p(s,r):(t=ee(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&R(e),t&&t.d()}}}function ee(n){let e;return{c(){e=pe(n[6])},l(t){e=ge(t,n[6])},m(t,s){k(t,e,s)},p(t,s){s&64&&me(e,t[6])},d(t){t&&R(e)}}}function Le(n){let e,t,s,r;const a=[n[1]||{}];var i=n[0][0];function o(c){let f={$$slots:{default:[$e]},$$scope:{ctx:c}};for(let h=0;h<a.length;h+=1)f=B(f,a[h]);return{props:f}}i&&(e=new i(o(n)));let l=n[4]&&Z(n);return{c(){e&&S(e.$$.fragment),t=we(),l&&l.c(),s=b()},l(c){e&&N(e.$$.fragment,c),t=ve(c),l&&l.l(c),s=b()},m(c,f){e&&O(e,c,f),k(c,t,f),l&&l.m(c,f),k(c,s,f),r=!0},p(c,[f]){const h=f&2?z(a,[x(c[1]||{})]):{};if(f&525&&(h.$$scope={dirty:f,ctx:c}),i!==(i=c[0][0])){if(e){I();const d=e;y(d.$$.fragment,1,0,()=>{T(d,1)}),q()}i?(e=new i(o(c)),S(e.$$.fragment),w(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}else i&&e.$set(h);c[4]?l?l.p(c,f):(l=Z(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){r||(e&&w(e.$$.fragment,c),r=!0)},o(c){e&&y(e.$$.fragment,c),r=!1},d(c){e&&T(e,c),c&&R(t),l&&l.d(c),c&&R(s)}}}function ke(n,e,t){let{stores:s}=e,{page:r}=e,{components:a}=e,{props_0:i=null}=e,{props_1:o=null}=e,{props_2:l=null}=e;be("__svelte__",s),ye(s.page.notify);let c=!1,f=!1,h=null;return Ee(()=>{const d=s.page.subscribe(()=>{c&&(t(5,f=!0),t(6,h=document.title||"untitled page"))});return t(4,c=!0),d}),n.$$set=d=>{"stores"in d&&t(7,s=d.stores),"page"in d&&t(8,r=d.page),"components"in d&&t(0,a=d.components),"props_0"in d&&t(1,i=d.props_0),"props_1"in d&&t(2,o=d.props_1),"props_2"in d&&t(3,l=d.props_2)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(r)},[a,i,o,l,c,f,h,s,r]}class Ae extends ce{constructor(e){super();ue(this,e,ke,Le,fe,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const Se="modulepreload",te={},Oe="/_app/",_=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${Oe}${s}`,s in te)return;te[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":Se,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((o,l)=>{i.addEventListener("load",o),i.addEventListener("error",l)})})).then(()=>e())},u=[()=>_(()=>import("./pages/__layout.svelte-52ddb219.js"),["pages/__layout.svelte-52ddb219.js","chunks/vendor-c87c98e0.js"]),()=>_(()=>import("./error.svelte-74814f08.js"),["error.svelte-74814f08.js","chunks/vendor-c87c98e0.js"]),()=>_(()=>import("./pages/index.svelte-c0b311cf.js"),["pages/index.svelte-c0b311cf.js","chunks/vendor-c87c98e0.js","chunks/header-04a8e929.js","chunks/link-c25dbb92.js","assets/link-b09cc9b3.css","chunks/pondlife-e849310d.js"]),()=>_(()=>import("./pages/discone/__layout.reset.svelte-9af1d80f.js"),["pages/discone/__layout.reset.svelte-9af1d80f.js","chunks/vendor-c87c98e0.js"]),()=>_(()=>import("./pages/discone/index.svelte-9c6bbdaf.js"),["pages/discone/index.svelte-9c6bbdaf.js","chunks/vendor-c87c98e0.js"]),()=>_(()=>import("./pages/discone/press.svelte-ea1dd9e1.js"),["pages/discone/press.svelte-ea1dd9e1.js","assets/pages/discone/press.svelte-c00fbfdb.css","chunks/vendor-c87c98e0.js","chunks/link-c25dbb92.js","assets/link-b09cc9b3.css"]),()=>_(()=>import("./pages/grass/index.svelte-9663028b.js"),["pages/grass/index.svelte-9663028b.js","chunks/vendor-c87c98e0.js","chunks/header-04a8e929.js","chunks/gitg-560c4b19.js","chunks/link-c25dbb92.js","assets/link-b09cc9b3.css","chunks/pondlife-e849310d.js"]),()=>_(()=>import("./pages/grass/events/index.svelte-5cae24f7.js"),["pages/grass/events/index.svelte-5cae24f7.js","chunks/vendor-c87c98e0.js","chunks/header-04a8e929.js","chunks/link-c25dbb92.js","assets/link-b09cc9b3.css","chunks/gitg-560c4b19.js"]),()=>_(()=>import("./pages/grass/games/index.svelte-65307846.js"),["pages/grass/games/index.svelte-65307846.js","chunks/vendor-c87c98e0.js","chunks/header-04a8e929.js","chunks/link-c25dbb92.js","assets/link-b09cc9b3.css","chunks/gitg-560c4b19.js"]),()=>_(()=>import("./pages/write/index.svelte-432ecb4d.js"),["pages/write/index.svelte-432ecb4d.js","chunks/vendor-c87c98e0.js","chunks/header-04a8e929.js"]),()=>_(()=>import("./pages/write/devlog.svelte-408f5def.js"),["pages/write/devlog.svelte-408f5def.js","chunks/vendor-c87c98e0.js","chunks/header-04a8e929.js","chunks/link-c25dbb92.js","assets/link-b09cc9b3.css"]),()=>_(()=>import("./pages/write/posts/21-12-15-00-10-feedback.svelte-0ed4ac5c.js"),["pages/write/posts/21-12-15-00-10-feedback.svelte-0ed4ac5c.js","chunks/vendor-c87c98e0.js","chunks/Post-baae0d92.js"]),()=>_(()=>import("./pages/write/posts/22-01-08-02-32-re-chew.svelte-3cdeed02.js"),["pages/write/posts/22-01-08-02-32-re-chew.svelte-3cdeed02.js","chunks/vendor-c87c98e0.js","chunks/Post-baae0d92.js"]),()=>_(()=>import("./pages/write/posts/21-12-14-23-30-outlet.svelte-e763492e.js"),["pages/write/posts/21-12-14-23-30-outlet.svelte-e763492e.js","chunks/vendor-c87c98e0.js","chunks/Post-baae0d92.js"]),()=>_(()=>import("./pages/write/posts/22-01-08-03-00-a-game.svelte-5459cea8.js"),["pages/write/posts/22-01-08-03-00-a-game.svelte-5459cea8.js","chunks/vendor-c87c98e0.js","chunks/Post-baae0d92.js"]),()=>_(()=>import("./pages/write/posts/21-12-14-23-52-chew.svelte-71606c3e.js"),["pages/write/posts/21-12-14-23-52-chew.svelte-71606c3e.js","chunks/vendor-c87c98e0.js","chunks/link-c25dbb92.js","assets/link-b09cc9b3.css","chunks/Post-baae0d92.js"]),()=>_(()=>import("./pages/zines/index.svelte-d1db19cf.js"),["pages/zines/index.svelte-d1db19cf.js","chunks/vendor-c87c98e0.js","chunks/header-04a8e929.js","chunks/link-c25dbb92.js","assets/link-b09cc9b3.css","chunks/pondlife-e849310d.js"]),()=>_(()=>import("./pages/zines/rats/__layout.reset.svelte-9597a16f.js"),["pages/zines/rats/__layout.reset.svelte-9597a16f.js","chunks/vendor-c87c98e0.js"]),()=>_(()=>import("./pages/zines/rats/index.svelte-12811fe8.js"),["pages/zines/rats/index.svelte-12811fe8.js","assets/pages/zines/rats/index.svelte-14b0b2fc.css","chunks/vendor-c87c98e0.js","chunks/link-c25dbb92.js","assets/link-b09cc9b3.css"])],Te=[[/^\/$/,[u[0],u[2]],[u[1]]],[/^\/discone\/?$/,[u[3],u[4]],[]],[/^\/discone\/press\/?$/,[u[3],u[5]],[]],[/^\/grass\/?$/,[u[0],u[6]],[u[1]]],[/^\/grass\/events\/?$/,[u[0],u[7]],[u[1]]],[/^\/grass\/games\/?$/,[u[0],u[8]],[u[1]]],,[/^\/write\/?$/,[u[0],u[9]],[u[1]]],[/^\/write\/devlog\/?$/,[u[0],u[10]],[u[1]]],[/^\/write\/posts\/21-12-15-00-10-feedback\/?$/,[u[0],u[11]],[u[1]]],[/^\/write\/posts\/22-01-08-02-32-re-chew\/?$/,[u[0],u[12]],[u[1]]],[/^\/write\/posts\/21-12-14-23-30-outlet\/?$/,[u[0],u[13]],[u[1]]],[/^\/write\/posts\/22-01-08-03-00-a-game\/?$/,[u[0],u[14]],[u[1]]],[/^\/write\/posts\/21-12-14-23-52-chew\/?$/,[u[0],u[15]],[u[1]]],[/^\/zines\/?$/,[u[0],u[16]],[u[1]]],[/^\/zines\/rats\/?$/,[u[17],u[18]],[]]],je=[u[0](),u[1]()];function Pe(n){let e=n.baseURI;if(!e){const t=n.getElementsByTagName("base");e=t.length?t[0].href:n.URL}return e}let se="";function Ie(n){se=n.base,n.assets}function J(){return{x:pageXOffset,y:pageYOffset}}function re(n){for(;n&&n.nodeName.toUpperCase()!=="A";)n=n.parentNode;return n}function ie(n){return n instanceof SVGAElement?new URL(n.href.baseVal,document.baseURI):new URL(n.href)}class qe{constructor({base:e,routes:t,trailing_slash:s,renderer:r}){this.base=e,this.routes=t,this.trailing_slash=s,this.navigating=0,this.renderer=r,r.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let e;addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(()=>{const a=H(L({},history.state||{}),{"sveltekit:scroll":J()});history.replaceState(a,document.title,window.location.href)},50)});const t=a=>{const i=re(a.target);i&&i.href&&i.hasAttribute("sveltekit:prefetch")&&this.prefetch(ie(i))};let s;const r=a=>{clearTimeout(s),s=setTimeout(()=>{t(a)},20)};addEventListener("touchstart",t),addEventListener("mousemove",r),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const i=re(a.target);if(!i||!i.href)return;const o=ie(i),l=o.toString();if(l===location.href){location.hash||a.preventDefault();return}const c=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||c&&c.includes("external")||(i instanceof SVGAElement?i.target.baseVal:i.target)||!this.owns(o))return;const f=i.hasAttribute("sveltekit:noscroll"),h=l.indexOf("#"),d=location.href.indexOf("#"),$=h>=0?l.substring(0,h):l,E=d>=0?location.href.substring(0,d):location.href;history.pushState({},"",o.href),$===E&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(o,f?J():null,!1,[],o.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const i=new URL(location.href);this._navigate(i,a.state["sveltekit:scroll"],!1,[])}})}owns(e){return e.origin===location.origin&&e.pathname.startsWith(this.base)}parse(e){if(this.owns(e)){const t=e.pathname.slice(this.base.length)||"/",s=decodeURI(t),r=this.routes.filter(([o])=>o.test(s)),a=new URLSearchParams(e.search);return{id:`${t}?${a}`,routes:r,path:t,decoded_path:s,query:a}}}async goto(e,{noscroll:t=!1,replaceState:s=!1,keepfocus:r=!1,state:a={}}={},i){const o=new URL(e,Pe(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](a,"",e),this._navigate(o,t?J():null,r,i,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(e){const t=this.parse(e);if(!t)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(t)}async _navigate(e,t,s,r,a){const i=this.parse(e);if(!i)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,i.path!=="/"){const o=i.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(i.path.split("/").pop()||"").includes("."))&&(i.path=o?i.path.slice(0,-1):i.path+"/",history.replaceState({},"",`${this.base}${i.path}${location.search}`))}await this.renderer.handle_navigation(i,r,!1,{hash:a,scroll:t,keepfocus:s}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function ne(n){return n instanceof Error||n&&n.name&&n.message?n:new Error(JSON.stringify(n))}function Ve(n){let e=5381,t=n.length;if(typeof n=="string")for(;t;)e=e*33^n.charCodeAt(--t);else for(;t;)e=e*33^n[--t];return(e>>>0).toString(36)}function De(n){const e=n.status&&n.status>=400&&n.status<=599&&!n.redirect;if(n.error||e){const t=n.status;if(!n.error&&e)return{status:t||500,error:new Error};const s=typeof n.error=="string"?new Error(n.error):n.error;return s instanceof Error?!t||t<400||t>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:t,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(n.redirect){if(!n.status||Math.floor(n.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof n.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(n.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return n}function Ue(n){const e=K(n);let t=!0;function s(){t=!0,e.update(i=>i)}function r(i){t=!1,e.set(i)}function a(i){let o;return e.subscribe(l=>{(o===void 0||t&&l!==o)&&i(o=l)})}return{notify:s,set:r,subscribe:a}}function Ce(n,e){const t=typeof n=="string"?n:n.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(t)}]`;e&&typeof e.body=="string"&&(s+=`[data-body="${Ve(e.body)}"]`);const r=document.querySelector(s);if(r&&r.textContent){const a=JSON.parse(r.textContent),{body:i}=a,o=X(a,["body"]);return Promise.resolve(new Response(i,o))}return fetch(n,e)}class Ne{constructor({Root:e,fallback:t,target:s,session:r,host:a}){this.Root=e,this.fallback=t,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Ue({}),navigating:K(null),session:K(r)},this.$session=null,this.root=null;let i=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!i||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),i=!0}async start({status:e,error:t,nodes:s,page:r}){const a=[];let i={},o,l;try{for(let c=0;c<s.length;c+=1){const f=c===s.length-1,h=await this._load_node({module:await s[c],page:r,stuff:i,status:f?e:void 0,error:f?t:void 0});if(a.push(h),h&&h.loaded)if(h.loaded.error){if(t)throw h.loaded.error;l={status:h.loaded.status,error:h.loaded.error,path:r.path,query:r.query}}else h.loaded.stuff&&(i=L(L({},i),h.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:r,branch:a})}catch(c){if(t)throw c;o=await this._load_error({status:500,error:ne(c),path:r.path,query:r.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}async handle_navigation(e,t,s,r){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:e.path,query:e.query}}),await this.update(e,t,s,r)}async update(e,t,s,r){const a=this.token={};let i=await this._get_navigation_result(e,s);if(a!==this.token)return;if(this.invalid.clear(),i.redirect)if(t.length>10||t.includes(e.path))i=await this._load_error({status:500,error:new Error("Redirect loop"),path:e.path,query:e.query});else{this.router?this.router.goto(i.redirect,{replaceState:!0},[...t,e.path]):location.href=new URL(i.redirect,location.href).href;return}if(i.reload?location.reload():this.started?(this.current=i.state,this.root.$set(i.props),this.stores.navigating.set(null)):this._init(i),r){const{hash:l,scroll:c,keepfocus:f}=r;f||document.body.focus();const h=l&&document.getElementById(l.slice(1));c?scrollTo(c.x,c.y):h?h.scrollIntoView():scrollTo(0,0)}if(await 0,this.loading.promise=null,this.loading.id=null,!this.router)return;const o=i.state.branch[i.state.branch.length-1];o&&o.module.router===!1?this.router.disable():this.router.enable()}load(e){return this.loading.promise=this._get_navigation_result(e,!1),this.loading.id=e.id,this.loading.promise}invalidate(e){return this.invalid.add(e),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const t=this.router&&this.router.parse(new URL(location.href));t&&await this.update(t,[],!0),this.invalidating=null})),this.invalidating}_init(e){this.current=e.state;const t=document.querySelector("style[data-svelte]");t&&t.remove(),this.root=new this.Root({target:this.target,props:L({stores:this.stores},e.props),hydrate:!0}),this.started=!0}async _get_navigation_result(e,t){if(this.loading.id===e.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<e.routes.length;s+=1){const r=e.routes[s];let a=s+1;for(;a<e.routes.length;){const o=e.routes[a];if(o[0].toString()===r[0].toString())o[1].forEach(l=>l()),a+=1;else break}const i=await this._load({route:r,info:e},t);if(i)return i}return await this._load_error({status:404,error:new Error(`Not found: ${e.path}`),path:e.path,query:e.query})}async _get_navigation_result_from_branch({page:e,branch:t}){const s=t.filter(Boolean),r=s.find(l=>l.loaded&&l.loaded.redirect),a={redirect:r&&r.loaded?r.loaded.redirect:void 0,state:{page:e,branch:t,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;a.props[`props_${l}`]=c?await c.props:null}(!this.current.page||e.path!==this.current.page.path||e.query.toString()!==this.current.page.query.toString())&&(a.props.page=e);const i=s[s.length-1],o=i.loaded&&i.loaded.maxage;if(o){const l=`${e.path}?${e.query}`;let c=!1;const f=()=>{this.cache.get(l)===a&&this.cache.delete(l),d(),clearTimeout(h)},h=setTimeout(f,o*1e3),d=this.stores.session.subscribe(()=>{c&&f()});c=!0,this.cache.set(l,a)}return a}async _load_node({status:e,error:t,module:s,page:r,stuff:a}){const i={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},o={};for(const c in r.params)Object.defineProperty(o,c,{get(){return i.uses.params.add(c),r.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,f={page:{host:r.host,params:o,get path(){return i.uses.path=!0,r.path},get query(){return i.uses.query=!0,r.query}},get session(){return i.uses.session=!0,l},get stuff(){return i.uses.stuff=!0,L({},a)},fetch(d,$){const E=typeof d=="string"?d:d.url,{href:j}=new URL(E,new URL(r.path,document.baseURI));return i.uses.dependencies.push(j),c?fetch(d,$):Ce(d,$)}};t&&(f.status=e,f.error=t);const h=await s.load.call(null,f);if(!h)return;i.loaded=De(h),i.loaded.stuff&&(i.stuff=i.loaded.stuff)}return i}async _load({route:e,info:{path:t,decoded_path:s,query:r}},a){const i=`${s}?${r}`;if(!a){const p=this.cache.get(i);if(p)return p}const[o,l,c,f]=e,h=f?f(o.exec(s)):{},d=this.current.page&&{path:t!==this.current.page.path,params:Object.keys(h).filter(p=>this.current.page.params[p]!==h[p]),query:r.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},$={host:this.host,path:t,query:r,params:h};let E=[],j={},W=!1,V=200,P;l.forEach(p=>p());e:for(let p=0;p<l.length;p+=1){let g;try{if(!l[p])continue;const v=await l[p](),m=this.current.branch[p];if(!m||v!==m.module||d.path&&m.uses.path||d.params.some(A=>m.uses.params.has(A))||d.query&&m.uses.query||d.session&&m.uses.session||m.uses.dependencies.some(A=>this.invalid.has(A))||W&&m.uses.stuff){g=await this._load_node({module:v,page:$,stuff:j});const A=p===l.length-1;if(g&&g.loaded){if(g.loaded.error&&(V=g.loaded.status,P=g.loaded.error),g.loaded.redirect)return{redirect:g.loaded.redirect,props:{},state:this.current};g.loaded.stuff&&(W=!0)}else if(A&&v.load)return}else g=m}catch(v){V=500,P=ne(v)}if(P){for(;p--;)if(c[p]){let v,m,D=p;for(;!(m=E[D]);)D-=1;try{if(v=await this._load_node({status:V,error:P,module:await c[p](),page:$,stuff:m.stuff}),v&&v.loaded&&v.loaded.error)continue;E=E.slice(0,D+1).concat(v);break e}catch{continue}}return await this._load_error({status:V,error:P,path:t,query:r})}else g&&g.loaded&&g.loaded.stuff&&(j=L(L({},j),g.loaded.stuff)),E.push(g)}return await this._get_navigation_result_from_branch({page:$,branch:E})}async _load_error({status:e,error:t,path:s,query:r}){const a={host:this.host,path:s,query:r,params:{}},i=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),o=[i,await this._load_node({status:e,error:t,module:await this.fallback[1],page:a,stuff:i&&i.loaded&&i.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:o})}}async function Be({paths:n,target:e,session:t,host:s,route:r,spa:a,trailing_slash:i,hydrate:o}){const l=new Ne({Root:Ae,fallback:je,target:e,session:t,host:s}),c=r?new qe({base:n.base,routes:Te,trailing_slash:i,renderer:l}):null;Ie(n),o&&await l.start(o),c&&(a&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Be as start};