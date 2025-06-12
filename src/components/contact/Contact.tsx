import { Button, Text, HStack, VStack, DialogRoot, DialogTrigger, DialogContent, MenuRoot, Box, DialogHeader } from "@chakra-ui/react";
import { CiLinkedin, CiMail, CiPhone } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { toaster } from "@/components/ui/toaster"
import { useLanguage } from "@/config/langage";

type ContactProps = {
    className?: string,
    contentClass?: string
}

export function Contact({className="", contentClass=""} : ContactProps) {
    const { t } = useLanguage();

    const handleCopy = (text: string) => {
            navigator.clipboard.writeText(text);
            toaster.create({
                title: `${text} ${t("contact.toaster")}`,
                type: "success",
                duration: 3000
            });
    };
    return (
        <DialogRoot placement="center">
            <DialogTrigger asChild>
                <Button className={className} variant="outline" size="sm" backgroundColor="#2b3035" color="white" borderRadius="25px" fontWeight="normal">
                    <MdOutlineEmail />{t("contact.button")}
                </Button>
            </DialogTrigger>
            <DialogContent className={`popup-contact ${contentClass}`} backgroundColor="#18181b">
                <DialogHeader className="sub-title">
                    <p>{t("contact.button")}</p>
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
                            <Text style={{ color: "white", textAlign: "center", margin: "0 10px" }}>{t("contact.or")}</Text>
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
    )
}
