/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getProfile, IProfile, updateProfile, uploadImage } from "@/app/api";
import { BackwardArrow, UploadImage } from "@/app/svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import avatar from "@/app/assets/images/avatar.png";
import { successToast } from "@/app/utils";

interface FormData {
  name: string;
  imageUrl: string;
}

const Profile = () => {
  const router = useRouter();
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm<FormData>();

      const { data, isLoading } = useQuery({
        queryKey: ["profile"],
        queryFn: getProfile,
      });
  
  const [profileImage, setProfileImage] = useState<string | undefined>(undefined);
 useEffect(() => {
   if (data) {
     setValue("name", data.user.name);
   }
 }, [data, setValue]);
  // Mutation for updating profile
  const { mutateAsync: updateProfileMutation } = useMutation<any, Error, any>({
    mutationFn: async (data: IProfile) => updateProfile(data),
  });

  // Mutation for uploading image
  const { mutateAsync: uploadImageMutation } = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return await uploadImage(formData);
    },
  });

  // ✅ Single valid definition of handleImageSelect
  const handleImageSelect = async (file: File) => {

    try {
      const response = await uploadImageMutation(file);
      setProfileImage(response?.imageUrl);
      if (response !== undefined) {
        console.log(response, "response ");
        setProfileImage(response?.imageUrl);
      } else {
        console.warn("Upload response invalid", response);
      }
    } catch (error) {
      console.error("Image upload failed", error);
    }
  };


  const onSubmit = async (data: FormData) => {
    try {
      await updateProfileMutation({...data,imageUrl: profileImage});
      successToast("Profile updated successfully!");
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
            <div className="h-[120px] w-[120px] rounded-full overflow-hidden border">
              {isLoading ? <div className="text-white flex justify-center items-center h-full">
                Loading...
          </div> :   <Image
                src={
                  profileImage
                    ? profileImage
                    : data && !!data.user.imageUrl
                    ? data.user.imageUrl
                    : avatar
                }
                alt="Profile"
                className="h-full w-full object-cover"
                width={100}
                height={100}
              />}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-white">Update Profile Picture</h1>
                <UploadImage onImageSelect={handleImageSelect} />
              </div>
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
