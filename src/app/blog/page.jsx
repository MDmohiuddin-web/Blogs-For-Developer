import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// export const metadata = {
//     title: "Blog Page",
//     description: "Blogs For Developer",
// };

const BlogPage = () => {
  return (
    <section className="py-12  dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center my-5">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Top Blogs
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Check out our most popular blog posts
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Blog 1 */}
          {developers.map((developer) => (
            <>
              <div key={developer.id} className="w-full sm:w-1/2 lg:w-1/3 p-4 ">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                  <Image
                    width={200}
                    height={200}
                    layout="responsive"
                    src={developer.image}
                    alt="Blog 1"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {developer.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {developer.description}
                    </p>
                    <Link href={`/blog/${developer.id}`}>
                      <Button className="m-2" variant="outline">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
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
