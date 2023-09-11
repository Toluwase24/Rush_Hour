import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./ReqsTable.css";

export const ReqsTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="reqs-table-wrapper">
      <table className="reqs-table">
        <thead>
          <tr>
            <th>Requirement ID</th>
            <th className="expand">Description</th>
            <th>Requirement Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const statusText = row.type.charAt(0).toUpperCase() + row.type.slice(1);
            return (
              <tr key={idx}>
                <td>{row.id}</td>
                <td className="expand">{row.description}</td>
                <td>
                  <span className={`label label-${row.type}`}>
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