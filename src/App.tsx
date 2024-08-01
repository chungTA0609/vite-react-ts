import React, { useState } from "react";

const MyComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        data-testid="input"
      />
      <select
        value={dropdownValue}
        onChange={handleDropdownChange}
        data-testid="dropdown"
      >
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <button onClick={handleButtonClick} data-testid="button">
        Click me
      </button>
      {buttonClicked && <p data-testid="result">Button clicked!</p>}
    </div>
  );
};

export default MyComponent;
