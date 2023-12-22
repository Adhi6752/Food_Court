import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
        <div className="header">
           <div>
            <h1>Food Villa</h1>
           </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/ ">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Header;