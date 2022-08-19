// import '../styles.css'

function Symbol(props) {

    const audio = new Audio(
        props.sound
    );

    function playSound() {
        audio.play();
    }

    return (
        <div id="symbol" onClick={playSound}>
            {props.symbol}
        </div>
    );
}

export default Symbol;