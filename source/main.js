import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema';
import cors from 'cors';
import path from 'path';

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(express.static('public'));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public', 'index.html'));
})

const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log(`server run on port ${port}...`));