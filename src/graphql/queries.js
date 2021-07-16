/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
      id
      name
      description
      price
      uzelID
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
        price
        uzelID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUzel = /* GraphQL */ `
  query GetUzel($id: ID!) {
    getUzel(id: $id) {
      id
      name
      createdAt
      updatedAt
      Services {
        nextToken
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAdvantage = /* GraphQL */ `
  query GetAdvantage($id: ID!) {
    getAdvantage(id: $id) {
      id
      name
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getModel = /* GraphQL */ `
  query GetModel($id: ID!) {
    getModel(id: $id) {
      id
      brandID
      name
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
      id
      name
      image
      createdAt
      updatedAt
      Cars {
        nextToken
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
