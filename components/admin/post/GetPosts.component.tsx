import React from "react";
import { IPosts } from "../../../models/response/posts.interface";
import Pagination from "../../post/Pagination.component";
import AdminPosts from "./AdminPosts.component";
import { IPost } from "../../../models/post.interface";

interface IAdminGetPosts {
  posts: IPosts;
  fetchPosts: (offset: number, limit: number) => Promise<any>
  removePost?: (post: IPost) => Promise<any>
}

const GetPosts = ({ posts, fetchPosts, removePost }: IAdminGetPosts) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const changeRowsPerPage = async (rows: number) => {
    await fetchPosts(rows * page, rows)
    setRowsPerPage(rows)
  }

  const changePage = async (page: number) => {
    await fetchPosts(rowsPerPage * page, rowsPerPage)
    setPage(page)
  }

  return (
    <>
      <AdminPosts
        count={posts.count}
        rows={posts.rows}
        removePost={removePost}
      />
      <Pagination
        count={posts.count}
        currentPage={page}
        setPage={changePage}
        rowsPerPageItems={[5, 10, 15]}
        rowsPerPage={rowsPerPage}
        rowsPerPageChange={changeRowsPerPage}
      />
    </>
  );
};

export default GetPosts;
