import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.png'

function Header () {
    return(
        <div className="flex justify-between items-center mb-3">
            <div>
              <img src={Logo} className="my-7" />
            </div>
            <div>
               <nav className="space-x-20 text-xl text-primary">
                  <NavLink
                     to="/"
                     className={({ isActive }) => (isActive ? "underline" : "")}
                    >
                      Accueil
                  </NavLink>
                 <NavLink
                   to="About"
                   className={({ isActive }) => (isActive ? "underline" : "")}
                    >
                     A propos
                  </NavLink>
               </nav>
            </div>
        </div>
    )
}

export default Header