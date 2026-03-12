function appendValue(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value="";
}

function calculate(){

    try{
        let exp = document.getElementById("display").value;
        document.getElementById("display").value = eval(exp);
    }
    catch{
        alert("Invalid expression");
    }
}
function backspace(){
    let val = document.getElementById("display").value;
    document.getElementById("display").value = val.slice(0,-1);
}

function toggleTheme(){
    document.body.classList.toggle("dark");
}
document.addEventListener("keydown", function(event){

    let key = event.key;

    if(!isNaN(key) || key==="+" || key==="-" || key==="*" || key==="/" || key==="." || key==="%" ){
        appendValue(key);
    }

    else if(key==="Enter"){
        calculate();
    }

    else if(key==="Backspace"){
        backspace();
    }

    else if(key==="Escape"){
        clearDisplay();
    }

});