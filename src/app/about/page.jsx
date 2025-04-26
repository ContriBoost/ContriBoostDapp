import Link from "next/link";
import Image from "next/image";
import CreateNowButton from "@/components/createNowButton"; // Import the new component

export const metadata = {
  title: "About | Contriboost",
  description: "Learn about Contriboost, a decentralized platform for community savings and funding.",
};

export default function About() {
  const teamMembers = [
    {
      name: "Alex Doe",
      role: "Founder & CEO",
      bio: "Passionate about decentralized finance and community empowerment.",
      image: "/img.jpeg", // Replace with actual image path
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      bio: "Blockchain expert with a focus on secure smart contracts.",
      image: "/img.jpg", // Replace with actual image path
    },
    {
      name: "Sam Lee",
      role: "Community Manager",
      bio: "Dedicated to building a vibrant and inclusive Contriboost community.",
      image: "/imgg.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          About Contriboost
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Save together, achieve together—Contriboost empowers communities with decentralized savings and funding solutions.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">
          Our Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <Image
                src="/mission.jpg" // Replace with actual image path
                alt="Illustration of a community saving together with Contriboost"
                width={500}
                height={300}
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
            <div>
              <p className="text-muted-foreground mb-4">
                Contriboost is a decentralized platform designed to bring communities together through rotating savings pools and goal-based funding. We believe in the power of collective financial support, enabling individuals to achieve their dreams while fostering trust and transparency.
              </p>
              <p className="text-muted-foreground">
                Built on blockchain technology, Contriboost ensures security, fairness, and accessibility for all users. Whether you’re saving for a big goal or supporting a community initiative, we’re here to make it happen—together.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-foreground mb-2">
                Rotating Savings Pools
              </h3>
              <p className="text-muted-foreground">
                Join or create savings pools where members contribute regularly and take turns receiving payouts.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-foreground mb-2">
                Goal-Based Funding
              </h3>
              <p className="text-muted-foreground">
                Set up funding goals and receive support from the community, or Create a personal Saving goals to achieve your dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-foreground mb-6 text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="p-6 bg-card rounded-lg shadow-sm text-center"
            >
              <div className="mb-4">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role} at Contriboost`}
                  width={160}
                  height={160}
                  className="w-40 h-40 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Join a savings pool or create your own funding goal today. Let’s achieve greatness together!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/pools"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            aria-label="Explore savings pools"
          >
            Explore Pools
          </Link>
          <CreateNowButton /> {/* Replace Link with CreateNowButton */}
        </div>
      </section>
    </div>
  );
}