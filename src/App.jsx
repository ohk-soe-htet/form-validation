// import HookForm from "./components/Native/HookForm";
import ReducerForm from "./components/Native/ReducerForm";
import ComponentForm from "./components/Formik/ComponentForm";
import HookForm from "./components/Formik/HookForm";
import CompWithHookForm from "./components/Formik/CompWithHookForm";
import BasicForm from "./components/ReactHookForm/BasicForm";
import ResetForm from "./components/ReactHookForm/ResetForm";
import ErrorForm from "./components/ReactHookForm/ErrorForm";

const App = () => {
    return (
        <div className="app">
            {/* <BasicForm /> */}
            {/* <ReducerForm /> */}
            {/* <ComponentForm /> */}
            {/* <HookForm /> */}
            {/* <CompWithHookForm /> */}
            {/* <BasicForm /> */}
            {/* <ResetForm /> */}
            <ErrorForm />
        </div>
    );
};

export default App;
