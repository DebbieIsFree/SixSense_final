import React, {Component} from 'react';
import './App.css';
import Menu from './MenuBar/Menu'
import Zoom from './Zoom/Zooming'
import StoreImgList from './Zoom/StoreImgList'
import ReactDOM from 'react-dom';

import Swipe from './Swipe/Swipe'
import Deck from './Deck/Deck'



class App extends Component {
  render(){
    const name = 'react';
    // return (
    //   <div className="react">
    //     {/* <div className="MenuBar"><Menu/></div> */}
    //     {/* <div className="Zoom"><Zoom/></div> */}
    //     {/* <div className="container mt-5 carousel">
    //         <h1 className="slider_title">Exchange_gu</h1>
    //           <StoreImgList />
    //     </div> */}

    //     {/* <Swipe/> */}
    //     <Deck />
    // </div>
    // );
    return <Menu />
  }
}


export default App;

