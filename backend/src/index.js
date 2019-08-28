import express from 'express';

// Imports: GraphQL
import SERVER from './graphql/schema.js';

import cors from 'cors';


const app = express();

// app.use(cors());
app.use(express.static('public'));

SERVER.applyMiddleware({
    app
});

const { PORT = 3030 } = process.env;




app.listen(PORT, () => console.log(`Express GraphQL Server Now Running On localhost:${PORT}/graphql`));


export default app;