// "use client";

// //Library
// import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import { Button } from "./ui/button";

// // Type with hooks
// import { Controller, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { SignInFormType, signInFormSchema } from "@/schemas/forms";
// import { CheckboxItem } from "@radix-ui/react-dropdown-menu";

// export default function SignInForm() {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<SignInFormType>({
//     resolver: zodResolver(signInFormSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//       rememberMe: false,
//     },
//   });

//   //To handle sign in form submission
//   const handleSignIn = handleSubmit(async (data: SignInFormType) => {
//     console.log(data);
//     // const res = await
//     //Notification
//   });

//   return (
//     <>
//       <form onSubmit={handleSignIn}>
//         <FieldGroup>
//           <Controller
//             name="email"
//             control={control}
//             render={({ field, fieldState }) => (
//               <Field data-invalid={fieldState.invalid}>
//                 <FieldLabel>Email</FieldLabel>
//                 <Input {...field} name="Email" placeholder="Email" />
//               </Field>
//             )}
//           />
//           <Controller
//             name="password"
//             render={({ field, fieldState }) => (
//               <Field data-invalid={fieldState.invalid}>
//                 <FieldLabel>Email</FieldLabel>
//                 <Input {...field} name="password" placeholder="password" />
//               </Field>
//             )}
//           />
//           <Controller
//             name="rememberMe"
//             render={({ field, fieldState }) => (
//               <Field
//                 data-invalid={fieldState.invalid}
//                 orientation={"horizontal"}
//               >
//                 <CheckboxItem {...field} />
//               </Field>
//             )}
//           />
//           <Button type="submit" className="w-full">
//             Sign In
//           </Button>
//         </FieldGroup>
//       </form>
//     </>
//   );
// }

"use client";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormType, signInFormSchema } from "@/schemas/forms";

export default function SignInForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleSignIn = handleSubmit(async (data: SignInFormType) => {
    console.log(data);
  });

  return (
    <form onSubmit={handleSignIn}>
      <FieldGroup>
        {/* Email */}
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Email</FieldLabel>
              <Input {...field} placeholder="Email" />
              {fieldState.error && (
                <p className="text-red-500 text-sm">{fieldState.error.message}</p>
              )}
            </Field>
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Password</FieldLabel>
              <Input {...field} type="password" placeholder="Password" />
              {fieldState.error && (
                <p className="text-red-500 text-sm">{fieldState.error.message}</p>
              )}
            </Field>
          )}
        />

        {/* Remember Me */}
        <Controller
          name="rememberMe"
          control={control}
          render={({ field }) => (
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
              <span>Remember Me</span>
            </label>
          )}
        />

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </FieldGroup>
    </form>
  );
}
