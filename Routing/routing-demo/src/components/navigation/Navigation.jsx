import { Link } from 'react-router-dom';

const Navigation = () => {
    
    
    return (
        <>
            <nav>
                <li>About</li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link to="/stronger-char">Stronger Char</Link>
                </li>
            </nav>
        </>
    );
}

export default Navigation;