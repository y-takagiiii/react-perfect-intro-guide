import { useState } from "react";
import { HStack, Input, Button, useToast } from '@chakra-ui/react';

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const toast = useToast();

  const addTodo = (e) => {
    e.preventDefault();

    if (!enteredTodo) {
      toast({
        title: "新しいタスクを入力してください",
        status: "error",
        duration: 2000,
        isClosable: true
      });
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");

    toast({
      title: "新しいタスクを追加しました！",
      description: enteredTodo,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <form onSubmit={addTodo}>
      <HStack>
        <Input
          placeholder="新しいタスク"
          _placeholder={{ opacity: "0.3", color: "gray.500"}}
          size="lg"
          p={3}
          bgColor="white"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <Button
          type="submit"
          colorScheme="blue"
          bgColor="white"
          size="md"
          variant="outline"
          px={7}
        >
          追加
        </Button>
      </HStack>
    </form>
  );
};

export default Form;
