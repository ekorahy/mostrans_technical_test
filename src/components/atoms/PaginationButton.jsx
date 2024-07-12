export default function PaginationButton({ prev = true, onPrev, onNext }) {
  return (
    <>
      {prev ? (
        <button onClick={onPrev}>Prev</button>
      ) : (
        <button onClick={onNext}>Next</button>
      )}
    </>
  );
}
