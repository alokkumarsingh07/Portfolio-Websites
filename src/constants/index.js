import React from "react";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const MAIN_CONTENT = `I am a passionate forent-end developer with a knack for crafting robust and scalable web applications. With 1 YEARS of hands-on experience, I have honed my skills in front-end technologies like ReactJs. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of experience, I have worked with a technologies, like React. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy social active, exploring new places, and practicing martial arts.`;

export const EXPERIENCES = [
  {
    year: "Sep 2022 - Dec 2022",
    role: "Web Developer Intern",
    company: "Ethnotech Academic Solutions",
    description: `Collaborated with the development team to implement new features, debug issues, and improve overall website performance.`,
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },
  {
    title: "Mail Box",
    image: project2,
    description:
      "This is a Mailbox Client App built using React, Redux, and Firebase backend. It allows users to send, receive, delete, and star emails.",
    technologies: ["HTML", "ReactJS", "JavaScript", "Tailwind"],
  },
  {
    title: "Evil Ball",
    image: project3,
    description:
      "A game that utilize javascript and an animation API to draw moving balls on the canvas and uses keyboard input to eat the balls.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Quiz App",
    image: project4,
    description:
      "Developed a quiz game web application to test your technical skills such as Java, Python or C++.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Bengaluru, India ",
  phoneNo: "+91 6201089990",
  email: "kalok8841@gmail.com",
};
