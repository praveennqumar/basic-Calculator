function getInput(value) {
    let inputBox = document.getElementById("inputBox");
    inputBox.value += value
}

function deleteItem(){
    let inputBox = document.getElementById("inputBox");
    inputBox.value = inputBox.value.slice(0,-1)
}
function deleteAllItem(){
    let inputBox = document.getElementById("inputBox");
    inputBox.value = inputBox.value.slice(0, inputBox.value.length -  inputBox.value.length)
}
function equalto() {
    let inputBox = document.getElementById("inputBox");
    let ex = inputBox.value;
    let resut = eval(ex);
    inputBox.value = resut; //naming sudhr lega
}







  