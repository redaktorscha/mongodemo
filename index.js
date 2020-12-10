import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import CORS from './cors.js';
import appSrc from './app.js';


const app = appSrc(express, bodyParser, fs, CORS);

app.listen(process.env.PORT ?? 3000, () => {
    console.log('Listening...', process.pid)
});
