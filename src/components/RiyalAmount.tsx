interface RiyalAmountProps {
  amount: string;
  className?: string;
  boldSymbol?: boolean;
}

const RiyalAmount = ({ amount, className = "", boldSymbol = false }: RiyalAmountProps) => (
  <span className={`inline-flex items-center gap-1 ${className}`.trim()}>
    <span className={boldSymbol ? "font-saudi-riyal-bold text-[1.05em] leading-none" : "font-saudi-riyal text-[1.05em] leading-none"}>
      {"\u20C1"}
    </span>
    <span className="tabular-nums">{amount}</span>
  </span>
);

export default RiyalAmount;
