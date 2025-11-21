function goNext(){
 let name=document.getElementById('name').value;
 let level=document.getElementById('level').value;
 if(!name){alert("กรอกชื่อก่อน");return;}
 sessionStorage.setItem("name",name);
 window.location= level + ".html";
}
function submitData(){
 let size=document.getElementById('size').value;
 if(!size){alert("เลือกไซส์ก่อน");return;}
 document.getElementById("popup").style.display="flex";
 setTimeout(()=>{document.getElementById("popup").style.display="none";},1800);
}
