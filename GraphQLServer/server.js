const express = require('express');
const schema = require('./schema')
const expressGraphQL = require('express-graphql').graphqlHTTP;
const app = express();

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Server is running on Port 4000')
});