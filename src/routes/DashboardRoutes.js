import React from 'react'
import { Route, Routes } from 'react-router-dom'
/* import Detail from '../components/Detail' */
import Home from '../Components/Home'
import Perfil from '../Components/Perfil'
/* import Info from '../components/Info' */
/* import NavBar from '../components/NavBar' */
import NavbarComponent from '../Components/NavbarComponent'
import MoreInfo from '../Components/MoreInfo'
/* import Info from '../Components/Info' */

const DashboardRoutes = () => {
    return (
        <>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/perfil" element={<Perfil />} />
                {/*   <Route path="/info/:id" element={<Info />} />  */}
                {/*    <Route path="/info" element={<Info />} />
                <Route path="/detail/:id" element={<Detail />} /> */}
                <Route path="/*" element={<Home />} />
                <Route path="/info/:name" element={<MoreInfo/>}/>
            </Routes>
        </>
    )
}

export default DashboardRoutes