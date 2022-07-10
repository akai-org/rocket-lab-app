import { Flex, Text, Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      bg="#FFFFFF"
      color="#2D3748"
      w="100vw"
      h="2rem"
      borderTop="1px solid #D5D5D5"
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Image src="logo-akai.png" alt="Logo AKAI" />
      <Text>Powered by AKAI</Text>
    </Flex>
  )
}

export default Footer
