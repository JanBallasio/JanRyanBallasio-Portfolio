import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  ChevronDown,
  Sun,
  Moon,
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  MessageCircle,
  Target,
  Lightbulb,
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const texts = ["Jan Ryan Ballasio", "Full Stack Developer"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      const currentFullText = texts[textIndex];

      if (!isDeleting && currentIndex < currentFullText.length) {
        setCurrentText(currentFullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setCurrentText(currentFullText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textIndex, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const technicalSkills = [
    { name: "HTML/CSS", level: 85, icon: Code, category: "Frontend" },
    { name: "React.js", level: 70, icon: Code, category: "Frontend" },
    { name: "Tailwind CSS", level: 80, icon: Code, category: "Frontend" },
    { name: "Node.js", level: 75, icon: Database, category: "Backend" },
    { name: "PHP", level: 65, icon: Code, category: "Backend" },
    { name: "Express.js", level: 60, icon: Database, category: "Backend" },
    { name: "Python", level: 60, icon: Code, category: "Backend" },
    { name: "MySQL", level: 70, icon: Database, category: "Database" },
    { name: "Firebase", level: 60, icon: Database, category: "Database" },
    { name: "Supabase", level: 80, icon: Database, category: "Database" },
  ];

  const softSkills = [
    { name: "Communication", level: 85, icon: MessageCircle },
    { name: "Team Collaboration", level: 85, icon: Users },
    { name: "Problem Solving", level: 70, icon: Lightbulb },
    { name: "Project Support", level: 80, icon: Target },
  ];

  const projects = [
    {
      title: "Balangue-Punla Dental Clinic Appointment Booking System",
      description:
        "The Balangue-Punla Dental Clinic Appointment Booking System is a web-based application aimed to ease the way dental appointments are managed and scheduled. The BPDC-ASS will be used to record, monitor, and manage client appointments and other relevant data and information used by the dental clinic. ",
      tech: ["MySQL", "Express.js", "React.js", "Node.js"],
      type: "gallery",
      github: "https://github.com/JanBallasio",
      images: [
        "/images/BP/Picture1.jpg",
        "/images/BP/Picture2.jpg",
        "/images/BP/Picture3.jpg",
        "/images/BP/Picture4.jpg",
        "/images/BP/Picture5.jpg",
        "/images/BP/Picture6.jpg",
        "/images/BP/Picture7.jpg",
        "/images/BP/Picture8.png",
        "/images/BP/Picture9.png",
        "/images/BP/Picture10.jpg",
        "/images/BP/Picture11.jpg",
        "/images/BP/Picture12.jpg",
        "/images/BP/Picture13.jpg",
        "/images/BP/Picture14.jpg",
        "/images/BP/Picture15.jpg",
        "/images/BP/Picture16.png",
        "/images/BP/Picture18.png",
        "/images/BP/Picture20.jpg",
      ],
    },
    {
      title: "UniHomes: A Web Platform For Dormitory Rentals In Baguio City",
      description:
        "UniHomes is a web-based platform designed to simplify the rental home search process and streamline property listings for rental home seekers and owners in Baguio City. ",
      tech: ["Supabase", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      type: "gallery,deployed",
      github: "https://github.com/JanBallasio",
      deployUrl: "https://uni-homes.vercel.app/",
      images: [
        "/images/UH/1.png",
        "/images/UH/2.png",
        "/images/UH/3.png",
        "/images/UH/4.png",
        "/images/UH/5.png",
        "/images/UH/6.png",
      ],
    },
    {
      title: "Baguio City Traffic Monitoring System",
      description:
        "The SCCC – Traffic Monitoring System is a web application to help users track the status of traffic within the roads at Baguio City. Traffic is one of the issues within the city, this web application will be used to help users decide alternative routes to reach their destinations. This will be managed by admins by updating the traffic conditions within each route in real time. ",
      tech: ["PHP", "Laravel", "JS", "Vue", "MySQL", "MapBox", "WebSockets"],
      type: "gallery",
      github: "https://github.com/JanBallasio",
      images: ["/images/TMS/1.jpg", "/images/TMS/2.jpg", "/images/TMS/3.jpg"],
    },
  ];

  const openProjectGallery = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(0);
  };

  const closeProjectGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject !== null && projects[selectedProject].images) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % projects[selectedProject].images!.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject !== null && projects[selectedProject].images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? projects[selectedProject].images!.length - 1 : prev - 1
      );
    }
  };

  const themeClasses = {
    bg: isDarkMode ? "bg-black" : "bg-white",
    bgSecondary: isDarkMode ? "bg-gray-900" : "bg-gray-50",
    bgTertiary: isDarkMode ? "bg-gray-800" : "bg-gray-100",
    text: isDarkMode ? "text-white" : "text-black",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-700",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-600",
    border: isDarkMode ? "border-gray-700" : "border-gray-300",
    borderLight: isDarkMode ? "border-gray-800" : "border-gray-200",
    accent: isDarkMode ? "text-white" : "text-black",
    accentBg: isDarkMode ? "bg-white" : "bg-black",
    accentBorder: isDarkMode ? "border-white" : "border-black",
    cardBg: isDarkMode ? "from-gray-900 to-gray-800" : "from-gray-50 to-white",
    cardBorder: isDarkMode ? "border-gray-700" : "border-gray-200",
    inputBg: isDarkMode ? "bg-gray-800/50" : "bg-white/50",
    inputBorder: isDarkMode ? "border-gray-600" : "border-gray-300",
  };

  return (
    <div
      className={`${themeClasses.bg} min-h-screen transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? `${
                isDarkMode ? "bg-black/95" : "bg-white/95"
              } backdrop-blur-md shadow-2xl ${
                themeClasses.borderLight
              } border-b`
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className={`text-2xl font-bold ${themeClasses.text}`}>JRB</div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {["home", "about", "skills", "projects", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`capitalize transition-all duration-300 relative group ${
                        activeSection === section
                          ? `${themeClasses.accent} font-semibold`
                          : `${themeClasses.textSecondary} hover:${themeClasses.accent}`
                      }`}
                    >
                      {section}
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 ${themeClasses.accentBg} group-hover:w-full transition-all duration-300`}
                      ></span>
                    </button>
                  )
                )}
              </div>
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-full ${themeClasses.bgTertiary} ${themeClasses.text} hover:scale-110 transition-all duration-300 ${themeClasses.border} border`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - 2 Column Layout */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 ${
              isDarkMode
                ? ""
                : "bg-gradient-to-br from-white via-gray-50 to-gray-100"
            }`}
          ></div>
          <div
            className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22${
              isDarkMode ? "%23ffffff" : "%23000000"
            }%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}
          ></div>
        </div>

        {/* Floating Elements */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${isDarkMode ? 'bg-white/5' : 'bg-black/5'} rounded-full blur-3xl animate-pulse delay-1000`}></div>
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-5 gap-8 items-center justify-center min-h-screen py-20">
            {/* Left Column - Name and Animation - 60% width */}
            <div className="lg:col-span-3 text-center lg:text-left flex flex-col justify-center">
              {/* Typing Animation */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 h-20 lg:h-24 flex items-center justify-center lg:justify-start">
                  <span className={themeClasses.text}>{currentText}</span>
                  <span className={`animate-pulse ${themeClasses.text} ml-2`}>
                    |
                  </span>
                </h1>
              </div>
              <p
                className={`text-xl md:text-2xl mb-8 ${themeClasses.textSecondary} max-w-2xl mx-auto lg:mx-0 leading-relaxed`}
              >
                Computer Science Graduate passionate about creating innovative
                solutions and building exceptional digital experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`group relative px-8 py-4 ${
                    themeClasses.accentBg
                  } rounded-full font-semibold ${
                    isDarkMode ? "text-black" : "text-white"
                  } overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                >
                  <span className="relative z-10">View My Work</span>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`group relative px-8 py-4 border-2 ${themeClasses.accentBorder} ${themeClasses.accent} rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105`}
                >
                  <span
                    className={`relative z-10 group-hover:${
                      isDarkMode ? "text-black" : "text-white"
                    } transition-colors duration-300`}
                  >
                    Get In Touch
                  </span>
                  <div
                    className={`absolute inset-0 ${themeClasses.accentBg} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  ></div>
                </button>
              </div>
              {/* Social Links */}
              <div className="flex gap-6 justify-center lg:justify-start">
                <a
                  href="https://github.com/JanBallasio"
                  className={`w-12 h-12 ${
                    themeClasses.accentBg
                  } rounded-full flex items-center justify-center ${
                    isDarkMode ? "text-black" : "text-white"
                  } hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vanquish02052003/"
                  className={`w-12 h-12 ${
                    themeClasses.accentBg
                  } rounded-full flex items-center justify-center ${
                    isDarkMode ? "text-black" : "text-white"
                  } hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jryan6278@gmail.com&su=Contact%20from%20Portfolio"
                  className={`w-12 h-12 ${
                    themeClasses.accentBg
                  } rounded-full flex items-center justify-center ${
                    isDarkMode ? "text-black" : "text-white"
                  } hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            {/* Right Column - Profile Image - 40% width */}
            <div className="lg:col-span-2 flex justify-center lg:justify-center items-center">
              <div className="relative w-full hidden md:block">
                <img
                  src="/images/pp.png"
                  alt="Jan Ryan Ballasio"
                  className="w-full h-[28rem] lg:h-[45rem] object-cover object-center transition-all duration-500 filter brightness-110 contrast-105"
                  style={{
                    maskImage: `linear-gradient(to bottom, 
          rgba(0,0,0,1) 0%, 
          rgba(0,0,0,1) 60%, 
          rgba(0,0,0,0.9) 70%, 
          rgba(0,0,0,0.7) 80%, 
          rgba(0,0,0,0.4) 90%, 
          rgba(0,0,0,0) 100%)`,
                    WebkitMaskImage: `linear-gradient(to bottom, 
          rgba(0,0,0,1) 0%, 
          rgba(0,0,0,1) 60%, 
          rgba(0,0,0,0.9) 70%, 
          rgba(0,0,0,0.7) 80%, 
          rgba(0,0,0,0.4) 90%, 
          rgba(0,0,0,0) 100%)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className={`w-8 h-8 ${themeClasses.text}`} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 ${themeClasses.bgSecondary} relative `}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            isDarkMode ? "from-black to-gray-900" : "from-white to-gray-50"
          }`}
        ></div>
        <div className="relative z-10 max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold ${themeClasses.text} mb-4`}>
              About Me
            </h2>
            <div
              className={`w-32 h-1 ${themeClasses.accentBg} mx-auto rounded-full`}
            ></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p
                className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}
              >
                I’m a Computer Science graduate who is still in the process of
                becoming the developer I aspire to be. I’ll be honest: I’m not
                highly skilled yet. I don’t know everything, and I still
                struggle in many areas. But what I do have is something that I
                believe matters just as much as technical ability: a strong work
                ethic, humility, and a relentless drive to grow.
              </p>
              <p
                className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}
              >
                My journey in tech started in high school, where we learned the
                basics of networking and managing systems connected to a local
                server. It wasn’t easy, and it quickly exposed how unprepared I
                was for real-world scenarios. But instead of being discouraged,
                that experience pushed me to take initiative. I asked my uncle
                if I could build and manage the digital network for his grocery
                store, including setting up POS systems, routers, and CCTV
                connections. I didn’t fully know what I was doing, but I was
                eager to try. There were plenty of trial-and-error moments,
                especially with connectivity and device integration. I kept
                going, learning through every challenge. That project taught me
                one thing clearly: real learning happens when you step out of
                your comfort zone.
              </p>
              <p
                className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}
              >
                In college, I brought that same attitude into our group
                projects. I worked with classmates on building a real estate
                platform, a traffic monitoring system, and mobile apps for task
                management. These were not solo efforts. I was part of a team,
                but I always made sure to contribute, especially by volunteering
                for tasks that pushed me to learn new skills. I never claimed to
                be the most knowledgeable in the group, but I was always willing
                to research, ask questions, and improve.
              </p>
              <p
                className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}
              >
                I believe the best people to work with are not always the ones
                who know everything already. They are the ones who are
                coachable, committed, and never stop trying. That’s who I am. I
                don’t take shortcuts. I value feedback, I own up to my mistakes,
                and I’m willing to start from the bottom if it means I will come
                out better in the end. All I ask for is a chance to learn and
                contribute. If given that opportunity, I will give my best every
                single time.
              </p>
              <div className="flex flex-wrap gap-6 pt-8">
                <div
                  className={`flex items-center gap-3 ${themeClasses.textSecondary} group hover:${themeClasses.text} transition-colors duration-300`}
                >
                  <MapPin
                    className={`w-6 h-6 ${themeClasses.text} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span>Available for remote work</span>
                </div>
                <div
                  className={`flex items-center gap-3 ${themeClasses.textSecondary} group hover:${themeClasses.text} transition-colors duration-300 cursor-pointer`}
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/documents/CV_Ballasio.pdf';
                    link.download = 'Jan_Ryan_Ballasio_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download
                    className={`w-6 h-6 ${themeClasses.text} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span>Download Resume</span>
                </div>
              </div>
            </div>
            {/* Right: Education Card */}
            <div
              className={`flex-1 bg-gradient-to-br ${themeClasses.cardBg} p-8 rounded-3xl border ${themeClasses.cardBorder} backdrop-blur-sm shadow-lg min-w-[320px]`}
            >
              <h3 className={`text-3xl font-bold ${themeClasses.text} mb-8`}>
                Education
              </h3>
              <div className="space-y-6">
                <div
                  className={`relative pl-6 border-l-2 ${themeClasses.accentBorder}`}
                >
                  <div
                    className={`absolute -left-2 top-0 w-4 h-4 ${themeClasses.accentBg} rounded-full`}
                  ></div>
                  <h4 className={`text-xl font-semibold ${themeClasses.text}`}>
                    Information and Communications Technology (Specialization)
                  </h4>
                  <p className={`${themeClasses.text} font-medium text-lg`}>
                    Saint Louis School of Pacdal, Inc • 2017-2019
                  </p>
                  <p
                    className={`${themeClasses.textSecondary} mt-3 leading-relaxed`}
                  >
                    Specialized in hands-on IT support and technical setup,
                    including LAN cable creation, basic networking, and computer
                    assembly/disassembly. Gained practical experience in
                    building and maintaining hardware systems and ensuring
                    proper connectivity and performance.
                  </p>
                </div>
                <div
                  className={`relative pl-6 border-l-2 ${themeClasses.accentBorder}`}
                >
                  <div
                    className={`absolute -left-2 top-0 w-4 h-4 ${themeClasses.accentBg} rounded-full`}
                  ></div>
                  <h4 className={`text-xl font-semibold ${themeClasses.text}`}>
                    Information and Communications Technology (Strand)
                  </h4>
                  <p className={`${themeClasses.text} font-medium text-lg`}>
                    University of Baguio • 2019-2021
                  </p>
                  <p
                    className={`${themeClasses.textSecondary} mt-3 leading-relaxed`}
                  >
                    Specialized in hands-on IT support and technical setup,
                    including LAN cable creation, basic networking, and computer
                    assembly/disassembly. Gained practical experience in
                    building and maintaining hardware systems and ensuring
                    proper connectivity and performance. Graduated with honors.
                  </p>
                </div>
                <div
                  className={`relative pl-6 border-l-2 ${themeClasses.accentBorder}`}
                >
                  <div
                    className={`absolute -left-2 top-0 w-4 h-4 ${themeClasses.accentBg} rounded-full`}
                  ></div>
                  <h4 className={`text-xl font-semibold ${themeClasses.text}`}>
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className={`${themeClasses.text} font-medium text-lg`}>
                    University of Baguio • 2021-2025
                  </p>
                  <p
                    className={`${themeClasses.textSecondary} mt-3 leading-relaxed`}
                  >
                    Specialized in building practical systems and solving
                    real-world problems through programming. Experienced in
                    developing projects using various languages and technologies
                    including HTML, CSS, JavaScript, React, Python, and Assembly
                    language. Strong focus on hands-on learning, logic-based
                    problem-solving, and creating functional applications across
                    different platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${themeClasses.bg} relative`}>
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            isDarkMode ? "from-gray-900 to-black" : "from-gray-50 to-white"
          }`}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold ${themeClasses.text} mb-4`}>
              Skills & Expertise
            </h2>
            <div
              className={`w-32 h-1 ${themeClasses.accentBg} mx-auto rounded-full`}
            ></div>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3
              className={`text-3xl font-bold ${themeClasses.text} mb-8 text-center`}
            >
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-br ${themeClasses.cardBg} p-6 rounded-2xl border ${themeClasses.cardBorder} hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 ${themeClasses.accentBg} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skill.icon
                        className={`w-6 h-6 ${
                          isDarkMode ? "text-black" : "text-white"
                        }`}
                      />
                    </div>
                    <div>
                      <h4
                        className={`text-lg font-semibold ${themeClasses.text}`}
                      >
                        {skill.name}
                      </h4>
                      <p className={`text-sm ${themeClasses.textMuted}`}>
                        {skill.category}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-full ${themeClasses.bgTertiary} rounded-full h-2 mb-2 overflow-hidden`}
                  >
                    <div
                      className={`${themeClasses.accentBg} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className={`text-sm ${themeClasses.textMuted}`}>
                    {skill.level}% Proficiency
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3
              className={`text-3xl font-bold ${themeClasses.text} mb-8 text-center`}
            >
              Soft Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-br ${themeClasses.cardBg} p-6 rounded-2xl border ${themeClasses.cardBorder} hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 ${themeClasses.accentBg} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skill.icon
                        className={`w-6 h-6 ${
                          isDarkMode ? "text-black" : "text-white"
                        }`}
                      />
                    </div>
                    <h4
                      className={`text-lg font-semibold ${themeClasses.text}`}
                    >
                      {skill.name}
                    </h4>
                  </div>
                  <div
                    className={`w-full ${themeClasses.bgTertiary} rounded-full h-2 mb-2 overflow-hidden`}
                  >
                    <div
                      className={`${themeClasses.accentBg} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className={`text-sm ${themeClasses.textMuted}`}>
                    {skill.level}% Proficiency
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 ${themeClasses.bgSecondary} relative`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            isDarkMode ? "from-black to-gray-900" : "from-white to-gray-50"
          }`}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold ${themeClasses.text} mb-4`}>
              Featured Projects
            </h2>
            <div
              className={`w-32 h-1 ${themeClasses.accentBg} mx-auto rounded-full`}
            ></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${themeClasses.cardBg} rounded-2xl overflow-hidden border ${themeClasses.cardBorder} hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.images![0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isDarkMode ? "from-black/80" : "from-white/80"
                    } to-transparent`}
                  ></div>
                </div>
                <div className="p-8">
                  <h3
                    className={`text-2xl font-bold ${themeClasses.text} mb-4 group-hover:${themeClasses.text} transition-colors duration-300`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${themeClasses.textSecondary} mb-6 leading-relaxed`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${
                          isDarkMode
                            ? "bg-white/10 text-white border-white/20"
                            : "bg-black/10 text-black border-black/20"
                        } px-3 py-1 rounded-full text-sm border`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.type.includes("deployed") && (
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 ${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors duration-300 group/link`}
                      >
                        <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-300" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.type.includes("gallery") && (
                      <button
                        onClick={() => openProjectGallery(index)}
                        className={`flex items-center gap-2 ${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors duration-300 group/link`}
                      >
                        <Globe className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-300" />
                        <span>View Screenshots</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeProjectGallery}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative">
              <img
                src={projects[selectedProject].images![currentImageIndex]}
                alt={`${projects[selectedProject].title} screenshot ${
                  currentImageIndex + 1
                }`}
                className="w-full h-auto rounded-lg"
              />
              {projects[selectedProject].images!.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl font-bold mb-2">
                {projects[selectedProject].title}
              </h3>
              <p className="text-gray-300 mb-4">
                {projects[selectedProject].description}
              </p>
              <div className="flex justify-center gap-2">
                {projects[selectedProject].images!.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex ? "bg-white" : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${themeClasses.bg} relative`}>
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            isDarkMode ? "from-gray-900 to-black" : "from-gray-50 to-white"
          }`}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold ${themeClasses.text} mb-4`}>
              Get In Touch
            </h2>
            <div
              className={`w-32 h-1 ${themeClasses.accentBg} mx-auto rounded-full`}
            ></div>
            <p
              className={`text-lg ${themeClasses.textSecondary} mt-8 max-w-2xl mx-auto leading-relaxed`}
            >
              I'm always excited to discuss new opportunities and innovative
              projects. Let's connect and create something amazing together!
            </p>
          </div>
          <div className="grid gap-16">
            <div className="space-y-8">
              <div className="flex justify-between gap-5">
                <div className="flex items-center gap-6 group hover:scale-105 transition-transform duration-300 order-1 ">
                  <div
                    className={`w-16 h-16 ${themeClasses.accentBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Mail
                      className={`w-8 h-8 ${
                        isDarkMode ? "text-black" : "text-white"
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-semibold ${themeClasses.text} mb-1`}
                    >
                      Email
                    </h3>
                    <p className={themeClasses.textSecondary}>
                      jryan6278@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group hover:scale-105 transition-transform duration-300">
                  <div
                    className={`w-16 h-16 ${themeClasses.accentBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Phone
                      className={`w-8 h-8 ${
                        isDarkMode ? "text-black" : "text-white"
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-semibold ${themeClasses.text} mb-1`}
                    >
                      Phone
                    </h3>
                    <p className={themeClasses.textSecondary}>+639766615132</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group hover:scale-105 transition-transform duration-300">
                  <div
                    className={`w-16 h-16 ${themeClasses.accentBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <MapPin
                      className={`w-8 h-8 ${
                        isDarkMode ? "text-black" : "text-white"
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-semibold ${themeClasses.text} mb-1`}
                    >
                      Location
                    </h3>
                    <p className={themeClasses.textSecondary}>
                      Baguio City, Philippines
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 pt-8">
                <a
                  href="https://github.com/JanBallasio"
                  className={`w-14 h-14 ${
                    themeClasses.accentBg
                  } rounded-2xl flex items-center justify-center ${
                    isDarkMode ? "text-black" : "text-white"
                  } hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                >
                  <Github className="w-7 h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vanquish02052003/"
                  className={`w-14 h-14 ${
                    themeClasses.accentBg
                  } rounded-2xl flex items-center justify-center ${
                    isDarkMode ? "text-black" : "text-white"
                  } hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                >
                  <Linkedin className="w-7 h-7" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jryan6278@gmail.com&su=Contact%20from%20Portfolio"
                  className={`w-14 h-14 ${
                    themeClasses.accentBg
                  } rounded-2xl flex items-center justify-center ${
                    isDarkMode ? "text-black" : "text-white"
                  } hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                >
                  <Mail className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${themeClasses.bgSecondary} ${themeClasses.text} py-16 border-t ${themeClasses.borderLight}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`text-4xl font-bold mb-4 ${themeClasses.text}`}>
              Jan Ryan Ballasio
            </div>
            <p className={`${themeClasses.textMuted} mb-8 text-lg`}>
              Computer Science Graduate & Full Stack Developer
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="https://github.com/JanBallasio"
                className={`${themeClasses.textMuted} hover:${themeClasses.text} transition-all duration-300 hover:scale-110`}
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/vanquish02052003/"
                className={`${themeClasses.textMuted} hover:${themeClasses.text} transition-all duration-300 hover:scale-110`}
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jryan6278@gmail.com&su=Contact%20from%20Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.textMuted} hover:${themeClasses.text} transition-all duration-300 hover:scale-110`}
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <div className={`border-t ${themeClasses.borderLight} pt-8`}>
              <p className={themeClasses.textMuted}>
                © 2024 Jan Ryan Ballasio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
