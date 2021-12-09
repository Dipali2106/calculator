function clearScreen() {
  document.getElementById("result").value="";
}
 function dp(value) {
   let res=document.getElementById("result");
   if (res=="undefined"){
  res.value="";

 }
 res.value += value;
}
