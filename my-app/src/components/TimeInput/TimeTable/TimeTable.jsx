import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./TimeTable.css";



export const TimeTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="time-table-wrapper">
      <table className="time-table">
        <thead>
          <tr>
            <th>Member</th>
            <th className="expand">Requirement</th>
            <th>Phase</th>
            <th>Period</th>
            <th>Hours</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.name}</td>
                <td className="expand">{row.req}</td>
                <td>{row.phase}</td>
                <td>{row.period}</td>
                <td>{row.hours}</td>
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