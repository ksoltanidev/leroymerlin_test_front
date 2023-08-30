import { MonsterModelExtended } from "@/models/monsterModel";

/**
 * return all monsters from the API
 */
export async function getMonsters(): Promise<{ status: number; ok: boolean; data?: MonsterModelExtended[] }> {
  //https://api.open5e.com/v1/monsters/?format=json
  const requestInit: RequestInit = {
    method: "GET",
  };

  const response = await fetch(`https://api.open5e.com/v1/monsters/?format=json`, requestInit);
  if (!response.ok) return { status: response.status, ok: response.ok };
  try {
    const resData = await response.json();
    return { status: response.status, ok: response.ok, data: resData.results };
  } catch (err) {
    return Promise.reject(err);
  }
}
