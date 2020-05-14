const express = require('express');
const graphqlHTTP = require('express-qrapql');
const Schema = require('./schema');


const app = express();

app.use('/graphql', graphqlHTTP({
    Schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`this is a test and t s on port ${PORT}`));