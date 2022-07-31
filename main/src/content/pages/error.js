import React from 'react'
import loading from "../../resources/loading.gif";
import laser from "../../resources/laser.gif";
import "../../styles/main.css";
import '../../fonts.css'


function Error() {
    
    return (
        <>
            <div className='error__container'>
                <p className='h1__center' style={{ marginTop: '12vh', fontSize: '3em' }}>Нет подключения к серверу</p>
                <p className='error__h2'>[ Ошибка 404 ]</p>
                <img src={laser} className="h1__center" style={{ height: '25vh', marginTop: '5vh' }} />
                <div className='refresh__button' style={{marginTop: '10vh'}} onClick={updatePage}>
                    <a>Обновить</a>
                </div>
            </div>
        </>
    )
}

function updatePage()
{
    window.parent.location = window.parent.location.href;
}


export { Error }