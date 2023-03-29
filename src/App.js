import logo from './logo.svg';
import './App.css';
import Library from './components/Library';
import { Route, Routes } from 'react-router-dom';
import ViewBook from './components/ViewBook';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className="App">
      <Library/>
      <Routes>
        <Route path='/' element={<ViewBook/>}/>
        <Route path='/add' element={<AddBook data={{Bookno:'',Bookname:''}}/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
