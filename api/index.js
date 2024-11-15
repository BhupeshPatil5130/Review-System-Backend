import express from 'express';

import User from '../model/User.js';
import dotenv from 'dotenv';
import dbconnect from '../config/database.js';
import router from '../routes/FeedBackRoutes.js';

const app =express();

const PORT=3000;
app.use(express.json());
app.use("/api/v1",router);
dotenv.config();

dbconnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})