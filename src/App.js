import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';


// Pages
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import SinglePage from "./pages/Singlepage";

import './index.css';

const App = () => {
    return ( 
        <Router>
            {/* Nabvar */}
            <Navbar />
            <div classname="container">
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route path="/singleshow/:id" component={SinglePage} />
                { /*Homepage Route */ }
                {/* About page Route */ }
                {/* Single show details page Route */}
                </Switch>
            </div>
        </Router>
     );
}
 
export default App;