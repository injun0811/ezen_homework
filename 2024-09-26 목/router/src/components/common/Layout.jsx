import { PagesContainer } from '../../pages/style';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <PagesContainer>
            <Nav />
            <Header />
            <div className="pages">{children}</div>
            <Footer />
        </PagesContainer>
    );
};

export default Layout;
