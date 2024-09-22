import { useSelector } from "@/store/hooks";
import { ScrollView, YStack } from "tamagui";

import TodoItem from "./todo-item";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <YStack gap="$1">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </YStack>
    </ScrollView>
  );
}
