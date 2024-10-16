import React from "react";
import Accordion from "../components/Accordian";
import Button from "../components/Button";
import Select from "../components/Select";
function Consigner() {
  const customer = [{ label: "Select Customer", value: "c1" }];
  return (
    <div>
      <Accordion title="Consigner Details">
        <div className="pt-1 px-6">
          <h2 className="text-[15px]  text-left">Search Customer</h2>
        </div>
        <Select
          options={customer}
          className="lg:w-[500px] lg:left-[460px] ml-5 focus:outline-none focus:ring-0 focus:border-transparent"
        ></Select>
        <Button
          label="Continue"
          color="indigo"
          type="button"
          //   onClick={handleValidation}
          className="ml-[550px] "
        />
      </Accordion>
    </div>
  );
}

export default Consigner;
{
  /* <select
          name="customer"
          id=""
          className=" mt-2 ml-4 text-md px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-600  text-gray-900 focus:outline-none  transition-all duration-200 hover:bg-gray-50 w-[500px] appearance-none"
        >
            
          <option value="0">Select Customer</option>
          <option value="10">10%</option>
          <option value="20">20%</option>
        </select> */
}
