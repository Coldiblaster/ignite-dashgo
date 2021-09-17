import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vinicius Bastazin</Text>
        <Text color="gray.300" fontSize="small">
          vbastazin@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Vinicius Bastazin"
        src="https://avatars.githubusercontent.com/u/47608086?v=4"
      />
    </Flex>
  );
}
