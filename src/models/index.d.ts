import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Service {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly price?: number;
  readonly uzelID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Service>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}

export declare class Uzel {
  readonly id: string;
  readonly name: string;
  readonly Services?: (Service | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Uzel>);
  static copyOf(source: Uzel, mutator: (draft: MutableModel<Uzel>) => MutableModel<Uzel> | void): Uzel;
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
  readonly name: string;
  readonly Cars?: (Model | null)[];
  readonly image: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Brand>);
  static copyOf(source: Brand, mutator: (draft: MutableModel<Brand>) => MutableModel<Brand> | void): Brand;
}