import { useNavigate } from 'react-router-dom';

const courses = [
    {
        icon: "/src/components/Courses/Courses_logo/1. C++.jpeg",
        title: "Learn C++",
        slug: "cpp",
        description: "Programming from basics to advanced topics, including variables, data types, loops, functions, arrays, pointers etc.",
      },
      {
        icon: "/src/components/Courses/Courses_logo/2. c.png",
        title: "Learn C",
        slug: "c",
        description: "Programming from basics to advanced topics, including variables, data types, loops, functions, arrays, pointers etc.",
      },
      {
        icon: "/src/components/Courses/Courses_logo/3. python.jpeg",
        title: "Learn Python",
        slug: "python",
        description: "Python syntax, data structures, functions, automation, data analysis, web development.",
      },
      {
        icon: "/src/components/Courses/Courses_logo/4. java.png",
        title: "Learn Java",
        slug: "java",
        description: "Java syntax, OOP, and core features for web/software engineering and enterprise.",
      },
      {
        icon: "/src/components/Courses/Courses_logo/5. html.png",
        title: "Learn HTML",
        slug: "html",
        description: "Intro to HTML, covering structure, elements, attributes, and real-world applications.",
      },
      {
        icon: "/src/components/Courses/Courses_logo/6. css.png",
        title: "Learn CSS",
        slug: "css",
        description: "Styling, layouts, animations, and real-world applications using CSS.",
      },
      {
        icon: "/src/components/Courses/Courses_logo/7. Javascript.png",
        title: "Learn JavaScript",
        slug: "js",
        description: "JS syntax, DOM, functions, events, frameworks, and real-world applications.",
      },
      {
        icon: "/src/components/Courses/Courses_logo/8. mern.jpeg",
        title: "MERN Stack",
        slug: "mern",
        description: "HTML, CSS, JS, and frameworks for building responsive web applications.",
      },
    ];
    
    export default function Courses() {
      const navigate = useNavigate();
           return (
             <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ">
               {courses.map((course, index) => (
                 <div
                   key={index}
                   onClick={() => navigate(`/courses/${course.slug}`)}
                   className="w-full h-[300px] border rounded-xl p-4 flex flex-col items-center te xt-center shadow hover:shadow-lg transition cursor-pointer"
                 >
                   <img src={course.icon} alt={course.title} className="w-16 h-20 mb-4 object-contain" />
                   <h2 className="font-bold text-lg">{course.title}</h2>
                   <p className="text-sm text-gray-600 mt-2 flex grow text-center">
                     {course.description}
                   </p>
                   {/* <button className=" text-xl text-gray-600 hover:text-black ">→</button> */}

                    {/* use span instead of button  */}

                   <span className=" text-xl text-gray-600 hover:text-black ">→</span>
                 </div>
               ))}
             </main>
           );
         }