// Intro & What is BOM ???
/*
    What's BOM?
    - Browser Object Model

    What Can I Do With Bom?
    - JS BOM Talks To The Browser
    - Doing Actions Not Related To Page
    --- Change URL
    --- Background Requests
    --- alert, confirm, prompt
    --- Window Move, Window Open, Window Close
    --- Change Text In The Status Background

    BOM Information
    - BOM Has No Standard
    - All Modern Browsers Implement Similar Boms
    --- Window
    --- Screen
    --- Location
    --- History
    --- Navigation
    --- Timing
    --- Cookies

    - Colection of Objects Control THE Browsers
    - Default Object Of Browseris Window
    - All Global Js Objects Are Member Of Window Object
*/

// Window :

/*
    - Window Object Is the Browser Window
    - Window Object Subborted By All Browsers
    - Window Object Has Propertise & Methods Not Supported In All Browsers
    - Window Is The Default Object Of Browser
    - All Global Js Objects Are Member Of Window Object
*/

// Window Methods - Alert, prompt, Confirm :

/*
    alert("Text /nText")
    confirm("Are You Sure") // Return T || F
    prompt("ExplainText", "DefaultAnswer") If User didn't Enter Any Thing Return Null
*/

// Window Methods - setTimeout

/*
    setTimeout(Function[REQ], Milliseconds[REQ], Param1, Param2, Param3)
    clearTimeout(myTime);
*/
var myButton = document.getElementById('Click');

function writeMessage() {
    "use strict";

    window.console.log("Hello After 0.8 SEC");
}

var myTime = setTimeout(writeMessage, 800);

myButton.onclick = function () {
    "use strict";

    clearTimeout(myTime);
};

// Window Methods - setInterval :

/*
    setInterval(Function[REQ], Milliseconds[REQ], Param1, Param2, Param3)
    clearInterval(Id Or Nuumber Of setInterval);
*/

var L = setInterval(function () {
    "use strict";
    window.console.log("Hello World Every 2 SEC FO");
},2000);

document.getElementById("Click2").onclick = function () {
    "use strict";
    clearInterval(L);
};

var myDiv = document.getElementById("myDiv");

// Window Methods - Open :
/*
    Syntax: window.Open(Url, Name Or Attribute, Specification, , History Replace)
    Specification :
    - Width = pixels [Only Number Without Px]
    - Hieght
    - menubar
    - Status
*/

// Window Methods - scrollBy, scrollTo :

/*
window.open("https://www.google.com","_top","width=200,height=200,","true");

window.onmouseenter = function () {
        "use strict";
        function my () {
        window.scrollBy(0,1);
    }
};
var Timer = setInterval(function(){ my(); },10);
window.onmouseleave = function () {
    "use strict";
    clearInterval(Timer);
};

window.onclick = function () {
        "use strict";
        var m = setInterval(function () {
        window.scrollBy(0,1);
        console.info(m);
    },4);
    window.onmousemove = function () {
    clearInterval(m);
};
};
*/

// Window Methods - Stop, Close, Focus :
/*
    window.stop  // Stop Page From Load
    window.Close // Close Current Browser Tap
    window.Focus // Make Browser Tab I Opened With Script Focus
*/

// Window Propertise - ineerHeight, InnerWidth ,outer

// Window Propertise - PageXOffset, pageYOffset

/*
    the diffrent between pageYOffset & ScrollLeft Is ScrollLeft Is an Property for body & pageYOffset Is an Property for window
*/

// Window Location Propertise - href

/*
    Location.href
    - Absolute URL
    - Page Within The Current Web Page
    - Hash Id within the page
    - Prorocol
*/

/*
var m;
var hasRun = false;

window.onclick = function () {
    "use strict";

    if (!hasRun) {
        m = setInterval(function () {
            window.scrollBy(0,1);
            console.info(m);
        },4);

        hasRun = true;
    }
};

window.onmousemove = function () {
    if (m) {
        clearInterval(m);
    }
    var hasRun = true;
};
*/

// Location Propertise - Host, Hash :

/*
    Location.host (The Host Of the website)
    Location.hash (#) Id Of An Element
*/

// Location Propertise - Prorocol, Search, Pathname :
/*
    Protocol :
    - Http = HyperText transfer Protocol
    - Https = HyperText transfer Protocol Secured
    - File
    - Mailto
    - ftp - file transfer Protocol

    https://www.google.com/index.html?id=aa
    Propertise.Protocol = https
    Propertise.Search = id=aa
    Propertise.pathname = /index.html
*/

// Location Methods - Reload, Replace, Assign :
/*
    Location.Assign("https://www.google.com")
        Doesn't remove the URL of the current document from the document history
    Location.replace("https://www.google.com")
        removes the URL of the current document from the document history
    Location.reloda(forcedReload)
        forcedReload: Optional
        true = forcedReload Reload From server
        false = Default. Reloads the current page from the cache
*/

// History Methods - Back, Forward, Go

/*
    History.length
    history.back()
    history.Forward()
    history.go()
*/

// window Navigator Propertise

console.log(navigator.appCodeName);
console.log(navigator.appVersion);
console.log(navigator.appName);
console.log(navigator.platform);
console.log(navigator.cookieEnabled);
console.log(navigator.language);
console.log(navigator.onLine);
console.log(navigator.product);

// Window Screen Propertise

/*
    screen.width
    screen.height
    screen.availHeight
    screen.availWidth
    screen.colorDepth || screen.pixelDepth
*/

// Cookies Part 1

/*
    document.cookie("name=value; expires=Date; path="");
*/
