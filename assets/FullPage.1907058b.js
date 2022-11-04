import{Q as b}from"./QSeparator.0af9deba.js";import{c as C,d as q,h as A,a1 as L,cp as w,ay as N,A as I,a6 as i,a7 as d,aF as s,K as r,I as t,az as h,bI as B,H as c,F as e,J as l,L as V,Q as $}from"./index.31ab96bf.js";import{a as p,Q as k}from"./QCard.a7d3acc6.js";import{Q as F,b as Q,c as m,a as _}from"./QList.9f922315.js";import{Q as R}from"./QCardActions.48f10357.js";import{d as j}from"./word.3bd3a871.js";import"./use-dark.535a4de1.js";const z=["top","middle","bottom"];var M=C({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:a=>z.includes(a)}},setup(a,{slots:n}){const x=q(()=>a.align!==void 0?{verticalAlign:a.align}:null),f=q(()=>{const u=a.outline===!0&&a.color||a.textColor;return`q-badge flex inline items-center no-wrap q-badge--${a.multiLine===!0?"multi":"single"}-line`+(a.outline===!0?" q-badge--outline":a.color!==void 0?` bg-${a.color}`:"")+(u!==void 0?` text-${u}`:"")+(a.floating===!0?" q-badge--floating":"")+(a.rounded===!0?" q-badge--rounded":"")+(a.transparent===!0?" q-badge--transparent":"")});return()=>A("div",{class:f.value,style:x.value,role:"status","aria-label":a.label},L(n.default,a.label!==void 0?[a.label]:[]))}});const O={class:"q-px-lg"},D={class:"text-center text-h5"},E={class:"q-pa-lg row justify-center q-col-gutter-xl"},H={class:"text-overline"},J={class:"text-h6 q-mt-sm q-mb-xs"},K={class:"row"},P={key:0,class:"col"},et={__name:"FullPage",setup(a){const n=w(),x=N();I(async()=>{n.params.currentAnimal&&await x.getListAllResult()});const f=q(()=>{let u=x.allResults.find((v,y,g)=>v.animal==n.params.currentAnimal);return u?u.parts:null});return(u,v)=>(c(),i(h,null,[d("div",O,[d("h1",D,s(r(n).params.currentAnimal)+" - \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0432\u0435\u0441\u0430 ",1),t(b)]),d("div",E,[(c(!0),i(h,null,B(r(f),(y,g)=>(c(),i("div",{class:"col-lg-8 col-sm-12",key:y},[t(k,{bordered:""},{default:e(()=>[t(p,{horizontal:""},{default:e(()=>[t(p,{class:"q-pt-xs"},{default:e(()=>[d("div",H,s(r(n).params.currentAnimal),1),d("div",J,[l(s(g)+" ",1),t(M,{align:"top",color:"green"},{default:e(()=>[l("\u041F\u0430\u0440\u0442\u0438\u044F")]),_:1})])]),_:2},1024)]),_:2},1024),t(b),t(p,null,{default:e(()=>[d("div",K,[(c(!0),i(h,null,B(r(f)[g],(o,T,S)=>(c(),i(h,{key:o},[Object.keys(r(f)[g]).length-1===S?(c(),i("div",P,[t(F,null,{default:e(()=>[t(Q,null,{default:e(()=>[t(m,null,{default:e(()=>[t(_,null,{default:e(()=>[l("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E")]),_:1})]),_:1}),t(m,{side:""},{default:e(()=>[t(_,{caption:""},{default:e(()=>[l(s(o.count),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(b,{spaced:"",inset:""}),t(Q,null,{default:e(()=>[t(m,null,{default:e(()=>[t(_,null,{default:e(()=>[l("\u0412\u043E\u0437\u0440\u0430\u0441\u0442")]),_:1})]),_:1}),t(m,{side:""},{default:e(()=>[t(_,{caption:""},{default:e(()=>[l(s(o.days)+" "+s(r(j)(o.days,["\u0434\u0435\u043D\u044C","\u0434\u043D\u044F","\u0434\u043D\u0435\u0439"])),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(b,{spaced:"",inset:""}),t(Q,null,{default:e(()=>[t(m,null,{default:e(()=>[t(_,null,{default:e(()=>[l("\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u0441")]),_:1})]),_:1}),t(m,{side:""},{default:e(()=>[t(_,{caption:""},{default:e(()=>[l(s(o.scope>1e3?o.scope/1e3+" \u043A\u0433":o.scope+" \u0433\u0440\u0430\u043C\u043C"),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)])):V("",!0)],64))),128))])]),_:2},1024),t(b),t(R,null,{default:e(()=>[t($,{to:`/stat/${r(n).params.currentAnimal}/${g}`,class:"full-width q-pa-md",color:"teal-9",label:"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u0440\u043E\u0441\u0442\u0430 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445"},null,8,["to"])]),_:2},1024)]),_:2},1024)]))),128))])],64))}};export{et as default};