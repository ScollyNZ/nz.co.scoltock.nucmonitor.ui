import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';

class App extends Component {
  render() {
    return (

      <div className="App">
        <h2>Nuc Monitor</h2>
        <Nuc/>
        <Nuc/>
        <Nuc/>
        <Nuc/>
        <Nuc/>
      </div>


    );
  }
}

class Nuc extends Component{
  render(){
    return (
      <div className="nuc">
      <Rectangle width={180} height={510} fill={{color:'#FFFFFF'}} stroke={{color:'#000000'}} strokeWidth={1}/>
      <div style={{position:'absolute', top:'20', left:'20', 'z-index':'-1'}}><Ellipse rx={70} ry={240} fill={{color:'#FF0000'}}/></div>
      <div style={{position:'absolute', top:'40', left:'40', 'z-index':'-1'}}><Ellipse rx={50} ry={220} fill={{color:'#EE0000'}}/></div>
      <div style={{position:'absolute', top:'60', left:'60', 'z-index':'-1'}}><Ellipse rx={30} ry={200} fill={{color:'#DD0000'}}/></div>
      <div style={{position:'absolute', top:'80', left:'80', 'z-index':'-1'}}><Ellipse rx={10} ry={180} fill={{color:'#CC0000'}}/></div>
      <div style={{position:'absolute',  top:'20', left:'80'}}><Circle r={10} /></div>
      <div style={{position:'absolute',  top:'255', left:'20'}}><Circle r={10} /></div>
      <div style={{position:'absolute',  top:'255', left:'80'}}><Circle r={10} /></div>
      <div style={{position:'absolute',  top:'255', left:'140'}}><Circle r={10} /></div>
      <div style={{position:'absolute',  top:'470', left:'80', 'z-index':'1'}}><Circle r={10}/></div>
      </div>
    ); 
  }
}

export default App;
