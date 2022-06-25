import BasicForm from "./components/Native/BasicForm";
import ReducerForm from "./components/Native/ReducerForm";
import ComponentForm from "./components/Formik/ComponentForm";
import HookForm from "./components/Formik/HookForm";
import CompWithHookForm from "./components/Formik/CompWithHookForm";
import Basic from "./components/ReactHookForm/Basic";

const App = () => {
    return (
        <div className="app">
            <BasicForm />
            {/* <ReducerForm /> */}
            {/* <ComponentForm /> */}
            {/* <HookForm /> */}
            {/* <CompWithHookForm /> */}
            {/* <Basic /> */}
        </div>
    );
};

export default App;
