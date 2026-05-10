// Step-by-step what happens during the service visit
export default function TreatmentSteps({ pestType }: { pestType: string }) {
  const steps = [
    "Technician inspects all infestation areas",
    "Prepares treatment mix based on infestation level",
    "Applies treatment — gel bait + spray as needed",
    "Documents treatment for warranty records",
    "Provides post-treatment care instructions",
  ];
  return (
    <ol>
      {steps.map((s, i) => <li key={i}>{s}</li>)}
    </ol>
  );
}
