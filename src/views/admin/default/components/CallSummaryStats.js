// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Text,
  SimpleGrid,
  useColorModeValue,
  Badge,
  HStack,
  VStack,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import IconBox from "components/icons/IconBox";
import React from "react";
import { 
  MdPhone, 
  MdAttachMoney, 
  MdSchedule, 
  MdCall,
  MdTrendingUp,
  MdTrendingDown,
  MdTrendingFlat
} from "react-icons/md";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

export default function CallSummaryStats(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "white");
  const cardBg = useColorModeValue("white", "navy.800");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const statsData = [
    {
      title: "Total Calls",
      value: "1,247",
      change: "+12.5%",
      changeType: "positive",
      icon: MdPhone,
      color: "blue.500",
      bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: "This month"
    },
    {
      title: "Total Minutes",
      value: "2,847",
      change: "+8.2%",
      changeType: "positive", 
      icon: MdSchedule,
      color: "green.500",
      bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "47.4 hours"
    },
    {
      title: "Total Spent",
      value: "$1,247.50",
      change: "-2.1%",
      changeType: "negative",
      icon: MdAttachMoney,
      color: "orange.500", 
      bgGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: "Avg $1.00/call"
    },
    {
      title: "Success Rate",
      value: "98.2%",
      change: "+0.3%",
      changeType: "positive",
      icon: MdCall,
      color: "purple.500",
      bgGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      description: "24 failed calls"
    }
  ];

  const StatCard = ({ data }) => {
    const { title, value, change, changeType, icon: IconComponent, color, bgGradient, description } = data;
    
    return (
      <Card
        bg={cardBg}
        border="1px solid"
        borderColor={borderColor}
        borderRadius="20px"
        p="24px"
        h="100%"
        minH="180px"
        display="flex"
        flexDirection="column"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease"
        }}
        transition="all 0.3s ease"
      >
        <VStack spacing="16px" align="stretch" h="100%" justify="space-between">
          <Flex justify="space-between" align="center">
            <IconBox
              w="48px"
              h="48px"
              bg={bgGradient}
              borderRadius="12px"
              icon={<Icon w="24px" h="24px" as={IconComponent} color="white" />}
            />
            <Badge
              colorScheme={changeType === "positive" ? "green" : changeType === "negative" ? "red" : "gray"}
              variant="subtle"
              fontSize="xs"
              px="8px"
              py="4px"
              borderRadius="6px"
            >
              <HStack spacing="4px">
                {changeType === "positive" && <Icon as={RiArrowUpSFill} w="12px" h="12px" />}
                {changeType === "negative" && <Icon as={RiArrowDownSFill} w="12px" h="12px" />}
                <Text>{change}</Text>
              </HStack>
            </Badge>
          </Flex>
          
          <VStack spacing="4px" align="start" flex="1" justify="center">
            <Text
              color={textColor}
              fontSize="32px"
              fontWeight="800"
              lineHeight="1"
            >
              {value}
            </Text>
            <Text
              color={textColorSecondary}
              fontSize="sm"
              fontWeight="600"
            >
              {title}
            </Text>
            <Text
              color={textColorSecondary}
              fontSize="xs"
              opacity="0.8"
            >
              {description}
            </Text>
          </VStack>
        </VStack>
      </Card>
    );
  };

  return (
    <Box w="100%" mb="20px">
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="20px" alignItems="stretch">
        {statsData.map((stat, index) => (
          <StatCard key={index} data={stat} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
