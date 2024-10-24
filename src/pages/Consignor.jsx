import React from "react";
import Button from "../components/Button";
import Select from "../components/Select";
import { useState } from "react";
function Consignor({ setActiveStep }) {
  const customer = [
    { label: "Select Customer", value: "" },
    { label: "xyz", value: "c2" },
  ];
  const [searchCustomer, setSearchCustomer] = useState("");
  const [searchCustomerMessage, setSearchCustomerMessage] = useState("");

  const handleValidation = (e) => {
    e.preventDefault();
    let tempCustomerMessage = "";

    if (!searchCustomer) {
      console.log(searchCustomer);
      tempCustomerMessage = "Please select a customer or add new customer";
    }
    setSearchCustomerMessage(tempCustomerMessage);

    if (tempCustomerMessage === "") {
      console.log(searchCustomer);
      setActiveStep(2);
    }
  };

  return (
    <form>
      <div className="pt-1 px-6">
        <h2 className="text-2  text-left">Search Customer</h2>
      </div>
      <Select
        options={customer}
        value={searchCustomer}
        className="lg:w-[500px] lg:left-[460px] ml-5 focus:outline-none focus:ring-0 focus:border-transparent md:w-[450px]"
        classNameChevron="left-[470px]"
        onChange={(e) => setSearchCustomer(e.target.value)}
        errorMessages={searchCustomerMessage}
      />
      <Button
        label="Continue"
        color="indigo"
        type="submit"
        onClick={handleValidation}
        className="ml-[550px] "
        //ml-1: ml-4px
      />
    </form>
  );
}

export default Consignor;
