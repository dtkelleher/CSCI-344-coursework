const defaultTheme = ev => {
    removeTheme();
    document.body.classList.add("default");
};

const oceanTheme = ev => {
    removeTheme();
    document.body.classList.add("ocean");
};

const desertTheme = ev => {
    removeTheme();
    document.body.classList.add("desert");
};

const highContrastTheme = ev => {
    removeTheme();
    document.body.classList.add("high-contrast");
}; 

const removeTheme = ev => {
    document.body.classList.remove("default");
    document.body.classList.remove("ocean");
    document.body.classList.remove("desert");
    document.body.classList.remove("high-contrast");
};

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/