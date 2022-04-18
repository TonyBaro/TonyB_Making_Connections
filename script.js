console.log("page loaded")

var connections = [3,450]

function drawConnections(){
    console.log("drawing connections")
    document.querySelector(".connect p").innerHTML = connections[0]
    document.querySelector(".youconnect p").innerHTML = connections[1]
}
drawConnections()

function nameChange(){
    document.querySelector(".userlog h2").innerHTML = "Johny Doerson"
    document.getElementById("userpic").src = "Assets/images/todd-s.jpg"
}

function buttonpress(element){
    console.log("pressing")
    element.classList.add("pressed")
    drawConnections()
}

function buttonUnpress(element){
    element.classList.remove("pressed")
}