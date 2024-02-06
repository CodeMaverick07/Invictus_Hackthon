import { useState } from "react"
import { toast } from "react-toastify"

function JobApplication() {
  const [whyus, setWhyus] = useState("")
  const [coverletter, setCoverletter] = useState("")
  const [resume, setResume] = useState("")
  const [status, setStatus] = useState("Pending")
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(whyus, coverletter, resume, status);
    toast.success("Applied Succesfully")
     setFormSubmitted(true);

      if (formSubmitted) {
    return (
      <div>
        <p>Form submitted. Thank you!</p>
      </div>
    );
      }
}
  return (
    <div>
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div className="mb-2 mt-10">
    <label for="whyus" className="block mb-2  text-sm font-medium text-gray-900 ">Why us</label>
    <textarea id="whyus" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Reason to join.." onChange={(e)=>{setWhyus(e.target.value)}}></textarea>
  </div>
  <div className="mb-2">
    <label for="coverletter" className="block mb-2 text-sm font-medium text-gray-900 ">Cover Letter Link</label>
    <input type="url" id="coverletter" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="https/coverletter"required onChange={(e)=>{setCoverletter(e.target.value)}}></input>
  </div>
  <div className="mb-2">
    <label for="resume" className="block mb-2 text-sm font-medium text-gray-900 ">Resume Link</label>
    <input type="url" id="resume" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="https/resume"required onChange={(e)=>{setResume(e.target.value)}}></input>
  </div>
  <div className="mb-2">
    <label for="status" className="block mb-2 text-sm font-medium text-gray-900 ">Status</label>
    <div type="text" name=""className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="status" value={status}>Pending</div>
  </div> 
  <button type="submit" className="text-white bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
</form>
</div>
  )
}

export default JobApplication