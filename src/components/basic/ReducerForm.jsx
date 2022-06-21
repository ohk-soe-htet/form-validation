import { useReducer } from "react";

const inputStateReducer = (state, action) => {
    if (action.type === "INPUT") {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === "BLUR") {
        return { isTouched: true, value: state.value };
    }
    if (action.type === "RESET") {
        return { isTouched: false, value: "" };
    }
    return;
};

const Form = () => {
    const [inputState, dispatchInputState] = useReducer(inputStateReducer, {
        value: "",
        isTouched: false,
    });

    const valueIsValid = inputState.value.trim() !== "";
    const hasError = !valueIsValid && inputState.isTouched;

    const inpChangeHandler = (e) => {
        dispatchInputState({ type: "INPUT", value: e.target.value });
    };

    const inpBlurHandler = () => {
        dispatchInputState({ type: "BLUR" });
    };

    const reset = () => {
        dispatchInputState({ type: "RESET" });
    };

    let formIsValid = false;

    if (valueIsValid) {
        formIsValid = true;
    }

    const sumbitHandler = (e) => {
        e.preventDefault();

        if (!valueIsValid) {
            return;
        }

        console.log(inputState.value);
        reset();
    };

    const inputClasses = hasError ? "form-control invalid" : "form-control";

    return (
        <form onSubmit={sumbitHandler}>
            <div className={inputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={inpChangeHandler}
                    onBlur={inpBlurHandler}
                    value={inputState.value}
                />
                {hasError && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default Form;
