import { useState } from 'react';
import ExpandableContent from './ExpandableContent';
import { GraduationCap, Briefcase, Users, BookOpen, ArrowUp, Award } from 'lucide-react';

// Education data
const education = [
  {
    id: "phd_philosophy",
    degree: "PhD in Philosophy (ongoing)",
    year: "2022-Present",
    institution: "Polish Academy of Sciences, Institute of Philosophy and Sociology, Graduate School of Social Research",
    thesis: "Working Title: \"Advancing Methodology of Scientific Discovering: Causal Discovery Methods, Meta-Creative Problem-Solving, and Cognitive Metascience\"",
    details: (
      <div className="text-sm space-y-2">
        <p>Doctoral research focused on developing theoretical frameworks and practical methodologies to understand and improve the process of scientific discovery itself.</p>
        <p>Supervisor: Prof. Marcin Miłkowski.</p>
      </div>
    )
  },
  {
    id: "masters_cognitive_science",
    degree: "Master's in Cognitive Science",
    year: "2018-2021",
    institution: "Jagiellonian University, Cracow, Faculty of Philosophy",
    thesis: "Thesis: \"Explaining scientific creativity by metacognitive mechanisms of complex problem solving\" (Defense: Sept 2021)",
    details: (
      <div className="text-sm space-y-2">
        <p>Interdisciplinary studies focusing on cognitive mechanisms of complex problem-solving and creativity. Grade point average: ~4.75. Grade on diploma: Very Good.</p>
        <p>Supervisor: PhD BEng Bipin Indurkhya, prof. UJ.</p>
      </div>
    )
  },
  {
    id: "masters_public_management",
    degree: "Master's in Public Management",
    year: "2017-2018",
    institution: "Jagiellonian University, Cracow, Faculty of Management and Social Communication",
    thesis: "Thesis: \"How to support the scientific activity of students? The unconscious action research 2016 – 2019\" (in Polish)",
    details: (
      <div className="text-sm space-y-2">
        <p>Specialisation: Management in the public and non-governmental sector. Focused on organizational learning, leadership, and action research. Grade point average: 4.65. Grade on diploma: Very Good.</p>
        <p>Supervisor: Prof. Grażyna Prawelska-Skrzypek.</p>
      </div>
    )
  },
  {
    id: "masters_philosophy",
    degree: "Master's in Philosophy",
    year: "2016-2019",
    institution: "Jagiellonian University, Cracow, Faculty of Philosophy",
    thesis: "Thesis: \"Is Ludwik Fleck explaining scientific discovery? The analysis of Ludwik Fleck's concept of thought style\" (in Polish)",
    details: (
      <div className="text-sm space-y-2">
        <p>Specialization in philosophy of science and scientific discovery. Grade point average: 4.76. Grade on diploma: Very Good.</p>
        <p>Supervisor: PhD Jerzy Gołosz, prof. UJ.</p>
      </div>
    )
  },
  {
    id: "bachelors_philosophy",
    degree: "Bachelor's in Philosophy",
    year: "2013-2016",
    institution: "Jagiellonian University, Cracow, Faculty of Philosophy",
    thesis: "Thesis: \"Selected aspects of the theory of scientific discovery: around the thought of Karl Popper, Thomas Kuhn and Elżbieta Pietruska-Madej\" (in Polish)",
    details: (
      <div className="text-sm space-y-2">
        <p>Foundation in core philosophical disciplines. Grade point average: 4.68. Grade on diploma: Very Good with Summa Cum Laude.</p>
        <p>Supervisor: PhD Jerzy Gołosz, prof. UJ.</p>
      </div>
    )
  },
  {
    id: "additional_studies_phys_astro_cs",
    degree: "Additional Studies in Physics, Astronomy, Computer Science",
    year: "2015-2017",
    institution: "Jagiellonian University, Cracow",
    focus: "Focus: Fundamentals of programming and mathematics, core physics and astronomy concepts.",
    details: (
      <div className="text-sm space-y-2">
        <p>Broadened scientific and technical understanding to complement philosophical inquiries into science.</p>
      </div>
    )
  }
];

