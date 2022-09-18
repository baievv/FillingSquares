import React, { useEffect, useState } from "react";
import "./square-table.css";
import { createTable } from "../utils-table/create-table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { changeTable } from "../utils-table/change-table";

const SquareTable = (props) => {
  const [exTable, setExTable] = useState([]);

  let sizeTable = props.tableSize;

  const trHeight = { height: `${650 / props.tableSize}px` };

  const onMouseOver = (e) => {
    setExTable(changeTable(exTable, e.target.id));
    props.setChange(exTable);
  };

  useEffect(() => {
    setExTable(createTable(props.tableSize));
  }, [sizeTable]);

  return (
    <TableContainer className="table-place">
      <Table className="square-table">
        <TableBody className="square-table-body" onMouseOver={onMouseOver}>
          {exTable.map((row) => (
            <TableRow
              key={row[0].idx}
              sx={{ border: 1, borderColor: "black", height: trHeight }}>
              {row.map((cell) => (
                <TableCell
                  component="td"
                  key={cell.id}
                  id={cell.id}
                  scope="row"
                  sx={{
                    border: 1,
                    background: cell.color,
                    width: { trHeight },
                  }}></TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SquareTable;
