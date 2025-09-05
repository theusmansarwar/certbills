"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

// Define columns (title removed 🚀)
const columns = [
  { label: "Date", dataKey: "date", width: 140 },
  { label: "Time", dataKey: "time", width: 160 },
  { label: "Mode", dataKey: "mode", width: 120 },
  { label: "Schedule", dataKey: "schedule", width: 120 },
  { label: "Status", dataKey: "status", width: 180 },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function StatusButton({ status }) {
  if (status === "BATCH FULL") {
    return (
      <Button
        variant="contained"
        disabled
        sx={{ backgroundColor: "#9e9e9e", boxShadow: "none", width: "140px" }}
      >
        {status}
      </Button>
    );
  }
  if (status === "ENROLL NOW") {
    return (
      <Button
        variant="contained"
        sx={{
          backgroundColor: "green",
          color: "white",
          boxShadow: "none",
          width: "140px",
        }}
      >
        {status}
      </Button>
    );
  }
  return (
    <Button
      variant="contained"
      disabled
      sx={{
        color: "white",
        backgroundColor: "black",
        fontWeight: "bold",
        borderColor: "black",
        boxShadow: "none",
        width: "140px",
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
        boxShadow: "none",
      }}
    >
      {mode}
    </Button>
  );
}

export default function ReactVirtualizedTable2({ data }) {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Paper
      style={{
        minHeight: "400px",
        maxHeight: "400px",
        width: isMobile ? "94%" : "90%",
        margin: isMobile ? "30px 3%" : "30px 5%",
        overflow: "auto",
        scrollbarWidth:"thin",
        scrollbarColor:"var(--primary-color) transparent",
        border: "1px solid gainsboro",
      }}
    >
      {!isMobile ? (
        <TableVirtuoso
          data={data || []}
          components={VirtuosoTableComponents}
          itemContent={(_index, row) => (
            <>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>
                <ModeButton mode={row.mode} />
              </TableCell>
              <TableCell>{row.schedule}</TableCell>
              <TableCell>
                <StatusButton status={row.status} />
              </TableCell>
            </>
          )}
          style={{ height: 400, width: "100%" }}
        />
      ) : (
        <Box sx={{ padding: 0 }}>
          {data.map((row, i) => (
            <Box
              key={i}
              sx={{
                padding: 2,
                marginBottom: 2,
                backgroundColor: "#fafafa",
              }}
            >
              {/* ✅ Keep title visible on mobile */}
              <Typography variant="body2">
                {row.date} • {row.time}
              </Typography>
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
