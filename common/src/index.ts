// 1 -->create .npmignore file , so that we can mention src , ts , node_modules in that so that we will
// not pulish then in the registry . only the .js and .d.ts files will be published from dist

//2--> change the name in package.json file , this name will be the name with which our package is published , so keep it unique like @100xdevs/name

// 3---> changet the main to dist/index.js in the package.josn file

//4--> npm publish --access public
import {z}  from "zod";

export const signupInput = z.object({
    email:z.string(),
    name:z.string(),
    password:z.string().min(8)
})

export const signinInput = z.object({
    email:z.string(),
    password:z.string()
})

export type SigninType = z.infer<typeof signinInput>
export type SignupType = z.infer<typeof signupInput>;
