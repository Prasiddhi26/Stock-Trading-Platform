import React from "react";
import { useState } from "react";

function Brokerage() {
  const equity = [
    {
      label: "Brokerage",
      equityDelivery: "Zero Brokerage",
      equityIntraday: "	0.03% or Rs. 20/executed order whichever is lower",
      fAndOFutures: "0.03% or Rs. 20/executed order whichever is lower",
    },
    {
      label: "STT/CTT",
      equityDelivery: "0.1% on buy & sell",
      equityIntraday: "0.025% on the sell side",
      fAndOFutures: "0.02% on the sell side",
    },
    {
      label: "SEBI charges",
      equityDelivery: "₹10 / crore",
      equityIntraday: "₹10 / crore",
      fAndOFutures: "₹10 / crore",
    },
  ];
  return (
    <div className="container">
      <table className="table table-bordered table-striped text-center ">
        <thead>
          <tr>
            <th> </th>
            <th> Equity delivery</th>
            <th>Equity intraday</th>
            <th> F&O - Futures</th>
          </tr>
        </thead>
        <tbody>

          {equity.map((item, index) => (
            <tr key={index}>
              <td>{item.label}</td> 
              <td>{item.equityDelivery}</td>
              <td>{item.equityIntraday}</td>
              <td>{item.fAndOFutures}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Brokerage;
