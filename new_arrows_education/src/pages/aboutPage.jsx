// File: src/pages/AboutPage.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Footer from "../components/Footer";

export default function AboutPage() {
    const stats = [
        { value: "10,000+", label: "Students" },
        { value: "20,000+", label: "Partners Universities" },
        { value: "30+", label: "Countries" },
        { value: "95%", label: "Success Rate" },
    ];

    const team = [
        {
            name: "Dr. Bosede Edwards",
            title: "Consultant",
            image: "https://arrowstransactions.com/wp-content/uploads/2020/09/image4-1.jpg",
        },

        {
            name: "Joash Mock",
            title: "Educator & Leadership Coach",
            image: "https://www.arrowstransactions.com/wp-content/uploads/2025/06/1.png",
        },
        {
            name: "Steve Edwards",
            title: "Director (Placement & Marketing)",
            image: "https://arrowstransactions.com/wp-content/uploads/2020/09/image6.png",
        },
        {
            name: "Shukry Radzi",
            title: "Director – PR",
            image: "https://www.arrowstransactions.com/wp-content/uploads/2025/06/2.png",
        },
        {
            name: "Patricia Frances Jilolin Soimon",
            title: "Education Coord. (Asia)",
            image: "https://www.arrowstransactions.com/wp-content/uploads/2020/11/Frances.jpg",
        },
    ];

    return (
        <div className="w-full bg-white">
            {/* -------------------------------- */}
            {/* SECTION 1 — HERO + TEXT BLOCK */}
            {/* -------------------------------- */}
            <section className="bg-white pt-20 pb-16 px-6">

                {/* HEADINGS */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Transforming International Education
                    </h1>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        We're on a mission to democratize access to quality international education
                        through innovative technology and personalized support.
                    </p>
                </div>

                {/* HERO IMAGE */}
                <img
                    src="https://pics.bc.ca/wp-content/uploads/2023/12/IHUB-for-International-students.jpg"
                    alt="About Hero"
                    className="h-96 w-120 max-w-6xl mx-auto rounded-xl mt-10 shadow"
                />

                {/* LONG TEXT BLOCK */}
                <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div>
                        <span className="text-orange-500 text-sm font-semibold bg-orange-100 px-3 py-1 rounded-md">
                            OUR STORY
                        </span>

                        <h2 className="text-3xl font-bold mt-4 text-gray-900 leading-snug">
                            Connecting Students <br /> to the World’s Best Opportunities
                        </h2>
                    </div>

                    <div>
                        <p className="text-gray-600 leading-relaxed">
                            Over the past decade, Arrows Education (OT Consultancy) has built itself into
                            a formidable force in the education consulting space. As the brand grew, we nurtured
                            our partnerships with parents and students, as well as our consultants and the
                            institutions we represent.
                        </p>

                        <p className="text-gray-600 leading-relaxed mt-4">
                            We have developed trusted links with over one thousand schools, colleges and
                            universities across all the continents of the world, served through a vast network
                            of service offerings. This gives our student and parent clients access to the best
                            opportunities anywhere in the world.
                        </p>

                        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700">
                            Learn More →
                        </button>
                    </div>
                </div>
            </section>


            {/* -------------------------------- */}
            {/* SECTION 2 — WORLD MAP + STATS */}
            {/* -------------------------------- */}
            <section className="bg-white mt-20 px-6 py-8">

                {/* MAP + TEXT */}
                <div className="relative max-w-6xl mx-auto bg-grey-100">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/016/460/501/original/world-map-outline-isolated-on-transparent-background-free-png.png"
                        alt="World Map"
                        className=" w-full h-80 object-contain opacity-40 rounded-xl"
                    />
                    <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 
                       bg-white bg-opacity-95 px-6 py-3 rounded-lg shadow text-gray-800 font-medium">
                        Wherever you want to study, <span className="px-3 text-orange-600 font-bold">we're there with you.</span> 
                    </p>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 
                    max-w-6xl mx-auto mt-14">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="shadow bg-grey-200 p-6 bg-white bg-opacity-80 rounded-xl shadow text-center h-40 flex flex-col justify-center"
                        >
                            <p className="text-3xl font-bold text-black">{item.value}</p>
                            <div className="w-12 h-1 bg-green-600 mx-auto mt-2"></div>
                            <p className="text-gray-600 mt-2">{item.label}</p>
                        </div>
                    ))}
                </div>

            </section>

            {/* -------------------------------- */}
            {/* SECTION 3 — MEET OUR TEAM */}
            {/* -------------------------------- */}
            <section className="mt-24 px-6 max-w-6xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold text-black">Meet Our Team</h2>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
                        Our Team
                    </button>
                </div>

                {/* TEAM CARDS — 3 top row, 2 centered bottom row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow p-6 text-center w-72"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto object-cover"
                            />
                            <h3 className="mt-4 text-xl font-semibold text-black">{member.name}</h3>
                            <p className="text-orange-600">{member.title}</p>

                            {/* SOCIAL ICONS */}
                            <div className="flex space-x-4 justify-center mt-4 text-2xl text-gray-500 ">
                                {/* Facebook */}
                                <a href="#" className="hover:text-blue-600">
                                    <FaFacebook size={24} />
                                </a>

                                {/* Instagram */}
                                <a href="#" className="text-pink-600 hover:text-pink-500">
                                    <FaInstagram size={24} />
                                </a>

                                {/* YouTube */}
                                <a href="#" className=" text-red-600 hover:text-red-600">
                                    <FaYoutube size={24} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
          <Footer />
        </div>
    
    );
}
