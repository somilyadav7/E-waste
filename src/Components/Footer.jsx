
const Footer = () => {
  return (
    <footer className="bg-blue-50 text-black py-8 mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Footer Top Section */}
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          {/* ELocate Description */}
          <div className="mb-4 lg:w-1/3">
            <h3 className="text-lg font-bold mb-2">E-Waste EcoFinder: Transforming E-Waste Management</h3>
            <p className="text-sm">
              Find E-waste facilities effortlessly with our platform. Your key to responsible recycling and sustainability.
            </p>
          </div>

          {/* Services */}
          <div className="lg:w-1/3">
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="text-sm">
              <li>Smartphone Recycle</li>
              <li>Laptop Recycle</li>
              <li>Accessories Recycle</li>
              <li>Television Recycle</li>
              <li>Refrigerator Recycle</li>
              <li>Other Electronic Accessories</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/3">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p><i className="fa-solid fa-location-dot"></i> KLE Technological University</p>
            <p>Hubballi, Karnataka, 580031</p>
            <p><i className="fa-solid fa-phone"></i> +911234567890</p>
            <p><i className="fa-solid fa-envelope"></i> contact@ewaste-eco.com</p>
            <div className="p-2">
              <i className="fa-brands fa-instagram p-2"></i>
              <i className="fa-brands fa-x-twitter p-2"></i>
              <i className="fa-brands fa-facebook p-2"></i>
              <i className="fa-brands fa-linkedin p-2"></i>
            </div>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="flex justify-between items-center border-t border-gray-600 pt-4">
          {/* Copyright */}
          <p className="text-sm">&copy; 2024 E-Waste EcoFinder | All Rights Reserved</p>

          {/* Legal Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
