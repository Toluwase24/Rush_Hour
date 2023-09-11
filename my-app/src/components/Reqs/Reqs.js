import { useState } from "react";
import { ReqsTable } from "./ReqsTable/ReqsTable";
import {ReqsModal} from "./ReqsModal/ReqsModal"
import Button from "react-bootstrap/Button"
import "./Reqs.css"; 

export default function Reqs() {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
    {
      id: "1",
      description: "test",
      type: "Functional"
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
      <ReqsTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <Button variant="primary" className="btn" onClick={() => setModalOpen(true)}>
        Add Requirement
      </Button>
      
      {modalOpen && 
      <ReqsModal
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