import React from "react";
import Button from "../components/Button";
import Select from "../components/Select";
import { useState } from "react";
function Consigner({ setActiveStep }) {
  const customer = [
    { label: "Select Customer", value: "c1" },
    { label: "xyz", value: "c2" },
  ];
  const [searchCustomer, setSearchCustomer] = useState("");
  const [searchCustomerMessage, setSearchCustomerMessage] = useState("");

  const searchCustomerValidation = () => {
    if (searchCustomer === "") {
      setSearchCustomerMessage("Please select a customer or add new customer");
    } else {
      setSearchCustomerMessage("");
    }
  };

  const handleValidation = (e) => {
    e.preventDefault();
    searchCustomerValidation();
    if (searchCustomerMessage === "") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    console.log(searchCustomer);
    setActiveStep(2);
  };

  return (
    <form>
      <div className="pt-1 px-6">
        <h2 className="text-[15px]  text-left">Search Customer</h2>
      </div>
      <Select
        options={customer}
        className="lg:w-[500px] lg:left-[460px] ml-5 focus:outline-none focus:ring-0 focus:border-transparent"
        onChange={(e) => setSearchCustomer(e.target.value)}
      />
      <p className="text-xs text-red-600 font-medium ml-6">
        {searchCustomerMessage}
      </p>
      <Button
        label="Continue"
        color="indigo"
        type="button"
        onClick={handleValidation}
        className="ml-[550px] "
      />
    </form>
  );
}

export default Consigner;
