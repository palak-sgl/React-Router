import React from "react";
import { useState } from "react";
import Accordion from "../components/Accordian";
import Label from "../components/Label";
import Input from "../components/Input";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [landmark, setLandmark] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      mobileNumber,
      email,
      address1,
      address2,
      landmark,
      //   country,
      //   state,
      city,
      pincode,
      billingSameAsShipping,
    });
  };
  return (
    <div className="flex justify-center items-center  mt-10">
      <Accordion title="Consignee Details">
        <form action="" onSubmit={handleSubmit}>
          <div className="py-2 px-6">
            <h2 className="text-md font-bold text-left">Personal Details</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-2 py-2 px-6 md:grid-cols-2">
            <div>
              <Label someLabel="First Name">
                <span className="text-red-600 ml-1">*</span>{" "}
              </Label>
              <Input
                type="text"
                required={true}
                placeholder="Enter First Name.."
                onChange={(e) => setFirstName(e.target.value)}
              />
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
            </div>
          </div>
          <div className="py-2 px-6">
            <h2 className="text-md font-bold text-left">Shipping Address</h2>
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
                placeholder="Choose One"
                defaultValue="Choose"
                className="w-52 left-44"
                options={[
                  { label: "Select Country", value: "1" },
                  { label: "Australia", value: "2" },
                  { label: "India", value: "3" },
                  { label: "USA", value: "4" },
                ]}
                // onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div>
              <Label someLabel="State">
                <span className="text-red-600 ml-1">*</span>{" "}
              </Label>
              <Select
                placeholder="Choose One"
                defaultValue="Choose"
                className="w-52 left-44"
                options={[
                  { label: "Select State", value: "1" },
                  { label: "California", value: "2" },
                  { label: "Haryana", value: "3" },
                  { label: "Punjab", value: "4" },
                ]}
                // onChange={(e) => setState(e.target.value)}
              />
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
            </div>
          </div>
          <Checkbox
            label="Billing address is same as shipping address"
            onChange={(e) => setBillingSameAsShipping(e.target.value)}
          />
          <Button
            label="Continue"
            color="indigo"
            type="submit"
            //   onClick={() => alert("Submitted!")}
            className="ml-[550px]"
          />
        </form>
      </Accordion>
    </div>
  );
}

export default Login;
