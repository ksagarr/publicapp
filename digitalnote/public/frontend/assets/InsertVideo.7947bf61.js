import{_,j as v,N as C,T as k,e as r,o as u,f as c,E as h,F as x,G as B,g as a,q as l,l as w,t as n,R as y,D as U,S as g,K as F}from"./vendor.eaeaa53a.js";const N={name:"InsertImage",props:["editor"],expose:["openDialog"],data(){return{addVideoDialog:{url:"",file:null,show:!1}}},components:{Button:v,Dialog:C,FileUploader:k},methods:{openDialog(){this.addVideoDialog.show=!0},onVideoSelect(i){let o=i.target.files[0];!o||(this.addVideoDialog.file=o)},addVideo(i){this.editor.chain().focus().insertContent(`<video src="${i}"></video>`).run(),this.reset()},reset(){this.addVideoDialog=this.$options.data().addVideoDialog}}},S={class:"flex items-center space-x-2"},I=["src"];function A(i,o,R,j,e,t){const s=r("Button"),p=r("FileUploader"),V=r("Dialog");return u(),c(F,null,[h(i.$slots,"default",x(B({onClick:t.openDialog}))),a(V,{options:{title:"Add Video"},modelValue:e.addVideoDialog.show,"onUpdate:modelValue":o[2]||(o[2]=d=>e.addVideoDialog.show=d),onAfterLeave:t.reset},{"body-content":l(()=>[a(p,{"file-types":"video/*",onSuccess:o[0]||(o[0]=d=>e.addVideoDialog.url=d.file_url)},{default:l(({file:d,progress:f,uploading:m,openFileSelector:D})=>[w("div",S,[a(s,{onClick:D},{default:l(()=>[n(y(m?`Uploading ${f}%`:e.addVideoDialog.url?"Change Video":"Upload Video"),1)]),_:2},1032,["onClick"]),e.addVideoDialog.url?(u(),U(s,{key:0,onClick:()=>{e.addVideoDialog.url=null,e.addVideoDialog.file=null}},{default:l(()=>[n(" Remove ")]),_:2},1032,["onClick"])):g("",!0)])]),_:1}),e.addVideoDialog.url?(u(),c("video",{key:0,src:e.addVideoDialog.url,class:"mt-2 w-full rounded-lg",type:"video/mp4",controls:""},null,8,I)):g("",!0)]),actions:l(()=>[a(s,{variant:"solid",onClick:o[1]||(o[1]=d=>t.addVideo(e.addVideoDialog.url))},{default:l(()=>[n(" Insert Video ")]),_:1}),a(s,{onClick:t.reset},{default:l(()=>[n("Cancel")]),_:1},8,["onClick"])]),_:1},8,["modelValue","onAfterLeave"])],64)}var L=_(N,[["render",A]]);export{L as default};