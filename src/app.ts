import express, { Application, Request, Response } from 'express'

import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
const app:Application = express()

// parser
app.use(express.json())
app.use(cors())


app.use('/api',UserRoutes)




const getAController = (req: Request, res: Response) => {
  res.send('Hello World!')
}

app.get('/',getAController)

export default app;

