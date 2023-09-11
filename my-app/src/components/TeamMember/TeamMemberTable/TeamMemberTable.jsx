import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./TeamMemberTable.css";



export const TeamMemberTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="member-table-wrapper">
      <table className="member-table">
        <thead>
          <tr>
            <th>Team Member</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.name}</td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => {editRow(idx); }}
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