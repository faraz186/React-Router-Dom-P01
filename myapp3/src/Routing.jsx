import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './routing.css';
import Login from './screens/login'
import SignUp from "./screens/signUp";
import Dashboard from './screens/dashboard'

export default function AppRouter()
{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<>
                    <h1 className="error">Error 404 Page not Found </h1>
                    <img className="image" src="https://p.kindpng.com/picc/s/164-1646889_error-png-page-something-went-wrong-png-transparent.png" alt="" />
                    <h2 className="connect">Connection not Required</h2>
                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem magnam deserunt illo tempore, numquam adipisci ea. Animi suscipit at quod minima ipsum ab magnam asperiores, quos ipsa, distinctio odio impedit ea nam commodi dolores eius voluptatibus. Laborum voluptatem reprehenderit ratione quod! Minima magni ullam odit modi id eveniet sint facere sapiente voluptates. Vero quia ratione magnam aspernatur ducimus ex.
                    </p>
                    </>} />
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route />
                </Routes>
            </Router>
        </div>
    )
}