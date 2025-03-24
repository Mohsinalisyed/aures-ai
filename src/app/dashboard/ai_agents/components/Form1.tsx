import { useAgentFormData } from "@/app/hooks";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form1Data, form1Schema } from "../type";

interface AgentFormData {
  name: string;
  purpose: string;
  description: string;
}
interface Iprops {
  setCustomForm: (e: number) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data:any
}
const Form1: React.FC<Iprops> = ({ setCustomForm, data }) => {
  const { agentFormData, setAgentFormData } = useAgentFormData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Form1Data>({
    resolver: zodResolver(form1Schema),
  });
 useEffect(() => {
   if (data) {
     setValue("name", data.name);
     setValue("purpose", data.purpose);
     setValue("description", data.description);
   }
 }, [data, setValue]);
  const onSubmit = (data: AgentFormData) => {
    setAgentFormData({
      ...agentFormData,
      name: data.name,
      purpose: data.purpose,
      description: data.description,
    });
    setCustomForm(2)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-[672px] flex flex-col text-white w-full  gap-6 mt-[64px]">
        <label>Agent Name</label>
        <div>
          <input
            {...register("name")}
            placeholder="Enter Here"
            className="w-full bg-darkest_white h-[48px] px-2 rounded-[6px] border-gray_border border placeholder:text-white hover:border-primary"
          />
          {errors.name && (
            <p className="text-error_color font-bold text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <label>Agent Purpose</label>
        <div>
          <input
            {...register("purpose")}
            placeholder="Enter Here"
            className="w-full bg-darkest_white h-[48px] rounded-[6px] border-gray_border border px-2 placeholder:text-white hover:border-primary"
          />
          {errors.purpose && (
            <p className="text-error_color font-bold text-sm mt-1">
              {errors.purpose?.message}
            </p>
          )}
        </div>

        <label>Agent Description</label>
        <div>
          <textarea
            {...register("description")}
            placeholder="Enter Here"
            className="w-full py-4 bg-darkest_white rounded-[6px] min-h-[168px] border-gray_border border px-2 placeholder:text-white hover:border-primary"
          />
          {errors.description && (
            <p className="text-error_color font-bold text-sm mt-1">
              {errors.description?.message}
            </p>
          )}
        </div>
      </div>
      <div className="text-white pt-[34px] text-[40px] flex justify-end items-center">
        <div className="lg:pt-[32px] w-full flex justify-end">
          <div className="w-full flex justify-end flex-col items-end">
            <button
              type="submit"
              className={`border border-gray_border p-4 flex gap-2 items-center rounded-[80px] text-[14px] lg:text-[16px] font-medium bg-primary justify-center h-12 w-full lg:w-[168px]`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form1;
