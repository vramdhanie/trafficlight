import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Light from "./components/light";
import { connect } from 'react-redux';
import { switchLight } from "./actions";

class App extends Component {

  switch(id) {
    this.props.dispatch(switchLight(id));
  }

  render() {

    const lights = this.props.lights
        .map(light => <Light key={light.id} {...light} onClick={id => this.switch(id)}/>);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Traffic Light</h1>
        </header>

        <div className="container">
          <div className="traffic_light">
            {lights}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lights: state.lights
});

export default connect(mapStateToProps)(App);
