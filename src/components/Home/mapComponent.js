import React from "react";
import {observer} from "mobx-react-lite";
import {AspectRatio, Box, Container} from "@chakra-ui/layout";

const MapComponent = observer(() => {
    return(
        <Box>
            <AspectRatio ratio={16 / 9}>
                <iframe
                    title={'Джип сервис'}
                    src="https://yandex.ru/map-widget/v1/-/CCUe7SAZlB?lang=ru_RU"
                    width="560" height="400"
                    allowFullScreen
                    alt={'Джип сервис на карте'}
                />
            </AspectRatio>
        </Box>
    );
})

export default MapComponent;