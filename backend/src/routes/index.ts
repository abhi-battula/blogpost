import {Hono} from "hono";
import { verify } from "hono/jwt"
import userRouter from "./user";
import blogRouter from "./blog"
const mainRouter = new Hono<{
  Bindings: {
    userId: string
  },
}>();

// mainRouter.use('/blog/*',async (c,next) =>{
//     console.log("in auth middle ware");
//     const jwt = await c.req.header("authorization") || " ";
//     const token = jwt?.split(' ')[1];
//     if(!token){ // if you dont do this check then we are gettng the error
//        c.status(401);
//        return c.json({ msg: "Authorization token missing" });
//     }
//     const tokenPayload = await verify(token,"jwt@secret_pwd")
//     if(!tokenPayload){ return c.json({msg:"invalid token"})};
//     // const userId:string = tokenPayload.id;
//     c.set("userId",tokenPayload.id);
//     await next();
// })

mainRouter.route('/user',userRouter);
mainRouter.route('/blog',blogRouter);

export default mainRouter;