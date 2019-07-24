import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import images from "./images.json"

// pick a random number up to but not including max
const pickRandom = max => Math.floor(Math.random() * max)

// pick out a random pup
const randomLegendId = () => images[pickRandom(images.length)].id


class App extends React.Component {
  
  state ={
    clicks: 0,
    score: 0,
    currentLegendId: randomLegendId()
  }

  //when image is clicked
  handleImageClick = id => {
    
    const newState = { clicks: this.state.clicks + 1 }

    // did the user click the current Legend
    if (id === this.state.currentLegendId) {
      // increase score
      newState.score = this.state.score + 1

  }
  this.setState(newState);
}
  
  render() {
  return (
    <div>
    <Navbar />
    <Header />
    <Main />
    <Footer />
    </div>
  );
  }
}

export default App;
