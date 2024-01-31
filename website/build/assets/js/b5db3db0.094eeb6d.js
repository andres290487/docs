"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2926],{23278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(85893),r=n(11151),o=n(74866),c=n(85162);const s={id:"contract",title:"Contract",sidebar_label:"Contract"},l=void 0,i={id:"tools/near-api-js/contract",title:"Contract",description:"When you instantiate an instance of Contract you need to specify the names of the functions you have on your smart contract.",source:"@site/../docs/4.tools/near-api-js/naj-contract.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/contract",permalink:"/tools/near-api-js/contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/naj-contract.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1706698360,formattedLastUpdatedAt:"Jan 31, 2024",frontMatter:{id:"contract",title:"Contract",sidebar_label:"Contract"},sidebar:"tools",previous:{title:"Account",permalink:"/tools/near-api-js/account"},next:{title:"Utilities",permalink:"/tools/near-api-js/utils"}},u={},d=[{value:"Load Contract",id:"load-contract",level:3},{value:"Call Contract",id:"call-contract",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["When you instantiate an instance of ",(0,a.jsx)(t.code,{children:"Contract"})," you need to specify the names of the functions you have on your smart contract.\nThen the new instance of ",(0,a.jsx)(t.code,{children:"Contract"})," will have methods with the same names as your smart contract functions.\nFor example if you deployed a contract with ",(0,a.jsx)(t.code,{children:"my_smart_contract_function"})," function on it, then this will work:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const contract = new Contract(account, "example-contract.testnet", {\n  changeMethods: ["my_smart_contract_function"], // your smart-contract has a function `my_smart_contract_function`\n});\n// `contract` object has `my_smart_contract_function` function on it:\ncontract.my_smart_contract_function();\n'})}),"\n",(0,a.jsx)(t.h3,{id:"load-contract",children:"Load Contract"}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(c.Z,{value:"Standard",label:"Standard",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const { Contract } = nearAPI;\n\nconst contract = new Contract(\n  account, // the account object that is connecting\n  "example-contract.testnet",\n  {\n    // name of contract you\'re connecting to\n    viewMethods: ["getMessages"], // view methods do not change state but usually return a value\n    changeMethods: ["addMessage"], // change methods modify state\n  }\n);\n'})}),(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.a,{href:"https://near.github.io/near-api-js/classes/_near_js_accounts.contract.Contract.html",children:[(0,a.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,a.jsx)(t.code,{children:"Contract"})]})})]}),(0,a.jsxs)(c.Z,{value:"wallet",label:"Using Wallet",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const { Contract } = nearAPI;\n\nconst contract = new Contract(\n  wallet.account(), // the account object that is connecting\n  "example-contract.testnet",\n  {\n    // name of contract you\'re connecting to\n    viewMethods: ["getMessages"], // view methods do not change state but usually return a value\n    changeMethods: ["addMessage"], // change methods modify state\n  }\n);\n'})}),(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.a,{href:"https://near.github.io/near-api-js/classes/_near_js_accounts.contract.Contract.html",children:[(0,a.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,a.jsx)(t.code,{children:"Contract"})]})})]})]}),"\n",(0,a.jsx)(t.h3,{id:"call-contract",children:"Call Contract"}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(c.Z,{value:"method",label:"Change Method",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const contract = new Contract(account, "example-contract.testnet", {\n  changeMethods: ["method_name"],\n});\nawait contract.method_name(\n  {\n    arg_name: "value", // argument name and value - pass empty object if no args required\n  },\n  "300000000000000", // attached GAS (optional)\n  "1000000000000000000000000" // attached deposit in yoctoNEAR (optional)\n);\n'})})}),(0,a.jsx)(c.Z,{value:"callback",label:"Change Method w/ callbackUrl and meta",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const contract = new Contract(account, "example-contract.testnet", {\n  changeMethods: ["method_name"],\n});\nawait contract.method_name({\n  callbackUrl: "https://example.com/callback", // callbackUrl after the transaction approved (optional)\n  meta: "some info", // meta information NEAR Wallet will send back to the application. `meta` will be attached to the `callbackUrl` as a url param\n  args: {\n    arg_name: "value", // argument name and value - pass empty object if no args required\n  },\n  gas: 300000000000000, // attached GAS (optional)\n  amount: 1000000000000000000000000, // attached deposit in yoctoNEAR (optional)\n});\n'})})}),(0,a.jsx)(c.Z,{value:"view",label:"View Method",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const contract = new Contract(account, "example-contract.testnet", {\n  viewMethods: ["view_method_name"],\n});\nconst response = await contract.view_method_name();\n'})})}),(0,a.jsx)(c.Z,{value:"args",label:"View Method w/ args",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const contract = new Contract(account, "example-contract.testnet", {\n  viewMethods: ["view_method_name"],\n});\nconst response = await contract.view_method_name({ arg_name: "arg_value" });\n'})})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.a,{href:"https://near.github.io/near-api-js/classes/_near_js_accounts.contract.Contract.html",children:[(0,a.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,a.jsx)(t.code,{children:"Contract"})]})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var o=n(85893);function c(e){var t=e.children,n=e.hidden,c=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,c),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),o=n(12466),c=n(16550),s=n(20469),l=n(91980),i=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,c.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function f(e){var t,n,r,o,c=e.defaultValue,l=e.queryString,i=void 0!==l&&l,d=e.groupId,f=h(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:c,tabValues:f})})),b=v[0],g=v[1],j=p({queryString:i,groupId:d}),x=j[0],y=j[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),_=w[0],C=w[1],k=function(){var e=null!=x?x:_;return m({value:e,tabValues:f})?e:null}();return(0,s.Z)((function(){k&&g(k)}),[k]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),C(e)}),[y,C,f]),tabValues:f}}var v=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function j(e){var t=e.className,n=e.block,a=e.selectedValue,c=e.selectValue,s=e.tabValues,l=[],i=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(i(t),c(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var o,c=l.indexOf(e.currentTarget)-1;n=null!=(o=l[c])?o:l[l.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},o,{className:(0,r.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var c=o.find((function(e){return e.props.value===r}));return c?(0,a.cloneElement)(c,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=f(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,Object.assign({},e,t)),(0,g.jsx)(x,Object.assign({},e,t))]})}function w(e){var t=(0,v.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var a=n(67294);const r={},o=a.createContext(r);function c(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);