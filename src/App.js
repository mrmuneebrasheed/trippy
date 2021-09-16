import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Hotels from "./components/Hotels";
import "bootstrap/dist/css/bootstrap.min.css";
import HotelPage from "./components/HotelPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/hotels/city/paris">
                    <Hotels city="paris"></Hotels>
                </Route>
                <Route path="/hotels/city/rome">
                    <Hotels city="rome"></Hotels>
                </Route>
                <Route path="/hotels/city/london">
                    <Hotels city="london"></Hotels>
                </Route>
                <Route path="/hotels/city/new-york">
                    <Hotels city="new-york"></Hotels>
                </Route>
                <Route path="/hotels/city/nice">
                    <Hotels city="nice"></Hotels>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
