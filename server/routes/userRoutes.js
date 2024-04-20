import express from 'express'
import { loginUserController, registerUserController } from '../controllers/userctrl.js';

const router= express.Router();

router.route('/').get((req,res)=>{
    res.send('userRoutes')
})

router.post('/login',loginUserController);

router.post('/register',registerUserController);

export default router;