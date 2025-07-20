'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";

type Newsletter = {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
};

const NewsletterList = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 10;

interface FetchNewslettersResponse {
    data: {
        success: boolean;
        data: {
            result: Newsletter[];
            totalData: number;
        };
    };
}

const fetchNewsletters = async (page: number): Promise<void> => {
    setLoading(true);
    const token = localStorage.getItem("token");

    try {
        const response: FetchNewslettersResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}news-letter/all-newsletters?page=${page}&limit=${limit}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.data.success) {
            setNewsletters(response.data.data.result);
            setTotalData(response.data.data.totalData);
        }
    } catch (error) {
        console.error("Error fetching newsletters:", error);
    } finally {
        setLoading(false);
    }
};

  useEffect(() => {
    fetchNewsletters(page);
  }, [page]);

  const totalPages = Math.ceil(totalData / limit);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Newsletters</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {newsletters.map((newsletter) => (
            <div
              key={newsletter._id}
              className="p-4 border border-gray-200 rounded-lg shadow-sm"
            >
              <p><strong>Name:</strong> {newsletter.name}</p>
              <p><strong>Email:</strong> {newsletter.email}</p>
              <p className="text-sm text-gray-500">
                <strong>Created At:</strong>{" "}
                {new Date(newsletter.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="text-lg font-medium">{page}</span>
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsletterList;
