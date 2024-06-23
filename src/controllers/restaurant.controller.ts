import { NextFunction, Request, Response } from "express";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { memberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";
import { T } from "../libs/types/comments";
import { log } from "console";
import { resolve } from "dns/promises";

const restaurantController: T = {};
const memberService = new MemberService();

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("User is redirected to Home Page");
        res.render("home");
        // send | json | redirect | end | render
    } catch (err: any) {
        console.log("Error on Home Page:", err.message);
        res.redirect("/admin");
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        log("User is redirected to Signup Page")
        res.render("");
    } catch (err: any) {
        console.log("Error on Signup Page:", err.message);
        res.redirect("/admin");
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("User is redirected to Login Page");
        res.render("login");
    } catch (err: any) {
        console.log("Error on Login Page:", err.message);
        res.redirect("/admin");
    }
};

restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log("User is redirected to Process Signup Page");
        if (!req.body) {
            throw new Error("Request body is null");
        }
        const newMember: MemberInput = req.body;
        newMember.memberType = memberType.RESTAURANT;

        const result = await memberService.processSignup(newMember);

        // TODO: Loyihamizning mana shu qismida Session Authentication integration qilamiz

        req.session.member = result;
        req.session.save(() => {
            res.send(result);
        });
    } catch (err: any) {
        const message =
            err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script>alert("${message}"); window.location.replace("/admin/signup")</script>`
        );
    }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        // console.log("req.body: ", req.body);

        // if (!req.body) {
        //     throw new Error("Request body is null");
        // }

        const input: LoginInput = req.body;
        console.log("input:", input);
        const result = await memberService.processLogin(input);
        console.log("result", result);
        

        // TODO: Loyihamizning mana shu qismida Session Authentication integration qilamiz

        req.session.member = result;
        req.session.save(() => {
            res.send(result);
        });
    } catch (err: any) {
        console.log("Error on AdminLogin:", err.message);
        const message =
            err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script>alert("${message}"); window.location.replace("/admin/login")</script>`
        );
    }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log("req.body: ", req.body);
        req.session.destroy(() => {
            res.redirect("/admin");
            // res.send("cookie session is destroyed successfuly!")
        });
    } catch (err: any) {
        console.log("Error on adminLogout:", err.message);
        res.redirect("/admin");
    }
};

restaurantController.checkAdminAuthSession = async (
    req: AdminRequest,
    res: Response
) => {
    try {
        console.log("checkAuthSession");

        if (req.session?.member) {
            // res.send(`HI, ${req.session.member.memberNick}`);
            res.send(`<script>alert(${req.session.member.memberNick})</script>`);
        } else {
            // res.send(Message.NOT_AUTHENTICATED);
            res.send(`<script>alert(${Message.NOT_AUTHENTICATED})</script>`);
        }
    } catch (err: any) {
        console.log("Error on processLogin:", err.message);
        res.send(err);
    }
};


restaurantController.verifyRestaurant = (
    req: AdminRequest,
    res: Response,
    next: NextFunction
) => { 
    if (req.session.member?.memberType === memberType.RESTAURANT) {
          req.member = req.session.member;
          next();
        }
    else {
        const message = Message.NOT_AUTHENTICATED
        res.send(`<script>alert("${message}"); window.location.replace("/admin/login")</script>`);
    }
}
export default restaurantController;
 