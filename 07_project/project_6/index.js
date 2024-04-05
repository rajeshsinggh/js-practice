// generate a random color

const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
  
    for (i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  // console.log(Math.floor(Math.random() * 16))
  // console.log(randomColor()); // see output
  
  let intervalId;
  const startChangingColor = () => {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
    // intervalId =  setInterval(changeBgColor, 1000); // it will cange color every sec  // this is the one way
    // document.body.style.backgroundColor = randomColor(); //background color will change every time by clicking start button . how to automate? => setInterval
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopChangingColor = () => {
    //how to stop bgcolor
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.getElementById('start').addEventListener('click', startChangingColor);
  
  document.getElementById('stop').addEventListener('click', stopChangingColor);
  