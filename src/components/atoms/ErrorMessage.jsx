import PropTypes from "prop-types";

export default function ErrorMessage({ message }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-bold">Error {message}</h2>
      </div>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
