import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(nome, rastreio, data, status) {
  return { nome, rastreio, data, status };
}

const rows = [
  createData('Lasania Chiken', 18908424, '2 março 2022', 'Aprovado' ),
  createData('Big Baza Bang', 18908424, '2 março 2022', 'Aprovado' ),
  createData('Mouth Freshner', 18908424, '2 março 2022', 'Pendente' ),
  createData('Miracle Imóveis', 18908424, '2 março 2022', 'Entregue' ),
];

export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Ordens Recentes</h3>
    <TableContainer component={Paper} 
    style={{boxShadow: '0px 13px 20px 0px #80808029' }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Produto</TableCell>
            <TableCell align="left">Rastreio</TableCell>
            <TableCell align="left">Data</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="left">{row.rastreio}</TableCell>
              <TableCell align="left">{row.data}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left" className='details'>Detalhes</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}