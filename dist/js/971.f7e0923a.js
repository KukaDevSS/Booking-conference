"use strict";(self["webpackChunkconference_booking"]=self["webpackChunkconference_booking"]||[]).push([[971],{971:function(o,t,e){e.r(t),e.d(t,{default:function(){return M}});var i=e(3396),n=e(9242),s=e(7139);const a={class:"container w-100 vh-100 my-auto d-flex align-items-center"},l=(0,i._)("div",null,[(0,i._)("p",{class:"text-center fw-bold",style:{"font-size":"20px"}},"ແກ້ໄຂ")],-1),r={class:"my-2"},c=(0,i._)("label",{for:""},"ຫົວຂໍ້ການປະຊຸມ",-1),m={class:"row my-4"},d={class:"col-4"},u=(0,i._)("div",{class:"d-flex"},[(0,i._)("label",{class:"me-5",for:"timeInput"},"ເວລາເລີ່ມ")],-1),b=["value"],h={class:"col-4"},k=(0,i._)("div",{class:"d-flex"},[(0,i._)("label",{class:"me-5",for:"timeInput"},"ເວລາສິ້ນສຸດ")],-1),p=["value"],f={class:"col-4"},y=(0,i._)("label",{for:""},"ວ.ດ.ປ",-1),_={class:"my-4"},g=(0,i._)("label",{for:""},"ພະແນກ ຫຼື ບໍລິສັດ",-1),v={class:"my-4"},w=(0,i._)("label",{for:""},"ຊື່ ແລະ ນາມສະກຸນ",-1),T={class:"my-4"},D=(0,i._)("label",{for:""},"ເບີໂທລະສັບ",-1),x={class:"row justify-content-center"},P={class:"my-2 col-6"},S=(0,i._)("div",{class:"mt-2 col-6"},[(0,i._)("button",{type:"submit",class:"btn btn-primary w-100"},"ແກ້ໄຂ")],-1);function $(o,t,e,$,B,I){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",a,[(0,i._)("form",{onSubmit:t[8]||(t[8]=(0,n.iM)(((...o)=>I.updateBooking&&I.updateBooking(...o)),["prevent"])),action:"",class:"w-50 mx-auto py-2 px-5 bg-light shadow-lg"},[l,(0,i._)("div",r,[c,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>B.bookTitle=o),type:"text",class:"form-control",disabled:""},null,512),[[n.nr,B.bookTitle]])]),(0,i._)("div",m,[(0,i._)("div",d,[u,(0,i.wy)((0,i._)("select",{id:"timeInput",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=o=>B.bookTimeS=o)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(I.formattedTimeOptions,(o=>((0,i.wg)(),(0,i.iD)("option",{key:o.value,value:o.value},(0,s.zw)(o.label),9,b)))),128))],512),[[n.bM,B.bookTimeS]])]),(0,i._)("div",h,[k,(0,i.wy)((0,i._)("select",{id:"timeInput",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=o=>B.bookTimeE=o)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(I.formattedTimeOptions,(o=>((0,i.wg)(),(0,i.iD)("option",{key:o.value,value:o.value},(0,s.zw)(o.label),9,p)))),128))],512),[[n.bM,B.bookTimeE]])]),(0,i._)("div",f,[y,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>B.bookDate=o),type:"date",class:"form-control"},null,512),[[n.nr,B.bookDate]])])]),(0,i._)("div",_,[g,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>B.bookDP=o),type:"text",class:"form-control",required:"",disabled:""},null,512),[[n.nr,B.bookDP]])]),(0,i._)("div",v,[w,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>B.bookName=o),type:"text",class:"form-control",required:"",disabled:""},null,512),[[n.nr,B.bookName]])]),(0,i._)("div",T,[D,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>B.bookPhone=o),type:"text",class:"form-control",required:"",disabled:""},null,512),[[n.nr,B.bookPhone]])]),(0,i._)("div",x,[(0,i._)("div",P,[(0,i._)("button",{onClick:t[7]||(t[7]=(...o)=>I.goBackAndReload&&I.goBackAndReload(...o)),type:"button",class:"btn btn-danger w-100"},"ຍົກເລີກ")]),S])],32)])])}e(7658),e(7516);var B=e(2492),I=e.n(B),A=e(9674),N={data(){return{Rooms:"",bookId:null,bookTitle:"",bookDate:"",rooms:"",bookTimeS:"",bookTimeE:"",bookDP:"",bookName:"",bookPhone:"",timeOptions:[],startTime:480,endTime:1200,increment:30,hoursAM:Array.from({length:4},((o,t)=>t+8)),hoursPM:Array.from({length:9},((o,t)=>t+12)),minutes:["00","30"],meridiem:["ເຊົ້າ","ແລງ"]}},created(){this.bookId=this.$route.params.id,this.fetchBookingData()},computed:{minDate(){const o=(new Date).toISOString().split("T")[0];return o},formattedTimeOptions(){const o=[];for(const t of this.hoursAM)for(const e of this.minutes){const i=`${t.toString().padStart(2,"0")}:${e} ${this.meridiem[0]}`;o.push({value:i,label:i})}for(const t of this.hoursPM)for(const e of this.minutes){const i=`${t.toString().padStart(2,"0")}:${e} ${this.meridiem[1]}`;o.push({value:i,label:i})}return o}},methods:{async fetchBookingData(){try{const o=await fetch(`${A.z}/booking/${this.bookId}`),t=await o.json();this.bookTitle=t.title,this.bookDate=t.date,this.rooms=t.roomNumber,this.bookTimeS=t.startTime,this.bookTimeE=t.endTime,this.bookDP=t.department,this.bookName=t.name,this.bookPhone=t.phone}catch(o){console.error("Error fetching booking data:",o)}},async updateBooking(){const o={title:this.bookTitle,date:this.bookDate,roomNumber:this.rooms,startTime:this.bookTimeS,endTime:this.bookTimeE,department:this.bookDP,name:this.bookName,phone:this.bookPhone};try{const t=await fetch(`${A.z}/booking/update/${this.bookId}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});200===t.status?I().fire({title:"ແກ້ໄຂການຈອງສຳເລັດ",icon:"success",confirmButtonText:"ຕົກລົງ"}).then((()=>{this.$router.push({name:"admin"})})):409===t.status?I().fire({title:" ຫ້ອງປະຊຸມບໍ່ຫວ່າງ",icon:"error",confirmButtonText:"ຕົກລົງ"}):I().fire("An error occurred","","error")}catch(t){console.error("Error updating booking:",t)}},goBackAndReload(){window.history.back(),setTimeout((()=>{}),300)}}},U=e(89);const E=(0,U.Z)(N,[["render",$]]);var M=E}}]);
//# sourceMappingURL=971.f7e0923a.js.map