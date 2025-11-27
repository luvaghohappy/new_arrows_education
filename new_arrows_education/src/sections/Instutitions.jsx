
export default function Institutions() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white ">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center">
        
        {/* Green transparent button */}
        <button className="px-4 py-2 border border-green-600 text-green-700 bg-green-100/40 rounded-full w-fit">
          INSTITUTIONS
        </button>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Trusted Partners
        </h2>

        {/* Logos Row */}
        <div className="flex flex-wrap items-center gap-10 mt-6">

          {/* LOGO 1 */}
          <img
            src="https://www.arrowstransactions.com/wp-content/uploads/2021/04/Apply-Board-Logo.png"
            alt="Partner 1"
            className="h-16 w-auto object-contain"
          />

          {/* LOGO 2 */}
          <img
            src="https://www.arrowstransactions.com/wp-content/uploads/2021/04/UCanadaWest.jpg"
            alt="Partner 2"
            className="h-16 w-auto object-contain"
          />

          {/* LOGO 3 */}
          <img
            src="https://www.arrowstransactions.com/wp-content/uploads/2021/04/mohawklogo_full.jpg"
            alt="Partner 3"
            className="h-16 w-auto object-contain"
          />

          {/* LOGO 4 */}
          <img
            src="https://www.arrowstransactions.com/wp-content/uploads/2021/04/Crandall-225x225-1.jpg"
            alt="Partner 4"
            className="h-16 w-auto object-contain"
          />
           {/* LOGO 5 */}
          <img
            src="https://www.arrowstransactions.com/wp-content/uploads/2021/04/URegina.png"
            alt="Partner 5"
            className="h-16 w-auto object-contain"
          />

          {/* LOGO 6 */}
          <img
            src="https://www.arrowstransactions.com/wp-content/uploads/2021/04/UManitoba.png"
            alt="Partner 6"
            className="h-16 w-auto object-contain"
          />

        </div>

      </div>
    </section>
  );
}
