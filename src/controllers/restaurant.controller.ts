import { NextFunction, Request, Response } from 'express';
import { T } from "../libs/types/comments";
import MemberService from '../models/Member.service';
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member';
import Errors, { HttpCode, Message } from '../libs/Errors';
import { memberType } from '../libs/enums/member.enum';


const memberService = new MemberService();
const restaurantController: T = {}

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("Home Page")
        res.render('home')
        // send | json | redirect | end | render
    } catch (err) {
        console.log("Error, goHome", err);
        res.redirect('/admin')
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("Login Page")
        res.render("login")
    } catch (err) {
        console.log("Error, Login", err);
        res.redirect('/admin')
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("Signup Page")
        res.render("signup")
    } catch (err) {
        console.log("Error, Signup", err);
        res.redirect('/admin')
    }
};

restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log("ProcessSignup")
        const file = req.file;
        if(!file)
            throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG)
        const newMember: MemberInput = req.body;
        newMember.memberType = memberType.RESTAURANT;
        newMember.memberImage = file?.path
        const result = await memberService.processSignup(newMember)

        //TODO: SESSIONS AUTHENTICATION

        req.session.member = result;
        req.session.save(() => {
            res.redirect("/admin/product/all")
        })
    } catch (err) {
        console.log("Error, ProcessLogin", err);
        const message = err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script>alert(${message}); window.location.replace('admin/signup')</script>`)
    }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("ProcessLogin")
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input)
        
        //TODO: SESSION AUTH

        req.session.member = result;
        req.session.save(() => {
            res.redirect("/admin/product/all")        
        });
    } catch (err) {
        console.log("Error, ProcessLogin", err);
        const message = err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script>alert(${message}); window.location.replace('admin/signup')</script>`)
    }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log("logout")
        req.session.destroy(function () {
            res.redirect('/admin')
        })
    } catch (err) {
        console.log("Error, ProcessLogin", err);
        res.redirect('/admin')
    }
};

restaurantController.checkoutSession = async (
    req: AdminRequest,
    res: Response) => {
    try {
        console.log("Check")
        if (req.session?.member) res.send(`<script>alert(${req.session.member.memberNick})</script>`)
        else res.send(`<script>alert(${Message.NOT_AUTHENTICATED})</script>`)
    } catch (err) {
        console.log("Error, Check Auth", err);
        res.send(err)
    }
};

restaurantController.verifyRestaurant = (
    req: AdminRequest,
    res: Response,
    next: NextFunction
) => {
    if (req.session?.member?.memberType === memberType.RESTAURANT) {
        req.member = req.session.member;
        next();
    } else {
        const message = Message.NOT_AUTHENTICATED
        res.send(`<script>alert('${message}'); window.location.replace('/admin/login')</script>`)
    }
}

restaurantController.getUsers = async (req: Request, res: Response) => {
    try {
      console.log("getUsers");
      const result = await memberService.getUsers();
      res.render("users", { users: result });
    } catch (err) {
      console.log("Error, getUsers:", err);
      res.redirect("/admin/login");
    }
  };
  
  restaurantController.updateChosenUser = async (req: Request, res: Response) => {
    try {
      console.log("updateChosenUser");
      const result = await memberService.updateChosenUser(req.body);
      res.status(HttpCode.OK).json({ data: result });
    } catch (err) {
      console.log("Error, updateChosenUser:", err);
      if (err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standard.code).json(Errors.standard);
    }
  };
  
export default restaurantController