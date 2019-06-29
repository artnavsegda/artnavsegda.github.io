var xhttp = new XMLHttpRequest();

console.log("hello javascript");

function hello()
{
        xhttp.open("GET", "https://artnavsegda.github.io/hello.txt", false);
        xhttp.send("hello");
        document.getElementById("demo").innerHTML = xhttp.responseText;
}
