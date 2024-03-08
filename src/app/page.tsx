import { Suspense } from "react";
import { TodoList } from "@/components/TodoList";

export default async function Home() {
  return (
    <>
      <h1 className="font-bold text-4xl">Todos App</h1>
      <Suspense fallback={<p>Loading todos...</p>}>
        <TodoList />
      </Suspense>
    </>
  );
}
