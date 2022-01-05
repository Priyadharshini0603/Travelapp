import React from "react";

export const Footer = () => {
  return (
    <div className="form">
      <div>
        <select class="browser-default">
          <option value="" disabled selected>
            Bangalore
          </option>
          <option value="1">Goa</option>
          <option value="2">Delhi</option>
          <option value="3">Hamphi</option>
        </select>
      </div>

      <div class="date">
        <input type="date" placeholder="Check In"></input>
      </div>

      <div class="date">
        <input type="date" placeholder="check Out"></input>
      </div>
      <div class="search">
        <i class="material-icons">
          search
          <input type="text" className="searchbar" placeholder="Search" />
        </i>
      </div>
    </div>
  );
};

export default Footer;
