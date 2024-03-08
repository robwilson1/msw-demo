"use client";

import Image from "next/image";
import { getTodos, type Todo } from "@/lib/data";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function TodoList() {
  const { data: todos } = useSuspenseQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return (
    <ul className="space-y-4">
      {todos?.slice(0, 10).map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center p-4 rounded-lg shadow-md ${todo.completed ? "bg-green-100" : "bg-red-100"}`}
        >
          <Image
            src={`https://i.pravatar.cc/50?u=${todo.userId}`}
            alt="User Avatar"
            className="w-10 h-10 rounded-full mr -4"
            width={50}
            height={50}
          />
          <div className="flex-1">
            <h3 className="font-bold">{todo.title}</h3>
          </div>
          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold ${todo.completed ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
          >
            {todo.completed ? "Completed" : "Not Completed"}
          </span>
        </li>
      ))}
    </ul>
  );
}
