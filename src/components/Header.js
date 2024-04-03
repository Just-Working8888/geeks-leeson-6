import { useState } from "react"
import Form from "./Form"
import Cart from "./Cart"
import { useTheme, useThemeToggle } from "../App"

const Header = ({ }) => {
    const [modal, setModal] = useState(false)
    const [cart, setCart] = useState(false)
    const isDarkMode = useTheme()
    const toggleTheme = useThemeToggle()
    console.log(isDarkMode);
    return (
        <header className={`header ${isDarkMode ? "dark" : "ligth"}`}>
            <nav className="main_nav">
                <div>Logo</div>
                <div>
                    <ul>
                        <li>home</li>
                        <li>about us</li>
                        <li>login</li>
                        <li>contact</li>
                        <li>partners</li>
                        <li>profile</li>
                    </ul>
                </div>
                <button onClick={toggleTheme}>mode</button>
                <button onClick={() => setCart(true)}>cart</button>
                <button onClick={() => setModal(true)}>add produckt</button>
            </nav>
            {cart && <Cart />}
            {modal && <Form setModal={setModal} />}

        </header>
    )
}
export default Header