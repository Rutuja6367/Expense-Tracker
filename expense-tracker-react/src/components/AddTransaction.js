import React, {useState} from 'react'

export const AddTransaction = () =>{

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)

    return(
        <div>
            <h3>
                Add New Transaction
            </h3>
            <form id="form">
                <div>
                     <label htmlFor="text">Text</label>
                     <input type="text" value={text} onChange={(e)=> setText(e.target.value)} id="text" placeholder='Enter Text....'></input>
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} id="amount" placeholder='Enter Amount...'/>
                </div>
                <button className='btn'>
                    Add Transaction
                    </button> 

            </form>
        </div>
    )
}