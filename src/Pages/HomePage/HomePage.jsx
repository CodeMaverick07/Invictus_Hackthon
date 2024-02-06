import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { FaArrowRight } from "react-icons/fa6";
import CountUp from "react-countup";
import "./HomePage.css";
const stats = [
    { label: "Onboarded companies", value: "1131" },
    { label: "Student members", value: "35254" },
    { label: "Community Events", value: "141" },
];

const team = [
    {
        name: "Gautam",
        role: "Backend",
        imageUrl: "gautam.png",
    },
    {
        name: "Hemant",
        role: "Frontend",
        imageUrl: "/hemant.jpg",
    },
    {
        name: "Chinmay",
        role: "Frontend",
        imageUrl: "/chinmay.jpg",
    },
    {
        name: "Sami",
        role: "Frontend",
        imageUrl: "/sami.jpg",
    },
];

const HomePage = () => {
    return (
        <Layout>
            <div className="bg-white lg:mt-20 sm:mt-5 overflow-hidden ">
                <main className="isolate">
                    <div className="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                            <div className="xl:pl-12 max-lg:pl-6 col-span-3 max-md:col-span-3 bg-pink-5"></div>
                            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                    <div>
                                        <div className="welcome-message">
                                            <div className="get-quality">
                                                Get quality
                                            </div>
                                            <div className="internships">
                                                <u>Internships;</u>
                                            </div>
                                            <div className="internOasis">
                                                @ InternOasis
                                            </div>
                                        </div>

                                        <Link
                                            className="text-white bg-gray-900 py-2 mt-4 rounded-lg no-underline flex items-center gap-2 justify-center  max-w-36"
                                            to={"/signup"}
                                        >
                                            Get Started <FaArrowRight />
                                        </Link>
                                    </div>
                                    <div className="mt-3 max-w-xl text-base leading-7 text-gray-700">
                                        <p>
                                            <b>InternOasis</b> is your gateway
                                            to a transformative internship
                                            experience! We understand the
                                            challenges students and companies
                                            face in navigating the dynamic
                                            landscape of internships.
                                            InternOasis is not just a platform;
                                            its a visionary solution designed to
                                            seamlessly connect aspiring students
                                            with promising internship
                                            opportunities and empower companies
                                            to discover top-tier talent.
                                        </p>
                                        <p className="mt-10">
                                            Join us in creating a future where
                                            meaningful connections thrive, and
                                            professional growth knows no bounds.
                                            Welcome to InternOasis - where the
                                            journey to your dream internship
                                            begins!
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:flex lg:flex-auto lg:justify-center">
                                    <dl className="w-64 space-y-8 xl:w-80 mx-auto">
                                        {stats.map((stat) => (
                                            <div
                                                key={stat.label}
                                                className="flex flex-col-reverse gap-y-4"
                                            >
                                                <dt className="text-base leading-7 text-gray-600">
                                                    {stat.label}
                                                </dt>
                                                <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                                                    <CountUp
                                                        end={stat.value}
                                                        duration={0.8}
                                                    />
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative isolate -z-10 mt-32 sm:mt-48">
                        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                            <svg
                                className="h-[500rem] w-[200rem] flex-none stroke-gray-200"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                                        width={200}
                                        height={200}
                                        x="50%"
                                        y="50%"
                                        patternUnits="userSpaceOnUse"
                                        patternTransform="translate(-100 0)"
                                    >
                                        <path d="M.5 200V.5H200" fill="none" />
                                    </pattern>
                                </defs>
                                <svg
                                    x="50%"
                                    y="50%"
                                    className="overflow-visible fill-gray-50"
                                >
                                    <path
                                        d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                                        strokeWidth={0}
                                    />
                                </svg>
                                <rect
                                    width="100%"
                                    height="100%"
                                    strokeWidth={0}
                                    fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
                                />
                            </svg>
                        </div>
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                                Trusted by the world’s most innovative teams
                            </h2>
                            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                                <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                                    alt="Transistor"
                                    width={158}
                                    height={48}
                                />
                                <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                                    alt="Reform"
                                    width={158}
                                    height={48}
                                />
                                <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                                    alt="Tuple"
                                    width={158}
                                    height={48}
                                />
                                <img
                                    className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                                    src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                                    alt="SavvyCal"
                                    width={158}
                                    height={48}
                                />
                                <img
                                    className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                    src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                                    alt="Statamic"
                                    width={158}
                                    height={48}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        id="ourTeam"
                        className=" mt-32 w-screen px-6 sm:mt-48 lg:px-8 mb-10"
                    >
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex lg:items-center flex-col ">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Our team
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                The team operates with a collaborative mindset,
                                fostering open communication and
                                knowledge-sharing. The diversity of skills
                                within the team allows for a comprehensive
                                approach to problem-solving, ultimately
                                contributing to the project&apos;s success.
                            </p>
                        </div>
                        <div className="lg:justify-center my-10">
                            <div
                                role="list"
                                // className="mx-auto mt-20 grid lg:pl-72 grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
                                className="persons-container"
                            >
                                {team.map((person) => (
                                    <div key={person.name} className="person">
                                        <img
                                            // className="h-24 w-24 mx-auto rounded-full"
                                            className="person-image"
                                            src={person.imageUrl}
                                            alt=""
                                        />
                                        {/* <h3 
                                        className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900"
                                        > */}
                                        <div className="person-name">
                                            {person.name}
                                        </div>
                                        {/* </h3> */}
                                        {/* <p className="text-sm leading-6 text-gray-600"> */}
                                        <div className="person-role">
                                            [{person.role}]
                                        </div>

                                        {/* </p> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
};

export default HomePage;
