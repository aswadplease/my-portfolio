"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function Home() {
  const [openForm, setOpenForm] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouse = (e: any) => {
    setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  };

  const projects = [
    { img: "/project1.png", title: "Agency Website" },
    { img: "/project2.png", title: "Vision Digitizers" },
    { img: "/project3.png", title: "Pak College" },
    { img: "/project4.png", title: "CrypRise" },
    { img: "/project5.png", title: "Kashmir Basar" },
    { img: "/project6.png", title: "Aussie Currency Exchange" },
    { img: "/project7.png", title: "CTS Logisolutions" },
    { img: "/project8.png", title: "Swastik Infra" },
  ];

  const clients = ["/client1.png","/client2.png","/client3.png","/client4.png","/client5.png","/client6.png","/client7.png"];

  const skills = [
    "Next.js","React","TypeScript","Tailwind","MongoDB",
    "Express","Framer Motion","GitHub","WordPress","Figma","Photoshop"
  ];

  return (
    <main
      onMouseMove={handleMouse}
      className="h-screen overflow-hidden bg-[#07070a] text-white flex items-center justify-center relative"
    >

      {/* BACKGROUND CINEMATIC LIGHT */}
      <motion.div
        animate={{
          x: mouse.x,
          y: mouse.y,
        }}
        transition={{ type: "spring", stiffness: 30 }}
        className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"
      />

      <div className="w-full max-w-350 h-screen grid grid-cols-5 gap-4 p-4 relative z-10">

        {/* PROFILE */}
        <div className="flex flex-col justify-top relative">

          {/* breathing aura */}
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -inset-10 bg-purple-500/30 blur-[120px]"
          />

          <Image src="/profile.png" alt="" width={220} height={220} className="relative z-10"/>

          {/* NAME */}
          <div className="-mt-2 relative z-10">
            <h1 className=" font-bold leading-none tracking-[8px]">
              <span className="text-6xl block text-right ">ASWAD</span>
              <br />
              <span className="text-4xl text-right text-gray-400 -mt-6 pr-2 block tracking-[4px]">RAZZAK</span>

              <span className="absolute inset-0 blur-3xl opacity-20 text-purple-500">
                ASWAD RAZZAK
              </span>
            </h1>

            <p className="text-m uppercase text-right block tracking-widest pr-2 text-gray-400">
              Fullstack Developer
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-4 flex flex-col gap-5">

          {/* TOP */}
          <div className="grid grid-cols-3 gap-5">

            <motion.div
              whileHover={{ y: -3 }}
              className="col-span-2 bg-white/4 border border-white/10 rounded-xl p-4 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              <h2 className="text-xl uppercase tracking-widest text-gray-400">
                Building Modern Web Experiences
              </h2>

              <p className="text-sm mt-2 text-gray-300">
                Fast, scalable and visually clean web apps that deliver results.
              </p>

              <p className="text-m mt-2 text-gray-500">
                5+ Years • 50+ Projects • Futuristic Approach
              </p>
            </motion.div>

            {/* BUTTONS */}
            <div className="flex items-center gap-3">

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/resume.pdf"
                download
                className="flex-1 text-center bg-white text-black text-m py-2 rounded-lg"
              >
                Download CV
              </motion.a>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="w-8 h-8 bg-purple-500/30 blur-md rounded-full"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setOpenForm(true)}
                className="flex-1 border border-white/20 text-m py-2 rounded-lg"
              >
                Hire Me
              </motion.button>

            </div>
          </div>

          {/* PROJECTS */}
          <div className="flex-1 max-h-max p-4 bg-white/4 border border-white/10 rounded-xl p-4 overflow-hidden">

            <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Projects
            </h2>

            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex gap-4"
            >
              {[...projects, ...projects].map((p, i) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  key={i}
                  className="min-w-[300px] h-[240px] relative overflow-hidden rounded-lg group"
                >
                  <Image
                    src={p.img}
                    alt=""
                    fill
                    className="object-cover object-top group-hover:translate-y-[-100%] transition duration-[5000ms]"
                  />

                  <div className="absolute bottom-0 w-full bg-black/60 p-2 text-xs">
                    {p.title}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* BOTTOM */}
          <div className="grid grid-cols-3 gap-5">

           {/* CONTACT */}
<div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 space-y-2">

  <h3 className="text-xs uppercase tracking-widest text-gray-400">Contact</h3>

  <a href="tel:+923172642089" className="flex gap-2 text-gray-400 hover:text-white">
    <Phone size={14}/> Call | 0317-2642089
  </a>

  <a href="https://wa.me/923172642089" target="_blank" className="flex gap-2 text-gray-400 hover:text-white">
    📱 WhatsApp | +92-317-2642089
  </a>

  <a href="mailto:aswadplease@gmail.com" className="flex gap-2 text-gray-400 hover:text-white">
    <Mail size={14}/> Email | aswadplease@gmail.com
  </a>

</div>

            {/* CLIENTS */}
            <div className="bg-white/[0.04] max-h-max border border-white/10 rounded-xl p-4 overflow-hidden">
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Clients</h3>

              <motion.div
                animate={{ x: ["0%", "50%"] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="flex gap-4"
              >
                {[...clients, ...clients].map((c, i) => (
                  <div key={i} className="w-16 h-16 relative flex-shrink-0">
                    <Image src={c} alt="" fill className="object-contain opacity-70"/>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* SKILLS */}
            <div className="bg-white/[0.04] max-h-max border border-white/10 rounded-xl p-4">
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Skills</h3>

              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <div key={i} className="text-[10px] border border-white/10 px-2 py-1 rounded hover:border-white/30">
                    {s}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#111] p-6 rounded-xl w-[90%] max-w-md"
            >
              <h2 className="mb-3">Start Project</h2>

              <input placeholder="Name" className="w-full mb-2 p-2 bg-black border border-white/10"/>
              <input placeholder="Email" className="w-full mb-2 p-2 bg-black border border-white/10"/>
              <textarea placeholder="Project Details" className="w-full mb-2 p-2 bg-black border border-white/10"/>

              <button className="bg-white text-black w-full py-2">Send</button>

              <button onClick={()=>setOpenForm(false)} className="text-xs mt-2 text-gray-400">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}