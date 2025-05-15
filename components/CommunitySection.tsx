import {
  MessageCircle,
  Briefcase,
  BookOpen,
  Heart,
  Sparkles,
} from "lucide-react";

export default function CommunitySection() {
  const features = [
    {
      icon: <Briefcase className="w-6 h-6 text-[#9FEF00]" />,
      title: "Opportunities",
      description:
        "Get Internships and Job opportunities and gain experience while you learn.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#9FEF00]" />,
      title: "Free Resources",
      description:
        "Get Free resources related to Designing and Development from the community.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#9FEF00]" />,
      title: "Help & Reviews",
      description:
        "Get your portfolio and projects reviewed by Industry experts and mentors.",
    },

    {
      icon: <MessageCircle className="w-6 h-6 text-[#9FEF00]" />,
      title: "Networking",
      description:
        "Connect with like-minded professionals and grow your professional network.",
    },
  ];

  return (
    <section className=" text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left side - Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="dark:bg-[#0b0b0e] border bg-white rounded-2xl p-6 hover:border-gray-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl text-black dark:text-white font-medium mb-2">
                  {feature.title}
                </h3>
                <p className="text-black dark:text-white">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right side - Community info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-[#9FEF00]" />
              <span className="text-sm uppercase text-[#9FEF00] tracking-wider font-medium">
                COMMUNITY WORK
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl text-black dark:text-white font-medium mb-6">
              Building a Tech Community
            </h2>

            <p className="text-black dark:text-white mb-12">
              I founded Design & Code which is a global community with a mission
              to connect designers and developers to create a happy community
              eager to learn, innovate and grow together. We welcome all
              designers and developers: beginners, intermediates, and experts
              willing to learn together. We encourage sharing resources and
              learning experiences, organizing events, and providing feedback
              for our members to grow as they learn.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-1 text-black dark:text-white">
                  5k+
                </h3>
                <p className="text-gray-400">Community Members</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-1 text-black dark:text-white">
                  25+
                </h3>
                <p className="text-gray-400">Events conducted</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-1 text-black dark:text-white">
                  4
                </h3>
                <p className="text-gray-400">Years</p>
              </div>
            </div>

            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
