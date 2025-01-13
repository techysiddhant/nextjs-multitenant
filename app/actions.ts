"use server";

import db from "@/db";
import { user } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
export const getSession = async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
};
export const updateSubdomain = async (subdomain: string) => {
  try {
    if (!subdomain) return;
    const data = await getSession();
    if (!data || !data.user) return;
    const sessionuser = data.user;
    await db.update(user).set({ subdomain }).where(eq(user.id, sessionuser.id));
  } catch (error) {
    console.log("update subdomain", error);
  }
};
