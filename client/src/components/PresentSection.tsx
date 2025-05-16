import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  FilePen,
  Presentation,
  Handshake,
  Code,
  ExternalLink,
  Mail,
  FileImage,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { 
  FaFilePdf, 
  FaFilePowerpoint, 
  FaFileAlt, 
  FaImage, 
  FaInfoCircle, 
  FaEnvelope, 
  FaExternalLinkAlt, 
  FaComments, 
  FaBullhorn 
} from 'react-icons/fa';

// Project data structure
type CTA = {
  text: string;
  link: string;
  icon?: string;
  note?: string;
};

type Project = {
  id: string;
  tags: string[];
  title: string;
  short_description: string;
  long_description: string;
  keywords: string[];
  cta: CTA[];
};

// Define update type to avoid TypeScript errors
interface Update {
  id: number;
  icon: React.ReactNode;
  title: string;
  date: string;
  description?: string;
  link?: { text: string; url: string };
}

// Map icon names to components
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, JSX.Element> = {
    'FaFilePdf': <FaFilePdf className="text-white mr-2 h-4 w-4" />,
    'FaFilePowerpoint': <FaFilePowerpoint className="text-white mr-2 h-4 w-4" />,
    'FaFileAlt': <FaFileAlt className="text-white mr-2 h-4 w-4" />,
    'FaImage': <FaImage className="text-white mr-2 h-4 w-4" />,
    'FaInfoCircle': <FaInfoCircle className="text-white mr-2 h-4 w-4" />,
    'FaEnvelope': <FaEnvelope className="text-white mr-2 h-4 w-4" />,
    'FaExternalLinkAlt': <FaExternalLinkAlt className="text-white mr-2 h-4 w-4" />,
    'FaComments': <FaComments className="text-white mr-2 h-4 w-4" />,
    'FaBullhorn': <FaBullhorn className="text-white mr-2 h-4 w-4" />
  };

  return iconMap[iconName] || <FileText className="text-white mr-2 h-4 w-4" />;
};

