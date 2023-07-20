let screen = document.querySelector(`.screen`)
    // QuerySelector allows navcigation to an html tag by class name and target the element

    const uploadToScreen = (number) => {
        screen.append(number)
    };

    // will show the value of what you are doing on screen

const clearScreen = () => {
        screen.innerHTML = ""
    };

    // innerHTML whatever elements are there, adds text
    // functions need to short and sweeter = more efficient

    // Keep it dry

    const calculate Terms (x, y, sign) => {
        
    };



    const splitInput = () => {
        let nput = screen.textContent;
        console.log(nput);
        if (nput.includes("+"));
        console.log("input:", solve);
        calculateTerms(solve[0], solve[1], "+")
    }
