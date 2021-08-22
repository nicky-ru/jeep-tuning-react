import React from "react";
import {getPolicyData} from "../../lib/conf-policy";
import Head from "next/head";
import TextContainer from "../../components/Shared/MdTextContainer";
import {Divider} from "@chakra-ui/layout";

export default function ConfidentialityPolicy ({ policyData }) {
    return(
        <>
            <Head>
                <title>Политика конфиденциальности</title>
                <meta name="privacy policy" content="Политика конфиденциальности" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TextContainer policyData={policyData}/>
            <Divider/>
        </>
    )
}

export async function getStaticProps() {
    const policyData = await getPolicyData()

    return {
        props: {
            policyData
        }
    }
}