import { useEffect } from "react";
import debounce from "lodash/debounce";

export const useInfiniteScroll = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  threshold = 100,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const devicePixelRatio = window.devicePixelRatio;
      const clientHeight =
        window.innerHeight *
        (devicePixelRatio >= 1 ? devicePixelRatio : 1 + 1 - devicePixelRatio);

      if (
        scrollTop + clientHeight >= scrollHeight - threshold &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 500);
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      debouncedHandleScroll.cancel();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage, threshold]);
};
