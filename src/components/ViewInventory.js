import DENOMINATION from "../utils/currencyProvider";
import Image from "../components/Image";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { deleteOneSofa, fetchAllSofas } from "../graphql";

const ViewInventory = () => {
  const [state, setState] = useState({
    inventory: [],
    currentItem: {},
    editingIndex: [],
  });
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  useEffect(() => {
    fetchAllSofas(setLoading).then((sofas) =>
      setState((otherState) => ({ ...otherState, inventory: sofas }))
    );
  }, []);

  const editItem = (item, index) => {
    const editingIndex = index;
    setState((otherState) => ({
      ...otherState,
      editingIndex,
      currentItem: item,
    }));
  };
  const saveItem = async (index) => {
    const inventory = [...state.inventory];
    inventory[index] = state.currentItem;
    // update item in database
    setState({ editingIndex: null, inventory });
  };
  const deleteItem = async (id) => {
    deleteOneSofa(id, setButtonLoading).then((deleteData) => {
      return setState((otherState) => {
        const newInventory = otherState.inventory.filter(
          (data) => data.id !== deleteData.deleteSofa.id
        );
        return {
          ...otherState,
          inventory: newInventory,
        };
      });
    });
  };
  const onChange = (event) => {
    const currentItem = {
      ...state.currentItem,
      [event.target.name]: event.target.value,
    };

    setState({ currentItem });
  };

  const { inventory, currentItem, editingIndex } = state;
  if (loading) return <p>Loading....</p>;
  return (
    <div>
      <h2 className="text-3xl">Inventory</h2>
      {inventory.map((item, index) => {
        const isEditing = editingIndex === index;
        if (isEditing) {
          if (buttonLoading) return loading;
          return (
            <div className="border-b py-10" key={item.id}>
              <div className="flex items-center">
                <Image
                  className="w-32 m-0 cursor-pointer"
                  src={item.image}
                  alt={item.name}
                />
                <input
                  onChange={(e) => onChange(e, index)}
                  className="ml-8 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={currentItem.name}
                  placeholder="Item name"
                  name="name"
                />
                <div className="flex flex-1 justify-end items-center">
                  <p className="m-0 text-sm mr-2">In stock:</p>
                  <input
                    onChange={onChange}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={currentItem.currentInventory}
                    name="currentInventory"
                    placeholder="Item inventory"
                  />
                  <input
                    onChange={onChange}
                    className="ml-16 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={currentItem.price}
                    name="price"
                    placeholder="Item price"
                  />
                </div>
                <div
                  role="button"
                  onClick={() => saveItem(index)}
                  className="m-0 ml-10 text-gray-900 text-s cursor-pointer"
                >
                  <p className="text-sm ml-10 m-0">Save</p>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div className="border-b py-10" key={item.id}>
            <div className="flex items-center">
              <Image
                className="w-32 m-0 cursor-pointer"
                src={item.image}
                alt={item.name}
              />
              <p className="m-0 pl-10 text-gray-600 text-sm cursor-pointer">
                {item.name}
              </p>
              <div className="flex flex-1 justify-end">
                <p className="m-0 pl-10 text-gray-900 text-sm">
                  In stock: {item.currentInventory}
                </p>
                <p className="m-0 pl-20 text-gray-900 font-semibold">
                  {DENOMINATION + item.price}
                </p>
              </div>
              <div className="flex items-center m-0 ml-10 text-gray-900 text-s cursor-pointer">
                <FaTimes onClick={() => deleteItem(item.id)} />
                <p
                  role="button"
                  onClick={() => editItem(item, index)}
                  className="text-sm ml-10 m-0"
                >
                  Edit
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewInventory;
