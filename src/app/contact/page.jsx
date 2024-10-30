"use client";



export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    return (
        <div className="min-h-screen dark:bg-gray-900 bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-lg w-full p-8 dark:bg-gray-900 dark:border  bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold dark:text-gray-100 text-center text-gray-800 mb-8">
                    Contact Us
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-100"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>


                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-100"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>


                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-100"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your message"
                            required
                        ></textarea>
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
