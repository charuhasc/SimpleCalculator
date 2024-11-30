

const MyButton = ({ input1, input2, onClick,onReset}) => {
    const add = () => {
        return onClick(parseFloat(input1) + parseFloat(input2));
    }
    const Subtract = () => {
        return onClick(parseFloat(input1) - parseFloat(input2));
    }
    const Divide = () => {
        if (parseFloat(input2) !== 0) {

            return onClick(parseFloat(input1) / parseFloat(input2));
        } else {
            return onClick("Can not divide by 0")
        }
    }
    const Multiply = () => {
        return onClick(parseFloat(input1) * parseFloat(input2));
    }
    const ResetInput = () => {
        return onReset("")
    }
    return (

        <div class="flexStyle">
            <button onClick={add} class="button">Add</button>
            <button onClick={Subtract} class="button">Subtract</button>
            <button onClick={Divide} class="button">Divide</button>
            <button onClick={Multiply} class="button">Multiply</button>

            <button onClick={ResetInput} class="button">Reset</button>

        </div>

    )
}
export default MyButton;