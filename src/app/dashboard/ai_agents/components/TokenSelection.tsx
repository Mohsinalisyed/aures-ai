import React from "react";
import Select, { MultiValue } from "react-select";
import { useQuery } from "@tanstack/react-query";
import { getTokenPairAddress, TradingBotData } from "@/app/api";
import "./selectStyle.css";
import { FieldErrors } from "react-hook-form";
import { TooltipIcon } from "@/app/svg";

// Define types for token and pair data
interface Token {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
}

interface TokenPair {
  address: string;
  exchange: string;
  token0: Token;
  token1: Token;
}

interface Option {
  value: string;
  label: string;
}
interface ITokenSelection {
  selectedPairs: string[];
    setSelectedPairs: (e: string[]) => void;
      errors: FieldErrors<TradingBotData>;
    
}
const TokenSelection: React.FC<ITokenSelection> = ({
  selectedPairs,
  setSelectedPairs,
  errors,
}) => {
  const { data } = useQuery<TokenPair[]>({
    queryKey: ["pairs"],
    queryFn: getTokenPairAddress,
  });
console.log(errors, "errors");
  const options: Option[] =
    data?.map((pair) => ({
      value: pair.address,
      label: `${pair.token0.name} / ${pair.token1.name}`, // Show Token 0 and Token 1 names in the label
    })) || [];

  // Handle change in selection
  const handleSelectChange = (newValue: MultiValue<Option>) => {
    const newSelectedPairs = newValue
      ? newValue.map((option) => option.value)
      : [];
    setSelectedPairs(newSelectedPairs);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">Token Selection</h1>
        <TooltipIcon />
      </div>
      <Select
        options={options}
        isMulti
        isClearable={false}
        onChange={handleSelectChange} // onChange expects a MultiValue<Option> type
        value={options.filter((option) => selectedPairs?.includes(option.value))} // Keep the selected options highlighted
      />
      {errors.investmentType && (
        <p className="text-error_color text-sm mt-4">
          {errors.investmentType?.message}
        </p>
      )}
    </div>
  );
};

export default TokenSelection;
