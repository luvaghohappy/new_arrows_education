import React from "react";
import Footer from "../components/Footer";

export default function BlogPage() {
  const posts = [
    {
      img: "https://www.arrowstransactions.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-11-at-15.21.49_f1b1a41a.jpg",
      title: "Study in Japan: Your Gateway to Innovation, Culture, and International Careers",
      author: "Anthony",
      date: "June 12, 2025",
      read: "5 min read",
    },
    {
      img: "https://www.arrowstransactions.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-18-at-10.20.08_86a23cfb-300x300.jpg",
      title: "Why Study in Germany as an International Student",
      author: "Steve",
      date: "May 21, 2025",
      read: "5 min read",
    },
    {
      img: "https://th.bing.com/th/id/R.d340bef1ecd86a956fb4c2349fd330be?rik=GAo8DHOXg57PhQ&pid=ImgRaw&r=0",
      title: "Study Abroad with an International Student Loan",
      author: "Steve",
      date: "May 5, 2025",
      read: "5 min read",
    },
    {
      img: "https://th.bing.com/th/id/OIP.E6o7vq-FOnAaZ3V08b-9fwHaEK?rs=1&pid=ImgDetMain",
      title: "Study in Australia: What You Need to Know",
      author: "Kwame",
      date: "May 10, 2025",
      read: "5 min read",
    },
    {
      img: "https://www.arrowstransactions.com/wp-content/uploads/2024/01/Japan-Scholarships-1024x768.jpg",
      title: "Call for Applications for The Japanese Government MEXT Scholarship 2025",
      author: "Rebecca Kweku",
      date: "April 26, 2025",
      read: "6 min read",
    },
    {
      img: "https://www.eduaffairs.com/wp-content/uploads/2024/04/Study-Abroad-Low-Cost-Destinations.png",
      title: "Affordable and Best Study Abroad Options – Part 2",
      author: "Rebecca Kweku",
      date: "March 14, 2025",
      read: "5 min read",
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-6 md:px-20">

      {/* Badge */}
      <div className="text-center mb-3">
        <span className="px-4 py-1 bg-orange-200/60 text-orange-700 rounded-full text-sm font-semibold">
          BLOGS
        </span>
      </div>

      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-3">
        Explore Global Education Insights & Practical Advice
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
        Stay informed with expert guidance, global study trends, and real-world tips to support your education journey.
        Our blog is your trusted resource for navigating every step of the international study experience.
      </p>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {posts.map((post, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

            <img src={post.img} className="w-full h-52 object-cover" />

            <div className="p-5">
              <h3 className="text-black text-lg font-semibold mb-2">{post.title}</h3>

              <p className="text-gray-700 font-medium">{post.author}</p>

              <p className="text-gray-500 text-sm mb-4">
                {post.date} • {post.read}
              </p>

              <button className="px-4 py-1 bg-green-600/20 text-green-700 border border-green-600 rounded-full text-sm font-semibold hover:bg-green-600 hover:text-white transition">
                Read More
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* Pagination Section */}
      <div className="mt-12 text-sm text-gray-600">
        Showing 1–6 of 192
      </div>

      <div className="flex gap-2 mt-4">
        <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100">&lt;</button>
        <button className="px-3 py-1 border rounded bg-green-600 text-white">1</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">4</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">5</button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">&gt;</button>
      </div>
     <Footer />
    </div>
  );
}
