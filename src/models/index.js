// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Advantage, Model, Brand } = initSchema(schema);

export {
  Advantage,
  Model,
  Brand
};