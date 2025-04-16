import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../ai_agents/components/selectStyle.css";

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  isModalOpen: boolean;
  setModalOpen: (e: boolean) => void;
}

const tokenOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// 1. Zod Schema
const WithdrawSchema = z.object({
  token: z.object(
    {
      value: z.string(),
      label: z.string(),
    },
    { required_error: "Token is required" }
  ),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .positive("Amount must be greater than 0"),
  address: z
    .string()
    .min(10, "Address is too short")
    .max(100, "Address is too long"),
});

// 2. Type for form data
type WithdrawFormData = z.infer<typeof WithdrawSchema>;

const WithdrawModal: React.FC<WithdrawModalProps> = ({
  isOpen,
  onClose,
  setModalOpen,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<WithdrawFormData>({
    resolver: zodResolver(WithdrawSchema),
  });

  if (!isOpen) return null;

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onSubmit = (data: WithdrawFormData) => {
    console.log("Withdraw Data: ", data);
    setModalOpen(true);
    onClose();
  };

  return (
    <div
      className="fixed z-[9999] top-0 left-0 w-full h-full bg-overlay_bg backdrop-blur-[1px] flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[380px] min-h-[302px] rounded-[12px] p-4 gap-[10px] border border-darker_white backdrop-blur-xl bg-darkest_white"
        onClick={handleModalClick}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className="text-white text-16 font-bold mb-1">Withdraw Token</h4>
          <Controller
            name="token"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={tokenOptions}
                className="mb-1"
                placeholder="Select Token"
              />
            )}
          />
          {errors.token && (
            <p className="text-red-500 text-xs mb-2">{errors.token.message}</p>
          )}

          <h4 className="text-white text-16 font-bold mb-1">
            Number of token you want to sell
          </h4>
          <input
            type="number"
            step="any"
            min={0}
            placeholder="Enter Amount Here"
            {...register("amount", { valueAsNumber: true })}
            onWheel={(e) => e.currentTarget.blur()}
            className="w-full bg-darkest_white mb-1 h-[48px] px-2 rounded-[6px] border-gray_border border placeholder:text-white hover:border-primary pr-[40px]"
          />
          {errors.amount && (
            <p className="text-red-500 text-xs mb-2">{errors.amount.message}</p>
          )}

          <h4 className="text-white text-16 font-bold mb-1">
            Enter the wallet address here
          </h4>
          <input
            type="text"
            {...register("address")}
            placeholder="Enter Address Here"
            className="w-full bg-darkest_white h-[48px] px-2 mb-1 rounded-[6px] border-gray_border border placeholder:text-white hover:border-primary"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mb-2">
              {errors.address.message}
            </p>
          )}

          <div className="flex justify-center items-center flex-col w-full">
            <button
              type="submit"
              className="h-12 px-4 mt-4 text-[16px] bg-primary text-white w-full mb-4 rounded-full"
            >
              Withdraw
            </button>
          </div>
        </form>

        <div className="flex justify-between">
          <h1 className="font-medium text-white text-[14px]">ETH Balance</h1>
          <h1 className="font-medium text-white text-[14px]">
            0.005545ETH = $200.90
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;
