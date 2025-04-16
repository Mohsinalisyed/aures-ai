import React, { useMemo, useState } from "react";
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

export interface Option {
  value: string;
  label: string;
}

interface ITokenSelection {
  selectedPairs: string[] | undefined;
  setSelectedPairs: (e: string[]) => void;
  errors: FieldErrors<TradingBotData>;
  control: Control<TradingBotData>;
}

// Virtualized List for dropdown
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
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading } = useQuery<
    TokenPair[],
    Error,
    TokenPair[],
    [string, string]
  >({
    queryKey: ["pairs", searchTerm],
    queryFn: getTokenPairAddress,
    enabled: !!searchTerm || searchTerm === "", // This ensures the query runs even with an empty search term
  });

  const options: Option[] =
    data && Array.isArray(data)
      ? data.map((pair: TokenPair) => ({
          value: pair.address,
          label: `${pair.token0.name} / ${pair.token1.name}`,
        }))
      : [];

  // Ensure previously selected pairs are shown, even when no search term is entered
  const selectedOptions = options.filter((option) =>
    selectedPairs?.includes(option.value)
  );

  const handleSelectChange = (newValue: MultiValue<Option>) => {
    const newSelectedPairs = newValue
      ? (newValue as Option[]).map((option) => option.value)
      : [];
    setSelectedPairs(newSelectedPairs);
  };

  const handleInputChange = (newValue: string) => {
    setSearchTerm(newValue);
  };

  // Always show selected pairs, even when there's no search term
  const displaySelectedOptions = selectedOptions.length
    ? selectedOptions
    : selectedPairs
        ?.map((pairAddress) => {
          const option = options.find((opt) => opt.value === pairAddress);
          return option || null; // Return null if no matching option is found
        })
        .filter((option) => option !== null); // Filter out null values

  return (
    <div>
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">Token Selection</h1>
        <TooltipIcon />
      </div>

      <Controller
        name="poolAddresses"
        control={control}
        defaultValue={selectedPairs}
        render={({ field }) => (
          <Select<Option, true>
            {...field}
            options={options}
            isMulti
            isSearchable
            isClearable={false}
            onChange={handleSelectChange}
            value={displaySelectedOptions} // Ensure no null values here
            onInputChange={handleInputChange}
            components={{
              MenuList: VirtualizedList,
            }}
            isLoading={isLoading}
          />
        )}
      />

      {errors.poolAddresses && (
        <p className="text-error_color text-sm mt-4">
          {errors.poolAddresses?.message}
        </p>
      )}
    </div>
  );
};

export default TokenSelection;
