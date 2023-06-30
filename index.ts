import express from 'express';
import bodyParser from 'body-parser';
import { DataBase } from './src/models/data-source';
import { router } from './src/routers/app.router';

const app = express();
const PORT = 3000;

DataBase.connectDB()
        .then(() => console.log('DB Connected!'))
        .catch((err) => console.log(err.message));

app.set('views', './src/views/');
app.set('view engine', 'ejs');
app.use(express.static('./src/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(router);

app.listen(PORT, 'localhost', () => console.log(`Server is running at http://localhost:${PORT}`))