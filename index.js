import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import dot from 'dotenv';
import CORS from './cors.js';
import appSrc from './app.js';
import m from 'mongoose';
import UserModel from './models/User.js';
import UserController from './routes/UserController.js';


dot.config({ path: './.env' });

const User = UserModel(m);

const { URL } = process.env;



const app = appSrc(express, bodyParser, fs, CORS, User, UserController);

try {
    await m.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(process.env.PORT ?? 3000, () => {
    console.log('Listening...', process.pid);
});
} catch(error) {
    console.log(e.codeName);
}


