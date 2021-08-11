import React, { useState } from "react";
import FormInput from "./FormInput";
import HeroButton from "./HeroButton";
import TextButton from "./TextButton";
import { addSofaIState, sofaProps } from "../../utils/constants";
import { CreateOneSofa, CreateOneCategorie } from "../../graphql";

const AddInventory = () => {
  const [state, setState] = useState(addSofaIState);
  const clearForm = (e) => {
    e?.preventDefault();
    setState(addSofaIState);
  };
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setState((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const {
    name,
    brand,
    price,
    categories,
    image,
    description,
    stock,
    categoryName,
    categoryValue,
  } = state;
  const CreateSofa = async () => {
    CreateOneSofa(state, setLoading).then(() => clearForm());
  };
  const CreateCategorie = async () => {
    CreateOneCategorie(categoryName, categoryValue, setLoading).then(() => clearForm());;
  };
  const SofaPropsFunc = sofaProps({
    name,
    brand,
    price,
    categories,
    image,
    description,
    stock,
    onChange,
  });
  return (
    <div>
      <div className="flex flex-1 justify-center">
        <div className="w-full max-w-144">
          <h3 className="text-3xl">Add Sofa</h3>
          <form className="bg-white shadow-xs rounded px-8 pt-6 pb-8 mb-4">
            {SofaPropsFunc.map((data, index) => (
              <FormInput
                {...data}
                key={`${data.title.toLowerCase()}${index}`}
              />
              //title={title} onChange={onchnage}==={...data}
            ))}
            <div className="flex items-center justify-between mt-4">
              <HeroButton
                onClick={CreateSofa}
                title={loading ? "Loading..." : "Add Item"}
              />
              <TextButton onClick={clearForm} title="Clear Form" />
            </div>
          </form>
        </div>
        <div className="w-full max-w-144">
          <h3 className="text-3xl">Add Category</h3>
          <form className="bg-white shadow-xs rounded px-8 pt-6 pb-8 mb-4">
            <FormInput
              title="Name"
              onChange={onChange}
              value={categoryName}
              name={"categoryName"}
            />
            <FormInput
              title="Value"
              onChange={onChange}
              value={categoryValue}
              name={"categoryValue"}
            />
            <div className="flex items-center justify-between mt-4">
              <HeroButton onClick={CreateCategorie} title="Add Item" />
              <TextButton onClick={clearForm} title="Clear Form" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddInventory;
