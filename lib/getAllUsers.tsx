export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}

// try catch not used here because we are trying to use an error boundary
