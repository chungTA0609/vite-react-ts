import ButtonComponent from "./ButtonComponent";

function Image(props: { imageUrl?: string; product: string }) {
  if (!props.imageUrl) {
    return null;
  }
  return <img src={props.imageUrl} alt={`${props.product} Image`} />;
}
function Info(props: { price: number; quantity?: number; product: string }) {
  if (props.quantity !== 0 && !props.quantity) {
    return (
      <>
        <h2>Carton of {props.product}</h2>
        <p>Price: ${props.price}</p>
      </>
    );
  }
  return (
    <>
      <div className="cart-info">
        <h2>Carton of {props.product}</h2>
        <div className="cart-info-element">
          <p>Price: ${props.price}</p>
          <p>
            Quantity: <span id="cherries">{props.quantity}</span>
          </p>
          <p>
            Total:
            <span id="cherriesTotal">{" " + props.quantity * props.price}</span>
          </p>
        </div>
      </div>
    </>
  );
}
const CardComponent = (props: {
  product: string;
  price: number;
  imageUrl?: string;
  quantity?: number;
  isCart: boolean;
  quantityProduct: object;
  handleClick: (type: string, product: string) => void;
}) => {
  return !props.isCart || (props.isCart && props.quantity) ? (
    <>
      <div className="product-card" id={props.product}>
        <Image imageUrl={props.imageUrl} product={props.product} />
        <div className="info">
          <Info
            product={props.product}
            price={props.price}
            quantity={props.quantity}
          />
          <ButtonComponent
            product={props.product}
            isCart={props.isCart}
            handleClick={props.handleClick}
          />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};
export default CardComponent;
