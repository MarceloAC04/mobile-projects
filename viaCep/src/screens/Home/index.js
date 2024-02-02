import { BoxInput } from "../../components/BoxInput";
import { ScrollForm, ContainerForm, ContainerInput } from "./style";
// import Api from "../../services/Api";
import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {

    //hooks - states
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")

    //hooks - effect
    //chamada da api
    async function buscaCep() {
        try {
            const respose = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setLogradouro(respose.data.logradouro)
            setBairro(respose.data.bairro)
            setCidade(respose.data.localidade)
            setEstado(respose.data.uf)
            setUf(respose.data.uf)
        } catch (error) {
            alert('Erro ao buscar o cep');
        }

    }

    function clearCep() {
        setCep("")
        setLogradouro("")
        setBairro("")
        setCidade("")
        setEstado("")
        setUf("")
    }

    useEffect(() => {
        if (cep) {
            buscaCep()
        } else {
            clearCep()
        }
    }, [cep]);

    return (

        //ScrollForm
        //ContainerForm
        //BoxInput
        //Label
        //Input

        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel="Informe o CEP:"
                    placeholder="Cep..."
                    keyType="numeric"
                    fieldValue={cep}
                    editable={true}
                    maxLenght={9}
                    onChangeText={(text) => setCep(text)}
                />
                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    fieldValue={logradouro}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldValue={bairro}
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldValue={cidade}
                />
                <ContainerInput>
                    <BoxInput
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldWidth={70}
                        fieldValue={estado}
                    />
                    <BoxInput
                        textLabel="UF"
                        placeholder="UF"
                        fieldWidth={25}
                        fieldValue={uf}
                    />
                </ContainerInput>
            </ContainerForm>
        </ScrollForm>
    )
}