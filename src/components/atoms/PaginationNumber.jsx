import PropTypes from "prop-types";

export default function PaginationNumber({ currentPage, totalPage }) {
  return (
    <p>
      {currentPage} / {totalPage}
    </p>
  );
}

PaginationNumber.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
};
