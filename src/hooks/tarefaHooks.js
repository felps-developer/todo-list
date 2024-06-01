import { useMutation, useQuery } from "@tanstack/react-query"

import { API, queryClient } from "../services";

export const useBuscarTarefas = () => {
    return useQuery({
        queryKey: ['tarefas'],
        queryFn: async () => {
            const response = await API.get('/tarefas')
            return response.data;
        }
    })
}

export const useCriarTarefa = () => {
    return useMutation({
        mutationFn: async (tarefa) => {
        const response = await API.post('/tarefas', tarefa)
            return response.data;
        },
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey: ['tarefas']
            })
        }
    })
}