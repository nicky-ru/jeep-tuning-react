import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {useEffect} from "react";
import {useToast} from "@chakra-ui/react";
const PolicyToaster = dynamic(() => import("./Shared/PolicyToaster"))
import {useRouter} from "next/router";
import dynamic from "next/dynamic";

export default function Layout({ children }) {
    const router = useRouter();

    const toast = useToast()
    const id = "test-toast"
    const toastIdRef = React.useRef()

    function renderToast() {
        return(<PolicyToaster agree={agree} router={router}/>)
    }
    function close() {
        if (toastIdRef.current) {
            toast.close(toastIdRef.current)
        }
    }

    function agree() {
        localStorage.setItem("cookieBannerDisplayed", "true");
        close();
    }

    useEffect(() => {
        setTimeout(() => {
            if (!toast.isActive(id) && !localStorage.getItem("cookieBannerDisplayed")) {
                toastIdRef.current = toast({
                    id,
                    render: renderToast,
                    duration: null,
                });
            }
        }, 2000)
    })

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}