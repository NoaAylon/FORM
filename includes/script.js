let num = document.getElementById("timer");
let i;
let isOk= false;

window.onload = function(){
    setInterval(function() {
     var newNum = (num.innerHTML)++  
     num.innerHTML = ++newNum; 
    } , 3000);
}

document.getElementById("button").onclick=checkAdress;

function checkAdress(e){
    isOK = false;
    var addresses = ["Kfar Saba" , "Ashdod" , "Tel Aviv" , "Holon"];
    address=document.getElementById("address").value;
    for(let i=0; i<4; i++){
        if (address == addresses[i])
         isOk = true;
    }
    if(isOk == false){
        document.getElementById("button").value = "Wrong adress! please try again";
        return false;
    }
    if(isOk == true){
        document.getElementById("button").value = "Address is ok, pleas continue";
        return true;
    }    
}

