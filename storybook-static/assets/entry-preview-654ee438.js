import{S as I,i as N,s as P,v as C,b as S,j as d,k as O,m as _,f as v,w as B,p as E,x as T,y as k,q as y,r as m,u as h,z as j}from"./index-c2541b45.js";import{d as L}from"./index-356e4a49.js";function w(s,e){const t={},r={},f={$$scope:1};let i=s.length;for(;i--;){const c=s[i],n=e[i];if(n){for(const o in c)o in n||(r[o]=1);for(const o in n)f[o]||(t[o]=n[o],f[o]=1);s[i]=n}else for(const o in c)f[o]=1}for(const c in r)c in t||(t[c]=void 0);return t}function g(s){return typeof s=="object"&&s!==null?s:{}}function q(s){let e,t,r;const f=[s[2]];var i=s[1];function c(n,o){let l={};if(o!==void 0&&o&4)l=w(f,[g(n[2])]);else for(let u=0;u<f.length;u+=1)l=j(l,f[u]);return{props:l}}return i&&(e=k(i,c(s)),s[8](e)),{c(){e&&y(e.$$.fragment),t=C()},m(n,o){e&&m(e,n,o),S(n,t,o),r=!0},p(n,o){if(o&2&&i!==(i=n[1])){if(e){E();const l=e;d(l.$$.fragment,1,0,()=>{h(l,1)}),O()}i?(e=k(i,c(n,o)),n[8](e),y(e.$$.fragment),_(e.$$.fragment,1),m(e,t.parentNode,t)):e=null}else if(i){const l=o&4?w(f,[g(n[2])]):{};e.$set(l)}},i(n){r||(e&&_(e.$$.fragment,n),r=!0)},o(n){e&&d(e.$$.fragment,n),r=!1},d(n){n&&v(t),s[8](null),e&&h(e,n)}}}function z(s){let e,t,r;const f=[s[0].props];var i=s[0].Component;function c(n,o){let l={$$slots:{default:[K]},$$scope:{ctx:n}};if(o!==void 0&&o&1)l=w(f,[g(n[0].props)]);else for(let u=0;u<f.length;u+=1)l=j(l,f[u]);return{props:l}}return i&&(e=k(i,c(s)),s[7](e)),{c(){e&&y(e.$$.fragment),t=C()},m(n,o){e&&m(e,n,o),S(n,t,o),r=!0},p(n,o){if(o&1&&i!==(i=n[0].Component)){if(e){E();const l=e;d(l.$$.fragment,1,0,()=>{h(l,1)}),O()}i?(e=k(i,c(n,o)),n[7](e),y(e.$$.fragment),_(e.$$.fragment,1),m(e,t.parentNode,t)):e=null}else if(i){const l=o&1?w(f,[g(n[0].props)]):{};o&1038&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)}},i(n){r||(e&&_(e.$$.fragment,n),r=!0)},o(n){e&&d(e.$$.fragment,n),r=!1},d(n){n&&v(t),s[7](null),e&&h(e,n)}}}function K(s){let e,t,r;const f=[s[2]];var i=s[1];function c(n,o){let l={};if(o!==void 0&&o&4)l=w(f,[g(n[2])]);else for(let u=0;u<f.length;u+=1)l=j(l,f[u]);return{props:l}}return i&&(e=k(i,c(s)),s[6](e)),{c(){e&&y(e.$$.fragment),t=C()},m(n,o){e&&m(e,n,o),S(n,t,o),r=!0},p(n,o){if(o&2&&i!==(i=n[1])){if(e){E();const l=e;d(l.$$.fragment,1,0,()=>{h(l,1)}),O()}i?(e=k(i,c(n,o)),n[6](e),y(e.$$.fragment),_(e.$$.fragment,1),m(e,t.parentNode,t)):e=null}else if(i){const l=o&4?w(f,[g(n[2])]):{};e.$set(l)}},i(n){r||(e&&_(e.$$.fragment,n),r=!0)},o(n){e&&d(e.$$.fragment,n),r=!1},d(n){n&&v(t),s[6](null),e&&h(e,n)}}}function V(s){let e,t,r,f;const i=[z,q],c=[];function n(o,l){return o[0]?0:1}return e=n(s),t=c[e]=i[e](s),{c(){t.c(),r=C()},m(o,l){c[e].m(o,l),S(o,r,l),f=!0},p(o,[l]){let u=e;e=n(o),e===u?c[e].p(o,l):(E(),d(c[u],1,1,()=>{c[u]=null}),O(),t=c[e],t?t.p(o,l):(t=c[e]=i[e](o),t.c()),_(t,1),t.m(r.parentNode,r))},i(o){f||(_(t),f=!0)},o(o){d(t),f=!1},d(o){o&&v(r),c[e].d(o)}}}function W(s,e,t){let{decorator:r=void 0}=e,{Component:f}=e,{props:i={}}=e,{on:c=void 0}=e,n,o;function l(){return n||o}c&&Object.keys(c).forEach(a=>{B(()=>l().$on(a,c[a]))});function u(a){T[a?"unshift":"push"](()=>{n=a,t(3,n)})}function R(a){T[a?"unshift":"push"](()=>{o=a,t(4,o)})}function p(a){T[a?"unshift":"push"](()=>{n=a,t(3,n)})}return s.$$set=a=>{"decorator"in a&&t(0,r=a.decorator),"Component"in a&&t(1,f=a.Component),"props"in a&&t(2,i=a.props),"on"in a&&t(5,c=a.on)},[r,f,i,n,o,c,u,R,p]}class F extends I{constructor(e){super(),N(this,e,W,V,P,{decorator:0,Component:1,props:2,on:5})}}F.__docgen={version:3,name:"SlotDecorator.svelte",data:[{visibility:"public",description:null,keywords:[],name:"decorator",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"Component",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"props",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"}},{visibility:"public",description:null,keywords:[],name:"on",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function G(s){let e,t;return e=new F({props:{Component:s[0],props:s[1],on:{...s[3],...s[2]}}}),{c(){y(e.$$.fragment)},m(r,f){m(e,r,f),t=!0},p(r,[f]){const i={};f&1&&(i.Component=r[0]),f&2&&(i.props=r[1]),f&4&&(i.on={...r[3],...r[2]}),e.$set(i)},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){d(e.$$.fragment,r),t=!1},d(r){h(e,r)}}}function H(s,e,t){let{name:r}=e,{kind:f}=e,{storyFn:i}=e,{showError:c}=e,{storyContext:n}=e,{Component:o,props:l={},on:u}=i();const R=Object.fromEntries(Object.entries(n.argTypes).filter(([p,a])=>a.action&&l[p]!=null).map(([p,a])=>[a.action,l[p]]));return o||c({title:`Expecting a Svelte component from the story: "${r}" of "${f}".`,description:L`
        Did you forget to return the Svelte component configuration from the story?
        Use "() => ({ Component: YourComponent, props: {} })"
        when defining the story.
      `}),s.$$set=p=>{"name"in p&&t(4,r=p.name),"kind"in p&&t(5,f=p.kind),"storyFn"in p&&t(6,i=p.storyFn),"showError"in p&&t(7,c=p.showError),"storyContext"in p&&t(8,n=p.storyContext)},s.$$.update=()=>{s.$$.dirty&64&&t(0,{Component:o,props:l={},on:u}=i(),o,(t(1,l),t(6,i)),(t(2,u),t(6,i)))},[o,l,u,R,r,f,i,c,n]}class Y extends I{constructor(e){super(),N(this,e,H,G,P,{name:4,kind:5,storyFn:6,showError:7,storyContext:8})}}Y.__docgen={version:3,name:"PreviewRender.svelte",data:[{visibility:"public",description:null,keywords:[],name:"name",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"kind",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"storyFn",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"showError",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"storyContext",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const{addons:J,sanitizeStoryContextUpdate:Q}=__STORYBOOK_MODULE_PREVIEW_API__,{RESET_STORY_ARGS:X}=__STORYBOOK_MODULE_CORE_EVENTS__;function M(s){return s&&typeof s=="object"&&"default"in s?s.default:s}function U(s,e,t){let r=M(e),f=t&&M(t),i;return!r||Object.keys(r).length===0?i={Component:s.component}:r.Component?i=r:i={Component:r},f?{Component:F,props:{...f,decorator:i}}:i}function $(s,e){return e.reduce((t,r)=>f=>{let i,c=r(n=>(i=t({...f,...Q(n)}),i),f);return i||(i=t(f)),c===i?i:U(f,c,i)},t=>U(t,s(t)))}var b=new Map;function A(s){b.has(s)&&(b.get(s).$destroy(),s.innerHTML="",b.delete(s))}var D=new Set;J.getChannel().on(X,({storyId:s})=>{D.add(s)});function ee({storyFn:s,kind:e,name:t,showMain:r,showError:f,storyContext:i,forceRemount:c},n){let o=b.get(n),l=c;if(D.has(i.id)&&(l=!0,D.delete(i.id)),l&&A(n),!o||l){let u=new Y({target:n,props:{storyFn:s,storyContext:i,name:t,kind:e,showError:f}});b.set(n,u)}else o.$set({storyFn:s,storyContext:i,name:t,kind:e,showError:f});return r(),()=>{A(n)}}var ne=(s,e)=>{let{id:t,component:r}=e;if(!r)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return{Component:r,props:s}},te={renderer:"svelte"};export{$ as applyDecorators,te as parameters,ne as render,ee as renderToCanvas};
//# sourceMappingURL=entry-preview-654ee438.js.map
