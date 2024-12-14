import { React, useState, useContext } from 'react';
import { UserContext } from '../Context/User'
import { Link } from 'react-router-dom';
import SportCenterLogo from '../sportcenterlogo.png';
import UsuarioEstado from './security/UserState';

function Menu() {

    const { user } = useContext(UserContext);


    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [usuarioImagen, setUsuarioImagen] = useState('');
    const [usuarioRole, setUsuarioRole] = useState('');

    const userChanged = (e) => {
        let token = localStorage.getItem("token");
        if (token != "") {
            let user = localStorage.getItem("user");
            user = JSON.parse(user);
            setLoggedIn(true);
            setUsername(user.firstName + " " + user.lastName);
            setUsuarioImagen(user.image);
            setUsuarioRole(user.role)
        }
        else {
            setLoggedIn(false);
            setUsername("");
            setUsuarioImagen("");
        }
    };

    const userLogout = (e) => {
        setLoggedIn(false);
        localStorage.setItem("token", "");
        localStorage.setItem("user", "");
        userChanged();
    };

    const userLogin = (e) => {
        setLoggedIn(true);
        localStorage.setItem("token", "");
        localStorage.setItem("user", "");
    };

    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={SportCenterLogo} className="img-fluid rounded-circle" width="70" height="70" />
                            </div>
                            <div className="col-md-8">
                                Administración de Centros Deportivos
                                <h6 className='fw-bold fst-italic' >Administración deportiva en manos expertas</h6>
                            </div>
                        </div>
                    </a>
                    <div className={user ? "" : "hidden"}>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Auto Gestion
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item" to='registroUsuario'>Registro de Usuarios</Link>
                                        </li>
                                        <li><hr className='downdown-divider'/></li>
                                        <li>
                                            <Link className="dropdown-item" to='reservaCanchas'>Reservas de Canchas</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='calendarios'>Calendarios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='mostrarReservas'>Mostrar Reservas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='acercade'>Acerca de...</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <UsuarioEstado />
                </div>
            </nav>
        </div>
    )
}

export default Menu;