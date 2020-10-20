import React from 'react';

const topCustomersList = (props) => {
    return (
        <div className="single-person">
            <img src={props.img} />
            <span class="badge" 
            style={props.rank == 1 ? { color: '#ffb100' } :
             props.rank == 2 ? { color: '#0184FE' } :
             props.rank == 3 ? { color: '#6B4EE6' } :
             { color: '#b1b9bd' }}>{props.rank}</span>
            <div >
                <h6 className="name">{props.name}</h6>
                <h6 className="amount">{props.amount}</h6>
            </div>


        </div>
    );
}

export default topCustomersList;