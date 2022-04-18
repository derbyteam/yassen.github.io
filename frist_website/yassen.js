function func1(){
    alert("it is alert");
} 
function func2(){
    var t;
    if(confirm("it is a confirm"))
    {t = "you pressed ok";}
    else {t = "you pressed cancel";}
    document.getElementById("demo2").innerHTML=t ;
}
function func3(){
    var t;
    var p=prompt("please enter your name", "yassen");
    if(p == null || p == ""){
    t="you cancelled the prompt";}
    else{t="hello "+p+"<br>how are you today";}
    document.getElementById("demo3").innerHTML=t;
}
var x = document.getElementsByTagName("p");
document.getElementById("tagname").innerHTML="the text in the second paragraph(index 1) is :" + x[1].innerHTML;

