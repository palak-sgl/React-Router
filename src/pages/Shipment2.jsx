import { useState } from "react";
import Label from "../components/Label";
import Input from "../components/Input";

const Shipment2 = ({
  setProductName,
  setHsn,
  setQty,
  productNameMessage,
  hsnMessage,
  qtyMessage,
}) => {
  const [addComponent, setAddComponent] = useState([{ component: "" }]);

  const handleAddComponent = () => {
    setAddComponent((prev) => [...prev, { component: "" }]);
  };
  const handleRemoveComponent = (indexToRemove) => {
    const updatedComponents = addComponent.filter(
      (_, index) => index !== indexToRemove
    );
    setAddComponent(updatedComponents);
  };

  const igst = [
    { value: "india", label: "0%" },
    { value: "usa", label: "10%" },
  ];

  return (
    <div>
      {addComponent.map((singleComponent, index) => (
        <div className="grid lg:grid-cols-6 gap-2 py-2 px-6 md:grid-cols-2 mt-2">
          <div>
            <Label someLabel="Product Name">
              <span className="text-red-600 ml-1">*</span>{" "}
            </Label>
            <Input
              type="text"
              placeholder="Enter Product Name.."
              className="w-24"
              onChange={(e) => setProductName(e.target.value)}
            />
            <p className="text-xs text-red-600 font-medium">
              {productNameMessage}
            </p>
          </div>
          <div>
            <Label someLabel="SKU"></Label>
            <Input type="text" placeholder="Enter SKU.." />
          </div>
          <div>
            <Label someLabel="HSN">
              <span className="text-red-600 ml-1">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter HSN.."
              onChange={(e) => setHsn(e.target.value)}
            />
            <p className="text-xs text-red-600 font-medium">{hsnMessage}</p>
          </div>

          <div>
            <Label someLabel="Qty">
              <span className="text-red-600 ml-1">*</span>
            </Label>
            <Input
              type="number"
              placeholder="Enter Qty.."
              onChange={(e) => setQty(e.target.value)}
            />
            <p className="text-xs text-red-600 font-medium">{qtyMessage}</p>
          </div>
          <div>
            <Label someLabel="Unit Price (INR)">
              <span className="text-red-600 ml-1">*</span>
            </Label>
            <Input type="number" placeholder="Enter Unit Price (INR).." />
          </div>
          <div>
            <Label someLabel="IGST">
              <span className="text-red-600 ml-1">*</span>
            </Label>
            <div className="flex items-center">
              <div>
                <select
                  name="igst"
                  className=" mt-2 text-sm text-gray-400 px-3 py-[7px] border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-600  focus:outline-none  transition-all duration-200 hover:bg-gray-50 sm:w-full cursor-not-allowed "
                  disabled
                >
                  <option value="0">0%</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                </select>
              </div>
              {index > 0 && (
                <button
                  onClick={() => handleRemoveComponent(index)}
                  className="ml-3 mt-1 text-red-600"
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
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
