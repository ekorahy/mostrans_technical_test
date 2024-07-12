export default function PaginationNumber({ currentPage, totalPage }) {
  return (
    <p>
      {currentPage} / {totalPage}
    </p>
  );
}
