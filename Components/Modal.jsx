import { useState } from "react";
import { useModalContext } from "./ModalContextProvider";

const spaces = [
  {
    id: "panncentralen",
    label: "Panncentralen",
  },
  {
    id: "musikverket",
    label: "Musikverket",
  },
];

const Modal = () => {
  const [formValues, setFormValues] = useState({
    space: "",
    date: "",
    additionalInfo: "",
  });
  const { setIsOpen } = useModalContext();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleChange = (event) => {
    setFormValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative flex flex-col m-auto max-w-5xl w-[90vw] mb-8 p-8 bg-gray-600 bg-opacity-80"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-GtAmericaExpandedBlack text-xl">BOOK A SPACE</h2>
        <button
          className="absolute right-4 top-4 font-GtAmericaExpandedBlack text-xs"
          onClick={() => setIsOpen(false)}
          type="button"
        >
          X
        </button>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-white" htmlFor="space">
            SELECT THE SPACE
          </label>
          <select
            className="w-full p-4 bg-black bg-opacity-80"
            style={{ borderRight: "16px solid transparent" }}
            name="space"
            id="space"
            onChange={handleChange}
          >
            <option className="hidden"></option>
            {spaces.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <label className="text-white" htmlFor="date">
            CHOOSE A DATE
          </label>
          <input
            style={{ colorScheme: "dark" }}
            onChange={handleChange}
            name="date"
            id="date"
            className="p-4 bg-black bg-opacity-80"
            type="datetime-local"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-white" htmlFor="additionalInfo">
            ADDITIONAL INFORMATION
          </label>
          <textarea
            onChange={handleChange}
            className="p-4 bg-black bg-opacity-80"
            name="additionalInfo"
            id="additionalInfo"
            cols="30"
            rows="5"
          />
        </div>
      </div>
      <button className="bg-gray-400 p-2 mt-4 ml-auto" type="submit">
        SEND REQUEST
      </button>
    </form>
  );
};

export default Modal;
