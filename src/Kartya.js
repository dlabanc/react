import React from 'react';
import "./kartya.css";

class Kartya extends React.Component {

    kattintasKezelo=()=>{
      console.log("kattintottam " + this.props.kep.id)
      this.props.aktKep(this.props.kep.id)  
    }

    render() {
        return (
            <div className="kartya" onClick={this.kattintasKezelo}>
                <h1>{this.props.kep.cim}</h1>
                <img src={this.props.kep.link} alt={this.props.kep.cim}></img>
                <p>{this.props.kep.leiras}</p>
            </div>
        )
    }

}

export default Kartya;