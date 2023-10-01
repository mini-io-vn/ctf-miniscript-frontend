"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Center,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  StarIcon,
  InfoOutlineIcon,
  CalendarIcon,
} from "@chakra-ui/icons";
import { useDataProcess } from "../Data/process";
import { useEffect } from "react";
export default function Notification() {
  const { state, dispatch } = useDataProcess();
  useEffect(() => {
    if(state.notification.show){
        const timer = setTimeout(() => {
            dispatch({ type: 'notification',notification:{show:false, content:"",type:undefined} });
          }, 3000); 
          return () => clearTimeout(timer);
    }
  }, [state.notification.show]);
  return (
    
    <div
      style={{
        position: 'fixed',
        bottom: '5px',
        right: '0px',
      }}
    >
      <Stack spacing={3}>
        {state.notification.show&&(<Alert status={state.notification.type} variant='subtle'>
          <AlertIcon />
         {state.notification.content}
        </Alert>)}
        
      </Stack>
    </div>
  );
}

