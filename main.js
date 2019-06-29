var xhttp = new XMLHttpRequest();

console.log("hello javascript");

function hello()
{
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://artnavsegda.github.io/hello.txt", false);
  xhttp.send("hello");
}
