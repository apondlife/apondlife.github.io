function h(){}function D(t,e){for(const n in e)t[n]=e[n];return t}function M(t){return t()}function O(){return Object.create(null)}function m(t){t.forEach(M)}function F(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let g;function st(t,e){return g||(g=document.createElement("a")),g.href=e,t===g.href}function I(t){return Object.keys(t).length===0}function ut(t,e,n,i){if(t){const c=L(t,e,n,i);return t[0](c)}}function L(t,e,n,i){return t[1]&&i?D(n.ctx.slice(),t[1](i(e))):n.ctx}function ft(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const u=[],o=Math.max(e.dirty.length,c.length);for(let l=0;l<o;l+=1)u[l]=e.dirty[l]|c[l];return u}return e.dirty|c}return e.dirty}function at(t,e,n,i,c,u){if(c){const o=L(e,n,i,u);t.p(o,c)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function dt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ht(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}let x=!1;function G(){x=!0}function J(){x=!1}function K(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<e.length;s++){const a=e[s];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let r=0;r<e.length;r++){const s=e[r].claim_order,a=(c>0&&e[n[c]].claim_order<=s?c+1:K(1,c,y=>e[n[y]].claim_order,s))-1;i[r]=n[a]+1;const f=a+1;n[f]=r,c=Math.max(f,c)}const u=[],o=[];let l=e.length-1;for(let r=n[c]+1;r!=0;r=i[r-1]){for(u.push(e[r-1]);l>=r;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);u.reverse(),o.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<o.length;r++){for(;s<u.length&&o[r].claim_order>=u[s].claim_order;)s++;const a=s<u.length?u[s]:null;t.insertBefore(o[r],a)}}function W(t,e){if(x){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){x&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function R(t){t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function pt(){return k(" ")}function yt(){return k("")}function gt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function V(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:V(t,i,e[i])}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,e,n,i,c=!1){Y(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const r=n(l);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const r=n(l);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Z(t,e,n,i){return T(t,c=>c.nodeName===e,c=>{const u=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];n[l.name]||u.push(l.name)}u.forEach(o=>c.removeAttribute(o))},()=>i(e))}function bt(t,e,n){return Z(t,e,n,U)}function tt(t,e){return T(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(e),!0)}function $t(t){return tt(t," ")}function wt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Et(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function kt(t,e,n){t.classList[n?"add":"remove"](e)}function At(t,e=document.body){return Array.from(e.querySelectorAll(t))}let b;function $(t){b=t}function A(){if(!b)throw new Error("Function called outside component initialization");return b}function St(t){A().$$.on_mount.push(t)}function jt(t){A().$$.after_update.push(t)}function Nt(t,e){A().$$.context.set(t,e)}const p=[],z=[],w=[],B=[],et=Promise.resolve();let S=!1;function nt(){S||(S=!0,et.then(P))}function j(t){w.push(t)}let N=!1;const q=new Set;function P(){if(!N){N=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];$(e),it(e.$$)}for($(null),p.length=0;z.length;)z.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];q.has(e)||(q.add(e),e())}w.length=0}while(p.length);for(;B.length;)B.pop()();S=!1,N=!1,q.clear()}}function it(t){if(t.fragment!==null){t.update(),m(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const E=new Set;let _;function qt(){_={r:0,c:[],p:_}}function vt(){_.r||m(_.c),_=_.p}function rt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Ct(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Mt(t,e){const n={},i={},c={$$scope:1};let u=t.length;for(;u--;){const o=t[u],l=e[u];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)c[r]||(n[r]=l[r],c[r]=1);t[u]=l}else for(const r in o)c[r]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Lt(t){t&&t.c()}function Tt(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:c,on_mount:u,on_destroy:o,after_update:l}=t.$$;c&&c.m(e,n),i||j(()=>{const r=u.map(M).filter(F);o?o.push(...r):m(r),t.$$.on_mount=[]}),l.forEach(j)}function ot(t,e){const n=t.$$;n.fragment!==null&&(m(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(p.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function zt(t,e,n,i,c,u,o,l=[-1]){const r=b;$(t);const s=t.$$={fragment:null,ctx:null,props:u,update:h,not_equal:c,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:O(),dirty:l,skip_bound:!1,root:e.target||r.$$.root};o&&o(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(f,y,...v)=>{const C=v.length?v[0]:y;return s.ctx&&c(s.ctx[f],s.ctx[f]=C)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](C),a&&lt(t,f)),y}):[],s.update(),a=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){G();const f=X(e.target);s.fragment&&s.fragment.l(f),f.forEach(R)}else s.fragment&&s.fragment.c();e.intro&&rt(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),J(),P()}$(r)}class Bt{$destroy(){ot(this,1),this.$destroy=h}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const c=i.indexOf(n);c!==-1&&i.splice(c,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const d=[];function Pt(t,e=h){let n;const i=new Set;function c(l){if(H(t,l)&&(t=l,n)){const r=!d.length;for(const s of i)s[1](),d.push(s,t);if(r){for(let s=0;s<d.length;s+=2)d[s][0](d[s+1]);d.length=0}}}function u(l){c(l(t))}function o(l,r=h){const s=[l,r];return i.add(s),i.size===1&&(n=e(c)||h),l(t),()=>{i.delete(s),i.size===0&&(n(),n=null)}}return{set:c,update:u,subscribe:o}}export{St as A,D as B,Pt as C,W as D,h as E,ut as F,at as G,_t as H,ft as I,At as J,st as K,xt as L,kt as M,ht as N,dt as O,Et as P,gt as Q,Bt as S,X as a,V as b,bt as c,R as d,U as e,mt as f,tt as g,wt as h,zt as i,Lt as j,pt as k,yt as l,Tt as m,$t as n,ct as o,Mt as p,Ot as q,qt as r,H as s,k as t,Ct as u,ot as v,vt as w,rt as x,Nt as y,jt as z};