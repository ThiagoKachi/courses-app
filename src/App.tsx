import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={ <Login /> } />
        {/* <Route path="/home" element={ <Register /> } /> */}
      </Routes>
    </>
  );
}

export default App;