export default function BlogSection() {
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
      title: "Study Abroad with an International Student Loan",
      author: "Steve",
      date: "May 21, 2025",
      read: "5 min read",
    },
    {
      img: "https://th.bing.com/th/id/R.d340bef1ecd86a956fb4c2349fd330be?rik=GAo8DHOXg57PhQ&pid=ImgRaw&r=0",
      title: "Why Study in Germany as an International Student",
      author: "Steve",
      date: "May 5, 2025",
      read: "5 min read",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 bg-white">

      {/* BLOG POST Badge */}
      <div className="mb-3">
        <span className="px-4 py-1 bg-orange-200/60 text-orange-700 rounded-full text-sm font-semibold">
          BLOG POST
        </span>
      </div>

      {/* Header Row */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Most Popular Post.</h2>

        <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
          All Blog Post
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {posts.map((post, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">

            {/* Thumbnail */}
            <img
              src={post.img}
              className="w-full h-60 object-cover"
            />

            {/* Content */}
            <div className="p-5">

              {/* Title */}
              <h3 className="text-black text-lg font-semibold mb-2">{post.title}</h3>

              {/* Author */}
              <p className="text-gray-700 font-medium">{post.author}</p>

              {/* Date + Read Time */}
              <p className="text-gray-500 text-sm mb-4">
                {post.date} • {post.read}
              </p>

              {/* Read More Button */}
              <button className="px-4 py-1 bg-green-600/20 text-green-700 border border-green-600 rounded-full text-sm font-semibold hover:bg-green-600 hover:text-white transition">
                Read More
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
