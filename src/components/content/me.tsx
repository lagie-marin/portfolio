import { Badge, Button, Image, Link, Stack, Text, HStack, VStack, DialogRoot, DialogTrigger, DialogContent, MenuRoot, Box, DialogHeader } from "@chakra-ui/react";
import { CiLinkedin, CiMail, CiPhone } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { Toaster, toaster } from "@/components/ui/toaster"
import "./me.css";

export function Me() {
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        toaster.create({
            title: `${text} copié dans le presse-papier`,
            type: "success",
            duration: 3000
        });
    };

    return (
        <>
            <HStack align="center" gap={2} flex={1} p={4} justifyContent="space-between" wrap="wrap">
                <VStack align="flex-start" gap={4} flex={1}>
                    <Stack direction="row" alignItems="flex-start">
                        <Badge size="md" colorPalette="orange" variant="subtle">Étudiant à Épitech</Badge>
                    </Stack>
                    <Text className="title">Développeur Full-Stack</Text>
                    <div className="me-content">
                        <Link href="#project" textDecoration="none" marginRight="1vw">
                            <Button backgroundColor="white" color="black" borderRadius="25px" fontWeight="normal">Mes projets <IoMdArrowForward /></Button>
                        </Link>
                        <DialogRoot placement="center">
                            <DialogTrigger asChild>
                                <Button variant="outline" size="sm" backgroundColor="#2b3035" color="white" borderRadius="25px" fontWeight="normal">
                                    <MdOutlineEmail />Me contacter
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="popup-contact" backgroundColor="#18181b">
                                <DialogHeader className="sub-title">
                                    <p>Me contacter</p>
                                    <Box flex="1" height="0.5px" backgroundColor="grey" width="100%" />
                                </DialogHeader>
                                <MenuRoot>
                                    <VStack gap={4}>
                                        <HStack gap={4} width="100%" justifyContent="center">
                                            <Button backgroundColor="#60a5fa" color="black" borderColor="white" borderRadius="1px" width="47.5%" onClick={() => window.open("https://www.linkedin.com/in/marin-lagi%C3%A9-2b0b992a0/", "_blank")}>
                                                <CiLinkedin />LinkedIn
                                            </Button>
                                            <Button backgroundColor="#27272a" borderColor="white" borderRadius="1px" width="47.5%" onClick={() => window.open("https://github.com/lagie-marin", "_blank")}><FaGithub />GitHub</Button>
                                        </HStack>
                                        <HStack width="100%" alignItems="center">
                                            <Box flex="1" height=".5px" backgroundColor="grey" />
                                            <Text style={{ color: "white", textAlign: "center", margin: "0 10px" }}>Ou</Text>
                                            <Box flex="1" height=".5px" backgroundColor="grey" />
                                        </HStack>
                                        <HStack justifyContent="center" flexDirection="column" width="100%" marginBottom="30px">
                                            <Button backgroundColor="white" color="black" borderColor="white" borderRadius="1px" width="100%" onClick={() => handleCopy("L'email")}>
                                                <CiMail />marin.lagie@epiteh.eu
                                            </Button>
                                            <Button backgroundColor="#18181b" borderColor="white" borderRadius="1px" width="100%" onClick={() => handleCopy("Le numéro de téléphone")}>
                                                <CiPhone />(+33)6 95 16 56 15
                                            </Button>
                                        </HStack>
                                    </VStack>
                                </MenuRoot>
                            </DialogContent>
                        </DialogRoot>
                    </div>
                </VStack>
                <Image src="Marin.png" className="me-content" boxSize="50%"></Image>
            </HStack>
            <Toaster />
        </>
    );
}