// Professional Experience data
const professionalExperience = [
  {
    id: "interdisciplinary_expert_roles",
    position: "Interdisciplinary Expert, Group Rationality Specialist, Leader of Learning & Innovation",
    years: "2019-2023",
    organization: "Swarmcheck, Reason Drill, Optimum Pareto (Cracow, Poland)",
    achievement: "Key achievements: Led complex intersectoral discussions for policy recommendations; designed and implemented novel organizational strategies and tools for decision-making and self-organization.",
    details: (
      <div className="text-sm space-y-2">
        <p>Spearheaded initiatives at the intersection of technology, policy, and organizational development.</p>
        <p>Responsibilities & Projects:</p>
        <ul className="list-disc list-inside space-y-1 text-white/90">
          <li>Led intersectoral discussions for post-coal reforms in Silesia (Polish Ministry of Development Funds).</li>
          <li>Designed/delivered workshops using computer-assisted group intelligence for decision-making.</li>
          <li>Developed strategies for team self-organization and knowledge management.</li>
        </ul>
      </div>
    )
  },
  {
    id: "project_think_like_scientist",
    position: "Project Manager",
    years: "2019-2020",
    organization: "\"Myśl jak naukowiec!\" (\"Think like a scientist!\") Initiative",
    achievement: "Key achievements: Reached 2 million people; secured PLN 1 million co-financing (Ministry of Science); meta-science workshops led to statistically significant increase in meta-science knowledge and critical thinking for over 400 secondary school students.",
    details: (
      <div className="text-sm space-y-2">
        <p>Managed a major science popularization project (<a href="http://www.mysljaknaukowiec.pl" target="_blank" rel="noopener noreferrer" className="text-[#3D87CB] hover:underline">www.mysljaknaukowiec.pl</a>) aimed at popularizing the mechanisms of science and enhancing critical thinking. Responsibilities included strategic planning, budget management (PLN 1 million), team leadership, and public engagement.</p>
      </div>
    )
  }
];

// Community & Creative Engagement data
const communityEngagement = [
  {
    id: "opb_initiative",
    role: "Project Initiator and Coordinator",
    year: "2017-2019",
    production: "Undergraduate Research Projects (Oddolne Projekty Badawcze) - Jagiellonian University",
    details: (
      <div className="text-sm space-y-2">
        <p>Initiated and coordinated a program (<a href="http://www.opb.filozofia.uj.edu.pl" target="_blank" rel="noopener noreferrer" className="text-[#3D87CB] hover:underline">www.opb.filozofia.uj.edu.pl</a>) to increase student involvement in valuable research projects. Secured pro-quality subsidies and served as a member of the granting committee (budget ca. 50,000 PLN/year), leading to increased scientific achievements among students.</p>
      </div>
    )
  },
  {
    id: "student_leadership",
    role: "Student Representative & Leader",
    year: "2016-2019",
    production: "Jagiellonian University Student Governance",
    details: (
      <div className="text-sm space-y-2">
        <p>Active in student leadership roles:</p>
        <ul className="list-disc list-inside space-y-1 text-white/90">
          <li>Student Representative, Council of the Institute of Philosophy (2016-present): Major influence on the design of the new Master's programme.</li>
          <li>President, Scientific Association of Philosophy Students (2018-2019): Restored continuity in the organization's development.</li>
          <li>Chairman, Philosophy of Science Section of the Scientific Association of Philosophy Students (2016-2018): Founded and organized 9 scientific conferences.</li>
        </ul>
      </div>
    )
  },
  {
    id: "event_organisation",
    role: "Organiser",
    year: "2019",
    production: "XV Philosophical Meeting in Cracow",
    details: (
      <div className="text-sm space-y-2">
        <p>Took a leading role in organizing a significant philosophical conference, managing logistics and program development.</p>
      </div>
    )
  },
  {
    id: "theatre_and_dance",
    role: "Performer & Enthusiast",
    year: "A Decade of Engagement",
    production: "Theatre & Contact Improvisation",
    details: (
      <div className="text-sm space-y-2">
        <p>Spent a decade involved in theatre, which informs an engaging and dynamic presentation style. Passionate contact improvisation dancer, frequently participating in festivals and embracing expressive movement. These experiences also inspired explorations of creativity in science.</p>
      </div>
    )
  },
  {
    id: "other_engagements",
    role: "Facilitator, Mentor, Contributor",
    year: "Various",
    production: "Diverse Activities",
    details: (
      <div className="text-sm space-y-2">
        <p>Engaged in various other activities reflecting a commitment to sharing knowledge and fostering creativity:</p>
        <ul className="list-disc list-inside space-y-1 text-white/90">
          <li>Workshop for gifted youth: "Jak znaleźć cel (purpose) w nauce?" (June 2018).</li>
          <li>Co-authored winning application "Weźże!" for collective city creation (YouthKrakHack 2018).</li>
          <li>Ongoing mentorship for a colleague's research article (Ministry of Science and Higher Education scholarship funding).</li>
        </ul>
      </div>
    )
  }
];

