import React from 'react'

export const AddTransaction = () =>{
    return(
        <div>
            <h3>
                Add New Transaction
            </h3>
            <form id="form">
                <div>
                     <label htmlFor="text">Text</label>
                     <input type="text" id="text" placeholder='Enter Text....'></input>
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" id="amount" placeholder='Enter Amount...'/>
                </div>
                <button className='btn'>
                    Add Transaction
                    </button> 

            </form>
        </div>
    )
}