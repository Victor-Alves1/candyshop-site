import React from 'react';
import NewCandyInput from './AddCandy';
import bgphoto from './img/bgphoto.webp'
import chefImg from './img/chef.png'

const App =() => {


  return (
    <div className="App">
      <img className='chefinho' src={chefImg} alt="Imagem de um chefe de cozinha" />
      <img className='bgphoto' src={bgphoto} alt="plano de fundo, imagem cheia de cupcakes" />
      <h1>Cake site</h1>
      
      <NewCandyInput />
      
    </div> 
  )
}

export default App
