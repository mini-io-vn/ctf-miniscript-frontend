import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Avatar, WrapItem, Center } from '@chakra-ui/react';
import RefreshIcon from '@mui/icons-material/Refresh';
import React from 'react';

interface LeaderboardType {
    name: String,
    rank: number,
    icon: String,
    point: number,

}

const BXH: Array<LeaderboardType> = [
    {
        name: "accac",
        rank: 1,
        icon: "1234",
        point: 123
    }
];

function LeaderboardPage() {
    return (

        <TableContainer>
            <Table variant='simple'>
                <TableCaption><RefreshIcon/>Làm mới để cập nhật</TableCaption>
                <Thead>
                    <Tr>
                        <Th textAlign={"center"} alignItems={"center"}>Thứ hạng</Th>
                        <Th textAlign={"center"} alignItems={"center"}>Tài khoản</Th>
                        <Th textAlign={"center"} alignItems={"center"}>Điểm số</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {BXH.map((data) => (
                        <Tr>
                            <Td textAlign={"center"} alignItems={"center"}>{data.rank}</Td>
                            <Td textAlign={"center"} alignItems={"center"}>
                            <Center>
                                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            </Center>{data.name}</Td>
                            <Td textAlign={"center"} alignItems={"center"}>{data.point}</Td>
                        </Tr>
                    ))}
                    {/* <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr> */}
                </Tbody>

            </Table>
        </TableContainer>

    );
}

export default LeaderboardPage;
