import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import path from 'path';

import schema from './data/schema';

dotenvExpand(dotenv.config());

const HOSTNAME = process.env.API_HOSTNAME || 'localhost';
const PORT = process.env.API_PORT || 4000;
const PATH = process.env.API_GRAPHQL_PATH || '/graphql';
const STORAGE_DIR = process.env.STORAGE_DIR;

const app = express();

app.use(cors());
app.use(
  PATH,
  bodyParser.json(),
  graphqlExpress({
    schema,
    tracing: true,
    cacheControl: true
  })
);
app.use('/graphiql', graphiqlExpress({ endpointURL: PATH }));

app.use('/report/:id/download', (req, res) => {
  res.download(path.resolve(__dirname, STORAGE_DIR, 'file.pdf'));
});

app.listen(PORT, () =>
  console.log(`GraphiQL is now running on http://${HOSTNAME}:${PORT}/graphiql`)
);
