import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 relative overflow-hidden bg-[#E8E8E4]"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col">
        {/* Header with Title and Photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-10">
          {/* Left Column - Title */}
          <div>
            <h1 className="font-montserrat font-bold text-3xl md:text-5xl lg:text-6xl mb-0 leading-tight text-[#1A365D]">
              I inquire into scientific discovery to help others innovate
            </h1>
          </div>

          {/* Right Column - Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[300px] h-[400px] bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="attached_assets/personal_page_photo_mil.jpg"
                alt="Academic portrait"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
                style={{ maxWidth: 'auto', height: 'auto' }}
              />
            </div>
          </div>
        </div>

        {/* Full Width Personal Statement */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-xl mb-4/5 text-[#1A365D]/90 leading-tight">
            How breakthroughs and innovations really happen? How do scientist create true
            theories, and how do we – as individuals, oragnisations and societies – define, redefine, and solve our most complex problems? How can we
            study and improve scientific discovery practice itself?
            <br /> <br />
            As a metascientist and methodologist, I take a transdisciplinary approach, building on
            my foundations in philosophy, cognitive science, and public
            management/leadership. I bridge academic research, societal issues
            and business implementation, having led a scientific practice
            popularization project reaching millions and collaborated with
            organizations on innovative processes and AI products.
            <br /> <br />My work provides frameworks, tools, and initiatives for
            studying and improving scientific discovery practice. The world
            urgently needs better science, and improved discovery methods can
            help us address vital challenges.
          </p>
          <p className="text-lg text-[#1A365D]/90"></p>
        </div>

        {/* Section Navigation */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
            <a href="#future" className="no-underline">
              <Button className="w-full md:w-auto bg-[#45C7B3] hover:bg-[#2A9D8F] text-white flex flex-col items-center justify-center py-8 px-10">
                <span className="font-semibold text-xl leading-none">FUTURE</span>
                  <span className="font-semibold text-s opacity-90 leading-none">
                  Vision and upcoming projects
                </span>
              </Button>
            </a>

            <a href="#present" className="no-underline">
              <Button className="w-full md:w-auto bg-[#3D87CB] hover:bg-[#2A6CA0] text-white flex flex-col items-center justify-center py-8 px-10">
                <span className="font-semibold text-xl leading-none">PRESENT</span>
                <span className="font-semibold text-sm opacity-90 leading-none">
                  Current work and latest updates
                </span>
              </Button>
            </a>

            <a href="#past" className="no-underline">
              <Button className="w-full md:w-auto bg-[#0A2342] hover:bg-[#061628] text-white flex flex-col items-center justify-center py-8 px-10">
                <span className="font-semibold text-xl leading-none">PAST</span>
                  <span className="font-semibold text-s opacity-90 leading-none">
                  Background and achievements
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
