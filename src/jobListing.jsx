function JobListing(){
    return(
        <>
            
<h1>List a Internship</h1>
<form class="max-w-sm mx-auto">
  <div class="mb-2 mt-10">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Position</label>
    <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Company XYZ" required></input>
  </div>
  <div class="mb-2">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="company@gmail.com"required></input>
  </div>
  <div class="mb-2">
  <label for="location" class="block mb-2 text-sm font-medium text-gray-900 ">Location</label>
    <select for="location"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="company@gmail.com"required>
        <option value="Remote">Remote</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Africa">Africa</option>
        <option value="Australia">Australia</option>
        <option value="Other">Other</option>
    </select>
  </div>
  <div class="mb-2 flex gap-5">
    <div>
    <label for="salary" className="block mb-2 text-sm font-medium text-gray-900 ">Salary</label>
    <input type="number" id="salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"required></input>
    </div>
    <div>
    <label for="Duration" className="block mb-2 text-sm font-medium text-gray-900 ">Duration</label>
    <input type="number" id="salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"required placeholder="months"></input>
    </div>
  </div>
  <div class="mb-2 flex gap-5">
  <div>
    <label for="skills" className="block mb-2 text-sm font-medium text-gray-900 ">Skills</label>
    <input type="text" id="skills" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"required placeholder="Communiction, etc"></input>
  </div>
  <div>
    <label for="skills" className="block mb-2 text-sm font-medium text-gray-900 ">Tech Stack</label>
    <input type="text" id="skills" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"required placeholder="React, Node, Python, etc."></input>
  </div> 
  </div>    
        
  <label for="message" className="block mb-2  text-sm font-medium text-gray-900 ">About The Role</label>
  <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>
  <button type="submit" className="text-white bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</form>


        </>
    )
}

export default JobListing