const ButtonComponent = (props: {
  isCart: boolean;
  product: string;
  handleClick: (type: string, product: string) => void;
}) => {
  const handleAddButtonClick = () => {
    // Call the parent component's callback function with the data
    props.handleClick("add", props.product);
  };
  const handleRemoveButtonClick = () => {
    // Call the parent component's callback function with the data
    props.handleClick("remove", props.product);
  };
  const handleClearButtonClick = () => {
    // Call the parent component's callback function with the data
    props.handleClick("clear", props.product);
  };

  if (props.isCart) {
    return (
      <>
        <span className="button" onClick={handleAddButtonClick}>
          +
        </span>
        <span className="button" onClick={handleRemoveButtonClick}>
          -
        </span>
        <span className="button" onClick={handleClearButtonClick}>
          Remove
        </span>
      </>
    );
  }
  return (
    <span className="button" onClick={handleAddButtonClick}>
      Add to cart
    </span>
  );
};
export default ButtonComponent;
