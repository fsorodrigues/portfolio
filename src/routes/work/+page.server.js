import { AUTH_USER, AUTH_KEY } from "$env/static/private"
import PocketBase from "pocketbase"

export const prerender = true;

export async function load() {	
  const pb = new PocketBase('https://pocketbase.fsorodrigues.dev');
  await pb.admins.authWithPassword(
      AUTH_USER,
      AUTH_KEY
  );

  // fetch a paginated records list
  return {
    work: await pb.collection('work_feed').getList(1,50),
    tech: new Map(
      (await pb.collection('stack').getList(1,50))
        .items.map(d => ([d.id, d.name])) 
    )
  }
}
