import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [newFormState,setNewFormState]=useState(false);
  const switchState=()=>{
    setNewFormState((state)=>!state);
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  if(!newFormState)
  return(<div className="new-expense">
    <button onClick={switchState}>
     Add Expense
    </button>
  </div>);
  else
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stateSwitch={switchState}/>
    </div>
  );
};

export default NewExpense;
