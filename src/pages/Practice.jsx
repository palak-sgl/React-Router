import React, { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";

function Practice() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    address1: "",
    address2: "",
    country: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Step 1 validation
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    else if (!/^[a-zA-Z]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = "First name can only contain letters.";
    }

    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";
    else if (!/^[a-zA-Z]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Last name can only contain letters.";
    }

    if (!formData.mobile.trim()) newErrors.mobile = "Phone number is required.";
    else if (!/^[0-9]+$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Phone number can only contain numerics.";
    }

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Email is invalid.";
    }

    // Step 2 validation
    if (step === 2) {
      if (!formData.address1.trim())
        newErrors.address1 = "Address is required.";
      if (!formData.address2.trim())
        newErrors.address2 = "Address is required.";
      if (!formData.country.trim()) newErrors.country = "Select a Country.";
      if (!formData.state.trim()) newErrors.state = "Select a State.";

      if (!formData.city.trim()) newErrors.city = "City is required.";
      else if (!/^[a-zA-Z]+$/.test(formData.city.trim())) {
        newErrors.city = "City can only contain letters.";
      }

      if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required.";
    }

    return newErrors;
  };

  const nextStep = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setStep((prevStep) => prevStep + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {step === 1 && (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
        />
      )}
      {step === 2 && (
        <Step2
          handleSubmit={handleSubmit}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
        />
      )}
    </>
  );
}

export default Practice;

// import React, { useState } from "react";
// import Step1 from "../components/Step1";
// import Step2 from "../components/Step2";

// function Practice() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobile: "",
//     email: "",
//     address1: "",
//     address2: "",
//     country: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const [errors, setErrors] = useState({});
//   const validate = () => {
//     const newErrors = {};

//     // Step 1 validation
//     if (!formData.firstName.trim())
//       newErrors.firstName = "First Name is required";
//     else if (!/^[a-zA-Z]+$/.test(formData.firstName.trim())) {
//       newErrors.firstName = "First name can only contain letters.";
//     }

//     if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
//     else if (!/^[a-zA-Z]+$/.test(formData.lastName.trim())) {
//       newErrors.lastName = "Last name can only contain letters.";
//     }

//     if (!formData.mobile.trim()) newErrors.mobile = "Phone number is required";
//     else if (!/^[0-9]+$/.test(formData.mobile.trim())) {
//       newErrors.mobile = "Phone number can only contain numerics.";
//     }

//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
//       newErrors.email = "Email is invalid";
//     }

//     // Step 2 validation
//     if (step === 2) {
//       if (!formData.address1.trim()) newErrors.address1 = "Address is required";
//       if (!formData.address2.trim()) newErrors.address2 = "Address is required";
//       if (!formData.country.trim()) newErrors.country = "Select a Country";
//       if (!formData.state.trim()) newErrors.state = "Select a State";

//       if (!formData.city.trim()) newErrors.city = "City is required";
//       else if (!/^[a-zA-Z]+$/.test(formData.city.trim())) {
//         newErrors.city = "City can only contain letters.";
//       }

//       if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
//     }

//     return newErrors;
//   };

//   const nextStep = () => {
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length === 0) {
//       setErrors({});
//       setStep((prevStep) => prevStep + 1);
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <>
//       {step === 1 && (
//         <Step1
//           nextStep={nextStep}
//           handleChange={handleChange}
//           values={formData}
//           errors={errors}
//         />
//       )}
//       {step === 2 && (
//         <Step2
//           handleSubmit={handleSubmit}
//           prevStep={prevStep}
//           handleChange={handleChange}
//           values={formData}
//           errors={errors}
//         />
//       )}
//     </>
//   );
// }

// export default Practice;
