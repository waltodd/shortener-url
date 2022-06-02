import React, { useState } from "react";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <h1>
        Link <span>Encurtador</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Passar um link para encurtá-lo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>encurtar</button>
      </div>
    </div>
  );
};

export default InputShortener;
