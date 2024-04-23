import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SmartphoneRecyclingForm = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [recycleItemPrice, setRecycleItemPrice] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedFacility, setSelectedFacility] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (
      selectedBrand &&
      selectedModel &&
      recycleItemPrice &&
      pickupDate &&
      pickupTime &&
      location &&
      phone &&
      selectedFacility
    ) {
      // Simulate form submission
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Form submitted successfully!");
        // Reset form fields
        setSelectedBrand("");
        setSelectedModel("");
        setRecycleItemPrice("");
        setPickupDate("");
        setPickupTime("");
        setLocation("");
        setPhone("");
        setSelectedFacility("");
      }, 2000); // Simulating a delay for submission
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <ToastContainer />
      <h1 className="text-4xl font-bold mb-6 text-center">Smartphone Recycling</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="brand" className="block font-semibold mb-1">
                Select Brand:
              </label>
              <select
                id="brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Brand</option>
                <option value="Samsung">Samsung</option>
                <option value="Apple">Apple</option>
                <option value="Mi">Mi</option>
                <option value="Motorola">Motorola</option>
                <option value="OnePlus">One Plus</option>
              </select>
            </div>

            <div>
              <label htmlFor="model" className="block font-semibold mb-1">
                Select Model:
              </label>
              <select
                id="model"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Model</option>
                {/* Add options for models based on selected brand */}
                {selectedBrand === "Samsung" && (
                  <>
                    <option value="Galaxy S21">Galaxy S21</option>
                    <option value="Galaxy S20">Galaxy S20</option>
                    {/* Add more models for Samsung */}
                  </>
                )}
                {selectedBrand === "Apple" && (
                  <>
                    <option value="Iphone15">Iphone 15</option>
                    <option value="Iphone14">Iphone 14</option>
                    {/* Add more models for Samsung */}
                  </>
                )}
                {selectedBrand === "Mi" && (
                  <>
                    <option value="Redmi12">Redmi Note 12</option>
                    <option value="Redmi11">Redmi Note 11</option>
                    {/* Add more models for Samsung */}
                  </>
                )}
                {selectedBrand === "Motorola" && (
                  <>
                    <option value="G42">Motorola G42</option>
                    <option value="G52">Motorola G52</option>
                    {/* Add more models for Samsung */}
                  </>
                )}
                {selectedBrand === "OnePlus" && (
                  <>
                    <option value="Nord3">Nord3</option>
                    <option value="Nord2">Nord2</option>
                    {/* Add more models for Samsung */}
                  </>
                )}
              </select>
            </div>

            <div>
              <label htmlFor="recycleItemPrice" className="block font-semibold mb-1">
                Recycle Item Price:
              </label>
              <input
                type="number"
                id="recycleItemPrice"
                value={recycleItemPrice}
                onChange={(e) => setRecycleItemPrice(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="pickupDate" className="block font-semibold mb-1">
                Pickup Date:
              </label>
              <input
                type="date"
                id="pickupDate"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </form>
        </div>

        {/* Right Column */}
        <div>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4">


            <div>
              <label htmlFor="pickupTime" className="block font-semibold mb-1">
                Pickup Time:
              </label>
              <input
                type="time"
                id="pickupTime"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="location" className="block font-semibold mb-1">
                Location:
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="facility" className="block font-semibold mb-1">
                Select Facility:
              </label>
              <select
                id="facility"
                value={selectedFacility}
                onChange={(e) => setSelectedFacility(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Facility</option>
                {/* Add options for different facilities */}
                <option value="Facility A">Facility A</option>
                <option value="Facility B">Facility B</option>
                {/* Add more facilities here */}
              </select>
            </div>
          </form>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          onClick={handleFormSubmit}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default SmartphoneRecyclingForm;
