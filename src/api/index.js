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

export async function getBoards() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  try {
    const { data, error } = await supabase
      .from("boards")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  } catch (error) {
    return { error: error.message };
  }
}

export async function getBoardByID(id) {
  try {
    const { data, error } = await supabase
      .from("boards")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    console.log(data, "api");
    return { data };
  } catch (error) {
    return { error: error.message };
  }
}
