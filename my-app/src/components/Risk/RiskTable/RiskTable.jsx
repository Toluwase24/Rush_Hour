import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./RiskTable.css";



export const RiskTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="risk-table-wrapper">
      <table className="risk-table">
        <thead>
          <tr>
          <th>Risk Name</th>
            <th className="expand">Description</th>
            <th>Risk Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {rows.map((row, idx) => {
            const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);
            return (
              <tr key={idx}>
                <td>{row.name}</td>
                <td className="expand">{row.description}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                  {statusText}
                  </span>
                </td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};