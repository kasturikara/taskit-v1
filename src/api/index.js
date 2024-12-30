import { supabase } from "./../supabaseClient";

export async function login(email, password) {
  try {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("email", email)
      .single();

    if (!data) {
      throw new Error("Email belum terdaftar!");
    }

    if (data.password !== password) {
      throw new Error("Password salah!");
    }
    if (error) {
      throw new Error(error.message);
    }

    return { data };
  } catch (error) {
    return { error: error.message };
  }
}