// Scientific Outputs
const scientificOutputs = {
  preamble: (
    <div className="text-sm mb-4 italic">
      <p>Publishing was never my primary goal. My focus has always been on doing real, useful, and elegant work that contributes to our understanding of discovery and innovation. Publications, in my view, are a sign that some work was done—a certificate—but not the work itself. There's a fitting, and perhaps bitterly funny, irony that my first peer-reviewed article will likely be the one exploring conflicts of interest in academic publishing.</p>
    </div>
  ),
  conferencePresentations: [
    {
      id: "conf_prague_2024",
      citation: <p>Miłkoś, S. (2024, October). <i>Overcoming ignorance: meta-creative problem-solving as methodology of scientific discovering</i>. Polish-Czech National Academies of Science Workshop, Prague, Czech Republic.</p>
    },
    {
      id: "conf_ispsm_2024",
      citation: <p>Miłkoś, S. (2024). <i>Causal what? Theoretical dependence and methodological entanglement of computational causal discovery methods</i>. 1st Annual Web Conference of the International Society for the Philosophy of the Sciences of the Mind (Online).</p>
    },
    {
      id: "conf_bucharest_2023",
      citation: <p>Miłkoś, S. (2023, November). <i>Integrating causal discovery method at forefront of scientific practice</i>. Polish-Romanian National Academies of Science Workshop, Bucharest, Romania.</p>
    },
    {
      id: "conf_torun_2022",
      citation: <p>Miłkoś, S. (2022). <i>Will the Success of Causal Discovery Methods Herald the End of Hypothetical Thinking?</i> International Conference: Hypothesis in science, Toruń, Poland.</p>
    }
  ],
  authoredGrantProposals: [
    {
      id: "grant_era_chair",
      title: "ERA Chair Proposal: Cognitive Metascience Lab Establishment (Co-author)",
      details: (
        <div className="text-sm space-y-2">
          <p>Co-authored (with Marcin Miłkowski as lead) a proposal to establish a pioneering Cognitive Metascience Lab to inquire into science and foster the implementation of innovative science reforms. (Unsuccessful)</p>
        </div>
      )
    },
    {
      id: "grant_era_twinning",
      title: "ERA Twinning Proposal: Digital Metascience and Research Assessment Innovation (Co-author)",
      details: (
        <div className="text-sm space-y-2">
          <p>Co-authored a proposal to develop innovative methods to assess research quality using digital tools and metascience approaches. (Developed a chapter on novel research assessment approaches)</p>
        </div>
      )
    }
  ]
};

