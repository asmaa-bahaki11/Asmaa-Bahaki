import { useState } from "react";
import { Menu, X } from "lucide-react"; // For hamburger icons
import me from "./me.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const projects = [ 
    {
      title: "ShopBag online shop project with Next js and Tailwind css",
      desc: "Languages : Next js, Tailwind css",
      img: img1,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7391913287010897920/",
    },
    {
      title: "horses project with React js and Tailwind css",
      desc: "Languages : React js, Tailwind css",
      img: img2,
      link: "https://www.linkedin.com/posts/asmaa-bahaki-51269b252_horses-project-with-react-js-and-tailwind-activity-7309004772978622464-ZtfS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5kzh4BNOS5gOSWypbs7hyVG6vZsTTYJ0o",
    },
        {
      title: "Moroccan Caftan project with ReactJS, Css",
      desc: "Languages : React js, Css",
      img: img3,
      link: "https://www.linkedin.com/posts/asmaa-bahaki-51269b252_moroccan-caftan-using-reactjs-css-source-activity-7213930779687481345-xlbh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5kzh4BNOS5gOSWypbs7hyVG6vZsTTYJ0o",
    },
  ];


  return (
    <>
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[98%] md:w-[98%]  bg-[rgb(171,136,169)] backdrop-blur-xl shadow-xl rounded-3xl py-3 px-6 flex justify-between items-center text-white z-50">

      {/* Logo + Name */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br  from-[#efd5f0] to-[#754b77] flex items-center justify-center font-bold text-lg">
          AB
        </div>

        <div>
          <h2 className="font-semibold text-lg">Asmaa Bahaki</h2>
          <p className="text-sm opacity-80 -mt-1">Développeuse logiciel et sécurité des systèmes</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 font-medium text-sm">
        <a href="#À_propos" className="hover:text-purple-300 transition">À propos</a>
        <a href="#Expériences" className="hover:text-purple-300 transition">Expériences</a>
        <a href="#Compétences_techniques" className="hover:text-purple-300 transition">Compétences techniques</a>
        <a href="#Projets" className="hover:text-purple-300 transition">Projets</a>
        <a href="#Contact" className="hover:text-purple-300 transition">Contact</a>
      </nav>
    </header>
<button
  aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
  className="fixed top-7 right-4 z-50 md:hidden p-3 text-white focus:outline-none"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-29 left-1/2 -translate-x-1/2 w-[90%] h-[81%] bg-[rgb(255,255,255)] backdrop-blur-xl rounded-3xl shadow-xl flex flex-col items-center space-y-4 py-6 text-white md:hidden z-40">
          <a href="#À_propos" onClick={() => setIsOpen(false)} className="text-[#754b77] hover:bg-[#754b77] hover:text-white hover:w-[90%] hover:h-[11%] hover:p-4 rounded-3xl text-center mt-9 transition">À propos</a>
          <a href="#Expériences" onClick={() => setIsOpen(false)} className="text-[#754b77] hover:bg-[#754b77] hover:text-white hover:w-[90%] hover:h-[11%] hover:p-4 rounded-3xl text-center  mt-17 transition">Expériences</a>
          <a href="#Compétences_techniques" onClick={() => setIsOpen(false)} className="text-[#754b77] hover:bg-[#754b77] hover:text-white hover:w-[90%] hover:h-[11%] hover:p-4 rounded-3xl text-center  mt-17 transition">Compétences techniques</a>
          <a href="#Projets" onClick={() => setIsOpen(false)} className="text-[#754b77] hover:bg-[#754b77] hover:text-white hover:w-[90%] hover:h-[11%] hover:p-4 rounded-3xl text-center  mt-17 transition">Projets</a>
          <a href="#Contact" onClick={() => setIsOpen(false)} className="text-[#754b77] hover:bg-[#754b77] hover:text-white hover:w-[90%] hover:h-[11%] hover:p-4 rounded-3xl text-center  mt-17 transition">Contact</a>
        </div>
      )}
    <div className="min-h-screen w-full bg-gradient-to-br from-[#efd5f0] to-[#754b77] text-white flex justify-center items-center p-6">
      <div className="w-full max-w-6xl bg-[rgb(171,136,169)] backdrop-blur-xl rounded-3xl p-10 mt-15 shadow-2xl flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h3 className="text-lg mb-2 flex items-center gap-2">
            Bonjour <span>👋</span>
          </h3>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Je suis <span className="text-[rgb(105,62,102)]">Asmaa Bahaki</span>
          </h1>

          <p className="text-gray-300 max-w-xl leading-relaxed mb-8">
            Développeuse logiciel et sécurité des systèmes, spécialisé dans la création d'interfaces utilisateur professionnelles avec React.js et Tailwind CSS. J'ai également de l'expérience en Java et en sécurité applicative. Je travaille avec diverses technologies et privilégie la rapidité, la qualité et la sécurité dans chaque projet.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
             <a href="#Projets">            
              <button className="px-6 py-3 bg-white/10 hover:bg-[rgb(105,62,102)] rounded-xl font-medium transition">
              Voir mes projets
            </button>
            </a>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7409987084326785024/">
              <button className="px-6 py-3 bg-white/10 hover:bg-[rgb(105,62,102)] rounded-xl font-medium transition">
                Voir mon CV
              </button>
            </a>
           <a href="https://www.linkedin.com/in/asmaa-bahaki-51269b252/">
            <button className="px-6 py-3 bg-white/10 hover:bg-[rgb(105,62,102)] rounded-xl font-medium transition">
              Me contacter
            </button>
            </a>
          </div>
       </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={me}// replace with your image path
            alt="Profile"
            className="w-80 h-80 object-cover rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </div>
    
        <section id="À_propos">
    <div className="min-h-screen w-full bg-gradient-to-br from-[#efd5f0] to-[#754b77] text-white flex justify-center items-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* -------- À propos -------- */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-4 underline decoration-purple-400">
            À propos
          </h2>

          <p className="text-white leading-relaxed">
            Développeuse en sécurité logicielle et systèmes, je me spécialise dans la création d'interfaces utilisateur modernes et professionnelles avec React.js, Tailwind CSS, Java et d'autres langages. Je possède également une solide expérience en Java et en sécurité applicative. Passionné par les technologies web et les systèmes de sécurité, je privilégie la rapidité, la qualité et la sécurité dans chaque projet afin de concevoir des solutions performantes et fiables qui répondent aux besoins des utilisateurs.
          </p>

          {/* -------- Formation -------- */}
          <div className="mt-10 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-center text-xl font-semibold mb-10">Formation</h3>

            <div className="relative space-y-16 pl-8 border-l border-[#271223] /50">

              {/* Item 1 */}
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-purple-700 rounded-full" />
                <p className="text-sm text-gray-300">2024–2025 — ENSAM (Casablanca)</p>
                <p className="text-white mt-1">
                  Licence professionnelle développement logiciel et sécurité des systèmes
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-purple-700 rounded-full" />
                <p className="text-sm text-gray-300">2021–2024 — Lalla Aicha</p>
                <p className="text-white mt-1">
                  Technicien spécialisé en développement Full Stack
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-purple-700 rounded-full" />
                <p className="text-sm text-gray-300">2020–2021 — Lycée El Kindi</p>
                <p className="text-white mt-1">
                  Baccalauréat Sciences Physiques & Chimie.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* -------- Langues & Certifications -------- */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-fit">
          <h3 className="text-xl font-semibold mb-6">Langues</h3>

          <div className="flex flex-col gap-3">
            <span className="px-4 py-2 bg-purple-700/40 rounded-full w-fit">Arabe</span>
            <span className="px-4 py-2 bg-purple-700/40 rounded-full w-fit">Français</span>
            <span className="px-4 py-2 bg-purple-700/40 rounded-full w-fit">Anglais</span>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4">Certifications & cours</h3>
          <p className="text-gray-300">
            "Python" — sololearn <br />
            "ReactJs" — sololearn <br />    
            "Java" — sololearn <br />
            "NextJs" — sololearn <br />
            "Css" — sololearn <br />
            ...
          </p>
        </div>
      </div>
    </div>
      </section>


        <section id="Expériences">
    <div className="w-full min-h-screen bg-gradient-to-br from-[#efd5f0] to-[#754b77] text-white px-6 py-16 flex justify-center">
      <div className="max-w-6xl w-full space-y-16">

        {/* --- TITRE EXPERIENCE --- */}
        <h2 className="text-3xl font-bold border-b border-[#271223]  pb-2 w-fit">
          Expériences
        </h2>

        {/* --- CARTES D'EXPERIENCES --- */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* CARD 1 */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">
                Stagiaire Développeuse — FATFAT, Casablanca
              </h3> 
            </div>

            <p className="text-sm text-gray-300 mt-2">
               2023 — 2 mois
            </p>

            <div className="flex gap-2 mt-26 flex-wrap">
              {["Html", "Css", "Javascript"].map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-600/30 px-3 py-1 rounded-full text-sm border border-purple-500/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">
                Stagiaire Développeuse — Overseas Network
              </h3> 
            </div>

            <p className="text-sm text-gray-300 mt-2">
               2025 — 6 mois
            </p>

            <div className="flex gap=2 mt-26 flex-wrap">
              {["ReactJs", "TailwindCss"].map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-600/30 px-3 py-1 rounded-full text-sm border border-purple-500/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
 

        <section id="Compétences_techniques">
        <h2 className="text-3xl font-bold border-b border-[#271223]  pb-2 w-fit">
          Compétences techniques
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { title: "HTML & CSS" },
            { title: "JavaScript" },
            { title: "React Js" },
            { title: "Next Js" },
            { title: "PHP & Laravel" },
            { title: "Tailwind Css" },
            { title: "Python" },
            { title: "Node Js" },
            { title: "Java" },
            { title: "Sass" },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold">{skill.title}</h3>
            </div>
          ))}
        </div>
</section>
      </div>
    </div>

        </section>

        <section id="Projets">
        <div className="w-full px-6 py-16 flex justify-center text-white bg-gradient-to-b bg-[rgb(171,136,169)]">
      <div className="max-w-6xl w-full">
        
        {/* Titre */}
        <h2 className="text-3xl font-bold border-b border-[#271223]  pb-2 w-fit mb-10">
          Projets
        </h2>

        {/* CARTES */}
        
        <div className="grid md:grid-cols-3 gap-8 mt-10">
       {projects.map((p, i) => (
  <a
    key={i}
    href={p.link} // Add a "link" property in your projects array
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition overflow-hidden">
      <img
        src={p.img}
        alt={p.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-gray-300 text-sm mt-2">{p.desc}</p>
      </div>
    </div>
  </a>
))}

        </div>

      </div>
    </div>
          </section>

        <section id="Contact">
        <div className="w-full px-6 py-16 flex justify-center text-white bg-gradient-to-b bg-[rgb(171,136,169)]">
      <div className="max-w-6xl w-full">
        
        {/* Titre */}
        <h2 className="text-3xl font-bold border-b border-[#271223] pb-2 w-fit mb-10">
          Contact
        </h2>

        {/* CARTES */}
        
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <a href="https://github.com/asmaa-bahaki1">
<div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition overflow-hidden p-5 flex items-center gap-4">
<i className="fa-brands fa-github"></i>
      <h3 className="text-lg font-semibold">asmaa-bahaki1</h3>
</div>
</a>

<a href="https://www.linkedin.com/in/asmaa-bahaki-51269b252/">
<div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition overflow-hidden p-5 flex items-center gap-4">
<i className="fa-brands fa-linkedin"></i>
  <h3 className="text-lg font-semibold">Asmaa Bahaki</h3>
</div>
</a>

<a href="https://www.youtube.com/@as.bk.dev0">
<div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition overflow-hidden p-5 flex items-center gap-4">
<i className="fa-brands fa-youtube"></i>
  <h3 className="text-lg font-semibold">AS BK DEV</h3>
</div>
</a>

        </div>

      </div>
    </div>
          </section>
    </>
  );
}
