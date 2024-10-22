import React, { useState } from "react";
import Label from "../components/Label";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import InputForm from "../components/InputForm";

function Consignee({ setActiveStep }) {
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [showBillingAddress, setShowBillingAddress] = useState(false);

  const [formFields, setFormFields] = useState({
    selectedCountry: "",
    selectedState: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    address1: "",
    address2: "",
    landmark: "",
    city: "",
    pincode: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    firstNameMessage: "",
    lastNameMessage: "",
    mobileMessage: "",
    emailMessage: "",
    address1Message: "",
    address2Message: "",
    countryMessage: "",
    stateMessage: "",
    cityMessage: "",
    pincodeMessage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setBillingSameAsShipping(e.target.checked);
    setShowBillingAddress(!e.target.checked);
  };

  const countries = [
    { value: "", label: "Select a Country" },
    { value: "usa", label: "United States" },
    { value: "india", label: "India" },
    { value: "russia", label: "Russia" },
    { value: "japan", label: "Japan" },
  ];

  const states = {
    usa: [
      { value: "", label: "Select a City" },
      { value: "ny", label: "New York" },
      { value: "ca", label: "California" },
    ],
    india: [
      { value: "", label: "Select a City" },
      { value: "mh", label: "Maharashtra" },
      { value: "dl", label: "Delhi" },
    ],
    russia: [
      { value: "", label: "Select a City" },
      { value: "kl", label: "Kalmykia" },
      { value: "ka", label: "Karelia" },
    ],
    japan: [
      { value: "", label: "Select a City" },
      { value: "tk", label: "Tokyo" },
      { value: "kan", label: "Kansai" },
    ],
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setFormFields((prevFields) => ({
      ...prevFields,
      selectedCountry: country,
      selectedState: "",
    }));
    setErrorMessages((prev) => ({
      ...prev,
      countryMessage: "",
      stateMessage: "",
    }));
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setFormFields((prevFields) => ({
      ...prevFields,
      selectedState: state,
    }));
    setErrorMessages((prev) => ({
      ...prev,
      stateMessage: "",
    }));
  };

  const handleValidation = (e) => {
    e.preventDefault();
    let isValid = true;
    let newErrorMessages = {};

    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegEx = /^[a-zA-Z]+$/;
    const mobileRegEx = /^[0-9()+\-\s]*$/;
    const addressRegEx = /^[a-zA-Z0-9,\/#&()_.\-\s]*$/;
    const cityRegEx = /^[a-zA-Z\s]+$/;
    const pincodeRegEx = /^[0-9]+$/;

    // Email validation
    if (!emailRegEx.test(formFields.email)) {
      newErrorMessages.emailMessage = formFields.email
        ? "Invalid email"
        : "Email is required";
      isValid = false;
    }

    // First Name validation
    if (!nameRegEx.test(formFields.firstName)) {
      newErrorMessages.firstNameMessage = formFields.firstName
        ? "Only letters allowed"
        : "First name is required";
      isValid = false;
    }

    // Last Name validation
    if (!nameRegEx.test(formFields.lastName)) {
      newErrorMessages.lastNameMessage = formFields.lastName
        ? "Only letters allowed"
        : "Last name is required";
      isValid = false;
    }

    // Mobile Number validation
    if (
      !mobileRegEx.test(formFields.mobileNumber) ||
      formFields.mobileNumber.replace(/[^0-9]/g, "").length !== 10
    ) {
      newErrorMessages.mobileMessage = "Must be a 10 digit mobile number";
      isValid = false;
    }

    // Address 1 and 2 validation
    if (formFields.address1 === "") {
      newErrorMessages.address1Message = "Field cannot be empty";
      isValid = false;
    } else if (!addressRegEx.test(formFields.address1)) {
      newErrorMessages.address1Message = "Invalid characters in Address 1";
      isValid = false;
    }
    if (formFields.address2 === "") {
      newErrorMessages.address2Message = "Field cannot be empty";
      isValid = false;
    } else if (!addressRegEx.test(formFields.address2)) {
      newErrorMessages.address2Message = "Invalid characters in Address 2";
      isValid = false;
    }

    // Country and State validation
    if (!formFields.selectedCountry) {
      newErrorMessages.countryMessage = "Country is required";
      isValid = false;
    }
    if (!formFields.selectedState) {
      newErrorMessages.stateMessage = "State is required";
      isValid = false;
    }

    // City validation
    if (!cityRegEx.test(formFields.city)) {
      newErrorMessages.cityMessage = formFields.city
        ? "Invalid city name"
        : "City is required";
      isValid = false;
    }

    // Pincode validation
    if (!pincodeRegEx.test(formFields.pincode)) {
      newErrorMessages.pincodeMessage = "Only numbers allowed in Pincode";
      isValid = false;
    }

    setErrorMessages(newErrorMessages);

    if (isValid) {
      setActiveStep(3);
    }
  };

  return (
    <form onSubmit={handleValidation}>
      <div className="pt-1 px-6">
        <h2 className="text-[15px] font-semibold text-left">
          Personal Details
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-2 py-1.5 px-6 md:grid-cols-2">
        <div>
          <InputForm
            someLabel="First Name"
            type="text"
            placeholder="Enter First Name.."
            value={formFields.firstName}
            onChange={handleInputChange}
            name="firstName"
            required
          />
          <p className="text-xs text-red-600 font-medium">
            {errorMessages.firstNameMessage}
          </p>
        </div>
        <div>
          <InputForm
            someLabel="Last Name"
            type="text"
            placeholder="Enter Last Name.."
            value={formFields.lastName}
            onChange={handleInputChange}
            name="lastName"
            required
          />
          <p className="text-xs text-red-600 font-medium">
            {errorMessages.lastNameMessage}
          </p>
        </div>
        <div>
          <InputForm
            someLabel="Mobile Number"
            type="text"
            placeholder="Enter Mobile Number.."
            value={formFields.mobileNumber}
            onChange={handleInputChange}
            name="mobileNumber"
            required
          />
          <p className="text-xs text-red-600 font-medium">
            {errorMessages.mobileMessage}
          </p>
        </div>
        <div>
          <InputForm
            someLabel="Email Address"
            placeholder="Enter Email Address.."
            value={formFields.email}
            name="email"
            onChange={handleInputChange}
            required
          />
          <p className="text-xs text-red-600 font-medium">
            {errorMessages.emailMessage}
          </p>
        </div>
      </div>

      <div className="pt-1 px-6">
        <h2 className="text-[15px] font-semibold text-left">
          Shipping Address
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-2 py-2 px-6 md:grid-cols-2">
        <div>
          <InputForm
            someLabel="Address 1"
            type="text"
            placeholder="Enter Address 1.."
            value={formFields.address1}
            onChange={handleInputChange}
            name="address1"
            required
          />
          <p className="text-xs text-red-600 font-medium">
            {errorMessages.address1Message}
          </p>
        </div>
        <div>
          <InputForm
            someLabel="Address 2"
            type="text"
            placeholder="Enter Address 2.."
            value={formFields.address2}
            onChange={handleInputChange}
            name="address2"
            required
          />
          <p className="text-xs text-red-600 font-medium">
            {errorMessages.address2Message}
          </p>
        </div>
        <div>
          <InputForm
            someLabel="Landmark"
            placeholder="Enter Landmark.."
            value={formFields.landmark}
            onChange={handleInputChange}
            name="landmark"
          />
        </div>
        <div>
          <Label someLabel="Country" required></Label>
          <Select
            options={countries}
            onChange={handleCountryChange}
            name="selectedCountry"
            value={formFields.selectedCountry}
            className="w-52"
            required
          />
          <p className="text-xs text-red-600 font-medium">
            {errorMessages.countryMessage}
          </p>
        </div>
        <div>
          <Label someLabel="State" required></Label>
          <Select
            options={states[formFields.selectedCountry] || []}
            onChange={handleStateChange}
            name="selectedState"
            value={formFields.selectedState}
            className="w-52"
            required
          />
          <p className="text-xs text-red-600 font-medium">
            {errorMessages.stateMessage}
          </p>
        </div>
        <div>
          <InputForm
            someLabel="City"
            type="text"
            placeholder="Enter City.."
            value={formFields.city}
            onChange={handleInputChange}
            name="city"
            required
          />
          <p className="text-xs text-red-600 font-medium">
            {errorMessages.cityMessage}
          </p>
        </div>
        <div>
          <InputForm
            someLabel="Pincode"
            type="text"
            placeholder="Enter Pincode.."
            value={formFields.pincode}
            onChange={handleInputChange}
            name="pincode"
            required
          />
          <p className="text-xs text-red-600 font-medium">
            {errorMessages.pincodeMessage}
          </p>
        </div>
      </div>
      <Checkbox
        label="Billing address is same as shipping address"
        onChange={handleCheckboxChange}
        checked={billingSameAsShipping}
      />

      {showBillingAddress && (
        <div>
          <div className="pt-1 px-6">
            <h2 className="text-md font-semibold text-left mt-2">
              Billing Address
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-2 py-2 px-6 md:grid-cols-2">
            <div>
              <InputForm
                someLabel="Address 1"
                type="text"
                placeholder="Enter Address 1.."
                value={formFields.address1}
                onChange={handleInputChange}
                name="address1"
                required
              />
              <p className="text-xs text-red-600 font-medium">
                {errorMessages.address1Message}
              </p>
            </div>
            <div>
              <InputForm
                someLabel="Address 2"
                type="text"
                placeholder="Enter Address 2.."
                value={formFields.address2}
                onChange={handleInputChange}
                name="address2"
                required
              />
              <p className="text-xs text-red-600 font-medium">
                {errorMessages.address2Message}
              </p>
            </div>
            <div>
              <InputForm
                someLabel="Landmark"
                placeholder="Enter Landmark.."
                value={formFields.landmark}
                onChange={handleInputChange}
                name="landmark"
              />
            </div>
            <div>
              <Label someLabel="Country" required></Label>
              <Select
                options={countries}
                onChange={handleCountryChange}
                className="w-52 left-44"
                name="selectedCountry"
                required
              />
              <p className="text-xs text-red-600 font-medium">
                {errorMessages.countryMessage}
              </p>
            </div>
            <div>
              <Label someLabel="State" required></Label>
              <Select
                options={states[formFields.selectedCountry] || []}
                onChange={handleStateChange}
                className="w-52 left-44"
                name="selectedState"
                required
              />
              <p className="text-xs text-red-600 font-medium">
                {errorMessages.stateMessage}
              </p>
            </div>
            <div>
              <InputForm
                someLabel="City"
                type="text"
                placeholder="Enter City.."
                value={formFields.city}
                onChange={handleInputChange}
                name="city"
                required
              />
              <p className="text-xs text-red-600 font-medium">
                {errorMessages.cityMessage}
              </p>
            </div>
            <div>
              <InputForm
                someLabel="Pincode"
                type="text"
                placeholder="Enter Pincode.."
                value={formFields.pincode}
                onChange={handleInputChange}
                name="pincode"
                required
              />
              <p className="text-xs text-red-600 font-medium">
                {errorMessages.pincodeMessage}
              </p>
            </div>
          </div>
        </div>
      )}

      <Button
        label="Continue"
        color="indigo"
        type="submit"
        onClick={handleValidation}
        className="ml-[550px]"
      />
    </form>
  );
}

export default Consignee;
