'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { keyframes } from '@emotion/react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// 🔹 Blinking effect for dynamic seats
const blink = keyframes`
  50% { opacity: 0; }
`;

// Course array
const courses = [
  { title: "CISA - Certified Information Systems Auditor", date: "09 Aug - 14 Sep", time: "09:00 - 13:00 IST", mode: "ONLINE", schedule: "Weekend", status: "1 SEATS LEFT" },
  { title: "Data Protection Officer (DPO)", date: "11 Aug - 26 Aug", time: "20:00 - 22:00 IST", mode: "ONLINE", schedule: "Weekday", status: "3 SEATS LEFT" },
  { title: "CompTIA Security+ SYO-701", date: "16 Aug - 28 Sep", time: "09:00 - 13:00 IST", mode: "ONLINE", schedule: "Weekend", status: "BATCH FULL" },
  { title: "RSA Archer", date: "16 Aug - 14 Sep", time: "19:00 - 22:00 IST", mode: "ONLINE", schedule: "Weekend", status: "ENROLL NOW" },
  { title: "AWS Combo", date: "30 Aug - 01 Nov", time: "19:00 - 23:00 IST", mode: "OFFLINE", schedule: "Weekend", status: "ENROLL NOW" },
  { title: "Certified In Cybersecurity (CC)", date: "18 Aug - 28 Aug", time: "20:00 - 22:00 IST", mode: "ONLINE", schedule: "Weekday", status: "2 SEATS LEFT" }
];

// Define columns
const columns = [
  { label: "Course Title", dataKey: "title", width: 300 },
  { label: "Date", dataKey: "date", width: 140 },
  { label: "Time", dataKey: "time", width: 160 },
  { label: "Mode", dataKey: "mode", width: 120 },
  { label: "Schedule", dataKey: "schedule", width: 120 },
  { label: "Status", dataKey: "status", width: 180 }
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          style={{ width: column.width, fontWeight: 'bold' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => {
        if (column.dataKey === "status") {
          let statusButton = null;

          if (row.status === "BATCH FULL") {
            statusButton = (
              <Button variant="contained" disabled sx={{ backgroundColor: "#9e9e9e", boxShadow: "none" }}>
                {row.status}
              </Button>
            );
          } else if (row.status === "ENROLL NOW") {
            statusButton = (
              <Button variant="contained" sx={{ backgroundColor: "green", color: "white", boxShadow: "none" }}>
                {row.status}
              </Button>
            );
          } else {
            statusButton = (
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor:"black",
                  fontWeight: "bold",
                  borderColor: "black",
                  animation: `${blink} 1s infinite`,
                  boxShadow:"none"
                }}
              >
                {row.status}
              </Button>
            );
          }

          return <TableCell key={column.dataKey}>{statusButton}</TableCell>;
        }

        if (column.dataKey === "mode") {
          return (
            <TableCell key={column.dataKey}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: row.mode === "ONLINE" ? "#04f3243e" : "#ff370050",
                  color: row.mode === "ONLINE" ? "#00740fff" : "#ff0000ff",
                  padding: "5px 10px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  boxShadow:"none"
                }}
              >
                {row.mode}
              </Button>
            </TableCell>
          );
        }

        return <TableCell key={column.dataKey}>{row[column.dataKey]}</TableCell>;
      })}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 550, width: '90%', margin: "30px 5%" }}>
      {/* 🔹 Custom Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px"
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>Filter by</Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Upcoming Batches For Diverse Learning Goals"
          sx={{ backgroundColor: "white", borderRadius: "4px", width: "40%" }}
        />
        <TextField
          select
          variant="outlined"
          size="small"
          defaultValue="July"
          sx={{ backgroundColor: "white", borderRadius: "4px", width: "150px" }}
        >
          <MenuItem value="July">July</MenuItem>
          <MenuItem value="August">August</MenuItem>
          <MenuItem value="September">September</MenuItem>
        </TextField>
      </Box>

      {/* 🔹 Table */}
      <TableVirtuoso
        data={courses}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
