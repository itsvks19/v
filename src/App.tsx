import {
  BookOpen,
  ChevronDown,
  ExternalLink,
  Globe,
  Mail,
  Menu,
  Smartphone,
  User,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { LuGithub } from "react-icons/lu";
import { RiTelegram2Line } from "react-icons/ri";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Klyx",
      description: "A code editor app built with Kotlin and Jetpack Compose",
      tech: ["Kotlin", "Android", "WASM"],
      status: "In Development",
      url: "https://github.com/klyx-dev/klyx",
    },
    {
      title: "Axon",
      description: "Smart coding AI assistant for developers.",
      tech: ["React", "TypeScript", "LangChain", "AI-ML"],
      status: "In Development",
      url: "https://github.com/itsvks19/axon-acode",
    },
    {
      title: "Visual Code Space",
      description: "An android application for text editing.",
      tech: ["Kotlin", "Android", "Jetpack Compose"],
      status: "Completed",
      url: "https://github.com/Visual-Code-Space/Visual-Code-Space",
    },
  ];

  return (
    <div className="min-h-screen selection:bg-gray-300 selection:text-gray-900 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Vivek
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-4 py-2 cursor-pointer transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "bg-white text-black"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-2 pt-4">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`px-4 py-3 text-left transition-all duration-300 ${
                        activeSection === item.toLowerCase()
                          ? "bg-white text-black"
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20"></div>
        <div
          className={`text-center z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-2xl mb-6 bg-gradient-to-r from-gray-600 to-gray-800 p-1">
              <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                <User size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
              Hi, I'm Vivek
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-2">
              12th Grade Student
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Passionate Android &amp; Web Developer crafting digital
              experiences with cutting-edge technologies
            </p>
          </div>

          <div className="flex flex-wrap select-none justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700">
              <Smartphone className="text-green-500" size={20} />
              <span>Android Dev</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700">
              <Globe className="text-blue-500" size={20} />
              <span>Web Dev</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700">
              <BookOpen className="text-purple-500" size={20} />
              <span>Always Learning</span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="group flex items-center cursor-pointer gap-2 mx-auto text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span>Discover More</span>
            <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm a driven 12th-grade student with an insatiable passion for
                technology and software development. My journey began with
                curiosity about how apps work, which led me down the rabbit hole
                of programming.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                From building Android applications to crafting responsive web
                experiences, I love bringing ideas to life through code. I'm
                constantly learning new technologies and pushing the boundaries
                of what I can create.
              </p>

              <div className="flex flex-wrap gap-3 select-none">
                <span className="px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600">
                  Quick Learner
                </span>
                <span className="px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600">
                  Creative Thinker
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-yellow-500" size={24} />
                  <h3 className="text-xl font-semibold">Current Focus</h3>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li>• Advanced Android Development with Jetpack Compose</li>
                  <li>• Modern Web Development with React & TypeScript</li>
                  <li>• Exploring Rust for system programming</li>
                  <li>• Studying Physics and Mathematics 🥲</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Technical Skills
          </h2>

          {/* Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-blue-500"></div>
                <h3 className="text-xl font-semibold text-white">
                  Mobile Development
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800 border border-gray-600">
                  <span className="text-white font-medium">Java</span>
                  <span className="text-blue-400 text-sm">Expert</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 border border-gray-600">
                  <span className="text-white font-medium">Kotlin</span>
                  <span className="text-blue-400 text-sm">Intermediate</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 border border-gray-600">
                  <span className="text-white font-medium">Android SDK</span>
                  <span className="text-blue-400 text-sm">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-500"></div>
                <h3 className="text-xl font-semibold text-white">
                  Web Development
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800 border border-gray-600">
                  <span className="text-white font-medium">JavaScript</span>
                  <span className="text-green-400 text-sm">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 border border-gray-600">
                  <span className="text-white font-medium">TypeScript</span>
                  <span className="text-green-400 text-sm">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 border border-gray-600">
                  <span className="text-white font-medium">React</span>
                  <span className="text-green-400 text-sm">Advanced</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-purple-500"></div>
                <h3 className="text-xl font-semibold text-white">
                  Systems &amp; Others
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800 border border-gray-600">
                  <span className="text-white font-medium">Python</span>
                  <span className="text-purple-400 text-sm">Advanced</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 border border-gray-600">
                  <span className="text-white font-medium">Rust</span>
                  <span className="text-purple-400 text-sm">Expert</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 border border-gray-600">
                  <span className="text-white font-medium">C++</span>
                  <span className="text-purple-400 text-sm">Expert</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills Tags */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-400 mb-6">
              Also Familiar With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Git",
                "Linux",
                "Docker",
                "Firebase",
                "SQLite",
                "REST APIs",
                "JSON",
                "XML",
                "Gradle",
                "Node.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-800 text-gray-300 border border-gray-600 hover:border-gray-500 hover:text-white transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Projects &amp; Ideas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group">
                <div className="bg-gray-900 p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:translate-y-[-4px] h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span
                      className={`px-3 py-1 text-xs rounded whitespace-nowrap ${
                        project.status === "In Development"
                          ? "bg-green-800 text-green-200"
                          : project.status === "Planning"
                            ? "bg-yellow-800 text-yellow-200"
                            : "bg-purple-800 text-purple-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-sm text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className="flex items-center cursor-pointer text-gray-400 group-hover:text-white transition-colors duration-300"
                    onClick={() => {
                      if (project.url) window.open(project.url, "_blank");
                    }}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <span className="text-sm">View Project</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always excited to collaborate on interesting projects or discuss
            the latest in tech. Let's build something amazing together!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:itsvks19@proton.me" className="group">
              <div className="bg-gray-900 p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:translate-y-[-4px]">
                <Mail
                  className="text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  size={32}
                />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-500">itsvks19@proton.me</p>
              </div>
            </a>

            <a href="https://github.com/itsvks19" className="group">
              <div className="bg-gray-900 p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:translate-y-[-4px]">
                <LuGithub
                  className="text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  size={32}
                />
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-gray-500">@itsvks19</p>
              </div>
            </a>

            <a href="https://t.me/itsvks19" className="group">
              <div className="bg-gray-900 p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:translate-y-[-4px]">
                <RiTelegram2Line
                  className="text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  size={32}
                />
                <h3 className="text-lg font-semibold mb-2">Telegram</h3>
                <p className="text-gray-500">@itsvks19</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-500 mb-4">Currently open to:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gray-800 text-green-400 border border-gray-600">
                Internship Opportunities
              </span>
              <span className="px-4 py-2 bg-gray-800 text-purple-400 border border-gray-600">
                Collaborative Projects
              </span>
              <span className="px-4 py-2 bg-gray-800 text-blue-400 border border-gray-600">
                Learning Opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            ©{" "}
            {new Date().getFullYear() === 2025
              ? "2025"
              : `2025-${new Date().getFullYear()}`}{" "}
            Vivek. Built with React, TypeScript &amp; Tailwind CSS.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Where passion meets purpose
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
