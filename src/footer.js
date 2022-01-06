import React from "react";

export const Footer = () => {
  return (
    <div className="form">
      <div>
     <label>Destination</label>
        <select class="browser-default">
          <option value="" disabled selected>
            Bangalore
          </option>
          <option value="1">Goa</option>
          <option value="2">Delhi</option>
          <option value="3">Hamphi</option>
        </select>
      </div>
      
      <div >
        <label>Check-In</label>
       <div class="date">
        <input  type="date" placeholder="Check In"></input></div>
      </div>
     
      
      <div>
        <label>Check-Out</label>
       <div class="date">
        <input  type="date" placeholder="Check Out"></input></div>
      </div>
      
      <div>
        <br/>
      <div class="search">
        <i class="material-icons">
          search
          <input type="text" className="searchbar" placeholder="Search" />
        </i>
        </div></div>
    </div>
  );
};

export default Footer;
