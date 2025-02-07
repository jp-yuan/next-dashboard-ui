'use client'
import { useForm } from "react-hook-form";

export function Input({ register, name, type = "text", placeholder, required }) {
  return (
    <div>
      <input
        {...register(name, { required })}
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border rounded-lg"
      />
      {required && <p className="text-red-500 text-sm">This field is required</p>}
    </div>
  );
}

export function Button({ children, type = "button", className = "", ...props }) {
  return (
    <button
      type={type}
      className={`w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function StudentParentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Student Information</h2>
      <Input register={register} name="studentName" placeholder="Student Name" required />
      <Input register={register} name="studentPhone" type="tel" placeholder="Student Phone" required />
      <Input register={register} name="studentEmail" type="email" placeholder="Student Email" required />
      <Input register={register} name="grade" placeholder="Grade" required />
      <Input register={register} name="school" placeholder="School" required />
      <Input register={register} name="classOf" placeholder="Class Of" required />

      <h2 className="text-xl font-bold mt-4">Parent Information</h2>
      <Input register={register} name="parentName" placeholder="Parent Name" required />
      <Input register={register} name="parentPhoneHome" type="tel" placeholder="Parent Phone (H)" required />
      <Input register={register} name="parentPhoneFather" type="tel" placeholder="Parent Phone (C-Father)" required />
      <Input register={register} name="parentPhoneMother" type="tel" placeholder="Parent Phone (C-Mother)" required />
      <Input register={register} name="parentEmail1" type="email" placeholder="Parent Email 1" required />
      <Input register={register} name="parentEmail2" type="email" placeholder="Parent Email 2 (Optional)" required={undefined} />

      <Button type="submit" className="mt-4">Submit</Button>
    </form>
  );
}
