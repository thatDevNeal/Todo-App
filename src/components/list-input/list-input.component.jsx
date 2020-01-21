import React, { useState } from "react";
import uuidv1 from "uuid/v1";

import "./list-input.styles.scss";

const ListInput = ({ listState, setListState }) => {
  const [inputState, setInputState] = useState("");

  const handleChange = event => {
    setInputState(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputState.trim()) {
      setListState([
        ...listState,
        { name: inputState, id: uuidv1(), date: new Date().toLocaleString(), complete: false }
      ]);
    }
    setInputState("");
  };

  return (
    <form>
      <label>
        What to do:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputState}
          placeholder="Task for right now..."
        />
      </label>
      <input
        className="form-submit-button"
        type="submit"
        value="submit"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default ListInput;
