import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBars, FaTimes, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChild, FaPalette, FaFlask,
  FaTree, FaMusic, FaHeart, FaStar, FaArrowRight, FaCheckCircle,
  FaSmile, FaUsers, FaAward, FaBookOpen, FaCalendarAlt, FaQuoteLeft,
  FaPlus, FaMinus, FaCamera, FaPhone, FaVideo, FaPlay,
  FaChalkboardTeacher, FaUserGraduate, FaSchool,
} from "react-icons/fa";

/* ✅ LOGO */
import logoImg from "./assets/logo.png";

/* ✅ 25 LOCAL GALLERY IMAGES */
import g1 from "./assets/gallery/1.jpeg";
import g2 from "./assets/gallery/2.jpeg";
import g3 from "./assets/gallery/3.jpeg";
import g4 from "./assets/gallery/4.jpeg";
import g5 from "./assets/gallery/5.jpeg";
import g6 from "./assets/gallery/6.jpeg";
import g7 from "./assets/gallery/7.jpeg";
import g8 from "./assets/gallery/8.jpeg";
import g9 from "./assets/gallery/9.jpeg";
import g10 from "./assets/gallery/10.jpeg";
import g11 from "./assets/gallery/11.jpeg";
import g12 from "./assets/gallery/12.jpeg";
import g13 from "./assets/gallery/13.jpeg";
import g14 from "./assets/gallery/14.jpeg";
import g15 from "./assets/gallery/15.jpeg";
import g16 from "./assets/gallery/16.jpeg";
import g17 from "./assets/gallery/17.jpeg";
import g18 from "./assets/gallery/18.jpeg";
import g19 from "./assets/gallery/19.jpeg";
import g20 from "./assets/gallery/20.jpeg";
import g21 from "./assets/gallery/21.jpeg";
import g22 from "./assets/gallery/22.jpeg";
import g23 from "./assets/gallery/23.jpeg";
import g24 from "./assets/gallery/24.jpeg";
import g25 from "./assets/gallery/25.jpeg";

const GALLERY_LOCAL = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
  g21, g22, g23, g24, g25,
];

/* ============================================================
   🔗 CONFIG
   ============================================================ */
const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61567749717856",
  instagram: "https://www.instagram.com/pathwayspreschool/",
  youtube: "https://www.youtube.com/@pathwayspreschool",
  whatsapp: "919999999999",
  phone: "+919999999999",
  phoneDisplay: "+91 99999 99999",
  email: "info@pathwayspreschool.com",
  address: "Pathways Preschool & Daycare, Your City, India",
};

const IMG = {
  programPlay: "https://images.unsplash.com/photo-1567057419565-4349c49d8a56?w=800&q=80",
  programNursery: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80",
  programJunior: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  programSenior: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=80",
  blog1: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
  blog2: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
  blog3: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=800&q=80",
  teacher1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  teacher2: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  teacher3: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  teacher4: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
};

/* ============================================================
   🎥 VIMEO VIDEOS
   ============================================================ */
const VIDEOS = [
  {
    id: "1234439892",
    title: "A Day at Pathways",
    desc: "Step inside our vibrant classrooms and see learning come alive.",
    embed: "https://player.vimeo.com/video/1234439892?title=0&byline=0&portrait=0",
    color: "from-[#4A3B8C] to-[#29ABE2]",
  },
  {
    id: "1234440179",
    title: "Learning Through Play",
    desc: "How hands-on activities spark curiosity and build confidence.",
    embed: "https://player.vimeo.com/video/1234440179?title=0&byline=0&portrait=0",
    color: "from-[#F7941E] to-[#E63946]",
  },
  {
    id: "1234440263",
    title: "Our Happy Families",
    desc: "Parents share why Pathways feels like a second home.",
    embed: "https://player.vimeo.com/video/1234440263?title=0&byline=0&portrait=0",
    color: "from-[#39B54A] to-[#29ABE2]",
  },
];

/* ============================================================
   🎬 GLOBAL ANIMATIONS
   ============================================================ */
function GlobalStyles() {
  return (
    <style>{`
      @keyframes marqueeScroll {
        0%   { transform: translate3d(0, 0, 0); }
        100% { transform: translate3d(-50%, 0, 0); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50%      { transform: translateY(-18px); }
      }
      @keyframes floatSlow {
        0%, 100% { transform: translate(0,0) scale(1); }
        50%      { transform: translate(15px,-20px) scale(1.05); }
      }
      @keyframes blob {
        0%, 100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
        50%      { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      }
      @keyframes wiggle {
        0%, 100% { transform: rotate(0deg); }
        25%      { transform: rotate(-8deg); }
        75%      { transform: rotate(8deg); }
      }
      @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(247,148,30,0.7); }
        50%      { box-shadow: 0 0 0 18px rgba(247,148,30,0); }
      }
      @keyframes pulseGlowGreen {
        0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.7); }
        50%      { box-shadow: 0 0 0 18px rgba(37,211,102,0); }
      }
      @keyframes pulseGlowBlue {
        0%, 100% { box-shadow: 0 0 0 0 rgba(41,171,226,0.7); }
        50%      { box-shadow: 0 0 0 18px rgba(41,171,226,0); }
      }
      @keyframes ring {
        0%, 100% { transform: rotate(0deg); }
        10%      { transform: rotate(-15deg); }
        20%      { transform: rotate(15deg); }
        30%      { transform: rotate(-15deg); }
        40%      { transform: rotate(15deg); }
        50%      { transform: rotate(0deg); }
      }

      .marquee-track {
        display: flex;
        width: max-content;
        animation: marqueeScroll 40s linear infinite;
        will-change: transform;
      }
      .marquee-track:hover { animation-play-state: paused; }
      .marquee-item { flex-shrink: 0; padding: 0 1.5rem; }

      .anim-float      { animation: float 6s ease-in-out infinite; }
      .anim-float-slow { animation: floatSlow 9s ease-in-out infinite; }
      .anim-blob       { animation: blob 10s ease-in-out infinite; }
      .anim-wiggle     { animation: wiggle 1.2s ease-in-out infinite; }
      .anim-pulse-glow { animation: pulseGlow 2.2s ease-out infinite; }
      .anim-pulse-glow-green { animation: pulseGlowGreen 2.2s ease-out infinite; }
      .anim-pulse-glow-blue  { animation: pulseGlowBlue 2.2s ease-out infinite; }
      .anim-ring       { animation: ring 2s ease-in-out infinite; }
    `}</style>
  );
}

