import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_CHARACTER } from "../data/remote";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { locationsState } from "../states";

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
          return alert("Character already assign for this location!");
        }
      } else {
        newLocations[location] = [];
      }

      for (const loc in newLocations) {
        if (
          loc !== location &&
          newLocations[loc].some((char) => char.id === data.character.id)
        ) {
          alert("Character already assign in other location!");
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

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const { name, image, species, status } = data.character;

  return (
    <div>
      <img src={image} alt={name} className="mx-auto w-1/2" />
      <h1 className="mt-4 text-center text-4xl">{name}</h1>
      <p className="mt-2 text-center text-xl">Species: {species}</p>
      <p className="mt-2 text-center text-xl">Status: {status}</p>
      <form className="my-4" onSubmit={handleAssignCharacter}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location name"
          className="w-full rounded border p-2"
        />
        <button
          type="submit"
          className="mt-2 w-full rounded bg-blue-500 p-2 text-white"
        >
          Assign to Location
        </button>
      </form>
    </div>
  );
}
