import { useNavigate } from "react-router-dom";

export default function CharacterItem({ id, name, status, species, image }) {
  const navigate = useNavigate();

  const onItemClickHandle = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="rounded-md shadow" onClick={onItemClickHandle}>
      <img
        src={image}
        alt={name}
        className="h-48 w-full rounded object-cover"
      />
      <div className="p-4">
        <h3 className="mb-1 line-clamp-1 text-2xl font-bold">{name}</h3>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-cyan-400"></div>
          <p>{status}</p>
          <span>-</span>
          <p>{species}</p>
        </div>
      </div>
    </div>
  );
}
