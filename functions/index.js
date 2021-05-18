const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const iex = require('iexcloud_api_wrapper');
const axios = require('axios');
const moment = require('moment');
// const admin = require('firebase-admin');
// const serviceAccount = require('./ServiceAccountKey.json');
require('dotenv').config();

// Initialize Cloud Firestore
admin.initializeApp(functions.config().firebase);

// // Set Firestore DB
// const db = admin.firestore();

//Import Custom Utilities
const numberFormatter = require("./utils/numberFormater").numberFormatter;

//Initialize Express App
const app = express();

//Controllers
const getQuote = require('./controllers/getQuote/getQuote');
const getNews = require('./controllers/getNews/getNews');
const getChartInfo = require('./controllers/getChartInfo/getChartInfo');
const queryTickets = require('./controllers/queryTickets/queryTickets');
const createTicketList = require('./controllers/createTicketList/createTicketList');
const { object } = require("firebase-functions/lib/providers/storage");
////////////////////////////////////////////////////////////////////////

//MiddleWare
app.use(cors({ origin: true }));
app.use(express.json());
////////////////////////////////////////////////////////////////////////

const baseFirebaseURL = 'https://firestore.googleapis.com/v1';

const restFirebase = async (req, res) => {
    try {
        
        res.status(200).json('it worked!')
    } catch (error) {
        res.status(400).json(error)
    }
}

app.get('/', (req, res) => {restFirebase(req, res)});
app.get('/quote/:ticket', (req, res) => { getQuote.getQuote(req, res, iex, numberFormatter, moment)});
app.get('/news/:ticket', (req, res) => { getNews.getNews(req, res, iex, moment)});
app.get('/getChart/:ticket/:time', (req, res) => { getChartInfo.getChartInfo(req, res, iex)});
app.get('/query/:queryString/:limit', (req, res) => { queryTickets.queryTickets(req, res, axios)});
app.get('/update/ticket/list', (req, res) => { createTicketList.createTicketList(req, res, axios)});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
