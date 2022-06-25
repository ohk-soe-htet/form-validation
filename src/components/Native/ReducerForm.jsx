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

const ReducerForm = () => {
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

        alert(inputState.value);
        reset();
    };

    return (
        <form onSubmit={sumbitHandler}>
            <label htmlFor="name">Your Name</label>
            <input
                type="text"
                name="name"
                id="name"
                onChange={inpChangeHandler}
                onBlur={inpBlurHandler}
                value={inputState.value}
            />
            {hasError ? <p>Name must not be empty.</p> : <EmptyDiv />}
            <button type="submit" disabled={!formIsValid}>
                Submit
            </button>
        </form>
    );
};

export default ReducerForm;
