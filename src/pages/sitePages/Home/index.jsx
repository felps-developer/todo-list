import { Button } from "primereact/button";
import styled from "styled-components";
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useBuscarTarefas, useCriarTarefa } from "../../../hooks/tarefaHooks"


const HomeContainer = styled.section``

const Home = () => {

    const [visibleDialog, setVisibleDialog] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const { data: listaTarefas, isFetched } = useBuscarTarefas();
    const { mutateAsync: criar } = useCriarTarefa();

    const criarTarefa = (dados) => {
        criar(dados, {
            onSuccess: () => {
                setVisibleDialog(false);
                reset();
            },
            onError: (error) => {
                console.log("ERRO", error.message);
            },
        });

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
                {

                    isFetched && listaTarefas.map(tarefa => (
                        <div key={tarefa.id} >
                          <h5>{tarefa.titulo}</h5>  
                          <p>{tarefa.descricao}</p>
                        </div>
                    ))
                }
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
                            {...register("titulo", { required: true })}
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