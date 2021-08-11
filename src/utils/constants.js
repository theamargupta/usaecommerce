//Add Sofa Intial State
export const addSofaIState = {
  name: "",
  price: "",
  categories: [],
  image: "",
  description: "",
  stock: "",
  brand: "",
  categoryName: "",
  categoryValue: "",
};
export const sofaProps = ({
  onChange,
  name,
  price,
  description,
  image,
  stock,
  categories,
  brand,
}) => [
  { title: "Name", onChange, value: name },
  { title: "Price", onChange, value: price },
  { title: "Description", onChange, value: description },
  { title: "Image", onChange, value: image },
  { title: "Stock", onChange, value: stock },
  { title: "Categories", onChange, value: categories },
  { title: "Brand", onChange, value: brand },
];
