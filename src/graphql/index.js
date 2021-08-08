import { request } from "graphql-request";
const url =
  "https://api-ap-northeast-1.graphcms.com/v2/cks2xui855rhq01z8f0ko4g6x/master";
export const fetchHomeData = async (setLoading) => {
  setLoading(true);
  try {
    const data = await request(
      url,
      `
    query {
      Sofa:sofa(where: { id: "cks2zbag8nwg60b292j7rzmk9" }) {
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
      newArrivals: categorie (where:{value:"new-arrivals"}){
        sofa(first:1) {
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
      }
      newArrivalsCount: categorie (where:{value:"new-arrivals"}){
        sofa{
          id
        }
      }
      sofas: categorie (where:{value:"sofas"}){
        sofa(first:1) {
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
      }
      sofasCount: categorie (where:{value:"sofas"}){
        sofa{
          id
        }
      }
      trending: sofas(first: 4) {
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
  `
    );
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export const fetchCategory = async (value, setLoading) => {
  setLoading(true);
  try {
    const variables = {
      value: value,
    };
    const data = await request(
      url,
      `
    query ($value:String!){
      categorie (where:{value: $value}){
        sofa{categories {
          name
        }
        id
        name
        price
        currentInventory
        image
        description
        brand}
      }
    }
  `,
      variables
    );
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export const fetchAllCategory = async (setLoading) => {
  setLoading(true);
  try {
    const data = await request(
      url,
      `
    {
      allCategories:categories{
        name
        value
      }
    }
  `
    );
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export const fetchOneCategory = async (value, setLoading) => {
  setLoading(true);
  try {
    const variables = {
      value: value,
    };
    const data = await request(
      url,
      `
  query ($value:String!){
    allSofas: categorie(where: {value: $value}) {
      sofa(first:1) {
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
    countData: categorie(where: {value: $value}) {
      sofa {
        id
      }
    }
  }
  `,
      variables
    );
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export const fetchOneProduct= async (value, setLoading) => {
  setLoading(true);
  try {
    const variables = {
      productId: value,
    };
    const data = await request(
      url,
      `
  query ($productId:ID){
    Sofa: sofa(where: {id: $productId}) {
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
  `,
      variables
    );
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};


// export const USER_AUTHENTICATE = request(url,`
//   mutation userAuth($email: String!, $password: String!) {
//     authenticateUserWithPassword(email: $email, password: $password) {
//       token
//     }
//   }
// `);
// export const POST_MUTATION = request(url,`
//   mutation PostMutation($id: ID!, $data: PostUpdateInput!) {
//     updatePost(id: $id, data: $data) {
//       id
//     }
//   }
// `);
// query{
//   categorie (where:{value:"new-arrivals"}){
//     sofa {
//       id
//       name
//     }
//   }
// }
