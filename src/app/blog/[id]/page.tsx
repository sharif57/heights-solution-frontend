'use client';
import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft, FiCalendar, FiUser, FiMail, FiLoader, FiAlertCircle } from 'react-icons/fi';

interface Author {
  name: string;
  email: string;
}

interface Blog {
  _id: string;
  title: string;
  description: string;
  image?: string;
  author: Author;
  date: string;
  createdAt: string;
  updatedAt: string;
}

type BlogState = {
  data: Blog | null;
  loading: boolean;
  error: string | null;
};

export default function BlogDetails() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const [blogState, setBlogState] = useState<BlogState>({
    data: null,
    loading: true,
    error: null,
  });

  // Fetch blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get<{
          success: boolean;
          data: Blog;
        }>(`http://10.10.12.54:3013/api/v1/blog/blog-details/${id}`);

        if (response.data.success) {
          setBlogState({
            data: response.data.data,
            loading: false,
            error: null,
          });
        } else {
          setBlogState({
            data: null,
            loading: false,
            error: 'Failed to fetch blog details',
          });
        }
      } catch (err) {
        const error = err as AxiosError;
        setBlogState({
          data: null,
          loading: false,
          error: error.message || 'Error fetching blog details',
        });
      }
    };

    fetchBlog();
  }, [id]);



  // Loading state
  if (blogState.loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <FiLoader className="animate-spin text-blue-600 text-4xl" />
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (blogState.error || !blogState.data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-md">
          <FiAlertCircle className="mx-auto text-red-500 text-5xl mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Blog</h2>
          <p className="text-gray-600 mb-6">{blogState.error || 'Blog not found'}</p>
          <button
            onClick={() => router.push('/blog')}
            className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            <FiArrowLeft />
            <span>Back to Blogs</span>
          </button>
        </div>
      </div>
    );
  }

  const { data: blog } = blogState;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Blog Details</h1>
              <p className="mt-2 opacity-90">Explore this insightful article</p>
            </div>
            <Link
              href="/blog"
              className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition shadow-sm"
            >
              <FiArrowLeft />
              <span>Back to Blogs</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Blog Image */}
          {blog.image && (
            <div className="h-64 md:h-80 w-full overflow-hidden">
              <img
                src={`http://10.10.12.54:3013/${blog.image}`}
                alt={blog.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          {/* Blog Content */}
          <div className="p-6 md:p-8">
            {/* Blog Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
              {blog.title}
            </h2>

            {/* Blog Meta */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-gray-600 mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <FiUser className="text-blue-500" />
                  <span className="font-medium">{blog.author.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMail className="text-blue-500" />
                  <a
                    href={`mailto:${blog.author.email}`}
                    className="hover:text-blue-600 hover:underline"
                  >
                    {blog.author.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FiCalendar className="text-blue-500" />
                {/* <time dateTime={blog.date}>{new Date (blog.date)}</time> */}
              </div>
            </div>

            {/* Blog Description */}
            <div className="prose max-w-none text-gray-700">
              {blog.description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>


    </div>
  );
}