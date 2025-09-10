const{ retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require ('chai');

describe('Testar as funções de Gestão de Usuários', function (){
    it('Validar que posso adicionar um novo nome de usúario da lista', function () {
        //1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario({
        nomeDoUsuario:'Maria',
        emailDoUsuario:'maria@gmail.com'  
    })

        //2. Retornar a lista de usuários na caixa lista de usúarios
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no fim da lista de 
        //Comparar dois valores=
        //expect(listaDeUsuarios.at(-1).nomeDoUsuario).to.equal('Maria'); 
        //expect(listaDeUsuarios.at(-1).emailDoUsuario).to.equal('maria@gmail.com');
        //Comparar dois objetos=
        expect(listaDeUsuarios.at(-1)).to.eql({
        nomeDoUsuario:'Maria',
        emailDoUsuario:'maria@gmail.com'  
    })
    });
});