const inputs =document.getElementById('input')
const enter =document.getElementById('enter')
 function keys (data){
   inputs.value+=data
 }
 const backspace =()=>{

inputs.value=inputs.value.slice(0,-1)
 }
 const deletes =()=>{
  inputs.value=""
   }
  const enters=()=>{
   if(inputs.value==""){
    alert("Enter something")
   }else{
    let answer =inputs.value
    alert(answer)
    inputs.value=''
   }
  }








/*inputs.value.addEventListener('keydown',(e)=>{
    if(e.key =='Enter')alert('press enter')
     if(e.key=='Enter' && e.shiftKey ==true)inputs.value="Enter+shift key pressed"
     
   })*/