// Project data
const projects: Project[] = [
  {
    id: "phd_project_overall",
    tags: ["Leading", "Finalizing", "Dissertation"],
    title: "PhD Project",
    short_description: "Advancing the methodology of scientific discovery through an integrated study of Causal Discovery Methods, Meta-Creative Problem-Solving, and Cognitive Metascience.",
    long_description: "This dissertation aims to understand and advance the methodology of scientific discovery. It uses Causal Discovery Methods (CDMs) as a lens to study and improve scientific practice, introduces Meta-Creative Problem-Solving (MCPS) as a novel theory of how scientists overcome ignorance at the frontiers of discovery, and pioneers a cognitive metascience investigation to improve theoretical practices in science.",
    keywords: ["Scientific Discovery", "Methodology", "Causal Discovery", "Meta-Creative Problem-Solving", "Cognitive Metascience", "PhD"],
    cta: [
      {
        text: "View Prospectus",
        link: "link_to_advancing_methodology_document.pdf",
        icon: "FaFilePdf"
      }
    ]
  },
  {
    id: "article_cda_adoption",
    tags: ["Leading", "Draft Almost Ready", "Article"],
    title: "Widespread Adoption of Causal Discovery Algorithms Through Theoretical Practice Checklist",
    short_description: "Proposing a 'Theoretical Practice Checklist' to improve the trustworthiness and integration of Causal Discovery Algorithm (CDA) results in scientific practice.",
    long_description: "This study aims for an impactful understanding of scientific discovery practice using Causal Discovery Algorithms (CDAs). Despite their potential, widespread CDA adoption is hindered by conceptual confusion and problems merging domain-specific theories with the causal framework, leading to uncertain trustworthiness of results. This paper develops a fundamental causal assumption to provide external validity criteria and a central methodological definition.",
    keywords: ["Causal Discovery Algorithms", "CDA", "Theoretical Practice", "Scientific Methodology", "Validity", "Confidence Assessment", "Interdisciplinary Work"],
    cta: [
      {
        text: "View Slides",
        link: "link_to_cda_adoption_slides_cut.pdf",
        icon: "FaFilePowerpoint"
      },
      {
        text: "Comment Draft",
        link: "#",
        icon: "FaComments",
        note: "Expected: July 2024"
      }
    ]
  },
  {
    id: "article_mcps_theory",
    tags: ["Leading", "In Preparation", "Article"],
    title: "Overcoming Ignorance: Meta-Creative Problem-Solving as Theory and Methodology of Scientific Discovery",
    short_description: "Introducing Meta-Creative Problem-Solving (MCPS), a new concept to study and improve inquiry practices as they become intelligent at the frontiers of knowledge.",
    long_description: "At the frontier of knowledge, we often feel uncertain not just about a subject, but also about how to proceed with discovery. This work introduces Meta-Creative Problem-Solving (MCPS), a new concept designed to study and improve inquiry practices and norms as they become intelligent. MCPS involves generating variations within epistemic activities and evaluating consequent changes in relation to the subject of inquiry, guided by metacognitive feelings.",
    keywords: ["Meta-Creative Problem-Solving", "MCPS", "Scientific Discovery", "Innovation", "Metacognition", "Epistemology", "Methodology"],
    cta: [
      {
        text: "View Draft",
        link: "#",
        icon: "FaFileAlt",
        note: "Expected: August 2024"
      },
      {
        text: "View Poster",
        link: "link_to_mcps_poster.pdf",
        icon: "FaImage"
      }
    ]
  },
  {
    id: "paper_ejps_pursuit_worthiness",
    tags: ["Leading", "Drafting", "Article"],
    title: "Pursuit Worthiness: Normal vs. Revolutionary Science",
    short_description: "A philosophical paper arguing that practice-focused epistemologies may inadvertently favor normal science over revolutionary science.",
    long_description: "This paper responds to the European Journal for Philosophy of Science's call on the 'Pursuit Worthiness of Experiments.' It argues that philosophical positions emphasizing clear, explicit practices and norms inherently promote 'normal science' paradigms. This is because in 'revolutionary science,' the very norms and practices of discovery are often emergent and not yet codified, potentially leading to such work being undervalued by practice-centric evaluation.",
    keywords: ["Philosophy of Science", "Pursuit Worthiness", "Normal Science", "Revolutionary Science", "Scientific Practice", "Epistemology", "Discovery Norms"],
    cta: [
      {
        text: "View Call for Papers",
        link: "link_to_ejps_call_for_papers.url",
        icon: "FaBullhorn"
      },
      {
        text: "Read Draft",
        link: "#",
        icon: "FaFileAlt",
        note: "Expected: Very Soon"
      }
    ]
  },
  {
    id: "app_causal_mapping",
    tags: ["Leading", "Advanced Conceptualization", "App"],
    title: "Causal Mapping App",
    short_description: "A collaborative tool for creating preliminary causal graphs, essential for applying formal causal frameworks or Causal Discovery Algorithms.",
    long_description: "This application facilitates the collaborative construction of initial causal maps. Users can define variables and invite participants to add suspected causal relationships, specifying direction, strength, polarity, and their reasoning. The app also prompts users to assess their confidence in the absence of links they didn't specify. Finally, individual inputs are aggregated to generate a summary graph, highlighting areas of consensus and disagreement.",
    keywords: ["Causal Mapping", "Collaborative Tool", "Causal Discovery", "Problem Structuring", "Intuitive Models", "Decision Support"],
    cta: [
      {
        text: "Express Interest / Learn More",
        link: "mailto:szymon.milkos@gmail.com?subject=Interest%20in%20Causal%20Mapping%20App",
        icon: "FaEnvelope"
      }
    ]
  }
];

