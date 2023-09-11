import { useState } from "react";
import { RiskTable } from "./RiskTable/RiskTable";
import {RiskModal} from "./RiskModal/RiskModal"
import Button from "react-bootstrap/Button"
import "./Risk.css"; 

export default function Risk() {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
    {
      name: "Running out of Time",
      description: "We're going down captain!",
      status: "Unaddressed"
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
    <div className="reqsTable">
      <RiskTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <Button variant="primary" className="btn" onClick={() => setModalOpen(true)}>
        Add Risk
      </Button>
      
      {modalOpen && 
      <RiskModal
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