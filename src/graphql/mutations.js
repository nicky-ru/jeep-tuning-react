/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAdvantage = /* GraphQL */ `
  mutation CreateAdvantage(
    $input: CreateAdvantageInput!
    $condition: ModelAdvantageConditionInput
  ) {
    createAdvantage(input: $input, condition: $condition) {
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
export const updateAdvantage = /* GraphQL */ `
  mutation UpdateAdvantage(
    $input: UpdateAdvantageInput!
    $condition: ModelAdvantageConditionInput
  ) {
    updateAdvantage(input: $input, condition: $condition) {
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
export const deleteAdvantage = /* GraphQL */ `
  mutation DeleteAdvantage(
    $input: DeleteAdvantageInput!
    $condition: ModelAdvantageConditionInput
  ) {
    deleteAdvantage(input: $input, condition: $condition) {
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
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
      id
      name
      description
      price
      uzelID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
      id
      name
      description
      price
      uzelID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
      id
      name
      description
      price
      uzelID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUzel = /* GraphQL */ `
  mutation CreateUzel(
    $input: CreateUzelInput!
    $condition: ModelUzelConditionInput
  ) {
    createUzel(input: $input, condition: $condition) {
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
export const updateUzel = /* GraphQL */ `
  mutation UpdateUzel(
    $input: UpdateUzelInput!
    $condition: ModelUzelConditionInput
  ) {
    updateUzel(input: $input, condition: $condition) {
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
export const deleteUzel = /* GraphQL */ `
  mutation DeleteUzel(
    $input: DeleteUzelInput!
    $condition: ModelUzelConditionInput
  ) {
    deleteUzel(input: $input, condition: $condition) {
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
export const createModel = /* GraphQL */ `
  mutation CreateModel(
    $input: CreateModelInput!
    $condition: ModelModelConditionInput
  ) {
    createModel(input: $input, condition: $condition) {
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
export const updateModel = /* GraphQL */ `
  mutation UpdateModel(
    $input: UpdateModelInput!
    $condition: ModelModelConditionInput
  ) {
    updateModel(input: $input, condition: $condition) {
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
export const deleteModel = /* GraphQL */ `
  mutation DeleteModel(
    $input: DeleteModelInput!
    $condition: ModelModelConditionInput
  ) {
    deleteModel(input: $input, condition: $condition) {
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
export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
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
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
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
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
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
