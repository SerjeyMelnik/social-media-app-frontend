
import NavigationPanel from './components/Navigation/NavigationPanel';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavigationPanel />
        <Routes>
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
