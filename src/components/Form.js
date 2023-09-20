import React, { useState } from 'react';
function Form(){
  const onDateFocus = (e) => (e.target.type = "date");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const handleAdultsIncrement = (e) => {
    e.preventDefault();
    setAdults(adults + 1);
  };

  const handleAdultsDecrement = (e) => {
    e.preventDefault();
    if (adults > 0) {
      setAdults(adults - 1);
    }
  };

  const handleChildrenIncrement = (e) => {
    e.preventDefault();
    setChildren(children + 1);
  };

  const handleChildrenDecrement = (e) => {
    e.preventDefault();
    if (children > 0) {
      setChildren(children - 1);
    }
  };
    return(
        <div className="home2">
      <form className="formHome">
        <h1>FIND YOUR TOUR </h1>
        <label>
          From
          <select>
            <option value="">NewYork</option>
            <option value="">Califonia</option>
            <option value="">Chicago</option>
            <option value="">Florida</option>
          </select>
        </label>
        <label>
          To
          <select>
            <option value="">Chicago</option>
            <option value="">Califonia</option>
            <option value="">NewYork</option>
            <option value="">Florida</option>
          </select>
        </label>
        <div className="formFlex">
          <label className="inpDate">
            Depart Date
            <input
              onFocus={onDateFocus}
              type="text"
              placeholder="choose the date"
            />
          </label>
          <label>
            Duration
            <select>
              <option value="">Any length</option>
              <option value="">2 days</option>
              <option value="">3 days</option>
              <option value="">4 days</option>
            </select>
          </label>
        </div>
        <div className="formCustom">
          <label>
            Adults
            <div className="quantity-control">
              <button onClick={handleAdultsDecrement}>-</button>
              <span>{adults}</span>
              <button onClick={handleAdultsIncrement}>+</button>
            </div>
          </label>
          <label>
            Children
            <div className="quantity-control">
              <button onClick={handleChildrenDecrement}>-</button>
              <span>{children}</span>
              <button onClick={handleChildrenIncrement}>+</button>
            </div>
          </label>
        </div>
        <div className="buttonStyling">
        <button className="search-button">SEARCH FLIGHT</button>
        </div>
      </form>
    </div>
    );
}

export default Form;
