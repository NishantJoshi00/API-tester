// This is the Logic For the program



// Components
let requestBtn = document.getElementById("requestType")
let wrap = document.getElementById("wrapper")




// Helper Function

function cleanContent(jqXHR) {
    let out = jqXHR.getResponseHeader("content-type")
    let re = new RegExp("/([A-Za-z]+)")
    return re.exec(out)[1]
}

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
let gv;

function resetGet() {
    document.getElementById("card1").hidden = true
    document.getElementById("card").hidden = false
    om.setValue("")
}


// GET request logic
function getRequest() {
    console.log("Inside the function")
    $.get(document.getElementById("urlQuery").value, (data, textStatus, jqXHR)=>{
        // // console.log("status: " + textStatus + " data: " + data);
        // console.log(data)
        // console.log(cleanContent(jqXHR))      
        let type = cleanContent(jqXHR)
        console.log(type)
        if (type == "html") {
            document.getElementById("card").hidden = true
            document.getElementById("card1").hidden = false
            document.getElementById("theWeb").srcdoc = data
        } else {
            document.getElementById("card1").hidden = true
            document.getElementById("card").hidden = false
            om.setValue(data)
        }
    })
}

// POST request logic
function postRequest() {
    console.log("Inside the function")
    
}


function runRequest() {
    if (requestBtn.innerHTML == "GET") {
        console.log("The Query was Fired")
        console.log(document.getElementById("urlQuery").value)
        getRequest()
    }
}