/* ============================================================
   🎬 REVEAL ON SCROLL
   ============================================================ */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "", direction = "up" }) {
  const [ref, visible] = useReveal();
  const dirClass = {
    up: "translate-y-10", left: "-translate-x-10",
    right: "translate-x-10", zoom: "scale-90",
  }[direction];

  return (
    <div ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : `opacity-0 ${dirClass}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ============================================================
   🔢 COUNTER
   ============================================================ */
function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ============================================================
   🧭 SCROLL TO TOP
   ============================================================ */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);
  return null;
}

/* ============================================================
   🟠 MARQUEE
   ============================================================ */
function WelcomeMarquee() {
  const items = [
    "🎉 Admissions Open 2025-26",
    "🎨 Play-Based Learning",
    "🌈 Playgroup | Nursery | Junior KG | Senior KG",
    "📞 Enroll Today — Limited Seats!",
    "⭐ Learners Today, Leaders Tomorrow",
    "🏫 Now Enrolling for Daycare",
    "🎓 Visit Us for a Free Campus Tour",
    "📱 Follow Us on Facebook & Instagram",
  ];
  return (
    <div className="bg-gradient-to-r from-[#F7941E] via-[#E63946] to-[#F7941E] text-white py-2.5 overflow-hidden relative">
      <div className="marquee-track">
        {[0, 1].map((g) => (
          <div key={g} className="flex">
            {items.map((t, i) => (
              <span key={`${g}-${i}`} className="marquee-item font-semibold text-sm md:text-base">{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   🖼️ LOGO
   ============================================================ */
function Logo({ size = "md" }) {
  const h = size === "lg" ? "h-20" : "h-14 md:h-16";
  return <img src={logoImg} alt="Pathways Preschool" className={`${h} w-auto object-contain`} />;
}

/* ============================================================
   🟣 NAVBAR
   ============================================================ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/admissions", label: "Admissions" },
    { to: "/videos", label: "Videos" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blog", label: "Blog" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur"}`}>
      <WelcomeMarquee />
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="group-hover:scale-105 transition-transform duration-300"><Logo /></div>
          <div className="hidden xl:block border-l-2 border-[#F7941E] pl-3">
            <p className="font-extrabold text-lg text-[#4A3B8C] leading-tight">Pathways</p>
            <p className="text-[9px] tracking-widest text-[#F7941E] font-semibold">PRESCHOOL & DAYCARE</p>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) =>
                `px-2.5 py-2 rounded-full font-semibold transition text-xs xl:text-sm ${
                  isActive ? "bg-[#4A3B8C] text-white shadow" : "text-[#4A3B8C] hover:bg-[#4A3B8C]/10"
                }`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/admissions"
            className="ml-1 inline-flex items-center gap-1.5 bg-[#F7941E] hover:bg-orange-600 text-white font-semibold px-3 py-2 rounded-full shadow-lg hover:shadow-xl transition text-xs xl:text-sm anim-pulse-glow">
            Enroll <FaArrowRight size={12} />
          </Link>
        </nav>
        <button className="lg:hidden text-[#4A3B8C] text-2xl" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 gap-2">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-2xl font-semibold ${
                    isActive ? "bg-[#4A3B8C] text-white" : "text-[#4A3B8C] hover:bg-[#4A3B8C]/10"
                  }`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#F7941E] text-white font-semibold px-5 py-3 rounded-full shadow-lg">
              Admission Open <FaArrowRight />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ============================================================
   📞 CALL + 💬 WHATSAPP FLOATING
   ============================================================ */
function FloatingButtons() {
  const waMsg = encodeURIComponent("Hi Pathways Preschool! I'd like to know more about admissions.");
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <a href={`tel:${SOCIAL.phone}`} aria-label="Call Now"
        className="group relative bg-[#29ABE2] hover:bg-[#1e8fc2] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 anim-pulse-glow-blue">
        <FaPhone size={22} className="anim-ring" />
        <span className="absolute right-full mr-3 bg-[#4A3B8C] text-white text-xs font-semibold px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Call Us Now</span>
      </a>
      <a href={`https://wa.me/${SOCIAL.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="group relative bg-[#25D366] hover:bg-[#20ba5a] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 anim-pulse-glow-green">
        <FaWhatsapp size={34} />
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
        <span className="absolute right-full mr-3 bg-[#4A3B8C] text-white text-xs font-semibold px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat on WhatsApp</span>
      </a>
    </div>
  );
}

/* ============================================================
   🦶 FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="bg-[#4A3B8C] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="bg-white rounded-2xl p-3 inline-block mb-4"><Logo /></div>
          <p className="text-sm text-white/80 leading-relaxed">
            Learners Today, Leaders Tomorrow. A warm, nurturing space where young minds bloom through play-based learning.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#29ABE2] hover:scale-110 flex items-center justify-center transition"><FaFacebookF /></a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 hover:scale-110 flex items-center justify-center transition"><FaInstagram /></a>
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 hover:scale-110 flex items-center justify-center transition"><FaYoutube /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4 text-[#FFD93D]">Quick Links</h4>
          <ul className="space-y-2 text-white/85 text-sm">
            <li><Link to="/" className="hover:text-[#FFD93D]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#FFD93D]">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-[#FFD93D]">Programs</Link></li>
            <li><Link to="/admissions" className="hover:text-[#FFD93D]">Admissions</Link></li>
            <li><Link to="/videos" className="hover:text-[#FFD93D]">Videos</Link></li>
            <li><Link to="/gallery" className="hover:text-[#FFD93D]">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-[#FFD93D]">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-[#FFD93D]">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-[#FFD93D]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4 text-[#FFD93D]">Our Programs</h4>
          <ul className="space-y-2 text-white/85 text-sm">
            <li>Playgroup (1.5 – 2.5 yrs)</li>
            <li>Nursery (2.5 – 3.5 yrs)</li>
            <li>Junior KG (3.5 – 4.5 yrs)</li>
            <li>Senior KG (4.5 – 5.5 yrs)</li>
            <li>Daycare</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4 text-[#FFD93D]">Reach Us</h4>
          <ul className="space-y-3 text-white/85 text-sm">
            <li className="flex gap-3"><FaMapMarkerAlt className="mt-1 text-[#FFD93D]" /><span>{SOCIAL.address}</span></li>
            <li className="flex gap-3"><FaPhoneAlt className="mt-1 text-[#FFD93D]" /><a href={`tel:${SOCIAL.phone}`}>{SOCIAL.phoneDisplay}</a></li>
            <li className="flex gap-3"><FaEnvelope className="mt-1 text-[#FFD93D]" /><a href={`mailto:${SOCIAL.email}`}>{SOCIAL.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Pathways Preschool & Daycare. All rights reserved. | Made with <FaHeart className="inline text-[#E63946] anim-wiggle" /> for little learners.
      </div>
    </footer>
  );
}

/* ============================================================
   🎨 PAGE HERO
   ============================================================ */
