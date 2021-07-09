const inputField = document.querySelector('.in');
const btns = document.querySelectorAll('button');



btns.forEach(butn =>{
    butn.addEventListener('click',()=>{
        if(butn.textContent !== "=" && butn.textContent !== "c"){
        inputField.value += butn.textContent;
        
        }
        else if(butn.textContent === "c"){
            inputField.value = ' ';
        }

         if(butn.textContent === "="){
            let ino= eval(inputField.value);
            inputField.value = ino;
         }
        
    })
})






















































