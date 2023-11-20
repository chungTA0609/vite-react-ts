export function calculateSubtotal(arrObj: Array<object>) {
  const initialValue = 0;
  const subtotal = arrObj.reduce(
    (accumulator, currentValue) =>
      accumulator +
      currentValue.quantity * parseInt(currentValue.product.price.slice(1)),
    initialValue
  );
  return subtotal;
}