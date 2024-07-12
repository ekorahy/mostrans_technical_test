import PropTypes from "prop-types";
import CharacterItem from "../atoms/CharacterItem";

export default function CharactersList({ characters }) {
  return (
    <>
      {characters.map((character) => (
        <CharacterItem
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          image={character.image}
        />
      ))}
    </>
  );
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
