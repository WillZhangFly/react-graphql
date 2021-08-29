import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import mikroConfig from './mikro-orm.config';
import express from 'express';

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  
  const app = express();
  app.get('/', (_ , res) => {
    res.send("Hello000");
  });
  app.listen(4000 , () => {
    console.log('server started on localhost:4000');
  })

};

main().catch((err) => {
  console.log(err);
});
