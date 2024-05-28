import React, { useContext, useSelector } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
  const { dispatch, currency } = useContext(AppContext);

  const handleNewCurrency = (event) => {
    const newCurrency = event.target.value;
    dispatch({ 
        type: 'SET_CURRENCY', 
        payload: newCurrency,
    }); // Update the currency
};

return (
    <div className="alert alert-success">
        <select className = "form-control" value={currency} onChange={handleNewCurrency} style={{backgroundColor: 'lightgreen'}}>

        <option value="£">£ GB Pound</option>
        <option value="₹">₹ Rupee</option>
        <option value="$">$ US Dollar</option>
        <option value="€">€ Euro</option>
        <option value="¥">¥ Japanese Yen</option>
        <option value="₽">₽ Russian Ruble</option>
        <option value="₩">₩ Korean Won</option>


        </select>
    </div>
);

}

export default CurrencyDropdown;