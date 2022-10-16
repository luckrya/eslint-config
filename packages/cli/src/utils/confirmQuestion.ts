import { prompt } from "enquirer";

export default async function confirmQuestion(
  message: string = "Still continue ?"
) {
  const { ok } = await prompt<{ ok: boolean }>({
    type: "confirm",
    name: "ok",
    message,
  });

  return ok;
}
