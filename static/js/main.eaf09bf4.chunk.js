(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(8),o=n.n(c),i=n(9),u=n(2),s=n(4),l=n.n(s);var b=n(0),d=function(e){var t=e.onAddContact,n=Object(r.useState)(""),a=Object(u.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(""),s=Object(u.a)(i,2),d=s[0],j=s[1],m=l.a.generate(),h=l.a.generate(),f=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":o(r);break;case"number":j(r);break;default:return}},O=function(){o(""),j("")};return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c,d),!c&&d||c&&!d||O()},children:[Object(b.jsx)("input",{id:m,type:"text",name:"name",placeholder:"Enter name",value:c,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."}),Object(b.jsx)("input",{id:h,type:"tel",name:"number",placeholder:"Enter phone number",value:d,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"}),Object(b.jsx)("button",{type:"submit",children:"Add cotact"})]})},j=function(e){var t=e.id,n=e.name,r=e.number,a=e.onRemove;return Object(b.jsxs)("li",{children:[n,": ",r," ",Object(b.jsx)("button",{onClick:function(){return a(t)},children:"delete"})]})},m=function(e){var t=e.contacts,n=e.onRemove;return 0===t.length?null:Object(b.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.name,a=e.number;return Object(b.jsx)(j,{name:r,number:a,onRemove:function(){return n(t)}},t)}))})},h=function(e){var t=e.value,n=e.onChange;return Object(b.jsx)("input",{type:"text",name:"filter",value:t,onChange:n,placeholder:"Enter name for Search"})},f=function(){var e=function(e,t){var n=Object(r.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),a=Object(u.a)(n,2),c=a[0],o=a[1];return Object(r.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(c))}),[e,c]),[c,o]}("contacts",[]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(u.a)(c,2),s=o[0],j=o[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(d,{onAddContact:function(e,t){var r={id:l.a.generate(),name:e,number:t};n.find((function(t){return t.name===e}))?alert("".concat(e," is already in contacts")):n.find((function(e){return e.number===t}))?alert("Number ".concat(t," is already in contacts")):e&&""!==e.trim()||t&&""!==t.trim()?e&&""!==e.trim()?t&&""!==t.trim()?a((function(e){return[r].concat(Object(i.a)(e))})):alert('Field "Number" is empty'):alert('Field "Name" is empty'):alert('Fill in the fields "Name" and "Number"')}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(h,{value:s,onChange:function(e){j(e.target.value)}}),0===n.length?Object(b.jsx)("p",{children:"There are no contacts in the list"}):Object(b.jsx)(m,{contacts:function(){var e=s.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onRemove:function(e){a((function(){return n.filter((function(t){return t.id!==e}))}))}})]})};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.eaf09bf4.chunk.js.map