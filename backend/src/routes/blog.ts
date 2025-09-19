import {Hono} from "hono";
const blogRouter = new Hono();

blogRouter.get('/',c =>{
    return c.text("from blog router")
})

blogRouter.post('/',c =>{
    return c.text("from blog router")
})

blogRouter.put('/',c =>{
    return c.text("from blog router")
})

blogRouter.get('/bulk',c =>{
    return c.text("from blog router")
})

blogRouter.get('/:id',c =>{
    return c.text("from blog router")
})

export default blogRouter;