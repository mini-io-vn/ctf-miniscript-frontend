'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'
import { FaElementor, FaKeycdn, FaScroll, FaSpellCheck } from 'react-icons/fa'

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function Tutorial() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FaScroll} w={10} h={10} color={'blackAlpha.500'}/>}
          title={'Nhận đề'}
          text={
            'Tùy vào mỗi kỳ sẽ có mỗi đề với gợi ý khác nhau'
          }
        />
        <Feature
          icon={<Icon as={FaKeycdn} w={10} h={10} color={'blackAlpha.500'}/>}
          title={'Tìm cờ'}
          text={
            'Dùng mọi cách thức để lấy được cờ'
          }
        />
        <Feature
          icon={<Icon as={FaSpellCheck} w={10} h={10} color={'blackAlpha.500'}/>}
          title={'Về đích'}
          text={
            'Nhận cờ và quay về website để nhập và nhận thưởng'
          }
        />
      </SimpleGrid>
    </Box>
  )
}