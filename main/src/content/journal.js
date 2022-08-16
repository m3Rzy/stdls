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



export function Journal() {
    const [pupil, setPupil] = useState([])

  useEffect(() => {
    const getPosts = async () => {
        const { data: res } = await axios.get("http://localhost:8080/pupils")
        setPupil(res)
    };
    getPosts();
  }, [])

    const handleDelete = async (id, name, surname) => {
      if(window.confirm("Вы точно хотите удалить " + name + " " + surname + "?")) {
        await axios.delete(`http://localhost:8080/delete/${id}`)
        const newList = pupil.filter((pupil) => {
          return pupil.id !== id;
        });
    
        setPupil(newList);
      } else {
        window.Error("Отменяем удаление!")
      }
      
    };

  if (!pupil || pupil == 0) return (
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
        <div style={{ height: 650, minWidth: '85%', zIndex: 1, marginTop: '5vh'}}>
        <TableContainer component={Paper} style={{borderRadius: '50'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          {/* <TableCell style={{fontFamily: "SFProDisplay-Regular"}}>ID</TableCell > */}
          <TableCell style={{fontFamily: "SFProDisplay-Regular", fontWeight: 700, fontSize: 16}} align="right" >Имя</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular", fontWeight: 700, fontSize: 16}} align="right">Фамилия</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular", fontWeight: 700, fontSize: 16}} align="right">Номер телефона ученика</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular", fontWeight: 700, fontSize: 16}} align="right">Почта ученика</TableCell >
            {/* <TableCell  align="right">Protein&nbsp;(g)</TableCell > */}
            <TableCell style={{fontFamily: "SFProDisplay-Regular", fontWeight: 700, fontSize: 16}} align="right">Цена</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular", fontWeight: 700, fontSize: 16}} align="right">Класс</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular", fontWeight: 700, fontSize: 16}} align="right">ФИО родителя</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular", fontWeight: 700, fontSize: 16}} align="right">Номер телефона родителя</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular", fontWeight: 700, fontSize: 16}} align="right">Тариф</TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular", fontWeight: 700, fontSize: 16}} align="right"></TableCell >
            <TableCell style={{fontFamily: "SFProDisplay-Regular", fontWeight: 700, fontSize: 16}} align="right"></TableCell >

          </TableRow>
        </TableHead>
        <TableBody>
          {pupil.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell  component="th" scope="row">{row.id}</TableCell > */}
              <TableCell style={{fontFamily: "SFProDisplay-Regular", fontSize: 16}} align="right">{row.name}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular", fontSize: 16}} align="right">{row.surname}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular", fontSize: 16}} align="right">+7{row.phone}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular", fontSize: 16}} align="right">{row.email}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular", fontSize: 16}} align="right">{row.cost} ₽</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular", fontSize: 16}} align="right">{row.grade} класс</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular", fontSize: 16}} align="right">{row.parent}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular", fontSize: 16}} align="right">+7{row.parent_number}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular", fontSize: 16}} align="right">{row.rate}</TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular", fontSize: 16}}>
                    <div className='edit__button'>
                        <a>?</a>
                    </div>
              </TableCell >
              <TableCell style={{fontFamily: "SFProDisplay-Regular", fontSize: 16}}>
                  <div className='remove__button' onClick={() => handleDelete(row.id, row.name, row.surname)}>
                      <a className='krestik'>╳ {pupil.id}</a>
                  </div>
              </TableCell >
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    <div className='add__button' style={{marginTop: '3vh'}}>
      <a>Добавить ученика</a>
    </div>    
    </>
  );
}
