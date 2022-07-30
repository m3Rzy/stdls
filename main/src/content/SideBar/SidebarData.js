import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi'

export const SidebarData = [
  {
    title: 'Главная страница',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Журнал',
    path: '/list',
    icon: <BiIcons.BiBookBookmark />,
    cName: 'nav-text'
  },
  {
    title: 'Статистика',
    path: '/',
    icon: <IoIcons.IoMdStats />,
    cName: 'nav-text'
  },
  {
    title: 'Уведомления',
    path: '/',
    icon: <IoIcons.IoIosNotifications />,
    cName: 'nav-text'
  },
  {
    title: 'Настройки',
    path: '/',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
  },
  {
    title: 'Обратная связь',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];