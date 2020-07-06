import React, {useEffect} from 'react';

//Component Imports
import Navigation from "./components/Navigation";
import TweetList from "./components/TweetList";

import './App.css';

function App() {
    return (
    <div className="bg-light">
        <Navigation/>
        <TweetList/>
    </div>
    );
}

export default App;
