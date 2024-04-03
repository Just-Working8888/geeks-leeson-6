import { useTheme } from "../App"
import Counter from "./counter"

const Card = ({ img, title, price, oldPrice, despreition }) => {
    const isDarkMode = useTheme()
    return (
        <div className={`card ${isDarkMode ? "dark" : "ligth"}`}>
            <img src={img} />
            <h1>{title}</h1>
            <p> {despreition}</p>
            <div>
                <b>{price}$</b>
                <span>{oldPrice}</span>
            </div>
            <button type="button">add to cart</button>
       
        </div>
    )
}
export default Card