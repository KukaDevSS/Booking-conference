"use strict";(self["webpackChunkconference_booking"]=self["webpackChunkconference_booking"]||[]).push([[621],{5621:function(e,o,t){t.r(o),t.d(o,{default:function(){return S}});var s=t(3396),r=t(7139);const a=e=>((0,s.dD)("data-v-5b2d72f4"),e=e(),(0,s.Cn)(),e),l={class:"container bg-white mt-4"},i=a((()=>(0,s._)("button",{class:"btn text-white",style:{"background-color":"#0d4c92"}},[(0,s._)("i",{class:"bi bi-plus-circle bg-transparent text-white me-1"}),(0,s.Uk)("ສ້າງຫ້ອງ")],-1))),n={class:"text-center mt-4 w-100",style:{border:"1px solid gainsboro"}},c=a((()=>(0,s._)("thead",{class:"",style:{border:"1px solid gainsboro"}},[(0,s._)("tr",{class:"",style:{border:"1px solid gainsboro"}},[(0,s._)("th",{style:{border:"1px solid gainsboro"},class:"py-2 px-2"},"ລຳດັບ"),(0,s._)("th",{style:{border:"1px solid gainsboro"},class:""},"ຮູບ"),(0,s._)("th",{style:{border:"1px solid gainsboro"},class:""},"ຊື່ຫ້ອງ"),(0,s._)("th",{style:{border:"1px solid gainsboro"},class:""},"ສະຖານທີ່"),(0,s._)("th",{style:{border:"1px solid gainsboro"},class:""},"ລາຍລະອຽດ"),(0,s._)("th",{style:{border:"1px solid gainsboro"},class:""},"ສະຖານະ"),(0,s._)("th",{style:{border:"1px solid gainsboro"},class:""},"ແກ້ໄຂ")])],-1))),d={style:{border:"1px solid gainsboro"},class:""},g={style:{border:"1px solid gainsboro"},class:""},u=["src"],b={style:{border:"1px solid gainsboro"},class:""},m={style:{border:"1px solid gainsboro"},class:""},p={class:"",style:{width:"300px",border:"1px solid gainsboro"}},h={class:"",style:{width:"75px",height:"150px",border:"1px solid gainsboro"}},_={class:"toggle-switch bg-light"},w=["data-room-number","onChange","checked"],x=a((()=>(0,s._)("span",{class:"slider"},null,-1))),y={style:{border:"1px solid gainsboro"},class:""},P={class:"dropdown d-flex align-items-center ms-1",style:{"padding-top":"0px",height:"130px"}},f=a((()=>(0,s._)("button",{class:"btn btn-outline-dark dropdown-toggle",type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,s._)("i",{class:"bi bi-three-dots-vertical"})],-1))),k={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},C=a((()=>(0,s._)("li",null,[(0,s._)("a",{class:"dropdown-item"},[(0,s._)("i",{class:"bi bi-pencil-fill text-warning"}),(0,s.Uk)(" ແກ້ໄຂ")])],-1))),v=["onClick"],N=a((()=>(0,s._)("i",{class:"bi bi-trash-fill text-danger"},null,-1))),$={class:"mt-4"},z={"aria-label":"Page navigation"},B={class:"pagination justify-content-center"},D=a((()=>(0,s._)("span",{"aria-hidden":"true"},"«",-1))),R=[D],E=["onClick"],I=a((()=>(0,s._)("span",{"aria-hidden":"true"},"»",-1))),O=[I];function T(e,o,t,a,D,I){const T=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(T,{to:"/add-room"},{default:(0,s.w5)((()=>[i])),_:1}),(0,s._)("table",n,[c,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(I.displayedBookAll,((e,o)=>((0,s.wg)(),(0,s.iD)("tr",{key:e.roomNumber},[(0,s._)("td",d,(0,r.zw)((D.currentPage-1)*D.rowsPerPage+o+1),1),(0,s._)("td",g,[(0,s._)("img",{src:I.getCompleteImageUrl(e.image),alt:"",style:{width:"160px",height:"100px"}},null,8,u)]),(0,s._)("td",b,(0,r.zw)(e.title_room),1),(0,s._)("td",m,(0,r.zw)(e.address),1),(0,s._)("td",p,(0,r.zw)(e.description),1),(0,s._)("td",h,[(0,s._)("label",_,[(0,s._)("input",{type:"checkbox",class:"room-toggle form-check-input form-check-lg","data-room-number":e.roomNumber,onChange:o=>I.toggleRoom(e.roomNumber),checked:"Open"===e.status},null,40,w),x])]),(0,s._)("td",y,[(0,s._)("div",P,[f,(0,s._)("ul",k,[(0,s.Wm)(T,{to:{name:"updateroom",params:{id:e._id,roomNumber:e.roomNumber}}},{default:(0,s.w5)((()=>[C])),_:2},1032,["to"]),(0,s._)("button",{onClick:o=>I.deleteRoom(e.roomNumber),class:"dropdown-item",type:"button"},[N,(0,s.Uk)(" ລຶບ ")],8,v)])])])])))),128))])]),(0,s._)("div",$,[(0,s._)("nav",z,[(0,s._)("ul",B,[(0,s._)("li",{class:(0,r.C_)(["page-item",{disabled:1===D.currentPage}])},[(0,s._)("button",{class:"page-link",onClick:o[0]||(o[0]=(...e)=>I.previousPage&&I.previousPage(...e)),"aria-label":"Previous"},R)],2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(I.totalPages,(e=>((0,s.wg)(),(0,s.iD)("li",{class:(0,r.C_)(["page-item",{active:D.currentPage===e}]),key:e},[(0,s._)("button",{style:{},class:"page-link",onClick:o=>I.goToPage(e)},(0,r.zw)(e),9,E)],2)))),128)),(0,s._)("li",{class:(0,r.C_)(["page-item",{disabled:D.currentPage===I.totalPages}])},[(0,s._)("button",{class:"page-link",onClick:o[1]||(o[1]=(...e)=>I.nextPage&&I.nextPage(...e)),"aria-label":"Next"},O)],2)])])])])}var U=t(9674),M=t(2492),j=t.n(M),A={data(){return{rooms:[],responseMessage:"",currentPage:1,rowsPerPage:3}},computed:{displayedBookAll(){const e=(this.currentPage-1)*this.rowsPerPage,o=e+this.rowsPerPage;return this.rooms.slice(e,o)},totalPages(){return Math.ceil(this.rooms.length/this.rowsPerPage)}},methods:{previousPage(){this.currentPage>1&&this.currentPage--},nextPage(){this.currentPage<this.totalPages&&this.currentPage++},goToPage(e){e>=1&&e<=this.totalPages&&(this.currentPage=e)},getCompleteImageUrl(e){return`${U.z}${e}`},async fetchRooms(){try{const e=await fetch(`${U.z}/rooms`),o=await e.json();this.rooms=o.map((e=>({...e,status:this.isOpen(e.roomNumber)?"Open":"Closed"})))}catch(e){console.error("Error:",e)}},async toggleRoom(e){const o=this.isOpen(e),t=o?"0":"1";try{const o=await fetch(`${U.z}/rooms/${t}/${e}`,{method:"PUT"}),s=await o.json();this.responseMessage=s.message;const r=this.rooms.findIndex((o=>o.roomNumber===e));-1!==r&&(this.rooms[r].status="1"===t?"Open":"Closed"),localStorage.setItem(`room_${e}`,t)}catch(s){console.error("Error:",s)}},isOpen(e){return"1"===localStorage.getItem(`room_${e}`)},async deleteRoom(e){const o=await j().fire({title:"ເຈົ້າຕ້ອງການທີ່ຈະລຶບ?",icon:"warning",showCancelButton:!0,confirmButtonText:"ຕົກລົງ",cancelButtonText:"ຍົກເລີກ",reverseButtons:!0});if(o.isConfirmed)try{const o=await fetch(`${U.z}/rooms/delete/${e}`,{method:"DELETE"});200===o.status?(this.rooms=this.rooms.filter((o=>o.roomNumber!==e)),j().fire("Room deleted successfully","","success")):j().fire("An error occurred while deleting the room","","error")}catch(t){console.error("Error:",t)}}},created(){this.fetchRooms()}},H=t(89);const K=(0,H.Z)(A,[["render",T],["__scopeId","data-v-5b2d72f4"]]);var S=K}}]);
//# sourceMappingURL=621.6f119ec8.js.map