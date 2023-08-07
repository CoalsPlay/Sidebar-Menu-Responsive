
function accordion() {

    const buttonToggle = document.getElementById("toggle-menu");
    buttonToggle.classList.toggle("sidebar-left-responsive");

    const hiddenElement = document.getElementsByClassName("hidden-xs");
    
    for (let i = 0; i < hiddenElement.length; i++) {

        hiddenElement[i].style.display === "none"
        
        ? hiddenElement[i].style.display = "inline-block"
        : hiddenElement[i].style.display = "none"
        
    }
    
}