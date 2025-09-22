import {Hono} from "hono";
import { verify,decode } from "hono/jwt"
import userRouter from "./user";
import blogRouter from "./blog"
const mainRouter = new Hono<{
  
}>();

mainRouter.use('/blog/*',async (c,next) =>{
    console.log("in auth middle ware");
    const jwt = await c.req.header("authorization") || "";
    console.log("jwt----->",jwt);
    
    if(!jwt){return c.json({msg:"authorization headers missing"})}
    const token = jwt?.split(' ')[1];
    console.log("token",token);
    
    if(!token){ // if you dont do this check then we are gettng the error
       c.status(401);
       return c.json({ msg: "Authorization token missing" });
    }
    const isValidToken = await verify(token,"jwt@secret_pwd")
    if(!isValidToken){ return c.json({msg:"invalid token"})};
    // const userId:string = tokenPayload.id;
    const decodedPayload = decode(token);
    console.log("decodedpayload",decodedPayload);
    
    const userId = decodedPayload.payload.id;
    c.set("jwtPayload",userId);
    await next();
})

mainRouter.route('/user',userRouter);
mainRouter.route('/blog',blogRouter);

export default mainRouter;