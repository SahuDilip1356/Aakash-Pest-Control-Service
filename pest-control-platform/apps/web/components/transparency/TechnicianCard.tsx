// Assigned technician: photo / name / certification / years experience / rating
interface TechnicianCardProps {
  name: string;
  cert: string;
  experience: string;
  rating: number;
  photoUrl?: string;
}

export default function TechnicianCard({ name, cert, experience, rating, photoUrl }: TechnicianCardProps) {
  return (
    <div>
      {photoUrl && <img src={photoUrl} alt={name} width={80} height={80} />}
      <h3>{name}</h3>
      <p>{cert}</p>
      <p>{experience} experience · {rating}★</p>
    </div>
  );
}
