import Image from "next/image";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import ClickSpark from "./components/ClickSpark/ClickSpark";
import PinContainer from "./components/ui/3d-pin";
import Dock from "./components/Dock/Dock";
import { VscHome, VscPerson, VscMail, VscCode } from "react-icons/vsc";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Spline from "@splinetool/react-spline";
import { Timeline } from "./components/ui/timeline";

export default function Home() {
  const timeline = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm text-white">
            In 2024, I began my journey as a freshman in Information Technology
            at Universitas Brawijaya. From the start, I’ve been passionate about
            web development, UI/UX design, and programming. I’m currently
            learning HTML, CSS, JavaScript, PHP, Laravel, and Figma. With strong
            curiosity and a drive to grow, I’m eager to contribute through
            meaningful digital projects.{" "}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/seribu_pulau.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/thera_art.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/life_sync.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/cerutu.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Last 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            At the end of 2024, I continued sharpening my skills in web
            development, UI/UX design, and modern programming. I explored
            various technologies and started building real-world projects that
            challenged both my logic and creativity.
          </p>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            This period marked the beginning of my journey into creating
            meaningful digital solutions—whether through clean code,
            user-centered interfaces, or collaborative teamwork. Here are some
            of the projects that reflect my growth.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/daniel.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/debora_craft.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/learn_java.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/samba.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm">
            Successfully deployed 5 new components as part of my frontend
            development practice.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Responsive Card Grid Component
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Modern Startup Landing Page Template
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ File Upload Feature with Progress Indicator
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Music Player UI Prototype (Design Exploration)
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm">
              ✅ Simple Registration Form with Validation
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 ">
            <img
              src="/images/portofolio_rizky.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/porto.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/cryptoholics.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/elia.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  const items = [
    { icon: <VscHome size={18} />, label: "", href: "#" },
    { icon: <VscPerson size={18} />, label: "", href: "#about" },
    { icon: <VscCode size={18} />, label: "", href: "#proyek" },
    {
      icon: <FaGithub size={18} />,
      label: "",
      href: "https://github.com/kbanget",
    },
    {
      icon: <FaInstagram size={18} />,
      label: "",
      href: "https://instagram.com/elsinurat_",
    },
  ];
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={20}
        sparkRadius={15}
        sparkCount={6}
        duration={420}
      >
        <div className="container mx-auto min-h-screen flex flex-col items-center justify-center">
          <div className="relative flex flex-col items-center justify-center h-[600px] py-10 md:py-18 px-4 md:px-10 max-w-2xl w-full mx-auto">
            <div className="flex flex-col items-start justify-start w-full ">
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <div className="flex flex-col items-start">
                  <SplitText
                    text="Hi,I'm Daniel Sinurat"
                    className="text-[50px] font-semibold text-center text-white"
                    delay={75}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <h1 className="text-[28px] text-white font-bold">
                    I'm Ready For Job
                  </h1>
                  <RotatingText
                    texts={[
                      "Web Developer",
                      "Web Designer",
                      "Web Programmer",
                      "Creator",
                    ]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#404040] text-white overflow-hidden py-0.5 
              sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{
                      type: "spring",
                      damping: 30,
                      stiffness: 400,
                    }}
                    rotationInterval={2000}
                  />
                </div>

                <BlurText
                  text="Saya merupakan seorang Mahasiswa Teknologi Informasi 2024 yang fokus pada pengembangan web, UI/UX design, dan pemrograman. Terbiasa menggunakan HTML, CSS, JavaScript, PHP, Laravel, dan Figma. Antusias belajar hal baru dan siap berkontribusi lewat solusi digital yang bermanfaat."
                  delay={100}
                  animateBy="words"
                  direction="bottom"
                  className="text-[18px] mb-10 text-white justify-start py-6"
                />
              </AnimatedContent>
            </div>
            <div className="left-0 bottom-0">
              <Spline scene="/assets/spline/scene.splinecode" />
            </div>
          </div>

          {/* GooeyNav pindah ke bawah dan fixed */}
          <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center py-4 bg-transparent">
            <GooeyNav
              items={items}
              particleCount={10}
              particleDistances={[50, 30]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={150}
              timeVariance={1500}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </div>
        <section id="about">
          <div className="w-full flex justify-center py-6">
            <SplitText
              text="Tentang Saya"
              className="text-5xl font-bold text-white mb-10"
              delay={100}
              duration={0.6}
              ease="power.out"
            />
          </div>

          <div className="bg-black">
            <div id="timeline-section">
              <Timeline data={timeline} />
            </div>
          </div>
        </section>

        

        <section
          id="proyek"
          className="container mx-auto min-h-[60vh] flex flex-col py-16"
        >
          <SplitText
            text="My Project"
            className="text-5xl font-bold text-white mb-10"
            delay={100}
            duration={0.6}
            ease="power.out"
          />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
            <div className="flex flex-col items-start justify-start self-start  w-full"></div>
            <div className="flex justify-end pr-16">
              <Lanyard position={[0, 0, 18]} gravity={[0, -50, 0]} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-4">
              <PinContainer title="Web Development" href="#">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    Web Development
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      Building modern and responsive web applications using the
                      latest technologies.
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
              </PinContainer>

              <PinContainer title="UI/UX Design" href="#">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    UI/UX Design
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      Creating beautiful and intuitive user interfaces with a
                      focus on user experience.
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500" />
                </div>
              </PinContainer>

              <PinContainer title="Programming" href="#">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    Programming
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      Developing efficient and maintainable code using modern
                      programming practices.
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500" />
                </div>
              </PinContainer>
            </div>
          </div>
        </section>
      </ClickSpark>
    </div>
  );
}
