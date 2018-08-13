var i = 0;
var txt = "Nice to meet you. What is your name?";
var speed = 50; /* The speed/duration of the effect in milliseconds */

printWriter();
function typeWriter()
{

    if (i < txt.length) {
        document.getElementById("myWords").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        // var input = document.getElementById("VisitorName").value;

        // object.onsubmit = printWriter();


    }

}



function printWriter()
{
    var input = document.getElementById("VisitorName").value;
    alert(input);

    var p = 0;
    var txt2 = " Hello"+ input + "thank you for visiting my page. If you would like to see more hit enter!. ";

    var speed2 = 50; /* The speed/duration of the effect in milliseconds */
    if (p < txt2.length)
    {
        document.getElementById("myWords2").innerHTML += txt2.charAt(p);
        p++;

        setTimeout(printWriter,speed2);



    }
}