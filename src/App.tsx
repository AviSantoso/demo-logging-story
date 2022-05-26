import "./App.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo, useState } from "react";

import { getScenarios } from "./getScenarios";
import { getColumns } from "./getColumns";

const scenarios = getScenarios();
const columns = getColumns();

function App() {
  const [scenario, setScenario] = useState(0);
  const [information, setInformation] = useState(0);
  const [display, setDisplay] = useState(0);

  const rows = useMemo(() => scenarios[scenario], []);
  const baseCols = useMemo(() => columns[display], []);
  const finalCols = useMemo(() => baseCols, []);

  function Btn({
    c,
    n,
    setFn,
    children,
  }: {
    c: number;
    n: number;
    setFn: (n: number) => void;
    children: any;
  }) {
    return (
      <Button
        variant={c === n ? "contained" : "outlined"}
        size="small"
        onClick={() => setFn(n)}
      >
        {children}
      </Button>
    );
  }

  return (
    <Container maxWidth="md">
      <Grid container padding={2} spacing={2} maxHeight="100vh" overflow="auto">
        <Grid item xs={3}>
          <Stack spacing={1}>
            {/* Scenarios */}
            <Typography variant="subtitle1" textAlign="center">
              Scenarios
            </Typography>
            <Btn c={scenario} n={0} setFn={setScenario}>
              Individual
            </Btn>
            <Btn c={scenario} n={1} setFn={setScenario}>
              Malicious
            </Btn>
            <Btn c={scenario} n={2} setFn={setScenario}>
              Big Spender
            </Btn>
            <Box paddingY={1}>
              <Divider />
            </Box>
            {/* Information Level */}
            <Typography variant="subtitle1" textAlign="center">
              Information Level
            </Typography>
            <Btn c={information} n={0} setFn={setInformation}>
              Basic
            </Btn>
            <Btn c={information} n={1} setFn={setInformation}>
              + Time
            </Btn>
            <Btn c={information} n={2} setFn={setInformation}>
              + Location
            </Btn>
            <Box paddingY={1}>
              <Divider />
            </Box>
            {/* Display Level */}
            <Typography variant="subtitle1" textAlign="center">
              Display
            </Typography>
            <Btn c={display} n={0} setFn={setDisplay}>
              Everything
            </Btn>
            <Btn c={display} n={1} setFn={setDisplay}>
              Story
            </Btn>
            <Btn c={display} n={2} setFn={setDisplay}>
              Location
            </Btn>
            <Btn c={display} n={3} setFn={setDisplay}>
              Sum of Purchases
            </Btn>
          </Stack>
        </Grid>
        <Grid item xs={9} height="40em">
          <DataGrid rows={rows} columns={finalCols} disableSelectionOnClick />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
