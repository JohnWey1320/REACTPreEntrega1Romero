import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/Carrito';
import PaginaOne from './components/Pages/PaginaOne';


function App() {
  return (
    <div className="App">
      
<router>

<NavBar/>
<ItemListContainer texto='TIENDA OTAKU'/>


</router>



    </div>
  );
}

export default App;
