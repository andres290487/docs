"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8722],{27634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(85893),r=t(11151);const s={id:"predeployed-contract",title:"Pre-deployed Contract",sidebar_label:"Pre-deployed Contract"},i=void 0,a={id:"tutorials/fts/predeployed-contract",title:"Pre-deployed Contract",description:"Learn how to easily receive fungible tokens without doing any software development by using a readily-available FT smart contract.",source:"@site/../docs/3.tutorials/fts/0-predeployed.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/predeployed-contract",permalink:"/tutorials/fts/predeployed-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/0-predeployed.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1705690302,formattedLastUpdatedAt:"Jan 19, 2024",sidebarPosition:0,frontMatter:{id:"predeployed-contract",title:"Pre-deployed Contract",sidebar_label:"Pre-deployed Contract"},sidebar:"contracts",previous:{title:"Introduction",permalink:"/tutorials/fts/introduction"},next:{title:"Contract Architecture",permalink:"/tutorials/fts/skeleton"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using the FT contract",id:"using-the-ft-contract",level:2},{value:"Setup",id:"setup",level:3},{value:"Receiving Fungible Tokens",id:"receiving-fungible-tokens",level:3},{value:"Final remarks",id:"final-remarks",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Learn how to easily receive fungible tokens without doing any software development by using a readily-available FT smart contract."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"To complete this tutorial successfully, you'll need:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/concepts/basics/accounts/creating-accounts",children:"A NEAR TestNet account"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/tools/near-cli#setup",children:"NEAR-CLI"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"using-the-ft-contract",children:"Using the FT contract"}),"\n",(0,o.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Log in to your newly created account with ",(0,o.jsx)(n.code,{children:"near-cli"})," by running the following command in your terminal:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"near login\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Set an environment variable for your account ID to make it easy to copy and paste commands from this tutorial:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export NEARID=YOUR_ACCOUNT_NAME\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Be sure to replace ",(0,o.jsx)(n.code,{children:"YOUR_ACCOUNT_NAME"})," with the account name you just logged in with including the ",(0,o.jsx)(n.code,{children:".testnet"}),"."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Test that the environment variable is set correctly by running:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"echo $NEARID\n"})}),"\n",(0,o.jsx)(n.h3,{id:"receiving-fungible-tokens",children:"Receiving Fungible Tokens"}),"\n",(0,o.jsxs)(n.p,{children:["NEAR has deployed a new Fungible Token contract to the account ",(0,o.jsx)(n.code,{children:"ft.predeployed.examples.testnet"})," which allows users to freely receive some ",(0,o.jsx)(n.code,{children:"gtNEAR"})," - a new fungible token aimed to promote the power of teamwork! Each ",(0,o.jsx)(n.code,{children:"gtNEAR"})," is equal to ",(0,o.jsx)(n.code,{children:"1e24 yocto-gtNEAR"})," similar to how 1 $NEAR is equal to 1e24 yoctoNEAR."]}),"\n",(0,o.jsx)(n.p,{children:"Using this pre-deployed contract, let's get some gtNEAR!"}),"\n",(0,o.jsxs)(n.p,{children:["Start by calling the method ",(0,o.jsx)(n.code,{children:"ft_mint"})," which is a custom function implemented on this contract in order to send your account some ",(0,o.jsx)(n.code,{children:"gtNEAR"}),"! The following command will send ",(0,o.jsx)(n.code,{children:"0.01 gtNEAR"})," to your account."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'near call ft.predeployed.examples.testnet ft_mint \'{"account_id": "\'$NEARID\'", "amount": "10000000000000000000000"}\' --accountId $NEARID\n'})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Example response: "}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'Log [ft.predeployed.examples.testnet]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_mint","data":[{"owner_id":"benjiman.testnet","amount":"10000000000000000000000","memo":"FTs Minted"}]}\nTransaction Id Fhqa8YDLKxnxM9jjHCPN4hn1w1RKESYrav3kwDjhWWUu\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/Fhqa8YDLKxnxM9jjHCPN4hn1w1RKESYrav3kwDjhWWUu\n\'\'\n'})})})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To view tokens owned by an account you can call the FT contract with the following ",(0,o.jsx)(n.code,{children:"near-cli"})," command:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"near view ft.predeployed.examples.testnet ft_balance_of '{\"account_id\": \"'$NEARID'\"}'\n"})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Example response: "}),(0,o.jsx)("p",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:"'2250000000000000000000'\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"Congratulations! You just received your first Team Tokens on the NEAR blockchain!"})})," \ud83c\udf89"]}),"\n",(0,o.jsxs)(n.p,{children:["\ud83d\udc49 Now try going to your ",(0,o.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"NEAR Wallet"}),' and view your FTs in the "Balances" tab. \ud83d\udc48']}),"\n",(0,o.jsx)(n.admonition,{title:"Pre-deployed Contract",type:"note",children:(0,o.jsxs)(n.p,{children:["The contract used in this section has been modified such that you can infinitely get ",(0,o.jsx)(n.code,{children:"gtNEAR"})," by calling ",(0,o.jsx)(n.code,{children:"ft_mint"}),". This function is not part of the FT ",(0,o.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"standards"})," and has been implemented for the purpose of this tutorial."]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"final-remarks",children:"Final remarks"}),"\n",(0,o.jsx)(n.p,{children:"This basic example illustrates all the required steps to call an FT smart contract on NEAR and receive your own fungible tokens."}),"\n",(0,o.jsxs)(n.p,{children:["Now that you're familiar with the process, you can jump to ",(0,o.jsx)(n.a,{href:"/tutorials/fts/skeleton",children:"Contract Architecture"})," and learn more about the smart contract structure and how you can build your own FT contract from the ground up."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"Happy minting!"})})," \ud83e\ude99"]}),"\n",(0,o.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,o.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["near-cli: ",(0,o.jsx)(n.code,{children:"3.4.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);