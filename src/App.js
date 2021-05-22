import React from 'react';
import './App.css';
import { 
  FixedMenu,
  Header,
  Article,
  Footer
} from './components'

function App() {
  return (
    <div className="App">
      <FixedMenu></FixedMenu>
      <div className="container">
        <Header></Header>
        <Article></Article>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
