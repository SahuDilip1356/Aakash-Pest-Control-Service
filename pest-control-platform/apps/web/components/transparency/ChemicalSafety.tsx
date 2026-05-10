// Chemical safety disclosure: product name, WHO classification, kid/pet safe badge
interface Chemical { name: string; classification: string; safeBadge: string }

const chemicals: Chemical[] = [
  { name: "Cypermethrin 25 EC", classification: "WHO Class II", safeBadge: "Ventilate 2h" },
  { name: "Chlorpyrifos 20 EC", classification: "WHO Class II", safeBadge: "Keep pets away 4h" },
];

export default function ChemicalSafety() {
  return (
    <div>
      <h3>Chemicals We Use</h3>
      {chemicals.map(c => (
        <div key={c.name}>
          <strong>{c.name}</strong>
          <span>{c.classification}</span>
          <span>{c.safeBadge}</span>
        </div>
      ))}
    </div>
  );
}
