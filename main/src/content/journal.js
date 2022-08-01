import React, { useEffect, useState } from 'react';
import Navbar from "./SideBar/Navbar";
import "../styles/main.css";
import '../fonts.css'
import { Error } from './pages/error' 
import axios from 'axios'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


document.title = "Журнал — myliss";
// const columns = [
//   { field: 'id', headerName: 'ID', width: 70, },
//   { field: 'name', headerName: 'Имя', sortable: false},
//   { field: 'surname', headerName: 'Фамилия', width: 110, sortable: false},
//   { field: 'phone', headerName: 'Номер телефона ученика', width: 150, sortable: false},
//   { field: 'email', headerName: 'Почта ученика', width: 210, sortable: false},
//   { field: 'cost', headerName: 'Стоимость за урок', width: 150},
//   { field: 'grade', headerName: 'Класс'},
//   { field: 'parent', headerName: 'ФИО родителя', sortable: false, width: 210},
//   { field: 'parent_number', headerName: 'Номер телефона родителя', width: 170, sortable: false},
//   { field: 'rate', headerName: 'Тариф', sortable: false },
//   { field: 'button__delete', sortable: false, headerName: ""}
// ];

export function Journal() {
    const [pupil, setPupil] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8080/pupils").then((response) => {
      setPupil(response.data)
    });
  }, [])

  if (!pupil) return (
    <>
        <Navbar />
        <Error />

    </>
  )
  return (    
    <>
    <Navbar/>
    <h1 className='h1__center'>Журнал</h1>
    <div className='center__table'>
        <div style={{ height: 650, minWidth: '85%', zIndex: 1 }}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">Имя</TableCell>
            <TableCell align="right">Фамилия</TableCell>
            <TableCell align="right">Номер телефона ученика</TableCell>
            <TableCell align="right">Почта ученика</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">Класс</TableCell>
            <TableCell align="right">ФИО родителя</TableCell>
            <TableCell align="right">Номер телефона родителя</TableCell>
            <TableCell align="right">Тариф</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pupil.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.surname}</TableCell>
              <TableCell align="right">+7{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.cost} ₽</TableCell>
              <TableCell align="right">{row.grade} класс</TableCell>
              <TableCell align="right">{row.parent}</TableCell>
              <TableCell align="right">+7{row.parent_number}</TableCell>
              <TableCell align="right">{row.rate}</TableCell>
              <TableCell>
                  <div className='edit__button'>
                      <a>?</a>
                  </div>
              </TableCell>
              <TableCell>
                  <div className='remove__button'>
                      <a className='krestik'>╳</a>
                  </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    <div className='add__button' style={{marginTop: '5vh'}}>
      <a>Добавить ученика</a>
    </div>    
    </>
  );
}