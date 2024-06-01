// Load header and footer HTML using Fetch API
fetch('common/nabar.html')
    .then(response => response.text())
    .then(html => document.getElementById('header-placeholder').innerHTML = html).then(function () {
        $(document).ready(function () {
            $("#header-placeholder").find("li a").removeClass("active");
            $("#header-placeholder").find(`li a[href='${window.location.pathname}']`).addClass("active");  
            if (localStorage.getItem("loginUser") != null) {
                $(".registerBtn").hide();
                $(".loginBtn").hide();
            }    

            if (localStorage.getItem("loginUser") == null) {
                $("#logout").hide();
            }

            if (localStorage.getItem("adminLogin") == null) {
                $("#adminPanel").hide();
            }
        
            $("#logout").on("click", function () {
                localStorage.removeItem("loginUser");
                localStorage.removeItem("adminLogin");
                window.location.replace("/login.html");
            });
        });
    });

fetch('common/footer.html')
    .then(response => response.text())
    .then(html => document.getElementById('footer-placeholder').innerHTML = html);

