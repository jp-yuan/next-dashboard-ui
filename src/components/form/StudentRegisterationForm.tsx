'use client';
import { useForm } from "react-hook-form";

export function Input({ register, name, type = "text", placeholder, required, errors }) {
  return (
    <div>
      <input
        {...register(name, { required })}
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border rounded-lg"
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
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

export default function StudentParentForm({ onRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (onRegister) onRegister(); // Call the callback when form is successfully submitted
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Student Information</h2>
      <Input register={register} name="studentName" placeholder="Student Name" required errors={errors} />
      <Input register={register} name="studentPhone" type="tel" placeholder="Student Phone" required errors={errors} />
      <Input register={register} name="studentEmail" type="email" placeholder="Student Email" required errors={errors} />
      <Input register={register} name="grade" placeholder="Grade" required errors={errors} />
      <Input register={register} name="school" placeholder="School" required errors={errors} />
      <Input register={register} name="classOf" placeholder="Class Of" required errors={errors} />

      <h2 className="text-xl font-bold mt-4">Parent Information</h2>
      <Input register={register} name="parentName" placeholder="Parent Name" required errors={errors} />
      <Input register={register} name="parentPhoneHome" type="tel" placeholder="Parent Phone (H)" required errors={errors} />
      <Input register={register} name="parentPhoneFather" type="tel" placeholder="Parent Phone (C-Father)" required errors={errors} />
      <Input register={register} name="parentPhoneMother" type="tel" placeholder="Parent Phone (C-Mother)" required errors={errors} />
      <Input register={register} name="parentEmail1" type="email" placeholder="Parent Email 1" required errors={errors} />
      <Input register={register} name="parentEmail2" type="email" placeholder="Parent Email 2 (Optional)" errors={errors} />

      <Button type="submit" className="mt-4">Submit</Button>
    </form>
  );
}
