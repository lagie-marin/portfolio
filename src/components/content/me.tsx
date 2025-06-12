import { Badge, Button, Image, Link, Stack, Text, HStack, VStack} from "@chakra-ui/react";
import { IoMdArrowForward } from "react-icons/io";
import { Toaster } from "@/components/ui/toaster"
import "./me.css";
import { Contact } from "../contact/Contact";
import { useLanguage } from "@/config/langage";

export function Me() {
    const { t } = useLanguage();
    return (
        <>
            <HStack align="center" gap={2} flex={1} p={4} justifyContent="space-between" wrap="wrap">
                <VStack align="flex-start" gap={4} flex={1}>
                    <Stack direction="row" alignItems="flex-start">
                        <Badge size="md" colorPalette="orange" variant="subtle">{t("me.student")}</Badge>
                    </Stack>
                    <Text className="title">{t("me.dev")}</Text>
                    <div className="me-content">
                        <Link href="#project" textDecoration="none" marginRight="1vw">
                            <Button backgroundColor="white" color="black" borderRadius="25px" fontWeight="normal">{t("me.projects")} <IoMdArrowForward /></Button>
                        </Link>
                        <Contact className="me-contact"/>
                    </div>
                </VStack>
                <Image src="Marin.png" className="me-content" boxSize="50%"></Image>
            </HStack>
            <Toaster />
        </>
    );
}