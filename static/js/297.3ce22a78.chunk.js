"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[297],{1297:function(e,n,a){a.r(n),a.d(n,{default:function(){return A}});var t="ContactsView_contactscVies__pEVSb",s="ContactsView_item__Aff2J",r="ContactsView_contactsTitle__+M+J9",c=a(1413),i=a(885),o=a(2791),l=a(1134),m=a(6429),d=a.n(m),u=a(4317),h=a(4386),x=a(9782),b=a(5264),j={nameRegex:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,phoneRegExp:/^((\\+[1-9]{1,4}[ \\-]*)|[(\+\(\))]|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/},_=a(3027),p=a(3360),f="ContactForm_contactForm__FkOKX",N=a(184),g=function(){(0,x.wY)().data;var e=(0,x.Lr)(),n=(0,i.Z)(e,2),a=n[0],t=n[1],s=t.isLoading,r=t.isSuccess,m=(0,o.useState)({name:"",number:""}),g=(0,i.Z)(m,2),Z=g[0],v=(g[1],h.Ry().shape({name:h.Z_().required("Name is required").min(6,"Name must be at least 6 characters").max(20,"Name must not exceed 20 characters").matches(j.nameRegex,"Name is not valid its should contain only alphabet letters"),number:h.Z_().matches(j.phoneRegExp,"Phone number is not valid its should contain only numbers")})),C=(0,l.cI)({mode:"onTouched",reValidateMode:"onChange",defaultValues:Z,resolver:(0,u.X)(v)}),y=C.register,L=C.resetField,w=C.handleSubmit,k=C.formState.errors;return(0,N.jsx)("div",{className:f,children:(0,N.jsxs)(_.Z,{onSubmit:w((function(e,n){n.preventDefault();var t=e.name,s=e.number;n.preventDefault();var c={id:d().generate(),name:t,number:s};r&&b.Notify.success("Contact ".concat(e.name," added successfully")),a(c),L("name"),L("number"),console.log(e)}),(function(e){console.log("ERROR:::",e)})),children:[(0,N.jsxs)(_.Z.Group,{className:"mb-3",controlId:"formBasicText",children:[(0,N.jsx)(_.Z.Label,{children:"Contact name"}),(0,N.jsx)(_.Z.Control,(0,c.Z)({type:"text",placeholder:"Enter contact name"},y("name"))),k.name&&(0,N.jsx)(_.Z.Text,{className:"text-danger",children:k.name.message})]}),(0,N.jsxs)(_.Z.Group,{className:"mb-3",controlId:"formBasicPhoneNumber",children:[(0,N.jsx)(_.Z.Label,{children:"Phone number"}),(0,N.jsx)(_.Z.Control,(0,c.Z)({type:"text",placeholder:"Enter contact phohe number"},y("number"))),k.number&&(0,N.jsx)(_.Z.Text,{className:"text-danger",children:k.number.message})]}),(0,N.jsx)(p.Z,{variant:"primary",type:"submit",disabled:k.number||k.name,children:s?(0,N.jsx)(N.Fragment,{children:"Adding..."}):(0,N.jsx)(N.Fragment,{children:"Add contact"})})]})})},Z="Container_container__8322i",v=a(1694),C=a.n(v),y=function(e){var n=e.className,a=e.children,t=C()(Z,n);return(0,N.jsx)("div",{className:t,children:a})},L={listItem:"ContactsList_listItem__Elj+5",info:"ContactsList_info__hjGaA"},w=(a(5048),a(1398)),k=function(){var e=(0,x.wY)(),n=e.data,a=e.isLoading,t=(0,x.Nt)(),s=(0,i.Z)(t,2),r=s[0],c=s[1].isLoading,o=n,l=(0,N.jsx)(w.Z,{className:L.contactsList,children:n&&o.map((function(e){var n=e.name,a=e.id,t=e.number;return(0,N.jsxs)(w.Z.Item,{className:L.listItem,id:a,children:[(0,N.jsxs)("div",{className:L.info,children:[(0,N.jsxs)("span",{className:L.contactName,children:[n,": "]}),(0,N.jsx)("span",{className:L.phoneNumber,children:t})]}),(0,N.jsx)(p.Z,{variant:"primary",type:"button",onClick:function(e){return function(e){r(e.currentTarget.parentNode.id),c||(e.currentTarget.innerHTML="Deleting ...")}(e)},children:"Delete contact"})]},a)}))});return a?(0,N.jsx)("div",{children:"loading..."}):0!==n.length?l:"You have no contacts"},A=function(){return(0,N.jsx)(y,{children:(0,N.jsxs)("ul",{className:t,children:[(0,N.jsxs)("li",{className:s,children:[(0,N.jsx)("h4",{className:r,children:"Add contacts info"}),(0,N.jsx)(g,{})]}),(0,N.jsxs)("li",{className:s,children:[(0,N.jsx)("h4",{className:r,children:"Contacts"}),(0,N.jsx)(k,{})]})]})})}}}]);
//# sourceMappingURL=297.3ce22a78.chunk.js.map