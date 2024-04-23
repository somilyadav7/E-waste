import Footer from "./Footer";


const Ewaste = () => {
  return (
    <>
    <div className="flex items-center justify-center ">
      <div className="container px-4 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-700">Understanding E-Waste</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Section 1: Introduction to E-Waste */}
          <div className="p-6 bg-gray-100 rounded-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-2">What is E-Waste?</h2>
            <p className="text-lg">
              E-waste refers to electronic products that have reached the end of their useful life
              and are discarded. This includes computers, smartphones, TVs, batteries, and other
              electronic devices.
            </p>
          </div>

          {/* Section 2: Impact of E-Waste */}
          <div className="p-6 bg-gray-100 rounded-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-2">Impact on Environment</h2>
            <p className="text-lg">
              Improper disposal of e-waste can lead to environmental pollution due to toxic
              substances like lead, mercury, and cadmium leaching into soil and water sources.
              Recycling and proper disposal are crucial to reduce environmental impact.
            </p>
          </div>

          {/* Section 3: Responsible E-Waste Management */}
          <div className="p-6 bg-gray-100 rounded-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-2">Responsible Disposal</h2>
            <p className="text-lg">
              Follow these tips for responsible e-waste management:
              <ul className="list-disc mt-2">
                <li className="text-left">Donate or sell usable electronics for reuse.</li>
                <li className="text-left">Recycle e-waste at certified recycling centers by using E-waste EcoFinder.</li>
                <li className="text-left">Avoid throwing electronics in regular trash or landfill.</li>
                <li className="text-left">Use E-waste EcoFinder disposal services.</li>
              </ul>
            </p>
          </div>

          {/* Section 4: Conclusion */}
          <div className="p-6 bg-gray-100 rounded-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold mb-2">Takeaway</h2>
            <p className="text-lg">
              E-waste poses serious environmental and health risks if not managed properly. By
              adopting responsible disposal practices, we can reduce pollution and conserve natural
              resources.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Ewaste;
