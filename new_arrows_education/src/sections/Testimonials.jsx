import backgroundImage from "../assets/map.jpg";

export default function Testimonials() {
    return (
        <section
            className="relative bg-cover bg-center py-20"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Background overlay for opacity */}
            <div className="absolute inset-0 bg-white/70"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-4">

                {/* Transparent green button */}
                <button className="px-5 py-2 bg-green-600/20 text-green-700 border border-green-600 rounded-full font-medium mb-4">
                    Testimonials
                </button>

                {/* Title */}
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    Custom Review
                </h2>

                {/* Icons row */}
                <div className="flex justify-center items-center gap-4 my-4 text-green-700 text-3xl">
                    <i className="fas fa-quote-left"></i>
                    <i className="fas fa-star"></i>
                </div>

                {/* Description */}
                <p className="text-gray-700 max-w-2xl mx-auto mb-10">
                    Hear what our users have to say about our platform. Real experiences,
                    real impact.
                </p>

                {/* Profile row with network images */}
                <div className="flex justify-center gap-6 flex-wrap">

                    {[
                        "https://randomuser.me/api/portraits/women/44.jpg",
                        "https://randomuser.me/api/portraits/men/36.jpg",
                        "https://randomuser.me/api/portraits/women/12.jpg",
                        "https://randomuser.me/api/portraits/men/25.jpg",
                        "https://randomuser.me/api/portraits/women/5.jpg",
                    ].map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt="reviewer"
                            className="w-20 h-20 object-cover rounded-full border-4 border-orange-500"
                        />
                    ))}

                </div>
            </div>
        </section>
    );
}
