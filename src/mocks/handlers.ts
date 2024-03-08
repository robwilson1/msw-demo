import { Todo } from "@/lib/data";
import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos", () => {
    return HttpResponse.json([
      {
        id: 1,
        userId: 1,
        title: "Foo Bar Baz",
        completed: false,
      } satisfies Todo,
    ]);
  }),
];
