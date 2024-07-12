import { GrPrevious, GrNext } from "react-icons/gr";
import PropTypes from "prop-types";

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

PaginationButton.propTypes = {
  prev: PropTypes.bool,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};
