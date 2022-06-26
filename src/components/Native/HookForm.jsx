import useInput from "../../hooks/use-input";
import EmptyDiv from "../UI/EmptyDiv";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const HookForm = () => {
    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput(isNotEmpty);
    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput(isNotEmpty);
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);

    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        alert(firstNameValue, lastNameValue, emailValue);

        resetFirstName();
        resetLastName();
        resetEmail();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="control-group">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstNameValue}
                    onChange={firstNameChangeHandler}
                    onBlur={firstNameBlurHandler}
                />
                {firstNameHasError ? (
                    <p className="error-text">Please enter a first name.</p>
                ) : (
                    <EmptyDiv />
                )}
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastNameValue}
                    onChange={lastNameChangeHandler}
                    onBlur={lastNameBlurHandler}
                />
                {lastNameHasError ? (
                    <p className="error-text">Please enter a last name.</p>
                ) : (
                    <EmptyDiv />
                )}
            </div>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="lastName"
                id="email"
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
            />
            {emailHasError ? (
                <p>Please enter a valid email address.</p>
            ) : (
                <EmptyDiv />
            )}
            <button type="submit" disabled={!formIsValid}>
                Submit
            </button>
        </form>
    );
};

export default HookForm;
