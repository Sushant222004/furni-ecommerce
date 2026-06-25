function TeamCard({image, name, position, about}) {
  return (
    <div className="flex flex-col gap-8">
      <img src={image} alt={name} />

      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{position}</p>
      </div>

      <p className="text-sm text-gray-600">{about}</p>
    </div>
  );
}

export default TeamCard;
