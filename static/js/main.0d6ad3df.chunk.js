(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{79:function(e,t,a){e.exports=a(91)},84:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){e.exports=a.p+"static/media/parallax.3e6de7d1.jpg"},91:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),l=(a(84),a(13)),c=a(56),d=a(23),s=a(35),m=a(126),p=a(128),u=a(130),f=a(132),h=a(137),g=a(131),v=a(138),E=a(95),y=a(10),b=a(143),x=a(49),w=a.n(x),C=a(50),k=a.n(C),N=a(144),j=a(145),S=a(135),I=a(141),D=a(136),P=a(142),z=Object(m.a)({root:{margin:15,boxShadow:"0px 18px 37px 0px rgba(0, 0, 0, 0.07)",display:"inline-block",transition:".2s all",textAlign:"left",zIndex:10,"&:hover":{boxShadow:"0px 25px 45px 0px rgba(0, 0, 0, 0.17)",transform:"translateY(-5px)"}},media:{height:140}}),O={normal:{top:"calc(50vh)",left:"calc(50vw)",width:[280,280],scale:[.7,1],height:"auto",translateY:["20%","0%"],translateX:["0%","0%"],zIndex:20,transition:{duration:.3,delay:0,times:[0,.7]}},expanded:{scale:[.3,1],top:"42vh",left:"50vw",zIndex:50,translateY:["-60%","-50%"],translateX:["-50%","-50%"],width:[550,550],height:"auto",transition:{duration:.3,delay:0,times:[0,.7]}}},A={hidden:{top:"0",left:"0",height:"0vh",width:"0vh",zIndex:9,overflow:"hidden",content:"",background:"rgba(0,0,0,.7)",transition:{duration:0}},show:{zIndex:49,height:"100vh",width:"100vw",transition:{duration:0}}},L=function(e){var t=e.sections,a=e.handleEditItem,i=e.handleDeleteItem,r=e.item,o=e.demoCard,c=e.expandedProp,m=e.handleAddItem,x=e.handleCloseCard,C=z(),L=n.useState(r),U=Object(l.a)(L,2),B=U[0],q=U[1],T=n.useState(!1),Y=Object(l.a)(T,2),F=Y[0],G=Y[1],R=function(e){var t=e.target,a=t.value,n=t.name;console.log(a),q(Object(s.a)({},B,Object(d.a)({},n,a)))},X=function(e){q(Object(s.a)({},B,Object(d.a)({},e.target.name,e.target.checked)))};return n.createElement("div",{className:o?"":"card-placeholder"},n.createElement("form",{onSubmit:function(e){e.preventDefault(),c?m(B):a(B),c&&q({}),c?x():G(!1)}},n.createElement(y.a.div,{variants:A,initial:"hidden",style:{position:"fixed"},animate:F||c?"show":"hidden",onClick:function(){return c?x:G(!1)}}),n.createElement(y.a.div,{variants:O,className:F||c?"cardexpander expanded":"cardexpander",initial:"normal",animate:F||c?"expanded":"normal",style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.createElement(p.a,{className:C.root,onClick:function(e){F||c?console.log(" "):G(!0)}},n.createElement(u.a,null,n.createElement(g.a,{className:C.media,image:B.imgUrl?B.imgUrl:"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}),n.createElement(f.a,null,n.createElement("div",{className:"card-title"},F||c?n.createElement("h5",{style:{margin:"0px 0px 5px 0px"}},n.createElement(b.a,{value:B.itemName,name:"itemName",onChange:R,label:"Name",variant:"standard"}),n.createElement("small",null,n.createElement(b.a,{value:B.itemPrice?B.itemPrice:"",name:"itemPrice",onChange:R,label:"Price",variant:"standard"}))):n.createElement("h5",{style:{margin:"0px 0px 5px 0px"}},B.itemName," ",n.createElement("small",null,B.itemPrice?"$":"",B.itemPrice))),n.createElement(E.a,{variant:"body2",color:"textSecondary",component:"div",style:{paddingTop:3,minHeight:113}},n.createElement("span",null,F||c?n.createElement(b.a,{value:B.itemDescription,name:"itemDescription",multiline:!0,rows:4,onChange:R,label:"Description",variant:"standard",style:{marginBottom:12}}):B.itemDescription,F||c?n.createElement(S.a,null,n.createElement(N.a,{id:"demo-simple-select-label"},"Section"),n.createElement(I.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:B.section,onChange:R,name:"menu section",variant:"standard"},t.map((function(e,t){return n.createElement(j.a,{value:e.name,key:e.id},e.name)})))):""),F||c?n.createElement("span",{style:{display:"block",marginTop:10}},n.createElement(D.a,{control:n.createElement(P.a,{checked:B.gf,onChange:X,name:"gf",color:"primary"}),label:"Gluten free"}),n.createElement(D.a,{control:n.createElement(P.a,{checked:B.v,onChange:X,name:"v",color:"primary"}),label:"Vegan"}),n.createElement(D.a,{control:n.createElement(P.a,{checked:B.featured,onChange:X,name:"featured",color:"primary"}),label:"Featured"})):n.createElement("span",{style:{marginBottom:0,marginTop:15}},B.gf?n.createElement("span",{className:"gluten-free"},"GF"):"",B.v?n.createElement("span",{className:"vegan"},"V"):"",B.featured?n.createElement("span",{className:"featured"},"Featured"):"")))),n.createElement(h.a,null,F||c?n.createElement("span",{style:{margin:"10px 0 0 0",height:48,alignItems:"center",display:"flex",justifyContent:"space-between",width:"100%"}},n.createElement(v.a,{type:"submit",variant:"extended",color:"primary"},n.createElement("span",{style:{fontSize:"1.1em"}},"Confirm",n.createElement("span",{className:"hidden-sm"}," edits"))),n.createElement("a",{style:{display:"inline-flex",marginRight:0,cursor:"pointer",marginLeft:20},onClick:function(e){e.preventDefault(),c&&q({}),c?x():G(!1)}},n.createElement(w.a,null),n.createElement("span",null,"Cancel")),c?"":n.createElement("a",{style:{display:"inline-flex",cursor:"pointer"},onClick:function(e){e.preventDefault(),G(!1),i(r)}},n.createElement(k.a,null),n.createElement("span",null,"Delete",n.createElement("span",{className:"hidden-sm"}," Item")))):"")))))},U=(Object(m.a)({root:{margin:15,boxShadow:"0px 18px 37px 0px rgba(0, 0, 0, 0.07)",display:"inline-block",transition:".2s all",textAlign:"left",zIndex:10,"&:hover":{boxShadow:"0px 25px 45px 0px rgba(0, 0, 0, 0.17)",transform:"translateY(-5px)"}},media:{height:140}}),function(e){var t=e.sections,a=e.handleEditSection,i=e.handleDeleteSection,r=e.section,o=e.expandedProp,c=e.handleAddSection,m=e.handleCloseCard,p=n.useState(r),u=Object(l.a)(p,2),f=u[0],h=u[1],g=n.useState(!1),E=Object(l.a)(g,2),x=E[0],C=E[1];n.useEffect((function(){h(r),C(""!==r.name)}),[r]);var D=function(e){var t=e.target,a=t.value,n=t.name;console.log(a),h(Object(s.a)({},f,Object(d.a)({},n,a)))};return n.createElement("div",null,n.createElement("form",{onSubmit:function(e){e.preventDefault(),x?a(f):c(f),m()},className:"section-form"},n.createElement(y.a.div,{variants:{hidden:{top:"0",left:"0",height:"0vh",width:"0vh",zIndex:9,overflow:"hidden",content:"",background:"rgba(0,0,0,.7)",transition:{duration:0}},show:{zIndex:49,height:"100vh",width:"100vw",transition:{duration:0}}},initial:"hidden",style:{position:"fixed"},animate:o?"show":"hidden",onClick:o?m:null}),n.createElement(y.a.div,{className:"form",variants:{hidden:{top:"calc(50vh)",left:"calc(50vw)",scale:[.7,1],translateY:["20%","0%"],translateX:["0%","0%"],zIndex:20,paddingLeft:30,transition:{duration:.3,delay:0,times:[0,.7]}},show:{scale:[.3,1],top:"42vh",left:"50vw",zIndex:50,translateY:["-60%","-50%"],translateX:["-50%","-50%"],transition:{duration:.3,delay:0,times:[0,.7]}}},animate:o?"show":"hidden",style:{position:"fixed",background:"#fff"}},n.createElement("h5",{style:{textAlign:"left",marginBottom:10}},"Add a section"),n.createElement(y.a.div,{className:"section-name"},n.createElement(b.a,{value:f.name,name:"name",onChange:D,label:"Section name",variant:"standard"})),n.createElement(y.a.div,{className:"section-position"},n.createElement(S.a,null,n.createElement(N.a,{id:"demo-simple-select-label"},"Position"),n.createElement(I.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:f.order,onChange:D,name:"order",variant:"standard"},t.map((function(e,t){return n.createElement(j.a,{value:t+1,key:t},t+1)})),x?"":n.createElement(j.a,{value:t.length+1,key:t.length+1},t.length+1)))),n.createElement(y.a.div,{style:{justifyContent:"space-between",display:"flex",width:"100%",position:"absolute",bottom:-80,left:"50%",transform:"translateX(-50%)"}},n.createElement(v.a,{type:"submit",variant:"extended",color:"primary"},n.createElement("span",{style:{marginLeft:7,fontSize:"1.1em"}},x?"Edit":"Add"," section")),n.createElement("a",{style:{display:"inline-flex",marginRight:0,cursor:"pointer",marginLeft:20},onClick:function(e){e.preventDefault(),m()}},n.createElement(w.a,null),n.createElement("span",null,"Cancel")),x?n.createElement("a",{style:{display:"inline-flex",cursor:"pointer"},onClick:function(e){e.preventDefault(),m(),i(f)}},n.createElement(k.a,null),n.createElement("span",null,"Delete",n.createElement("span",{className:"hidden-sm"}," Item"))):""))))}),B=a(55),q=a.n(B),T=a(67),Y=a.n(T),F=a(66),G=a(139),R=a(140),X=(a(89),Object(G.a)({palette:{primary:{light:"#60D7A4",main:"#3cc68a",dark:"#029b59",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}})),W=[{name:"Appetizers",order:1,id:1},{name:"Entrees",order:2,id:2},{name:"Desserts",order:3,id:3}],_=[{itemName:"Pizza",section:"Entrees",itemPrice:25.95,itemDescription:"adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://i.pinimg.com/474x/81/24/2d/81242d0c48bd9a6b1cf660ce3a79f01f--national-cheese-pizza-day-italian-dinners.jpg",id:1,gf:!0,v:!0,featured:!1},{itemName:"Burger",section:"Entrees",itemPrice:15.95,itemDescription:" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://www.aspicyperspective.com/wp-content/uploads/2019/05/spicy-cowboy-bacon-burgers-recipe-31-256x256.jpg",id:2,gf:!0,v:!0,featured:!0},{itemName:"Fries",section:"Appetizers",itemPrice:9.99,itemDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://s.hdnux.com/photos/44/75/06/9687479/3/rawImage.jpg",id:3,gf:!0,v:!1,featured:!1},{itemName:"Sweet Potatoe Fries",section:"Appetizers",itemPrice:11.95,itemDescription:"Lorem ipsum dolor sit amet, c aliqua.",imgUrl:"https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/the-perfect-sweet-potato-fries.jpg",id:4,gf:!0,v:!1,featured:!1},{itemName:"Soup",section:"Appetizers",itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet, consectetueiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://www.aspicyperspective.com/wp-content/uploads/2018/01/Skinny-Creamy-Chicken-Broccoli-Soup-100-256x256.jpg",id:5,gf:!1,v:!0,featured:!0},{itemName:"Panini",section:"Entrees",itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet,  ut labore et dolore magna aliqua.",imgUrl:"https://photos.bigoven.com/recipe/hero/pepporoni-panini-sandwich.jpg?h=300&w=300",id:6,gf:!0,v:!1,featured:!1},{itemName:"Cake",section:"Desserts",itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://saraleedesserts.com/wp-content/uploads/2017/10/Nutella-Filled-Pound-Cake-256x256.jpg",id:7,gf:!0,v:!0,featured:!0},{itemName:"Pasta",section:"Entrees",itemPrice:15.95,itemDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgUrl:"https://ohsheglows.com/gs_images/2020/05/IMG_5643-256x256.jpg",id:8,gf:!1,v:!1,featured:!1}],H=function(e,t){switch(t.type){case"add":var a=e.sort((function(e,t){return e.id-t.id})),n=a[a.length-1].id+1;return t.item.id=n,[].concat(Object(c.a)(e),[t.item]);case"remove":return e.filter((function(e){return e.id!==t.item.id}));case"update":return e.map((function(e){return e.id===t.item.id?t.item:e}));default:return e}},J=function(e,t){switch(t.type){case"add":return t.section.id=e[e.length-1].id+1,e=e.map((function(e){return e.order=e.order>=t.section.order?e.order+1:e.order,e})),(e=[].concat(Object(c.a)(e),[t.section])).sort((function(e,t){return e.order-t.order}));case"remove":return(e=(e=e.filter((function(e){return e.order!==t.section.order}))).map((function(e){return e.order=t.section.order<=e.order?e.order-1:e.order,e}))).sort((function(e,t){return e.order-t.order}));case"update":var a=0;return e.map((function(e){e.id===t.section.id&&(a=e.order)})),(e=e.map((function(e){return e.order>t.section.order?e.order<a&&(e.order=e.order+1):e.order<t.section.order?e.order>a&&(e.order-=1):e.order===t.section.order&&(e.order>a?e.order-=1:e.order+=1),e.id===t.section.id&&(e=t.section),e}))).sort((function(e,t){return e.order-t.order}));default:return e}},M=Object(m.a)({root:{margin:10,paddingLeft:20,paddingRight:30,background:"linear-gradient(45deg, #1db675 30%, #60d7a4 90%)",textTransform:"none",transition:".2s all",fontWeight:400,"&:hover":{transform:"translateY(-6px)"}}});var V=function(){var e=i.a.useReducer(H,_),t=Object(l.a)(e,2),n=t[0],r=t[1],o=i.a.useState(!1),c=Object(l.a)(o,2),d=c[0],s=c[1],m=i.a.useState(!1),p=Object(l.a)(m,2),u=p[0],f=p[1],h=i.a.useState({name:"",order:0,id:0}),g=Object(l.a)(h,2),E=g[0],b=g[1],x=i.a.useReducer(J,W),w=Object(l.a)(x,2),C=w[0],k=w[1],N=M(),j={hidden:{opacity:0,scale:.2},shown:{opacity:1,scale:1,transition:{duration:.3,when:"beforeChildren",staggerChildren:.15}}},S={hidden:{opacity:0,y:50,color:"#ffffff"},shown:{opacity:1,y:0,color:"#ffffff",transition:{duration:.5,when:"beforeChildren",staggerChildren:.2}}};return i.a.createElement("div",{className:"App"},i.a.createElement(R.a,{theme:X},i.a.createElement(F.Parallax,{blur:0,bgImage:a(90),bgImageAlt:"the cat",strength:400},i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:550}},i.a.createElement("div",{className:"headerBG"}),i.a.createElement(y.a.div,{variants:S,initial:"hidden",animate:"shown",className:"headerTitle"},i.a.createElement(y.a.h1,{className:"title",variants:S},"Welcome to your menu"),i.a.createElement(y.a.h6,{className:"title",variants:S},"Get started with one of the buttons below or click on an existing menu item to edit it."),i.a.createElement(y.a.div,{variants:S},i.a.createElement(v.a,{className:N.root,variant:"extended",color:"primary",onClick:function(){s(!0),f(!1)}},i.a.createElement(q.a,null),i.a.createElement("span",{style:{marginLeft:7,fontSize:"1.1em"}},"Add menu item")),i.a.createElement(v.a,{className:N.root,variant:"extended",color:"primary",onClick:function(){b({name:"",order:1,id:0}),f(!0),s(!1)}},i.a.createElement(q.a,null),i.a.createElement("span",{style:{marginLeft:7,fontSize:"1.1em"}},"Add menu section")))))),i.a.createElement("div",{style:d?{display:"block"}:{display:"none"}},i.a.createElement(L,{item:{},sections:C,expandedProp:d,handleAddItem:function(e){r({type:"add",item:e})},handleCloseCard:function(){s(!1)}})),i.a.createElement("div",{style:u?{display:"block"}:{display:"none"}},i.a.createElement(U,{section:E,sections:C,expandedProp:u,handleAddSection:function(e){k({type:"add",section:e})},handleEditSection:function(e){k({type:"update",section:e})},handleDeleteSection:function(e){k({type:"remove",section:e})},handleCloseCard:function(){f(!1),console.log(u)}})),i.a.createElement(y.a.div,{className:"grid-container",animate:"shown",initial:"hidden",variants:j},function(e){return C.sort((function(e,t){return e.order-t.order})).map((function(t,a){return i.a.createElement(y.a.div,{key:t.id,variants:j},i.a.createElement("h2",{style:{position:"relative",textAlign:"left",marginLeft:15,marginBottom:5}},t.name," ",i.a.createElement("a",{className:"edit-section-link",onClick:function(){b(t),f(!0)}},i.a.createElement(Y.a,null)),i.a.createElement("span",{className:"section-underline"})),i.a.createElement("div",{className:"grid"},e.map((function(e,a){if(e.section==t.name)return i.a.createElement(y.a.div,{key:e.id,style:{display:"inline-flex"},variants:j,className:"app-card-container"},i.a.createElement(L,{item:e,sections:C,handleDeleteItem:function(e){r({type:"remove",item:e})},handleEditItem:function(e){r({type:"update",item:e})},handleAddItem:function(){},demoCard:!1}))}))))}))}(n))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[79,1,2]]]);
//# sourceMappingURL=main.0d6ad3df.chunk.js.map