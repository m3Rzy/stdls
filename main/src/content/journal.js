import React, { useEffect, useState } from 'react';
import Navbar from "./SideBar/Navbar";
import "../styles/main.css";
import '../fonts.css'
import { Error } from './pages/error' 
import axios from 'axios'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


document.title = "Журнал — myliss";



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
        <TableContainer component={Paper} style={{borderRadius: '50'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          {/* <TableCell style={{fontFamily: "SFProDisplay-Regular"}}>ID</TableCell > */}
          <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right" >Имя</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">Фамилия</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">Номер телефона ученика</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">Почта ученика</TableCell >
            {/* <TableCell  align="right">Protein&nbsp;(g)</TableCell > */}
            <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">Цена</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">Класс</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">ФИО родителя</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">Номер телефона родителя</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">Тариф</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right"></TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right"></TableCell >

          </TableRow>
        </TableHead>
        <TableBody>
          {pupil.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell  component="th" scope="row">{row.id}</TableCell > */}
              <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">{row.name}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">{row.surname}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">+7{row.phone}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">{row.email}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">{row.cost} ₽</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">{row.grade} класс</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">{row.parent}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">+7{row.parent_number}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular"}} align="right">{row.rate}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular"}}>
                  <Link to={'/edit/'+row.id}>
                    <div className='edit__button'>
                        <a>?</a>
                    </div>
                  </Link>
              </TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular"}}>
                <Link to={'/delete/'+row.id}>
                  <div className='remove__button'>
                      <a className='krestik'>╳</a>
                  </div>
                </Link>
              </TableCell >
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
