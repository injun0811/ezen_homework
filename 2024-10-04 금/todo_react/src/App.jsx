import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styled/reset';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
            </BrowserRouter>
        </>
    );
};

export default App;
