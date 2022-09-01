import { useState, SyntheticEvent, useRef, memo } from 'react'
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Text,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'
import { IoIosAt, IoIosLock } from 'react-icons/io'
import { FcGoogle } from 'react-icons/fc'
import { useColors } from 'ui/theme'

export const LoginForm = memo(() => {
  const [showPassword, setShowPassword] = useState(false)
  const [logIn, setLogIn] = useState(false)
  const [emailIsCorrect, setEmailIsCorrect] = useState(true)
  const [passwordIsCorrect, setPasswordIsCorrect] = useState(true)
  const colors = useColors()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const formSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    const password = passwordRef.current!.value

    setEmailIsCorrect(true)
    setPasswordIsCorrect(true)

    if (!validateEmail(emailRef.current!.value)) {
      setEmailIsCorrect(false)
    } else if (password === '' || password.length <= 7) {
      setPasswordIsCorrect(false)
    }
  }

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const logOrSignHandler = () => {
    setLogIn(!logIn)
    emailRef.current!.value = ''
    passwordRef.current!.value = ''
  }

  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="100vh"
      backgroundColor="rgb(61, 61, 69)"
      justifyContent="center"
      alignItems="center"
      overflowY="hidden" // TODO a pop-up white bar on smaller desktop screens
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        backgroundColor="whiteAlpha.900"
        p="25px"
      >
        <Avatar bg="#FF7700" />
        <Heading color={colors.orangePrimary} size="lg">
          Its-not-rocket-science
        </Heading>
        <Box
          minW="370px"
          h={{ base: 'auto', xl: '75vh', md: '85vh', lg: '80vh', sm: '75vh' }}
        >
          <form onSubmit={formSubmitHandler}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor={colors.backgroundPrimary}
              boxShadow="md"
              alignItems="center"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<IoIosAt color={colors.fontSecondary} />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    ref={emailRef}
                  />
                </InputGroup>
                {!emailIsCorrect && (
                  <FormHelperText
                    textAlign="center"
                    color={colors.errorPrimary}
                    fontSize="md"
                  >
                    Email is incorrect!
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color={colors.fontSecondary}
                    children={<IoIosLock color={colors.fontSecondary} />}
                  />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    ref={passwordRef}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {logIn && (
                  <FormHelperText textAlign="right">
                    <Link>forgot password?</Link>
                  </FormHelperText>
                )}
                {!passwordIsCorrect && (
                  <FormHelperText
                    textAlign="center"
                    color={colors.errorPrimary}
                    fontSize="md"
                    textDecoration="bold"
                  >
                    Password must consist of at least 8 characters!
                  </FormHelperText>
                )}
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme={colors.orangePrimary}
                width="full"
              >
                {logIn ? 'Log In' : 'Sign Up'}
              </Button>
              <Text size="xs" color={colors.fontSecondary}>
                OR
              </Text>
              <Button
                w={'full'}
                maxW={'xs'}
                variant={'outline'}
                leftIcon={<FcGoogle />}
              >
                <Text>{logIn ? 'Log in' : 'Sign in'} with Google</Text>
              </Button>
            </Stack>
          </form>
        </Box>
        <Box color={colors.fontSecondary}>
          {logIn ? 'New to us? ' : 'You already have an account. '}
          <Link
            color={colors.orangePrimary}
            href="#"
            onClick={logOrSignHandler}
          >
            {logIn ? 'Sign Up' : 'Log In'}
          </Link>
        </Box>
      </Stack>
    </Flex>
  )
})
