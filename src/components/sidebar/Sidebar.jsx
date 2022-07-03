import React, {useContext} from "react";
import {Link} from "react-router-dom"
import "./Sidebar.scss";

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {DarkModeContext} from "../../context/darkModeContext";


const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/">
                    <span className="logo">Аналитика</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Главная</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <Link to="/">
                            <span>Главная</span>
                        </Link>
                    </li>
                    <p className="title">Список</p>
                    <Link to="/task">
                        <li>
                            <PersonOutlineOutlinedIcon className="icon"/>
                            <span>Задание</span>
                        </li>
                    </Link>
                    <Link to="/users">
                        <li>
                            <PersonOutlineOutlinedIcon className="icon"/>
                            <span>Пользователи</span>
                        </li>
                    </Link>
                    <Link to="/products">
                        <li>
                            <StoreRoundedIcon className="icon"/>
                            <span>Продукты</span>
                        </li>
                    </Link>
                    <li>
                        <PaymentOutlinedIcon className="icon"/>
                        <span>Заказы</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span>Доставка</span>
                    </li>
                    <p className="title">Полезное</p>
                    <li>
                        <InsertChartIcon className="icon"/>
                        <span>Статистика</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon"/>
                        <span>Уведомления</span>
                    </li>
                    <p className="title">Сервисы</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                        <span>Система</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon"/>
                        <span>Логи</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>Настройки</span>
                    </li>
                    <p className="title">Пользователь</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span>Профиль</span>
                    </li>
                    <li>
                        <ExitToAppOutlinedIcon className="icon"/>
                        <span>Выйти</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOptions" onClick={() => dispatch({type: "LIGHT"})}></div>
                <div className="colorOptions" onClick={() => dispatch({type: "DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar;
