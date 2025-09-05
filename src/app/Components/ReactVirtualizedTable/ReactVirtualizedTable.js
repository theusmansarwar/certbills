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
import useMediaQuery from '@mui/material/useMediaQuery';

// 🔹 Blinking effect for dynamic seats
const blink = keyframes`
  50% { opacity: 0; }
`;

// Course data categorized by month
const allCourses = {
  August: [
    { title: "CISA - Certified Information Systems Auditor", date: "09 Aug - 14 Sep", time: "09:00 - 13:00 IST", mode: "ONLINE", schedule: "Weekend", status: "ENROLL NOW" },
    { title: "Data Protection Officer (DPO)", date: "11 Aug - 26 Aug", time: "20:00 - 22:00 IST", mode: "ONLINE", schedule: "Weekday", status: "3 SEATS LEFT" },
    { title: "Certified In Cybersecurity (CC)", date: "18 Aug - 28 Aug", time: "20:00 - 22:00 IST", mode: "ONLINE", schedule: "Weekday", status: "BATCH FULL" },
  ],
  September: [
    { title: "CompTIA Security+ SYO-701", date: "16 Sep - 28 Sep", time: "09:00 - 13:00 IST", mode: "ONLINE", schedule: "Weekend", status: "BATCH FULL" },
    { title: "RSA Archer", date: "16 Sep - 14 Oct", time: "19:00 - 22:00 IST", mode: "ONLINE", schedule: "Weekend", status: "ENROLL NOW" },
  ],
  October: [
    { title: "AWS Combo", date: "01 Oct - 01 Nov", time: "19:00 - 23:00 IST", mode: "OFFLINE", schedule: "Weekend", status: "ENROLL NOW" },
    { title: "CISM - Certified Information Security Manager", date: "05 Oct - 20 Oct", time: "18:00 - 21:00 IST", mode: "ONLINE", schedule: "Weekday", status: "5 SEATS LEFT" },
  ]
};

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

function StatusButton({ status }) {
  if (status === "BATCH FULL") {
    return (
      <Button variant="contained" disabled sx={{ backgroundColor: "#9e9e9e", boxShadow: "none" }}>
        {status}
      </Button>
    );
  }
  if (status === "ENROLL NOW") {
    return (
      <Button variant="contained" sx={{ backgroundColor: "green", color: "white", boxShadow: "none" }}>
        {status}
      </Button>
    );
  }
  return (
    <Button
      variant="contained"
      sx={{
        color: "white",
        backgroundColor: "black",
        fontWeight: "bold",
        borderColor: "black",
        animation: `${blink} 1.2s infinite`,
        boxShadow: "none"
      }}
    >
      {status}
    </Button>
  );
}

function ModeButton({ mode }) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: mode === "ONLINE" ? "#04f3243e" : "#ff370050",
        color: mode === "ONLINE" ? "#00740fff" : "#ff0000ff",
        padding: "5px 10px",
        fontSize: "10px",
        fontWeight: "bold",
        boxShadow: "none"
      }}
    >
      {mode}
    </Button>
  );
}

export default function ReactVirtualizedTable() {
  const [selectedMonth, setSelectedMonth] = React.useState("August");
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Paper style={{ minHeight: "400px", width: '90%', margin: "30px 5%", overflow: "hidden" }}>
      {/* 🔹 Custom Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: isMobile ? 2 : 0,
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
          sx={{ backgroundColor: "white", borderRadius: "4px", width: isMobile ? "100%" : "40%" }}
        />
        <TextField
          select
          variant="outlined"
          size="small"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          sx={{ backgroundColor: "white", borderRadius: "4px", width: isMobile ? "100%" : "150px" }}
        >
          <MenuItem value="August">August</MenuItem>
          <MenuItem value="September">September</MenuItem>
          <MenuItem value="October">October</MenuItem>
        </TextField>
      </Box>

      {/* 🔹 Table or Mobile Cards */}
     {!isMobile ? (
  <TableVirtuoso
    data={allCourses[selectedMonth] || []}
    components={VirtuosoTableComponents}
    fixedHeaderContent={fixedHeaderContent}
    itemContent={(_index, row) => (
      <>
        <TableCell>{row.title}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.time}</TableCell>
        <TableCell><ModeButton mode={row.mode} /></TableCell>
        <TableCell>{row.schedule}</TableCell>
        <TableCell><StatusButton status={row.status} /></TableCell>
      </>
    )}
    style={{ height: 400, width: "100%" }}  
  />
) : (
  <Box sx={{ padding: 2 }}>
    {allCourses[selectedMonth].map((row, i) => (
      <Box
        key={i}
        sx={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: 2,
          marginBottom: 2,
          backgroundColor: "#fafafa"
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>{row.title}</Typography>
        <Typography variant="body2">{row.date} • {row.time}</Typography>
        <Typography variant="body2" sx={{ margin: "10px 0" }}>
          <ModeButton mode={row.mode} /> &nbsp; | &nbsp; {row.schedule}
        </Typography>
        <Box sx={{ marginTop: 1 }}>
          <StatusButton status={row.status} />
        </Box>
      </Box>
    ))}
  </Box>
)}

    </Paper>
  );
}
