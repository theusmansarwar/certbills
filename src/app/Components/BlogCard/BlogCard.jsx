"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// import { fetchallBloglist } from "@/DAL/fetch";
// import { baseUrl } from "@/Config/Config";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineHorizontalRule } from "react-icons/md";
import "./BlogCard.css";
import BCard from "../SkeletonLoaders/BCard";
import { formatDate } from "@/utils/FormatDate";
const dummyBlogs = [
  {
    _id: 1,
    slug: "introduction-to-cybersecurity",
    title: "Introduction to Cybersecurity",
    author: "John Doe",
    thumbnail: "/success-story.png",
    description:
      "Learn the basics of cybersecurity, its importance, and how it protects businesses.",
    createdAt: "2025-08-01",
  },
  {
    _id: 2,
    slug: "cloud-security-trends",
    title: "Cloud Security Trends",
    author: "Jane Smith",
    thumbnail: "/success-story.png",
    description:
      "Explore the top cloud security challenges and solutions for modern businesses.",
    createdAt: "2025-08-05",
  },
  {
    _id: 3,
    slug: "ai-in-cyber-defense",
    title: "AI in Cyber Defense",
    author: "Michael Brown",
    thumbnail: "/success-story.png",
    description:
      "Discover how AI is transforming cybersecurity and threat detection.",
    createdAt: "2025-08-10",
  },
];

const BlogCard = ({data}) => {
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const initialPage = parseInt(searchParams.get("page")) || 1;
  // const [page, setPage] = useState(initialPage);

  // const [blogs, setBlogs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [totalPages, setTotalPages] = useState(1);

  // const itemsPerPage = 9;

  // useEffect(() => {
  //   fetchData();
  // }, [page]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetchallBloglist(page, itemsPerPage);
  //     setBlogs(response?.blogs);
  //     setTotalPages(response?.totalPages);
  //   } catch (err) {
  //     console.error("Error fetching blogs:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleChange = (event, value) => {
  //   setPage(value);
  //   router.push(`?page=${value}`); // update URL without full reload
  // };

  // const handleClick = (slug) => {
  //   router.push(`/blogs/${slug}`);
  // };

  return (
    <>
      <div className="blog-grid">
        {
        // loading ? (
        //   <BCard />
        // ) : (
          dummyBlogs?.map((post) => (
            <div
              key={post._id}
              className="blog-post-card"
              onClick={() => handleClick(post.slug)}
            >
              <div
                className="post-image"
                style={{
                  backgroundImage: `url(${post.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                }}
              />
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <div className="post-meta">
                  <div className="author">
                    <IoPersonCircleSharp />
                    <span className="author-name">{post.author}</span>
                  </div>
                  <span className="date">
                    <MdOutlineHorizontalRule /> {formatDate(post.createdAt)}
                  </span>
                </div>
                <p className="post-description">{post.description}</p>
              </div>
            </div>
          ))
        // )
        }
      </div>

      {/* <Stack spacing={2} sx={{ alignItems: "center", mb: "30px" }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          shape="rounded"
          variant="outlined"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "var(--background-color)",
              borderColor: "var(--background-color)",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "var(--background-color)",
              color: "black",
              borderColor: "var(--background-color)",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "var(--shadow-low3)",
            },
          }}
        />
      </Stack> */}
    </>
  );
};

export default BlogCard;
