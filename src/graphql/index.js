import { request, GraphQLClient } from "graphql-request";
import { toast } from "react-toastify";
const url =
  "https://api-ap-northeast-1.graphcms.com/v2/cks2xui855rhq01z8f0ko4g6x/master";
const token = process.env.REACT_APP_PAT;

const graphQLClient = new GraphQLClient(url, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});

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
export const fetchOneProduct = async (value, setLoading) => {
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
const publishSofa = async (data) => {
  try {
    const variables = {
      SofaID: data.createSofa.id,
    };
    const resp = await graphQLClient.request(
      `
      mutation ($SofaID: ID) {
        publishSofa(where: {id: $SofaID}, to: PUBLISHED) {
          name
          id
        }
      }
  `,
      variables
    );
    toast(`Successfully Added ${resp.publishSofa.name}`, {
      position: toast.POSITION.TOP_LEFT,
    });
  } catch (error) {
    console.error(error);
  }
};
export const CreateOneSofa = async (
  { name, price, categories, image, description, stock, brand },
  setLoading
) => {
  setLoading(true);
  try {
    const variables = {
      data: {
        name: name,
        price: Number(price),
        image: image,
        description: description,
        currentInventory: Number(stock),
        brand: brand,
      },
    };

    const data = await graphQLClient.request(
      `
      mutation($data:SofaCreateInput!){
        createSofa(data: $data
        ) {
          id
        }
      }
  `,
      variables
    );
    publishSofa(data);
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
const publishCategory = async (data) => {
  try {
    const variables = {
      categorieID: data.createCategorie.id,
    };
    const resp = await graphQLClient.request(
      `
      mutation ($categorieID: ID) {
        publishCategorie(where: {id: $categorieID}, to: PUBLISHED) {
          id
          name
        }
      }
  `,
      variables
    );
    toast(`Successfully Added ${resp.publishCategorie.name}`, {
      position: toast.POSITION.TOP_LEFT,
    });
  } catch (error) {
    console.error(error);
  }
};
export const CreateOneCategorie = async (name, value, setLoading) => {
  setLoading(true);
  try {
    const variables = {
      data: {
        name: name,
        value: value,
      },
    };
    const data = await graphQLClient.request(
      `
      mutation($data:CategorieCreateInput!){
        createCategorie(data: $data
        ) {
          id
        }
      }
  `,
      variables
    );
    publishCategory(data);
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export const fetchAllSofas = async (setLoading) => {
  setLoading(true);
  try {
    const data = await request(
      url,
      `{
        sofas {
          id
          name
          image
          price
          currentInventory
        }
      }`
    );
    return data.sofas;
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
export const deleteOneSofa = async (id, setLoading) => {
  setLoading(true);
  try {
    const variables = {
      sofaID: id,
    };
    const data = await graphQLClient.request(
      `mutation($sofaID:ID!){
          deleteSofa(where:{id:$sofaID}){
            id
            name
          }
        }
      `,
      variables
    );
    toast(`Successfully Deleted ${data.deleteSofa.name}`, {
      position: toast.POSITION.TOP_LEFT,
    });
    return data;
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

