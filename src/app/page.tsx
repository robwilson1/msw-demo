import { Suspense } from "react";
import { TodoList } from "@/components/TodoList";
import TodoListSkeleton from "@/components/TodoList/TodoListSkeleton";

export default async function Home() {
  return (
    <>
      <h1 className="font-bold text-4xl text-center pb-4">Todos App</h1>
      <Suspense fallback={<TodoListSkeleton />}>
        <TodoList />
      </Suspense>
    </>
  );
}
