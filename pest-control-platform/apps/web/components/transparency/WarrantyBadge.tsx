// Warranty period + re-service terms
interface WarrantyBadgeProps { days: number; terms: string }

export default function WarrantyBadge({ days, terms }: WarrantyBadgeProps) {
  return (
    <div>
      <span>🛡️ {days}-Day Warranty</span>
      <p>{terms}</p>
    </div>
  );
}
