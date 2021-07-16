// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Service, Uzel, Advantage, Model, Brand } = initSchema(schema);

export {
  Service,
  Uzel,
  Advantage,
  Model,
  Brand
};