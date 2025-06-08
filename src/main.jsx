import { createRoot } from "react-dom/client";
import Header from "./components/header/header";
import "./styles/styles.css";
import StatePlayground from "./components/playground/state";

const App = () => (
    <>
        <Header/>
        <div className="container">
            <StatePlayground/>
        </div>
    </>
        
)

createRoot(document.getElementById('root')).render(<App/>);