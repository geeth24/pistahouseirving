import {
    Avatar,
    Box,
    chakra,
    Flex,
    SimpleGrid,
    useColorModeValue,
} from "@chakra-ui/react"

const testimonials = [
    {
        name: "Rajya Gunnampalli",
        content:
            "Pista house food is very delicious  for veg and non veg& service great as well.  Ordered food for multiple events for our home and community.",
        avatar: "/reviewer.jpeg",
    },
    {
        name: "Vignesh Dhakshinamoorthy",
        content:
            "Chicken Dum Biryani was fabulous, that too on a Monday night. Highly recommend this spot for authentic flavors. Not too spicy either.",
        avatar: "/reviewer1.png",
    },
    {
        name: "Sahithi Daroz",
        content:
            "Biryani is crazy. Reminded me of hyderabad🤩 and haleem is super yummy please visit this place, in India Pista house is one of the famous places for haleem and the taste didn’t change at all. So people who are away from home and missing haleem please visit this place and have it, you will not regret it.",
        avatar: "/reviewer2.png",
    },
    {
        name: "Akash Bollepalli",
        content:
            "I had the best Haleem ever! I can't express how happy i was after eating haleem here, it's the best! Must try! it has the same hyderabad's best haleem essence! I loved it, i would highly suggest to try it",
        avatar: "/reviewer3.png",
    },
]

const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED64A6' /%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%23F56565' /%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%2338B2AC' /%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED8936' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
]

interface TestimonialCardProps {
    name: string
    content: string
    avatar: string
    index: number
}

function TestimonialCard(props: TestimonialCardProps) {
    const { name, content, avatar, index } = props
    return (
        <Box
            boxShadow={"lg"}
            maxW={"640px"}
            // @ts-ignore
            direction={{ base: "column-reverse", md: "row" }}
            width={"full"}
            rounded={"xl"}
            p={10}
            justifyContent={"space-between"}
            position={"relative"}
            bg={useColorModeValue("white", "rgb(26 32 44)")}
            _after={{
                content: '""',
                position: "absolute",
                height: "22px",
                width: "28px",
                left: "35px",
                top: "-10px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundImage: "/quotes.png",
            }}
            _before={{
                content: '""',
                position: "absolute",
                zIndex: "0",
                height: "full",
                maxW: "640px",
                width: "full",
                filter: "blur(40px)",
                transform: "scale(0.98)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                top: 0,
                left: 0,
                backgroundImage: backgrounds[index % 4],
                opacity: 0.6,
            }}
        >
            <Flex>
                <Flex
                    direction={"column"}
                    textAlign={"left"}
                    justifyContent={"space-between"}
                    zIndex={1}
                >
                    <chakra.p
                        fontFamily={"Inter"}
                        fontWeight={"medium"}
                        fontSize={"15px"}
                        pb={4}
                    >
                        {content}
                    </chakra.p>
                    <chakra.p
                        fontFamily={"Work Sans"}
                        fontWeight={"bold"}
                        fontSize={14}
                    >
                        {name}
                    </chakra.p>
                </Flex>
                <Avatar
                    src={avatar}
                    height={"80px"}
                    width={"80px"}
                    alignSelf={"center"}
                    m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
                    zIndex={1}
                />
            </Flex>
        </Box>
    )
}

export default function Testimonials() {
    return (
        <Flex
            textAlign={"center"}
            pt={10}
            justifyContent={"center"}
            direction={"column"}
            width={"full"}
            overflow={"hidden"}
        >
            <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
                <chakra.h1
                    py={5}
                    fontSize={48}
                    fontWeight={"bold"}
                    color={useColorModeValue("#6ba644", "#beeca0")}
                >
                    People love us
                </chakra.h1>
            </Box>
            <SimpleGrid
                columns={{ base: 1, xl: 2 }}
                spacing={"20"}
                mt={16}
                mx={"auto"}
                mb={20}
            >
                {testimonials.map((cardInfo, index) => (
                    <TestimonialCard {...cardInfo} index={index} key={index} />
                ))}
            </SimpleGrid>
        </Flex>
    )
}
