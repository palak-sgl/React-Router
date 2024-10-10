import { useState } from "react";
import Button from "../components/Button";
import Label from "../components/Label";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Badge from "../components/Badge";
import DatePicker from "../components/DatePicker";
import Tooltip from "../components/Tooltip";
import Progress from "../components/Progress";

function Personal() {
  // const [isToggleOn, setIsToggleOn] = useState(false);
  // const handleToggle = () => setIsToggleOn(!isToggleOn);
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (e) => setSelectedDate(e.target.value);
  const [progressValue, setProgressValue] = useState(70);
  return (
    <>
      {/* <Header /> */}

      <div className="flex  flex-col items-center justify-center mt-7 ">
        {/* <div className="text-3xl font-bold mb-5">
          <Label someLabel="Your recent profile pictures"></Label>
        </div>
        <div className="w-full max-w-md mb-10">
          <Carousel images={carouselImages} />
        </div> */}
        <div className="text-3xl font-bold ">
          <Label someLabel="Profile Settings"></Label>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="w-80 h-90 shadow-lg px-4 py-5 ">
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
                <Tooltip text="You have got 3 new updates." color={"white"}>
                  <Badge label="3" color={"red"}></Badge>
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
        </div>
        <h3 className="mt-14">Your Personal Profile Progress</h3>
        <Progress value={progressValue} />
        <p className="text-xs mt-1">{progressValue}%</p>
      </div>
    </>
  );
}

export default Personal;
