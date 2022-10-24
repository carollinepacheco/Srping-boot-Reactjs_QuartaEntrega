
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListPassagemComponent from './components/ListPassagemComponent';
import AddPassagemComponent from './components/AddPassagemComponent';


function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container"> 
          <Routes>
              <Route exact path = "/" element = {<ListPassagemComponent />}></Route>
              <Route path = "/passagens" element = {<ListPassagemComponent />}></Route>
              <Route path = "/add-passagem" element = {<AddPassagemComponent />}></Route>
              <Route path = "/edit-passagem/:id" element = {<AddPassagemComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
