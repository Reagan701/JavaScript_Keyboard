let result = document.getElementById("result");

let allKeys = document.getElementsByTagName("button")

console.table(allKeys);
function addChar(key){
    if(result.value != ""){
        result.value += key.toLowerCase();
    }else{
        result.value += key;
    }
}

function type(e){
    let unicode = String.fromCharCode(e.keyCode);
    console.log(e.keyCode);
    for(let i = 0; i<allKeys.length; i++){
        if(unicode == allKeys[i].innerHTML){
            allKeys[i].click();
            allKeys[i].classList.add('active');
            return;
        }else
        if(e.keyCode == 8){
            let slicedResult = result.value;
            slicedResult = slicedResult.slice(0,-1);
            result.value = slicedResult;
            return;
        }if(e.keyCode == 32){
            allKeys[i].click();
            return;
        }
    }
}

function removeChar(){
    let slicedResult = result.value;
    slicedResult = slicedResult.slice(0,-1);
    result.value = slicedResult;
    return;
}

function remove(e){
    let unicode = String.fromCharCode(e.keyCode);
    for(let i = 0; i<allKeys.length; i++){
        if(unicode == allKeys[i].innerHTML){
            allKeys[i].classList.remove('active');
            return;
        }
    }
}
