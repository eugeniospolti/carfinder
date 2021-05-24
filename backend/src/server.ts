import { app } from './app'
import { router } from './router';
import connection from './infrastructure/persistence/connection';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const PORT = process.env.PORT || 4005;
const db = process.env.MONGO_URL || "mongodb://database:27017/test";  

connection({db});

app.listen(PORT, () => {
  console.log(`database is running on  ${db}`)
  console.log(`server is running on PORT ${PORT}`)
})

app.use(router);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));