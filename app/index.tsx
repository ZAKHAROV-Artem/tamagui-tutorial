import { useState } from "react";
import * as Crypto from "expo-crypto";
import { useDispatch } from "@/store/hooks";
import { TodoList } from "@/components/todos";
import { addTodo } from "@/store/slice/todo-slice";
import SafeArea from "@/components/utils/safe-area";
import { Button, H1, H4, Input, YStack } from "tamagui";
import { ThemeSelect } from "@/components/inputs/theme-select/";
import AvoidKeyboardView from "@/components/utils/avoid-keyboard-view";

export default function Index() {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  const handleAdd = (title: string) => {
    dispatch(
      addTodo({
        completed: false,
        id: Crypto.randomUUID(),
        title,
      }),
    );
    setTitle("");
  };
  return (
    <SafeArea>
      <AvoidKeyboardView>
        <YStack bg="$background" gap="$3" h="100%" padding="$3">
          <ThemeSelect />
          <H1 color="$textAccent">Tasks</H1>
          <H4 color="$text">Title:</H4>
          <Input
            bbw="$1"
            blw={0}
            borderColor="$inputBorder"
            brw={0}
            btw={0}
            color="$text"
            onChangeText={setTitle}
            placeholder="Pay utilities bill"
            placeholderTextColor="$textMuted"
            value={title}
          />
          <Button bg="$buttonBg" color="$text" onPress={() => handleAdd(title)}>
            Add todo
          </Button>
          <TodoList />
        </YStack>
      </AvoidKeyboardView>
    </SafeArea>
  );
}
