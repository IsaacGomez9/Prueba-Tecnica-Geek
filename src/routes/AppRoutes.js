import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Components/auth/Login"
import Register from "../Components/auth/Register"
import DashboardRoutes from "./DashboardRoutes"
import { PrivateRouters } from "./PrivateRoutes"
import { PublicRouters } from "./PublicRoutes"

function AppRouter() {
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true)
            }
            else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        })
    }, [setIsLoggedIn, setChecking])

    if (checking) {
        return (
            <div>
                <Spinner animation="border" variant="warning" />
            </div>
        )
    }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={
                        <PublicRouters isAutentica={isLoggedIn}>
                            <Login />
                        </PublicRouters>

                    } />

                    <Route path="/register" element={
                        <PublicRouters isAutentica={isLoggedIn}>
                            <Register />
                        </PublicRouters>

                    } />

                    <Route path="/*" element={
                        <PrivateRouters isAutentica={isLoggedIn}>
                            <DashboardRoutes />
                        </PrivateRouters>
                    } />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default AppRouter;