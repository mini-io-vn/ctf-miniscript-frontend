'use client'

import { Container, Grid, GridItem, Flex, Box, Text, Heading } from '@chakra-ui/react'

function Reward() {
  return (
    <Container py={5} maxW={'container.lg'}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={6}>
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
          <Heading as={'h2'}>Phần thưởng mỗi kỳ</Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              500K
            </Text>
            <Box fontSize={'sm'}>
              Số tiền nhận được ngẫu nhiên khi hoàn thành cờ sớm nhất.
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              100K
            </Text>
            <Box fontSize={'sm'}>
              Chia ngẫu nhiên cho tất cả người tham gia đạt điều kiện hợp lệ.
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Reward