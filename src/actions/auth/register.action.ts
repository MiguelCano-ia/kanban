import { FormState, RegisterSchema } from "@/schemas/auth.schema";

const API_URL = "http://localhost:4000/api";

export async function register(state: FormState, formData: FormData) {
  const validatedFields = RegisterSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await fetch(`${API_URL}/auth/new`, {
      method: "POST",
      body: JSON.stringify(validatedFields.data),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (!response.ok) {
      return {
        errors: response,
      };
    }

    return response;
  } catch {
    return {
      errors: {
        message: "An error occurred. Please try again later.",
      },
    };
  }
}
