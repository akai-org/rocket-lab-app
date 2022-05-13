import { useState } from 'react'
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
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { FcGoogle } from 'react-icons/fc'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [logIn, setLogIn] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)
  const handleLogOrSignClick = () => setLogIn(!logIn)

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="rgb(61, 61, 69)"
      justifyContent="center"
      alignItems="center"
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
        <Heading color="#FF7700" size="lg">
          Its-not-rocket-science
        </Heading>
        <Box minW="370px">
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              alignItems="center"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<LockIcon color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {logIn && (
                  <FormHelperText textAlign="right">
                    <Link>forgot password?</Link>
                  </FormHelperText>
                )}
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="orange"
                width="full"
              >
                {logIn ? 'Log In' : 'Sign Up'}
              </Button>
              <Text size="xs" color="gray.300">
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
        <Box color="black">
          {logIn ? 'New to us? ' : 'You already have an account. '}
          <Link color="#FF7700" href="#" onClick={handleLogOrSignClick}>
            {logIn ? 'Sign Up' : 'Log In'}
          </Link>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginForm
