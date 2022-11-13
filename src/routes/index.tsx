import { Navigate, Route, Routes } from "react-router-dom"
import {About, Products } from "../pages/index"
import { Deshboard } from "../pages"
export const ProjectRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<Deshboard/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    )
}