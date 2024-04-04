const btn = document.getElementById("btn");
let check = true;
let count = 1;

btn.addEventListener('click', function() {
    if(check===true && count<=10){
     btn.textContent = `Click me ${count++} `;
      if(count===10){
        count=!count;
      } 
    }
    else if (count===false && count>=0){ 
      btn.textContent = `Click me ${count--}  `;
      if(count===0){
        count=!count;
      } 
    }
    });




