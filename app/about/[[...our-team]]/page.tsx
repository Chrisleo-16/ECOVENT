import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPhoneVibrate } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";

export default function OurTeam() {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6 mb-12"
      <div className=" rounded-lg shadow-lg overflow-hidden ">
        <div className="relative h-48 md:h-56 lg:h-64">
          <img src="IMG_20250102_173224_487.jpg" alt="Team Member" className="mt-4 object-contain w-full rounded-xl h-48" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold capitalize">eugine obwaya</h3>
          <p className="text-muted-foreground uppercase">
            Chief Information officer
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
           Our outstanding Chief Information Officer has masterfully aligned technology with our business vision, driving innovation, and setting the stage for a  remarkable growth—truly a game-changer for our organization!
          </p>
        </div>
        <div className="flex px-6 mb-4 gap-4 group:bg-green-50 items-center group-hover:bg-teal-700 ">
          <BsFacebook /> <BsTwitterX /> <BsInstagram /> <BsPhoneVibrate />
        </div>
      <div className=" rounded-lg shadow-lg overflow-hidden ">
        <div className="relative h-48 md:h-56 lg:h-64
          <img src="IMG_20230826_153815276.jpg" alt="Team Member" className="mt-4 object-contain w-full h-28 rounded-xl" />
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
          <img src="IMG-20250325-WA0000.jpg" alt="Team Member" className="mt-4 object-contain w-full h-48 rounded-xl" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Ken Waweru</h3>
          <p className="text-muted-foreground uppercase">
            Director <br /> chairman ecovent
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            "I’m incredibly proud of our team’s dedication and innovation, which continue to drive our company’s success and set us apart in the industry!"
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
            As a proud patron of this company, I am thrilled to witness the tremendous strides our team has made together, driving innovation and success in every market analysis we undertake!
          </p>
        </div>
        <div className="flex px-6 mb-4 gap-4 group:bg-green-50 items-center group-hover:bg-teal-700 ">
          <BsFacebook /> <BsTwitterX /> <BsInstagram /> <BsPhoneVibrate />
        </div>
      </div>
    </section>
  );
}
{
  /**return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 md:h-56 lg:h-64">
          <img src="/placeholder.svg" alt="Team Member" fill className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-muted-foreground">Lead Designer</p>
          <p className="mt-4 text-sm text-muted-foreground">
            John is a talented designer with over 10 years of experience creating beautiful and user-friendly
            interfaces. He's passionate about design and loves to stay up-to-date with the latest trends and
            technologies.
          </p>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 md:h-56 lg:h-64">
          <img src="/placeholder.svg" alt="Team Member" fill className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Jane Smith</h3>
          <p className="text-muted-foreground">Frontend Developer</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Jane is a skilled frontend developer with a passion for building responsive and accessible web applications.
            She's always eager to learn new technologies and enjoys collaborating with her team to deliver high-quality
            solutions.
          </p>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48 md:h-56 lg:h-64">
          <img src="/placeholder.svg" alt="Team Member" fill className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Michael Johnson</h3>
          <p className="text-muted-foreground">Backend Developer</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Michael is an experienced backend developer with a strong understanding of server-side technologies. He's
            known for his attention to detail and his ability to solve complex problems. He's always eager to share his
            knowledge with the team and mentor junior developers.
          </p>
        </div>
      </div>
    </section>
  ) */
}
