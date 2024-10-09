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
function Demo() {
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
        <div className="text-3xl font-bold mb-5">
          <Label someLabel="Your recent profile pictures"></Label>
        </div>
        <div className="w-full max-w-md mb-10">
          <Carousel images={carouselImages} />
        </div>
        <div className="text-3xl font-bold ">
          <Label someLabel="Profile Settings"></Label>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="w-80 h-90 shadow-lg px-4 py-5">
            {/* <Tooltip text="Your account is a verified account." color={"black"}>
                <Badge label="Verified" color={"blue"}></Badge>
              </Tooltip>
              <Label someLabel="Personal Information"></Label> */}
            {/* <div className="float">
                <div className="float-left">
                  <Label someLabel="Personal Information"></Label>
                </div>
                <div className="float-right">
                  <Tooltip
                    text="Your account is a verified account."
                    color={"black"}
                  >
                    <Badge label="Verified" color={"blue"}></Badge>
                  </Tooltip>
                </div>
              </div> */}
            <div className="flex">
              <div>
                <Label someLabel="Personal Information"></Label>
              </div>
              <div>
                <Tooltip text="You have got 5 Notifications." color={"white"}>
                  <Badge label="5" color={"red"}></Badge>
                </Tooltip>
              </div>
            </div>
            <div>
              <h3 className="mt-5">Name</h3>
            </div>

            <Input
              type="text"
              placeholder="Write your name"
              className="w-72"
            ></Input>
            <h3 className="mt-5">Email</h3>
            <Input
              type="text"
              placeholder="Write your email"
              className="w-72"
            ></Input>
            <h3 className="mt-5">Write description</h3>
            <Textarea placeholder="Add some description"></Textarea>
            <h3 className="mt-2">Date of birth</h3>
            <DatePicker value={selectedDate} onChange={handleDateChange} />
            <Button
              label="Save Changes"
              color="green"
              onClick={() => alert("Submitted!")}
            />
          </div>
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
            <Radio name="gender" label="SMS" id="male" value="male" />
            <Radio name="gender" label="Email" id="female" value="female" />
            <h3 className="mt-10 text-md text-red-600 font-semibold">
              Privacy Setting
            </h3>
            <Checkbox label="Share activity with friends" />

            <Button
              label="Update Changes"
              color="blue"
              onClick={() => alert("Submitted!")}
            />
          </div>
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
        <h3 className="mt-14">Your Profile Progress</h3>
        <Progress value={progressValue} />
        <p className="text-xs mt-1">{progressValue}%</p>
      </div>
    </>
  );
}

export default Demo;
