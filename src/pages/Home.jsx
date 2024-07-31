import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { useSearchParams } from "react-router-dom";
import CharactersList from "../components/molecules/CharactersList";
import { GET_CHARACTERS } from "../data/remote";
import { currentPageState } from "../states";
import PaginationButton from "../components/atoms/PaginationButton";
import PaginationNumber from "../components/atoms/PaginationNumber";
import CharacterItemLoading from "../components/atoms/CharacterItemLoading";
import PaginationNumberLoading from "../components/atoms/PaginationNumberLoading";
import ErrorMessage from "../components/atoms/ErrorMessage";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get('page')) || 1;
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  if (currentPage !== pageParam) {
    setCurrentPage(pageParam);
  }

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage },
  });

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setSearchParams({ page: newPage });
  };

  const handlePrevPage = () => {
    if (data.characters.info.prev) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (data.characters.info.next) {
      handlePageChange(currentPage + 1);
    }
  };

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          Array.from({ length: 20 }).map((_, index) => (
            <CharacterItemLoading key={index} />
          ))
        ) : (
          <CharactersList characters={data.characters.results} />
        )}
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <PaginationButton
          onPrev={handlePrevPage}
          onNext={handleNextPage}
          disabled={!data?.characters?.info?.prev}
        />
        {loading ? (
          <PaginationNumberLoading />
        ) : (
          <PaginationNumber
            currentPage={currentPage}
            totalPage={data.characters.info.pages}
          />
        )}
        <PaginationButton
          prev={false}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
          disabled={!data?.characters?.info?.next}
        />
      </div>
    </div>
  );
}
