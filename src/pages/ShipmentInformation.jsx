import React, { Component, useState } from "react";
import InputForm from "../components/InputForm";
import Label from "../components/Label";
import DatePicker from "../components/DatePicker";
import Select from "../components/Select";
import Shipment2 from "./Shipment2";
import Button from "../components/Button";
import InputDimensions from "../components/InputDimensions";

function ShipmentInformation({ setActiveStep }) {
  const [formFields, setFormFields] = useState({
    invoiceNumber: "",
    invoiceDate: "",
    deadWeight: "",
    length: "",
    breadth: "",
    height: "",
    productName: "",
    hsn: "",
    qty: "",
    unitPrice: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [errorMessages, setErrorMessages] = useState({
    invoiceNumberMessage: "",
    invoiceDateMessage: "",
    deadWeightMessage: "",
    lengthMessage: "",
    breadthMessage: "",
    heightMessage: "",
    productNameMessage: "",
    hsnMessage: "",
    qtyMessage: "",
    unitPriceMessage: "",
  });

  const [isOpen, setIsOpen] = useState(true);

  const handleValidation = (e) => {
    e.preventDefault();
    let isValid = true;
    let newErrorMessages = {};

    const invoiceRegEx = /[a-zA-Z0-9]$/;
    if (formFields.invoiceNumber === "") {
      newErrorMessages.invoiceNumberMessage = "Please Enter Invoice Number";
      isValid = false;
    } else if (!invoiceRegEx.test(formFields.invoiceNumber)) {
      newErrorMessages.invoiceNumberMessage =
        "Please enter alphanumeric characters";
      isValid = false;
    }

    // const Fields =[
    //   {
    //     key:"invoiceDate",
    //     messageKey:"invoiceDataMessage",
    //     errorMessage:""
    //   },
    //   {
    //     key:"invoiceDate",
    //     messageKey:"invoiceDataMessage",
    //     errorMessage:""
    //   },
    //   {
    //     key:"invoiceDate",
    //     messageKey:"invoiceDataMessage",
    //     errorMessage:""
    //   }
    // ]

    // Fields.map((field)=>{
    //   if(formFields.field.key === ""){
    //     newErrorMessages.field.messageKey = field.errorMessage
    //     isValid=false;
    //   }
    // })

    if (formFields.invoiceDate === "") {
      newErrorMessages.invoiceDateMessage = "Please select Invoice Date";
      isValid = false;
    }
    if (formFields.deadWeight === "" || formFields.deadWeight < 0.01) {
      newErrorMessages.deadWeightMessage = "Weight must be atleast 0.01 KG";
      isValid = false;
    }

    if (formFields.length === "" || formFields.length < 1) {
      newErrorMessages.lengthMessage = "Length must be atleast 1 cm";
      isValid = false;
    }

    if (formFields.breadth === "" || formFields.breadth < 1) {
      newErrorMessages.breadthMessage = "Breadth must be atleast 1 cm";
      isValid = false;
    }

    if (formFields.height === "" || formFields.height < 1) {
      newErrorMessages.heightMessage = "Height must be atleast 1 cm";
      isValid = false;
    }

    if (formFields.productName === "") {
      newErrorMessages.productNameMessage = "Required";
      isValid = false;
    }

    if (formFields.hsn === "") {
      newErrorMessages.hsnMessage = "HSN must be 8 digits long";
      isValid = false;
    }
    if (formFields.qty === "") {
      newErrorMessages.qtyMessage = "Required";
      isValid = false;
    }
    if (formFields.unitPrice === "") {
      newErrorMessages.unitPriceMessage = "Required";
      isValid = false;
    }

    setErrorMessages(newErrorMessages);

    if (isValid) {
      setActiveStep(4);
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
            <InputForm
              someLabel="Invoice Number"
              type="text"
              placeholder="Enter Invoice Number.."
              name="invoiceNumber"
              value={formFields.invoiceNumber}
              onChange={handleInputChange}
              required
            />
            <p className="text-xs text-red-600 font-medium">
              {errorMessages.invoiceNumberMessage}
            </p>
          </div>
          <div>
            <Label someLabel="Invoice Date" required></Label>
            <DatePicker
              placeholder={"Pick a Date"}
              name="invoiceDate"
              value={formFields.invoiceDate}
              onChange={handleInputChange}
            />
            <p className="text-xs text-red-600 font-medium">
              {errorMessages.invoiceDateMessage}
            </p>
          </div>
          <div>
            <Label someLabel="Invoice Currency" required></Label>
            <Select options={currency} className="w-52" />
          </div>
          <div>
            <InputForm
              someLabel="Order/Reference ID"
              type="text"
              placeholder="Enter Order/Reference ID.."
            />
          </div>
          <div>
            <InputForm
              someLabel="IOSS Number"
              type="text"
              placeholder="Enter IOSS Number.."
            />
          </div>
        </div>

        <div className="pt-1 px-6">
          <h2 className="text-[15px] font-semibold text-left mt-3">
            Box Measurements
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 gap-2 py-2 px-6 md:grid-cols-2">
          <div>
            <Label someLabel="Dead Weight" required></Label>
            <div className="flex  mt-2">
              <InputDimensions
                type="number"
                placeholder="Eg. 1.25"
                onChange={handleInputChange}
                name="deadWeight"
                value={formFields.deadWeight}
                dimension="kg"
              />
            </div>
            <p className="text-xs text-red-600 font-medium">
              {errorMessages.deadWeightMessage}
            </p>
          </div>
          <div>
            <Label someLabel="Length" required></Label>
            <div className="flex mt-2">
              <InputDimensions
                type="number"
                placeholder="Eg. 10"
                onChange={handleInputChange}
                name="length"
                value={formFields.length}
                dimension="cm"
              />
            </div>
            <p className="text-xs text-red-600 font-medium">
              {errorMessages.lengthMessage}
            </p>
          </div>
          <div>
            <Label someLabel="Breadth" required></Label>
            <div className="flex  mt-2">
              <InputDimensions
                type="number"
                placeholder="Eg. 10"
                onChange={handleInputChange}
                name="breadth"
                value={formFields.length}
                dimension="cm"
              />
            </div>
            <p className="text-xs text-red-600 font-medium">
              {errorMessages.breadthMessage}
            </p>
          </div>
          <div>
            <Label someLabel="Height" required></Label>
            <div className="flex  mt-2">
              <InputDimensions
                type="number"
                placeholder="Eg. 10"
                onChange={handleInputChange}
                name="height"
                value={formFields.length}
                dimension="cm"
              />
            </div>
            <p className="text-xs text-red-600 font-medium">
              {errorMessages.heightMessage}
            </p>
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
          handleInputChange={handleInputChange}
          errorMessages={errorMessages}
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
