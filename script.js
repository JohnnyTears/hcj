var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let darkTheme = "dark.css";
    let lightTheme = "light.css";
    let moonIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23374151'%3E%3Cpath d='M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646Z'/%3E%3C/svg%3E";
    let sunIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23808080'%3E%3Cpath d='M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V18.75A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z'/%3E%3C/svg%3E";
    let darkPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23808080'%3E%3Cpath d='M19.5 3A2.502 2.502 0 0 0 17 5.5c0 .691.278 1.316.73 1.77L5.77 19.23a2.5 2.5 0 0 0 3.536 3.536L21.27 10.77a2.5 2.5 0 0 0 1.77.73 2.502 2.502 0 0 0 2.5-2.5A2.502 2.502 0 0 0 23 6.5a2.502 2.502 0 0 0-2.5-2.5c-.691 0-1.316.278-1.77.73L6.77 16.73a2.5 2.5 0 0 0-3.536-3.536L15.23 1.23A2.5 2.5 0 0 0 13.5 0C12.12 0 11 1.12 11 2.5s1.12 2.5 2.5 2.5c.691 0 1.316-.278 1.77-.73L3.27 16.73a2.5 2.5 0 0 0 0 3.536 2.5 2.5 0 0 0 3.536 0L18.73 8.27c.454.452 1.079.73 1.77.73A2.502 2.502 0 0 0 23 6.5c0-1.38-1.12-2.5-2.5-2.5z'/%3E%3C/svg%3E";
    let lightPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23374151'%3E%3Cpath d='M19.5 3A2.502 2.502 0 0 0 17 5.5c0 .691.278 1.316.73 1.77L5.77 19.23a2.5 2.5 0 0 0 3.536 3.536L21.27 10.77a2.5 2.5 0 0 0 1.77.73 2.502 2.502 0 0 0 2.5-2.5A2.502 2.502 0 0 0 23 6.5a2.502 2.502 0 0 0-2.5-2.5c-.691 0-1.316.278-1.77.73L6.77 16.73a2.5 2.5 0 0 0-3.536-3.536L15.23 1.23A2.5 2.5 0 0 0 13.5 0C12.12 0 11 1.12 11 2.5s1.12 2.5 2.5 2.5c.691 0 1.316-.278 1.77-.73L3.27 16.73a2.5 2.5 0 0 0 0 3.536 2.5 2.5 0 0 0 3.536 0L18.73 8.27c.454.452 1.079.73 1.77.73A2.502 2.502 0 0 0 23 6.5c0-1.38-1.12-2.5-2.5-2.5z'/%3E%3C/svg%3E";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if (currTheme === darkTheme) {
        currTheme = lightTheme;
        theme = "light";
        btn.setAttribute("src", moonIcon);
        document.querySelectorAll(".theme-img").forEach(img => img.setAttribute("src", lightPlaceholder));
    } else {
        currTheme = darkTheme;
        theme = "dark";
        btn.setAttribute("src", sunIcon);
        document.querySelectorAll(".theme-img").forEach(img => img.setAttribute("src", darkPlaceholder));
    }

    link.setAttribute("href", currTheme);
    localStorage.setItem("theme", theme);
}

// Load saved theme and icon on page load
window.onload = function() {
    var savedTheme = localStorage.getItem("theme");
    var moonIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23374151'%3E%3Cpath d='M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646Z'/%3E%3C/svg%3E";
    var sunIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23808080'%3E%3Cpath d='M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 1 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .CAT75v2.25a.75.75 0 0 1-1.5 0V18.75A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z'/%3E%3C/svg%3E";
    var darkPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23808080'%3E%3Cpath d='M19.5 3A2.502 2.502 0 0 0 17 5.5c0 .691.278 1.316.73 1.77L5.77 19.23a2.5 2.5 0 0 0 3.536 3.536L21.27 10.77a2.5 2.5 0 0 0 1.77.73 2.502 2.502 0 0 0 2.5-2.5A2.502 2.502 0 0 0 23 6.5a2.502 2.502 0 0 0-2.5-2.5c-.691 0-1.316.278-1.77.73L6.77 16.73a2.5 2.5 0 0 0-3.536-3.536L15.23 1.23A2.5 2.5 0 0 0 13.5 0C12.12 0 11 1.12 11 2.5s1.12 2.5 2.5 2.5c.691 0 1.316-.278 1.77-.73L3.27 16.73a2.5 2.5 0 0 0 0 3.536 2.5 2.5 0 0 0 3.536 0L18.73 8.27c.454.452 1.079.73 1.77.73A2.502 2.502 0 0 0 23 6.5c0-1.38-1.12-2.5-2.5-2.5z'/%3E%3C/svg%3E";
    var lightPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23374151'%3E%3Cpath d='M19.5 3A2.502 2.502 0 0 0 17 5.5c0 .691.278 1.316.73 1.77L5.77 19.23a2.5 2.5 0 0 0 3.536 3.536L21.27 10.77a2.5 2.5 0 0 0 1.77.73 2.502 2.502 0 0 0 2.5-2.5A2.502 2.502 0 0 0 23 6.5a2.502 2.502 0 0 0-2.5-2.5c-.691 0-1.316.278-1.77.73L6.77 16.73a2.5 2.5 0 0 0-3.536-3.536L15.23 1.23A2.5 2.5 0 0 0 13.5 0C12.12 0 11 1.12 11 2.5s1.12 2.5 2.5 2.5c.691 0 1.316-.278 1.77-.73L3.27 16.73a2.5 2.5 0 0 0 0 3.536 2.5 2.5 0 0 0 3.536 0L18.73 8.27c.454.452 1.079.73 1.77.73A2.502 2.502 0 0 0 23 6.5c0-1.38-1.12-2.5-2.5-2.5z'/%3E%3C/svg%3E";

    link.setAttribute("href", savedTheme === "light" ? lightTheme : darkTheme);
    btn.setAttribute("src", savedTheme === "light" ? moonIcon : sunIcon);
    document.querySelectorAll(".theme-img").forEach(img => img.setAttribute("src", savedTheme === "light" ? lightPlaceholder : darkPlaceholder));
};