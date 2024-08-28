// Array de matérias e questões
const subjects = [
    {
        name: "GIGA-e-TPM",
        questions: [

            { question: "Qual é a primeira etapa do fluxo de LUP?", 
                options: ["Treinamento", "Elaboração", "Cadastro"], 
                correct: 1 
            },

            { question: "Após o cadastro, onde as LUP's são deixadas?", 
                options: ["No painel de LUP", "Na matriz de habilidades", "No plano de capacitação"], 
                correct: 0 
            },

            { question: "Qual é a terceira etapa do fluxo de LUP?", 
                options: ["Elaboração", "Aprovação gestor e especialistas", "Treinamento"], 
                correct: 2 
            },

            { question: "Após o cadastro das LUP's, o que deve ser feito com elas?", 
                options: ["Deixá-las no painel de LUP e arquivá-las na linha", "Revisá-las e enviar para aprovação", "Compartilhá-las com todos os colaboradores"], 
                correct: 0 
            },

            { question: "O que a LUP de Soluções de Problemas deve conter obrigatoriamente?", 
                options: ["Conceitos básicos", "O uso do conceito de 'antes' e 'depois'", "O uso do conceito de 'errado' e 'certo'"], 
                correct: 2 
            },

            { question: "Qual é o objetivo da LUP de Casos de Melhoria?", 
                options: ["Ensinar como executar uma determinada atividade", "Mostrar o aperfeiçoamento de uma atividade", "Padronizar conhecimento e melhorar a comunicação"], 
                correct: 1 
            },

            { question: "O que a LUP de Conhecimento Básico visa padronizar?", 
                options: ["Condições básicas dos equipamentos", "Tempos de limpeza e esforço", "Conhecimento e comunicação"], 
                correct: 2 
            },

            { question: "Em uma LUP de Casos de Melhoria, quais conceitos são obrigatórios?", 
                options: ["Errado e certo", "Antes e depois", "Certo e errado"], 
                correct: 1 
            },

            { question: "Para que é utilizada a Matriz de Habilidades?", 
                options: ["Para cadastro das LUP's", "Para elaborar o plano de capacitação", "Para identificar GAP's de conhecimento"], 
                correct: 2
            },

            { question: "Na Matriz de Habilidades, quem deve ser consultado para tirar dúvidas?", 
                options: ["Supervisores de nível 3", "Colegas de nível 4", "Colaboradores de nível 2"], 
                correct: 1 
            },

            { question: "Quem elabora o plano de capacitação dos colaboradores?", 
                options: ["O líder do GIGA / Supervisor", "O gestor de treinamento", "Os colaboradores"], 
                correct: 0
            },

            { question: "O plano de capacitação é elaborado com base em:", 
                options: ["Informações adquiridas pelo líder do GIGA / Supervisor", "Informações do catálogo de treinamento", "Resultados de avaliações trimestrais"], 
                correct: 0
            },

            { question: "O DTO (Diagnóstico Técnico Operacional) deve ser realizado para validar:", 
                options: ["O nível 1", "O nível 3", "O nível 4"], 
                correct: 1 
            },

            { question: "Onde devem ser mapeados todos os treinamentos e multiplicadores?", 
                options: ["Na matriz de habilidades", "No catálogo de treinamento", "No painel de LUP"], 
                correct: 1 
            },

            { question: "Após os treinamentos, o que deve ser passado para contabilização das horas de treinamento?", 
                options: ["O catálogo de treinamento", "O plano de capacitação", "A lista de presença e avaliação de reação"], 
                correct: 2 
            },

            { question: "Onde é mantida a base de multiplicadores atualizada?", 
                options: ["No painel de LUP", "No mural do Pilar ET na área TMP", "Na matriz de habilidades"], 
                correct: 1 
            },

            { question: "Qual princípio da Empresa defende a construção de uma cultura de respeito ao meio ambiente e às pessoas?", 
                options: ["Integridade", "Liderança responsável", "Responsabilidade socioambiental"], 
                correct: 2 
            },

            { question: "O que significa 'TPM' na Empresa?", 
                options: ["Total Performance Management", "Total Process Management", "Total People Management"], 
                correct: 0 
            },

            { question: "Qual princípio da Empresa envolve a transparência e divulgação de informações?", 
                options: ["Compromisso com a nossa gente", "Transparência e divulgação de informações", "Respeito à concorrência"], 
                correct: 1 
            },

            { question: "Qual princípio da Empresa destaca a importância do equilíbrio entre amor-próprio e altruísmo?", 
                options: ["Compromisso com a empresa", "Solidariedade", "Liderança responsável"], 
                correct: 1 
            },

            { question: "A análise ECRS é utilizada para:", 
                options: ["Melhorar a comunicação entre os colaboradores", "Elaborar planos de capacitação", "Entender, priorizar e tratar fontes de sujeira e locais de difícil acesso"], 
                correct: 2
            },

            { question: "No passo 1 de gestão autônoma, as condições básicas dos equipamentos devem ser:", 
                options: ["Melhoradas constantemente", "Mantidas conforme identificadas", "Alteradas conforme a necessidade"], 
                correct: 1 
            }

        ]
    },

    {
        name: "TPM",
        questions: [
            {
                question: "O que é o tpm?",
                options: [
                    "Um sistema de controle de qualidade para melhorar os processos de fabricação","Uma técnica de produção focada em reduzir desperdícios","Um programa de gestão que visa garantir a produtividade sem defeitos, quebras ou acidentes"],
                correct: 2
            },

            {
                question: "Quais os tesouros do tpm?",
                options: ["Equipamentos, ferramentas, recursos humanos, tecnologia","Lup, etiquetas, quadro de atividades, reunião do giga","Planos, estratégias, metodologias, práticas"],
                correct: 1
            },

            {
                question: "Quais são os pilares do tpm?",
                options: ["Gestão autônoma, manutenção planejada, melhoria específica, qualidade, educação e treinamento, saúde segurança e meio ambiente","Produtividade, eficiência, qualidade, segurança, inovação","Controle, organização, disciplina, treinamento, suporte técnico"],
                correct: 0
            },

            {
                question: "Qual o lema do tpm?",
                options: ["Da minha máquina cuido eu","Qualidade começa aqui","Prevenção é a melhor manutenção"],
                correct: 0
            },

            {
                question: "Qual é a base para o sistema de gestão?",
                options: ["A metodologia lean","A filosofia kaizen","O programa 5s"],
                correct: 2
            },

            {
                question: "Quais são os 5s?",
                options: ["Separar, organizar, limpar, padronizar, sustentar","Organização, limpeza, padronização, segurança, controle","Utilização, ordenação, limpeza, saúde higiene e padronização, autodisciplina"],
                correct: 2
            },

            {
                question: "O que é 'giga'?",
                options: ["Um comitê de qualidade para análise de processos","Um grupo interno de gestão autônoma","Uma equipe para implementar melhorias contínuas"],
                correct: 1
            },

            {
                question: "O que é 'problema'?",
                options: ["Qualquer situação que impede o funcionamento normal de um sistema","Quando o equipamento está fora das condições ideais, ou seja, há diferença entre o observado e o esperado","Um defeito ou falha que causa interrupção na produção"],
                correct: 1
            },

            {
                question: "O que é 'dia d'?",
                options: ["O dia da grande limpeza, onde restauramos a condição básica dos equipamentos, inspecionando e etiquetando","O dia dedicado à manutenção preventiva de todos os equipamentos","O dia em que realizamos auditorias de qualidade"],
                correct: 0
            },

            {
                question: "O que é uma 'anomalia'?",
                options: ["Um desvio do padrão que compromete a qualidade do produto","Uma variação inesperada no processo de produção","Toda falha em potencial que pode levar a uma quebra"],
                correct: 2
            },
            
            {
                question: "Quais são os 5 sentidos usados para detectar uma anomalia?",
                options: ["Visão, olfato, audição, tato, equilíbrio","Visão, olfato, audição, tato, intuição","Visão, olfato, audição, tato, paladar/falar"],
                correct: 2
            },

            {
                question: "Dê 3 exemplos de como detectamos anomalias nos equipamentos e instalações utilizando a visão",
                options: ["Rachaduras, corrosão, desgaste","Vazamentos, sujeira, situação perigosa","Quebra de componentes, desalinhamento, fumaça"],
                correct: 1
            },

            {
                question: "Dê 2 exemplos de como detectamos anomalias utilizando a audição",
                options: ["Ruídos estranhos, ausência de ruído característico","Rangidos, estalos","Vibrações anormais, sons metálicos"],
                correct: 0
            },

            {
                question: "Quais os tipos de etiquetas existentes?",
                options: ["Verde, amarela, vermelha","azul, vermelha, ssma","Branca, preta, laranja"],
                correct: 1
            },

            {
                question: "Quem deve abrir a etiqueta vermelha e quem deve finalizar?",
                options: ["O operador abre a etiqueta e o mantenedor finaliza após a execução","O técnico de segurança abre a etiqueta e o supervisor finaliza","O gerente de produção abre a etiqueta e o técnico finaliza"],
                correct: 0
            },

            {
                question: "Quem deve abrir a etiqueta azul e quem deve finalizar?",
                options: ["O engenheiro de processo abre e o operador finaliza","O supervisor abre e o operador finaliza","O operador de produção abre, executa e finaliza"],
                correct: 2
            },

            {
                question: "O que é etiqueta de ssma?",
                options: ["Uma etiqueta usada para identificar riscos ambientais","Uma etiqueta para temas relacionados à saúde, segurança e meio ambiente","Uma etiqueta que sinaliza condições de trabalho seguras"],
                correct: 1
            },

            {
                question: "Quando devo abrir uma etiqueta de ssma?",
                options: ["Para identificar e eliminar anomalias que resultem em condições abaixo do padrão, expondo pessoas e o meio ambiente a risco de acidente","Quando há um risco iminente de acidente de trabalho","Ao detectar condições que podem afetar a saúde dos trabalhadores"],
                correct: 0
            },

            {
                question: "Quais os prazos para resolução das etiquetas?",
                options: ["Imediato= 1 dia; curto prazo= 15 dias; médio prazo= 60 dias","Urgente= 24 horas; prioritário= 7 dias; regular= 30 dias","a= 7 dias; b= 30 dias; c= 90 dias"],
                correct: 2
            },

            {
                question: "O que é 'lup'?",
                options: ["Um método de aprendizado rápido","Lição de um ponto","Um documento de treinamento específico"],
                correct: 1
            },

            {
                question: "Para que serve a lup?",
                options: ["Para transmitir conhecimento rapidamente","Documentar procedimentos operacionais","Registrar não conformidades"],
                correct: 0
            },

            {
                question: "Quais as atividades do passo 1?",
                options: ["Limpeza com apoio da manutenção, identificação de anomalias, resolução de anomalias em curto prazo, plano para eliminar anomalias complexas, levantamento de perdas, manutenção da limpeza básica, identificação das fs e lda","Inspeção visual, limpeza, documentação de anomalias, planejamento de manutenção","Verificação de funcionamento, limpeza geral, registro de falhas, avaliação de performance"],
                correct: 0
            },

            {
                question: "O que é 'FS'?",
                options: ["Função de suporte","Fonte de sujeira","Fator de segurança"],
                correct: 1
            },

            {
                question: "O que é 'LDA'?",
                options: ["Local de desperdício","Limitador de acesso","Local de difícil acesso"],
                correct: 2
            },

            {
                question: "O que significa a sigla 'ECRS'?",
                options: ["Eliminar, combinar, reorganizar e simplificar","Estabelecer, controlar, regular e sustentar","Examinar, corrigir, revisar e sustentar"],
                correct: 0
            }

        ],

        
    },

    {   name: "treinamento-básico-do-5S",
        questions: [
            { 
                question: "Qual é o primeiro passo do 5S?", 
                options: ["Utilização", "Limpeza", "Autodisciplina"], 
                correct: 0 
            },
            { 
                question: "O que significa o segundo 'S' do 5S?", 
                options: ["Senso de saúde", "Senso de limpeza", "Senso de ordenação"], 
                correct: 2 
            },
            { 
                question: "Qual é o objetivo principal do 5S?", 
                options: ["Aumentar a produtividade", "Melhorar a comunicação entre os colaboradores", "Garantir um ambiente de trabalho seguro e organizado"], 
                correct: 2 
            },
            { 
                question: "O que o senso de utilização visa eliminar?", 
                options: ["Desperdício de materiais", "Ferramentas danificadas", "Falta de comunicação"], 
                correct: 0 
            },
            { 
                question: "Qual é a base para a prática do 5S?", 
                options: ["Normas técnicas", "Educação e treinamento contínuo", "Uso de ferramentas tecnológicas"], 
                correct: 1 
            },
            { 
                question: "O que é importante na fase de senso de ordenação?", 
                options: ["Definição de locais específicos para cada item", "Padronização de processos", "Treinamento dos colaboradores"], 
                correct: 0 
            },
            { 
                question: "O que o senso de limpeza promove?", 
                options: ["Redução de custos operacionais", "Identificação e eliminação de sujeira e desordem", "Manutenção preventiva"], 
                correct: 1 
            },
            { 
                question: "Qual é o foco do senso de saúde e higiene?", 
                options: ["Redução de desperdícios", "Melhoria da comunicação", "Bem-estar dos colaboradores"], 
                correct: 2 
            },
            { 
                question: "O que a autodisciplina no 5S garante?", 
                options: ["Aumento da produtividade", "Melhoria contínua", "Cumprimento das normas estabelecidas"], 
                correct: 2 
            },
            { 
                question: "Qual é a importância da educação e treinamento no 5S?", 
                options: ["Facilitar a comunicação entre equipes", "Garantir a sustentabilidade das práticas de 5S", "Reduzir o tempo de produção"], 
                correct: 1 
            },
            { 
                question: "O que o senso de utilização propõe?", 
                options: ["Manter apenas o necessário no ambiente de trabalho", "Reutilizar materiais descartáveis", "Aumentar a eficiência dos equipamentos"], 
                correct: 0 
            },
            { 
                question: "Qual é o objetivo do senso de ordenação?", 
                options: ["Padronizar processos", "Reduzir custos operacionais", "Organizar o ambiente de trabalho de forma lógica"], 
                correct: 2 
            },
            { 
                question: "Por que o senso de limpeza é importante?", 
                options: ["Previne acidentes e melhora a saúde dos trabalhadores", "Aumenta a velocidade de produção", "Facilita a manutenção preventiva"], 
                correct: 0 
            },
            { 
                question: "O que o senso de saúde e higiene procura promover?", 
                options: ["Ambientes de trabalho saudáveis e seguros", "Redução de custos", "Melhoria da qualidade dos produtos"], 
                correct: 0 
            },
            { 
                question: "O que significa o senso de autodisciplina?", 
                options: ["Monitorar a produtividade", "Estabelecer novas regras", "Adotar e manter boas práticas continuamente"], 
                correct: 2 
            },
            { 
                question: "Qual é um dos principais benefícios do 5S?", 
                options: ["Redução de custos", "Melhoria das relações interpessoais", "Aumento da eficiência operacional"], 
                correct: 2 
            },
            { 
                question: "O que é necessário para a implementação eficaz do 5S?", 
                options: ["Comprometimento de todos os colaboradores", "Utilização de tecnologias avançadas", "Redução de custos operacionais"], 
                correct: 0 
            },
            { 
                question: "O que o senso de ordenação requer?", 
                options: ["Treinamento contínuo", "Definição clara de locais para cada item", "Revisão constante dos processos"], 
                correct: 1 
            },
            { 
                question: "Qual é o resultado esperado do senso de limpeza?", 
                options: ["Redução de custos", "Ambiente de trabalho mais seguro e produtivo", "Melhoria na comunicação"], 
                correct: 1 
            },
            { 
                question: "Por que a autodisciplina é crucial no 5S?", 
                options: ["Garante a manutenção das práticas de 5S", "Facilita a implementação de novas tecnologias", "Aumenta a produtividade"], 
                correct: 0 
            },
            { 
                question: "Qual é a essência do 5S?", 
                options: ["Melhorar a comunicação", "Reduzir o tempo de produção", "Manter um ambiente de trabalho organizado e eficiente"], 
                correct: 2 
            },
            { 
                question: "O que a fase de senso de utilização envolve?", 
                options: ["Eliminar o desnecessário e manter apenas o essencial", "Revisar processos regularmente", "Implementar novas tecnologias"], 
                correct: 0 
            },
            { 
                question: "Qual é o foco do senso de saúde?", 
                options: ["Reduzir custos", "Garantir condições saudáveis de trabalho", "Melhorar a eficiência"], 
                correct: 1 
            },
            { 
                question: "Como o senso de ordenação contribui para o 5S?", 
                options: ["Organizando itens de forma lógica e eficiente", "Melhorando a comunicação", "Reduzindo o tempo de produção"], 
                correct: 0 
            },
            { 
                question: "Qual é a importância do senso de limpeza?", 
                options: ["Facilitar a manutenção", "Reduzir custos operacionais", "Prevenir acidentes e melhorar o bem-estar"], 
                correct: 2 
            }
        ]
    }

    

];

let currentSubjectIndex = -1; // Índice da matéria atual
let currentQuestionIndex = 0; // Índice da questão atual
let score = 0; // Pontuação do usuário
const userAnswers = []; // Respostas do usuário
let selectedAnswerIndex = null; // Índice da resposta selecionada

$(document).ready(function() {
    $('#quiz').hide(); // Esconder o quiz inicialmente
    $('#results').hide(); // Esconder os resultados inicialmente
});
