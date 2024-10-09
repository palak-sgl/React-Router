import { useState } from "react";
import Button from "../components/Button";
import Label from "../components/Label";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Select from "../components/Select";
import ToggleSwitch from "../components/ToggleSwitch";
import Radio from "../components/Radio";
import Checkbox from "../components/Checkbox";
import Badge from "../components/Badge";
import DatePicker from "../components/DatePicker";
import Tooltip from "../components/Tooltip";
import Progress from "../components/Progress";
import Accordion from "../components/Accordian";
import Popover from "../components/Popover";
import Carousel from "../components/Carousel";
function About() {
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
                <Label someLabel="Preferences"></Label>
              </div>
              <div className="float-right">
                <Tooltip text="You have got 5 Notifications." color={"white"}>
                  <Badge label="5" color={"red"}></Badge>
                </Tooltip>
              </div>
            </div>
            <h3 className="mt-10">Language</h3>
            <Select
              placeholder="Choose One"
              defaultValue="Choose"
              options={[
                { label: "English", value: "1" },
                { label: "Hindi", value: "2" },
              ]}
            />
            <div className="flex ">
              <h3 className="mt-5">Notifications</h3>
              <ToggleSwitch
                isOn={isToggleOn}
                handleToggle={handleToggle}
                color="blue"
              />
            </div>

            <h3 className="mt-5 mb-2">Preferred Method for Notifications</h3>
            <div className="flex flex-row">
              <div className="mr-4">
                <Radio name="notifications" label="SMS" id="sms" value="sms" />
              </div>
              <div>
                <Radio
                  name="notifications"
                  label="Email"
                  id="email"
                  value="email"
                />
              </div>
            </div>

            <h3 className="mt-3 text-md text-red-600 font-semibold">
              Privacy Setting
            </h3>
            <Checkbox label="Share activity with friends" />

            <Button
              label="Update Changes"
              color="blue"
              onClick={() => alert("Submitted!")}
            />
          </div>
        </div>
        <h3 className="mt-14">Your Preferences Progress</h3>
        <Progress value={progressValue} />
        <p className="text-xs mt-1">{progressValue}%</p>
      </div>
    </>
  );
}

export default About;