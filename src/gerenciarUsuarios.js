const usuarios = [
    {
        nomeDoUsuario:'Matheus',
        emailDoUsuario:'matheus@gmail.com'  
    }, 
                  
    {
        nomeDoUsuario:'Marcos',
        emailDoUsuario:'marcos@gmail.com'  
    },
    {
        nomeDoUsuario:'Lucas',
        emailDoUsuario:'lucas@gmail.com'  
    },
    {
        nomeDoUsuario:'João',
        emailDoUsuario:'joão@gmail.com'  
    }
                ];

function retornarUsuarios (){ 
   return usuarios;
}

function adicionarNovoUsuario(usuario){
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}