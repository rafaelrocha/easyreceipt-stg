(this.webpackJsonpeasyreceipts=this.webpackJsonpeasyreceipts||[]).push([[0],[,,,,,,,,,,function(e,a,t){},function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(7),i=t.n(l),c=(t(16),t(5)),p=(t(17),t(18),t(19),t(20),t(6)),d=t(8),s=t(3),o=t(4),m=t(1),u=Object(o.a)("receiptPersistence"),y=function(){function e(a){var t=this;Object(p.a)(this,e),this.receipts={},Object.defineProperty(this,u,{writable:!0,value:void 0}),Object(s.a)(this,u)[u]=a,this.receipts=Object(s.a)(this,u)[u].fetchData()||{},Object(m.m)(this,{receipts:m.n}),Object(m.f)((function(){console.log("---------beginreceipts----");for(var e=0,a=Object.entries(t.receipts);e<a.length;e++){var r=Object(c.a)(a[e],2),n=(r[0],r[1]);console.log(Object.assign({},n))}console.log("--------------------------"),Object(s.a)(t,u)[u].saveWithDelay(t.receipts)}))}return Object(d.a)(e,[{key:"add",value:function(e){if(!e.id)throw new Error("You must pass receipt.id");if(this.findById(e.id))throw new Error("This id is already in use");this.receipts[e.id]=e}},{key:"update",value:function(e){if(!e.id)throw new Error("You must pass receipt.id");this.receipts[e.id]=e}},{key:"findById",value:function(e){return this.receipts[e]}},{key:"findAll",value:function(){return this.receipts}},{key:"removeById",value:function(e){delete this.receipts[e]}},{key:"removeAll",value:function(){throw new Error("Not implemented")}}]),e}(),f=Object(o.a)("payeePersistence"),h=function e(a){var t=this;Object(p.a)(this,e),this.payee={},Object.defineProperty(this,f,{writable:!0,value:void 0}),Object(s.a)(this,f)[f]=a,this.payee=Object(s.a)(this,f)[f].fetchData()||{},Object(m.m)(this,{payee:m.n}),Object(m.f)((function(){console.log("---------payeestore----"),console.log(Object.assign({},t.payee)),console.log("--------------------------"),Object(s.a)(t,f)[f].saveWithDelay(t.payee)}))},E=t(2),v=Object(E.a)((function(e){var a=e.payeeStore;return n.a.createElement("div",{className:"repeatable-fields-container"},n.a.createElement("header",{className:"top-app-bar"},n.a.createElement("div",{className:"top-app-bar__navigation"},n.a.createElement("a",{onClick:function(){return window.history.back()}},n.a.createElement("i",{className:"fas fa-arrow-left"}))),n.a.createElement("div",{className:"top-app-bar__title"},"Meus dados")),n.a.createElement("div",{className:"repeatable-fields"},n.a.createElement("label",{htmlFor:"payee"},"Emitente"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payee",placeholder:"",id:"payee",value:a.payee.name,onChange:function(e){return a.payee.name=e.target.value}}),n.a.createElement("label",{htmlFor:"payeeCpfOrRg"},"CPF/RG"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payeeCpfOrRg",placeholder:"",id:"payeeCpfOrRg",value:a.payee.cpfOrRg,onChange:function(e){return a.payee.cpfOrRg=e.target.value}}),n.a.createElement("label",{htmlFor:"payeeAddress"},"Endere\xe7o"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payeeAddress",placeholder:"",id:"payeeAddress",value:a.payee.address,onChange:function(e){return a.payee.address=e.target.value}}),n.a.createElement("label",{htmlFor:"date"},"Data"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"date",placeholder:"",id:"date",value:a.payee.date,onChange:function(e){return a.payee.date=e.target.value}})),n.a.createElement("div",{className:"action-bar"},n.a.createElement("button",{onClick:function(){window.location.hash="#receipt-list"}},"Pronto")))})),b=(t(22),Object(E.a)((function(e){return n.a.createElement("div",{className:"receipt-card"},n.a.createElement("h3",{className:"receipt-card__title"},e.receipt.payer||"..."),n.a.createElement("div",{className:"receipt-card__content"},n.a.createElement("p",null,e.receipt.referrerTo||"..."),n.a.createElement("span",{className:"receipt-card__price"},"R$ ",e.receipt.paidValue||"?")),n.a.createElement("div",{className:"receipt-card__bottom"},n.a.createElement("div",{className:"receipt-card__number"},n.a.createElement("span",null,"N\xba 121212")),n.a.createElement("div",{className:"line-separator"}),n.a.createElement("div",{className:"receipt-card__action-bar"},n.a.createElement("a",{className:"receipt-card__button",href:"#receipt/"+e.index},n.a.createElement("i",{className:"fas fa-edit"})),n.a.createElement("a",{className:"receipt-card__button"},n.a.createElement("i",{className:"fas fa-print"})),n.a.createElement("a",{className:"receipt-card__button",onClick:function(){1==window.confirm("Realmente deseja remover esse recibo?")&&e.removeReceipt(e.index)}},n.a.createElement("i",{className:"fas fa-trash"})))))}))),x=(t(23),Object(E.a)((function(e){var a=e.receiptStore,t=e.payeeStore,l=Object(r.useState)(""),i=Object(c.a)(l,2),p=i[0],d=i[1];function s(e){a.removeById(e)}return n.a.createElement("div",{className:"receipts-card"},n.a.createElement("header",{className:"top-app-bar"},n.a.createElement("div",{className:"top-app-bar__navigation"},n.a.createElement("a",null,n.a.createElement("i",{class:"fas fa-home"}))),n.a.createElement("div",{className:"top-app-bar__title"},"Recibos Facil"),n.a.createElement("div",{className:"top-app-bar__right-part"},n.a.createElement("input",{type:"text",name:"search",placeholder:"Pesquise por nome",id:"search",class:"search",value:p,onChange:function(e){return d(e.target.value)}}))),n.a.createElement("div",{className:"receipts-card-container"},Object.keys(a.receipts).map((function(e){var r=a.receipts[e];if(r.payer.includes(p))return n.a.createElement(b,{key:e,index:e,payee:t.payee.name,payeeCpfOrRg:t.payee.cpfOrRg,payeeAddress:t.payee.address,date:t.payee.date,receipt:r,removeReceipt:s})}))))}))),N=(t(24),Object(E.a)((function(e){return n.a.createElement("div",{className:"receipt-form"},n.a.createElement("div",{className:"receipt-payer"},n.a.createElement("h3",null,"Recebido de"),n.a.createElement("label",{htmlFor:"payer-"+e.index},"Recebi (emos) de"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payer-"+e.index,placeholder:"",id:"payer-"+e.index,value:e.receipt.payer,onChange:function(a){return e.receipt.payer=a.target.value}}),n.a.createElement("label",{htmlFor:"referrerTo-"+e.index},"Referente"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"referrerTo-"+e.index,placeholder:"",id:"referrerTo-"+e.index,value:e.receipt.referrerTo,onChange:function(a){return e.receipt.referrerTo=a.target.value}}),n.a.createElement("label",{htmlFor:"paidValue-"+e.index},"Valor"),n.a.createElement("input",{className:"u-full-width",type:"number",name:"paidValue-"+e.index,placeholder:"",id:"paidValue-"+e.index,value:e.receipt.paidValue,onChange:function(a){return e.receipt.paidValue=a.target.value}})),n.a.createElement("label",{htmlFor:"payerAddress-"+e.index},"Endere\xe7o"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payerAddress-"+e.index,placeholder:"",id:"payerAddress-"+e.index,value:e.receipt.payerAddress,onChange:function(a){return e.receipt.payerAddress=a.target.value}}),n.a.createElement("div",{className:"receipt-header"}),n.a.createElement("div",{className:"receipt-date"},n.a.createElement("label",{htmlFor:"date-"+e.index},"Data"),n.a.createElement("input",{className:"u-full-width",type:"date",name:"date-"+e.index,placeholder:"",id:"date-"+e.index,value:e.receipt.date,onChange:function(a){return e.receipt.date=a.target.value}})),n.a.createElement("div",{className:"receipt-payee top-padding"},n.a.createElement("h3",null,"Recebido por"),n.a.createElement("div",{className:"emitentCpf"},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"payee-"+e.index},"Emitente"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payee-"+e.index,placeholder:"",id:"payee-"+e.index,value:e.payee,readOnly:!0})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"payeeCpfOrRg-"+e.index},"CPF/RG"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payeeCpfOrRg-"+e.index,placeholder:"",id:"payeeCpfOrRg-"+e.index,value:e.payeeCpfOrRg,readOnly:!0}))),n.a.createElement("label",{htmlFor:"payeeAddress-"+e.index},"Endere\xe7o"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payeeAddress-"+e.index,placeholder:"",id:"payeeAddress-"+e.index,value:e.payeeAddress,readOnly:!0})))}))),g=(t(25),Object(E.a)((function(e){var a=e.receiptStore,t=e.payeeStore,r=!1,l=null;e.receiptId?(r=!0,l=e.receiptId):(l=Date.now(),a.add({id:l,paidValue:"",payer:"",payerAddress:"",referrerTo:""}));var i=a.receipts[l];return n.a.createElement("div",{className:"new-receipt"},n.a.createElement("header",{className:"top-app-bar"},n.a.createElement("div",{className:"top-app-bar__navigation"},n.a.createElement("a",{onClick:function(){return window.history.back()}},n.a.createElement("i",{className:"fas fa-arrow-left"}))),n.a.createElement("div",{className:"top-app-bar__title"},"Recibo"),!r&&n.a.createElement("div",{className:"top-app-bar__right-part"},n.a.createElement("a",{onClick:function(){return a.removeById(l),void(window.location.hash="#receipt-list")}},n.a.createElement("i",{class:"fas fa-times top-app-bar__icon"})))),n.a.createElement(N,{key:i.id,index:i.id,payee:t.payee.name,payeeCpfOrRg:t.payee.cpfOrRg,payeeAddress:t.payee.address,date:t.payee.date,receipt:i}),n.a.createElement("div",{className:"action-bar"},n.a.createElement("button",{onClick:function(){window.location.hash="#receipt-list"}},"Pronto")))}))),O=(t(10),Object(E.a)((function(e){return n.a.createElement("div",{className:"receipt-container"},n.a.createElement("div",{className:"receipt-header"},n.a.createElement("span",null,"RECIBO"),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"receiptNumber-"+e.index},"Numero"),n.a.createElement("input",{type:"text",name:"receiptNumber-"+e.index,placeholder:"",id:"receiptNumber-"+e.index})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"paidValue-"+e.index},"Valor"),n.a.createElement("input",{type:"text",name:"paidValue-"+e.index,placeholder:"",id:"paidValue-"+e.index,value:e.receipt.paidValue,onChange:function(a){return e.receipt.paidValue=a.target.value}}))),n.a.createElement("div",{className:"receipt-payer"},n.a.createElement("label",{htmlFor:"payer-"+e.index},"Recebi (emos) de"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payer-"+e.index,placeholder:"",id:"payer-"+e.index,value:e.receipt.payer,onChange:function(a){return e.receipt.payer=a.target.value}}),n.a.createElement("label",{htmlFor:"payerAddress-"+e.index},"Endere\xe7o"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payerAddress-"+e.index,placeholder:"",id:"payerAddress-"+e.index,value:e.receipt.payerAddress,onChange:function(a){return e.receipt.payerAddress=a.target.value}}),n.a.createElement("label",{htmlFor:"paidValueAsText-"+e.index},"A import\xe2ncia de"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"paidValueAsText-"+e.index,placeholder:"",id:"paidValueAsText-"+e.index,value:e.receipt.paidValueAsText,onChange:function(a){return e.receipt.paidValueAsText=a.target.value}}),n.a.createElement("label",{htmlFor:"referrerTo-"+e.index},"Referente"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"referrerTo-"+e.index,placeholder:"",id:"referrerTo-"+e.index,value:e.receipt.referrerTo,onChange:function(a){return e.receipt.referrerTo=a.target.value}})),n.a.createElement("div",{className:"receipt-date"},n.a.createElement("label",{htmlFor:"date-"+e.index},"Data"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"date-"+e.index,placeholder:"",id:"date-"+e.index,value:e.date,readOnly:!0})),n.a.createElement("div",{className:"receipt-payee"},n.a.createElement("div",{className:"emitentCpf"},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"payee-"+e.index},"Emitente"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payee-"+e.index,placeholder:"",id:"payee-"+e.index,value:e.payee,readOnly:!0})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"payeeCpfOrRg-"+e.index},"CPF/RG"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payeeCpfOrRg-"+e.index,placeholder:"",id:"payeeCpfOrRg-"+e.index,value:e.payeeCpfOrRg,readOnly:!0}))),n.a.createElement("label",{htmlFor:"payeeAddress-"+e.index},"Endere\xe7o"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payeeAddress-"+e.index,placeholder:"",id:"payeeAddress-"+e.index,value:e.payeeAddress,readOnly:!0}),n.a.createElement("label",{htmlFor:"payeeSignature-"+e.index},"Assinatura"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payeeSignature-"+e.index,placeholder:"",id:"payeeSignature-"+e.index})))}))),w=Object(E.a)((function(e){return n.a.createElement("div",{className:"receipt-container"},n.a.createElement("div",{className:"receipt-header"},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"receiptNumber-"+e.index},"Numero"),n.a.createElement("input",{type:"text",name:"receiptNumber-"+e.index,placeholder:"",id:"receiptNumber-"+e.index})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"paidValue-"+e.index},"Valor"),n.a.createElement("input",{type:"text",name:"paidValue-"+e.index,placeholder:"",id:"paidValue-"+e.index,value:e.receipt.paidValue,onChange:function(a){return e.receipt.paidValue=a.target.value}}))),n.a.createElement("div",{className:"receipt-payer"},n.a.createElement("label",{htmlFor:"payer-"+e.index},"Recebi (emos) de"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payer-"+e.index,placeholder:"",id:"payer-"+e.index,value:e.receipt.payer,onChange:function(a){return e.receipt.payer=a.target.value}}),n.a.createElement("label",{htmlFor:"payerAddress-"+e.index},"Endere\xe7o"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payerAddress-"+e.index,placeholder:"",id:"payerAddress-"+e.index,value:e.receipt.payerAddress,onChange:function(a){return e.receipt.payerAddress=a.target.value}}),n.a.createElement("label",{htmlFor:"paidValueAsText-"+e.index},"A import\xe2ncia de"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"paidValueAsText-"+e.index,placeholder:"",id:"paidValueAsText-"+e.index,value:e.receipt.paidValueAsText,onChange:function(a){return e.receipt.paidValueAsText=a.target.value}}),n.a.createElement("label",{htmlFor:"referrerTo-"+e.index},"Referente"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"referrerTo-"+e.index,placeholder:"",id:"referrerTo-"+e.index,value:e.receipt.referrerTo,onChange:function(a){return e.receipt.referrerTo=a.target.value}})),n.a.createElement("div",{className:"receipt-date"},n.a.createElement("label",{htmlFor:"date-"+e.index},"Data"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"date-"+e.index,placeholder:"",id:"date-"+e.index,value:e.date,readOnly:!0})))})),j=(t(26),Object(E.a)((function(e){var a=e.receiptStore,t=e.payeeStore;return n.a.createElement("div",{className:"receipt-to-print-list"},n.a.createElement("button",{className:"button-primary no-printable",onClick:window.print},"Imprimir"),n.a.createElement("div",{className:""},n.a.createElement("h2",null,"Canhotos"),Object.keys(a.receipts).map((function(e){return n.a.createElement("div",{key:e},n.a.createElement(w,{key:e,index:e,payee:t.payee.name,payeeCpfOrRg:t.payee.cpfOrRg,payeeAddress:t.payee.address,date:t.payee.date,receipt:a.receipts[e]}))})),n.a.createElement("h2",null,"Recibos"),Object.keys(a.receipts).map((function(e){return n.a.createElement("div",{key:e},n.a.createElement(O,{key:e,index:e,payee:t.payee.name,payeeCpfOrRg:t.payee.cpfOrRg,payeeAddress:t.payee.address,date:t.payee.date,receipt:a.receipts[e]}))}))))}))),C=Object(o.a)("key"),A=Object(o.a)("lastChangeInMs"),R=function(){function e(a){Object(p.a)(this,e),Object.defineProperty(this,C,{writable:!0,value:void 0}),Object.defineProperty(this,A,{writable:!0,value:Date.now()}),Object(s.a)(this,C)[C]=a}return Object(d.a)(e,[{key:"fetchData",value:function(){return JSON.parse(localStorage.getItem(Object(s.a)(this,C)[C]))}},{key:"saveWithDelay",value:function(e){Date.now()-Object(s.a)(this,A)[A]<1e3&&(this.timerToPersist&&clearTimeout(this.timerToPersist),console.log("limpou timer")),Object(s.a)(this,A)[A]=Date.now();var a=Object(s.a)(this,C)[C];this.timerToPersist=setTimeout((function(){localStorage.setItem(a,JSON.stringify(e)),console.log("".concat(a," Saved on LocalStorage!"))}),1e3)}}]),e}();function _(){var e=window.location.hash.substr(1).split("/");return{first:e[0]||"",second:e[1]||""}}var F=Object(E.a)((function(){var e=Object(r.useState)(_().first),a=Object(c.a)(e,2),t=a[0],l=a[1],i=Object(r.useState)(_().second),p=Object(c.a)(i,2),d=p[0],s=p[1];window.onhashchange=function(){l(_().first),s(_().second)};var o=new R("receiptStore"),m=new y(o),u=new R("payeeStore"),f=new h(u);return n.a.createElement("div",{className:"rootApp"},n.a.createElement("main",null,function(){if(!t||"receipt-list"==t)return n.a.createElement(x,{receiptStore:m,payeeStore:f});if("payee-form"==t)return n.a.createElement(v,{payeeStore:f});if("receipt"==t&&d){var e=m.receipts[d];return n.a.createElement(g,{receiptId:e.id,receiptStore:m,payeeStore:f})}return"receipt"==t?n.a.createElement(g,{receiptStore:m,payeeStore:f}):"receipts-to-print"==t?n.a.createElement(j,{receiptStore:m,payeeStore:f}):"NOTFOUND"}()),n.a.createElement("footer",{className:"bottom-app-bar"},n.a.createElement("a",{href:"#receipt-list"},n.a.createElement("i",{className:"fas fa-list"})),n.a.createElement("a",{href:"#receipt"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("a",{href:"#receipts-to-print"},n.a.createElement("i",{className:"fas fa-print"})),n.a.createElement("a",{href:"#payee-form"},"\\",n.a.createElement("i",{className:"fas fa-user-cog"}))))}));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(F,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.3c4f31cf.chunk.js.map