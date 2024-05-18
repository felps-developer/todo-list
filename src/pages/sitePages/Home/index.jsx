import { Button } from "primereact/button";
import styled from "styled-components";
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useForm } from "react-hook-form";


const HomeContainer = styled.section``

const Home = () => {

    const [visibleDialog, setVisibleDialog] = useState(false);
    const { register, handleSubmit } = useForm();

    const criarTarefa = (dados) => {
        console.log(dados)
    }

    return (
        <>
            <HomeContainer className="px-8 py-6">
                <h1 className="flex justify-content-between align-items-center">
                    tarefas
                    <Button
                        icon="pi pi-plus"
                        label="Nova Tarefa"
                        onClick={(e) => setVisibleDialog(true)}
                    />
                </h1>

                <Dialog
                    visible={visibleDialog}
                    header="Nova tarefa"
                    onHide={(e) => setVisibleDialog(false)}
                >
                    <form
                        onSubmit={handleSubmit(criarTarefa)}
                        className="flex flex-column gap-3"
                    >
                        <InputText
                            placeholder="Nome da tarefa"
                            {...register("nome", { required: true })}
                        />
                        <InputTextarea
                            placeholder="Descrição da tarefa"
                            className="h-8rem"
                            autoResize
                            {...register("descricao", { required: true })}
                        />
                        <Button
                            type="submit"
                            label="Salvar"
                        />

                    </form>
                </Dialog>
            </HomeContainer>
        </>
    );
}

export default Home;