/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IProfile, updateProfile } from "@/app/api";
import { Avatar, BackwardArrow, UploadImage } from "@/app/svg";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
}

const Profile = () => {
  const router = useRouter();
   const { mutateAsync: updateProfileMutation } = useMutation<any, Error, any>({
      mutationFn: async (data: IProfile) => {
        return updateProfile(data);
      },
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

const onSubmit = async (data: FormData) => {
  try {
    await updateProfileMutation(data);

    console.log("Profile updated successfully!");
  } catch (error: any) {
    console.error("Error while updating profile:", error.message);

  }
};


  return (
    <div className="lg:px-16 lg:py-12 pb-2 text-white">
      <div className="text-white text-[24px] lg:text-[40px] font-bold flex justify-between lg:items-center flex-col lg:flex-row gap-4">
        <div className="flex gap-4 text-white items-center">
          <button onClick={() => router.push("/dashboard/ai_agents")}>
            <BackwardArrow />
          </button>
          Profile Settings
        </div>
      </div>

      <div>
        <div className="mt-[64px]">
          <div className="flex gap-6 items-center">
            <Avatar height={120} width={120} />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-white">Update Profile Picture</h1>
                <div className="cursor-pointer">
                  <UploadImage />
                </div>
              </div>
              <h1 className="text-logout_text_color cursor-pointer">
                Remove Image
              </h1>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div className="mb-4">
            <label className="block text-white mb-2">Name</label>
            <div className="flex flex-col lg:flex-row gap-3 h-[55vh] lg:h-auto justify-between lg:justify-start">
              <input
                {...register("name", { required: "This field is required" })}
                placeholder="John"
                className="w-full max-w-[672px] bg-darkest_white h-[48px] px-2 rounded-[6px] border-gray_border border placeholder:text-placeholder_text_color hover:border-primary"
              />
              <button
                type="submit"
                className="border border-gray_border p-4 flex gap-2 items-center rounded-[80px] text-[14px] lg:text-[16px] font-medium bg-primary justify-center h-12 w-full lg:w-[131px]"
              >
                Update
              </button>
            </div>
            {errors.name?.message && (
              <p className="text-error_color font-bold text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
