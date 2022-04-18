function toBinary(){
    var x = document.form1.num1.value;
    var r, s = "";
    while(x != 0){
        r = x % 2;
        s = r + s;
        x = parseInt(x / 2);
    }
    alert(s);
}

function toOctal(){
    var x = document.form1.num1.value;
    var r, s = "";
    while(x != 0){
        r = x % 8;
        s = r + s;
        x = parseInt(x / 8);
    }
    alert(s);
}

function toHexaDec(){
    var x = document.form1.num1.value;
    var r, s = "";
    while(x != 0){
        r = x % 16;
        if(r < 10){
            s = r + s;
        }
        if(r == '10')
        {
            s = 'A' + s;
        }
        if(r == "11")
        {
            s = 'B' + s;
        }
        if(r == '12')
        {
            s = 'C' + s;
        }
        if(r == '13')
        {
            s = 'D' + s;
        }
        if(r == '14')
        {
            s = 'E' + s;
        }
        if(r == '15')
        {
            s = 'F' + s;
        }
        x = parseInt(x / 16);
    }
    alert(s);
}