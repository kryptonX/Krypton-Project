function post() {
    alert("No 'post' module detected!\nThis could mean that the function has not yet been written.");
}

function cancel() {
    document.location = document.location;
}


function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { //test for MSIE x.x;
        alert("You are using Internet Explorer.\nYour browser is therefore unable to run this page properly.");
    }
    
}