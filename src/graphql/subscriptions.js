/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateService = /* GraphQL */ `
  subscription OnCreateService {
    onCreateService {
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
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService {
    onUpdateService {
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
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService {
    onDeleteService {
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
export const onCreateUzel = /* GraphQL */ `
  subscription OnCreateUzel {
    onCreateUzel {
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
export const onUpdateUzel = /* GraphQL */ `
  subscription OnUpdateUzel {
    onUpdateUzel {
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
export const onDeleteUzel = /* GraphQL */ `
  subscription OnDeleteUzel {
    onDeleteUzel {
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
export const onCreateAdvantage = /* GraphQL */ `
  subscription OnCreateAdvantage {
    onCreateAdvantage {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdvantage = /* GraphQL */ `
  subscription OnUpdateAdvantage {
    onUpdateAdvantage {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdvantage = /* GraphQL */ `
  subscription OnDeleteAdvantage {
    onDeleteAdvantage {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateModel = /* GraphQL */ `
  subscription OnCreateModel {
    onCreateModel {
      id
      brandID
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateModel = /* GraphQL */ `
  subscription OnUpdateModel {
    onUpdateModel {
      id
      brandID
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteModel = /* GraphQL */ `
  subscription OnDeleteModel {
    onDeleteModel {
      id
      brandID
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
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
