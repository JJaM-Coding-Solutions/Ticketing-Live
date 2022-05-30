import type { Request, Response } from "express";
import SuccessfulPostMessage from "./endpoints/post/chat";
const getHome = require('./endpoints/get/home.ts');
const {postChat} = require('./endpoints/post/chat.ts');

const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static('public'))
app.use(express.json());

interface ChatMessageObject {
  // TODO: add object type
}
app.get( '/home', ( req: Request, res: Response ) => {
  getHome()
    .then( ( data: ChatMessageObject[] ) => {
      res.status( 200 ).send( data );
    })
    .catch( ( err: string ) => {
      res.status( 500 ).send( err );
    });
});

app.post('/chat', (req: Request, res: Response) => {
  const { message } = req.body;
  postChat( message )
    .then( ( data : SuccessfulPostMessage) => {
      res.status( 200 ).send( data );
    })
    .catch( ( err: Error ) => {
      res.status( 500 ).send( err );
    });
});

module.exports = app;