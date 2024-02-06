function JobApplication() {
  return (
    <div>
    <form class="max-w-sm mx-auto">
  <div class="mb-2 mt-10">
    <label for="whyus" className="block mb-2  text-sm font-medium text-gray-900 ">Why us</label>
    <textarea id="whyus" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Reason to join.."></textarea>
  </div>
  <div class="mb-2">
    <label for="coverletter" className="block mb-2 text-sm font-medium text-gray-900 ">Cover Letter Link</label>
    <input type="url" id="coverletter" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="https/coverletter"required></input>
  </div>
  <div class="mb-2">
    <label for="resume" className="block mb-2 text-sm font-medium text-gray-900 ">Resume Link</label>
    <input type="url" id="resume" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="https/resume"required></input>
  </div>
  <div class="mb-2">
    <label for="status" className="block mb-2 text-sm font-medium text-gray-900 ">Status</label>
    <div type="text" name=""className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="status">Pending</div>
  </div> 
  <button type="submit" className="text-white bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</form>
</div>
  )
}

export default JobApplication