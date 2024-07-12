import { useNavigate } from "react-router-dom";

export default function CharacterItem({ id, name, status, species, image }) {
  const navigate = useNavigate();

  const onItemClickHandle = () => {
    navigate(`/detail/${id}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Alive":
        return "bg-lime-400";
      case "Dead":
        return "bg-red-400";
      case "unknown":
        return "bg-slate-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div
      className="cursor-pointer rounded-md shadow hover:shadow-md hover:shadow-cyan-400"
      onClick={onItemClickHandle}
    >
      <div className="overflow-hidden rounded-t-md">
        <img
          src={image}
          alt={name}
          className="h-48 w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 text-xl font-bold">{name}</h3>
        <div className="flex items-center gap-2">
          <div
            className={`h-4 w-4 rounded-full ${getStatusColor(status)}`}
          ></div>
          <p>{status}</p>
          <span>-</span>
          <p className="line-clamp-1">{species}</p>
        </div>
      </div>
    </div>
  );
}
