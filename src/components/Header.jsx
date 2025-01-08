import { NavLink } from "react-router-dom"
const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>About</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Header