import { GrPrevious, GrNext } from "react-icons/gr";
import PropTypes from "prop-types";

export default function PaginationButton({ prev = true, onPrev, onNext, disabled }) {
  return (
    <>
      {prev ? (
        <button
          className={`btn-pagination ${disabled ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          onClick={onPrev}
          disabled={disabled}
        >
          <GrPrevious />
          Prev
        </button>
      ) : (
        <button
          className={`btn-pagination ${disabled ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          onClick={onNext}
          disabled={disabled}
        >
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
  disabled: PropTypes.bool,
};
