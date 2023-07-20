let screen = document.querySelector(`.screen`)
    // QuerySelector allows navigation to an html tag by class name and target the element

    const uploadToScreen = (number) => 
    {
        screen.innerHTML += number
    };

    // will show the value of what you are doing on screen

const clearScreen = () => 
{
        screen.innerHTML = ""
    };

    // innerHTML whatever elements are there, adds text
    // functions need to short and sweeter = more efficient

    // Keep it dry

    const calculateTerms = (x, y, sign) => 
    {
        if (sign === '+')
        {
            screen.innerHTML = (parseInt(x) + parseInt(y))
        }
        if (sign === '-')
        {
            screen.innerHTML = (parseInt(x) - parseInt(y))
        }
        if (sign === '*')
        {
            screen.innerHTML = (parseInt(x) - parseInt(y))
        }
        if (sign === '/')
        {
            screen.innerHTML = (parseInt(x) - parseInt(y))
        }
    };



    const splitInput = () => {
        let input = screen.textContent;
        console.log(input);

        if (input.includes("+"))
        {
            let solve = input.split('+')
            console.log("input:", solve);
            calculateTerms(solve[0], solve[1], "+")
        }
        if (input.includes("-"))
        {
            let solve = input.split('-')
            console.log("input:", solve);
            calculateTerms(solve[0], solve[1], "-")
        }
        if (input.includes("*"))
        {
            let solve = input.split('*')
            console.log("input:", solve);
            calculateTerms(solve[0], solve[1], "*")
        }
        if (input.includes("/"))
        {
            let solve = input.split('/')
            console.log("input:", solve);
            calculateTerms(solve[0], solve[1], "/")
        }
    }
