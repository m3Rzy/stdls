import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri'
import * as BiIcons from 'react-icons/bi'

export const SidebarData = [
  {
    title: 'Главная страница',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Статистика',
    path: '/stats',
    icon: <IoIcons.IoMdStats />,
    cName: 'nav-text'
  },
  {
    title: 'Журнал',
    path: '/list',
    icon: <BiIcons.BiBookBookmark />,
    cName: 'nav-text'
  },
  {
    title: 'Уведомления',
    path: '/notifications',
    icon: <IoIcons.IoIosNotifications />,
    cName: 'nav-text'
  },
  {
    title: 'Настройки',
    path: '/settings',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
  },
  {
    title: 'Обратная связь',
    path: '/feedback',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];