import { useRecoilValue } from "recoil";
import { locationsState } from "../states";
import { useState } from "react";

export default function CharacterByLocation() {
  const locations = useRecoilValue(locationsState);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div>
      <h2>Character by Location</h2>
      <div>
        {Object.keys(locations).length === 0 ? (
          <p>No locations assigned yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Object.keys(locations).map((location) => (
              <div
                key={location}
                className="cursor-pointer rounded-lg border p-4 shadow-lg transition duration-200 hover:shadow-2xl"
                onClick={() => setSelectedLocation(location)}
              >
                <h2 className="text-center text-xl">{location}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedLocation && (
        <div className="mt-8">
          <h2 className="text-center text-2xl">
            Characters in {selectedLocation}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {locations[selectedLocation].map((character) => (
              <div
                key={character.id}
                className="rounded-lg border p-4 shadow-lg transition duration-200 hover:shadow-2xl"
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="h-48 w-full rounded-md object-cover"
                />
                <h2 className="mt-2 text-center text-xl">{character.name}</h2>
                <p className="mt-2 text-center">{character.species}</p>
                <p className="mt-2 text-center">{character.status}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
