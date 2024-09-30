import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Blog Post",
  description: "Blogs For Developer ",
};

const BlogPost = ({ params }) => {
  const singleBlog = developers.find((blog) => blog.id == params.id);

  if (singleBlog) {
    metadata.title = singleBlog.title;
  }

  return (
    <div className="w-4/5 mx-auto my-10">
      <section>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <Image
              alt=""
              width={500}
              height={500}
              layout="responsive"
              src={singleBlog?.image}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                {singleBlog?.title}{" "}
              </h1>
              <p>{singleBlog?.description}</p>
              <div className="flex flex-col justify-between ">
                <p> author : {singleBlog?.author}</p>
                <p>date : {singleBlog?.date}</p>
              </div>
         
              <ul className="flex gap-3 my-1">
                {singleBlog?.tags?.map((i, k) => (
                  <li key={k}>#{i}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

const developers = [
  {
    id: 1,
    title: "Frontend Developer",
    author: "Alice Johnson",
    date: "2024-09-30",
    description:
      "Experienced in building responsive and interactive web applications using React and Next.js.",
    tags: ["Frontend", "React", "Next.js"],
    image:
      "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    author: "Bob Smith",
    date: "2024-09-30",
    description:
      "Skilled in developing full-stack applications with MongoDB, Express.js, React, and Node.js.",
    tags: ["MERN", "Full Stack", "JavaScript"],
    image:
      "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Backend Developer",
    author: "Charlie Brown",
    date: "2024-09-30",
    description:
      "Proficient in server-side development with Node.js and Express.js.",
    tags: ["Backend", "Node.js", "Express.js"],
    image:
      "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    author: "David Wilson",
    date: "2024-09-30",
    description:
      "Versatile in both frontend and backend development, specializing in the MERN stack.",
    tags: ["Full Stack", "MERN", "JavaScript"],
    image:
      "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    author: "Eve Davis",
    date: "2024-09-30",
    description:
      "Expert in automating and optimizing development workflows using CI/CD pipelines.",
    tags: ["DevOps", "CI/CD", "Automation"],
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  },
  {
    id: 6,
    title: "Mobile App Developer",
    author: "Frank Miller",
    date: "2024-09-30",
    description:
      "Specialized in developing cross-platform mobile applications using React Native.",
    tags: ["Mobile", "React Native", "Cross-Platform"],
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
  },
  {
    id: 7,
    title: "UI/UX Designer",
    author: "Grace Lee",
    date: "2024-09-30",
    description:
      "Focused on creating user-friendly and visually appealing interfaces.",
    tags: ["UI/UX", "Design", "User Experience"],
    image:
      "https://images.pexels.com/photos/17561470/pexels-photo-17561470/free-photo-of-smartphone-and-laptop-creative-electronic-devices.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    title: "Data Scientist",
    author: "Henry Clark",
    date: "2024-09-30",
    description:
      "Experienced in analyzing and interpreting complex data to drive business decisions.",
    tags: ["Data Science", "Machine Learning", "Python"],
    image:
      "https://images.pexels.com/photos/19809475/pexels-photo-19809475/free-photo-of-young-female-data-scientist-programmer-working-in-a-conference-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    title: "Cybersecurity Specialist",
    author: "Ivy Martinez",
    date: "2024-09-30",
    description:
      "Expert in protecting systems and networks from cyber threats.",
    tags: ["Cybersecurity", "Network Security", "Ethical Hacking"],
    image:
      "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 10,
    title: "Cloud Engineer",
    author: "Jack Anderson",
    date: "2024-09-30",
    description:
      "Skilled in designing and managing cloud infrastructure using AWS and Azure.",
    tags: ["Cloud", "AWS", "Azure"],
    image: "https://images.pexels.com/photos/1181680/pexels-photo-1181680.jpeg",
  },
];