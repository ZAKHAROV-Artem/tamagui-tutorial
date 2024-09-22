import Todo from "@/types/store/todo";
import { useDispatch } from "@/store/hooks";
import { Check, Trash } from "@tamagui/lucide-icons";
import { Swipeable } from "react-native-gesture-handler";
import { Checkbox, SizableText, View, XStack } from "tamagui";
import { removeTodo, toggleCompleted } from "@/store/slice/todo-slice";

type TodoItemProps = {
  todo: Todo;
};
export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleCompleted(todo.id));
  };
  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };
  return (
    <View br="$5" overflow="hidden">
      <Swipeable
        overshootRight={false}
        renderRightActions={() => (
          <View
            ai="center"
            bg="$red6Light"
            jc="center"
            onPress={handleRemove}
            w="$5"
          >
            <Trash />
          </View>
        )}
      >
        <XStack ai="center" bg="$background" gap="$3" p="$3">
          <Checkbox
            bc="$border"
            bg="$checkbox"
            checked={todo.completed}
            onCheckedChange={handleToggle}
            size="$6"
          >
            <Checkbox.Indicator>
              <Check color="$text" />
            </Checkbox.Indicator>
          </Checkbox>
          <SizableText
            animation="200ms"
            color={todo.completed ? "$textMuted" : "$text"}
            size="$5"
            textDecorationLine={todo.completed ? "line-through" : "none"}
          >
            {todo.title}
          </SizableText>
        </XStack>
      </Swipeable>
    </View>
  );
}
