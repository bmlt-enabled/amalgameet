function _(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function M(){return Object.create(null)}function m(t){t.forEach(q)}function D(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function P(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ut(t,n,e){t.$$.on_destroy.push(P(n,e))}function st(t,n,e,i){if(t){const c=L(t,n,e,i);return t[0](c)}}function L(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function lt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],o=Math.max(n.dirty.length,c.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function ft(t,n,e,i,c,l){if(c){const o=L(n,e,i,l);t.p(o,c)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t,n,e){return t.set(e),n}let g=!1;function G(){g=!0}function J(){g=!1}function K(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:K(1,c,y=>n[e[y]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const l=[],o=[];let u=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);u>=r;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<o.length;r++){for(;s<l.length&&o[r].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[r],a)}}function R(t,n){if(g){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){g&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function W(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function mt(){return k(" ")}function pt(){return k("")}function yt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function gt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,c=!1){X(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Y(t,n,e,i){return T(t,c=>c.nodeName===n,c=>{const l=[];for(let o=0;o<c.attributes.length;o++){const u=c.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>c.removeAttribute(o))},()=>i(n))}function bt(t,n,e){return Y(t,n,e,W)}function Z(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function xt(t){return Z(t," ")}function $t(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function wt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function Et(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function kt(t,n,e){t.classList[e?"add":"remove"](n)}function St(t,n=document.body){return Array.from(n.querySelectorAll(t))}let b;function x(t){b=t}function $(){if(!b)throw new Error("Function called outside component initialization");return b}function At(t){$().$$.on_mount.push(t)}function jt(t){$().$$.after_update.push(t)}function Nt(t,n){$().$$.context.set(t,n)}function vt(t){return $().$$.context.get(t)}const p=[],z=[],w=[],B=[],tt=Promise.resolve();let S=!1;function nt(){S||(S=!0,tt.then(O))}function A(t){w.push(t)}let j=!1;const N=new Set;function O(){if(!j){j=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];x(n),et(n.$$)}for(x(null),p.length=0;z.length;)z.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];N.has(n)||(N.add(n),n())}w.length=0}while(p.length);for(;B.length;)B.pop()();S=!1,j=!1,N.clear()}}function et(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const E=new Set;let d;function Ct(){d={r:0,c:[],p:d}}function qt(){d.r||m(d.c),d=d.p}function it(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Mt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Lt(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const r in o)r in u||(i[r]=1);for(const r in u)c[r]||(e[r]=u[r],c[r]=1);t[l]=u}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Tt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:o,after_update:u}=t.$$;c&&c.m(n,e),i||A(()=>{const r=l.map(q).filter(D);o?o.push(...r):m(r),t.$$.on_mount=[]}),u.forEach(A)}function ct(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(p.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ot(t,n,e,i,c,l,o,u=[-1]){const r=b;x(t);const s=t.$$={fragment:null,ctx:null,props:l,update:_,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,y,...v)=>{const C=v.length?v[0]:y;return s.ctx&&c(s.ctx[f],s.ctx[f]=C)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](C),a&&ot(t,f)),y}):[],s.update(),a=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){G();const f=V(n.target);s.fragment&&s.fragment.l(f),f.forEach(U)}else s.fragment&&s.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),J(),O()}x(r)}class It{$destroy(){ct(this,1),this.$destroy=_}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function Dt(t,n=_){let e;const i=new Set;function c(u){if(F(t,u)&&(t=u,e)){const r=!h.length;for(const s of i)s[1](),h.push(s,t);if(r){for(let s=0;s<h.length;s+=2)h[s][0](h[s+1]);h.length=0}}}function l(u){c(u(t))}function o(u,r=_){const s=[u,r];return i.add(s),i.size===1&&(e=n(c)||_),u(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:o}}export{At as A,I as B,Dt as C,vt as D,st as E,St as F,kt as G,R as H,yt as I,ft as J,at as K,lt as L,m as M,ut as N,_ as O,A as P,wt as Q,ht as R,It as S,dt as T,Et as U,V as a,gt as b,bt as c,U as d,W as e,_t as f,Z as g,$t as h,Ot as i,zt as j,mt as k,pt as l,Bt as m,xt as n,rt as o,Lt as p,Tt as q,Ct as r,F as s,k as t,Mt as u,ct as v,qt as w,it as x,Nt as y,jt as z};
