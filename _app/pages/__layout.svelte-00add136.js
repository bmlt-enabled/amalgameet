import{D as Ie,S as We,i as Ne,s as Ce,E as Me,e as l,k as p,t as T,F as Se,c as n,d as r,n as b,a as u,g as q,b as e,G as h,H as a,f as Y,I as L,J as De,K as Ve,L as je,x as Le,u as Ke,M as Pe,N as Re}from"../chunks/vendor-8b2641dd.js";const Te=()=>{const s=Ie("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}},qe={subscribe(s){return Te().page.subscribe(s)}};function Be(s){let m,f,C,S,K,c,g,_,J,E,o,D,Z,B,$,H,x,M,w,A,ee,ae,k,te,se,V,P,re,le,v,I,ne,ie,W,oe,ce,O,ue,N,he,z,R,y,de,ve;const fe=s[6].default,d=Me(fe,s,s[5],null);return{c(){m=l("link"),f=l("link"),C=l("meta"),S=l("meta"),K=p(),c=l("nav"),g=l("div"),_=l("a"),J=T("Amalgameet"),E=p(),o=l("a"),D=l("span"),Z=p(),B=l("span"),$=p(),H=l("span"),x=p(),M=l("div"),w=l("div"),A=l("a"),ee=T("Events"),ae=p(),k=l("a"),te=T("Meetings"),se=p(),V=l("div"),P=l("a"),re=T("More"),le=p(),v=l("div"),I=l("a"),ne=T("About"),ie=p(),W=l("a"),oe=T("Contact"),ce=p(),O=l("hr"),ue=p(),N=l("a"),he=T("Report an Issue"),z=p(),R=l("section"),d&&d.c(),this.h()},l(t){const i=Se('[data-svelte="svelte-r0d5d"]',document.head);m=n(i,"LINK",{rel:!0,href:!0}),f=n(i,"LINK",{rel:!0,href:!0}),C=n(i,"META",{name:!0,content:!0}),S=n(i,"META",{name:!0,content:!0}),i.forEach(r),K=b(t),c=n(t,"NAV",{class:!0,role:!0,"aria-label":!0});var Q=u(c);g=n(Q,"DIV",{class:!0});var U=u(g);_=n(U,"A",{class:!0,href:!0});var pe=u(_);J=q(pe,"Amalgameet"),pe.forEach(r),E=b(U),o=n(U,"A",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0,href:!0});var F=u(o);D=n(F,"SPAN",{class:!0,"aria-hidden":!0}),u(D).forEach(r),Z=b(F),B=n(F,"SPAN",{class:!0,"aria-hidden":!0}),u(B).forEach(r),$=b(F),H=n(F,"SPAN",{class:!0,"aria-hidden":!0}),u(H).forEach(r),F.forEach(r),U.forEach(r),x=b(Q),M=n(Q,"DIV",{id:!0,class:!0});var be=u(M);w=n(be,"DIV",{class:!0});var G=u(w);A=n(G,"A",{class:!0,href:!0});var me=u(A);ee=q(me,"Events"),me.forEach(r),ae=b(G),k=n(G,"A",{class:!0,href:!0});var _e=u(k);te=q(_e,"Meetings"),_e.forEach(r),se=b(G),V=n(G,"DIV",{class:!0});var X=u(V);P=n(X,"A",{class:!0,href:!0});var ge=u(P);re=q(ge,"More"),ge.forEach(r),le=b(X),v=n(X,"DIV",{class:!0});var j=u(v);I=n(j,"A",{class:!0,href:!0});var Ee=u(I);ne=q(Ee,"About"),Ee.forEach(r),ie=b(j),W=n(j,"A",{class:!0,href:!0});var we=u(W);oe=q(we,"Contact"),we.forEach(r),ce=b(j),O=n(j,"HR",{class:!0}),ue=b(j),N=n(j,"A",{class:!0,href:!0});var Ae=u(N);he=q(Ae,"Report an Issue"),Ae.forEach(r),j.forEach(r),X.forEach(r),G.forEach(r),be.forEach(r),Q.forEach(r),z=b(t),R=n(t,"SECTION",{class:!0});var ke=u(R);d&&d.l(ke),ke.forEach(r),this.h()},h(){e(m,"rel","manifest"),e(m,"href","manifest.json"),e(f,"rel","apple-touch-icon"),e(f,"href","apple-icon-180.png"),e(C,"name","mobile-web-app-capable"),e(C,"content","yes"),e(S,"name","apple-mobile-web-app-capable"),e(S,"content","yes"),document.title="Amalgameet",e(_,"class","navbar-item"),e(_,"href","/"),h(_,"has-text-weight-bold",s[1].path==="/"),e(D,"class","navbar-span"),e(D,"aria-hidden","true"),e(B,"class","navbar-span"),e(B,"aria-hidden","true"),e(H,"class","navbar-span"),e(H,"aria-hidden","true"),e(o,"role","button"),e(o,"class","navbar-burger"),e(o,"aria-label","menu"),e(o,"aria-expanded","false"),e(o,"href","javascript:void(0)"),h(o,"is-active",s[0]),e(g,"class","navbar-brand"),e(A,"class","navbar-item"),e(A,"href","/events"),h(A,"has-text-weight-bold",s[1].path.startsWith("/events")),e(k,"class","navbar-item"),e(k,"href","/meetings"),h(k,"has-text-weight-bold",s[1].path.startsWith("/meetings")),e(P,"class","navbar-link"),e(P,"href","javascript:void(0)"),e(I,"class","navbar-item"),e(I,"href","/about"),h(I,"has-text-weight-bold",s[1].path.startsWith("/about")),e(W,"class","navbar-item"),e(W,"href","/contact"),h(W,"has-text-weight-bold",s[1].path.startsWith("/contact")),e(O,"class","navbar-divider"),e(N,"class","navbar-item"),e(N,"href","/report-issue"),h(N,"has-text-weight-bold",s[1].path.startsWith("/report-issue")),e(v,"class","navbar-dropdown"),e(V,"class","navbar-item has-dropdown is-hoverable"),e(w,"class","navbar-start"),e(M,"id","navbarBasicExample"),e(M,"class","navbar-menu svelte-1talwtd"),h(M,"is-active",s[0]),e(c,"class","navbar is-light"),e(c,"role","navigation"),e(c,"aria-label","main navigation"),e(R,"class","section p-5")},m(t,i){a(document.head,m),a(document.head,f),a(document.head,C),a(document.head,S),Y(t,K,i),Y(t,c,i),a(c,g),a(g,_),a(_,J),a(g,E),a(g,o),a(o,D),a(o,Z),a(o,B),a(o,$),a(o,H),a(c,x),a(c,M),a(M,w),a(w,A),a(A,ee),a(w,ae),a(w,k),a(k,te),a(w,se),a(w,V),a(V,P),a(P,re),a(V,le),a(V,v),a(v,I),a(I,ne),a(v,ie),a(v,W),a(W,oe),a(v,ce),a(v,O),a(v,ue),a(v,N),a(N,he),Y(t,z,i),Y(t,R,i),d&&d.m(R,null),y=!0,de||(ve=[L(window,"click",s[2]),L(window,"touchend",s[2]),L(o,"click",s[3]),L(A,"click",s[4]),L(k,"click",s[4]),L(I,"click",s[4]),L(W,"click",s[4]),L(N,"click",s[4])],de=!0)},p(t,[i]){i&2&&h(_,"has-text-weight-bold",t[1].path==="/"),i&1&&h(o,"is-active",t[0]),i&2&&h(A,"has-text-weight-bold",t[1].path.startsWith("/events")),i&2&&h(k,"has-text-weight-bold",t[1].path.startsWith("/meetings")),i&2&&h(I,"has-text-weight-bold",t[1].path.startsWith("/about")),i&2&&h(W,"has-text-weight-bold",t[1].path.startsWith("/contact")),i&2&&h(N,"has-text-weight-bold",t[1].path.startsWith("/report-issue")),i&1&&h(M,"is-active",t[0]),d&&d.p&&(!y||i&32)&&De(d,fe,t,t[5],y?je(fe,t[5],i,null):Ve(t[5]),null)},i(t){y||(Le(d,t),y=!0)},o(t){Ke(d,t),y=!1},d(t){r(m),r(f),r(C),r(S),t&&r(K),t&&r(c),t&&r(z),t&&r(R),d&&d.d(t),de=!1,Pe(ve)}}}function He(s,m,f){let C;Re(s,qe,E=>f(1,C=E));let{$$slots:S={},$$scope:K}=m,c=!1;function g(E){if(c){const o=E.target;for(const D of o.classList||[])if(D.startsWith("navbar"))return;f(0,c=!1)}}function _(){f(0,c=!c)}function J(){f(0,c=!1)}return s.$$set=E=>{"$$scope"in E&&f(5,K=E.$$scope)},[c,C,g,_,J,K,S]}class Fe extends We{constructor(m){super();Ne(this,m,He,Be,Ce,{})}}export{Fe as default};
