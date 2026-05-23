type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const blogPosts: Record<
  string,
  {
    title: string;
    category: string;
    description: string;
    content: string[];
  }
> = {
  "future-of-embedded-systems": {
    title: "The Future of Embedded Systems in Smart Industries",

    category: "Embedded Systems",

    description:
      "Explore how embedded systems are shaping industrial automation, smart devices, and next-generation engineering innovation.",

    content: [
      "Embedded systems are transforming modern industries through intelligent automation and connected infrastructure.",

      "From industrial IoT to real-time automation systems, embedded technologies are enabling scalable and efficient engineering ecosystems.",

      "Hardvanta Technologies LLP focuses on developing advanced embedded architectures, firmware systems, and intelligent hardware integration solutions.",

      "As industries continue moving toward smart manufacturing and intelligent systems, embedded engineering will remain a core pillar of innovation.",
    ],
  },

  "ai-driven-industrial-automation": {
    title: "AI-Driven Automation for Industrial Engineering",

    category: "Artificial Intelligence",

    description:
      "Understand how Artificial Intelligence is improving industrial automation and intelligent engineering systems.",

    content: [
      "Artificial Intelligence is revolutionizing industrial automation through predictive systems and intelligent decision-making.",

      "AI-driven automation improves operational efficiency, predictive maintenance, and smart manufacturing processes.",

      "Hardvanta Technologies LLP integrates AI technologies into industrial engineering solutions for scalable intelligent systems.",

      "The future of industrial engineering lies in combining AI, IoT, and embedded systems for fully connected automation ecosystems.",
    ],
  },

  "pcb-design-best-practices": {
    title: "PCB Design Best Practices for Modern Hardware Systems",

    category: "PCB Design",

    description:
      "Professional PCB design strategies for scalable electronics and intelligent hardware systems.",

    content: [
      "PCB design plays a critical role in modern electronics engineering and intelligent hardware systems.",

      "Efficient PCB architecture improves system reliability, power optimization, and hardware scalability.",

      "Hardvanta Technologies LLP develops intelligent PCB solutions optimized for embedded systems and industrial devices.",

      "Modern engineering demands compact, secure, and scalable PCB designs for next-generation connected systems.",
    ],
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = blogPosts[slug];

  if (!post) {
    return (
      <main className="blog-post-page">
        <section className="blog-post-hero">
          <div className="blog-post-content">
            <p className="section-tag">BLOG NOT FOUND</p>

            <h1>Article Not Available</h1>

            <p>The requested blog article could not be found.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="blog-post-page">
      {/* HERO */}

      <section className="blog-post-hero">
        <div className="blog-post-content">
          <p className="section-tag">{post.category}</p>

          <h1>{post.title}</h1>

          <p>{post.description}</p>
        </div>
      </section>

      {/* CONTENT */}

      <section className="blog-post-section">
        <div className="blog-post-container">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="blog-post-cta">
        <h2>Innovate Today. Engineer Tomorrow.</h2>

        <p>
          Hardvanta Technologies LLP builds intelligent engineering solutions
          through research, AI, IoT, and Embedded Systems.
        </p>
      </section>
    </main>
  );
}
