# vizeSolutions
Processo seletivo para Vize Solutions (Sistema de login e cadastro de usuários)

#  instruções para simulação

1 - Clone o repositorio do github na área de trabalho do seu computador

2 - Abra a pasta VizeSolutions

    1 - dentro da pasta VizeSolutios, abra a pasta src com o visual code (ou algum editor de sua preferencia)

3 - Dentro do visual studio code, abra o aquivo index.html (src/html/index.html)
    
    1 - abra o arquivo index.html no navegador usando o plugin live server (open with live server)

4 - Siga as instruções no site
    
    1 - Digite os dados para cadastro
    2 - Após se cadastrar, clique no link de "login"
    3 - Digite os dados cadastrados para login
    4 - Apos logar, aparecerá a area contendo todos os usuários cadastrados no sistema (id e usuario)
    
    
    
    
 # OBS
 
 Tive alguns problemas durante o desenvolvimento do projeto
 
 # API disponibilizada
    
    -Tentei utilizar a API fornecida contudo não obtive sucesso em razão do tolken retornar inválido até mesmo no postman. Por este motivo, optei em utilizar o             firebase para cadastrar os usuarios e autentica-los.
    
    -Utilizei o firebase e o firestore
        -firebase para autenticar e criar usuario e o firestore para filtrar melhor os dados e capturar o id e o nome 
        
    - Tanto no firebase quanto no firestore, não encontrei uma forma de usar o auto increment para o id. Eles criam um id unico mas com string com numeros. Então na        tabela estou mostrando o id unico que o firestore cria para cada usuário
    
    Em relação a api disponibilizada, acredito que precisaria de mais tempo para descobrir o porque o token estava sendo invalidado e como criar o token para o site       especifico fornecido
 
    
# Area logada

    Ao acessar ou atualizar a tela de “Área Logada”, a requisição deve ser refeita, aproveitando a “sessão logada” anteriormente.
    Ao acessar a tela de “Área Logada” sem ter digitado as credenciais, o usuário deve ser redirecionado para a tela de login.
    
        - Não tive tempo para desenvolver estas partes do desafio, pois escolhi dar uma atenção maior na integração do banco de dados e o problema com a API fornecida
    

    
