var  exampleInputname = document.getElementById("exampleInputname")
var exampleInputurl = document.getElementById ("exampleInputurl") 
 
siteArr=[] 
siteArr= JSON.parse(localStorage.getItem('sites') ) ;
adds()
function site () {
   var  site = {
        name: exampleInputname.value , 
        url :exampleInputurl.value ,
    }   
    siteArr.push(site)
 
    clearInput() 
    localStorage.setItem('sites',JSON.stringify(siteArr))
   
    adds()
   

    
 }
   
 function adds() { 
  cartona=""
  for (let i = 0; i <= siteArr.length; i++) {
   cartona+=` 
   <tr>
   <td> ${i} </td>
    <td> ${siteArr[i].name}  </td>
    <td> ${siteArr[i].url}  </td>
    <td> <a target="_blank" href=" ${ siteArr[i].url} ">  <button  class=" btn1 btn text-white fs-5"><i class="fa-solid fa-eye"></i>   visit</button>   </a>    </td>
    <td> <button onclick="deleteItem(${i})"   class="btn2 text-white   btn">Delete</button>   </td>

    <tr>
   ` 
   document.getElementById("tableBody").innerHTML=cartona;
  }
 
 
  
 } 

 function clearInput() { 
  exampleInputname.value = "" ;
  exampleInputurl.value="" ; 

 }  

 function deleteItem(index) {
  siteArr.splice(index,1) 
  localStorage.setItem('sites',JSON.stringify(siteArr))
  adds()
 }
 

 function visitUrl(index) {
   alert(siteArr[index].url) 
  
 }




 


function check1() {
  var regexName = /^[A-Za-z0-9]{4,30}$/
  x=exampleInputname.value  
  if (regexName.test(x)==true) { 
 document.getElementById("exampleInputname").classList.add("is-valid")
 document.getElementById("exampleInputname").classList.remove("is-invalid")
    
  }
  else { 
    document.getElementById("exampleInputname").classList.add("is-invalid")
  }
} 
 

function check2() {
 
 y = exampleInputurl.value;
 var  regexUrl = /^((https?|ftp):\/\/)?([a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5})(:[0-9]{1,5})?(\/.*)?$/

 if (regexUrl.test(y)==true) { 
  document.getElementById("exampleInputurl").classList.add('is-valid')
  document.getElementById("exampleInputurl").classList.remove('is-invalid')


 } 
 else{
  document.getElementById("exampleInputurl").classList.add('is-invalid')
 }
}




