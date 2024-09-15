import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mrg,
    shomigo,
    lottus,
    khamis,
    pacific,
    go,
    java,
    postgres,
    spring,
    mrgtravel,
    ventures,
    next,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Go",
      icon: go,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Spring Boot",
      icon: spring,
    },
    {
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern",
      company_name: "The MRG Group",
      icon: mrg,
      iconBg: "#000000",
      date: "May 2024 - Aug 2024",
      points: [
        "Led the development of the refactored MRG Travel website using Next.js, integrating Google APIs to automate travel consultant bookings, leading to a $12,000+/month increase in travel package sales.",
        "Configured a CI/CD pipeline with a Dockerized MongoDB test database instance and developed 100+ unit and integration tests for GraphQL resolvers using the Go testing framework, increasing code coverage by 51%.",
        "Migrated 15+ Nest.js REST endpoints to GraphQL APIs for an internal hospitality management tool across web and mobile, decreasing response times by 22%.",
        "Leveraged Sentry SDK to proactively identify and resolve 20+ bugs in GraphQL API endpoints and React.js frontend components.",
        "Shipped 10+ web and mobile features within the AdmitOne Ticketing Platform, utilzing React.js, React Native, and Go to enhance user experience."
      ],
    },
    {
      title: "Mobile Developer",
      company_name: "Shomigo",
      icon: shomigo,
      iconBg: "#FFFFFF",
      date: "July 2024 - Present",
      points: [
        "Developed mobile authentication and onboarding flow, leveraging React Native and Figma for the UI, Supabase for user authentication, and GPT-4 DALL-E model for image generation.",
        "Wrote a Python script to handle pagination for web scraping online products across 5+ brands, reducing scraping time by 42%."
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Lottus",
      icon: lottus,
      iconBg: "#FFFFFF",
      date: "May 2024 - July 2024",
      points: [
        "Migrated a static deployment from Heroku to AWS Elastic Beanstalk and designed a CI/CD pipeline to automate the release process, reducing deployment time by 75%.",
        "Integrated Stripe API into a Node.js backend to allow for user payments, enabling fiat transactions and support for 5+ cryptocurrencies.",
        "Conducted rigorous testing of 15+ custom and third-party APIs using Postman, ensuring compliance with specifications and enhancing system reliability.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Khamis Towing & Roadside Assistance",
      icon: khamis,
      iconBg: "#FFFFFF",
      date: "Feb 2024 - April 2024",
      points: [
        "Designed and implemented a full-stack web application to manage 1000+ customers per month, reducing task downtime by 90% and driving the company’s expansion from 1 to 4 cities, with a 300% increase in clients.",
        "Utilized React.js for the UI, Express.js and Node.js for back-end server operations, and integrated a MongoDB database for effective data storage solutions, ensuring organized data management.",
        "Developed a thorough testing suite of 50+ unit and integration tests using Jest and Supertest.",
      ],
    },
    {
      title: "Information Technology Analyst",
      company_name: "Pacific Reach",
      icon: pacific,
      iconBg: "#FFFFFF",
      date: "June 2023 - Aug 2023",
      points: [
        "Efficiently resolved a backlog of 500+ Helpdesk tickets, leveraging Azure Active Directory and implementing technology upgrades at 20+ national sites, enhancing system efficiency and user experience.",
        "Developed and executed a detailed plan to deploy two-factor authentication (2FA) for the Pacific Reach organization using Azure’s robust security services, fortifying the security framework for 200+ users."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "I had the pleasure of mentoring Wasif during his internship at MRG, and I can confidently say he is an exceptionally talented developer. His technical skills are impressive, as evidenced by his quick mastery of technologies like Next.js, Go and MongoDB. Beyond his technical acumen, Wasif exhibited a remarkable capacity for learning and growth, eagerly embracing new tools and methodologies to enhance his contributions (even mastering the art of exiting from Vim!). He consistently showed enthusiasm in tackling any challenge we presented, whether it was a simple bug fix, enhancing our unit tests, releasing a new feature, or even field testing our app at a live event. His strong work ethic made him an invaluable asset to our team. I wholeheartedly recommend Wasif for any future opportunities.",
      name: "Chad Mardini",
      designation: "Software Architect + Lawyer",
      company: "The MRG Group",
      image: null,
    }
  ];
  
  const projects = [
    {
      name: "MRG Travel",
      description:
        "Web-based platform that allows users to explore 50+ destinations and book appointments with MRG's travel consultants.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "orange-text-gradient",
        },
        {
          name: "googleapis",
          color: "green-text-gradient",
        },
      ],
      image: mrgtravel,
      deploy_link: "https://www.travelmrg.com/"
    },
    {
      name: "McGill Ventures",
      description:
        "Technology Portfolio for McGill Ventures showcasing their team, event highlights, club partners, etc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "orange-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient"
        },
      ],
      image: ventures,
      source_code_link: "https://github.com/wasifsomji/McGillVentures",
      deploy_link: "https://mcgillvc.ca/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };