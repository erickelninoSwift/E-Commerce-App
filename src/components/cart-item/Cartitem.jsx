import "./cart-item.styles.scss";
const CartItem = ({ data }) => {
  const { name, quantity, imageUrl, price } = data;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} style={{ objectFit: "cover" }} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price * quantity}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
