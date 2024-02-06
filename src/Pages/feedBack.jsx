function FeedBack() {
    return (
        <div>
            <h1>FeedBack</h1>
            <form className="max-w-sm mx-auto px-5">
                <div className="mb-2 mt-10">
                    <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder=""
                        required
                    ></input>
                </div>
                <div className="mb-2">
                    <label
                        for="message"
                        className="block mb-2  text-sm font-medium text-gray-900 "
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder=""
                    ></textarea>
                </div>
                <div className="mb-2">
                    <label
                        for="name"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        to
                    </label>
                    <input
                        type="email"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder=""
                        required
                    ></input>
                </div>
                <div className="mb-2">
                    <label
                        for="rating"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Rating
                    </label>
                    <input
                        type="number"
                        id="rating"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder=""
                        required
                    ></input>
                </div>
            </form>
        </div>
    );
}
