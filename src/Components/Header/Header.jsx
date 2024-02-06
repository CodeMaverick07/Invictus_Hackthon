import { Fragment, useState, useEffect } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import "./Header.css";

const company = [
    {
        name: "About us",
        href: "/aboutus",
        description:
            "Learn more about our company values and mission to empower others",
    },

    {
        name: "Contact us",
        href: "/contact",
        description:
            "Get in touch with our dedicated support team or reach out on our community forums",
    },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Check the user's login status or access token in local storage
        const accessToken = localStorage.getItem("accessToken");
        setLoggedIn(!!accessToken); // Set loggedIn to true if there's an access token
    }, []);

    return (
        <header className="bg-gray-800 sticky-top">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link to={"/"} className="nav-link -m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-12 w-auto"
                            src="/InternOasisWhite.svg"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Link
                        to="/features"
                        className="text-md font-semibold leading-6 text-gray-300 hover:text-white no-underline"
                    >
                        Features
                    </Link>
                    <Link
                        to="/companiesProfile"
                        className="text-md font-semibold leading-6 text-gray-300 hover:text-white no-underline"
                    >
                        Company Profiles
                    </Link>
                    <Link
                        to="/jobs"
                        className="text-md font-semibold leading-6 text-gray-300 hover:text-white no-underline"
                    >
                        Internships
                    </Link>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-300 hover:text-white outline-none">
                            Company
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
                                {company.map((item) => (
                                    <div
                                        key={item.name}
                                        className="relative rounded-lg p-4 hover:bg-gray-50"
                                    >
                                        <Link
                                            to={item.href}
                                            className="block text-md font-semibold leading-6 text-gray-900"
                                        >
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </Link>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button>
                        <Link
                            to={loggedIn ? "profile" : "login"} // Use the appropriate route for profile or login
                            className="text-md font-bold leading-6 login-button rounded-lg p-2"
                        >
                            {loggedIn || localStorage.getItem("accessToken") ? (
                                <>
                                    Profile{" "}
                                    <span className="" aria-hidden="true">
                                        &rarr;
                                    </span>
                                </>
                            ) : (
                                <>
                                    Log in{" "}
                                    <span className="" aria-hidden="true">
                                        &rarr;
                                    </span>
                                </>
                            )}
                        </Link>
                    </button>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="mt-10 fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="" alt="" />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link
                                        to="/features"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                                    >
                                        Features
                                    </Link>
                                    <Link
                                        to="/companiesProfile"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                                    >
                                        Company Profiles
                                    </Link>
                                    <Link
                                        to="/jobs"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                                    >
                                        Internships
                                    </Link>

                                    {company.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 no-underline"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        to="/login"
                                        className="login-button -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 no-underline"
                                    >
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
