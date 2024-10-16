import React, { Component, useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
// import Accordion from "../components/Accordian";
import DatePicker from "../components/DatePicker";
import Select from "../components/Select";
import Shipment2 from "./Shipment2";
import Button from "../components/Button";

function ShipmentInformation() {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceNumberMessage, setInvoiceNumberMessage] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [invoiceDateMessage, setInvoiceDateMessage] = useState("");
  const [deadWeight, setDeadWeight] = useState("");
  const [deadWeightMessage, setDeadWeightMessage] = useState("");
  const [length, setLength] = useState("");
  const [lengthMessage, setLengthMessage] = useState("");
  const [breadth, setBreadth] = useState("");
  const [breadthMessage, setBreadthMessage] = useState("");
  const [height, setHeight] = useState("");
  const [heightMessage, setHeightMessage] = useState("");
  const [productName, setProductName] = useState("");
  const [productNameMessage, setProductNametMessage] = useState("");
  const [hsn, setHsn] = useState("");
  const [hsnMessage, setHsnMessage] = useState("");
  const [qty, setQty] = useState("");
  const [qtyMessage, setQtyMessage] = useState("");

  const invoiceNumberValidation = () => {
    const regEx = /[a-zA-Z0-9]$/;
    if (invoiceNumber === "") {
      setInvoiceNumberMessage("Please Enter Invoice Number");
    } else if (!regEx.test(invoiceNumber)) {
      setInvoiceNumberMessage("Please enter alphanumeric characters");
    } else {
      setInvoiceNumberMessage("");
    }
  };

  const invoiceDateValidation = () => {
    if (invoiceDate === "") {
      setInvoiceDateMessage("Please select Invoice Date");
    } else {
      setInvoiceDateMessage("");
    }
  };

  const deadWeightValidation = () => {
    if (deadWeight === "" || deadWeight < 0.01) {
      setDeadWeightMessage("Weight must be atleast 0.01 KG");
    } else {
      setDeadWeightMessage("");
    }
  };

  const lengthValidation = () => {
    if (length === "" || length < 1) {
      setLengthMessage("Length must be atleast 1 cm");
    } else {
      setLengthMessage("");
    }
  };

  const breadthValidation = () => {
    if (breadth === "" || breadth < 1) {
      setBreadthMessage("Breadth must be atleast 1 cm");
    } else {
      setBreadthMessage("");
    }
  };

  const heightValidation = () => {
    if (height === "" || height < 1) {
      setHeightMessage("Height must be atleast 1 cm");
    } else {
      setHeightMessage("");
    }
  };

  const productNameValidation = () => {
    if (productName === "") {
      setProductNametMessage("Required");
    } else {
      setProductNametMessage("");
    }
  };

  const hsnValidation = () => {
    if (hsn === "") {
      setHsnMessage("HSN must be 8 digits long");
    } else {
      setHsnMessage("");
    }
  };

  const qtyValidation = () => {
    if (qty === "") {
      setQtyMessage("Required");
    } else {
      setQtyMessage("");
    }
  };

  const handleValidation = (e) => {
    e.preventDefault();
    invoiceNumberValidation();
    invoiceDateValidation();
    deadWeightValidation();
    lengthValidation();
    breadthValidation();
    heightValidation();
    productNameValidation();
    hsnValidation();
    qtyValidation();
    handleSubmit(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      invoiceNumber,
    });
  };

  const currency = [
    { value: "india", label: "INR" },
    { value: "usa", label: "USD" },
    { value: "india", label: "EUR" },
    { value: "russia", label: "CAD" },
    { value: "japan", label: "AUD" },
  ];

  return (
    <div>
      <form onSubmit={handleValidation}>
        <div className="grid lg:grid-cols-3 gap-3 py-2 px-6 md:grid-cols-2">
          <div>
            <Label someLabel="Invoice Number">
              <span className="text-red-600 ml-1">*</span>{" "}
            </Label>
            <Input
              type="text"
              placeholder="Enter Invoice Number.."
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />
            <p className="text-xs text-red-600 font-medium">
              {invoiceNumberMessage}
            </p>
          </div>
          <div>
            <Label someLabel="Invoice Date">
              <span className="text-red-600 ml-1">*</span>{" "}
            </Label>
            <DatePicker
              placeholder={"Pick a Date"}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
            <p className="text-xs text-red-600 font-medium">
              {invoiceDateMessage}
            </p>
          </div>
          <div>
            <Label someLabel="Invoice Currency">
              <span className="text-red-600 ml-1">*</span>{" "}
            </Label>
            <Select options={currency} className="w-52" />
          </div>
          <div>
            <Label someLabel="Order/Reference ID"></Label>
            <Input type="email" placeholder="Enter Order/Reference ID.." />
          </div>
          <div>
            <Label someLabel="IOSS Number"></Label>
            <Input type="email" placeholder="Enter IOSS Number.." />
          </div>
        </div>

        <div className="pt-1 px-6">
          <h2 className="text-[15px] font-semibold text-left mt-3">
            Box Measurements
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 gap-2 py-2 px-6 md:grid-cols-2">
          <div>
            <Label someLabel="Dead Weight">
              <span className="text-red-600 ml-1">*</span>{" "}
            </Label>
            <div className="flex  mt-2">
              <input
                type="number"
                placeholder="Eg. 1.25"
                className="flex-grow p-2 border rounded-l border-gray-200 focus:border-l-indigo-600 focus:border-t-indigo-600 focus:border-b-indigo-600 focus:outline-none transition-all duration-200 hover:bg-gray-50 w-28"
                onChange={(e) => setDeadWeight(e.target.value)}
              />
              <span className="px-3 bg-gray-200 rounded-r border border-gray-200 py-1.5">
                kg
              </span>{" "}
              {/* Fixed component */}
            </div>
            <p className="text-xs text-red-600 font-medium">
              {deadWeightMessage}
            </p>
          </div>
          <div>
            <Label someLabel="Length">
              <span className="text-red-600 ml-1">*</span>{" "}
            </Label>
            <div className="flex mt-2">
              <input
                type="number"
                placeholder="Eg. 1.25"
                className="flex-grow p-2 border rounded-l border-gray-200  focus:border-l-indigo-600 focus:border-t-indigo-600 focus:border-b-indigo-600 focus:outline-none transition-all duration-200 hover:bg-gray-50 w-28"
                onChange={(e) => setLength(e.target.value)}
              />
              <span className="px-3 bg-gray-200 border-gray-200  rounded-r py-1.5 border border-l-gray-200">
                cm
              </span>{" "}
              {/* Fixed component */}
            </div>
            <p className="text-xs text-red-600 font-medium">{lengthMessage}</p>
          </div>
          <div>
            <Label someLabel="Breadth">
              <span className="text-red-600 ml-1">*</span>{" "}
            </Label>
            <div className="flex  mt-2">
              <input
                type="number"
                placeholder="Eg. 1.25"
                className="flex-grow p-2 border rounded-l-md  focus:border-l-indigo-600 focus:border-t-indigo-600 focus:border-b-indigo-600 focus:outline-none transition-all duration-200 hover:bg-gray-50 w-28"
                onChange={(e) => setBreadth(e.target.value)}
              />
              <span className="px-3 bg-gray-200 border border-l-gray-200 rounded-r py-1.5">
                cm
              </span>{" "}
              {/* Fixed component */}
            </div>
            <p className="text-xs text-red-600 font-medium">{breadthMessage}</p>
          </div>
          <div>
            <Label someLabel="Height">
              <span className="text-red-600 ml-1">*</span>{" "}
            </Label>
            <div className="flex  mt-2">
              <input
                type="number"
                placeholder="Eg. 1.25"
                className="flex-grow p-2 border rounded-l-md  focus:border-l-indigo-600 focus:border-t-indigo-600 focus:border-b-indigo-600 focus:outline-none transition-all duration-200 hover:bg-gray-50 w-28"
                onChange={(e) => setHeight(e.target.value)}
              />
              <span className="px-3 bg-gray-200 rounded-r-md py-1.5">cm</span>{" "}
              {/* Fixed component */}
            </div>
            <p className="text-xs text-red-600 font-medium">{heightMessage}</p>
          </div>
        </div>

        <div className="pt-1 px-6">
          <h2 className="text-[15px] font-semibold text-left mt-3">
            Item(s) Details{" "}
            <span className="bg-orange-50 font-light text-red-400 text-[11px] rounded-md ml-2 p-1">
              Items that can export
            </span>
          </h2>
        </div>

        <Shipment2
          setProductName={setProductName}
          setHsn={setHsn}
          setQty={setQty}
          productNameMessage={productNameMessage}
          hsnMessage={hsnMessage}
          qtyMessage={qtyMessage}
        />
        <Button
          label="Select Shipping"
          color="indigo"
          type="button"
          onClick={handleValidation}
          className="ml-[550px]"
        />
      </form>
    </div>
  );
}

export default ShipmentInformation;
