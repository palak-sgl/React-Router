// import React, { useState } from "react";
// import Accordion from "../components/Accordian";
// import Label from "../components/Label";
// import Input from "../components/Input";
// import Select from "../components/Select";
// import Button from "../components/Button";
// import Checkbox from "../components/Checkbox";

// function GetStarted() {
//   const [secondForm, showSecondForm] = useState(false);

//   const handleNextClick = () => {
//     showSecondForm(true);
//   };

//   const handlePrevClick = () => {
//     showSecondForm(false);
//   };

//   return (
//     <div className="flex justify-center items-center mt-10">
//       <Accordion title="Consignee Details">
//         {!secondForm ? (
//           <form id="1" className="">
//             <div className="py-2 px-6">
//               <h2 className="text-md font-bold text-left">Personal Details</h2>
//             </div>
//             <div className="grid lg:grid-cols-3 gap-2 py-2 px-6 md:grid-cols-2">
//               <div>
//                 <Label someLabel="First Name">
//                   <span className="text-red-600 ml-1">*</span>{" "}
//                 </Label>
//                 <Input
//                   type="text"
//                   required={true}
//                   placeholder="Enter First Name.."
//                   name="firstName"
//                 />
//               </div>
//               <div>
//                 <Label someLabel="Last Name">
//                   <span className="text-red-600 ml-1">*</span>{" "}
//                 </Label>
//                 <Input
//                   type="text"
//                   placeholder="Enter Last Name.."
//                   name={"lastname"}
//                 />
//               </div>
//               <div>
//                 <Label someLabel="Mobile Number">
//                   <span className="text-red-600 ml-1">*</span>{" "}
//                 </Label>
//                 <Input type="text" placeholder="Enter Mobile Number.." />
//               </div>
//               <div>
//                 <Label someLabel="Email Address">
//                   <span className="text-red-600 ml-1">*</span>{" "}
//                 </Label>
//                 <Input type="email" placeholder="Enter Email Address.." />
//               </div>
//             </div>
//             <div className="flex justify-between mt-32">
//               <button className="ml-60 text-xs text-gray-400">Prev</button>
//               <button
//                 className="mr-60 text-xs text-blue-800"
//                 onClick={handleNextClick}
//               >
//                 Next
//               </button>
//             </div>
//           </form>
//         ) : (
//           <div id="2" className="duration-700">
//             <div className="py-2 px-6 ">
//               <h2 className="text-md font-bold text-left">Shipping Address</h2>
//             </div>
//             <div className="grid lg:grid-cols-3 gap-2 py-2 px-6 md:grid-cols-2">
//               <div>
//                 <Label someLabel="Address 1">
//                   <span className="text-red-600 ml-1">*</span>{" "}
//                 </Label>
//                 <Input
//                   type="text"
//                   placeholder="Enter Address 1.."
//                   name="shipping"
//                 />
//               </div>
//               <div>
//                 <Label someLabel="Address 2">
//                   <span className="text-red-600 ml-1">*</span>{" "}
//                 </Label>
//                 <Input type="text" placeholder="Enter Address 2.." />
//               </div>
//               <div>
//                 <Label someLabel="Landmark" />
//                 <Input type="text" placeholder="Enter Landmark.." />
//               </div>
//               <div>
//                 <Label someLabel="Country">
//                   <span className="text-red-600 ml-1">*</span>{" "}
//                 </Label>
//                 <Select
//                   placeholder="Choose One"
//                   defaultValue="Choose"
//                   className="w-52 left-44"
//                   options={[
//                     { label: "Select Country", value: "1" },
//                     { label: "Australia", value: "2" },
//                     { label: "India", value: "3" },
//                     { label: "USA", value: "4" },
//                   ]}
//                 />
//               </div>
//               <div>
//                 <Label someLabel="State">
//                   <span className="text-red-600 ml-1">*</span>{" "}
//                 </Label>
//                 <Select
//                   placeholder="Choose One"
//                   defaultValue="Choose"
//                   className="w-52 left-44"
//                   options={[
//                     { label: "Select State", value: "1" },
//                     { label: "California", value: "2" },
//                     { label: "Haryana", value: "3" },
//                     { label: "Punjab", value: "4" },
//                   ]}
//                 />
//               </div>
//               <div>
//                 <Label someLabel="City">
//                   <span className="text-red-600 ml-1">*</span>{" "}
//                 </Label>
//                 <Input type="text" placeholder="Enter City.." />
//               </div>
//               <div>
//                 <Label someLabel="Pincode">
//                   <span className="text-red-600 ml-1">*</span>{" "}
//                 </Label>
//                 <Input type="text" placeholder="Enter Pincode.." />
//               </div>
//             </div>
//             <Checkbox
//               label="Billing address is same as shipping address"
//               onChange={(e) => setBillingSameAsShipping(e.target.value)}
//             />
//             <div className="flex justify-between mt-0.5">
//               <button
//                 className="ml-60 text-xs text-blue-800"
//                 onClick={handlePrevClick}
//               >
//                 Prev
//               </button>
//               <button className="mr-60 text-xs text-gray-400">Next</button>
//             </div>
//             <Button
//               label="Continue"
//               color="indigo"
//               type="submit"
//               //   onClick={() => alert("Submitted!")}
//               className="ml-[550px] mt-5"
//             />
//           </div>
//         )}
//         {/* <Practice /> */}
//       </Accordion>
//     </div>
//   );
// }

//export default GetStarted;
import React from "react";
import Accordion from "../components/Accordian";
import Practice from "./Practice";

function GetStarted() {
  return (
    <div className="flex justify-center items-center mt-10">
      <Accordion title="Consignee Details">
        <Practice />
      </Accordion>
    </div>
  );
}

export default GetStarted;
