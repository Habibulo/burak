import express, { urlencoded } from 'express';
import path from "path"
import router from './router';
import routerAdmin from "./routerAdmin"

// 1. Entrance
const app = express()
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// 2. Sessions

// 3. Views
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// 4. Routers
// BSSR backend server side rendering (EJS dan foydalanmiz)
app.use('/admin', routerAdmin) // Middleware Design Pattern => SPA(single page application): (EJS)
app.use('/', router) // Middleware Design Pattern => SPA(single page application): REACT


export default app