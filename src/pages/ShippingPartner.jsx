import React from "react";
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
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="w-32 h-16 bg-gray-50 border border-gray-400 rounded-md">
          <div className="flex flex-col mt-3">
            <div className="text-center font-semibold text-gray-600">1 KG</div>
            <div className="text-center text-xs text-gray-600">Dead Weight</div>
          </div>
        </div>
        <div className="w-40 h-16 bg-gray-50 border border-gray-400 rounded-md">
          <div className="flex flex-col mt-3">
            <div className="text-center font-semibold text-gray-600">
              0.001 KG
            </div>
            <div className="text-center text-xs text-gray-600">
              Volumetric Weight
            </div>
          </div>
        </div>
        <div className="w-32 h-16 bg-orange-100 border border-orange-400 rounded-md">
          <div className="flex flex-col mt-3">
            <div className="text-center font-semibold text-orange-600">
              1 KG
            </div>
            <div className="text-center text-xs text-orange-600">
              Billed Weight
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-bold mt-4">Showing 3 Results</h2>

      <div className="mt-2  overflow-hidden">
        <table className="">
          <tr className="grid grid-cols-4 py-2 w-[730px] border rounded-md mb-4px text-slate-500 bg-slate-50">
            <th className="font-medium pr-12">Courier Partner</th>
            <th className="font-medium">Delivery Time</th>
            <th className="font-medium">Shipment Rate</th>
            <th className="font-medium">Select</th>
          </tr>
          <tr className=" grid grid-cols-4  py-4 mt-2  w-[730px] border rounded-md mb-4px text-gray-500x">
            <td className="font-semibold text-[13px] px-4">
              ShipGlobal WorldWide
            </td>
            <td className="ml-9">13 - 18 Days</td>
            <td className="ml-14">Rs. 3229</td>
            <td className="ml-20">
              <i class="fa-regular fa-circle-check text-lg fill-green-500"></i>
            </td>
          </tr>
          <tr className=" grid grid-cols-4 py-4 mt-2  w-[730px] border rounded-md mb-4px text-gray-500x">
            <td className="font-semibold px-4 text-[13px]">Fedex</td>
            <td className="ml-9">4 - 7 Days</td>
            <td className="ml-14">Rs. 3465</td>
            <td className="ml-20">
              <i class="fa-solid fa-circle-check text-lg color: #ece9e9"></i>
            </td>
          </tr>
          <tr className=" grid grid-cols-4  py-4 mt-2 w-[730px] border rounded-md mb-4px text-gray-500x">
            <td className="font-semibold px-4 text-[13px]">UPS</td>
            <td className="ml-9">4 - 7 Days</td>
            <td className="ml-14">Rs. 5785</td>
            <td className="ml-20">
              <input
                className="border p-2 rounded-full h-4 w-4 cursor-pointer"
                type="Checkbox"
                name=""
                id=""
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ShippingPartner;
