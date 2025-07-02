"use server";
export async function signIn(
  prevState: { message: string } | null,
  formData: FormData
) {
  console.log(formData.get("name"));
  return {
    message: "Code must be longer",
  };
}
