import React from "react";
import Accordion from "../components/Accordian";
function ShippingPartner() {
  return (
    <div className="py-2 px-6 text-sm">
      <p>
        All shipments via ShipGlobal services are{" "}
        <b>Delivered Duty Paid (DDP)</b>, hence <b>no extra duty</b> will be
        billed on the consignee or the shipper. Rates are inclusive of covid &
        fuel surcharge, exclusive of GST and ex-Delhi Hub.
      </p>
      <br />
      <p>
        In case any doubt, please call/whatsapp at{" "}
        <span className="text-indigo-800">011-422 77777</span>
      </p>
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="w-32 h-16 bg-gray-200 border border-gray-400 rounded-md">
          <div className="flex flex-col mt-2">
            <div className="text-center font-semibold text-gray-600">1 KG</div>
            <div className="text-center text-sm text-gray-600">Dead Weight</div>
          </div>
        </div>
        <div className="w-36 h-16 bg-gray-200 border border-gray-400 rounded-md">
          <div className="flex flex-col mt-2">
            <div className="text-center font-semibold text-gray-600">
              0.001 KG
            </div>
            <div className="text-center text-sm text-gray-600">
              Volumetric Weight
            </div>
          </div>
        </div>
        <div className="w-32 h-16 bg-orange-100 border border-orange-400 rounded-md">
          <div className="flex flex-col mt-2">
            <div className="text-center font-semibold text-orange-600">
              1 KG
            </div>
            <div className="text-center text-sm text-orange-600">
              Billed Weight
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold mt-4">Showing 4 Results</h2>

      <table className="w-full mt-3 items-center ">
        <thead className="bg-slate-100 rounded-md">
          <th className="font-semibold py-2 text-gray-600">Courier Partner</th>
          <th className="font-semibold py-2 text-gray-600">Delivery Time</th>
          <th className="font-semibold py-2 text-gray-600">Shipment Rate</th>
          <th className="font-semibold py-2 text-gray-600">Select</th>
        </thead>
        <tbody>
          <tr className="items-center bg-slate-100 m-2 left-6">
            <td>Fedex</td>
            <td>4-7 Days</td>
            <td>Rs. 3317</td>
            <td>
              <i class="fa-regular fa-circle-check"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShippingPartner;
