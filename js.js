var i = 0;
var txt = " Hey Nice to meet you. What is your name?";
var speed = 50; /* The speed/duration of the effect in milliseconds */
var input = document.getElementById("myWords").value;

function typeWriter()
{

    if (i < txt.length) {
        document.getElementById("myWords").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        object.onsubmit = printWriter();


    }

}
var p = 0;
var txt2 = " Hello"+ input + "thank you for visiting my page. If you would like to see more hit enter!. ";
var speed2 = 50; /* The speed/duration of the effect in milliseconds */
function printWriter()
{

    if (p < txt2.length)
    {
        document.getElementById("myWords2").innerHTML += txt2.charAt(p);
        p++;
        setTimeout(typeWriter,speed2);


    }
}