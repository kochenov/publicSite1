import{b as a,u,a as o}from"./index.3b29565f.js";var c=a(async({router:r})=>{const s=["login","registration","forgotPassword","passwordReset"];r.beforeEach(async t=>{const e=await u().getAuthUser();if(e&&await o().getCurrentUser(e.uid),t.meta.requiresAuth&&!e)return{path:"/login",query:{redirect:t.fullPath}};if(e&&s.includes(t.name))return{path:"/"}})});export{c as default};
