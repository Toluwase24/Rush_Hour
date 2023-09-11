import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {TimeTable} from './TimeTable/TimeTable';
import {TimeModal} from './TimeModal/TimeModal';


export default function TimeInput(){
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
  {
    name: "David Higgenbottom",
    req: "Making Ladders",
    phase: "Testing",
    period: "Daily",
    hours: 1,
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
    <TimeTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
    <Button variant="primary" className="btn" onClick={() => setModalOpen(true)}>
      Add Work
    </Button>
    
    {modalOpen && 
    <TimeModal
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