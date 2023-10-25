import { Box, Text, Center, InputField, Heading, FormControl, FormControlLabel, FormControlLabelText, Input } from "@gluestack-ui/themed";



export default function Main(){
    return <Box bg="$primary100" p="$2" h={200} w={300}>
        <Center h={"$full"}>
            <Heading>Peso Ideak</Heading>
            <FormControl>
                <FormControlLabel>
                    <formControlLabelText>Peso</formControlLabelText>
                </FormControlLabel>
                <Input>
                    <InputField />
                </Input>
            </FormControl>
        </Center>
    </Box>
}