import express from "express";
import path from "path"
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from 'morgan'
import { MORGAN_FORMAT } from "./libs/config";
import cookieParser from "cookie-parser";
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/comments";

/* Connecting To Database is always first step in our princips*/
const MongoDBStore = ConnectMongoDB(session)

const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: 'sessions'
})

/* 1-ENTRANCE */

const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use("/uploads", express.static("./uploads"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(morgan(MORGAN_FORMAT))

/* 2-SESSIONS*/
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 3600 * 3 //3h
        },
        store: store,
        resave: true,
        saveUninitialized: true

    })
);

app.use(function (req, res, next) {
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next();
})

/* 3-VIEWS */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* 4-ROUTERS 
    - BSSR backend server side rendering (EJS dan foydalanmiz)
    - app.use('/admin', routerAdmin) // Middleware Design Pattern => SPA(single page application): (EJS)
    - app.use('/', router) // Middleware Design Pattern => SPA(single page application): REACT
*/

app.use("/admin", routerAdmin)   //SSR: EJS
app.use('/', router)            // SPA: REACT

export default app