import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const inputValue = event.target.value;
        if (isNaN(inputValue)) {
            alert('Please enter a valid number.')
        }
        else {
            setNewBudget(inputValue);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input id='budgetId' type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};



export default Budget;