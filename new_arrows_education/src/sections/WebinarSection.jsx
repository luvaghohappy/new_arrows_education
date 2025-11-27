export default function Webinars() {
  const webinars = [
    {
      img: "https://www.arrowstransactions.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-07-at-3.35.10-PM-300x300.jpeg",
    },
    {
      img: "https://www.arrowstransactions.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-06-at-1.40.45-AM-300x300.jpeg",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-16 bg-white">

      {/* WEBINARS box */}
      <div className="text-center mt-20">
        <span className="px-4 py-1 bg-orange-300/40 text-orange-700 rounded-full text-sm font-semibold">
          WEBINARS
        </span>

        <h3 className="text-black text-4xl font-bold mt-4">
          Professional Roundtable.
        </h3>

        
      </div>

      {/* Webinars Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">

        {webinars.map((w, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={w.img}
                className="w-full h-72 object-cover"
              />

              {/* Play Icon */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 px-3 py-1 rounded-full shadow">
                <i className="fas fa-play text-green-700"></i>
                <span className="text-sm font-medium text-gray-800">Watch</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <button className="px-4 py-1 bg-green-600/20 text-green-700 border border-green-600 rounded-full text-sm font-semibold hover:bg-green-600 hover:text-white transition">
                Watch Now
              </button>
            </div>
          </div>
        ))}

      </div>
      {/* Centered underline */}
        <div className="flex justify-center mt-3 py-3">
          <div className="w-24 h-1 bg-orange-600"></div>
        </div>

    </section>
  );
}
