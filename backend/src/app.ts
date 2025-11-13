import express from 'express'
import cors from 'cors'
import helmet from 'helmet';
import blogpostsRoutes from './routes/blog-posts-Routes'
import workpostsRoutes from './routes/work-posts-Routes'
import contactRoutes from './routes/contact-message.Routes'
import newsRoutes from './routes/news.routes'
const app=express();
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/blog-posts',blogpostsRoutes)
app.use('/works',workpostsRoutes)
app.use('/contact',contactRoutes)
app.use('/news',newsRoutes)
export default app;