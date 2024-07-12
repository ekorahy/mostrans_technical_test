export default function ErrorMessage({ message }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-bold">Error {message}</h2>
      </div>
    </div>
  );
}
