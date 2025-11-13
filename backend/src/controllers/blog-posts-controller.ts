import {Request,Response} from 'express'

import { supabase } from '../config/db'

export const getBlogPosts=async(req:Request,res:Response)=>{  
    const {data,error}=await supabase.from('blog_posts').select('id ,title ,excerpt, image')
    if(error) res.status(400).json({error:error.message})
        else  res.status(200).json({posts:data})

}

export const getBlogPost=async(req:Request,res:Response)=>{
const {id}=req.params


const {data,error}=await supabase.from('blog_posts').select('*').eq('id',id).single()
 if (error) res.status(404).json({ error: error.message })
    else res.status(200).json({ post:data})
}



export const getWorks=async(req:Request,res:Response)=>{
 const {data,error}=await supabase.from('works').select('id ,title ,excerpt, image')
    if(error) res.status(400).json({error:error.message})
        else  res.status(200).json({posts:data})
}


export const getWork=async(req:Request,res:Response)=>{
const {id}=req.params


const {data,error}=await supabase.from('works').select('*').eq('id',id).single()
 if (error) res.status(404).json({ error: error.message })
    else res.status(200).json({ post:data})
}