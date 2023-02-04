// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export class App extends Component {

  state = {
    progress : 0,
  }

  setProgress = (progress) => {
    this.setState({progress : progress})
  }


  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
        <Navbar />
          <Switch>
            <Route exact key="general" path="/">
              <News  setProgress={this.setProgress}  pageSize={30} country={"in"} category={"general"} />
            </Route>
            <Route exact key="business" path="/business">
              <News  setProgress={this.setProgress}  pageSize={30} country={"in"} category={"business"} />
            </Route>
            <Route exact key="entertainment"path="/entertainment">
              <News  setProgress={this.setProgress}  pageSize={30} country={"in"} category={"entertainment"} />
            </Route>
            <Route exact key="health" path="/health">
              <News  setProgress={this.setProgress}  pageSize={30} country={"in"} category={"health"} />
            </Route>
            <Route exact key="science" path="/science">
              <News  setProgress={this.setProgress}  pageSize={30} country={"in"} category={"science"} />
            </Route>
            <Route exact key="sports" path="/sports">
              <News  setProgress={this.setProgress}  pageSize={30} country={"in"} category={"sports"} />
            </Route>
            <Route exact key="technology" path="/technology">
              <News  setProgress={this.setProgress}  pageSize={30} country={"in"} category={"technology"} />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
