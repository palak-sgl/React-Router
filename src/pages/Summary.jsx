import Label from "../components/Label";
function Summary() {
  return (
    <div className="flex  flex-col items-center justify-center mt-7">
      <div className="text-3xl font-bold mb-10">
        <Label someLabel="Your Profile Summary"></Label>
      </div>
      <div>
        <Label someLabel="Personal Information" />
        <table className=" text-sm text-left mt-3 w-full text-gray-500 border border-gray-100">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="pl-6 pr-32 py-3">
                Personal Information
              </th>
              <th scope="col" className="pl-6  py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border border-gray-50 ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                Name
              </th>
              <td className="px-6 py-4">Jenna Ortega</td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                Email
              </th>
              <td className="px-6 py-4">jenna@example.com</td>
            </tr>
            <tr className="bg-white ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                Description
              </th>
              <td className="px-6 py-4">Lorem ipsum dolor sit amet.</td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Date of birth
              </th>
              <td className="px-6 py-4">28/08/2003</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-5 ">
        <Label someLabel="Preferences" />
        <table className=" text-sm text-left mt-3 w-full text-gray-500 border border-gray-100">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="pl-6 pr-52 py-3">
                Preferences
              </th>
              <th scope="col" className="pl-6 pr-36 py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border border-gray-50 ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                Language
              </th>
              <td className="px-6 py-4">English</td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                Notifications
              </th>
              <td className="px-6 py-4">On</td>
            </tr>
            <tr className="bg-white ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                Preferred method
              </th>
              <td className="px-6 py-4">SMS</td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Share Activity
              </th>
              <td className="px-6 py-4">Off</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-5">
        <Label someLabel="Security" />
        <table className=" text-sm text-left mt-3 w-full text-gray-500 border border-gray-100">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="pl-6 pr-56 py-3">
                Security
              </th>
              <th scope="col" className="pr-44  py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border border-gray-50 ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                Current Password
              </th>
              <td className="px-6 py-4">pw1234</td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                Social Profiles
              </th>
              <td className="px-6 py-4">LinkedIn</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Summary;
