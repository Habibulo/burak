import express, { urlencoded } from 'express';
import path from "path"
import router from './router';
import routerAdmin from "./router-admin"
import morgan from "morgan"
import { MORGAN_FORMAT } from './libs/config';
import session from 'express-session';
import ConnectMongoDB from "connect-mongodb-session";
import { T } from './libs/types/comments';


// 1. Entrance
const app = express()
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT))


const MongoDBStore = ConnectMongoDB(session);

const store = new MongoDBStore({
	uri: String(process.env.MONGO_URL),
    collection: "sessions",
});

// 2. Sessions
app.use(
	session({
		secret: String(process.env.SESSION_SECRET),
		cookie: {
			maxAge: 3600 * 3600 * 6, // 6hours. Cookie will destroy itself after 6 hours!
		},
		store: store,
		resave: true,
		saveUninitialized: true,
	})
);

app.use(function(req, res, next) {
	const sessionInstance = req.session as T;
	res.locals.member = sessionInstance.member
	next()
})

// 3. Views
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// 4. Routers
// BSSR backend server side rendering (EJS dan foydalanmiz)
app.use('/admin', routerAdmin) // Middleware Design Pattern => SPA(single page application): (EJS)
app.use('/', router) // Middleware Design Pattern => SPA(single page application): REACT


export default app
