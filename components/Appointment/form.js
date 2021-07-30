import {
    Container,
    useControllableState,
    Stack,
    Select,
    StackDivider,
    FormControl,
    FormLabel,
    FormHelperText,
    useColorModeValue
} from "@chakra-ui/react";
import {useEffect} from "react";


const AppointmentForm = ({serviceId = "", uzels = [], services = [], brands = [], models = []}) => {
    const [service, setService] = useControllableState({defaultValue: {id: "", name: "", description: "", uzelID: "", price: 0}})
    const [uzel, setUzel] = useControllableState({defaultValue: {id: "", name: ""}})
    const [brand, setBrand] = useControllableState({defaultValue: {id: "", name: ""}})
    const [model, setModel] = useControllableState({defaultValue: {id: "", brandID: "", name: ""}})
    const border = useColorModeValue("light.100", "dark.100");

    useEffect(() => {
        if (uzels && services) {
            const service = services
                .filter(_service => {return serviceId === _service.id})
                .map(_service => _service)
            if (service[0]) {
                setService(service[0]);
                setOption(service[0].id)
                const uzel = uzels
                    .filter(_uzel => {return service[0].uzelID.toUpperCase() === _uzel.id.toUpperCase()})
                    .map(_uzel => _uzel)
                if (uzel[0]) {
                    setUzel(uzel[0])
                    setOption(uzel[0].id)
                }
            }
        }
    }, [serviceId, uzels, services]);

    const setOption = (id) => {
        document.getElementById(`option-${id}`).selected = true;
    }

    // useEffect(() => {
    //     if (uzel.id) {
    //         document.getElementById(`option-${uzel.id}`).selected = true;
    //     }
    // }, [uzel]);
    //
    // useEffect()

    return(
        <Container size={"container.md"}>
            <Stack divider={<StackDivider borderColor={border} />}>
                <FormControl id="uzel">
                    <FormLabel>Узел</FormLabel>
                    <Select>
                        {uzels.map(uzel => (
                            <option id={`option-${uzel.id}`} value={uzel.id}>{uzel.name}</option>
                        ))}
                    </Select>
                    <FormHelperText>Выберите узел</FormHelperText>
                </FormControl>
                <FormControl id="service">
                    <FormLabel>Услуга</FormLabel>
                    <Select>
                        {services.map(service => (
                            <option id={`option-${service.id}`} value={service.id}>{service.name}</option>
                        ))}
                    </Select>
                    <FormHelperText>Выберите узел</FormHelperText>
                </FormControl>
            </Stack>
        </Container>
    )
}

export default AppointmentForm;