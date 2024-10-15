import React from "react";
import Select from "./Select";
import Input from "./Input";
import Label from "./Label";
import Checkbox from "./Checkbox";
import { useState } from "react";
function Step2({
  prevStep,
  handleChange,
  values,
  handleSubmit,
  setBillingSameAsShipping,
}) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryMessage, setCountryMessage] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [stateMessage, setStateMessage] = useState("");
  const countries = [
    { value: "usa", label: "United States" },
    { value: "india", label: "India" },
    { value: "russia", label: "Russia" },
    { value: "japan", label: "Japan" },
  ];

  const states = {
    usa: [
      { value: "ny", label: "New York" },
      { value: "ca", label: "California" },
    ],
    india: [
      { value: "mh", label: "Maharashtra" },
      { value: "dl", label: "Delhi" },
    ],
    russia: [
      { value: "kl", label: "Kalmykia" },
      { value: "ka", label: "Karelia" },
    ],
    japan: [
      { value: "tk", label: "Tokyo" },
      { value: "kan", label: "Kansai" },
    ],
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState("");
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
  };
  return (
    <div id="2">
      <form>
        <div className="py-2 px-6">
          <h2 className="text-md font-semibold text-left">Shipping Address</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-2 py-2 px-6 md:grid-cols-2">
          <div>
            <Label someLabel="Address 1">
              <span className="text-red-600 ml-1">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Address 1.."
              name="address1"
              onChange={handleChange}
              value={values.address1}
            />
          </div>
          <div>
            <Label someLabel="Address 2">
              <span className="text-red-600 ml-1">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Address 2.."
              onChange={handleChange}
              name="address2"
              value={values.address2}
            />
          </div>
          <div>
            <Label someLabel="Landmark" />
            <Input
              type="text"
              placeholder="Enter Landmark.."
              onChange={handleChange}
              name="landmark"
              value={values.landmark}
            />
          </div>
          <div>
            <Label someLabel="Country">
              <span className="text-red-600 ml-1">*</span>{" "}
            </Label>
            <Select
              options={countries}
              onChange={handleCountryChange}
              className="w-52 left-44"
            />
            <p className="text-xs text-red-600">{countryMessage}</p>
          </div>
          <div>
            <Label someLabel="State">
              <span className="text-red-600 ml-1">*</span>{" "}
            </Label>
            <Select
              options={states[selectedCountry] || []}
              onChange={handleStateChange}
              className="w-52 left-44"
            />
            <p className="text-xs text-red-600">{stateMessage}</p>
          </div>
          <div>
            <Label someLabel="City">
              <span className="text-red-600 ml-1">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter City.."
              onChange={handleChange}
              name="city"
              value={values.city}
            />
          </div>
          <div>
            <Label someLabel="Pincode">
              <span className="text-red-600 ml-1">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Pincode.."
              onChange={handleChange}
              name="pincode"
              value={values.pincode}
            />
          </div>
        </div>
        <Checkbox
          label="Billing address is same as shipping address"
          onChange={(e) => setBillingSameAsShipping(e.target.checked)}
        />
        <div className="flex justify-between mt-5">
          <button
            className="ml-60 text-xs text-blue-800"
            onClick={(e) => {
              e.preventDefault();
              prevStep();
            }}
          >
            Prev
          </button>
          <button
            className="mr-60 text-xs text-blue-800"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step2;
