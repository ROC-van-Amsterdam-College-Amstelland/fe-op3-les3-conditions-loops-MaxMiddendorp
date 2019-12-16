//javascript code

var begin = 1;
begin ++;
begin = begin +1

for (var i=1; i <= 50; i++){
    console.log(i);
    document.getElementById("output").innerHTML = document.getElementById("output").innerHTML += i + "<br>";
    // als i gelijk is aan 20
    if((i == 20) || (i == 40)){
        document.getElementById("output").innerHTML = document.getElementById("output").innerHTML += i + "  Dit zijn mooie getallen" + "<br>";
    }    
}
