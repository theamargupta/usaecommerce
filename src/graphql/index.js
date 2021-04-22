import gql from 'graphql-tag';

export const HOME_DATA = gql`
  query {
    Sofa(where: { id: "607f2f1efa60a7707693ca11" }) {
      categories {
        name
      }
      id
      name
      price
      currentInventory
      image
      description
      brand
    }
    newArrivals: allSofas(
      where: { categories_some: { value: "newArrivals" } }
      first: 1
    ) {
      categories: categories {
        name
      }
      id
      name
      price
      currentInventory
      image
      description
      brand
    }
    newArrivalsCount: _allSofasMeta(
      where: { categories_some: { value: "newArrivals" } }
    ) {
      count
    }
    sofas: allSofas(where: { categories_some: { value: "sofas" } }, first: 1) {
      categories {
        name
      }
      id
      name
      price
      currentInventory
      image
      description
      brand
    }
    sofasCount: _allSofasMeta(where: { categories_some: { value: "sofas" } }) {
      count
    }
    trending: allSofas(first: 4) {
      categories {
        name
      }
      id
      name
      price
      currentInventory
      image
      description
      brand
    }
    allCategories {
      value
      name
    }
  }
`;
export const GET_CATEGORIES = gql`
  query getCategory($value: String!) {
    allSofas(where: { categories_some: { value: $value } }) {
      categories {
        name
      }
      id
      name
      price
      currentInventory
      image
      description
      brand
    }
  }
`;
export const ALL_CATEGORIES = gql`
  {
    allCategories {
      value
      name
    }
  }
`;
export const GET_ONE_CATEGORY = gql`
  query getCategories($value: String!) {
    allSofas(where: { categories_some: { value: $value } }, first: 1) {
      categories {
        name
      }
      id
      name
      price
      currentInventory
      image
      description
      brand
    }
    countData: _allSofasMeta(where: { categories_some: { value: $value } }) {
      count
    }
  }
`;
export const GET_ONE_SOFA = gql`
  query getOneSofa($productId: ID!) {
    Sofa(where: { id: $productId }) {
      categories {
        name
      }
      name
      price
      currentInventory
      image
      description
      brand
    }
  }
`;
export const USER_AUTHENTICATE = gql`
  mutation userAuth($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
    }
  }
`;
export const POST_MUTATION = gql`
  mutation PostMutation($id: ID!, $data: PostUpdateInput!) {
    updatePost(id: $id, data: $data) {
      id
    }
  }
`;
