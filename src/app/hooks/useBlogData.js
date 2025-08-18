"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { BLOG } from "../lib/constants";
import { useInfiniteScroll } from "./useInfiniteScroll";

export function useBlogData(posts) {
  const pageSize = 5;

  // Client side fetch on scroll
  const fetchBlogs = async ({ pageParam = 1 }) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*&pagination[page]=${pageParam}&pagination[pageSize]=${pageSize}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await res.json();

    return {
      data: data.data || [],
      meta: data.meta || {},
      nextCursor:
        data.meta?.pagination?.page < data.meta?.pagination?.pageCount
          ? pageParam + 1
          : undefined,
    };
  };

  const queryResult = useInfiniteQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,

    // Initial data from server-side rendering (first 5 items)
    initialData: posts
      ? {
          pages: [
            {
              data: posts?.data || posts || [],
              meta: posts?.meta || {},
              nextCursor:
                (posts?.data || posts || []).length >= pageSize ? 2 : undefined,
            },
          ],
          pageParams: [1],
        }
      : undefined,

    staleTime: BLOG.STALE_TIME,
    refetchOnMount: BLOG.REFETCH_ON_MOUNT,
    refetchOnWindowFocus: BLOG.REFETCH_ON_WINDOW_FOCUS,
    refetchOnReconnect: BLOG.REFETCH_ON_RECONNECT,
  });

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = queryResult;

  useInfiniteScroll({
    hasNextPage: !!hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  const allPosts = data?.pages?.flatMap((page) => page.data) || [];

  return {
    allPosts,
    error,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    fetchNextPage,
  };
}
