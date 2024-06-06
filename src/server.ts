// console.log("Executed 123")
// import moment from "moment";

// const currenTime = moment().format("YYYY MM DD")
// console.log(currenTime)

// const person: string = "Daniel";
// const count: number = 100 


/*
    Architectural Pattern & Design Pattern

    Architectural Pattern => inson ozi yoki skleti => ex: Model View Controller, Dependicies Injections (Modullar ishlatiladi ex: NEST.JS), Model View Presenter

    Design Pattern => insonni qoli => ex: Middleware, Decotar

*/

/*
    36-37-Dars
    Darsimiz rejasi:
        - Enviroinmental Variable lar integratsiyasini amalga oshiramiz
        - Burak loyihasi uchun yangi database ni hosil qilamiz
        - MongoDb ga mongoose orqali ulanamiz
        - Loyihamizga express ni ornatamiz
*/

// 35 =>
//import moment from "moment";  // <= bu Modeljs
// CommonJs da biz => const moment = require('moment')
// import dotenv from "dotenv";
// dotenv.config()
// console.log("PORT:", process.env.PORT);
// console.log(process.env.MONGO)


// Cluster => Database=> Collection=> Document

// 36=>

import dotenv from "dotenv";
dotenv.config()
import mongoose from "mongoose";
mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongoDB succesfully connected")
        const PORT = process.env.PORT ?? 3003;
    })
    .catch((err) => console.log("error on connection MongoDB", err))