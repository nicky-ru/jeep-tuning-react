import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AppointmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ServiceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AdvantageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UzelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BrandMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Appointment {
  readonly id: string;
  readonly Model?: Model;
  readonly Service?: Service;
  readonly ContactInfo?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Appointment, AppointmentMetaData>);
  static copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment, AppointmentMetaData>) => MutableModel<Appointment, AppointmentMetaData> | void): Appointment;
}

export declare class Model {
  readonly id: string;
  readonly brandID?: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Model, ModelMetaData>);
  static copyOf(source: Model, mutator: (draft: MutableModel<Model, ModelMetaData>) => MutableModel<Model, ModelMetaData> | void): Model;
}

export declare class Service {
  readonly id: string;
  readonly name: string;
  readonly description?: (string | null)[];
  readonly uzelID?: string;
  readonly prices?: (number | null)[];
  readonly pricesInfo?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Service, ServiceMetaData>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service, ServiceMetaData>) => MutableModel<Service, ServiceMetaData> | void): Service;
}

export declare class Advantage {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Advantage, AdvantageMetaData>);
  static copyOf(source: Advantage, mutator: (draft: MutableModel<Advantage, AdvantageMetaData>) => MutableModel<Advantage, AdvantageMetaData> | void): Advantage;
}

export declare class Uzel {
  readonly id: string;
  readonly name: string;
  readonly Services?: (Service | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Uzel, UzelMetaData>);
  static copyOf(source: Uzel, mutator: (draft: MutableModel<Uzel, UzelMetaData>) => MutableModel<Uzel, UzelMetaData> | void): Uzel;
}

export declare class Brand {
  readonly id: string;
  readonly name: string;
  readonly Cars?: (Model | null)[];
  readonly image?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Brand, BrandMetaData>);
  static copyOf(source: Brand, mutator: (draft: MutableModel<Brand, BrandMetaData>) => MutableModel<Brand, BrandMetaData> | void): Brand;
}