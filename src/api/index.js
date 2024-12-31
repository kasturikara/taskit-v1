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

    return { data };
  } catch (error) {
    return { error: error.message };
  }
}

// ---------- column ----------
export async function getColumnByBoardID(boardID) {
  try {
    const { data, error } = await supabase
      .from("columns")
      .select("*")
      .eq("board_id", boardID);

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  } catch (error) {
    return { error: error.message };
  }
}

// ---------- task ----------
export async function getTaskByColumnID(columnID) {
  try {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("column_id", columnID);

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  } catch (error) {
    return { error: error.message };
  }
}

// ---------- subtask ----------
export async function getSubtaskByTaskID(taskID) {
  try {
    const { data, error } = await supabase
      .from("subtasks")
      .select("*")
      .eq("task_id", taskID);

    if (error) {
      throw new Error(error.message);
    }

    return { data };
  } catch (error) {
    return { error: error.message };
  }
}
