import { useRecoilValue } from "recoil";
import { locationsState } from "../states";
import { useState } from "react";
import CharacterItem from "../components/atoms/CharacterItem";

export default function CharacterByLocation() {
  const locations = useRecoilValue(locationsState);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-6 text-center text-3xl font-bold">
        Character by Location
      </h2>
      <div>
        {Object.keys(locations).length === 0 ? (
          <p className="text-center text-lg text-gray-500">
            No locations assigned yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Object.keys(locations).map((location) => (
              <button
                key={location}
                className="cursor-pointer rounded-lg border p-4 transition duration-200 hover:border-cyan-400"
                onClick={() => setSelectedLocation(location)}
              >
                {location}
              </button>
            ))}
          </div>
        )}
      </div>
      {selectedLocation && (
        <div className="mt-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Characters in {selectedLocation}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {locations[selectedLocation].map((character) => (
              <CharacterItem
                key={character.id}
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                image={character.image}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
