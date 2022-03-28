import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Iury Barbosa</Text>
                    <Text color="gray.300" fontSize="small">Iury_barbosa07@hotmail.com</Text>
                </Box>
            )}


            <Avatar size="md" name="Iury Barbosa" src="https://github.com/askizin.png" />
        </Flex>
    );
}