import React from "react";
import * as AiIcons from "react-icons/ai";

export const SideNavData = [
    {
        title: 'Proyectos',
        path: '/proyectos',
        icon: <AiIcons.AiFillProject />,
        cName: 'nav-text'
    },
    {
        title: 'Cotizaciones',
        path: '/cotizaciones',
        icon: <AiIcons.AiFillSchedule />,
        cName: 'nav-text'
    },
    {
        title: 'Inventario',
        path: '/inventario',
        icon: <AiIcons.AiFillReconciliation />,
        cName: 'nav-text'
    },
    {
        title: 'Estadisticas',
        path: '/estadisticas',
        icon: <AiIcons.AiFillPieChart />,
        cName: 'nav-text'
    },

]
