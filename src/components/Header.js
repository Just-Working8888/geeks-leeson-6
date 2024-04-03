import { useState } from "react"
import Form from "./Form"
import Cart from "./Cart"

const Header = ({ }) => {
    const [modal, setModal] = useState(false)
    const [cart, setCart] = useState(false)
    return (
        <header className="header">
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
                <button onClick={()=>setCart(true)}>cart</button>
                <button onClick={() => setModal(true)}>add produckt</button>
            </nav>
            {cart && <Cart />}
            {modal && <Form setModal={setModal} />}

        </header>
    )
}
export default Header