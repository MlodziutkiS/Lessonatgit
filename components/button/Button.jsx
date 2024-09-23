import './Button.css';

function Button(){

    function buttonpress(){
        console.log("pressed")
    }

    return <button className='button' onClick={buttonpress}>Nacisnij</button>

}

export default Button;