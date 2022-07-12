import { Flex, Text, Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      bg="#FFFFFF"
      color="#2D3748"
      w="100vw"
      h="40px"
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Text>Powered by </Text>
      <Image src="logo-akai.png" alt="Logo AKAI" />
    </Flex>
  )
}

export default Footer
