(window.webpackJsonp=window.webpackJsonp||[]).push([[14,15],{176:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(8),o=a.n(s),i=a(190),c=a(202),l=a.n(c),u=a(192),m=a(196),p=a(197),d=a(191),g=function(e){var t=e.location;return r.a.createElement(d.a,{pathname:t.pathname},function(e){var t=e.locale,a=e.formatMessage,n=e.getPath;return r.a.createElement(m.a,null,r.a.createElement(p.a,{lang:t,title:a({id:"stack.title"}),description:a({id:"meta.description"}),keywords:a({id:"meta.keywords"})}),r.a.createElement("section",{className:"section is-size-4-desktop is-size-5-touch"},r.a.createElement(l.a,{script:[{async:!0,src:"https://cdn1.stackshare.io/javascripts/client-code.js",charSet:"utf-8"}]}),r.a.createElement("h1",{className:"title has-text-centered has-text-light"},r.a.createElement(u.a,{id:"stack.title"})),r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("hr",null),r.a.createElement("p",{className:"content"},r.a.createElement(u.a,{id:"stack.description"})),r.a.createElement("p",{className:"content"},r.a.createElement(u.a,{id:"stack.stackShare"})),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-half is-offset-one-quarter stackshare"},r.a.createElement("a",{frameBorder:"0","data-theme":"dark","data-layers":"1,2,3,4","data-stack-embed":"true",href:"https://embed.stackshare.io/stacks/embed/8c28185217d10812f81a6efc56aff4"},"StackShare"))),r.a.createElement("p",{className:"has-text-centered"},r.a.createElement(u.a,{id:"checkOut"})," ",r.a.createElement(i.a,{to:n("blog")},r.a.createElement(u.a,{id:"stack.posts"})),"."))))})};g.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=g},182:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(176);t.default=function(e){return r.a.createElement(s.default,e)}},190:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(1),r=a.n(n),s=a(8),o=a.n(s),i=a(49),c=a.n(i);a.d(t,"a",function(){return c.a});a(193);var l=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,s=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&s(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,s=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||s,staticQueryData:e})})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},191:function(e,t,a){"use strict";a(50),a(106),a(107),a(108),a(74);var n=a(1),r=a.n(n),s=a(8),o=a.n(s),i=a(192),c=a(207),l=a.n(c),u=a(208),m=a.n(u),p=a(209),d=a.n(p),g=a(195),h=a(194),b=function(e){var t=e.children,a=e.intl;return r.a.createElement("div",null,t(a))};b.propTypes={children:o.a.func,intl:i.e.isRequired},b.defaultProps={children:function(){}};var f=Object(i.d)(b);a.d(t,"a",function(){return k}),Object(i.c)([].concat(l.a,m.a));var v=h.b.locale,y=Object(n.createContext)({}),k=function(e){var t=e.children,a=function(e){var t=e.match(/^\/[a-zA-z-]*/)[0].replace("/","");return h.d.includes(t)?h.c[t]:h.b}(e.pathname),s=Object(n.useState)(a.locale),o=s[0],c=s[1],l=Object(n.useState)(a.messages),u=l[0],m=l[1],p=function(e){c(e.locale),m(e.messages)},b=function(e){var t=d()(g.b,e);if(!t)throw new Error("Path '"+e+"' not found");var a=o!==v?o:"";return a?"/"+a+t:""+t};return r.a.createElement(i.b,{locale:o,messages:u},r.a.createElement(f,null,function(e){return r.a.createElement(y.Provider,{value:Object.assign({},e,{changeLanguage:p,getPath:b})},t(Object.assign({},e,{changeLanguage:p,getPath:b})))}))};k.propTypes={children:o.a.func.isRequired,pathname:o.a.string.isRequired};t.b=y},193:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},194:function(e,t,a){"use strict";a(50);var n={profileName:"Luan Orlandi"},r={locale:"en",messages:Object.assign({"meta.description":"Front-end developer, developing apps and web pages","meta.keywords":"React, Node, Gatsby, Front-end, developer, API","home.title":"Home","home.headline":"Web Developer","home.greet":"Hello, I am Luan Orlandi!","home.about":"I'm a Web Developer, I work with Front-end creating apps and web pages.\n    I participate in events about technology and I like to study productivity and communication, it helps me stay organized and collaborative.","home.experience":"I develop projects mostly with JavaScript using React and Node.","home.personalProjects":"personal projects","projects.title":"Projects","projects.description":"Some of my featured projects, see more on my","projects.gatsbyCourse.title":"Gatsby Course","projects.gatsbyCourse.subtitle":"Build your personal website using React","projects.gatsbyCourse.imageAlt":"Gatsby Course","projects.kasselLabs.title":"Kassel Labs","projects.kasselLabs.subtitle":"Helping people express their creativity and imagination","projects.kasselLabs.imageAlt":"Kassel Labs logo","projects.ticTacPorg.title":"Tic-tac-porg","projects.ticTacPorg.subtitle":"Play tic-tac-toe with Star Wars theme","projects.ticTacPorg.imageAlt":"Tic tac toe with porgs and Chewbacca","projects.slackParrot.title":"Slack Parrot","projects.slackParrot.subtitle":"Behold the Party Parrot on your terminal","projects.slackParrot.imageAlt":"Party parrot animation","projects.stack":"stack","stack.title":"Stack","stack.description":"I have experience with many modern tools, I select them for my projects depending on the usage.","stack.stackShare":"Here is my stack on StackShare:","stack.posts":"blog","posts.title":"Blog","posts.gatsbyBlazingFast.title":"How Gatsby is so blazing fast","posts.gatsbyBlazingFast.subtitle":"Performance greatly affects the user experience. Gatsby builds fast websites out-of-the-box","posts.gatsbyBlazingFast.imageAlt":"Fast as the DeLorean","posts.learnReact.title":"Learn React easily with this rule","posts.learnReact.subtitle":"Make it fun","posts.learnReact.imageAlt":"Play it like Lego",checkOut:"Check out my","checkOut.posts":"Check out more posts in my",noscript:"This website works better with JavaScript enabled"},n)},s={locale:"pt",messages:Object.assign({"meta.description":"Desenvolvedor Front-end, criando apps e páginas Web","meta.keywords":"React, Node, Gatsby, Front-end, desenvolvedor, API","home.title":"Inicial","home.headline":"Desenvolvedor Web","home.greet":"Olá, eu sou Luan Orlandi!","home.about":"Sou desenvolvedor web, trabalho com Front-end criando aplicações e páginas Web.\n    Participo de eventos de tecnologia e gosto de estudar produtividade e comunicação, que me ajuda a manter organizado e colaborativo.","home.experience":"Desenvolvo projetos usando principalmente JavaScript com React e Node.","home.personalProjects":"meus projetos pessoais","projects.title":"Projetos","projects.description":"Alguns dos meus projetos de destaque, veja mais no meu","projects.gatsbyCourse.title":"Curso de Gatsby","projects.gatsbyCourse.subtitle":"Crie seu site pessoal usando React","projects.gatsbyCourse.imageAlt":"Curso de Gatsby","projects.kasselLabs.title":"Kassel Labs","projects.kasselLabs.subtitle":"Ajudando pessoas a expressarem sua critivade e imaginação","projects.kasselLabs.imageAlt":"Logo do Kassel Labs","projects.ticTacPorg.title":"Tic-tac-porg","projects.ticTacPorg.subtitle":"Jogo da Velha com tema de Star Wars","projects.ticTacPorg.imageAlt":"Tic tac toe com porgs e Chewbacca","projects.slackParrot.title":"Slack Parrot","projects.slackParrot.subtitle":"Party Parrot no seu terminal!","projects.slackParrot.imageAlt":"Animação do Party Parrot no terminal","projects.stack":"minha stack de ferramentas","stack.title":"Stack","stack.description":"Tenho experiências com diversas ferramentas e tecnologias modernas, que uso dependendo do projeto.","stack.stackShare":"Compartilho minha stack no StackShare:","stack.posts":"meu blog","posts.title":"Blog","posts.gatsbyBlazingFast.title":"Como Gatsby é tão rápido","posts.gatsbyBlazingFast.subtitle":"Performance afeta muito a experiência do usuário. Gatsby cria sites rápidos por padrão","posts.gatsbyBlazingFast.imageAlt":"Rápido como DeLorean","posts.learnReact.title":"Aprenda React facilmente com essa regra","posts.learnReact.subtitle":"Torne divertido","posts.learnReact.imageAlt":"Jogue como lego",checkOut:"Veja","checkOut.posts":"Veja mais posts no meu",noscript:"Este site funciona melhor com JavaScript habilitado"},n)};a.d(t,"c",function(){return o}),a.d(t,"d",function(){return i}),a.d(t,"b",function(){return c});t.a=[r,s];var o={en:r,pt:s},i=[r.locale,s.locale],c=r},195:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n={home:"/",projects:"/projects",stack:"/stack",blog:"/blog",404:"/404"},r={github:"https://github.com/luanorlandi",twitter:"https://twitter.com/luanorlandi",medium:"https://medium.com/@luanorlandi",linkedin:"https://www.linkedin.com/in/luanorlandi/",gatsbyCourse:"https://www.udemy.com/gatsby-crie-seu-site-pessoal",kasselLabs:"https://kassellabs.io",ticTacPorg:"https://luanorlandi.github.io/tic-tac-porg",slackParrot:"https://www.npmjs.com/package/slack-parrot",gatsbyBlazingFast:"https://medium.freecodecamp.org/how-gatsby-is-so-blazing-fast-c99a6f2d405e",learnReact:"https://medium.com/@luanorlandi/learn-react-easily-with-this-rule-a715b818a358"}},196:function(e,t,a){"use strict";var n=a(199),r=a(1),s=a.n(r),o=a(8),i=a.n(o),c=a(190),l=a(192),u=a(191),m=(a(74),a(25)),p=a(194),d=p.b.locale,g=/^\/[a-zA-z-]*\/?$/,h=/^\/[a-zA-z-]*/,b=function(){var e=Object(r.useContext)(u.b),t=function(t){var a=t.language,n=t.location;return a.locale===e.locale?n.pathname:a.locale===d?g.test(n.pathname)?"/":n.pathname.replace(h,""):"/"+a.locale+n.pathname};return s.a.createElement(m.Location,null,function(a){var n=a.location;return s.a.createElement("div",{className:"language"},p.a.map(function(a){return s.a.createElement(c.a,{className:"language__link",to:t({language:a,location:n}),key:a.locale,onClick:function(){return e.changeLanguage(a)}},a.locale)}))})},f=function(e){var t=e.siteTitle,a=Object(r.useState)(!1),n=a[0],o=a[1],i=Object(r.useContext)(u.b),m=n?"is-active":"";return s.a.createElement("nav",{className:"navbar"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(c.a,{className:"navbar-item is-size-4",to:i.getPath("home")},t),s.a.createElement("button",{className:"navbar-burger has-text-light "+m,type:"button","aria-label":"menu",onClick:function(){return o(function(e){return!e})}},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{className:"navbar-menu "+m},s.a.createElement("div",{className:"navbar-end"},s.a.createElement(c.a,{className:"navbar-item is-size-5",to:i.getPath("home"),onClick:function(){return o(!1)}},s.a.createElement(l.a,{id:"home.title"})),s.a.createElement(c.a,{className:"navbar-item is-size-5",to:i.getPath("projects"),onClick:function(){return o(!1)}},s.a.createElement(l.a,{id:"projects.title"})),s.a.createElement(c.a,{className:"navbar-item is-size-5",to:i.getPath("stack"),onClick:function(){return o(!1)}},s.a.createElement(l.a,{id:"stack.title"})),s.a.createElement(c.a,{className:"navbar-item is-size-5",to:i.getPath("blog"),onClick:function(){return o(!1)}},s.a.createElement(l.a,{id:"posts.title"})),s.a.createElement(b,null)))))};f.propTypes={siteTitle:i.a.string},f.defaultProps={siteTitle:""};var v=f,y=function(){var e=Object(r.useContext)(u.b);return s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"content has-text-centered"},s.a.createElement("p",null,s.a.createElement("noscript",null,e.formatMessage({id:"noscript"})))))},k=(a(210),function(e){var t=e.children;return s.a.createElement(c.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),t,s.a.createElement(y,null))},data:n})});k.propTypes={children:i.a.node.isRequired};var j=k;a.d(t,"a",function(){return j})},197:function(e,t,a){"use strict";var n=a(200),r=a(1),s=a.n(r),o=a(8),i=a.n(o),c=a(202),l=a.n(c),u=a(190),m=a(201),p=a.n(m),d=function(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,i=e.title;return s.a.createElement(u.b,{query:"32777869",render:function(e){return s.a.createElement(l.a,{htmlAttributes:{lang:a},title:i||e.site.siteMetadata.title,titleTemplate:i&&"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:t},{name:"keywords",content:o},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:t},{property:"og:title",content:i},{property:"og:description",content:t},{property:"og:type",content:"website"},{property:"og:url",content:"https://luanorlandi.github.io/"},{property:"og:image",content:"https://luanorlandi.github.io"+p.a},{property:"og:image:alt",content:t},{property:"og:image:type",content:"image/jpg"},{property:"og:image:width",content:"1365"},{property:"og:image:height",content:"1365"}].concat(r)})},data:n})};d.propTypes={title:i.a.string,description:i.a.string,lang:i.a.string.isRequired,keywords:i.a.string,meta:i.a.arrayOf(i.a.object)},d.defaultProps={title:null,description:"",meta:[],keywords:""};var g=d;a.d(t,"a",function(){return g})},198:function(e,t,a){"use strict";a.r(t);a(50);var n=a(1),r=a.n(n),s=a(8),o=a.n(s),i=a(76),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},199:function(e){e.exports={data:{site:{siteMetadata:{title:"Luan Orlandi"}}}}},200:function(e){e.exports={data:{site:{siteMetadata:{title:"Luan Orlandi",author:"@luanorlandi"}}}}},201:function(e,t,a){e.exports=a.p+"static/luanorlandi-7606c19d2c8b47776729b2bdec1fa9a7.jpg"},204:function(e,t){},205:function(e,t){},206:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-pt-stack-js-bfa833d0f767a538df52.js.map