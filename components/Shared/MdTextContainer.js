import {Container} from "@chakra-ui/layout";
import React from "react";
import styles from "./mdtextcontainer.module.css"

const TextContainer = ({ policyData }) => {
    return(
        <Container mt={16} mb={4} maxW={"container.lg"}>
            <div
                className={styles.mdtext}
                dangerouslySetInnerHTML={{ __html: policyData.contentHtml }}
            />
        </Container>
    )
}

export default TextContainer;