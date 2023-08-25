import express from 'express'
import {forgotPasswordController, getAllOrdersController, orderStatusController, registerController, updateProfileController} from '../controllers/authController.js'
import { loginController } from '../controllers/authController.js'
import { testController } from '../controllers/authController.js'
import { requireSignIn , isAdmin} from '../middlewares/authMiddleware.js'
//router object
const router = express.Router()

//routing

//register user 
router.post('/register',registerController)

//login 
router.post("/login",loginController)


//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);


//test 
router.get("/test",requireSignIn, isAdmin,testController)


//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getAllOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;

