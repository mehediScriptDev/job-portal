import logo from '../../public/job.jpeg';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div className="md:col-span-1">
          <div className='flex items-center gap-1.5'>
            <img className='w-20' src={logo} alt="logo" />
            <h2 className="text-2xl font-bold text-blue-600">JobPortal</h2>
          </div>
          <p className="text-gray-600 mt-3 text-sm">
            JobBox is the heart of the design community and the best resource to
            discover and connect with designers and jobs worldwide.
          </p>
          <div className="flex space-x-4 mt-4 text-blue-600">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>About us</li>
            <li>Our Team</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Feature</li>
            <li>Pricing</li>
            <li>Credit</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>iOS</li>
            <li>Android</li>
            <li>Microsoft</li>
            <li>Desktop</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-semibold mb-4">Download App</h3>
          <p className="text-gray-600 text-sm mb-4">
            Download our Apps and get extra 15% Discount on your first Order...!
          </p>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              <FaApple />
              <span>App Store</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              <FaGooglePlay />
              <span>Google Play</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>Copyright © 2022. JobPortal all right reserved</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Security</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
