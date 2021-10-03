import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CourseHome from "./components/CourseHome/CourseHome";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/course-home">
                        <CourseHome></CourseHome>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
