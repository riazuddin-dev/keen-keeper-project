"use client";

import { CiTwitter } from "react-icons/ci";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-16">
      {/* TOP */}
      <div className="max-w-5xl mx-auto text-center py-12 border-b border-green-700">
        <h1 className="text-4xl font-bold mb-4">KeenKeeper</h1>

        <p className="text-gray-300 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h3 className="font-semibold mb-3">Social Links</h3>

        {/* ICONS */}
        <div className="flex justify-center gap-4">
          <div className=" text-2xl p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <FaYoutube />
          </div>

          <div className=" text-2xl p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <FaFacebook />
          </div>

          <div className=" text-2xl p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <CiTwitter />{" "}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 text-sm text-gray-300">
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">
            Terms of Service
          </span>
          <span className="cursor-pointer hover:underline">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
