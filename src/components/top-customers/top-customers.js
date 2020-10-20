import React, { Component } from 'react';

class topCustomers extends Component {

    render() {
        let bgColor = "#fff";

        if (this.props.rank == 1)  bgColor = "firstRank" 
        else if(this.props.rank == 2) bgColor = "secondRank"
        else bgColor= "thirdRank" ;
        return (

            <div className="col-md-4">
                <h6 className="name">{this.props.name}</h6>
                <img className="img-responsive" src={this.props.img} />
                <div className={"gredientBox " + bgColor}>
                    <div className="contain">
                    <h2 className="rank" style={this.props.rank==1 ? {color:"#ffb100"} : this.props.rank==2 ? {color:"#0184fe"} : {color: "#6b4ee6"}}>{this.props.rank}</h2>
                    <h6 className="number"style={this.props.rank==1 ? {color:"#ffb100"} : this.props.rank==2 ? {color:"#0184fe"} : {color: "#6b4ee6"}} >{this.props.number}</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default topCustomers;