import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  Compass,
  Lightbulb,
  Users,
  Globe,
  ChartGantt,
  FlaskRound,
  Brain,
  ChevronDown,
} from "lucide-react";

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type EmailFormValues = z.infer<typeof emailSchema>;

const FutureSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: EmailFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/subscribe", data);
      toast({
        title: "Thank you!",
        description: "You've been subscribed to updates about future projects.",
        duration: 5000,
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Subscription failed",
        description:
          "There was an issue with your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="future"
      className="min-h-screen future-gradient text-white relative flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Abstract visualization of connected networks"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="font-montserrat font-bold text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight">
          The future of science lies not just in what we discover, but how we
          do it, and why
        </h1>

        <p className="text-xl md:text-2xl font-light mb-12 md:w-4/5">
          Science advances humanity, yet we have limited understanding of how
          scientific breakthroughs actually occur. By studying and improving the
          discovery process itself, we can create a reinforcing loop: better
          understanding leads to improved practices, which enable more effective
          research methods, accelerating further insights into discovery. This
          virtuous cycle, combined with the digital transformation of scientific
          practice, has the potential to dramatically enhance humanity's
          capabilities to address our most significant challenges.
        </p>

        <div className="space-y-6 mb-16">
          <h2 className="font-montserrat font-semibold text-2xl mb-4">
            Key Directions
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Compass className="text-[#45C7B3] mt-1 mr-3 h-5 w-5" />
              <span>
                Advance the theory and methodology of scientific discovery
              </span>
            </li>
            <li className="flex items-start">
              <Lightbulb className="text-[#45C7B3] mt-1 mr-3 h-5 w-5" />
              <span>
                Create tools for studying and empowering brakethroughs
              </span>
            </li>
            <li className="flex items-start">
              <Users className="text-[#45C7B3] mt-1 mr-3 h-5 w-5" />
              <span>
                Cultivate a community dedicated to the science of discovery.
              </span>
            </li>
            <li className="flex items-start">
              <Globe className="text-[#45C7B3] mt-1 mr-3 h-5 w-5" />
              <span>
                Apply these insights to solve humanity's most pressing
                challenges
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-2xl mb-12">
          <h3 className="font-montserrat font-medium text-xl mb-4">
            Future Projects
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mr-4 text-[#45C7B3] text-xl">
                <ChartGantt className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Scientists for Science
                </h4>
                <p className="text-sm opacity-90">
                  A pioneering cohort of researchers who volunteer to have their
                  discovery processes studied broadly, deeply, and
                  longitudinally. (initial conceptualisation, seeking
                  collaborators)
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 text-[#45C7B3] text-xl">
                <FlaskRound className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Discovery Platform</h4>
                <p className="text-sm opacity-90">
                  A digital environment where scientists conduct research while
                  simultaneously receiving tools to enhance their discovery
                  process. The platform provides real-time support while
                  generating valuable data on discovery patterns, creating a
                  virtuous cycle of improvement. (advanced conceptualisation,
                  seeking collaborators)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Link */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 md:p-8 max-w-md">
          <h3 className="font-montserrat font-semibold text-xl mb-2">
            This is an ambitious vision, and collaboration is key
          </h3>
          <p className="mb-4">Join the future of scientific discovery.</p>

          <a
            href="mailto:szymon.milkos@gmail.com"
            className="inline-block bg-[#45C7B3] hover:bg-[#2A9D8F] text-white font-montserrat font-medium py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <a href="#present" className="hover:text-white">
          <ChevronDown />
        </a>
      </div>
    </section>
  );
};

export default FutureSection;
