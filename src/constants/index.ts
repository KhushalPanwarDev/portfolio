import PortfolioImage from "../assets/projects/PortfolioImage.png";
import ClientsProjectImage from "../assets/projects/ClientsProjectImage.jpg";

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, typescript,redux. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js,typescript and redux. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "JUNE 2023 - Present",
    role: "Frontend Developer",
    company: "Webkalakaar Pvt Ltd",
    description: `Developing responsive and user-friendly web applications using modern frontend technologies. Collaborating with cross-functional teams to design and implement new features. Focusing on creating efficient, scalable, and maintainable code. Integrating frontend interfaces with backend APIs and databases. Continuously learning and adapting to new technologies and best practices in web development.`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Typescript",
      "Scss",
      "Antd library",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Product based project",
    image: ClientsProjectImage,
    description: [
      "Developed a robust and user-friendly web application using React, TypeScript, and Ant Design",
      "Implemented comprehensive user authentication system with signup and login functionalities",
      "Created features for managing workspaces and rooms",
      "Designed and built an interactive whiteboard feature enabling real-time collaboration among team members",
      "Integrated a chat interface for instant communication within workspaces",
      "Focused on developing a cohesive and intuitive user interface for seamless user experience",
      "Utilized Redux for efficient state management in large-scale applications"
    ],
    technologies: ["React", "Typescript", "Redux", "Tailwind css", "Scss", "Antd library"],
  },
  {
    title: "Client based project",
    image: ClientsProjectImage,
    description: [
      "Developed a collaborative workspace platform using React, TypeScript, and Ant Design, showcasing proficiency in creating complex, user-friendly web applications",
      "Customized and implemented unique features to meet specific client requirements in various web applications",
      "Demonstrated strong problem-solving skills by delivering tailored solutions for diverse client needs",
      "Employed SCSS and Tailwind CSS to create responsive and accessible designs across multiple client projects",
      "Maintained a focus on code quality, performance optimization, and best practices in React and TypeScript development",
      "Created an intuitive and cohesive user interface, ensuring a seamless user experience across the platform"
    ],
    technologies: ["React", "Typescript", "Redux", "Tailwind css", "Scss", "Antd library"],
  },
  {
    title: "Portfolio Website",
    image: PortfolioImage,
    description:
    [
      "Developed a dynamic, interactive personal portfolio website showcasing professional projects and skills",
      "Utilized React for building a modular, component-based user interface",
      "Implemented responsive design ensuring optimal viewing across all device sizes",
      "Created an interactive project showcase with filterable categories",
      "Integrated smooth animations and transitions using Framer Motion",
    ],
    technologies: ["React", "Tailwind css", "Framer motion"],
  },
];

export const CONTACT = {
  address: "Ganesh Nagar 2 Shyam Nagar Benar Road Jaipur Rajasthan",
  phoneNo: "+91 8058578020",
  email: "khushalPanwar0669@gmail.com",
};
