import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Advantage {
  readonly id: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Advantage>);
  static copyOf(source: Advantage, mutator: (draft: MutableModel<Advantage>) => MutableModel<Advantage> | void): Advantage;
}

export declare class Model {
  readonly id: string;
  readonly brandID?: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Model>);
  static copyOf(source: Model, mutator: (draft: MutableModel<Model>) => MutableModel<Model> | void): Model;
}

export declare class Brand {
  readonly id: string;
  readonly name?: string;
  readonly Cars?: (Model | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Brand>);
  static copyOf(source: Brand, mutator: (draft: MutableModel<Brand>) => MutableModel<Brand> | void): Brand;
}