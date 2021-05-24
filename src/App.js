import React from 'react';
import './App.css';
import { 
  FixedMenu,
  Header,
  Article,
  Footer,
  Menu
} from './components'

function App() {
  return (
    <div className="App">
      <FixedMenu></FixedMenu>
      <div className="container">
        <Header></Header>
        <Menu></Menu>
        <Article></Article>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