// News updates
const updates: Update[] = [
  {
    id: 1,
    icon: <FilePen />,
    title: "Published working paper on discovery heuristics",
    date: "May 2, 2023",
    link: { text: "View paper (Google Doc)", url: "#" }
  },
  {
    id: 2,
    icon: <Presentation />,
    title: "Presented findings at International Science of Discovery Conference",
    date: "April 17, 2023",
    link: { text: "View slides", url: "#" }
  },
  {
    id: 3,
    icon: <Handshake />,
    title: "New collaboration with Cognitive Science Institute",
    date: "March 10, 2023",
    description: "Joint research project on mental models in scientific reasoning"
  },
  {
    id: 4,
    icon: <Code />,
    title: "Released version 0.2 of the Causal Maps tool",
    date: "February 28, 2023",
    link: { text: "Try the new version", url: "#" }
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[300px] md:min-w-[360px] max-w-md flex-shrink-0 hover:bg-white/20 transition duration-300 border border-white/20">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span 
            key={index} 
            className="inline-block bg-[#3D87CB]/80 text-xs rounded-full px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-montserrat font-semibold text-xl pr-8">{project.title}</h4>
        <button 
          className="text-white/70 hover:text-white mt-1 flex-shrink-0" 
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Collapse project details" : "Expand project details"}
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      
      {project.short_description && (
        <p className="text-sm mb-4 text-white/90">{project.short_description}</p>
      )}
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Long Description */}
            <div className="mb-4 bg-white/5 p-3 rounded-lg">
              <p className="text-sm">{project.long_description}</p>
            </div>
            
            {/* Keywords */}
            {project.keywords.length > 0 && (
              <div className="mb-4">
                <p className="text-xs uppercase text-white/60 mb-1">Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {project.keywords.map((keyword, index) => (
                    <span key={index} className="text-xs bg-white/5 rounded px-2 py-1">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Call to Action Buttons */}
            {project.cta.length > 0 && (
              <div className="space-y-2 mt-4">
                {project.cta.map((action, index) => (
                  <div key={index} className="flex items-center">
                    {/* If link is a placeholder, show the note instead of making it clickable */}
                    {action.link === "#" ? (
                      <div className="flex items-center text-white/70">
                        {action.icon && getIconComponent(action.icon)}
                        <span className="text-sm">{action.text}</span>
                        {action.note && (
                          <span className="ml-2 text-xs bg-white/10 px-2 py-0.5 rounded">
                            {action.note}
                          </span>
                        )}
                      </div>
                    ) : (
                      <a 
                        href={action.link} 
                        className="flex items-center text-white hover:text-[#45C7B3] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {action.icon && getIconComponent(action.icon)}
                        <span className="text-sm">{action.text}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PresentSection = () => {
  return (
    <section
      id="present"
      className="min-h-screen present-gradient text-white relative py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Scientist working on research visualization"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
          At Present: From Research to Impact
        </h2>

        <p className="text-xl mb-12 md:w-4/5">
          I am currently finalizing my PhD on causal discovery algorithms under the supervision of <a
            href="https://marcinmilkowski.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#45C7B3]"
          >
            Marcin Miłkowski
          </a>{" "}
          at the Polish Academy of Sciences. I
          collaborate with a pioneering international group of{" "}
          <a
            href="https://www.nature.com/articles/s41562-023-01786-4"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#45C7B3]"
          >
            psychologists of science
          </a>{" "}
          led by Balazs Aczel.
          <br />  <br />
          After 10 years of research, I have developed a new theory that
          explains what happens at the forefront of science. The methodology of{" "}
          <span className="font-bold"> meta-creative problem-solving</span> can
          help understand — and guide — how discovery practices and norms
          originate and evolve at the edge of knowledge. If you're facing a bottleneck problem at the frontier of discovery or innovation, I'm open to discussing how this approach might help.
        </p>

        <div className="mb-16">
          <h3 className="font-montserrat font-semibold text-2xl mb-6">
            Ongoing Projects
          </h3>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="flex justify-between items-center mb-6">
            <h3 className="font-montserrat font-semibold text-2xl">News</h3>
            <span className="text-sm bg-white/20 rounded-full px-3 py-1">
              Jan 2023 - May 2023
            </span>
          </div>

          <div className="space-y-4 mb-8 bg-white/5 p-6 rounded-xl">
            {updates.map((update) => (
              <div
                key={update.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition duration-300"
              >
                <div className="flex items-start">
                  <div className="text-white text-xl mt-1 mr-4">
                    {update.icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-medium">{update.title}</h4>
                      <span className="text-xs bg-white/20 rounded-full px-2 py-0.5">
                        {update.date}
                      </span>
                    </div>
                    {update.description ? (
                      <p className="text-sm opacity-90">{update.description}</p>
                    ) : null}
                    {update.link && (
                      <a
                        href={update.link.url}
                        className="text-sm text-white hover:text-[#45C7B3] hover:underline"
                      >
                        {update.link.text}{" "}
                        <span className="ml-1 text-xs">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-end mt-6">
              <button className="flex items-center text-sm text-white/80 hover:text-white py-1 px-3 rounded bg-white/10 hover:bg-white/20 transition-colors">
                Older <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <a href="#past" className="hover:text-white">
          <ChevronDown />
        </a>
      </div>
    </section>
  );
};

export default PresentSection;