"use server";

import { redirect } from "next/navigation";
import { bukaSesiAdmin, kunciCocok, tutupSesiAdmin } from "@/lib/admin";
import { dalamBatas } from "@/lib/rateLimit";

export async function masukAdmin(formData: FormData) {
  if (!(await dalamBatas("admin"))) redirect("/admin?galat=sering");
  const kunci = formData.get("kunci");
  if (typeof kunci !== "string" || !kunciCocok(kunci)) redirect("/admin?galat=kunci");
  await bukaSesiAdmin();
  redirect("/admin");
}

export async function keluarAdmin() {
  await tutupSesiAdmin();
  redirect("/admin");
}
