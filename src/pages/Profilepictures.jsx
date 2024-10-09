import React from "react";
import { useState } from "react";

import Label from "../components/Label";

import Progress from "../components/Progress";

import Carousel from "../components/Carousel";

// function Comp() {
//   const images = [
//     "https://images.pexels.com/photos/27068594/pexels-photo-27068594/free-photo-of-towers-of-castle-among-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     "https://images.pexels.com/photos/28733751/pexels-photo-28733751/free-photo-of-steam-train-on-glenfinnan-viaduct-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     "https://images.pexels.com/photos/14252751/pexels-photo-14252751.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   ];
//   const [activeTab, setActiveTab] = useState(1);

//   const updateTab = (tabNumber) => {
//     setActiveTab(tabNumber);
//   };

//   const [isToggleOn, setIsToggleOn] = useState(false);
//   const handleToggle = () => setIsToggleOn(!isToggleOn);
//   // const [checked, setChecked] = useState(false);
//   // const [gender, setGender] = useState("male");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [progressValue, setProgressValue] = useState(30);
//   const handleDateChange = (e) => setSelectedDate(e.target.value);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 gap-10">
//       <div>
//         <div className="p-10 bg-gray-200 rounded-lg shadow-lg flex flex-col space-y-6 ">
//           {/* Badge Component */}
//           <div className="flex gap-2">
//             <Badge label="Danger" color={"red"} />
//             <Badge label="Pending" color={"yellow"} />
//             <Badge label="Success" color={"transparent"} />
//             <Badge label="New" color={"indigo"} />
//             <Badge label="Active" color={"blue"} />
//           </div>

//           {/* Card Component */}
//           <div className="flex flex-row gap-2">
//             <Card
//               title="Card Title"
//               titleColor="red"
//               contentColor="blue"
//               content="Welcome, this is Card component"
//             />
//             <Card
//               title="Card Title"
//               titleColor="yellow"
//               content="This is the card content."
//             />
//             <Card
//               title="Card Title"
//               titleColor="green"
//               contentColor="red"
//               content="This is the card content."
//             />
//           </div>
//           <br />
//           {/* Tooltip with Button */}
//           <div className="flex flex-row gap-2">
//             <Tooltip text="Are you sure?" color={"black"}>
//               <Button label="Hover for Cancel!" color={"white"} />
//             </Tooltip>

//             <br />
//             <Tooltip text="This is a tooltip" color={"red"}>
//               <Button label="Hover for tooltip!" color={"black"} />
//             </Tooltip>
//             <br />
//             <Tooltip text="This is a tooltip" color={"gray"}>
//               <Button label="Hover for tooltip!" color={"blue"} />
//             </Tooltip>
//           </div>

//           {/* Select Component */}
//           <div className="float">
//             <div className="float-left">
//               <Label someLabel="Select a fruit" />
//               <Select
//                 placeholder="Choose One"
//                 defaultValue="Choose"
//                 options={[
//                   { label: "Apple", value: "1" },
//                   { label: "Banana", value: "2" },
//                 ]}
//               />
//             </div>
//             <div className="float-right">
//               <Label someLabel="Label" />
//               <Input type="text" placeholder="Your name" />
//             </div>
//           </div>

//           {/* Textarea Component */}
//           <div>
//             <Label someLabel="Textarea" />
//             <Textarea placeholder="Enter some text..." />
//           </div>

//           {/* input component */}
//           <div className="float">
//             <div className="float-left">
//               <Checkbox label="I agree to the terms" />
//             </div>
//             <div className="float-right">
//               <Label someLabel="Gender" />
//               <Radio name="gender" label="Male" id="male" value="male" />
//               <Radio name="gender" label="Female" id="female" value="female" />
//             </div>
//           </div>

//           {/* Accordion Component */}
//           <div>
//             <Accordion
//               title="Click for the Accordian content."
//               content="This is the accordion content."
//             />
//           </div>

//           {/* Button */}
//           <div className="flex flex-row gap-2">
//             <Button
//               label="Submit"
//               color="green"
//               onClick={() => alert("Submitted!")}
//             />
//             <Button
//               label="Cancel"
//               color="red"
//               onClick={() => alert("Submitted!")}
//             />
//             <Button
//               label="Login"
//               color="blue"
//               onClick={() => alert("Submitted!")}
//             />
//           </div>
//           <div>
//             <Label someLabel="Toggle Switch"></Label>
//             <ToggleSwitch
//               isOn={isToggleOn}
//               handleToggle={handleToggle}
//               color="blue"
//             />
//           </div>
//           {/* Popover */}
//           <Label someLabel="This is a popover Component"></Label>
//           <Popover
//             triggerText="Click Me For a Popover!"
//             content="This is a popover. You can close it by clicking the button."
//           />
//           {/* Tabs Component */}
//           <Label someLabel="This is Tab Component"></Label>
//           <div className="bg-gray-300  shadow-lg p-2">
//             <Button label="Tab1" color="black" onClick={() => updateTab(1)} />
//             <Button label="Tab2" color="blue" onClick={() => updateTab(2)} />
//             <Button label="Tab3" color="red" onClick={() => updateTab(3)} />
//             <div className="p-4 border m-2 bg-white rounded w-80">
//               {activeTab === 1 && (
//                 <Tabs
//                   tab="1"
//                   content={"This is the content for Tab-1"}
//                   color="blue"
//                 />
//               )}
//               {activeTab === 2 && (
//                 <Tabs tab="2" content={"Welcome to Tab-2"} color="red" />
//               )}
//               {activeTab === 3 && (
//                 <Tabs
//                   tab="3"
//                   content={"Hey, this is Tab-3. Thankyou for visiting."}
//                   color="green"
//                 />
//               )}
//             </div>
//           </div>

//           {/* Date Picker */}
//           <div className="float">
//             <div className="float-left">
//               <Label someLabel="Select Date" />
//               <DatePicker value={selectedDate} onChange={handleDateChange} />
//             </div>
//             <div className="float-right">
//               <Label someLabel="Progress" />
//               <Progress value={progressValue} />
//               <p className="text-xs mt-1">{progressValue}%</p>
//             </div>
//           </div>
//           <div>
//             <Label someLabel="Image Carousel"></Label>
//             <Carousel images={images} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
function Profilepictures() {
  const [progressValue, setProgressValue] = useState(70);
  const carouselImages = [
    "https://images.pexels.com/photos/27068594/pexels-photo-27068594/free-photo-of-towers-of-castle-among-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/28733751/pexels-photo-28733751/free-photo-of-steam-train-on-glenfinnan-viaduct-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14252751/pexels-photo-14252751.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];
  return (
    <div className="flex  flex-col items-center justify-center mt-7">
      <div className="text-3xl font-bold mb-5">
        <Label someLabel="Your recent profile pictures"></Label>
      </div>
      <div className="w-full max-w-md mb-10">
        <Carousel images={carouselImages} />
      </div>
      <h3 className="mt-14">Your Profile Progress</h3>
      <Progress value={progressValue} />
      <p className="text-xs mt-1">{progressValue}%</p>
    </div>
  );
}

export default Profilepictures;
