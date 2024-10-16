// import { useState } from "react";
// import Login from "./Login";
// import ShipmentInformation from "./ShipmentInformation";

// const FormGroup = () => {
//   const [activeForm, setActiveForm] = useState(null);

//   const handleFormOnClick = (formNumber) => {
//     setActiveForm(activeForm === formNumber ? null : formNumber); // Toggle form based on current state
//   };

//   return (
//     <div className="grid justify-center items-center w-[700px] mx-64 my-10 gap-2">
//       <Login onClick={() => handleFormOnClick(1)} isOpen={activeForm === 1} />
//       <ShipmentInformation
//         onClick={() => handleFormOnClick(2)}
//         isOpen={activeForm === 2}
//       />
//     </div>
//   );
// };

// export default FormGroup;
