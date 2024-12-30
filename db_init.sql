CREATE TABLE
  public."user" (
    id uuid NOT NULL DEFAULT gen_random_uuid (),
    email text NULL,
    username text NULL,
    password text NULL,
    created_at timestamp
    with
      time zone NOT NULL DEFAULT now (),
      CONSTRAINT user_pkey PRIMARY KEY (id)
  )
WITH
  (OIDS = FALSE);

ALTER TABLE public."user" ENABLE ROW LEVEL SECURITY;

CREATE TABLE
  public.boards (
    id uuid NOT NULL DEFAULT gen_random_uuid (),
    name text NOT NULL,
    is_active boolean NULL DEFAULT true,
    user_id uuid NOT NULL,
    CONSTRAINT boards_pkey PRIMARY KEY (id),
    CONSTRAINT boards_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user" (id) ON DELETE CASCADE
  )
WITH
  (OIDS = FALSE);

ALTER TABLE public.boards ENABLE ROW LEVEL SECURITY;

CREATE TABLE
  public.columns (
    id uuid NOT NULL DEFAULT gen_random_uuid (),
    board_id uuid NOT NULL,
    name text NOT NULL,
    CONSTRAINT columns_pkey PRIMARY KEY (id),
    CONSTRAINT columns_board_id_fkey FOREIGN KEY (board_id) REFERENCES public.boards (id) ON DELETE CASCADE
  )
WITH
  (OIDS = FALSE);

ALTER TABLE public.columns ENABLE ROW LEVEL SECURITY;

CREATE TABLE
  public.tasks (
    id uuid NOT NULL DEFAULT gen_random_uuid (),
    column_id uuid NOT NULL,
    title text NOT NULL,
    description text NULL,
    CONSTRAINT tasks_pkey PRIMARY KEY (id),
    CONSTRAINT tasks_column_id_fkey FOREIGN KEY (column_id) REFERENCES public.columns (id) ON DELETE CASCADE
  )
WITH
  (OIDS = FALSE);

ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

CREATE TABLE
  public.subtasks (
    id uuid NOT NULL DEFAULT gen_random_uuid (),
    task_id uuid NOT NULL,
    title text NOT NULL,
    is_completed boolean NULL DEFAULT false,
    CONSTRAINT subtasks_pkey PRIMARY KEY (id),
    CONSTRAINT subtasks_task_id_fkey FOREIGN KEY (task_id) REFERENCES public.tasks (id) ON DELETE CASCADE
  )
WITH
  (OIDS = FALSE);

ALTER TABLE public.subtasks ENABLE ROW LEVEL SECURITY;