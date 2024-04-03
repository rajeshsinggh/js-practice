
// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')

setInterval(function () {     //to run digital clock continually //this the good methood
    let date = new Date();
    // console.log(date.toLocaleDateString()); // consolerun in 
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)  