function PageHero({ title, subtitle, color }) {
  return (
    <section className={`bg-gradient-to-r ${color} text-white py-20 text-center relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-0 right-10 w-40 h-40 bg-white rounded-full blur-3xl anim-float"></div>
        <div className="absolute bottom-0 left-10 w-52 h-52 bg-[#FFD93D] rounded-full blur-3xl anim-float-slow"></div>
      </div>
      <Reveal className="relative max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-3">{title}</h1>
        <p className="text-lg md:text-xl text-white/90">{subtitle}</p>
      </Reveal>
    </section>
  );
}

/* ============================================================
   🎯 BANNER
   ============================================================ */
function Banner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <img src={GALLERY_LOCAL[4]} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A3B8C]/90 to-[#29ABE2]/70"></div>
      <Reveal className="relative max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Where Curiosity Meets Creativity</h2>
        <p className="text-lg text-white/90 mb-8">A happy, safe and stimulating environment where every child's potential is nurtured with love and care.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/programs" className="inline-flex items-center gap-2 bg-[#FFD93D] text-[#4A3B8C] font-bold px-8 py-3.5 rounded-full shadow-xl hover:scale-105 transition">
            Explore Programs <FaArrowRight />
          </Link>
          <a href={`tel:${SOCIAL.phone}`} className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border-2 border-white text-white hover:bg-white hover:text-[#4A3B8C] font-bold px-8 py-3.5 rounded-full shadow-xl transition">
            <FaPhone /> Call Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ============================================================
   ✅ ABOUT SECTION
   ============================================================ */
function AboutSection() {
  return (
    <section className="py-20 bg-[#FFF8F0] relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#F7941E]/10 anim-blob"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#39B54A]/10 anim-blob"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#4A3B8C]/10 text-[#4A3B8C] font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
            🌟 About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] mb-4">
            Welcome to Pathways Preschool & Daycare
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A warm, welcoming space where young minds bloom through play, curiosity, and love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="relative">
              <img src={GALLERY_LOCAL[6]} alt="About Pathways"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover" />
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-3xl shadow-2xl p-5 flex items-center gap-4 max-w-[220px] anim-float">
                <div className="bg-gradient-to-br from-[#F7941E] to-[#E63946] text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                  <FaAward />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-[#4A3B8C]">12+</p>
                  <p className="text-xs text-gray-600 font-semibold leading-tight">Years of Excellence</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#4A3B8C] mb-5 leading-tight">
              A Second Home Where <br />
              <span className="bg-gradient-to-r from-[#F7941E] to-[#E63946] bg-clip-text text-transparent">
                Little Minds Bloom
              </span>
            </h3>
            <p className="text-gray-700 leading-relaxed mb-5">
              <strong>Pathways Preschool & Daycare</strong> was founded with the vision of a warm, welcoming, and enriching environment where young minds can thrive. We are dedicated to fostering the intellectual, emotional, and social development of children aged 1.5 to 5.5 years.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              With a team of passionate, experienced educators, we create a safe and supportive space that feels like a second home — where learning happens through play, curiosity, and love.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: <FaHeart />, color: "bg-[#E63946]", text: "Nurturing Environment" },
                { icon: <FaChalkboardTeacher />, color: "bg-[#4A3B8C]", text: "Expert Educators" },
                { icon: <FaChild />, color: "bg-[#F7941E]", text: "Play-Based Learning" },
                { icon: <FaCheckCircle />, color: "bg-[#39B54A]", text: "Holistic Development" },
              ].map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`${h.color} text-white w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow`}>
                    {h.icon}
                  </div>
                  <span className="text-gray-800 font-semibold text-sm">{h.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/about"
                className="inline-flex items-center gap-2 bg-[#4A3B8C] hover:bg-purple-900 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:-translate-y-1 transition anim-pulse-glow">
                Learn More About Us <FaArrowRight />
              </Link>
              <a href={`tel:${SOCIAL.phone}`}
                className="inline-flex items-center gap-2 border-2 border-[#4A3B8C] text-[#4A3B8C] hover:bg-[#4A3B8C] hover:text-white font-bold px-6 py-3 rounded-full transition">
                <FaPhone /> Call Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   👩‍🏫 TEACHERS
   ============================================================ */
function Teachers() {
  const team = [
    { name: "Ms. Kavita Rao", role: "Principal", exp: "15+ years", img: IMG.teacher1, color: "from-[#4A3B8C] to-[#6C5CE7]", badge: "bg-[#4A3B8C]", icon: <FaSchool /> },
    { name: "Ms. Anjali Mehta", role: "Head of Nursery", exp: "10+ years", img: IMG.teacher2, color: "from-[#F7941E] to-[#FFD93D]", badge: "bg-[#F7941E]", icon: <FaChalkboardTeacher /> },
    { name: "Ms. Riya Kapoor", role: "Playgroup Lead", exp: "8+ years", img: IMG.teacher3, color: "from-[#39B54A] to-lime-400", badge: "bg-[#39B54A]", icon: <FaChild /> },
    { name: "Ms. Neha Singh", role: "Junior KG Lead", exp: "9+ years", img: IMG.teacher4, color: "from-[#E63946] to-pink-400", badge: "bg-[#E63946]", icon: <FaUserGraduate /> },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-[#4A3B8C]/10 text-[#4A3B8C] font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
              <FaChalkboardTeacher /> Meet Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] mb-4">Caring Educators</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Passionate, qualified and warm — the heart of Pathways.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <Reveal key={i} delay={i * 120} direction="zoom">
              <div className={`bg-gradient-to-br ${t.color} text-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all h-full group relative overflow-hidden`}>
                <div className="absolute -top-4 -right-4 text-7xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {t.icon}
                </div>
                <div className="relative mb-5 flex justify-center">
                  <img src={t.img} alt={t.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white/40 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                  <span className={`absolute bottom-0 right-1/2 translate-x-12 ${t.badge} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg border-2 border-white`}>
                    {t.exp}
                  </span>
                </div>
                <div className="text-3xl mb-3 group-hover:scale-125 group-hover:rotate-6 transition-transform inline-block">
                  {t.icon}
                </div>
                <h3 className="font-bold text-xl mb-1 relative">{t.name}</h3>
                <p className="text-sm text-white/90 font-medium mb-4 relative">{t.role}</p>
                <div className="flex items-center gap-2 text-xs bg-white/15 backdrop-blur rounded-full px-3 py-1.5 w-fit">
                  <FaStar className="text-[#FFD93D]" /> Expert Educator
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   📚 PROGRAMS DATA
   ============================================================ */
const PROGRAMS_DATA = [
  { age: "1.5 – 2.5 years", name: "Playgroup", tagline: "Nurturing Curiosity & Social Skills", img: IMG.programPlay, color: "bg-[#4A3B8C]", points: ["Social interaction and sharing", "Sensory play and motor skill development", "Early language and communication skills", "Emotional development and independence"] },
  { age: "2.5 – 3.5 years", name: "Nursery", tagline: "Building Foundations for Learning", img: IMG.programNursery, color: "bg-[#29ABE2]", points: ["Introduction to early literacy and numeracy", "Fine and gross motor skills enhancement", "Social interaction and group play", "Creative expression through arts and crafts"] },
  { age: "3.5 – 4.5 years", name: "Junior KG", tagline: "Laying Groundwork for Structured Learning", img: IMG.programJunior, color: "bg-[#F7941E]", points: ["Early literacy: letters, phonics, basic reading", "Numeracy: counting, sorting, patterns", "Storytelling, drawing, and role-play", "Teamwork and problem-solving"] },
  { age: "4.5 – 5.5 years", name: "Senior KG", tagline: "Ready for the Next Big Step", img: IMG.programSenior, color: "bg-[#39B54A]", points: ["Reading & writing readiness", "Basic addition, subtraction, problem-solving", "Science explorations and creative thinking", "Cooperation, leadership, responsibility"] },
];

/* ============================================================
   📞 CONTACT FORM
   ============================================================ */
function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", child: "", program: "Playgroup", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Pathways! I'd like to enquire.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AChild's Age: ${form.child}%0AProgram: ${form.program}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${SOCIAL.whatsapp}?text=${text}`, "_blank");
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-6 space-y-4">
      <h2 className="text-3xl font-extrabold text-[#4A3B8C] mb-2">Enquiry Form</h2>
      {[
        { key: "name", label: "Parent's Name", type: "text" },
        { key: "phone", label: "Phone Number", type: "tel" },
        { key: "child", label: "Child's Age", type: "text" },
      ].map((f) => (
        <div key={f.key}>
          <label className="block text-sm font-semibold text-[#4A3B8C] mb-1">{f.label}</label>
          <input required type={f.type} value={form[f.key]}
            onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#F7941E] outline-none transition" />
        </div>
      ))}
      <div>
        <label className="block text-sm font-semibold text-[#4A3B8C] mb-1">Program Interested In</label>
        <select value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })}
          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#F7941E] outline-none transition">
          {["Playgroup", "Nursery", "Junior KG", "Senior KG", "Daycare"].map((p) => <option key={p}>{p}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#4A3B8C] mb-1">Message</label>
        <textarea rows="3" value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#F7941E] outline-none transition"></textarea>
      </div>
      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[#F7941E] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
        Send via WhatsApp <FaWhatsapp />
      </button>
    </form>
  );
}

/* ============================================================
   ❓ FAQ SECTION
   ============================================================ */
function FAQSection() {
  const faqs = [
    { q: "What is the age criteria for admission?", a: "We accept children from 1.5 years to 5.5 years across Playgroup, Nursery, Junior KG, and Senior KG. Daycare is available for working parents." },
    { q: "What is your teaching approach?", a: "We follow an activity-based, play-centered learning philosophy. Children learn by doing — through hands-on activities, exploration, and guided play." },
    { q: "What are the school timings?", a: "Preschool: 9:00 AM – 12:30 PM. Daycare: 8:00 AM – 6:00 PM. Flexible options available." },
    { q: "How do you ensure my child's safety?", a: "CCTV surveillance, secure entry, trained staff, and strict hygiene protocols ensure a completely safe environment for every child." },
    { q: "What documents are required for admission?", a: "Birth certificate, vaccination record, Aadhaar copy, and 4 passport-size photographs of the child." },
    { q: "Do you provide meals?", a: "Yes! We provide nutritious, freshly prepared snacks and meals in our Daycare program. Special dietary needs can be accommodated." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block bg-[#29ABE2]/15 text-[#29ABE2] font-semibold px-4 py-1.5 rounded-full text-sm mb-4">❓ FAQ</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything parents want to know before enrolling their little one.</p>
          </div>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="bg-[#FFF8F0] rounded-3xl shadow hover:shadow-lg transition overflow-hidden">
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-bold text-lg text-[#4A3B8C] pr-4">{f.q}</span>
                  <span className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${open === i ? "bg-[#F7941E] text-white rotate-180" : "bg-[#4A3B8C]/10 text-[#4A3B8C]"}`}>
                    {open === i ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-5 pb-5 text-gray-700 leading-relaxed">{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   💬 TESTIMONIALS
   ============================================================ */
function Testimonials() {
  const reviews = [
    { name: "Priya Sharma", role: "Mother of Aarav (Nursery)", text: "Pathways has been a blessing! Aarav used to be shy, but now he's confident, social and always excited to go to school. The teachers genuinely care.", img: IMG.teacher2, color: "bg-[#4A3B8C]" },
    { name: "Rahul Verma", role: "Father of Anaya (Junior KG)", text: "The play-based approach is fantastic. My daughter learns math and reading without even realizing it — she thinks it's all play! Truly amazing.", img: IMG.teacher1, color: "bg-[#F7941E]" },
    { name: "Sneha Patel", role: "Mother of Vivaan (Playgroup)", text: "Safe, warm and nurturing. The staff treats every child like family. As a working mom, the daycare facility has been a lifesaver.", img: IMG.teacher3, color: "bg-[#39B54A]" },
  ];
  return (
    <section className="py-20 bg-[#FFF8F0] relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#F7941E]/10 anim-blob"></div>
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#29ABE2]/10 anim-blob"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block bg-[#F7941E]/15 text-[#F7941E] font-semibold px-4 py-1.5 rounded-full text-sm mb-4">⭐ Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] mb-4">What Parents Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real stories from real families who trust Pathways.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all p-7 h-full flex flex-col hover:-translate-y-2 relative">
                <FaQuoteLeft className={`text-4xl ${r.color} opacity-20 mb-4`} />
                <p className="text-gray-700 italic leading-relaxed mb-6 flex-1">"{r.text}"</p>
                <div className="flex items-center gap-4 border-t pt-5">
                  <img src={r.img} alt={r.name} className="w-14 h-14 rounded-full object-cover border-4 border-[#FFD93D]" />
                  <div>
                    <p className="font-bold text-[#4A3B8C]">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.role}</p>
                    <div className="flex gap-1 text-[#FFD93D] text-xs mt-1">{[...Array(5)].map((_, j) => <FaStar key={j} />)}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   🎥 VIDEO SECTION
   ============================================================ */
function VideoSection({ compact = false }) {
  const list = compact ? VIDEOS.slice(0, 3) : VIDEOS;
  return (
    <section className="py-20 bg-white" id="videos">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-[#E63946]/10 text-[#E63946] font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
              <FaVideo /> Our Videos
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] mb-4">Watch Pathways in Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real moments from our classrooms — learning, laughter and lots of love.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((v, i) => (
            <Reveal key={v.id} delay={i * 150} direction="zoom">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 h-full flex flex-col group">
                <div className="relative aspect-video overflow-hidden bg-black">
                  <iframe
                    src={v.embed}
                    title={v.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className={`inline-flex items-center gap-2 ${v.color} bg-gradient-to-r text-white text-xs font-bold px-3 py-1.5 rounded-full self-start mb-3`}>
                    <FaPlay size={10} /> Video {i + 1}
                  </div>
                  <h3 className="font-bold text-xl text-[#4A3B8C] mb-2 leading-snug">{v.title}</h3>
                  <p className="text-gray-600 text-sm flex-1">{v.desc}</p>
                  <a href={`https://vimeo.com/${v.id}`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#F7941E] font-semibold hover:gap-3 transition-all self-start mt-4">
                    Watch on Vimeo <FaArrowRight />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {compact && (
          <Reveal delay={300}>
            <div className="text-center mt-12">
              <Link to="/videos"
                className="inline-flex items-center gap-2 bg-[#4A3B8C] hover:bg-purple-900 text-white font-bold px-8 py-3.5 rounded-full shadow-xl hover:-translate-y-1 transition">
                View All Videos <FaVideo />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   📸 GALLERY
   ============================================================ */
function Gallery({ limit }) {
  const pics = limit ? GALLERY_LOCAL.slice(0, limit) : GALLERY_LOCAL;
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i + 1) % pics.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i - 1 + pics.length) % pics.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, pics.length]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-[#39B54A]/15 text-[#39B54A] font-semibold px-4 py-1.5 rounded-full text-sm mb-4"><FaCamera /> Our Gallery</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] mb-4">Moments of Joy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Glimpses of laughter, learning and little adventures at Pathways. ({GALLERY_LOCAL.length} photos)</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pics.map((p, i) => (
            <Reveal key={i} delay={(i % 8) * 80} direction="zoom">
              <div onClick={() => setLightbox(i)}
                className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group aspect-square">
                <img src={p} alt={`Gallery ${i + 1}`} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3B8C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="text-white text-sm font-bold flex items-center gap-2"><FaCamera /> View Photo</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 text-white text-3xl w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            onClick={() => setLightbox(null)} aria-label="Close"><FaTimes /></button>
          <button className="absolute left-4 md:left-8 text-white text-3xl w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + pics.length) % pics.length); }} aria-label="Previous">‹</button>
          <img src={pics[lightbox]} alt={`Gallery ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 md:right-8 text-white text-3xl w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % pics.length); }} aria-label="Next">›</button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full">
            {lightbox + 1} / {pics.length}
          </div>
        </div>
      )}
    </section>
  );
}

/* ============================================================
   📰 BLOG
   ============================================================ */
const BLOG_POSTS = [
  { img: IMG.blog1, tag: "Play-Based Learning", title: "Why Play Is the Best Way to Learn", desc: "Discover how guided play builds creativity, confidence and problem-solving skills in early years.", date: "Mar 15, 2025" },
  { img: IMG.blog2, tag: "Parenting Tips", title: "5 Ways to Prepare Your Child for Preschool", desc: "Simple routines and activities that make the first day of school smoother and happier.", date: "Mar 08, 2025" },
  { img: IMG.blog3, tag: "Child Development", title: "Building Social Skills in Early Years", desc: "How sharing, teamwork and friendship shape your child's emotional growth.", date: "Feb 28, 2025" },
  { img: GALLERY_LOCAL[4], tag: "Learning", title: "The Magic of Storytelling in Early Education", desc: "How stories build vocabulary, imagination and a lifelong love for reading.", date: "Feb 20, 2025" },
  { img: GALLERY_LOCAL[10], tag: "Health & Nutrition", title: "Healthy Snacks Your Preschooler Will Love", desc: "Quick, nutritious and kid-approved snack ideas for growing minds.", date: "Feb 12, 2025" },
  { img: GALLERY_LOCAL[15], tag: "Activities", title: "10 Indoor Activities That Boost Creativity", desc: "Simple activities to keep little ones engaged and learning at home.", date: "Feb 05, 2025" },
];

function BlogSection({ limit }) {
  const posts = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-[#4A3B8C]/10 text-[#4A3B8C] font-semibold px-4 py-1.5 rounded-full text-sm mb-4"><FaBookOpen /> From Our Blog</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] mb-4">Latest Stories & Tips</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Insights, parenting tips and classroom stories from the Pathways family.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((b, i) => (
            <Reveal key={i} delay={i * 150}>
              <article className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 h-full flex flex-col group">
                <div className="relative overflow-hidden h-56">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-[#F7941E] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">{b.tag}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-gray-500 font-semibold mb-2 flex items-center gap-2"><FaCalendarAlt /> {b.date}</p>
                  <h3 className="font-bold text-xl text-[#4A3B8C] mb-3 leading-snug">{b.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{b.desc}</p>
                  <button className="inline-flex items-center gap-2 text-[#F7941E] font-semibold hover:gap-3 transition-all self-start">Read More <FaArrowRight /></button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   🏠 HOME  ✅ Hero → About → Counters → Baaki Sab
   ============================================================ */
function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#4A3B8C] via-[#29ABE2] to-[#39B54A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#FFD93D] rounded-full blur-3xl anim-float"></div>
          <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#F7941E] rounded-full blur-3xl anim-float-slow"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <span className="inline-block bg-[#FFD93D] text-[#4A3B8C] font-bold px-4 py-1.5 rounded-full text-sm mb-5 shadow-lg anim-pulse-glow">🎉 Admissions Open 2025–26</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Start Your Child's <br /><span className="text-[#FFD93D]">Learning Journey</span> <br />Through Play-Based Education
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-lg">
              Enroll your child into a world of endless possibilities and imagination where learning sparks curiosity and shapes the future.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact-section" className="inline-flex items-center gap-2 bg-[#F7941E] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">Contact Us <FaArrowRight /></a>
              <a href={`tel:${SOCIAL.phone}`} className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1e8fc2] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all hover:-translate-y-0.5"><FaPhone /> Call Now</a>
            </div>
          </Reveal>
          <Reveal delay={200} direction="right">
            <div className="grid grid-cols-2 gap-4 anim-float">
              <img src={GALLERY_LOCAL[0]} alt="Preschool" className="rounded-3xl shadow-2xl h-44 md:h-56 w-full object-cover" />
              <img src={GALLERY_LOCAL[1]} alt="Kids" className="rounded-3xl shadow-2xl h-44 md:h-56 w-full object-cover mt-8" />
              <img src={GALLERY_LOCAL[2]} alt="Learning" className="rounded-3xl shadow-2xl h-44 md:h-56 w-full object-cover -mt-4" />
              <img src={GALLERY_LOCAL[3]} alt="Happy" className="rounded-3xl shadow-2xl h-44 md:h-56 w-full object-cover mt-4" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ✅ ABOUT SECTION — Hero ke turant baad */}
      <AboutSection />

      {/* COUNTERS */}
      <section className="bg-white py-16 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <FaSmile />, end: 350, suffix: "+", label: "Happy Kids", color: "text-[#F7941E]" },
            { icon: <FaCalendarAlt />, end: 12, suffix: "+", label: "Years Experience", color: "text-[#4A3B8C]" },
            { icon: <FaUsers />, end: 25, suffix: "+", label: "Expert Teachers", color: "text-[#29ABE2]" },
            { icon: <FaAward />, end: 4, suffix: "", label: "Programs", color: "text-[#39B54A]" },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 120} direction="zoom">
              <div className="text-center group">
                <div className={`text-4xl md:text-5xl mb-3 ${c.color} group-hover:scale-110 transition-transform`}>{c.icon}</div>
                <div className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] mb-1"><Counter end={c.end} suffix={c.suffix} /></div>
                <p className="text-gray-600 font-semibold text-sm md:text-base">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] text-center mb-4">Why Choose Pathways?</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Every child is unique — our programs celebrate individuality and nurture holistic growth.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaChild />, color: "bg-[#4A3B8C]", title: "Nurturing Care", desc: "Safe, warm environment that feels like a second home." },
            { icon: <FaStar />, color: "bg-[#F7941E]", title: "Expert Educators", desc: "Passionate, qualified teachers who truly care." },
            { icon: <FaHeart />, color: "bg-[#E63946]", title: "Holistic Growth", desc: "Cognitive, emotional & physical development." },
            { icon: <FaCheckCircle />, color: "bg-[#39B54A]", title: "Small Classes", desc: "Personalised attention for every child." },
          ].map((f, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:-translate-y-2 text-center h-full group">
                <div className={`${f.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>{f.icon}</div>
                <h3 className="font-bold text-xl mb-2 text-[#4A3B8C]">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs-section" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-[#4A3B8C]/10 text-[#4A3B8C] font-semibold px-4 py-1.5 rounded-full text-sm mb-4">📚 Our Programs</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] mb-4">Programs For Every Little Learner</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Four thoughtfully designed stages — from tiny toddlers to school-ready superstars.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS_DATA.map((p, i) => (
              <Reveal key={i} delay={i * 120} direction="zoom">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 h-full flex flex-col group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <span className={`absolute top-4 left-4 ${p.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>{p.age}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-2xl text-[#4A3B8C] mb-1">{p.name}</h3>
                    <p className="text-[#F7941E] font-semibold italic text-sm mb-4">{p.tagline}</p>
                    <ul className="space-y-2 mb-5 flex-1">
                      {p.points.slice(0, 3).map((pt, j) => (
                        <li key={j} className="flex gap-2 items-start text-sm">
                          <FaCheckCircle className="text-[#39B54A] mt-1 shrink-0" />
                          <span className="text-gray-700">{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/programs" className="inline-flex items-center gap-2 text-[#F7941E] font-semibold hover:gap-3 transition-all self-start text-sm">Learn More <FaArrowRight /></Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS */}
      <section id="admissions-section" className="relative py-20 overflow-hidden bg-gradient-to-br from-[#FFD93D] via-[#FFD93D] to-[#F7941E]">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-3xl anim-float"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#E63946]/30 rounded-full blur-3xl anim-float-slow"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-[#4A3B8C] text-white font-bold px-4 py-1.5 rounded-full text-sm mb-4 shadow-lg anim-pulse-glow">🎓 Admissions Open 2025–26</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] mb-4">Enroll Your Child Today!</h2>
              <p className="text-[#4A3B8C]/90 text-lg max-w-3xl mx-auto">Enroll your child into the world of endless possibilities and imagination where learning sparks curiosity and shapes the future. Limited seats per class — reserve yours now.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { n: "01", t: "Enquiry", d: "Fill the form or call us." },
              { n: "02", t: "Visit", d: "Tour our campus & meet teachers." },
              { n: "03", t: "Interaction", d: "Friendly child interaction session." },
              { n: "04", t: "Enroll", d: "Complete formalities & welcome aboard!" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all p-6 text-center hover:-translate-y-2 h-full group">
                  <div className="text-5xl font-extrabold text-[#F7941E] mb-3 group-hover:scale-110 transition-transform">{s.n}</div>
                  <h4 className="font-bold text-xl text-[#4A3B8C] mb-2">{s.t}</h4>
                  <p className="text-gray-600 text-sm">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="text-center flex flex-wrap gap-4 justify-center">
              <a href="#contact-section" className="inline-flex items-center gap-2 bg-[#4A3B8C] hover:bg-purple-900 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:-translate-y-1 transition anim-pulse-glow">Apply Now <FaArrowRight /></a>
              <a href={`tel:${SOCIAL.phone}`} className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#4A3B8C] font-bold px-8 py-4 rounded-full shadow-xl hover:-translate-y-1 transition"><FaPhone /> Call Us</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BANNER */}
      <Banner />

      {/* TEACHERS */}
      <Teachers />

      {/* ACTIVITIES */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-[#39B54A]/15 text-[#39B54A] font-semibold px-4 py-1.5 rounded-full text-sm mb-4">🎨 Our Activities</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] mb-4">Our Fun Activities</h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto">A blend of structured learning & free play — designed to spark curiosity.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaPalette />, title: "Creative Arts", desc: "Painting, drawing & crafts that ignite creativity.", color: "from-pink-400 to-[#E63946]" },
              { icon: <FaFlask />, title: "STEM Explorations", desc: "Simple experiments that build logical thinking.", color: "from-[#29ABE2] to-cyan-400" },
              { icon: <FaTree />, title: "Outdoor Adventures", desc: "Nature walks & gardening for real-world learning.", color: "from-[#39B54A] to-lime-400" },
              { icon: <FaMusic />, title: "Music & Movement", desc: "Singing, dancing & physical activities.", color: "from-[#F7941E] to-[#FFD93D]" },
            ].map((a, i) => (
              <Reveal key={i} delay={i * 120} direction="zoom">
                <div className={`bg-gradient-to-br ${a.color} text-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all h-full group`}>
                  <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform inline-block">{a.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{a.title}</h3>
                  <p className="text-white/90 text-sm">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <VideoSection compact />

      {/* GALLERY */}
      <Gallery limit={8} />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* BLOG */}
      <BlogSection limit={3} />

      {/* FAQ */}
      <FAQSection />

      {/* CONTACT */}
      <section id="contact-section" className="py-20 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block bg-[#F7941E]/15 text-[#F7941E] font-semibold px-4 py-1.5 rounded-full text-sm mb-4">📞 Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#4A3B8C] mb-4">Contact Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We'd love to hear from you. Let's plan your visit!</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            <Reveal direction="left">
              <div className="space-y-6">
                {[
                  { icon: <FaMapMarkerAlt />, label: "Address", value: SOCIAL.address },
                  { icon: <FaPhoneAlt />, label: "Phone", value: SOCIAL.phoneDisplay, href: `tel:${SOCIAL.phone}` },
                  { icon: <FaEnvelope />, label: "Email", value: SOCIAL.email, href: `mailto:${SOCIAL.email}` },
                  { icon: <FaWhatsapp />, label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${SOCIAL.whatsapp}` },
                ].map((c, i) => (
                  <a key={i} href={c.href || "#"} target={c.href?.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                    className="flex gap-4 items-start bg-white rounded-3xl shadow-lg p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition group">
                    <div className="bg-[#4A3B8C] text-white w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:rotate-6 transition-transform">{c.icon}</div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold">{c.label}</p>
                      <p className="text-[#4A3B8C] font-medium">{c.value}</p>
                    </div>
                  </a>
                ))}
                <div className="flex gap-4 pt-2">
                  <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 hover:rotate-6 transition"><FaFacebookF /></a>
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 text-white flex items-center justify-center hover:scale-110 hover:rotate-6 transition"><FaInstagram /></a>
                  <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 hover:rotate-6 transition"><FaYoutube /></a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150} direction="right"><ContactForm /></Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4A3B8C] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-10 w-40 h-40 bg-[#FFD93D] rounded-full blur-3xl anim-float"></div>
          <div className="absolute bottom-0 left-10 w-52 h-52 bg-[#F7941E] rounded-full blur-3xl anim-float-slow"></div>
        </div>
        <Reveal className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Begin the Adventure?</h2>
          <p className="text-lg text-white/85 mb-8">Visit us and see how we turn every day into an exciting learning adventure!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact-section" className="inline-flex items-center gap-2 bg-[#F7941E] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:-translate-y-1 transition text-lg anim-pulse-glow">Book a Visit <FaArrowRight /></a>
            <a href={`tel:${SOCIAL.phone}`} className="inline-flex items-center gap-2 bg-[#29ABE2] hover:bg-[#1e8fc2] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:-translate-y-1 transition text-lg anim-pulse-glow-blue"><FaPhone /> Call Now</a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

/* ============================================================
   ℹ️ ABOUT PAGE
   ============================================================ */
function About() {
  return (
    <div>
      <PageHero title="About Us" subtitle="A warm, welcoming space where young minds thrive." color="from-[#4A3B8C] to-[#29ABE2]" />
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <img src={GALLERY_LOCAL[5]} alt="About Pathways" className="rounded-3xl shadow-2xl w-full h-96 object-cover" />
        </Reveal>
        <Reveal delay={150} direction="right">
          <h2 className="text-4xl font-extrabold text-[#4A3B8C] mb-5">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-5"><strong>Pathways Preschool & Daycare</strong> was founded with the vision of a warm, welcoming, and enriching environment where young minds can thrive. We are dedicated to fostering the intellectual, emotional, and social development of children aged 1.5 to 5.5 years.</p>
          <p className="text-gray-700 leading-relaxed">With a team of passionate, experienced educators, we strive to create a safe and supportive space that feels like a second home.</p>
        </Reveal>
      </section>
      <Banner />
      <Teachers />
      <Testimonials />
    </div>
  );
}

/* ============================================================
   📚 PROGRAMS PAGE
   ============================================================ */
function Programs() {
  return (
    <div>
      <PageHero title="Our Programs" subtitle="Four thoughtfully designed stages for every little learner." color="from-[#F7941E] to-[#E63946]" />
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {PROGRAMS_DATA.map((p, i) => (
          <Reveal key={i} delay={100} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <img src={p.img} alt={p.name} className="rounded-3xl shadow-2xl w-full h-80 object-cover hover:scale-[1.02] transition-transform" />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className={`${p.color} text-white text-sm font-bold px-4 py-1.5 rounded-full`}>{p.age}</span>
                <h2 className="text-4xl font-extrabold text-[#4A3B8C] mt-4 mb-2">{p.name}</h2>
                <p className="text-[#F7941E] font-semibold italic mb-5">{p.tagline}</p>
                <ul className="space-y-3">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <FaCheckCircle className="text-[#39B54A] mt-1 shrink-0" />
                      <span className="text-gray-700">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
      <FAQSection />
    </div>
  );
}

/* ============================================================
   🎓 ADMISSIONS
   ============================================================ */
function Admissions() {
  return (
    <div>
      <PageHero title="Admissions Open 2025–26" subtitle="Enroll your child into a world of endless possibilities." color="from-[#39B54A] to-[#29ABE2]" />
      <section className="max-w-5xl mx-auto px-6 py-16">
        <Reveal direction="zoom">
          <div className="bg-gradient-to-br from-[#FFD93D] to-[#F7941E] rounded-3xl p-10 text-center shadow-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#4A3B8C] mb-4">🎉 Enroll Your Child Today!</h2>
            <p className="text-[#4A3B8C]/90 text-lg max-w-2xl mx-auto mb-6">Where learning sparks curiosity and shapes the future. Limited seats available per class — reserve yours now.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#4A3B8C] hover:bg-purple-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition anim-pulse-glow">Apply Now <FaArrowRight /></Link>
              <a href={`tel:${SOCIAL.phone}`} className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#4A3B8C] font-semibold px-6 py-3 rounded-full shadow-lg transition"><FaPhone /> Call Now</a>
            </div>
          </div>
        </Reveal>
        <Reveal><h3 className="text-3xl md:text-4xl font-extrabold text-[#4A3B8C] text-center mb-10">Simple 4-Step Process</h3></Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: "01", t: "Enquiry", d: "Fill the form or call us." },
            { n: "02", t: "Visit", d: "Tour our campus & meet teachers." },
            { n: "03", t: "Interaction", d: "Friendly child interaction session." },
            { n: "04", t: "Enroll", d: "Complete formalities & welcome aboard!" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 120} direction="zoom">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all p-6 text-center hover:-translate-y-2 h-full">
                <div className="text-5xl font-extrabold text-[#F7941E] mb-3">{s.n}</div>
                <h4 className="font-bold text-xl text-[#4A3B8C] mb-2">{s.t}</h4>
                <p className="text-gray-600 text-sm">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <FAQSection />
    </div>
  );
}

/* ============================================================
   🎥 VIDEOS PAGE
   ============================================================ */
function VideosPage() {
  return (
    <div>
      <PageHero title="Our Videos" subtitle="Real moments from Pathways — in motion." color="from-[#4A3B8C] to-[#E63946]" />
      <VideoSection />
    </div>
  );
}

/* ============================================================
   📸 GALLERY PAGE
   ============================================================ */
function GalleryPage() {
  return (
    <div>
      <PageHero title="Our Gallery" subtitle="25 moments of joy, laughter and learning." color="from-[#39B54A] to-[#F7941E]" />
      <Gallery />
    </div>
  );
}

/* ============================================================
   📰 BLOG PAGE
   ============================================================ */
function BlogPage() {
  return (
    <div>
      <PageHero title="Our Blog" subtitle="Stories, tips and insights from Pathways." color="from-[#F7941E] to-[#E63946]" />
      <BlogSection />
    </div>
  );
}

/* ============================================================
   ❓ FAQ PAGE
   ============================================================ */
function FAQPage() {
  return (
    <div>
      <PageHero title="FAQ" subtitle="Answers to questions parents ask us most." color="from-[#29ABE2] to-[#4A3B8C]" />
      <FAQSection />
    </div>
  );
}

/* ============================================================
   📞 CONTACT PAGE
   ============================================================ */
function Contact() {
  return (
    <div>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Let's plan your visit!" color="from-[#29ABE2] to-[#4A3B8C]" />
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <Reveal direction="left">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-[#4A3B8C]">Get In Touch</h2>
            {[
              { icon: <FaMapMarkerAlt />, label: "Address", value: SOCIAL.address },
              { icon: <FaPhoneAlt />, label: "Phone", value: SOCIAL.phoneDisplay, href: `tel:${SOCIAL.phone}` },
              { icon: <FaEnvelope />, label: "Email", value: SOCIAL.email, href: `mailto:${SOCIAL.email}` },
              { icon: <FaWhatsapp />, label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${SOCIAL.whatsapp}` },
            ].map((c, i) => (
              <a key={i} href={c.href || "#"} target={c.href?.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                className="flex gap-4 items-start bg-white rounded-3xl shadow-lg p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition group">
                <div className="bg-[#4A3B8C] text-white w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:rotate-6 transition-transform">{c.icon}</div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">{c.label}</p>
                  <p className="text-[#4A3B8C] font-medium">{c.value}</p>
                </div>
              </a>
            ))}
            <div className="flex gap-4 pt-2">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition"><FaFacebookF /></a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 text-white flex items-center justify-center hover:scale-110 transition"><FaInstagram /></a>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition"><FaYoutube /></a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150} direction="right"><ContactForm /></Reveal>
      </section>
    </div>
  );
}

/* ============================================================
   🚀 MAIN APP
   ============================================================ */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0] font-[Poppins,sans-serif]">
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <div className="py-32 text-center">
              <h1 className="text-6xl font-extrabold text-[#4A3B8C] mb-4">404</h1>
              <Link to="/" className="inline-flex items-center gap-2 bg-[#F7941E] text-white font-semibold px-6 py-3 rounded-full">Go Home</Link>
            </div>
          } />
        </Routes>
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}