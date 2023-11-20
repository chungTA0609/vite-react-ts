import { useState } from "react";
import CardListComponent from "./ListCardComponent";

const RightSideBar = (props: {
  quantityProduct: object;
  handleClick: (type: string, product: string) => void;
}) => {
  const [cashReceived, setCashReceived] = useState("");

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCashReceived(event.target.value);
  // };

  const cartTotal =
    props.quantityProduct.cherries * 4 +
    props.quantityProduct.strawberries * 5 +
    props.quantityProduct.oranges * 10;
  // return (
  // <>
  //   <div className="sidebar">
  //     <h2>Check out</h2>
  //     <p>
  //       Cart total: <span id="cartTotal">{cartTotal}</span>
  //     </p>
  //     <p>Enter Cash Received:</p>
  //     <div className="input-container">
  //       <input
  //         type="text"
  //         id="cashReceived"
  //         onChange={handleInputChange}
  //         value={cashReceived}
  //         placeholder="Type something..."
  //       />
  //       <span className="button">Submit</span>
  //     </div>
  //     <h4>Receipt</h4>
  //     <p>
  //       Cash received:{" "}
  //       <span id="receiveCash">
  //         {parseInt(cashReceived) ? cashReceived : 0}
  //       </span>
  //     </p>
  //     <p>
  //       Remaining balance:{" "}
  //       <span id="remainingBalance">
  //         {cashReceived - cartTotal ? cashReceived - cartTotal : ""}
  //       </span>
  //     </p>
  //     <p>Please additional amount.</p>
  //     <hr />
  //     <p>
  //       Cash received:{" "}
  //       <span id="receiveCashResult">
  //         {parseInt(cashReceived) ? cashReceived : 0}
  //       </span>
  //     </p>
  //     <p>
  //       Cash returned:{" "}
  //       <span id="cashReturn">
  //         {" "}
  //         {parseInt(cashReceived) && cashReceived - cartTotal > 0
  //           ? cashReceived - cartTotal
  //           : 0}
  //       </span>
  //     </p>
  //     <p>Thank you!</p>
  //   </div>
  // </>
  // );
  return (
    <>
      <div className="sidebar">
        <CardListComponent
          quantityProduct={props.quantityProduct}
          handleClick={props.handleClick}
        />
        <h2>Check out</h2>
        <p>
          Cart total: <span id="cartTotal">{cartTotal}</span>
        </p>
      </div>
    </>
  );
};

export default RightSideBar;
