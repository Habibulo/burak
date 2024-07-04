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

// 36 =>
//import moment from "moment";  // <= bu Modeljs
// CommonJs da biz => const moment = require('moment')
// import dotenv from "dotenv";
// dotenv.config()
// console.log("PORT:", process.env.PORT);
// console.log(process.env.MONGO)


// Cluster => Database=> Collection=> Document

// 36=>

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
=======================================================================
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
        - Adminka loyihamizni frontend Pagelarini belgilaymiz
        - Frontend Css image va Javascript folder va file larni hosil qilamiz
        - Frontend da external packagelarni install qilib Bootstrap css frameworkini ishlatamiz
        - Frontend da ishlatiladigan header hamda footer larni joriy qilamiz
*/
/*
    46_Dars 
    Darsimiz rejasi:
        - Session authentication jarayonini develop qilamiz
        - Test maqsadida checkAuthSession API'ni develop qilamiz
        - Session ishlash mexanizimini muxokama etamiz
        - Birgalikda logout API'ni xosil qilamiz

*/

/*
    47_Dars 
    Darsimiz Rejasi:
        47 => Product Controller
        - Productga daxldor MVC ni quramiz
        - Restuaurant verification middleware mantiqni hosil qilamiz 
        - Browser local variable hosil qilishni organamiz 
        - Serverimizga fayl yuklash middleware mantiqni develop qilamiz
=========================================================================
        48 => Product - Schema Model

*/

/*
    49_50_Dars 
    Darsimiz Rejasi:
        49 => Product Service Model
        - Restaurant Controllerlarining signup va login processlarini modify qilamiz
        - Product Service Model - createNewProduct biznes mantiqini tashkil qilamiz
        - Product Service Model - updateChosenProduct mantiqini develop qilamiz
=========================================================================
        50 => Product Service Model
        - getAllProducts mantiqini develop qilamiz
        - productController lardan EJS file iga malumot yuborish mexanizmini organamiz
*/

/*
    51_52_Dars 
    Darsimiz Rejasi:
        51 => User Service Model
        - User Service Model - getUser biznes mantiqini tashkil qilamiz => API
        - User Service Model - updateChosenUser mantiqini develop qilamiz => API
=========================================================================
        52 => EJS - Admin Frontend Publishing
        - 
        - 
*/

/*
    53_54_Dars 
    Darsimiz Rejasi:
        53 => EJS - Admin Login Jarayoni tahlili
        - Request turlari va Traditional API request
        - Admin Login Jarayonini tahlil qilamiz
        - Admin Logout Jarayonini tahlil qilamiz
=========================================================================
        54 => Adminka Frontend ining signup jarayonini develop qilamiz
        - jQuary organamiz
        - Validationlar va frontend validation haqida organamiz
        - Image preloading jarayonini tashkillashtiramiz
        - Adminka signup jarayoninini yakunlaymiz
*/


/*
    55_56_Dars 
    Darsimiz Rejasi: 
        55 => EJS Frontend Product 
        - Products sahifamizga haqiqiy datalarni chaqiramiz va render qilamiz
        - Yangi Productlarni qoshish mantiqni develop qilamiz
        - Frontendda mavjud productlarni update qilish mehanizmini develop qilamiz
=========================================================================
        56 => 
        - 
        - 
*/


/*
    57_58_Dars 
    Darsimiz Rejasi: 
        57 => 
        - React loyihamizni o'rnatamiz
        - Virtual dom tushunchasi tahlili
        - React Documentationni o'rganamiz
        - Loyihamizning packagelarini sozlaymiz va loyihamizning standartini joriy etamiz
=========================================================================
        58 => 
        - 
        - 
*/