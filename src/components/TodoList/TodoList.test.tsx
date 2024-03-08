import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodoList from "./TodoList";
import { server } from "@/mocks/node";
import { HttpResponse, http } from "msw";

function renderComponent() {
  const queryClient = new QueryClient();

  return render(
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>,
  );
}

describe("The TodoList component", () => {
  test("should render the todo list", async () => {
    renderComponent();

    const firstTodoTitle = "Foo Bar Baz";

    expect(
      await screen.findByText(firstTodoTitle, { exact: false }),
    ).toBeDefined();

    screen.debug();
  });

  test.only("should handle empty array", async () => {
    renderComponent();

    server.use(
      http.get("https://jsonplaceholder.typicode.com/todos", () => {
        HttpResponse.json([]);
      }),
    );

    screen.debug();
  });
});
