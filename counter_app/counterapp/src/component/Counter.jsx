import { Box, Button, CircularProgress, Flex, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineReload } from "react-icons/ai";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDecrementCount, handleIncrementCount, handleResetCount } from '../redux/counter/action';

export const Counter = () => {
    const [isLoadingIncrement, setIsLoadingIncrement] = useState(false);
    const [isLoadingDecrement, setIsLoadingDecrement] = useState(false);
    const [isLoadingReset, setIsLoadingReset] = useState(false);

    const { countValue } = useSelector((store) => store.counterReducer);
    const dispatch = useDispatch();
    const [incrementPayload, setIncrementPayload] = useState(1);
    const [decrementPayload, setDecrementPayload] = useState(1);

    const handleIncrement = () => {
        setIsLoadingIncrement(true);

        setTimeout(() => {
            dispatch(handleIncrementCount(incrementPayload));
            setIsLoadingIncrement(false);
        }, 1000);
    };

    const handleDecrement = () => {
        setIsLoadingDecrement(true);
        setTimeout(() => {
            dispatch(handleDecrementCount(decrementPayload));
            setIsLoadingDecrement(false);
        }, 1000);
    };

    const handleReset = () => {
        setIsLoadingReset(true);
        setTimeout(() => {
            dispatch(handleResetCount(0));
            setIsLoadingReset(false);
        }, 1000);
    };

    return (
        <>
            <Box
                w="full"
                p={4}
                maxW="md"
                mx="auto"
                backgroundImage="url('https://images.unsplash.com/photo-1595757816291-ab4c1cba0fc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')" // Replace with your background image URL
                backgroundSize="cover"
                backgroundPosition="center"
                borderRadius="md"
                shadow="md"
                textAlign="center"
                color="white"
            >
                <Box
                    fontSize="4xl"
                    fontWeight="bold"
                    mb={4}

                    bgGradient="linear(to-r, violet.500, teal.500)"
                >
                    {countValue}
                </Box>
                <Flex direction="column" alignItems="center">
                    <InputGroup mb={2} w="full" maxW="sm">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<AiOutlinePlus />}
                        />
                        <Input
                            placeholder="Increment Value"
                            type="number"
                            value={incrementPayload}
                            onChange={(e) => setIncrementPayload(Number(e.target.value))}
                            bg="white"
                            color="black"
                            border="none"
                            borderRadius="md"
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                h="1.75rem"
                                size="sm"
                                onClick={() => setIncrementPayload(1)}
                                bg="transparent"
                                _hover={{ bg: "transparent", color: "gray.400" }}
                                _active={{ bg: "transparent", color: "gray.400" }}
                                _focus={{ boxShadow: "none" }}
                            >
                                <AiOutlineReload />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup mb={2} w="full" maxW="sm">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<AiOutlineMinus color="gray.300" />}
                        />
                        <Input
                            placeholder="Decrement Value"
                            type="number"
                            value={decrementPayload}
                            onChange={(e) => setDecrementPayload(Number(e.target.value))}
                            bg="white"
                            color="black"
                            border="none"
                            borderRadius="md"
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                h="1.75rem"
                                size="sm"
                                onClick={() => setDecrementPayload(1)}
                                bg="transparent"
                                _hover={{ bg: "transparent", color: "gray.400" }}
                                _active={{ bg: "transparent", color: "gray.400" }}
                                _focus={{ boxShadow: "none" }}
                            >
                                <AiOutlineReload />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button
                        colorScheme="pink"
                        leftIcon={<AiOutlinePlus />}
                        onClick={handleIncrement}
                        isLoading={isLoadingIncrement}
                        loadingText="Incrementing..."
                        spinner={<CircularProgress size="24px" color="pink.200" />}
                        disabled={isLoadingIncrement}
                        mb={2}
                    >
                        Increment
                    </Button>
                    <Button
                        colorScheme="teal"
                        leftIcon={<AiOutlineMinus />}
                        onClick={handleDecrement}
                        isLoading={isLoadingDecrement}
                        loadingText="Decrementing..."
                        spinner={<CircularProgress size="24px" color="teal.200" />}
                        disabled={isLoadingDecrement}
                        mb={2}
                    >
                        Decrement
                    </Button>
                    <Button
                        colorScheme="purple"
                        leftIcon={<AiOutlineReload />}
                        onClick={handleReset}
                        isLoading={isLoadingReset}
                        loadingText="Resetting..."
                        spinner={<CircularProgress size="24px" color="purple.200" />}
                        disabled={isLoadingReset}
                    >
                        Reset
                    </Button>
                </Flex>
            </Box>
        </>
    );
};
