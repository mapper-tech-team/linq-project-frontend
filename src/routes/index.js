import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ProjectForm from "../pages/ProjectForm";
import useAuth from "../hooks/useAuth";
import MyProjects from "../pages/MyProjects";
import About from "../pages/About";
import ProjectDetails from "../pages/ProjectDetails";
import ForgotPassword from "../pages/ForgotPassword";


const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Home />}/> {/*lembrar disso*/}
                    <Route path="/signin" element={<Signin />} />
                    <Route exact path="/signup" element={<Signup />}/>
                    <Route path="/createProject" element={<ProjectForm />}/>
                    <Route path="/myProjects" element={<MyProjects />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="projectDetails/:id" element={<ProjectDetails />} />
                    <Route path="/" element={<Signin />} />
                    <Route path="/linkedin" element={<ProjectDetails />} />
                    <Route path="forgotPass" element={< ForgotPassword />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;