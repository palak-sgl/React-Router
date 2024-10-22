import { useState } from "react";
import Label from "../components/Label";
import InputForm from "../components/InputForm";

const Shipment2 = ({ handleInputChange, errorMessages }) => {
  const [addComponent, setAddComponent] = useState([{ component: "" }]);
  const handleAddComponent = (e) => {
    e.preventDefault();
    setAddComponent((prev) => [...prev, { component: "" }]);
  };
  const handleRemoveComponent = (indexToRemove) => {
    const updatedComponents = addComponent.filter(
      (_, index) => index !== indexToRemove
    );
    setAddComponent(updatedComponents);
  };
  const igst = [{ value: "india", label: "0%" }];

  return (
    <div>
      {addComponent.map((singleComponent, index) => (
        <div className="grid lg:grid-cols-6 gap-2 py-2 px-6 md:grid-cols-2 mt-2">
          <div>
            <InputForm
              someLabel="Product Name"
              type="text"
              name="productName"
              placeholder="Enter Product Name.."
              className="w-24"
              onChange={handleInputChange}
              required
            />
            <p className="text-xs text-red-600 font-medium">
              {errorMessages.productNameMessage}
            </p>
          </div>
          <div>
            <InputForm someLabel="SKU" type="text" placeholder="Enter SKU.." />
          </div>
          <div>
            <InputForm
              someLabel="HSN"
              type="text"
              placeholder="Enter HSN.."
              name="hsn"
              onChange={handleInputChange}
              required
            />
            <p className="text-xs text-red-600 font-medium">
              {errorMessages.hsnMessage}
            </p>
          </div>

          <div>
            <InputForm
              someLabel="Qty"
              type="number"
              placeholder="Enter Qty.."
              name="qty"
              onChange={handleInputChange}
              required
            />
            <p className="text-xs text-red-600 font-medium">
              {errorMessages.qtyMessage}
            </p>
          </div>
          <div>
            <InputForm
              someLabel="Unit Price (INR)"
              type="number"
              placeholder="Enter Unit Price (INR).."
              name="unitPrice"
              onChange={handleInputChange}
              required
            />
            <p className="text-xs text-red-600 font-medium">
              {errorMessages.unitPriceMessage}
            </p>
          </div>
          <div>
            <Label someLabel="IGST" required></Label>
            <div className="flex items-center">
              <div>
                <select
                  name="igst"
                  className=" mt-2 text-sm text-gray-400 px-3 py-[7px] border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-600  focus:outline-none  transition-all duration-200 hover:bg-gray-50 sm:w-full cursor-not-allowed "
                  disabled
                >
                  <option value="0">0%</option>
                </select>
              </div>
              {index > 0 && (
                <div
                  onClick={() => handleRemoveComponent(index)}
                  className="ml-3 mt-1 text-red-600"
                >
                  <i className="fa-regular fa-trash-can"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <h2 className="font-semibold text-end mr-4">Total Price : INR 0.00</h2>
      <button
        className="text-indigo-800 font-semibold ml-4 "
        onClick={handleAddComponent}
      >
        +{" "}
        <span className="text-indigo-800 font-normal underline">
          Add Another Product
        </span>
      </button>
    </div>
  );
};
export default Shipment2;
