import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LatestPhotos from './components/LatestPhotos'
import About from './components/pages/About'
import Disclaimer from './components/pages/Disclaimer'
import Credits from './components/pages/Credits'
import Photo from './Photo';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                        <div className="content-block">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <Route exact path="/" component={LatestPhotos} />
                                    </div>
                                </div>
                            </div>
                            <Route path="/about" component={About} />
                            <Route path="/disclaimer" component={Disclaimer} />
                            <Route path="/credits" component={Credits} />
                            <Route path="/photo" component={Photo} />
                        </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App