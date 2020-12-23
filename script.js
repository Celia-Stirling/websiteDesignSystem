var lobster = document.getElementById("lobster");
var lobsterP = document.getElementById("lobster-p");

function showFontName() {
    lobsterP.innerHTML = "Lobster";
    lobsterP.style.fontSize = "50px";
    lobsterP.style.margin = "auto";
};

/*function hideFontName() {
    lobster.innerHTML = "Life isn't finding shelter in the storm. It's about learning to dance in the rain.";
};*/

lobster.addEventListener("mouseover", showFontName);
/*lobster.addEventListener("mouseover", hideFontName);*/