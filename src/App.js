import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import HotelPage from "./components/HotelPage";

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <HotelPage />
        </div>
    );
}

export default App;
