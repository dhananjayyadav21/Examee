console.log("lets start");

function getLoginUserName() {
    return localStorage.getItem("authKey");
}

let loginUrls = [
    // "/notes.html",
    "/practical.html",
    "/Qution-Paper.html",
    "/cource.html",
    "/video.html",
    // "/notes",
    "/practical",
    "/Qution-Paper",
    "/cource",
    "/video"
];

function checklogin() {
    let currentUrl = window.location.pathname.trim();
    if (getLoginUserName() == null && loginUrls.includes(currentUrl)) {
        window.location = "/register.html";
    } 
}
checklogin();