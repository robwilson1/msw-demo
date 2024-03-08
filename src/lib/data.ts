export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos() {
  await new Promise((res) => setTimeout(res, 500));

  return fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => response.json() as Promise<Todo[]>,
  );
}
