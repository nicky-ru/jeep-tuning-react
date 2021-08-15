/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAdvantage = /* GraphQL */ `
  query GetAdvantage($id: ID!) {
    getAdvantage(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listAdvantages = /* GraphQL */ `
  query ListAdvantages(
    $filter: ModelAdvantageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdvantages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAdvantages = /* GraphQL */ `
  query SyncAdvantages(
    $filter: ModelAdvantageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAdvantages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
      id
      name
      description
      uzelID
      prices
      pricesInfo
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        uzelID
        prices
        pricesInfo
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncServices = /* GraphQL */ `
  query SyncServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        uzelID
        prices
        pricesInfo
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUzel = /* GraphQL */ `
  query GetUzel($id: ID!) {
    getUzel(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Services {
        nextToken
        startedAt
      }
    }
  }
`;
export const listUzels = /* GraphQL */ `
  query ListUzels(
    $filter: ModelUzelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUzels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUzels = /* GraphQL */ `
  query SyncUzels(
    $filter: ModelUzelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUzels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getModel = /* GraphQL */ `
  query GetModel($id: ID!) {
    getModel(id: $id) {
      id
      brandID
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listModels = /* GraphQL */ `
  query ListModels(
    $filter: ModelModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brandID
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncModels = /* GraphQL */ `
  query SyncModels(
    $filter: ModelModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        brandID
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
      id
      name
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Cars {
        nextToken
        startedAt
      }
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBrands = /* GraphQL */ `
  query SyncBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBrands(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
