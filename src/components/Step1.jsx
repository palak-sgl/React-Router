import React, { useState } from "react";
import Input from "./Input";
import Label from "./Label";

function Step1({ nextStep, handleChange, values }) {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");

  // First name validation
  const validateFirstName = (e) => {
    const { value } = e.target;
    const alphaRegex = /^[A-Za-z]+$/;

    if (value.trim() === "") {
      setFirstNameError("First name cannot be empty.");
    } else if (!alphaRegex.test(value)) {
      setFirstNameError("First name must contain only alphabets.");
    } else {
      setFirstNameError("");
    }

    handleChange(e);
  };

  // Last name validation
  const validateLastName = (e) => {
    const { value } = e.target;
    const alphaRegex = /^[A-Za-z]+$/;

    if (value.trim() === "") {
      setLastNameError("Last name cannot be empty.");
    } else if (!alphaRegex.test(value)) {
      setLastNameError("Last name must contain only alphabets.");
    } else {
      setLastNameError("");
    }

    handleChange(e);
  };

  // Email validation
  const validateEmail = (e) => {
    const { value } = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.trim() === "") {
      setEmailError("Email cannot be empty.");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    handleChange(e);
  };

  // Mobile number validation
  const validateMobile = (e) => {
    const { value } = e.target;
    const numericRegex = /^[0-9]{10}$/;

    if (value.trim() === "") {
      setMobileError("Mobile number cannot be empty.");
    } else if (!numericRegex.test(value)) {
      setMobileError("Mobile number must be 10 digits.");
    } else {
      setMobileError("");
    }

    handleChange(e);
  };

  return (
    <div>
      <form id="1">
        <div className="py-1 px-6">
          <h2 className="text-md font-semibold text-left">Personal Details</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-2 py-2 px-6 md:grid-cols-2">
          <div>
            <Label someLabel="First Name">
              <span className="text-red-600 ml-1">*</span>
            </Label>
            <Input
              type="text"
              onChange={validateFirstName}
              name="firstName"
              placeholder="Enter First Name.."
              value={values.firstName}
              onBlur={validateFirstName}
            />
            {firstNameError && (
              <p className="text-xs text-red-600">{firstNameError}</p>
            )}
          </div>
          <div>
            <Label someLabel="Last Name">
              <span className="text-red-600 ml-1">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Last Name.."
              name="lastName"
              onChange={validateLastName}
              value={values.lastName}
              onBlur={validateLastName}
            />
            {lastNameError && (
              <p className="text-xs text-red-600">{lastNameError}</p>
            )}
          </div>
          <div>
            <Label someLabel="Mobile Number">
              <span className="text-red-600 ml-1">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Mobile Number.."
              onChange={validateMobile}
              name="mobile"
              value={values.mobile}
              onBlur={validateMobile}
            />
            {mobileError && (
              <p className="text-xs text-red-600">{mobileError}</p>
            )}
          </div>
          <div>
            <Label someLabel="Email Address">
              <span className="text-red-600 ml-1">*</span>
            </Label>
            <Input
              type="email"
              placeholder="Enter Email Address.."
              onChange={validateEmail}
              name="email"
              value={values.email}
              onBlur={validateEmail}
            />
            {emailError && <p className="text-xs text-red-600">{emailError}</p>}
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <button
            className="ml-80 text-xs text-blue-800"
            onClick={(e) => {
              e.preventDefault();
              // Proceed only if there are no errors
              if (
                !firstNameError &&
                !lastNameError &&
                !emailError &&
                !mobileError
              ) {
                nextStep();
              }
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step1;
