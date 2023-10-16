
import { Routes, Route } from "react-router"
import Navegacion from "../Components/Navegacion"
import { Home } from "../Pages/Home"
import { List } from "../Pages/List"
import { Contacto } from '../Pages/Contacto'
import {Perfil} from '../Pages/Perfil'

export const AppRouter = () => {

return(
<>

<nav>
<Routes>

<Route path='/' element={<Navegacion/>} >
    <Route path='home' element={<Home/>}/>
    <Route path='list' element={<List/>}/>
    <Route path='contacto' element={<Contacto/>}/>
    <Route path='perfil' element={<Perfil/>}/>
</Route>
</Routes>
</nav>

</>
);
}
