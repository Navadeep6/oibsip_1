let output = document.getElementById("output");

function display(num){
    output.value += num;
}

function Calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}

function Clear(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0,-1);
}

function log(){
    output.value = Math.log(output.value);
}

function pow(){
    output.value = Math.pow(output.value,2);
}

function pi(){
    output.value = 3.14;
}

function sin(){
    output.value = Math.sin(output.value);
}

function cos(){
    output.value = Math.cos(output.value);
}

function tan(){
    output.value = Math.tan(output.value);
}

function sqrt(){
    output.value = Math.sqrt(output.value);
}

function e(){
    output.value = 2.718;
}

function factorial(){
    let i, num, fact=1;
    num = output.value;
    for(i=1;i<=num;i++){
        fact = fact * i;
    }
    i = i - 1;
    output.value = fact;
}