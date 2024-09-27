import { Link } from 'react-router-dom';
import { CommonContainer } from './style';

const Nav = () => {
    return (
        <CommonContainer>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Main</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/gellery">Gellery</Link>
                    </li>
                    <li>
                        <Link to="/board">Board</Link>
                    </li>
                </ul>
            </div>
        </CommonContainer>
    );
};

export default Nav;
