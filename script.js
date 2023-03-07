function calc(){
    var num1 = parseInt(document.querySelector('#num1').value);
    var num2 = parseInt(document.querySelector('#num2').value);
    var op = document.querySelector('#op').value;

    var calculate;

    if(num1){
        if(num2){
            if(op == 'add'){
                calculate = num1 + num2;
            }else if(op =='sub'){
                calculate = num1 - num2;
            }else if(op == 'mul'){
                calculate = num1 * num2;
            }else if(op == 'div'){
                    calculate = num1 / num2;
            }
            alert(calculate);
        }else if(num2 == 0){
            alert("Cannot divide by zero!");
        }else{
            alert("Please Enter the Second value!");
        }
    }else{
        alert("Please Enter the First value!");
    }
}