const PastSection = () => {
  return (
    <section id="past" className="min-h-screen past-gradient text-white relative py-20 px-6 md:px-16 lg:px-24">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Historical documents and timeline" 
          className="object-cover w-full h-full" 
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
          Earlier Times: Foundation & Training
        </h2>
        
        <p className="text-xl mb-12 md:w-4/5">
          My academic journey began with an undergraduate degree in Philosophy at Jagiellonian University, followed by multiple Master's degrees in Philosophy, Public Management, and Cognitive Science. Throughout this period, I developed a fascination with the cognitive processes behind scientific discovery, which became the focus of my PhD work at the Polish Academy of Sciences.
        </p>
        
        {/* Education Section */}
        <div className="mb-12">
          <h3 className="font-montserrat font-semibold text-2xl mb-6 flex items-center">
            <GraduationCap className="mr-3" /> Education
          </h3>
          
          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition duration-300 border border-white/20">
                <div className="mb-4">
                  <h4 className="font-montserrat font-semibold text-xl">{item.degree}</h4>
                  <p className="text-white/80">{item.year} | {item.institution}</p>
                </div>
                
                <p className="text-sm mb-3 font-medium">{item.thesis || item.focus}</p>
                
                <ExpandableContent buttonLabel="More Details" buttonCloseLabel="Less Details">
                  {item.details}
                </ExpandableContent>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="mb-12">
          <h3 className="font-montserrat font-semibold text-2xl mb-6 flex items-center">
            <Briefcase className="mr-3" /> Professional Experience
          </h3>
          
          <div className="space-y-6">
            {professionalExperience.map((item) => (
              <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition duration-300 border border-white/20">
                <div className="mb-4">
                  <h4 className="font-montserrat font-semibold text-xl">{item.position}</h4>
                  <p className="text-white/80">{item.years} | {item.organization}</p>
                </div>
                
                <p className="text-sm mb-3 font-medium">{item.achievement}</p>
                
                <ExpandableContent buttonLabel="More Details" buttonCloseLabel="Less Details">
                  {item.details}
                </ExpandableContent>
              </div>
            ))}
          </div>
        </div>
        
        {/* Community & Creative Engagement Section */}
        <div className="mb-12">
          <h3 className="font-montserrat font-semibold text-2xl mb-6 flex items-center">
            <Users className="mr-3" /> Community & Creative Engagement
          </h3>
          
          <div className="space-y-6">
            {communityEngagement.map((item) => (
              <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition duration-300 border border-white/20">
                <div className="mb-4">
                  <h4 className="font-montserrat font-semibold text-xl">{item.role}</h4>
                  <p className="text-white/80">{item.year} | {item.production}</p>
                </div>
                
                <ExpandableContent buttonLabel="More Details" buttonCloseLabel="Less Details">
                  {item.details}
                </ExpandableContent>
              </div>
            ))}
          </div>
        </div>

        {/* Scientific Outputs Section */}
        <div className="mb-12">
          <h3 className="font-montserrat font-semibold text-2xl mb-6 flex items-center">
            <BookOpen className="mr-3" /> Scientific Outputs
          </h3>
          
          {/* Preamble */}
          <div className="mb-6">
            {scientificOutputs.preamble}
          </div>
          
          {/* Conference Presentations */}
          <h4 className="font-montserrat font-semibold text-lg mb-3 flex items-center">
            <Award className="mr-2 h-4 w-4" /> Conference Presentations
          </h4>
          <div className="space-y-3 mb-8">
            {scientificOutputs.conferencePresentations.map((item) => (
              <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition duration-300 border border-white/20 text-sm">
                {item.citation}
              </div>
            ))}
          </div>
          
          {/* Grant Proposals */}
          <h4 className="font-montserrat font-semibold text-lg mb-3 flex items-center">
            <Award className="mr-2 h-4 w-4" /> Authored Grant Proposals
          </h4>
          <div className="space-y-4">
            {scientificOutputs.authoredGrantProposals.map((item) => (
              <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition duration-300 border border-white/20">
                <p className="text-sm mb-2 font-medium">{item.title}</p>
                
                <ExpandableContent buttonLabel="Details" buttonCloseLabel="Hide Details">
                  {item.details}
                </ExpandableContent>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mb-12">
          <a href="#future" className="flex items-center text-sm text-white/80 hover:text-white py-2 px-4 rounded bg-white/10 hover:bg-white/20 transition-colors">
            <span className="mr-2">Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PastSection;