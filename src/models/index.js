// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Service, Uzel, Model, Brand } = initSchema(schema);

export {
  Service,
  Uzel,
  Model,
  Brand
};