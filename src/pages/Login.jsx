import React, { useState } from "react";
import Accordion from "../components/Accordian";
import ShipmentInformation from "./ShipmentInformation";
import Consigner from "./Consignor";
import ShippingPartner from "./ShippingPartner";
import Consignee from "./Consignee";

function Login({}) {
  // const [showChangeButton, setShowChangeButton] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  console.log(activeStep, "activeStep");
  return (
    <div className="flex justify-center items-center mt-10 flex-col font-poppins">
      <Accordion
        title="Consignor Details"
        activeStep={activeStep}
        isOpen={activeStep === 1}
        setActiveStep={setActiveStep}
        stepNumber={1}
        showChangeButton="Change"
      >
        <Consigner setActiveStep={setActiveStep} />
      </Accordion>

      <Accordion
        title="Consignee Details"
        isOpen={activeStep === 2}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        showChangeButton="Change"
        stepNumber={2}
      >
        <Consignee setActiveStep={setActiveStep} />
      </Accordion>

      <Accordion
        title="Shipment Information"
        isOpen={activeStep === 3}
        activeStep={activeStep}
        stepNumber={3}
      >
        <ShipmentInformation setActiveStep={setActiveStep} />
      </Accordion>
      <Accordion
        title="Select Shipping Partner"
        isOpen={activeStep === 4}
        activeStep={activeStep}
        stepNumber={4}
      >
        <ShippingPartner />
      </Accordion>
    </div>
  );
}

export default Login;
