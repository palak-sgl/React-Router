import React, { useState } from "react";
import Accordion from "../components/Accordian";
import ShipmentInformation from "./ShipmentInformation";
import Consigner from "./Consignor";
import ShippingPartner from "./ShippingPartner";
import Consignee from "./Consignee";

function Login({}) {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className="flex justify-center items-center mt-10 flex-col font-poppins">
      <Accordion
        title="Consignor Details"
        activeStep={activeStep}
        isOpen={activeStep === 1}
        setActiveStep={setActiveStep}
        stepNumber={1}
        showChangeButton="Change"
        childElement={<Consigner setActiveStep={setActiveStep} />}
      />

      <Accordion
        title="Consignee Details"
        isOpen={activeStep === 2}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        showChangeButton="Change"
        stepNumber={2}
        childElement={<Consignee setActiveStep={setActiveStep} />}
      ></Accordion>

      <Accordion
        title="Shipment Information"
        isOpen={activeStep === 3}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        showChangeButton="Change"
        stepNumber={3}
        childElement={<ShipmentInformation setActiveStep={setActiveStep} />}
      ></Accordion>

      <Accordion
        title="Select Shipping Partner"
        isOpen={activeStep === 4}
        activeStep={activeStep}
        stepNumber={4}
        childElement={<ShippingPartner />}
      ></Accordion>
    </div>
  );
}

export default Login;
