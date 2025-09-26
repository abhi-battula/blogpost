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
    const userId = c.get("jwtPayload")
    try{
      await prisma.post.create({
        data:{
          title:body.title,
          content:body.content,
          authorId:userId
        }
      })
    }catch(e){
      console.log(e);
      return c.json({msg:"error while creatiing a post"})
    }
    return c.json({msg:"post created suuccessfully"})
})

blogRouter.put('/',async c =>{
  console.log("inside update");
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const userId = c.get("jwtPayload")
    console.log("body----------------_>",body);
    
    try{
      await prisma.post.update({
        where:{
          id:body.id,
          authorId:userId
        },
        data:{
          title:body.title,
          content:body.content
        }
      })
    }catch(e){
      console.log(e);
      return c.json({msg:"error while updating the blog"})
    }
    return c.json({msg:"updated succcessfully"})
})

// add pagination for this 
blogRouter.get('/bulk',async c =>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    console.log("inside bulk api with userId from jwtpayload",c.get("jwtPayload"));
    
    try{
      const posts = await prisma.post.findMany({
        select:{
          title:true,
          content:true,
          id:true,
          author:{
            select:{
              name:true
            }
          }
        }
      });
      return c.json({data:posts})
    }catch(e){
      console.log(e);
      return c.json({msg:"error while getting posts"})
    }
})

blogRouter.get('/:id',async c =>{
  console.log("inside /:id");
  
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const id = c.req.param('id');
    console.log("id is -------->",id);
    
    const post = await prisma.post.findUnique({
      where:{id},
      select:{
        title:true,
        content:true,
        author:{
          select:{
            name:true
          }
        }
      }
    })
    return c.json({data:post})
})

export default blogRouter;