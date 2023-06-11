import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.png'

function Header () {
    return(
        <div className="flex justify-between items-center mb-3">
            <div>
              <img src={Logo} className="my-7 w-36 lg:w-48" />
            </div>
            <div>
               <nav className="mr-3 space-x-8 uppercase text-sm lg:space-x-28 md:text-lg lg:text-xl  text-primary">
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