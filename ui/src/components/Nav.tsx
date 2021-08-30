import { Box, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { useMeQuery } from '../generated/graphql';

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();

  let body = null;

  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color="yellow" mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="yellow" mr={2}>
            Register
          </Link>
        </NextLink>
      </>
    );
  } else {
    body = <Box>{data.me.username}</Box>;
  }
  return (
    <Flex bg="tomato" p={4} md={'auto'}>
      <Box ml={'auto'}>{body}</Box>
    </Flex>
  );
};

export default Nav;
