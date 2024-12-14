"use server";

export async function submitForm(data: FormData) {
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  console.log({ name, email, message });

  // Add your database logic here (e.g., save to Postgres or MongoDB)
  return { success: true };
}
