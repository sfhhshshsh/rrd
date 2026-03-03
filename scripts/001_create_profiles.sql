-- Create profiles table
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  display_name text,
  avatar_url text,
  bio text,
  team text,
  position text,
  jersey_number text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

-- Everyone can view profiles
create policy "profiles_select_all" on public.profiles for select using (true);
-- Users can insert their own profile
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);
-- Users can update their own profile
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);
-- Users can delete their own profile
create policy "profiles_delete_own" on public.profiles for delete using (auth.uid() = id);
