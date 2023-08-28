let string = "";
let btns = document.querySelectorAll('.btn')
Array.from(btns).forEach((btn)=>{
btn.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
    string = eval(string);
    document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'AC') {
        string = '';
        document.querySelector('input').value = string;

    } 
    else if (e.target.innerHTML == 'DEL') {
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
    }

    else{
    console.log(e.target)
    string= string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
    
})
})

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}


// const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
// if (prefersDarkMode.matches) {
//     toggleDarkMode(); // Apply dark mode initially if the user's system prefers dark mode
// }