import React, { useContext } from 'react'
import { UserContext } from '../../Context/User'

const UsuarioEstado = () => {

  const { user, setUser, userData, setUserData } = useContext(UserContext);

  const onButtonClick = () => {
    setUser(false);
    setUserData(null);
  }

  return (
    <div className={user ? "" : "hidden"}>
      <div className="usuarioEstado">
        <table>
          <tbody>
            <tr>
              <td>
              <img src={userData ? userData.image : ""} className="usuarioImagen img-fluid rounded-circle" />
              </td>
              <td>
                <div>
                  <div>Bienvenid@ {userData ? userData.firstName + " " + userData.lastName : ""}</div>
                </div>
                <div>   
                  <input className={'inputButton loginButton'} type="button" onClick={onButtonClick} value={"Log Out"} 
                  style={{width: '50%', height: '30px', padding:'0'}} />   
                  <span> [{userData ? userData.role : ""}]</span>                
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsuarioEstado