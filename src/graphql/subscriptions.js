/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAdvantage = /* GraphQL */ `
  subscription OnCreateAdvantage {
    onCreateAdvantage {
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
export const onUpdateAdvantage = /* GraphQL */ `
  subscription OnUpdateAdvantage {
    onUpdateAdvantage {
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
export const onDeleteAdvantage = /* GraphQL */ `
  subscription OnDeleteAdvantage {
    onDeleteAdvantage {
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
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService {
    onCreateService {
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
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService {
    onUpdateService {
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
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService {
    onDeleteService {
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
export const onCreateUzel = /* GraphQL */ `
  subscription OnCreateUzel {
    onCreateUzel {
      id
      name
      Services {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUzel = /* GraphQL */ `
  subscription OnUpdateUzel {
    onUpdateUzel {
      id
      name
      Services {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUzel = /* GraphQL */ `
  subscription OnDeleteUzel {
    onDeleteUzel {
      id
      name
      Services {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      Cars {
        nextToken
        startedAt
      }
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
      id
      name
      Cars {
        nextToken
        startedAt
      }
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
      id
      name
      Cars {
        nextToken
        startedAt
      }
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
