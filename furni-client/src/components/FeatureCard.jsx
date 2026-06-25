function FeatureCard({ icon: Icon, title, about }) {
  return (
    <div className="flex flex-col gap-3">
      <Icon className="text-4xl" /> <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-400 max-w-80">{about}</p>
    </div>
  );
}

export default FeatureCard;
