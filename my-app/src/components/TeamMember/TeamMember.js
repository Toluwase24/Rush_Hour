import { useState } from "react";
import { TeamMemberTable } from "./TeamMemberTable/TeamMemberTable";
import {TeamMemberModal} from "./TeamMemberModal/TeamMemberModal"
import Button from "react-bootstrap/Button"
import "./TeamMember.css"; 

export default function TeamMember() {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
    {
      name: "test",
    }
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="teamMemberTable">
      <TeamMemberTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <Button variant="primary" className="btn" onClick={() => setModalOpen(true)}>
        Add Team Member
      </Button>
      
      {modalOpen && 
      <TeamMemberModal
          closeModal={() => {
            setRowToEdit(null);
            setModalOpen(false);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />}
        
    </div>
  );
}