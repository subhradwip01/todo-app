import React from "react";
import "./Header.css"

const Header=()=>{
    var today = new Date();
    var dd = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    var yyyy = today.getFullYear();
    return (
      <div className="main-header">
        <h1>Today</h1>
        <div className="date">
          <div className="currYear">{yyyy}</div>
          <div className="currDate">{dd}</div>
          <div className="currMonth">{month}</div>
        </div>
      </div>
    );
}

export default Header;