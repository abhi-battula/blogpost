import {Hono} from "hono";
const userRouter = new Hono();

userRouter.get('/',c =>{
    return c.text("from user router")
})

userRouter.post('/signin',c =>{
    return c.text("from user router")
})

userRouter.post('/signup',c =>{
    return c.text("from user router")
})
export default userRouter;