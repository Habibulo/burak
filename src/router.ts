import express from "express";
import memberController from "./controllers/member.controller";
import { verify } from "jsonwebtoken";
import makeUploader from "./libs/utils/uploader";
import uploader from "./libs/utils/uploader";
const router = express.Router();

/** Member **/
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
    "/member/logout", 
    memberController.verifyAuth, 
    memberController.logout)
router.get(
    '/member/detail', 
    memberController.verifyAuth,
    memberController.getMemberDetail
)

router.post(
    "/member/update", 
    memberController.verifyAuth,
    uploader('member').single('memberImage'),
    memberController.updateMember
);
/** Product **/

// router.post("/login", memberController.login);
// router.post("/signup", memberController.signup);
// router.get('/member/')

/** Order **/



export default router;