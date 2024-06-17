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
import app from "./app"


mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongoDB succesfully connected")
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, function() {
            console.log(`The server is succesfully running at:\n  For Admin: http://localhost:${PORT}/admin\n  For Users: http://localhost:${PORT}/login`);
            
        })
    })
    .catch((err) => console.log("error on connection MongoDB", err))

/* 
    37_38_Dars 
    Darsimiz Rejasi:
        38 =>
        - Routerlarni organamiz
        - MVC architectual patterni organamiz
        - Member Controllerlarni hosil qilamiz
        - Restaurant Controllerlarni hosil qilamiz
        39 =>
        - Member Service Model organamiz
        - Mongoose documentationidan 
            Schema, Model va Quary 
            tushunchalarini organamiz
        - Schema Member Model hosil qilamiz 
*/




/* 
    39_40_Dars 
    Darsimiz Rejasi:
        39 =>
        - Loyihamizni Standardlarini quramiz
            . Logging standards
            . Naming Standards 
                function, methods, variable => CAMEL ex: goHome
                class => PASCAL                      ex: MemberService
                folder => KEBAB                      ex: 
                css => SNAKE                         ex: button_style
            . Error handling 
=====================================================================
        - API request method lari va postman organamiz
=====================================================================
        40 =>
        - Api ozi nima va turlari
            . Traditional API
            . REST API
            . GraphQL API
            . ...
=====================================================================
        - Adminka loyihasi uchun moljallangan toliq signup API ni toliq develop qilamiz
*/




/* 
    41_42_Dars 
    Darsimiz Rejasi:
        41 =>
        - Adminka Loyihasini login API ni develop qilamiz
        - Passwordlarni hashing qilish mexanizmi yani Bycript ni organamiz
=====================================================================
        42 =>
        - VPS va VPC ozi nima?
        - Serverlarni ozaro boglanishi turlari
        - Authentication nima va uni tashkillashtirish
        - Session Auth qanday ishlashini nazariy tahlili
        - Browser larni hotiralari
*/


/* 
    43_44_Dars 
    Darsimiz Rejasi:
        43 =>
        - Frontendni qurishning 2xil usuli: BSSR va SPA
        - SPA ning login va signup jarayonini develop qilamiz
=====================================================================
        44 =>
        - 
        -
*/



