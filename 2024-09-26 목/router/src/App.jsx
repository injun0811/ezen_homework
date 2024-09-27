import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styled/reset';

import Main from './pages/Main';
import Board from './pages/Board';
import Gellary from './pages/Gellary';
import About from './pages/About';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/board" element={<Board />} />
                    <Route path="/gellery/" element={<Gellary />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
