import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPhoneVibrate } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";

export default function OurTeam() {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6 mb-12">
      <div className=" rounded-lg shadow-lg overflow-hidden ">
        <div className="relative h-48 md:h-56 lg:h-64">
          <img src="IMG_20250102_173224_487.jpg" alt="Team Member" className="object-contain w-full h-48 mt-4 rounded-xl" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold capitalize">eugine obwaya</h3>
          <p className="text-muted-foreground uppercase">
            Chief Information officer
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            "Our outstanding Chief information Officer has masterfully aligned technology with our business vision, driving innovation, and setting the stage for a remarkable growth - truly a game changer for our organization"
          </p>
        </div>
        <div className="flex px-6 mb-4 gap-4 group:bg-green-50 items-center group-hover:bg-teal-700 ">
          <BsFacebook /> <BsTwitterX /> <BsInstagram /> <BsPhoneVibrate />
        </div>
      </div>
      <div className=" rounded-lg shadow-lg overflow-hidden ">
        <div className="relative h-48 md:h-56 lg:h-64">
          <img src="IMG_20230826_153815276.jpg" alt="Team Member" className="object-contain w-full h-48 mt-4 rounded-xl" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Leo Chrisben</h3>
          <p className="text-muted-foreground uppercase">
            software & web developer <br /> ui&ux designer{" "}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Chris is a talented designer and a skilled frontend developer eager
            to learn new technologies and enjoys collaborating with his team to
            deliver high-quality solutions
          </p>
        </div>
        <div className="flex px-6 mb-4 gap-4 group:bg-green-50 items-center group-hover:bg-teal-700 ">
          <BsFacebook /> <BsTwitterX /> <BsInstagram /> <BsPhoneVibrate />
        </div>
      </div>
      <div className=" rounded-lg shadow-lg overflow-hidden ">
        <div className="relative h-48 md:h-56 lg:h-64">
          <img src="IMG-20250325-WA0000.jpg" alt="Team Member" className="object-contain w-full h-48 mt-4 rounded-xl" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Ken Waweru</h3>
          <p className="text-muted-foreground uppercase">
            Director <br /> chairman ecovent
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            "I am incredibly proud of our team's dedictaion and innovation which continue to drive our company success and set us apart in the industry"
          </p>
        </div>
        <div className="flex px-6 mb-4 gap-4 group:bg-green-50 items-center group-hover:bg-teal-700 ">
          <BsFacebook /> <BsTwitterX /> <BsInstagram /> <BsPhoneVibrate />
        </div>
      </div>
      <div className=" rounded-lg shadow-lg overflow-hidden ">
        <div className="relative h-48 md:h-56 lg:h-64">
          <img src="" alt="Team Member" className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Daniel Magero</h3>
          <p className="text-muted-foreground uppercase">
            market & welfare analyst
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            As a Market and Welfare Analyst, I am thrilled to highlight our team's exceptional ability to uncover valuable insights that drive strategic market analysis and enhance our competitive edge!
          </p>
        </div>
        <div className="flex px-6 mb-4 gap-4 group:bg-green-50 items-center group-hover:bg-teal-700 ">
          <BsFacebook /> <BsTwitterX /> <BsInstagram /> <BsPhoneVibrate />
        </div>
      </div>
      <div className="rounded-lg shadow-lg overflow-hidden ">
        <div className="relative h-48 md:h-56 lg:h-64">
          <img src="" alt="Team Member" className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Alex Nyamweno</h3>
          <p className="text-muted-foreground uppercase">patron ecovent</p>
          <p className="mt-4 text-sm text-muted-foreground">
            As a proud patron of the company, I am thrilled to witness the tremendous strides our tema has made together, driving innovation and success of every market analysis we undertook!
          </p>
        </div>
        <div className="flex px-6 mb-4 gap-4 group:bg-green-50 items-center group-hover:bg-teal-700 ">
          <BsFacebook /> <BsTwitterX /> <BsInstagram /> <BsPhoneVibrate />
        </div>
      </div>
    </section>
  );
}
