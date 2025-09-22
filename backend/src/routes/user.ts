import {Hono} from "hono";

// import { PrismaClient } from '../generated/prisma'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from "hono/jwt"
import { hash,compare  } from "bcryptjs"

const userRouter = new Hono<{Bindings: {DATABASE_URL:string}}>();

userRouter.get('/',c =>{
    return c.text("from user router")
})

  userRouter.post('/signin',async c =>{
      console.log("indise signin route");
      const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL
      }).$extends(withAccelerate())

      const {email,password} = await c.req.json();
      console.log("body-->",email,password);
      
      try{
          const existingUser = await prisma.user.findFirst({
              where:{email:email}
          })
          console.log("existing user->",existingUser);
          
          if(!existingUser) {
              return c.json({msg:"user doesnot exists,please signUP"})
          }
          const passwordMatch =await compare (password,existingUser.password);
          
          if(!passwordMatch){ return c.json({msg:"wrong password , please try again"})};
          
          const token = await sign({id:existingUser.id},"jwt@secret_pwd");
          return c.json({token});
      }catch(e){
          console.log("error--->",e);
      }

  })

  userRouter.post('/signup',async c =>{
      console.log("inside signup route");
      
      const prisma = new PrismaClient({
          // we will use yhis "@ts-ignore" to avoide the typescript errors
          datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const body = await c.req.json();
      console.log("the req body is -->",body);
      
      try{
          const existingUser = await prisma.user.findUnique({
            where:{email:body.email}
          });
          console.log("existing user--->",existingUser);
          
          if(existingUser) { c.status(403); return c.json({msg:"user already exists, please login"})} 
          const hashedPwd = await hash(body.password,10);   
          const userRes = await prisma.user.create({
              data:{
                  email:body.email,
                  name:body.name,
                  password:hashedPwd
              }
          })
          console.log("*****userRes**",userRes);
          
          const token = await sign({id : userRes.id},"jwt@secret_pwd")
          return c.json({token});
      } catch (e){
          console.log("error--->",e);
          
          c.status(403)
          return c.json({msg : "error while signing up"});
      }
    // prisma.user.findUnique

  })
export default userRouter;