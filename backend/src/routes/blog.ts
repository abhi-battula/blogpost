import {Hono} from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const blogRouter = new Hono<{
  Bindings:{
    DATABASE_URL : string;
  }
}>();

blogRouter.get('/',c =>{
    return c.text("from blog router")
})

blogRouter.post('/',async c =>{
    console.log("indise post blog route");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body =await c.req.json();

    try{
      await prisma.post.create({
        data:{
          title:body.title,
          content:body.content,
          authorId:body.userId
        }
      })
    }catch(e){
      console.log(e);
      
    }


    // return c.text("from blog router")
})

blogRouter.put('/',c =>{
    return c.text("from blog router")
})

// add pagination for this 
blogRouter.get('/bulk',c =>{
    return c.text("from blog router")
})

blogRouter.get('/:id',c =>{
    return c.text("from blog router")
})

export default blogRouter;