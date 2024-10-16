import React, { useState } from "react";
import Accordion from "../components/Accordian";
import Label from "../components/Label";
import Input from "../components/Input";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import ShipmentInformation from "./ShipmentInformation";
import Consigner from "./Consigner";
import ShippingPartner from "./ShippingPartner";

function Login() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryMessage, setCountryMessage] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [stateMessage, setStateMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameMessage, setFirstNameMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileMessage, setMobileMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [address1, setAddress1] = useState("");
  const [address1Message, setAddress1Message] = useState("");
  const [address2, setAddress2] = useState("");
  const [address2Message, setAddress2Message] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [cityMessage, setCityMessage] = useState("");
  const [pincode, setPincode] = useState("");
  const [pincodeMessage, setPincodeMessage] = useState("");
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);
  const [showBillingAddress, setShowBillingAddress] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(true); // Open state for Login accordion
  const [isShipmentOpen, setIsShipmentOpen] = useState(false);

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
    setSelectedCountry(country);
    setSelectedState("");
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
  };

  const emailValidation = () => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
      setEmailMessage("Please enter a valid email address");
    } else if (regEx.test(email)) {
      setEmailMessage("");
    } else {
      setEmailMessage("Email is not valid");
    }
  };

  const firstNameValidation = () => {
    const regEx = /[a-zA-Z]$/;
    if (firstName === "") {
      setFirstNameMessage("First name is required");
    } else if (!regEx.test(firstName)) {
      setFirstNameMessage("Please enter alphabetic characters");
    } else {
      setFirstNameMessage("");
    }
  };

  const lastNameValidation = () => {
    const regEx = /[a-zA-Z]$/;
    if (lastName === "") {
      setLastNameMessage("Last name is required");
    } else if (!regEx.test(lastName)) {
      setLastNameMessage("Please enter alphabetic characters");
    } else {
      setLastNameMessage("");
    }
  };

  const mobileNumberValidation = () => {
    const regEx = /^[0-9()+\-\s]*$/;

    if (mobileNumber === "") {
      setMobileMessage("Mobile Number is required");
    } else if (!regEx.test(mobileNumber)) {
      setMobileMessage("Only numbers, brackets, hyphen and + are allowed.");
    } else if (mobileNumber.replace(/[^0-9]/g, "").length !== 10) {
      setMobileMessage("Must be a 10 digit mobile number");
    } else {
      setMobileMessage("");
    }
  };

  const address1Validation = () => {
    const regEx = /^[a-zA-Z0-9,\/#&()_.\-\s]*$/;
    if (address1 === "") {
      setAddress1Message("Address 1 is required");
    } else if (!regEx.test(address1)) {
      setAddress1Message(
        "Address 1 can only contain alphabets, numbers and special characters"
      );
    } else {
      setAddress1Message("");
    }
  };

  const address2Validation = () => {
    const regEx = /^[a-zA-Z0-9,\/#&()_.\-\s]*$/;
    if (address2 === "") {
      setAddress2Message("Address 2 is required");
    } else if (!regEx.test(address2)) {
      setAddress2Message(
        "Address 2 can only contain alphabets, numbers and special characters"
      );
    } else {
      setAddress2Message("");
    }
  };

  const countryValidation = () => {
    if (selectedCountry === "") {
      setCountryMessage("Please select a country");
    } else {
      setCountryMessage("");
    }
  };

  const stateValidation = () => {
    if (selectedState === "") {
      setStateMessage("Please select a state");
    } else {
      setStateMessage("");
    }
  };

  const cityValidation = () => {
    const regEx = /^[0-9!@#$%&*]$/;
    if (city === "") {
      setCityMessage("City is required");
    } else if (regEx.test(city)) {
      setCityMessage("Only alphabets and spaces are allowed");
    } else {
      setCityMessage("");
    }
  };

  const pincodeValidation = () => {
    const regEx = /[0-9]$/;
    if (pincode === "") {
      setPincodeMessage("Pincode is required");
    } else if (!regEx.test(pincode)) {
      setPincodeMessage("Only numbers are allowed");
    } else {
      setPincodeMessage("");
    }
  };

  const handleValidation = (e) => {
    e.preventDefault();
    emailValidation();
    firstNameValidation();
    lastNameValidation();
    mobileNumberValidation();
    address1Validation();
    address2Validation();
    countryValidation();
    stateValidation();
    cityValidation();
    pincodeValidation();
    if (
      emailMessage === "" &&
      firstNameMessage === "" &&
      lastNameMessage === "" &&
      mobileMessage === "" &&
      address1Message === "" &&
      address2Message === "" &&
      countryMessage === "" &&
      stateMessage === "" &&
      cityMessage === "" &&
      pincodeMessage === ""
    ) {
      handleSubmit(e);
      setIsLoginOpen(false);
      setIsShipmentOpen(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      mobileNumber,
      email,
      address1,
      address2,
      landmark,
      selectedCountry,
      selectedState,
      city,
      pincode,
      billingSameAsShipping,
    });
  };

  return (
    <div className="flex justify-center items-center mt-10 flex-col font-poppins">
      <Consigner />

      <Accordion
        title="Consignee Details"
        isOpen={isLoginOpen}
        onToggle={() => setIsLoginOpen(!isLoginOpen)}
      >
        <form onSubmit={handleValidation}>
          <div className="pt-1 px-6">
            <h2 className="text-[15px] font-semibold text-left">
              Personal Details
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-2 py-2 px-6 md:grid-cols-2">
            <div>
              <Label someLabel="First Name">
                <span className="text-red-600 ml-1">*</span>{" "}
              </Label>
              <Input
                type="text"
                placeholder="Enter First Name.."
                onChange={(e) => setFirstName(e.target.value)}
              />
              <p className="text-xs text-red-600 font-medium">
                {firstNameMessage}
              </p>
            </div>
            <div>
              <Label someLabel="Last Name">
                <span className="text-red-600 ml-1">*</span>{" "}
              </Label>
              <Input
                type="text"
                placeholder="Enter Last Name.."
                onChange={(e) => setLastName(e.target.value)}
              />
              <p className="text-xs text-red-600 font-medium">
                {lastNameMessage}
              </p>
            </div>
            <div>
              <Label someLabel="Mobile Number">
                <span className="text-red-600 ml-1">*</span>{" "}
              </Label>
              <Input
                type="text"
                placeholder="Enter Mobile Number.."
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <p className="text-xs text-red-600 font-medium">
                {mobileMessage}
              </p>
            </div>
            <div>
              <Label someLabel="Email Address">
                <span className="text-red-600 ml-1">*</span>{" "}
              </Label>
              <Input
                type="email"
                placeholder="Enter Email Address.."
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-xs text-red-600 font-medium">{emailMessage}</p>
            </div>
          </div>

          <div className="pt-1 px-6">
            <h2 className="text-[15px] font-semibold text-left">
              Shipping Address
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-2 py-2 px-6 md:grid-cols-2">
            <div>
              <Label someLabel="Address 1">
                <span className="text-red-600 ml-1">*</span>{" "}
              </Label>
              <Input
                type="text"
                placeholder="Enter Address 1.."
                onChange={(e) => setAddress1(e.target.value)}
              />
              <p className="text-xs text-red-600 font-medium">
                {address1Message}
              </p>
            </div>
            <div>
              <Label someLabel="Address 2">
                <span className="text-red-600 ml-1">*</span>{" "}
              </Label>
              <Input
                type="text"
                placeholder="Enter Address 2.."
                onChange={(e) => setAddress2(e.target.value)}
              />
              <p className="text-xs text-red-600 font-medium">
                {address2Message}
              </p>
            </div>
            <div>
              <Label someLabel="Landmark" />
              <Input
                type="text"
                placeholder="Enter Landmark.."
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>
            <div>
              <Label someLabel="Country">
                <span className="text-red-600 ml-1">*</span>{" "}
              </Label>
              <Select
                options={countries}
                onChange={handleCountryChange}
                className="w-52"
              />
              <p className="text-xs text-red-600 font-medium">
                {countryMessage}
              </p>
            </div>
            <div>
              <Label someLabel="State">
                <span className="text-red-600 ml-1">*</span>{" "}
              </Label>
              <Select
                options={states[selectedCountry] || []}
                onChange={handleStateChange}
                className="w-52 "
              />
              <p className="text-xs text-red-600 font-medium">{stateMessage}</p>
            </div>
            <div>
              <Label someLabel="City">
                <span className="text-red-600 ml-1">*</span>{" "}
              </Label>
              <Input
                type="text"
                placeholder="Enter City.."
                onChange={(e) => setCity(e.target.value)}
              />
              <p className="text-xs text-red-600 font-medium">{cityMessage}</p>
            </div>
            <div>
              <Label someLabel="Pincode">
                <span className="text-red-600 ml-1">*</span>{" "}
              </Label>
              <Input
                type="text"
                placeholder="Enter Pincode.."
                onChange={(e) => setPincode(e.target.value)}
              />
              <p className="text-xs text-red-600 font-medium">
                {pincodeMessage}
              </p>
            </div>
          </div>
          <Checkbox
            label="Billing address is same as shipping address"
            onChange={handleCheckboxChange}
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
                  <Label someLabel="Address 1">
                    <span className="text-red-600 ml-1">*</span>{" "}
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Address 1.."
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                  <p className="text-xs text-red-600 font-medium">
                    {address1Message}
                  </p>
                </div>
                <div>
                  <Label someLabel="Address 2">
                    <span className="text-red-600 ml-1">*</span>{" "}
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Address 2.."
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                  <p className="text-xs text-red-600 font-medium">
                    {address2Message}
                  </p>
                </div>
                <div>
                  <Label someLabel="Landmark" />
                  <Input
                    type="text"
                    placeholder="Enter Landmark.."
                    onChange={(e) => setLandmark(e.target.value)}
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
                  <p className="text-xs text-red-600 font-medium">
                    {countryMessage}
                  </p>
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
                  <p className="text-xs text-red-600 font-medium">
                    {stateMessage}
                  </p>
                </div>
                <div>
                  <Label someLabel="City">
                    <span className="text-red-600 ml-1">*</span>{" "}
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter City.."
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <p className="text-xs text-red-600 font-medium">
                    {cityMessage}
                  </p>
                </div>
                <div>
                  <Label someLabel="Pincode">
                    <span className="text-red-600 ml-1">*</span>{" "}
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Pincode.."
                    onChange={(e) => setPincode(e.target.value)}
                  />
                  <p className="text-xs text-red-600 font-medium">
                    {pincodeMessage}
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
      </Accordion>
      <Accordion title="Shipment Information">
        <ShipmentInformation
          isOpen={isShipmentOpen}
          onToggle={() => setIsLoginOpen(!isShipmentOpen)}
        />
      </Accordion>
      <ShippingPartner />
    </div>
  );
}

export default Login;
