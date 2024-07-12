import { useQuery } from "@apollo/client";
import CharactersList from "../components/molecules/CharactersList";
import { GET_CHARACTERS } from "../data/remote";
import { useRecoilState } from "recoil";
import { currentPageState } from "../states";

export default function Home() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage },
  });

  const handlePrevPage = () => {
    if (data.characters.info.prev) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (data.characters.info.next) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CharactersList characters={data.characters.results} />
      </div>
    </div>
  );
}
