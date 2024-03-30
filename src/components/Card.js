
const Card = ({ img, title, price, oldPrice, despreition }) => {
    return (
        <div className='card'>
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