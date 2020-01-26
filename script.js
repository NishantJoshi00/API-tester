// This is the Logic For the program



// Components
let requestBtn = document.getElementById("requestType")
let wrap = document.getElementById("wrapper")
let url = document.getElementById("urlQuery")



// Button Logic


function changeType() {
    if (requestBtn.innerHTML == "GET") {
        requestBtn.innerHTML = "POST"
        document.getElementById("canHide").hidden = false;
        wrap.style.display = ""
        wrap.style.alignItems = ""
        wrap.style.justifyContent = ""
    
    } else {
        requestBtn.innerHTML = "GET"
        document.getElementById("canHide").hidden = true;
        wrap.style.display = "flex"
        wrap.style.alignItems = "center"
        wrap.style.justifyContent = "center"
    }
}

// GET request logic
function getRequest() {
    $.get(url.innerHTML, (data, textStatus, jqXHR)=>{
        alert("status: " + textStatus + " data: " + data);
    })
}
