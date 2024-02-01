import { BoxInput } from "../../components/BoxInput";
import { ScrollForm, ContainerForm, ContainerInput } from "./style";

export function Home() {

    //hooks - states


    //hooks - effect
    //chamada da api

    return (

        //ScrollForm
        //ContainerForm
        //BoxInput
        //Label
        //Input

        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel="Informe o cep"
                    placeholder="Cep..."
                    keyType="numeric"
                    maxLenght={9}
                />
                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                />
                <BoxInput
                    textLabel="Estado"
                    placeholder="Longradouro..."
                />

                <ContainerInput>

                    <BoxInput
                        textLabel="Cidade"
                        placeholder="Bairro..."
                        fieldWidth={70}
                    />
                    <BoxInput
                        textLabel="UF"
                        placeholder="UF"
                        fieldWidth={40}
                    />
                </ContainerInput>
            </ContainerForm>
        </ScrollForm>
    )
}