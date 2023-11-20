import CardComponent from "./CardComponent";

const productArr = [
  { nameProduct: "Cherries", price: 4 },
  { nameProduct: "Strawberries", price: 5 },
  { nameProduct: "Oranges", price: 10 },
  { nameProduct: "Apples", price: 10 },
  { nameProduct: "Mangos", price: 10 },
  { nameProduct: "Kiwi", price: 10 },
  { nameProduct: "Pine", price: 10 },
  { nameProduct: "Watermelon", price: 10 },
  { nameProduct: "Grape", price: 10 },
];

const CardListComponent = (props: {
  quantityProduct: object;
  handleClick: (type: string, product: string) => void;
}) => {
  const cardList = productArr.map((product) => (
    <CardComponent
      handleClick={props.handleClick}
      quantityProduct={props.quantityProduct}
      key={product.nameProduct}
      product={product.nameProduct}
      price={product.price}
      quantity={props.quantityProduct[product.nameProduct.toLocaleLowerCase()]}
      isCart={true}
    />
  ));
  return <>{cardList}</>;
};
export default CardListComponent;
