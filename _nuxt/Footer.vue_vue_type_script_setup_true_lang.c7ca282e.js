import{_ as k,o as t,c as o,a as e,d as b,l as y,n as $,h as c,w as r,i as n,p as w,u as d,f as g,q as m,s as A,t as h,F as v,v as f,e as x}from"./entry.cb161ccd.js";const B={},C={viewBox:"0 0 20 20"},N=e("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 2 10Z",clipRule:"evenodd"},null,-1),L=[N];function V(i,a){return t(),o("svg",C,L)}const H=k(B,[["render",V]]),R={class:"sticky top-0 z-50 shadow bg-white py-3 px-3 sm:px-12 md:px-24 lg:px-40 dark:bg-slate-900 dark:text-slate-300"},S={class:"flex flex-wrap justify-between items-center"},D={id:"brand"},F={id:"burger",class:"block md:hidden"},Z={id:"collapse",class:"hidden md:block"},j={class:"flex"},q={key:0,id:"collapse-mobile",class:"mt-3 -mx-3"},I={class:"grid grid-cols-1 gap-y-1 mx-3"},W=b({__name:"Navbar",setup(i){const a=y(!1);return(_,u)=>{const l=m,p=H,s=$("click-outside");return t(),o("nav",R,[e("div",S,[e("div",D,[c(l,{to:"/"},{default:r(()=>[n(" Brand ")]),_:1})]),e("div",F,[w((t(),o("button",{onClick:u[0]||(u[0]=K=>a.value=!d(a))},[c(p,{class:"text-slate-900 dark:text-slate-300 w-6 h-6"})])),[[s,()=>a.value=!1]])]),e("div",Z,[e("ul",j,[e("li",null,[c(l,{class:"px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800",to:"/"},{default:r(()=>[n(" Home ")]),_:1})]),e("li",null,[c(l,{class:"px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800",to:"/about"},{default:r(()=>[n(" About ")]),_:1})]),e("li",null,[c(l,{class:"px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800",to:"/colaborate"},{default:r(()=>[n(" Colaborate ")]),_:1})])])])]),d(a)?(t(),o("div",q,[e("ul",I,[e("li",null,[c(l,{class:"block w-full p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800",to:"/"},{default:r(()=>[n(" Home ")]),_:1})]),e("li",null,[c(l,{class:"block w-full p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800",to:"#"},{default:r(()=>[n(" About ")]),_:1})]),e("li",null,[c(l,{class:"block w-full p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800",to:"#"},{default:r(()=>[n(" Colaborate ")]),_:1})])])])):g("",!0)])}}}),M={class:"m-2.5"},O={class:"text-xl font-bold text-slate-700 dark:text-slate-300"},U={class:"mt-3"},z=["src"],E=["src"],P=b({__name:"VerticalList",props:{list:{type:Object,required:!0}},setup(i){const{public:{iconSufix:a,baseURL:_}}=A();return(u,l)=>{const p=m;return t(),o("nav",null,[e("div",M,[e("h5",O,h(i.list.name),1),e("ul",U,[(t(!0),o(v,null,f(i.list.items,s=>(t(),o("li",{key:s.key,class:""},[s.external?(t(),x(p,{key:1,class:"inline-flex items-center gap-x-2 w-full p-2.5 cursor-pointer dark:text-slate-300 rounded-lg dark:hover:bg-slate-800",href:s.url,external:s.external},{default:r(()=>[s.icon?(t(),o("img",{key:0,src:`${d(_)}svgs/${s.icon}${d(a)}.svg`,class:"w-4 h-4"},null,8,E)):g("",!0),n(" "+h(s.name),1)]),_:2},1032,["href","external"])):(t(),x(p,{key:0,class:"block p-2.5 cursor-pointer dark:text-slate-300 rounded-lg dark:hover:bg-slate-800",to:s.url},{default:r(()=>[s.icon?(t(),o("img",{key:0,src:`${d(_)}svgs/${s.icon}${d(a)}.svg`,class:"w-4 h-4"},null,8,z)):g("",!0),n(" "+h(s.name),1)]),_:2},1032,["to"]))]))),128))])])])}}}),T=[{name:"Branding",items:[{name:"About",url:"/about",external:!1,key:"about",icon:void 0}]},{name:"Sources",items:[{name:"API source code",url:"",external:!0,key:"api-source-code",icon:"github"},{name:"UI source code",url:"",external:!0,key:"ui-source-code",icon:"github"}]}],G={class:"py-16 px-3 sm:px-5 md:px-6 lg:px-24 xl:px-32 bg-white dark:bg-slate-900"},J={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"},X=b({__name:"Footer",setup(i){return(a,_)=>{const u=P;return t(),o("footer",G,[e("div",J,[(t(!0),o(v,null,f(d(T),l=>(t(),x(u,{list:l},null,8,["list"]))),256))])])}}});export{W as _,X as a};