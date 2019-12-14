const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const PORT = 8080;

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});