'use client';
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  description: string;
  image?: string;
  author: { name: string; email: string };
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface BlogResponse {
  success: boolean;
  message: string;
  data: {
    metadata: {
      totalBlogs: number;
      totalPages: number;
      currentPage: number;
      pageSize: number;
    };
    blogs: Blog[];
  };
}

export default function BlogSection() {

   const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchBlogs = async () => {
        setIsLoading(true);
        try {
          const response = await fetch("http://10.10.12.54:3013/api/v1/blog/all-blogs", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
            },
          });
          const data: BlogResponse = await response.json();
          if (data.success) {
            setBlogs(data.data.blogs);
          }
        } catch (error) {
          console.error("Error fetching blogs:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchBlogs();
    }, []);
  
    if (isLoading) {
      return <div className="text-center py-16">Loading...</div>;
    }

  return (
    <section className="w-full py-16 md:py-20 font-roboto mt-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-6xl font-workSans
           font-bold text-gray-900 mb-4"
          >
            Empowering Healthcare Through Insightful Strategies
          </h2>
          <p className="text-gray-500 md:text-xl max-w-4xl mx-auto">
            Delve into expert insights designed to enhance your healthcare
            management practices. Our articles provide actionable strategies
            that help healthcare providers streamline operations, ensuring that
            patient care remains at the forefront.
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs?.slice(0, 3).map((blog) => (
            <div key={blog._id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <img
                  src={`http://10.10.12.54:3013/${blog.image}` || "/placeholder.svg"}
                  alt={blog.title}
                  className="object-cover p-6 rounded-3xl"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="text-lg font-medium text-blue-600 uppercase tracking-wider">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600">By {blog.author.name}</p>
                <Link
                  href={`/blog/${blog._id}`} // Dynamic link to individual blog post
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  READ MORE <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
