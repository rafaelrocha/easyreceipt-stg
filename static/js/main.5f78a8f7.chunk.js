(this.webpackJsonpeasyreceipts=this.webpackJsonpeasyreceipts||[]).push([[0],[,,,,,,,,,,function(e,a,t){},function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(7),l=t.n(i),c=(t(16),t(6)),p=(t(17),t(18),t(19),t(5)),d=t(8),s=t(3),o=t(4),u=t(1),m=Object(o.a)("receiptPersistence"),y=function(){function e(a){var t=this;Object(p.a)(this,e),this.receipts={},Object.defineProperty(this,m,{writable:!0,value:void 0}),Object(s.a)(this,m)[m]=a,this.receipts=Object(s.a)(this,m)[m].fetchData()||{},Object(u.m)(this,{receipts:u.n}),Object(u.f)((function(){console.log("---------beginreceipts----");for(var e=0,a=Object.entries(t.receipts);e<a.length;e++){var r=Object(c.a)(a[e],2),n=(r[0],r[1]);console.log(Object.assign({},n))}console.log("--------------------------"),Object(s.a)(t,m)[m].saveWithDelay(t.receipts)}))}return Object(d.a)(e,[{key:"add",value:function(e){if(!e.id)throw new Error("You must pass receipt.id");if(this.findById(e.id))throw new Error("This id is already in use");this.receipts[e.id]=e}},{key:"update",value:function(e){if(!e.id)throw new Error("You must pass receipt.id");this.receipts[e.id]=e}},{key:"findById",value:function(e){return this.receipts[e]}},{key:"findAll",value:function(){return this.receipts}},{key:"removeById",value:function(e){delete this.receipts[e]}},{key:"removeAll",value:function(){throw new Error("Not implemented")}}]),e}(),f=Object(o.a)("payeePersistence"),h=function e(a){var t=this;Object(p.a)(this,e),this.payee={},Object.defineProperty(this,f,{writable:!0,value:void 0}),Object(s.a)(this,f)[f]=a,this.payee=Object(s.a)(this,f)[f].fetchData()||{},Object(u.m)(this,{payee:u.n}),Object(u.f)((function(){console.log("---------payeestore----"),console.log(Object.assign({},t.payee)),console.log("--------------------------"),Object(s.a)(t,f)[f].saveWithDelay(t.payee)}))},E=t(2),b=Object(E.a)((function(e){var a=e.payeeStore;return n.a.createElement("div",{className:"repeatable-fields-container no-printable"},n.a.createElement("div",{className:"repeatable-fields"},n.a.createElement("label",{htmlFor:"payee"},"Emitente"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payee",placeholder:"",id:"payee",value:a.payee.name,onChange:function(e){return a.payee.name=e.target.value}}),n.a.createElement("label",{htmlFor:"payeeCpfOrRg"},"CPF/RG"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payeeCpfOrRg",placeholder:"",id:"payeeCpfOrRg",value:a.payee.cpfOrRg,onChange:function(e){return a.payee.cpfOrRg=e.target.value}}),n.a.createElement("label",{htmlFor:"payeeAddress"},"Endere\xe7o"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payeeAddress",placeholder:"",id:"payeeAddress",value:a.payee.address,onChange:function(e){return a.payee.address=e.target.value}}),n.a.createElement("label",{htmlFor:"date"},"Data"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"date",placeholder:"",id:"date",value:a.payee.date,onChange:function(e){return a.payee.date=e.target.value}})))})),v=(t(21),Object(E.a)((function(e){return n.a.createElement("div",{className:"receipt-card"},n.a.createElement("h3",{className:"receipt-card__title"},e.receipt.payer||"..."),n.a.createElement("div",{className:"receipt-card__content"},n.a.createElement("p",null,e.receipt.referrerTo||"..."),n.a.createElement("span",{className:"receipt-card__price"},"R$ ",e.receipt.paidValue||"?")),n.a.createElement("div",{className:"receipt-card__bottom"},n.a.createElement("div",{className:"receipt-card__number"},n.a.createElement("span",null,"N\xba 121212")),n.a.createElement("div",{className:"receipt-card__separator"}),n.a.createElement("div",{className:"receipt-card__action-bar"},n.a.createElement("a",{className:"receipt-card__button",href:"#receipt/"+e.index},n.a.createElement("i",{class:"fas fa-edit"})),n.a.createElement("a",{className:"receipt-card__button"},n.a.createElement("i",{class:"fas fa-print"})),n.a.createElement("a",{className:"receipt-card__button",onClick:function(){1==window.confirm("Realmente deseja remover esse recibo?")&&e.removeReceipt(e.index)}},n.a.createElement("i",{class:"fas fa-trash"})))))}))),x=(t(22),Object(E.a)((function(e){var a=e.receiptStore,t=e.payeeStore,r=e.payerNameFiltering||"";function i(e){a.removeById(e)}return n.a.createElement("div",{className:"receipts-card"},n.a.createElement("div",{className:"receipts-card-container"},Object.keys(a.receipts).map((function(e){var l=a.receipts[e];if(l.payer.includes(r))return n.a.createElement(v,{key:e,index:e,payee:t.payee.name,payeeCpfOrRg:t.payee.cpfOrRg,payeeAddress:t.payee.address,date:t.payee.date,receipt:l,removeReceipt:i})}))))}))),O=(t(10),Object(E.a)((function(e){return n.a.createElement("div",{className:"receipt-container"},n.a.createElement("div",{className:"receipt-header"},n.a.createElement("span",null,"RECIBO"),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"receiptNumber-"+e.index},"Numero"),n.a.createElement("input",{type:"text",name:"receiptNumber-"+e.index,placeholder:"",id:"receiptNumber-"+e.index})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"paidValue-"+e.index},"Valor"),n.a.createElement("input",{type:"text",name:"paidValue-"+e.index,placeholder:"",id:"paidValue-"+e.index,value:e.receipt.paidValue,onChange:function(a){return e.receipt.paidValue=a.target.value}}))),n.a.createElement("div",{className:"receipt-payer"},n.a.createElement("label",{htmlFor:"payer-"+e.index},"Recebi (emos) de"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payer-"+e.index,placeholder:"",id:"payer-"+e.index,value:e.receipt.payer,onChange:function(a){return e.receipt.payer=a.target.value}}),n.a.createElement("label",{htmlFor:"payerAddress-"+e.index},"Endere\xe7o"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payerAddress-"+e.index,placeholder:"",id:"payerAddress-"+e.index,value:e.receipt.payerAddress,onChange:function(a){return e.receipt.payerAddress=a.target.value}}),n.a.createElement("label",{htmlFor:"paidValueAsText-"+e.index},"A import\xe2ncia de"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"paidValueAsText-"+e.index,placeholder:"",id:"paidValueAsText-"+e.index,value:e.receipt.paidValueAsText,onChange:function(a){return e.receipt.paidValueAsText=a.target.value}}),n.a.createElement("label",{htmlFor:"referrerTo-"+e.index},"Referente"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"referrerTo-"+e.index,placeholder:"",id:"referrerTo-"+e.index,value:e.receipt.referrerTo,onChange:function(a){return e.receipt.referrerTo=a.target.value}})),n.a.createElement("div",{className:"receipt-date"},n.a.createElement("label",{htmlFor:"date-"+e.index},"Data"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"date-"+e.index,placeholder:"",id:"date-"+e.index,value:e.date,readOnly:!0})),n.a.createElement("div",{className:"receipt-payee"},n.a.createElement("div",{className:"emitentCpf"},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"payee-"+e.index},"Emitente"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payee-"+e.index,placeholder:"",id:"payee-"+e.index,value:e.payee,readOnly:!0})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"payeeCpfOrRg-"+e.index},"CPF/RG"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payeeCpfOrRg-"+e.index,placeholder:"",id:"payeeCpfOrRg-"+e.index,value:e.payeeCpfOrRg,readOnly:!0}))),n.a.createElement("label",{htmlFor:"payeeAddress-"+e.index},"Endere\xe7o"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payeeAddress-"+e.index,placeholder:"",id:"payeeAddress-"+e.index,value:e.payeeAddress,readOnly:!0}),n.a.createElement("label",{htmlFor:"payeeSignature-"+e.index},"Assinatura"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payeeSignature-"+e.index,placeholder:"",id:"payeeSignature-"+e.index})))}))),g=Object(E.a)((function(e){return n.a.createElement("div",{className:"receipt-container"},n.a.createElement("div",{className:"receipt-header"},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"receiptNumber-"+e.index},"Numero"),n.a.createElement("input",{type:"text",name:"receiptNumber-"+e.index,placeholder:"",id:"receiptNumber-"+e.index})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"paidValue-"+e.index},"Valor"),n.a.createElement("input",{type:"text",name:"paidValue-"+e.index,placeholder:"",id:"paidValue-"+e.index,value:e.receipt.paidValue,onChange:function(a){return e.receipt.paidValue=a.target.value}}))),n.a.createElement("div",{className:"receipt-payer"},n.a.createElement("label",{htmlFor:"payer-"+e.index},"Recebi (emos) de"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payer-"+e.index,placeholder:"",id:"payer-"+e.index,value:e.receipt.payer,onChange:function(a){return e.receipt.payer=a.target.value}}),n.a.createElement("label",{htmlFor:"payerAddress-"+e.index},"Endere\xe7o"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"payerAddress-"+e.index,placeholder:"",id:"payerAddress-"+e.index,value:e.receipt.payerAddress,onChange:function(a){return e.receipt.payerAddress=a.target.value}}),n.a.createElement("label",{htmlFor:"paidValueAsText-"+e.index},"A import\xe2ncia de"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"paidValueAsText-"+e.index,placeholder:"",id:"paidValueAsText-"+e.index,value:e.receipt.paidValueAsText,onChange:function(a){return e.receipt.paidValueAsText=a.target.value}}),n.a.createElement("label",{htmlFor:"referrerTo-"+e.index},"Referente"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"referrerTo-"+e.index,placeholder:"",id:"referrerTo-"+e.index,value:e.receipt.referrerTo,onChange:function(a){return e.receipt.referrerTo=a.target.value}})),n.a.createElement("div",{className:"receipt-date"},n.a.createElement("label",{htmlFor:"date-"+e.index},"Data"),n.a.createElement("input",{className:"u-full-width",type:"text",name:"date-"+e.index,placeholder:"",id:"date-"+e.index,value:e.date,readOnly:!0})))})),N=(t(23),Object(E.a)((function(e){var a=e.receiptStore,t=e.payeeStore;return n.a.createElement("div",{className:"receipt-to-print-list"},n.a.createElement("button",{className:"button-primary no-printable",onClick:window.print},"Imprimir"),n.a.createElement("div",{className:""},n.a.createElement("h2",null,"Canhotos"),Object.keys(a.receipts).map((function(e){return n.a.createElement("div",{key:e},n.a.createElement(g,{key:e,index:e,payee:t.payee.name,payeeCpfOrRg:t.payee.cpfOrRg,payeeAddress:t.payee.address,date:t.payee.date,receipt:a.receipts[e]}))})),n.a.createElement("h2",null,"Recibos"),Object.keys(a.receipts).map((function(e){return n.a.createElement("div",{key:e},n.a.createElement(O,{key:e,index:e,payee:t.payee.name,payeeCpfOrRg:t.payee.cpfOrRg,payeeAddress:t.payee.address,date:t.payee.date,receipt:a.receipts[e]}))}))))}))),j=Object(o.a)("key"),w=Object(o.a)("lastChangeInMs"),A=function(){function e(a){Object(p.a)(this,e),Object.defineProperty(this,j,{writable:!0,value:void 0}),Object.defineProperty(this,w,{writable:!0,value:Date.now()}),Object(s.a)(this,j)[j]=a}return Object(d.a)(e,[{key:"fetchData",value:function(){return JSON.parse(localStorage.getItem(Object(s.a)(this,j)[j]))}},{key:"saveWithDelay",value:function(e){Date.now()-Object(s.a)(this,w)[w]<1e3&&(this.timerToPersist&&clearTimeout(this.timerToPersist),console.log("limpou timer")),Object(s.a)(this,w)[w]=Date.now();var a=Object(s.a)(this,j)[j];this.timerToPersist=setTimeout((function(){localStorage.setItem(a,JSON.stringify(e)),console.log("".concat(a," Saved on LocalStorage!"))}),1e3)}}]),e}();function C(){var e=window.location.hash.substr(1).split("/");return{first:e[0]||"",second:e[1]||""}}var R=Object(E.a)((function(){var e=Object(r.useState)(C().first),a=Object(c.a)(e,2),t=a[0],i=a[1],l=Object(r.useState)(C().second),p=Object(c.a)(l,2),d=p[0],s=p[1];window.onhashchange=function(){i(C().first),s(C().second)};var o=new A("receiptStore"),u=new y(o),m=new A("payeeStore"),f=new h(m),E=Object(r.useState)(""),v=Object(c.a)(E,2),g=v[0],j=v[1];return n.a.createElement("div",{className:"rootApp"},n.a.createElement("header",{className:"top-app-bar"},n.a.createElement("div",{className:"top-app-bar__left-part"},"Recibos Facil"),n.a.createElement("div",{className:"top-app-bar__right-part"},n.a.createElement("input",{className:"u-full-width",type:"text",name:"search",placeholder:"Pesquise por nome",id:"search",value:g,onChange:function(e){return j(e.target.value)}}))),n.a.createElement("main",null,function(){if(!t||"receipt-list"==t)return n.a.createElement(x,{payerNameFiltering:g,receiptStore:u,payeeStore:f});if("payee-form"==t)return n.a.createElement(b,{payeeStore:f});if("receipt"==t&&d){var e=u.receipts[d];return n.a.createElement(O,{key:e.id,index:e.id,payee:f.payee.name,payeeCpfOrRg:f.payee.cpfOrRg,payeeAddress:f.payee.address,date:f.payee.date,receipt:e})}if("receipt"==t){var a=Date.now();u.add({id:a,paidValue:"",payer:"",payerAddress:"",referrerTo:""});var r=u.receipts[a];return n.a.createElement(O,{key:r.id,index:r.id,payee:f.payee.name,payeeCpfOrRg:f.payee.cpfOrRg,payeeAddress:f.payee.address,date:f.payee.date,receipt:r})}return"receipts-to-print"==t?n.a.createElement(N,{receiptStore:u,payeeStore:f}):"NOTFOUND"}()),n.a.createElement("footer",{className:"bottom-app-bar"},n.a.createElement("a",{className:"button  no-printable",href:"#receipt-list"},"Recibos"),n.a.createElement("a",{className:"button  no-printable",href:"#receipts-to-print"},"Imprimir"),n.a.createElement("a",{className:"button  no-printable",href:"#receipt"},"Novo recibo"),n.a.createElement("a",{className:"button  no-printable",href:"#payee-form"},"Meus Dados")))}));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(R,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.5f78a8f7.chunk.js.map