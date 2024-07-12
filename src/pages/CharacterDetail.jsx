import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_CHARACTER } from "../data/remote";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { locationsState } from "../states";
import CharacterDetailLoading from "../components/atoms/CharacterDetailLoading";
import formattedDate from "../utils/formattedDate";
import ErrorMessage from "../components/atoms/ErrorMessage";

export default function CharacterDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  const [location, setLocation] = useState("");
  const [locations, setLocations] = useRecoilState(locationsState);

  const handleAssignCharacter = (event) => {
    event.preventDefault();
    if (location) {
      const newLocations = { ...locations };

      if (newLocations[location]) {
        if (
          newLocations[location].some((char) => char.id === data.character.id)
        ) {
          return alert("Character already assigned to this location!");
        }
      } else {
        newLocations[location] = [];
      }

      for (const loc in newLocations) {
        if (
          loc !== location &&
          newLocations[loc].some((char) => char.id === data.character.id)
        ) {
          alert("Character already assigned in another location!");
          return;
        }
      }

      newLocations[location] = [...newLocations[location], data.character];
      setLocations(newLocations);
      localStorage.setItem("locations", JSON.stringify(newLocations));
      setLocation("");
    } else {
      alert("Location name is required!");
    }
  };

  if (loading) return <CharacterDetailLoading />;

  if (error) return <ErrorMessage message={error.message} />;

  const {
    name,
    image,
    species,
    status,
    type,
    gender,
    origin,
    location: loc,
    created,
  } = data.character;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:mx-auto md:w-max md:flex-row">
        <img
          src={image}
          alt={name}
          className="mb-4 w-full rounded-md md:w-1/2"
        />
        <div className="flex flex-col justify-center md:ml-8 md:mt-0">
          <h2 className="mb-2 text-lg font-bold lg:text-4xl">{name}</h2>
          <p className="mb-2">Species: {species}</p>
          <p className="mb-2">Status: {status}</p>
          <p className="mb-2">Type: {type || "N/A"}</p>
          <p className="mb-2">Gender: {gender}</p>
          <p className="mb-2">Origin: {origin.name}</p>
          <p className="mb-2">Location: {loc.name}</p>
          <p className="mb-2">Created: {formattedDate(created)}</p>
          <form className="mt-4" onSubmit={handleAssignCharacter}>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location name"
              className="w-full rounded border p-2"
            />
            <button
              type="submit"
              className="mt-2 w-full rounded bg-cyan-400 p-2 text-white hover:bg-cyan-500"
            >
              Assign to Location
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
