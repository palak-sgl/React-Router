import React, { Component, useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
// import Accordion from "../components/Accordian";
import DatePicker from "../components/DatePicker";
import Select from "../components/Select";
import Shipment2 from "./Shipment2";
import Button from "../components/Button";

function ShipmentInformation({ setActiveStep }) {
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
  const [productNameMessage, setProductNameMessage] = useState("");
  const [hsn, setHsn] = useState("");
  const [hsnMessage, setHsnMessage] = useState("");
  const [qty, setQty] = useState("");
  const [qtyMessage, setQtyMessage] = useState("");

  const [isOpen, setIsOpen] = useState(true);

  const handleValidation = (e) => {
    e.preventDefault();
    let isValid = true;
    let tempInvoiceNumberMessage = "";
    let tempInvoiceDateMessage = "";
    let tempDeadWeightMessage = "";
    let tempLengthMessage = "";
    let tempBreadthMessage = "";
    let tempHeightMessage = "";
    let tempProductNameMessage = "";
    let tempHsnMessage = "";
    let tempQtyMessage = "";

    const invoiceRegEx = /[a-zA-Z0-9]$/;
    if (invoiceNumber === "") {
      tempInvoiceNumberMessage = "Please Enter Invoice Number";
      isValid = false;
    } else if (!invoiceRegEx.test(invoiceNumber)) {
      tempInvoiceNumberMessage = "Please enter alphanumeric characters";
      isValid = false;
    }

    if (invoiceDate === "") {
      tempInvoiceDateMessage = "Please select Invoice Date";
      isValid = false;
    }
    if (deadWeight === "" || deadWeight < 0.01) {
      tempDeadWeightMessage = "Weight must be atleast 0.01 KG";
      isValid = false;
    }

    if (length === "" || length < 1) {
      tempLengthMessage = "Length must be atleast 1 cm";
      isValid = false;
    }

    if (breadth === "" || breadth < 1) {
      tempBreadthMessage = "Breadth must be atleast 1 cm";
      isValid = false;
    }

    if (height === "" || height < 1) {
      tempHeightMessage = "Height must be atleast 1 cm";
      isValid = false;
    }

    if (productName === "") {
      tempProductNameMessage = "Required";
      isValid = false;
    }

    if (hsn === "") {
      tempHsnMessage = "HSN must be 8 digits long";
      isValid = false;
    }
    if (qty === "") {
      tempQtyMessage = "Required";
      isValid = false;
    }
    setInvoiceNumberMessage(tempInvoiceNumberMessage);
    setInvoiceDateMessage(tempInvoiceDateMessage);
    setDeadWeightMessage(tempDeadWeightMessage);
    setLengthMessage(tempLengthMessage);
    setBreadthMessage(tempBreadthMessage);
    setHeightMessage(tempHeightMessage);
    setProductNameMessage(tempProductNameMessage);
    setHsnMessage(tempHsnMessage);
    setQtyMessage(tempQtyMessage);

    if (isValid) {
      console.log({
        invoiceNumber,
        invoiceDate,
        deadWeight,
        length,
        breadth,
        height,
        productName,
        hsn,
        qty,
      });
      setActiveStep(4);
      setShowChangeButton(true);
    }
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
              <span className="px-3 bg-gray-200 rounded-r text-sm py-2.5 border border-gray-200">
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
              <span className="px-3 bg-gray-200 border-gray-200  rounded-r text-sm py-2.5 border border-l-gray-200">
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
              <span className="px-3 bg-gray-200 border border-l-gray-200 rounded-r text-sm py-2.5">
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
              <span className="px-3 bg-gray-200 rounded-r-md text-sm py-2.5">
                cm
              </span>{" "}
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
          isOpen={isOpen}
          setIsOpen={setIsOpen}
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
