"use strict";(globalThis.webpackChunkgoogle_listings_and_ads=globalThis.webpackChunkgoogle_listings_and_ads||[]).push([[472],{3919:(e,t,n)=>{n.d(t,{NS:()=>u,RO:()=>g,Me:()=>m,Ay:()=>_});var o=n(1609),a=n(7723),l=n(6427),c=n(6087),s=n(9457),i=n(7892),r=n(7792),d=n(8582);const g="all-accounts",u="ads-account",m="api-data-fetch-feature",A={[g]:{title:(0,a.__)("Disconnect all accounts","google-listings-and-ads"),confirmButton:(0,a.__)("Disconnect all accounts","google-listings-and-ads"),confirmation:(0,a.__)("Yes, I want to disconnect all my accounts.","google-listings-and-ads"),contents:[(0,a.__)("I understand that I am disconnecting any WordPress.com account, Google account, Google Merchant Center account and Google Ads account connected to this extension.","google-listings-and-ads"),(0,a.__)("Any active product listings will continue to show on Google. They can be managed, edited, or deleted manually from Google Merchant Center (merchants.google.com).","google-listings-and-ads"),(0,a.__)("Any ongoing paid campaigns will continue to run. They can be managed, edited, or deleted manually from Google Ads (ads.google.com).","google-listings-and-ads")]},[u]:{title:(0,a.__)("Disconnect Google Ads account","google-listings-and-ads"),confirmButton:(0,a.__)("Disconnect Google Ads Account","google-listings-and-ads"),confirmation:(0,a.__)("Yes, I want to disconnect my Google Ads account.","google-listings-and-ads"),contents:[(0,a.__)("I understand that I am disconnecting my Google Ads account from this WooCommerce extension.","google-listings-and-ads"),(0,a.__)("Any ongoing paid campaigns will continue to run. They can be managed, edited, or deleted manually from Google Ads (ads.google.com).","google-listings-and-ads"),(0,a.__)("Some configurations for Google Ads created through WooCommerce may be lost. This cannot be undone.","google-listings-and-ads")]},[m]:{title:(0,a.__)("Disable data fetching","google-listings-and-ads"),confirmButton:(0,a.__)("Disable data fetching","google-listings-and-ads"),confirmation:(0,a.__)("Yes, I want to disable the data fetching feature.","google-listings-and-ads"),contents:[(0,a.__)("I understand that I am disabling the data fetching feature from this WooCommerce extension.","google-listings-and-ads"),(0,a.__)("Any ongoing campaigns and configuration will continue to run. They will be pushed to Google as in the previous versions of this extension.","google-listings-and-ads")]}};function E({disconnectTarget:e,onRequestClose:t,onDisconnected:n,disconnectAction:u}){const[m,E]=(0,c.useState)(!1),[_,h]=(0,c.useState)(!1),f=(0,d.j)(),{title:p,confirmButton:y,confirmation:C,contents:b}=A[e],G=()=>{_||t()};return(0,o.createElement)(s.A,{className:"gla-disconnect-accounts-modal",title:(0,o.createElement)(o.Fragment,null,(0,o.createElement)(r.A,{size:20}),p),isDismissible:!_,buttons:[(0,o.createElement)(i.A,{key:"1",isSecondary:!0,disabled:_,onClick:G},(0,a.__)("Never mind","google-listings-and-ads")),(0,o.createElement)(i.A,{key:"2",isPrimary:!0,isDestructive:!0,loading:_,disabled:!m,onClick:()=>{let o=e===g?f.disconnectAllAccounts:f.disconnectGoogleAdsAccount;u&&(o=u),h(!0),o().then((()=>{n(),t()})).catch((()=>{h(!1)}))}},y)],onRequestClose:G},b.map(((e,t)=>(0,o.createElement)("p",{key:t},e))),(0,o.createElement)(l.CheckboxControl,{label:C,checked:m,disabled:_,onChange:E}))}function _(e){return(0,o.createElement)(E,{...e})}},4718:(e,t,n)=>{n.r(t),n.d(t,{default:()=>oe});var o=n(1609),a=n(6087),l=n(6476),c=n(3905),s=n(14),i=n(8e3),r=n(1016),d=n(3666),g=n(5489),u=n(7723),m=n(6427),A=n(1968),E=n(7401),_=n(7916),h=n(1378),f=n(7892),p=n(6028),y=n(850),C=n(4790),b=n(3476),G=n(7978),v=n(8981),w=n(6575);function k(e){return(0,o.createElement)(w.A,{title:(0,u.__)("Linked accounts","google-listings-and-ads"),description:(0,u.__)("A WordPress.com account, Google account, Google Merchant Center account, and Google Ads account are required to use this extension in WooCommerce.","google-listings-and-ads"),...e})}var D=n(3919),N=n(6473);const{CONNECTED:S,INCOMPLETE:x}=c.Wn;function I(){const e=(0,A.A)(),{jetpack:t}=(0,E.A)(),{google:n}=(0,i.A)(),{googleMCAccount:l}=(0,_.A)(),{googleAdsAccount:c}=(0,h.A)(),s=!(t&&n&&l&&c),r=[S,x].includes(c?.status),[g,I]=(0,a.useState)(null);return(0,o.createElement)(k,null,g&&(0,o.createElement)(D.Ay,{onRequestClose:()=>I(null),onDisconnected:()=>{(0,N.Ff)("gla_disconnected_accounts",{context:g});const t=g===D.RO?e+(0,d.XG)():window.location.href;window.location.href=t},disconnectTarget:g}),s?(0,o.createElement)(p.A,null):(0,o.createElement)(y.A,{size:"large"},(0,o.createElement)(C.LJ,{jetpack:t}),(0,o.createElement)(b.A,{googleAccount:n,hideAccountSwitch:!0}),(0,o.createElement)(G.i,{googleMCAccount:l,hideAccountSwitch:!0}),r&&(0,o.createElement)(v.E,{googleAdsAccount:c,hideAccountSwitch:!0},(0,o.createElement)(w.A.Card.Footer,null,(0,o.createElement)(f.A,{isDestructive:!0,isLink:!0,onClick:()=>I(D.NS)},(0,u.__)("Disconnect Google Ads account only","google-listings-and-ads")))),(0,o.createElement)(m.Flex,{justify:"flex-end"},(0,o.createElement)(f.A,{isPrimary:!0,isDestructive:!0,onClick:()=>I(D.RO)},(0,u.__)("Disconnect from all accounts","google-listings-and-ads")))))}var T=n(7677),F=n(1903),P=n(3741),M=n(2137);function O(){const{jetpack:e}=(0,E.A)(),t="yes"===e?.active;return(0,a.useEffect)((()=>{t&&(0,l.getHistory)().replace((0,d.FN)())}),[t]),e?(0,o.createElement)(k,null,(0,o.createElement)(y.A,{size:"large"},(0,o.createElement)(M.A,{className:"gla-wpcom-connection-lost-card",isBorderless:!0,size:"small",icon:(0,o.createElement)(T.A,{icon:F.A,size:24}),title:(0,u.__)("Your WordPress.com account has been disconnected.","google-listings-and-ads"),helper:(0,u.__)("Connect your WordPress.com account to ensure your products stay listed on Google. If you do not re-connect, your products can’t be automatically synced to Google, and any existing listings may be removed from Google.","google-listings-and-ads")}),(0,o.createElement)(C.s9,null))):(0,o.createElement)(P.A,null)}var W=n(7400),q=n(9415),j=n(8582);function R({email:e}){const t=(0,A.A)(),[n,c]=(0,a.useState)(null),{disconnectGoogleAccount:s}=(0,j.j)(),[i,r]=(0,a.useState)(!1);return(0,o.createElement)(M.A,{appearance:M.x.GOOGLE,description:e},(0,o.createElement)(m.CardDivider,null),(0,o.createElement)(w.A.Card.Body,null,(0,o.createElement)(m.Notice,{status:"error",isDismissible:!1},(0,o.createElement)("p",null,(0,a.createInterpolateElement)((0,u.__)("This Google account, <accountEmail />, was not the Google account previously connected to this integration.","google-listings-and-ads"),{accountEmail:(0,o.createElement)("strong",null,e)})),(0,o.createElement)("p",null,(0,u.__)("Thus, it doesn‘t have access to the Google Merchant Center and/or Google Ads account currently connected to this WooCommerce store.","google-listings-and-ads")),(0,o.createElement)("p",null,(0,u.__)("Try connecting with a different Google account, or completely disconnect all your connected accounts.","google-listings-and-ads")))),(0,o.createElement)(w.A.Card.Footer,{justify:"flex-end"},n&&(0,o.createElement)(D.Ay,{onRequestClose:()=>c(null),onDisconnected:()=>{const e=(0,l.getNewPath)(null,"/google/start",null);window.location.href=t+e},disconnectTarget:n}),(0,o.createElement)(f.A,{isSecondary:!0,isDestructive:!0,disabled:i,onClick:()=>c(D.RO)},(0,u.__)("Disconnect all accounts","google-listings-and-ads")),(0,o.createElement)(f.A,{isPrimary:!0,loading:i,onClick:()=>{r(!0),s().catch((()=>{r(!1)}))}},(0,u.__)("Try another Google account","google-listings-and-ads"))))}function B(){const{data:e}=(0,q.A)("getGoogleAccountAccess"),t=(0,W.A)(c.Th.adsSetupComplete,e?.scope),n="yes"===e?.active,s=n?"no"===e?.merchant_access||"no"===e?.ads_access:void 0,i=n&&!s&&t.glaRequired;if((0,a.useEffect)((()=>{i&&(0,l.getHistory)().replace((0,d.uZ)())}),[i]),!e)return(0,o.createElement)(P.A,null);if(!i){const t=s?(0,o.createElement)(R,{email:e.email}):(0,o.createElement)(b.h,null);return(0,o.createElement)(w.A,{title:(0,u.__)("Connect account","google-listings-and-ads")},t)}return null}var L=n(6474),H=n(5595),K=n(7539),Y=n(7980),z=n(1177),$=n(5556);const J=()=>{(0,L.A)("full-content");const{updateGoogleMCContactInformation:e}=(0,j.j)(),{data:t}=(0,H.A)(),[n,c]=(0,a.useState)(!1),s=t.isAddressFilled&&t.isMCAddressDifferent;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(K.A,{title:(0,u.__)("Edit store address","google-listings-and-ads"),helpButton:(0,o.createElement)(Y.A,{eventContext:"edit-store-address"}),backHref:(0,d.FN)()}),(0,o.createElement)("div",{className:"gla-settings"},(0,o.createElement)(w.A,{title:(0,u.__)("Store address","google-listings-and-ads"),description:(0,o.createElement)("div",null,(0,o.createElement)("p",null,(0,u.__)("Your store address is required by Google for verification purposes. It will be shared with the Google Merchant Center and will not be displayed to customers.","google-listings-and-ads")),(0,o.createElement)("p",null,(0,o.createElement)(z.A,{context:"settings-store-address",linkId:"contact-information-read-more",href:"https://woocommerce.com/document/google-for-woocommerce/get-started/requirements/#contact-information"},(0,u.__)("Learn more","google-listings-and-ads"))))},(0,o.createElement)($.A,{showValidation:!t.isAddressFilled})),(0,o.createElement)(w.A,null,(0,o.createElement)(m.Flex,{justify:"flex-end"},(0,o.createElement)(f.A,{isPrimary:!0,loading:n,disabled:!s,eventName:"gla_contact_information_save_button_click",onClick:()=>{c(!0),e().then((()=>(0,l.getHistory)().push((0,d.FN)()))).catch((()=>c(!1)))}},(0,u.__)("Save details","google-listings-and-ads"))))))};var Q=n(5414),V=n(2783),X=n(8389);const Z=()=>{const e=(0,Q.A)();return(0,X.A)(e),(0,L.A)("full-content"),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(K.A,{title:(0,u.__)("Edit phone number","google-listings-and-ads"),helpButton:(0,o.createElement)(Y.A,{eventContext:"edit-phone-number"}),backHref:(0,d.FN)()}),(0,o.createElement)("div",{className:"gla-settings"},(0,o.createElement)(w.A,{title:(0,u.__)("Phone number","google-listings-and-ads"),description:(0,o.createElement)("div",null,(0,o.createElement)("p",null,(0,u.__)("Your phone number is required by Google for verification purposes. It will be shared with the Google Merchant Center and will not be displayed to customers.","google-listings-and-ads")),(0,o.createElement)("p",null,(0,o.createElement)(z.A,{context:"settings-phone-number",linkId:"contact-information-read-more",href:"https://woocommerce.com/document/google-for-woocommerce/get-started/requirements/#contact-information"},(0,u.__)("Learn more","google-listings-and-ads"))))},(0,o.createElement)(V.A,{view:"settings",phoneNumber:e,initEditing:!0}))))};var U=n(332),ee=n(1638),te=n(5246);const ne="gla-settings",oe=()=>{const{subpath:e}=(0,l.getQuery)();(0,s.A)(),(0,r.A)();const{google:t}=(0,i.A)(),n=e===d.$K.reconnectGoogleAccount;switch((0,a.useEffect)((()=>{n||"no"!==t?.active||(0,l.getHistory)().replace((0,d.Ke)(c.iH.GOOGLE_DISCONNECTED))}),[n,t]),e){case d.$K.reconnectWPComAccount:return(0,o.createElement)("div",{className:ne},(0,o.createElement)(O,null));case d.$K.reconnectGoogleAccount:return(0,o.createElement)(B,null);case d.$K.editPhoneNumber:return(0,o.createElement)(Z,null);case d.$K.editStoreAddress:return(0,o.createElement)(J,null)}return(0,o.createElement)("div",{className:ne},(0,o.createElement)(U.A,null),(0,o.createElement)(ee.A,null),(0,o.createElement)(te.A,null),(0,o.createElement)(g.h,null),(0,o.createElement)(I,null))}}}]);