console.log("page loaded")

var connections = [2,450]

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

function addFriend(element){
    connections[0]--;
    connections[1]++;
    element.parentElement.parentElement.remove();
    drawConnections()
}

function badFriend(element){
    connections[0]--;
    element.parentElement.parentElement.remove();
    drawConnections()
}