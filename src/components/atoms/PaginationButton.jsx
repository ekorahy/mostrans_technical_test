import { GrPrevious, GrNext } from "react-icons/gr";

export default function PaginationButton({ prev = true, onPrev, onNext }) {
  return (
    <>
      {prev ? (
        <button className="btn-pagination" onClick={onPrev}>
          <GrPrevious />
          Prev
        </button>
      ) : (
        <button className="btn-pagination" onClick={onNext}>
          Next
          <GrNext />
        </button>
      )}
    </>
  );
}
