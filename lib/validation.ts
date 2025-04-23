import { z } from "zod"

export const signUpSchema = z
    .object({
        fullname: z.string()
            .nonempty({ message: "firstname is required." }).min(2, {
                message: 'Fullname must be at least 2 characters.',
            }),
        email: z.string().email({
            message: 'Please enter a valid email address.',
        }),
        password: z
            .string()
            .nonempty({ message: "Password is required." })
            .min(4, { message: "Password must be at least 4 characters." }),
        confirmPassword: z.string().min(1, "Confirm Password is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match.",
        path: ["confirmPassword"],
    });



export const loginSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    password: z
        .string()
        .nonempty({ message: "Password is required." })
})