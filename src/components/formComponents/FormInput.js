const FormInput = ({ onChange, title, value, name }) => (
  <div className="mb-4">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={title.toLowerCase()}
    >
      {title}
    </label>
    <input
      onChange={onChange}
      value={value}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      id={title.toLowerCase()}
      type="text"
      placeholder={title}
      name={name || title.toLowerCase()}
    />
  </div>
);

export default FormInput;
