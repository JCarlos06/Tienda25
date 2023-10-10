let starValue = 0;
let disabledBtn = document.getElementById("disabledBtn");
disabledBtn.disabled = true;

function addValueFunction(valuePar){
    document.getElementById("   ").value;
    
    if(valuePar.value == 'increase'){
        starValue++;
    }else{
        starValue--;
    }
    document.getElementById("amount").textContent = 
    starValue;

    if(starValue == 0){
        disabledBtn.disabled = true;
    }else{
        disabledBtn.disabled = false;
    }

}

// function addValueFunction(valuePar){
//     document.getElementById("amount1").value;
    
//     if(valuePar.value == 'increase1 '){
//         starValue++;
//     }else{
//         starValue--;
//     }
//     document.getElementById("amount1").textContent = 
//     starValue;

//     if(starValue == 0){
//         disabledBtn.disabled = true;
//     }else{
//         disabledBtn.disabled = false;
//     }

// }