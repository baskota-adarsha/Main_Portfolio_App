import { supabase } from "../config/db";
import { Request, Response, NextFunction } from 'express';
export const sendMessage=async(req:Request,res:Response)=>{

const {contactMessage}=req.body;

const {data,error}=await supabase.from('messages').insert([contactMessage])
 if (error) res.status(400).json({ error: error.message })
   else res.status(201).json({ message: 'Message sent successfully' })
  
}