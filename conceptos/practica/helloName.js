function changeHelloName(){
    let name = prompt("Write Your Name");
    document.getElementById("greetings").innerHTML = "Hola, "+ name;
}