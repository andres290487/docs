"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6328],{96072:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=o(85893),n=o(11151);const a={id:"storage",title:"Million Small Deposits"},r=void 0,i={id:"develop/contracts/security/storage",title:"Million Small Deposits",description:"On NEAR, your contract pays for the storage it uses. This means that the more data you store, the more balance you need to cover for storage. If you don't handle these costs correctly (e.g. asking the user to cover their storage usage), then a million little deposits can drain your contract of its funds.",source:"@site/../docs/2.develop/contracts/security/storage.md",sourceDirName:"2.develop/contracts/security",slug:"/develop/contracts/security/storage",permalink:"/develop/contracts/security/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/security/storage.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1675340425,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{id:"storage",title:"Million Small Deposits"},sidebar:"contracts",previous:{title:"\u2705 Checklist",permalink:"/develop/contracts/security/checklist"},next:{title:"Cross-Contract Calls",permalink:"/develop/contracts/security/callbacks"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"On NEAR, your contract pays for the storage it uses. This means that the more data you store, the more balance you need to cover for storage. If you don't handle these costs correctly (e.g. asking the user to cover their storage usage), then a million little deposits can drain your contract of its funds."}),"\n",(0,s.jsx)(t.p,{children:"Let's walk through an example:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["You launch ",(0,s.jsx)(t.a,{href:"https://examples.near.org/guest-book-js",children:"a guest book app"}),", deploying your app's smart contract to the account ",(0,s.jsx)(t.code,{children:"example.near"})]}),"\n",(0,s.jsxs)(t.li,{children:["Visitors to your app can add messages to the guest book. This means your users will pay a small gas fee to ",(0,s.jsx)(t.strong,{children:"store"})," their message to your contract."]}),"\n",(0,s.jsxs)(t.li,{children:["When a new message comes in, NEAR will check if ",(0,s.jsx)(t.code,{children:"example.near"})," has enough balance to cover the new storage needs. If it does not, the transaction will fail."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Note that this can create an attack surface. If sending data to your guest book is inexpensive to the user while costing the contract owner significantly more, a malicious user can exploit the imbalance to make maintaining the contract prohibitively expensive."}),"\n",(0,s.jsx)(t.p,{children:"One possible way to tackle this problem is asking the user to attach money to the call to cover the storage used by their message."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Remember that you can release the ",(0,s.jsx)(t.em,{children:"balance locked for storage"})," by simply deleting data from the contract."]})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>r});var s=o(67294);const n={},a=s.createContext(n);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);