import React, { useState } from "react";
import Accordion from "../components/Accordian";
import Label from "../components/Label";
import Input from "../components/Input";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import ShipmentInformation from "./ShipmentInformation";
import Consigner from "./Consignor";
import ShippingPartner from "./ShippingPartner";

function Login() {
  // const [openAccordion, setOpenAccordion] = useState(null);

  // const toggleAccordion = (index) => {
  //   setOpenAccordion(openAccordion === index ? null : index);
  // };
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

  const handleValidation = (e) => {
    e.preventDefault();
    let isValid = true;
    let tempEmailMessage = "";
    let tempFirstNameMessage = "";
    let tempLastNameMessage = "";
    let tempMobileMessage = "";
    let tempAddress1Message = "";
    let tempAddress2Message = "";
    let tempCountryMessage = "";
    let tempStateMessage = "";
    let tempCityMessage = "";
    let tempPincodeMessage = "";

    // Email validation
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
      tempEmailMessage = "Please enter a valid email address";
      isValid = false;
    } else if (!emailRegEx.test(email)) {
      tempEmailMessage = "Email is not valid";
      isValid = false;
    }

    // First Name validation
    const nameRegEx = /^[a-zA-Z]+$/;
    if (firstName === "") {
      tempFirstNameMessage = "First name is required";
      isValid = false;
    } else if (!nameRegEx.test(firstName)) {
      tempFirstNameMessage = "Please enter alphabetic characters";
      isValid = false;
    }

    // Last Name validation
    if (lastName === "") {
      tempLastNameMessage = "Last name is required";
      isValid = false;
    } else if (!nameRegEx.test(lastName)) {
      tempLastNameMessage = "Please enter alphabetic characters";
      isValid = false;
    }

    // Mobile Number validation
    const mobileRegEx = /^[0-9()+\-\s]*$/;
    if (mobileNumber === "") {
      tempMobileMessage = "Mobile Number is required";
      isValid = false;
    } else if (
      !mobileRegEx.test(mobileNumber) ||
      mobileNumber.replace(/[^0-9]/g, "").length !== 10
    ) {
      tempMobileMessage = "Must be a 10 digit mobile number";
      isValid = false;
    }

    // Address 1 validation
    const addressRegEx = /^[a-zA-Z0-9,\/#&()_.\-\s]*$/;
    if (address1 === "") {
      tempAddress1Message = "Address 1 is required";
      isValid = false;
    } else if (!addressRegEx.test(address1)) {
      tempAddress1Message = "Address 1 can only contain valid characters";
      isValid = false;
    }

    // Address 2 validation
    if (address2 === "") {
      tempAddress2Message = "Address 2 is required";
      isValid = false;
    } else if (!addressRegEx.test(address2)) {
      tempAddress2Message = "Address 2 can only contain valid characters";
      isValid = false;
    }

    // Country validation
    if (selectedCountry === "") {
      tempCountryMessage = "Please select a country";
      isValid = false;
    }

    // State validation
    if (selectedState === "") {
      tempStateMessage = "Please select a state";
      isValid = false;
    }

    // City validation
    const cityRegEx = /^[a-zA-Z\s]+$/;
    if (city === "") {
      tempCityMessage = "City is required";
      isValid = false;
    } else if (!cityRegEx.test(city)) {
      tempCityMessage = "Only alphabets and spaces are allowed";
      isValid = false;
    }

    // Pincode validation
    const pincodeRegEx = /^[0-9]+$/;
    if (pincode === "") {
      tempPincodeMessage = "Pincode is required";
      isValid = false;
    } else if (!pincodeRegEx.test(pincode)) {
      tempPincodeMessage = "Only numbers are allowed";
      isValid = false;
    }

    setEmailMessage(tempEmailMessage);
    setFirstNameMessage(tempFirstNameMessage);
    setLastNameMessage(tempLastNameMessage);
    setMobileMessage(tempMobileMessage);
    setAddress1Message(tempAddress1Message);
    setAddress2Message(tempAddress2Message);
    setCountryMessage(tempCountryMessage);
    setStateMessage(tempStateMessage);
    setCityMessage(tempCityMessage);
    setPincodeMessage(tempPincodeMessage);

    if (isValid) {
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
      setActiveStep(3);
      setShowChangeButton(true);
    }
  };
  const [showChangeButton, setShowChangeButton] = useState(false);
  //active step - state variable - 1,2,3,4

  const [activeStep, setActiveStep] = useState(1);
  console.log(activeStep, "activeStep");
  return (
    <div className="flex justify-center items-center mt-10 flex-col font-poppins">
      <Accordion
        title="Consignor Details"
        isOpen={activeStep === 1}
        setActiveStep={setActiveStep}
        stepNumber={1}
        number="1"
        showChangeButton="Change"
      >
        <Consigner setActiveStep={setActiveStep} />
      </Accordion>

      <Accordion
        title="Consignee Details"
        isOpen={activeStep === 2}
        number="2"
        showChangeButton="Change"
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
      <Accordion
        title="Shipment Information"
        isOpen={activeStep === 3}
        stepNumber={3}
        number="3"
      >
        <ShipmentInformation setActiveStep={setActiveStep} />
      </Accordion>
      <Accordion
        title="Select Shipping Partner"
        isOpen={activeStep === 4}
        stepNumber={4}
        number="4"
      >
        <ShippingPartner />
      </Accordion>
    </div>
  );
}

export default Login;
