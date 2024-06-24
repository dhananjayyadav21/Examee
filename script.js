console.log("lets start");

document.addEventListener("DOMContentLoaded", function () {

    let categoryOption = document.getElementById("categoryOption");

    if (categoryOption != null) {
        let defaultSelectedCategory = sessionStorage.getItem("categoryOption");

        if (defaultSelectedCategory != null && defaultSelectedCategory.trim() != "") {
            categoryOption.value = defaultSelectedCategory;
        }

        categoryOption.addEventListener("change", function (event) {
            sessionStorage.setItem("categoryOption", event.target.value);
            reloadData();
        });

        reloadData();
    }

});
