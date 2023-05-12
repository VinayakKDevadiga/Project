const ac=document.querySelector(".ac");//done
const inputbox=document.querySelector("#calculationInput");//done

//for clear
ac.addEventListener("click",()=>{
      inputbox.value = "";
   }
);
//for delete
function deleted(){
   var text=inputbox.value;
   var modifiedText = text.slice(0, -1); // Remove the last letter
   inputbox.value = modifiedText;
}
//for every button
var c=0;
function adder(value){
   if(c==1){
      inputbox.value=""
      c=0;
   }
   if(value==="=" ){
      if(inputbox.value==""){
         inputbox.value="Enter Expression"
         c=1;
      }
      inputbox.value=String(eval(inputbox.value));
   }
   else{
   var text=inputbox.value;
   var modifiedText=text+value;
   inputbox.value = modifiedText;
}
}
//for square
function square(){
  let ans=(Number(inputbox.value));
  inputbox.value=String(ans*ans);
}

   