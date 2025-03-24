import React, { useMemo } from "react";
import Select, { MenuListProps, MultiValue, GroupBase } from "react-select";
import { useQuery } from "@tanstack/react-query";
import { getTokenPairAddress, TradingBotData } from "@/app/api";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { TooltipIcon } from "@/app/svg";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  ListRowProps,
} from "react-virtualized"; // Import necessary components from react-virtualized
import "./selectStyle.css";

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
  selectedPairs: string[] | undefined;
  setSelectedPairs: (e: string[]) => void;
  errors: FieldErrors<TradingBotData>;
  control: Control<TradingBotData>;
}

// Update the types to handle MultiValue correctly
const VirtualizedList = ({
  children,
}: MenuListProps<Option, true, GroupBase<Option>>) => {
  const rows = children;

  const cellCache = useMemo(() => {
    return new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 30,
    });
  }, []);

  if (!Array.isArray(rows)) {
    // For children like: "Loading" or "No Options"
    return <>{children}</>;
  }

  const rowRenderer = ({ key, parent, index, style }: ListRowProps) => (
    <CellMeasurer
      cache={cellCache}
      key={key}
      columnIndex={0}
      rowIndex={index}
      parent={parent}
    >
      <div key={key} style={style}>
        {rows[index]}
      </div>
    </CellMeasurer>
  );

  return (
    <div style={{ height: "300px" }}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            deferredMeasurementCache={cellCache}
            rowHeight={cellCache.rowHeight}
            rowCount={rows.length}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  );
};

const TokenSelection: React.FC<ITokenSelection> = ({
  selectedPairs,
  setSelectedPairs,
  control,
  errors,
}) => {
  const { data, isLoading } = useQuery<TokenPair[]>({
    queryKey: ["pairs"],
    queryFn: getTokenPairAddress,
  });

  console.log(errors, "errors");

  const options: Option[] =
    data?.map((pair) => ({
      value: pair.address,
      label: `${pair.token0.name} / ${pair.token1.name}`,
    })) || [];

  // Handle change in selection
  const handleSelectChange = (newValue: MultiValue<Option>) => {
    const newSelectedPairs = newValue
      ? (newValue as Option[]).map((option) => option.value)
      : [];
    setSelectedPairs(newSelectedPairs);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">Token Selection</h1>
        <TooltipIcon />
      </div>

      <Controller
        name="pairAddresses"
        control={control}
        defaultValue={selectedPairs}
        render={({ field }) => (
          <Select<Option, true> // Ensure correct generic type for isMulti (true)
            {...field}
            options={options}
            isMulti // TypeScript now knows this is multi-select
            isClearable={false}
            onChange={handleSelectChange} // Accepts MultiValue<Option> here
            value={options.filter((option) =>
              selectedPairs?.includes(option.value)
            )}
            components={{
              MenuList: VirtualizedList, // Use the VirtualizedList for the dropdown menu
            }}
            menuIsOpen
            isLoading={isLoading}
          />
        )}
      />

      {errors.pairAddresses && (
        <p className="text-error_color text-sm mt-4">
          {errors.pairAddresses?.message}
        </p>
      )}
    </div>
  );
};

export default TokenSelection;
