import type { Request, Response } from "express";

const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static('public'))
app.use(express.json());


module.exports = app;