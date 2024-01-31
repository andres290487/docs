"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9476],{33476:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var t=n(85893),a=n(11151);const s={id:"account",title:"Account",sidebar_label:"Account"},o=void 0,i={id:"tools/near-api-js/account",title:"Account",description:"You can interact with, create or delete NEAR accounts.",source:"@site/../docs/4.tools/near-api-js/naj-account.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/account",permalink:"/tools/near-api-js/account",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/naj-account.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1706698360,formattedLastUpdatedAt:"Jan 31, 2024",frontMatter:{id:"account",title:"Account",sidebar_label:"Account"},sidebar:"tools",previous:{title:"Wallet",permalink:"/tools/near-api-js/wallet"},next:{title:"Contract",permalink:"/tools/near-api-js/contract"}},l={},r=[{value:"Load Account",id:"load-account",level:3},{value:"Create Account",id:"create-account",level:3},{value:"Delete Account",id:"delete-account",level:3},{value:"Get Account Balance",id:"get-account-balance",level:3},{value:"Get Account details",id:"get-account-details",level:3},{value:"Deploy a Contract",id:"deploy-a-contract",level:3},{value:"Send Tokens",id:"send-tokens",level:3},{value:"State",id:"state",level:3},{value:"Access Keys",id:"access-keys",level:3},{value:"Add Full Access Key",id:"add-full-access-key",level:4},{value:"Add Function Access Key",id:"add-function-access-key",level:4},{value:"Get All Access Keys",id:"get-all-access-keys",level:4},{value:"Delete Access Key",id:"delete-access-key",level:4}];function d(e){const c={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.p,{children:"You can interact with, create or delete NEAR accounts."}),"\n",(0,t.jsx)(c.h3,{id:"load-account",children:"Load Account"}),"\n",(0,t.jsx)(c.p,{children:"This will return an Account object for you to interact with."}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("example-account.testnet");\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(c.code,{children:"Account"})]})}),"\n",(0,t.jsx)(c.h3,{id:"create-account",children:"Create Account"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'// create a new account using funds from the account used to create it.\nconst account = await nearConnection.account("example-account.testnet");\nawait account.createAccount(\n  "example-account2.testnet", // new account name\n  "8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc", // public key for new account\n  "10000000000000000000" // initial balance for new account in yoctoNEAR\n);\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#createAccount",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.createAccount"})]})}),"\n",(0,t.jsx)(c.h3,{id:"delete-account",children:"Delete Account"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'// deletes account found in the `account` object\n// transfers remaining account balance to the accountId passed as an argument\nconst account = await nearConnection.account("example-account.testnet");\nawait account.deleteAccount("beneficiary-account.testnet");\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#deleteAccount",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.deleteAccount"})]})}),"\n",(0,t.jsx)(c.h3,{id:"get-account-balance",children:"Get Account Balance"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'// gets account balance\nconst account = await nearConnection.account("example-account.testnet");\nawait account.getAccountBalance();\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#getAccountBalance",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.getAccountBalance"})]})}),"\n",(0,t.jsx)(c.h3,{id:"get-account-details",children:"Get Account details"}),"\n",(0,t.jsx)(c.p,{children:"Returns information about an account, such as authorized apps."}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'// gets account details in terms of authorized apps and transactions\nconst account = await nearConnection.account("example-account.testnet");\nawait account.getAccountDetails();\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#getAccountDetails",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.getAccountDetails"})]})}),"\n",(0,t.jsx)(c.h3,{id:"deploy-a-contract",children:"Deploy a Contract"}),"\n",(0,t.jsx)(c.p,{children:"You can deploy a contract from a compiled WASM file. This returns an object with transaction and receipts outcomes and status."}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("example-account.testnet");\nconst transactionOutcome = await account.deployContract(\n  fs.readFileSync("example-file.wasm")\n);\n'})}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#deployContract",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.deployContract"})]}),"\n\xa0\xa0\xa0\n",(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/interfaces/_near_js_types.provider_response.FinalExecutionOutcome.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-interface"})," Interface ",(0,t.jsx)(c.code,{children:"FinalExecutionOutcome"})]})]}),"\n",(0,t.jsx)(c.h3,{id:"send-tokens",children:"Send Tokens"}),"\n",(0,t.jsx)(c.p,{children:"Transfer NEAR tokens between accounts. This returns an object with transaction and receipts outcomes and status."}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("sender-account.testnet");\nawait account.sendMoney(\n  "receiver-account.testnet", // receiver account\n  "1000000000000000000000000" // amount in yoctoNEAR\n);\n'})}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#sendMoney",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.sendMoney"})]}),"\n\xa0\xa0\xa0\n",(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/interfaces/_near_js_types.provider_response.FinalExecutionOutcome.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-interface"})," Interface ",(0,t.jsx)(c.code,{children:"FinalExecutionOutcome"})]})]}),"\n",(0,t.jsx)(c.h3,{id:"state",children:"State"}),"\n",(0,t.jsx)(c.p,{children:"Get basic account information, such as amount of tokens the account has or the amount of storage it uses."}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("example-account.testnet");\nconst accountState = await account.state();\n'})}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#state",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.state"})]}),"\n\xa0\xa0\xa0\n",(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/interfaces/near_api_js.providers_provider.AccountView.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-interface"})," Interface ",(0,t.jsx)(c.code,{children:"AccountView"})]})]}),"\n",(0,t.jsx)(c.h3,{id:"access-keys",children:"Access Keys"}),"\n",(0,t.jsx)(c.p,{children:"You can get and manage keys for an account."}),"\n",(0,t.jsx)(c.h4,{id:"add-full-access-key",children:"Add Full Access Key"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'// takes public key as string for argument\nconst account = await nearConnection.account("example-account.testnet");\nawait account.addKey("8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc");\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#addKey",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.addKey"})]})}),"\n",(0,t.jsx)(c.h4,{id:"add-function-access-key",children:"Add Function Access Key"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("example-account.testnet");\nawait account.addKey(\n  "8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc", // public key for new account\n  "example-account.testnet", // contract this key is allowed to call (optional)\n  "example_method", // methods this key is allowed to call (optional)\n  "2500000000000" // allowance key can use to call methods (optional)\n);\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#addKey",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.addKey"})]})}),"\n",(0,t.jsx)(c.h4,{id:"get-all-access-keys",children:"Get All Access Keys"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("example-account.testnet");\nawait account.getAccessKeys();\n'})}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#getAccessKeys",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.getAccessKeys"})]}),"\n\xa0\xa0\xa0\n",(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/interfaces/near_api_js.providers_provider.AccessKeyInfoView.html",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-interface"})," Interface ",(0,t.jsx)(c.code,{children:"AccessKeyInfoView"})]})]}),"\n",(0,t.jsx)(c.h4,{id:"delete-access-key",children:"Delete Access Key"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("example-account.testnet");\nawait account.deleteKey("8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc");\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#deleteKey",children:[(0,t.jsx)("span",{className:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.deleteKey"})]})})]})}function u(e={}){const{wrapper:c}={...(0,a.a)(),...e.components};return c?(0,t.jsx)(c,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,c,n)=>{n.d(c,{Z:()=>i,a:()=>o});var t=n(67294);const a={},s=t.createContext(a);function o(e){const c=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function i(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:c},e.children)}}}]);