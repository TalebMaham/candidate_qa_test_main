import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import todosRoutes from './routes/todos.router';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port: number = parseInt(process.env.PORT) || 3000;

mongoose.connect(process.env.MONGO_URI);

app.use(express.json());

app.use('/todos', todosRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
