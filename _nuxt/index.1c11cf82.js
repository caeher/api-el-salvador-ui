import{e as g,u as C,_ as v}from"./el-salvador-code.5a3ac615.js";import{_ as w,u as b,a as x}from"./NarrowContent.c0ea6549.js";import{d as S,x as j,s as z,y as s,z as A,e as L,w as i,o as $,a as t,h as u,i as N,t as P,u as B}from"./entry.cb161ccd.js";const D={class:"grid grid-cols-1 lg:grid-cols-12"},M=t("div",{class:"lg:col-span-3"},null,-1),T={class:"lg:col-span-6"},V={class:"px-3 mt-6"},k=t("div",{class:"lg:col-span-3"},null,-1),G=S({__name:"index",async setup(O){let a,r;const{params:{departament:c,municipality:m}}=j(),{public:{fetchUri:_}}=z(),[l]=Object.values(g).filter(o=>o.name.toLowerCase()==c.toString().toLowerCase().split("-").join(" "));if(l===void 0)throw s({statusCode:404,message:"Municipality not found",fatal:!0});const[n]=Object.values(l.municipalities).filter(o=>o.toLowerCase()==m.toString().toLowerCase().split("-").join(" "));if(n===void 0)throw s({statusCode:404,message:"Municipality not found",fatal:!0});const{data:e,pending:R}=([a,r]=A(()=>b("municipality",async()=>{if(C(n))return $fetch(`${_}/municipalities/${n}?departament=${c.toString().toLowerCase().split("-").join(" ")}`)})),a=await a,r(),a);if(!e.value)throw s({statusCode:404,message:"Municipality not found",fatal:!0});const d={header:["departament","isocode","zone"],body:[{departament:e.value.departament.depname,isocode:e.value.departament.isocode,zone:e.value.departament.zone.zonename}]};return(o,E)=>{const f=v,y=x,h=w;return $(),L(h,null,{default:i(()=>[t("div",D,[M,t("div",T,[u(y,null,{title:i(()=>{var p;return[N(P((p=B(e))==null?void 0:p.munname),1)]}),body:i(()=>[t("div",V,[u(f,{header:d.header,body:d.body},null,8,["header","body"])])]),_:1})]),k])]),_:1})}}});export{G as default};