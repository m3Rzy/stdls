import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from "./SideBar/Navbar";
import "../styles/main.css";
import '../fonts.css'
import kot from "../resources/laser.gif";
import { Error } from './pages/error' 
import axios from 'axios'


document.title = "Журнал — myliss";
const columns = [
  { field: 'id', headerName: 'ID', width: 70, },
  { field: 'name', headerName: 'Имя', sortable: false},
  { field: 'surname', headerName: 'Фамилия', width: 110, sortable: false},
  { field: 'phone', headerName: 'Номер телефона ученика', width: 150, sortable: false},
  { field: 'email', headerName: 'Почта ученика', width: 210, sortable: false},
  { field: 'cost', headerName: 'Стоимость за урок', width: 150},
  { field: 'grade', headerName: 'Класс'},
  { field: 'parent', headerName: 'ФИО родителя', sortable: false, width: 210},
  { field: 'parent_number', headerName: 'Номер телефона родителя', width: 170, sortable: false},
  { field: 'rate', headerName: 'Тариф', sortable: false },
  { field: 'button__delete', sortable: false, headerName: ""}
];

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

  const rows = pupil.map((row) => ({
    id: row.id,
    name: row.name,
    surname: row.surname,
    phone: '+7' + row.phone,
    email: row.email,
    cost: row.cost + ' ₽',
    grade: row.grade + ' класс',
    parent: row.parent,
    parent_number: '+7' + row.parent_number,
    rate: row.rate,
    button__delete: <button>Удалить</button>
  }))
  return (    
    <>
    <Navbar/>
    <h1 className='h1__center'>Журнал</h1>
    <div className='center__table'>
        <div style={{ height: 650, minWidth: '85%', zIndex: 1 }}>
        <DataGrid
            // rows={rows}
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
        />
        </div>
    </div>
    <div className='add__button' style={{marginTop: '5vh'}}>
      <a>Добавить ученика</a>
    </div>
    <div className='remove__button' style={{marginTop: '5vh', marginBottom: '5vh'}}>
      <a className='krestik'>╳</a>
    </div>
    </>
    
  );
}