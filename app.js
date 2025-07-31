//const value =  12 ;  //document.getElementById('num').value;
const upperletters = document.getElementById('cap');
const smallletters = document.getElementById('small');
const digits = document.getElementById('number');
const symbol  = document.getElementById('sym');

const display = document.getElementById('display');



document.getElementById('submit').onclick = function(){
const value = document.getElementById('num').value;

let allowedChar = "";
let password = "";

if(upperletters.checked){
    allowedChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
else{
    allowedChar += "";
}
if(smallletters.checked){
    allowedChar += "abcdefghijklmnopqrstuvwxyz";
}
else{
    allowedChar +="";
}
if(digits.checked){
        allowedChar += "0123456789"
}
else{
    allowedChar+="";
}
if(symbol.checked){
    allowedChar += "!@#$%^&*()_+=";

}else{
    allowedChar+="";
}
if(allowedChar.length === 0){
    
    display.textContent = `Select the Options.`;
    return;
}
if(value == 0){
    
    display.textContent = `Enter the value.`;
    return;
}
   
for(let i=0; i<value; i++){

            let values = Math.floor(Math.random() * allowedChar.length);
            password += allowedChar[values];
        }
        display.innerHTML = `The password generator based on your choice: <span style="color: green; font-weight: bold;">${password}</span>`;

        

}




    





