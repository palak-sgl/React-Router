import { useState } from "react";
import Label from "../components/Label";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import Badge from "../components/Badge";

import Tooltip from "../components/Tooltip";
import Progress from "../components/Progress";
import Accordion from "../components/Accordian";
import Popover from "../components/Popover";
function Security() {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const handleToggle = () => setIsToggleOn(!isToggleOn);
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (e) => setSelectedDate(e.target.value);
  const [progressValue, setProgressValue] = useState(70);
  const carouselImages = [
    "https://images.pexels.com/photos/27068594/pexels-photo-27068594/free-photo-of-towers-of-castle-among-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/28733751/pexels-photo-28733751/free-photo-of-steam-train-on-glenfinnan-viaduct-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14252751/pexels-photo-14252751.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];
  return (
    <>
      {/* <Header /> */}

      <div className="flex  flex-col items-center justify-center mt-7">
        <div className="text-3xl font-bold ">
          <Label someLabel="Profile Settings"></Label>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="w-80 h-90 shadow-lg px-4 py-5">
            <div className="float">
              <div className="float-left">
                <Label someLabel="Security Settings"></Label>
              </div>
              <div className="float-right">
                <Tooltip text="You have got 5 Notifications." color={"white"}>
                  <Badge label="5" color={"red"}></Badge>
                </Tooltip>
              </div>
            </div>
            <h3 className="mt-10">Current Password</h3>
            <Input
              type="password"
              placeholder="Write current password"
              className="w-72"
            ></Input>
            <h3>New Password</h3>
            <div className="flex">
              <Input
                type="password"
                placeholder="Write new password"
                className="w-64"
              />
              <Popover content="Your password must be 8 characters long having uppercase, lowercase and a special character." />
            </div>
            <Checkbox label="I agree to the terms" />
            <Accordion
              title="Your other social profiles."
              content="LinkedIn"
              content2="Twitter"
            />
          </div>
        </div>
        <h3 className="mt-14">Your Security Settings Progress</h3>
        <Progress value={progressValue} />
        <p className="text-xs mt-1">{progressValue}%</p>
      </div>
    </>
  );
}

export default Security;
