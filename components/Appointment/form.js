import {
    Container,
    useControllableState,
    Stack,
    Select, Button,
    StackDivider,
    FormControl,
    FormLabel,
    FormHelperText,
    useColorModeValue
} from "@chakra-ui/react";
import {useEffect} from "react";
import {useRouter} from "next/router";


const AppointmentForm = ({serviceId = "", uzels = [], services = [], brands = [], models = []}) => {
    const [service, setService] = useControllableState({defaultValue: {id: "", name: "", description: "", uzelID: "", price: 0}})
    const [uzel, setUzel] = useControllableState({defaultValue: {id: "", name: ""}})
    const [brand, setBrand] = useControllableState({defaultValue: {id: "", name: ""}})
    const [model, setModel] = useControllableState({defaultValue: {id: "", brandID: "", name: ""}})
    const [filteredServices, setFilteredServices] = useControllableState({defaultValue: []});
    const [filteredModels, setFilteredModels] = useControllableState({defaultValue: []});
    const router = useRouter();
    const border = useColorModeValue("light.100", "dark.100");
    const bg = useColorModeValue('light.100', 'dark.100');

    useEffect(() => {
        // on initial load
        if (uzels && services) {
            const service_filter = services
                .filter(service => {return serviceId === service.id})
                .map(service => service)
            const service = service_filter[0];
            if (service) {
                const uzel_filter = uzels
                    .filter(uzel => {return service.uzelID.toUpperCase() === uzel.id.toUpperCase()})
                    .map(uzel => uzel)
                const uzel = uzel_filter[0];
                if (uzel) {
                    setUzel(uzel)
                    setUzelOption(uzel.id)
                }
            }
        }
    }, [serviceId, uzels, services]);

    useEffect(() => {
        const _filtratedServices = services
            .filter(service => {
                return service.uzelID.toUpperCase() === uzel.id.toUpperCase();
            })
            .map(service => service)
        setFilteredServices(_filtratedServices);
    }, [uzel])

    useEffect(() => {
        if (brand.id) {
            const _filteredModels = models
                .filter(model => {
                    return model.brandID ? model.brandID.toUpperCase() === brand.id.toUpperCase() : false;
                })
                .map(model => model);
            setFilteredModels(_filteredModels);
        }
    }, [brand])

    useEffect(() => {
        const service_filter = filteredServices
            .filter(service => {return service.id.toUpperCase() === serviceId.toUpperCase()})
            .map(service => service)
        if (service_filter.length > 0) {
            const service = service_filter[0];
            setServiceOption(service.id)
            setService(service);
        } else {
            setServiceOption("undef");
            setService({id: "", name: "", description: "", uzelID: "", price: 0});
        }
    }, [filteredServices])

    const setUzelOption = (id) => {
        document.getElementById("uzel-select").value = id;
    }

    const setServiceOption = (id) => {
        document.getElementById("service-select").value = id;
    }

    useEffect(() => {
        console.log(uzel.name, service.name, brand.name, model.name)
    }, [uzel, service, brand, model])

    const handleUzelSelect = (e) => {
        const uzel_filter = uzels
            .filter(uzel => {
                return uzel.id.toUpperCase() === e.target.value.toUpperCase()
            })
            .map(uzel => uzel)
        const uzel = uzel_filter[0];
        if (uzel) {
            setUzel(uzel);
        }
    }

    const handleServiceSelect = (e) => {
        const service_filter = services
            .filter(service => {
                return service.id.toUpperCase() === e.target.value.toUpperCase()
            })
            .map(service => service);
        const service = service_filter[0]
        if (service) {
            setService(service);
        }
    }

    const handleBrandSelect = (e) => {
        const brand_filter = brands
            .filter(brand => {
                return brand.id.toUpperCase() === e.target.value.toUpperCase()
            })
            .map(brand => brand);
        const brand = brand_filter[0]
        if (brand) {
            setBrand(brand);
        }
    }

    const handleModelSelect = (e) => {
        const model_filter = models
            .filter(model => {
                return model.id.toUpperCase() === e.target.value.toUpperCase()
            })
            .map(model => model);
        const model = model_filter[0]
        if (model) {
            setModel(model);
        }
    }

    return(
        <Container borderColor={border} m={5} size={"container.md"}>
            <Stack p={4} borderRadius={"md"} bg={bg} divider={<StackDivider borderColor={border} />}>

                <FormControl id="uzel">
                    <FormLabel>Узел</FormLabel>
                    <Select
                        id={"uzel-select"}
                        textTransform={"capitalize"}
                        onChange={(e) => {handleUzelSelect(e)}}
                    >
                        <option value={"undef"} disabled>--Узлы--</option>
                        {uzels.map(uzel => (
                            <option key={uzel.id} value={uzel.id}>
                                {uzel.name}
                            </option>
                        ))}
                    </Select>
                    <FormHelperText>Выберите узел</FormHelperText>
                </FormControl>

                <FormControl id="service">
                    <FormLabel>Услуга</FormLabel>
                    <Select
                        id={"service-select"}
                        textTransform={"capitalize"}
                        onChange={(e) => {handleServiceSelect(e)}}
                    >
                        <option value={"undef"} disabled>--Услуги--</option>
                        {filteredServices.map(service => (
                            <option key={service.id} value={service.id}>
                                {service.name}
                            </option>
                        ))}
                    </Select>
                    <FormHelperText>Выберите услугу</FormHelperText>
                </FormControl>

                <FormControl id="brand">
                    <FormLabel>Марка авто</FormLabel>
                    <Select
                        textTransform={"capitalize"}
                        onChange={(e) => {handleBrandSelect(e)}}
                        defaultValue={"undef"}
                    >
                        <option value={"undef"} disabled>--Марки--</option>
                        {brands.map(brand => (
                            <option key={brand.id} value={brand.id}>
                                {brand.name}
                            </option>
                        ))}
                    </Select>
                    <FormHelperText>Выберите марку авто</FormHelperText>
                </FormControl>

                <FormControl id="model">
                    <FormLabel>Модель авто</FormLabel>
                    <Select
                        textTransform={"capitalize"}
                        onChange={(e) => {handleModelSelect(e)}}
                        defaultValue={"undef"}
                    >
                        <option value={"undef"} disabled>--Модели--</option>
                        {filteredModels.map(model => (
                            <option key={model.id} value={model.id}>
                                {model.name}
                            </option>
                        ))}
                    </Select>
                    <FormHelperText>Выберите модель авто</FormHelperText>
                </FormControl>
                <Button
                    colorScheme={"orange"}
                    onClick={() => {
                        router.replace(
                            `/appointment/confirmation?uzel=${uzel.name}&service=${service.name}&brand=${brand.name}&model=${model.name}`
                        )
                    }}
                >
                    Записаться
                </Button>
            </Stack>
        </Container>
    )
}

export default AppointmentForm;