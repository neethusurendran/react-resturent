import './App.css';
import Header from'./components/Header.js';
import Home from'./components/Home.js';

import { Container } from 'react-bootstrap';
import RestaurantDetails from './components/RestaurantDetails';
import{BrowserRouter as Router,Route}from 'react-router-dom';



function App() {
  return (
    
    <Router>
    <main className="py-3">
    <Header/>
      <Container>
        <Route exact path='/' component={Home}/>
        <Route path='/restaurants/:id' component={RestaurantDetails}/>
        </Container>
     {/* <Home/> */}
      </main>
      </Router>
  );
}

export default App;
