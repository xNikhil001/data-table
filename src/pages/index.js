import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import Table from "@/components/table/table.component.jsx";
import SearchBox from "@/components/search-box/search-box.component";
import Pagination from "@/components/pagination/pagination.component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(10);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchString, setSearchString] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((data) => data.json())
      .then((posts) => setPosts(posts))
      .catch((error) => console.log(error));
  }, []);
  const reverse = () => {
    setPosts(posts.slice().reverse());
  };
  const onSearchChange = (e) => {
    setSearchString(e.target.value.toLowerCase());
  };
  const prevButton = () => {
    if (page <= 1) {
      return setPage(1);
    }
    setPage(page - 1);
  };
  const nextButton = () => {
    if (page >= posts.length / 10) {
      return setPage(posts.length / 10);
    }
    setPage(page + 1);
  };
  const onSelect = (e) => {
    setTotal(e.target.value);
    setPage(1);
  };
  useEffect(() => {
    const filter = posts.filter((post) =>
      post.title.toLowerCase().includes(searchString)
    );
    setFilteredPosts(filter);
  }, [searchString, posts]);
  return (
    <>
      <Head>
        <title>Test Project</title>
        <meta name="description" content="Data Table using Nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={"search by title"}
        />
        <Table
          filteredPosts={filteredPosts}
          page={page}
          total={total}
          reverse={reverse}
        />
        <Pagination
          nextButton={nextButton}
          prevButton={prevButton}
          onSelectHandler={onSelect}
          page={page}
          total={total}
          totalPages={posts.length/total}
        />
      </main>
    </>
  );
}
