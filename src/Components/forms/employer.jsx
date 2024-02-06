import { useState } from "react";

import { toast } from "react-toastify";
import { useUser } from "../../context/UserContext";

function Employer() {
  const [nameofCompany, setnameofCompany] = useState("");
  const [aboutCompany, setaboutCompany] = useState("");
  const [Whytojoin, setWhytojoin] = useState("");
  const [socialsofCompany, setsocialsofCompany] = useState("");
  const { setUserType } = useUser();

  return (
    <div className="employer">
      <form className="max-w-sm mx-auto">
        <div className="mb-2">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Name of Company
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="https/coverletter"
            required
            value={nameofCompany}
            onChange={(e) => {
              setnameofCompany(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-2">
          <label
            for="about"
            className="block mb-2  text-sm font-medium text-gray-900 "
          >
            About
          </label>
          <textarea
            id="about"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="About Company..."
            value={aboutCompany}
            onChange={(e) => {
              setaboutCompany(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mb-2">
          <label
            for="why"
            className="block mb-2  text-sm font-medium text-gray-900 "
          >
            Why to join
          </label>
          <textarea
            id="why"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Reason to join.."
            value={Whytojoin}
            onChange={(e) => {
              setWhytojoin(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mb-2">
          <label
            for="website"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Company Website
          </label>
          <input
            type="url"
            id="website"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="https/company"
            required
            value={socialsofCompany}
            onChange={(e) => {
              setsocialsofCompany(e.target.value);
            }}
          ></input>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Employer;
