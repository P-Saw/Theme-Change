const themeCheck = document.querySelector('.check');

const themeChange = () =>{
    if(themeCheck.checked){
        document.documentElement.style.cssText = `
        --white: hsl(230, 17%, 14%);
        --pale-blue: hsl(232, 19%, 15%);
        --light-grayish-blue: hsl(228, 28%, 20%);
        --dark-grayish-blue: hsl(228, 34%, 66%);
        --dark-blue: hsl(0, 0%, 100%);
        `
    } else {
        document.documentElement.style.cssText = `
        --white: hsl(0, 0%, 100%);
        --pale-blue: hsl(225, 100%, 98%);
        --light-grayish-blue: hsl(227, 47%, 96%);
        --dark-grayish-blue: hsl(228, 12%, 44%);
        --dark-blue: hsl(230, 17%, 14%);
        `
    }
};

themeCheck.addEventListener('click', themeChange);