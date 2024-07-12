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
