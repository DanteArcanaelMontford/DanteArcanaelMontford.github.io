function burgerMenu() {

    const navigation = document.getElementById("navigation");
    const hamburgerMenu = document.getElementById("hamburger-button");

    if (navigation.className === "navigation") {
        navigation.className += " burger-menu";
        hamburgerMenu.innerHTML = "&Cross;";

    } else {
        navigation.className = "navigation";
        hamburgerMenu.innerHTML = "&#9776;";

    }
}