import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EmployerProfile() {
    const [EmployerData, setEmployerData] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        try {
            // Retrieve job seeker profile data from localStorage
            const storedEmployerData = localStorage.getItem("EmployerData");

            if (storedEmployerData) {
                // Parse the stored data if it exists
                const parsedProfileData = JSON.parse(storedEmployerData);
                setEmployerData(parsedProfileData);
                toast.success("Data loaded successfully");
            } else {
                toast.error("Data not found");
                navigate("/profileinfo");
            }
        } catch (error) {
            toast.error(
                "Error retrieving job seeker profile data from localStorage."
            );
        }
    }, [navigate]);
    return (
        
        <>
        <div class="container mx-auto p-4">
        <div class="flex flex-col md:flex-row bg-gray-200 p-4 rounded-md shadow-md">
          <div class="md:w-1/4 mb-4 md:mb-0">
            <img src="https://th.bing.com/th/id/R.35720bbf29a0f0f1d48195bafdbedf7a?rik=1ArMFF%2fGA8AK1g&riu=http%3a%2f%2fshmector.com%2f_ph%2f13%2f188552034.png&ehk=4W3VAJ3Rgszg4unVrkViPToNE%2b15%2bt3SxRm%2b2VYCdIk%3d&risl=&pid=ImgRaw&r=0" alt="Logo" class="w-full h-auto"/>
          </div>
    
          <div class="md:w-3/4">
            <h1 class="text-2xl font-bold mb-2 flex justify-start">Your Name</h1>
            <p class="text-gray-600 flex justify-start">Job Title</p>
            <p class="text-gray-800 mt-2 flex justify-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet...</p>
          </div>
        </div>
        <div class="text-left">
      <p class="text-lg text-gray-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam voluptatem quidem 
        ipsam beatae unde commodi corporis repudiandae, corrupti rem at dolorum omnis error veritatis, 
        dignissimos eum quisquam hic odio aliquam eligendi! Ratione earum, natus obcaecati modi exercitationem
         voluptates voluptatum molestiae veritatis, molestias nam incidunt unde laboriosam totam reprehenderit 
         deleniti recusandae odio doloremque laborum labore? Ipsam ab unde tenetur neque quam officiis soluta quidem 
         nesciunt facilis impedit. Aut iusto officia optio alias libero aperiam, voluptatum cupiditate, magnam repudiandae 
         iste perferendis necessitatibus deserunt veniam? A nulla quae ratione aspernatur reprehenderit veniam nemo consectetur 
         tempore ipsam, placeat nisi fugiat sequi minus dolor delectus non. Vel, ad saepe. Corrupti repellat nostrum asperiores 
         ullam? Similique distinctio eveniet soluta dolores fugit illo magni architecto et sed fuga! Provident qui tempora, 
         accusamus earum doloribus optio reprehenderit. Error aspernatur maiores consectetur in rem ratione dolor architecto 
         nihil, accusantium dolores praesentium assumenda officiis neque quaerat aperiam, beatae itaque eos ab veritatis 
         accusamus. Nesciunt ab facere nulla officiis perspiciatis ut neque id perferendis dignissimos ipsum expedita, 
         maxime quae autem repellendus porro commodi laboriosam repellat eveniet, ea fugiat. Excepturi cum vitae ullam, 
         et soluta perferendis ad fuga doloremque culpa odio recusandae facere maiores reiciendis, eveniet nobis, laborum 
      </p>
    </div>
      </div>
          </>


    );
}

export default EmployerProfile;
