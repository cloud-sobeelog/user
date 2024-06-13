const express = require('express');
const app = express()
const dbConfig = require('./model/db')
const db = dbConfig.db
const cors = require('cors');

var cookieParser = require('cookie-parser');
const session = require('express-session');
app.use(session({
    secret: "sobeeLogKey",
    resave: false,
    saveUninitialized: true,
}));

app.use(cookieParser());

require('dotenv').config();

const allowedOrigins = ['http://localhost:3000']
const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
};

app.use(cors(corsOptions)); // 옵션을 추가한 CORS 미들웨어 추가

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if(allowedOrigins.includes(origin)){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, x-access-token');
    next();
});

app.use(express.json());
app.set("port",process.env.PORT || 8081);
app.use(
    express.urlencoded({
        extended: false
    })
)

app.get("/",(req,res) => {
    res.send("Welcome")
})

app.listen(app.get("port"),()=>{
    console.log(`Server running at http://localhost:${app.get("port")}`);
})

app.use('/',require('./routes'));
