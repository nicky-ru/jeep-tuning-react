import {Container, Divider} from "@chakra-ui/layout";
import React from "react";
import styles from "./mdtextcontainer.module.css"
import {Button} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";

const TextContainer = ({ policyData }) => {
    const router = useRouter()

    return(
        <Container mt={24} mb={4} maxW={"container.lg"}>
            <Button
                variant={"link"}
                my={5}
                leftIcon={<ArrowBackIcon/>}
                onClick={() => {
                    router.push("/")
                }}
            >
                На главную
            </Button>
            <Divider my={4}/>
            <div
                className={styles.mdtext}
                dangerouslySetInnerHTML={{ __html: policyData.contentHtml }}
            />
        </Container>
    )
}

export default TextContainer;