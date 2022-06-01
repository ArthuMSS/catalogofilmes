import { inserirFilme } from '../repository/filmeRepository.js' 

import { Router } from 'express';
const server = Router();

server.post('/filme', async (req, resp) => {
    try{
        const novoFilme = req.body;
         
        
        if(!novoFilme.nome)
            throw new Error('nome do filme é obrigatório');
            
        if(!novoFilme.sinopse)
            throw new Error('Sinopse é obrigatório');

        if(!novoFilme.avaliacao == undefined || novoFilme.avaliacao < 0 )
            throw new Error('avaliação é obrigatório');
            
        if(!novoFilme.lancamento)
            throw new Error('Lançamento é obrigatório');

        if(!novoFilme.disponivel)
            throw new Error('campo disponível é obrigatório');

        if(!novoFilme.usuario)
            throw new Error('Usuario não logado');


        
        const filmeInserido = await inserirFilme (novoFilme)

        resp.send(filmeInserido);

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

export default server;  
        
        