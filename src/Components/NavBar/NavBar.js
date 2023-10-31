import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./logo/Logo.jpeg"; 

const NavBar = () => {
    const logoStyle = {
        width: '70px', 
        height: 'auto'
    };
    
    const botonStyle = {
        width: "50px",
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={Logo} alt="nav-bar" style={logoStyle}/></a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/category/cuencos">Cuencos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/tazas">Tazas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/macetas">Macetas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/sets">Sets</Link>
                        </li>
                    </ul>
                    <div>
                        <button style={botonStyle}><CartWidget/></button>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
