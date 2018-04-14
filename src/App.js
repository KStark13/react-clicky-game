import React from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron';
import GameContainer from './components/GameContainer/GameContainer';
import images from './images.json';
import ImageCard from './components/ImageCard/ImageCard';

const App = () =>  (
      <div>
         <Jumbotron />
         <GameContainer />
      </div>
  );
 

export default App;
