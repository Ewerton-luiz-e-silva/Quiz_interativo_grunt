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
        name: "GIGA Introduction",
        questions: [
            { 
                question: "O que significa GIGA em uma fábrica de produção?", 
                options: ["Gestão Integrada de Garantia de Ativos", "Grande Iniciativa de Gestão Avançada", "Grupo Integrado de Garantia Automatizada"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Qual é o principal objetivo do GIGA?", 
                options: ["Aumentar a eficiência da produção", "Melhorar o relacionamento com fornecedores", "Reduzir custos operacionais"], 
                correct: 0 // A alternativa correta foi movida para a posição 0
            },
            { 
                question: "Quais são os principais componentes do GIGA?", 
                options: ["Pesquisa e Desenvolvimento, TI e Vendas", "Controle de Qualidade, Manutenção e Logística", "Recursos Humanos, Marketing e Vendas"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "Como o GIGA impacta a produtividade?", 
                options: ["Pela redução da jornada de trabalho", "Através da otimização de processos", "Aumentando o número de colaboradores"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "Qual o papel do operador no GIGA?", 
                options: ["Executar manutenção preventiva", "Criar novas políticas de vendas", "Gerenciar a folha de pagamento"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "O GIGA é mais eficiente em que tipo de produção?", 
                options: ["Produção artesanal", "Produção personalizada", "Produção em massa"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "Qual ferramenta é frequentemente utilizada no GIGA?", 
                options: ["Diagrama de Ishikawa", "SWOT Analysis", "Balanced Scorecard"], 
                correct: 0 // A alternativa correta foi movida para a posição 0
            },
            { 
                question: "Quais indicadores são críticos no GIGA?", 
                options: ["Satisfação do cliente, participação de mercado", "Lucro líquido, retorno sobre investimento", "KPI’s de qualidade, segurança e eficiência"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "O que o GIGA visa minimizar?", 
                options: ["O tempo de ciclo de desenvolvimento de produto", "O tempo de inatividade da máquina", "O tempo de descanso dos funcionários"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "Qual é uma prática comum no GIGA?", 
                options: ["Manutenção preventiva regular", "Revisão anual de desempenho", "Auditoria financeira mensal"], 
                correct: 0 // A alternativa correta foi movida para a posição 0
            }
        ]
    },
    {
        name: "GIGA Application",
        questions: [
            { 
                question: "Como o GIGA afeta a qualidade do produto?", 
                options: ["Através do aumento da velocidade de produção", "Através do controle rigoroso de processos", "Através da redução de custos"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "O GIGA é implementado em quais setores?", 
                options: ["Setores de design e criatividade", "Setores de vendas e marketing", "Setores de manufatura e produção"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "Qual é uma vantagem competitiva do GIGA?", 
                options: ["Menor desperdício e maior eficiência", "Redução do número de funcionários", "Aumento de preços"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Como o GIGA contribui para a sustentabilidade?", 
                options: ["Aumentando o uso de materiais não recicláveis", "Reduzindo o tempo de produção", "Reduzindo o consumo de recursos"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "Qual o papel da tecnologia no GIGA?", 
                options: ["Automatizar processos de produção", "Criar estratégias de marketing", "Monitorar redes sociais"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Quais são os benefícios de um GIGA bem implementado?", 
                options: ["Melhor qualidade do produto e menos defeitos", "Maior número de clientes", "Expansão para novos mercados"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Qual é o impacto do GIGA na equipe de trabalho?", 
                options: ["Aumenta a segurança e reduz o estresse", "Aumenta a carga de trabalho", "Reduz o tempo de treinamento"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "O que o GIGA busca eliminar?", 
                options: ["Falhas e interrupções na produção", "Diversidade de produtos", "Concorrência no mercado"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Qual é o papel da análise de dados no GIGA?", 
                options: ["Criar conteúdo publicitário", "Identificar pontos de melhoria no processo", "Desenvolver novos produtos"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "Quais são as principais métricas monitoradas no GIGA?", 
                options: ["Eficiência do equipamento e tempo de ciclo", "Satisfação do cliente e engajamento nas redes", "Crescimento de mercado e receita"], 
                correct: 0 // A alternativa correta permanece na posição 0
            }
        ]
    },
    {
        name: "GIGA Efficiency",
        questions: [
            { 
                question: "Como o GIGA pode reduzir custos?", 
                options: ["Reduzindo o salário dos funcionários", "Aumentando o preço dos produtos", "Otimizando o uso de materiais e recursos"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "Qual é a principal função do GIGA?", 
                options: ["Garantir que a produção seja contínua e eficiente", "Aumentar a diversidade de produtos", "Reduzir a quantidade de produtos fabricados"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Qual é uma técnica usada no GIGA?", 
                options: ["Pesquisa de mercado", "Análise de Pareto", "Análise SWOT"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "O GIGA ajuda na...", 
                options: ["Criação de novos produtos", "Expansão da rede de distribuição", "Prevenção de falhas e otimização da produção"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "Qual é o impacto do GIGA na manutenção?", 
                options: ["Prolonga o tempo de manutenção", "Reduz a necessidade de manutenção corretiva", "Aumenta os custos de manutenção"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "Como o GIGA pode melhorar a eficiência operacional?", 
                options: ["Através de melhorias contínuas nos processos", "Através da terceirização de tarefas", "Aumentando o tempo de produção"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Qual é um dos focos do GIGA?", 
                options: ["Expandir o portfólio de produtos", "Aumento da produtividade e redução de custos", "Aumentar a quantidade de estoque"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "Como o GIGA pode ser medido?", 
                options: ["Através do número de produtos vendidos", "Através de KPIs de produtividade e eficiência", "Através de pesquisas de satisfação do cliente"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "O GIGA é implementado através de...", 
                options: ["Treinamento contínuo e manutenção preventiva", "Campanhas de marketing e publicidade", "Novas estratégias de vendas"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Como o GIGA pode impactar a cadeia de suprimentos?", 
                options: ["Aumentando o tempo de entrega", "Melhorando a sincronização e a eficiência da cadeia", "Reduzindo a comunicação com fornecedores"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            }
        ]
    },
    {
        name: "GIGA Safety & Quality",
        questions: [
            { 
                question: "Qual é a relação do GIGA com a segurança no trabalho?", 
                options: ["Aumenta os riscos de acidentes", "Promove um ambiente de trabalho mais seguro e controlado", "Reduz a necessidade de equipamentos de segurança"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "Como o GIGA lida com falhas de equipamento?", 
                options: ["Substituindo os equipamentos anualmente", "Ignorando pequenos problemas para manter a produção", "Implementando manutenções preventivas e corretivas rápidas"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "O GIGA é importante para...", 
                options: ["Aumentar a eficiência geral da planta", "Reduzir a produção de produtos de alta qualidade", "Eliminar completamente a necessidade de manutenção"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Como o GIGA afeta a inovação?", 
                options: ["Facilitando melhorias contínuas e inovações", "Restringindo a capacidade de inovação", "Focando apenas na produção em massa"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Qual é o impacto do GIGA na inovação?", 
                options: ["Restringindo a capacidade de inovação", "Facilitando melhorias contínuas e inovações", "Focando apenas na produção em massa"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "Como o GIGA lida com falhas de equipamento?", 
                options: ["Substituindo os equipamentos anualmente", "Ignorando pequenos problemas para manter a produção", "Implementando manutenções preventivas e corretivas rápidas"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "O GIGA é importante para...", 
                options: ["Reduzir a produção de produtos de alta qualidade", "Eliminar completamente a necessidade de manutenção", "Aumentar a eficiência geral da planta"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "Como o GIGA afeta a inovação?", 
                options: ["Facilitando melhorias contínuas e inovações", "Restringindo a capacidade de inovação", "Focando apenas na produção em massa"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Qual é o impacto do GIGA na segurança dos colaboradores?", 
                options: ["Promove um ambiente de trabalho mais seguro", "Reduz a segurança em favor da produtividade", "Aumenta a carga de trabalho"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Quais práticas de segurança são implementadas no GIGA?", 
                options: ["Rotação de funcionários e aumento de carga horária", "Monitoramento de redes sociais e campanhas publicitárias", "Manutenção preventiva e treinamento contínuo"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "Como o GIGA melhora a qualidade dos produtos?", 
                options: ["Reduzindo o número de inspeções de qualidade", "Através do controle rigoroso de qualidade e melhorias contínuas", "Aumentando a velocidade de produção"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "Qual é a relação entre o GIGA e a satisfação do cliente?", 
                options: ["Expansão da gama de produtos", "Redução do preço de venda", "Produtos de alta qualidade e entrega no prazo"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "O GIGA contribui para a segurança através de...", 
                options: ["Aumentando a carga de trabalho", "Reduzindo a comunicação entre equipes", "Treinamentos e avaliações contínuas de segurança"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "Como o GIGA ajuda a garantir a conformidade com normas de segurança?", 
                options: ["Monitorando e ajustando continuamente os processos de produção", "Focando apenas na produção em massa", "Reduzindo o uso de equipamentos de segurança"], 
                correct: 0 // A alternativa correta permanece na posição 0
            }
        ]
    },
    {
        name: "GIGA Future Trends",
        questions: [
            { 
                question: "Qual tendência futura pode impactar o GIGA?", 
                options: ["Aumento de processos manuais", "Automação avançada e Inteligência Artificial", "Redução da inovação tecnológica"], 
                correct: 1 // A alternativa correta foi movida para a posição 1
            },
            { 
                question: "Como a digitalização pode afetar o GIGA?", 
                options: ["Aumentando a eficiência e a conectividade", "Reduzindo a segurança cibernética", "Aumentando a complexidade dos processos"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Qual é a relação entre GIGA e sustentabilidade?", 
                options: ["GIGA pode ajudar a reduzir o consumo de recursos", "GIGA é focado apenas na produtividade", "GIGA não considera fatores ambientais"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Como a globalização pode influenciar o GIGA?", 
                options: ["Facilitando a adoção de melhores práticas globais", "Criando barreiras comerciais", "Reduzindo o acesso a tecnologias avançadas"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Qual tecnologia emergente pode ser integrada ao GIGA?", 
                options: ["Escrita manual", "Máquinas a vapor", "Internet das Coisas (IoT)"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "Como a inteligência artificial pode aprimorar o GIGA?", 
                options: ["Automatizando e otimizando processos complexos", "Substituindo completamente os operadores humanos", "Eliminando a necessidade de manutenção preventiva"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Qual é o impacto das energias renováveis no GIGA?", 
                options: ["Reduzindo a dependência de combustíveis fósseis", "Reduzindo a eficiência energética", "Aumentando o custo de produção"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Como as mudanças na legislação podem afetar o GIGA?", 
                options: ["Facilitando a implementação de práticas inseguras", "Reduzindo a necessidade de controle de qualidade", "Exigindo maior conformidade e adaptabilidade"], 
                correct: 2 // A alternativa correta foi movida para a posição 2
            },
            { 
                question: "Qual é o papel da análise de big data no GIGA?", 
                options: ["Identificar padrões e otimizar processos", "Reduzir a necessidade de análise de dados", "Aumentar a quantidade de papelada"], 
                correct: 0 // A alternativa correta permanece na posição 0
            },
            { 
                question: "Como a cibersegurança se relaciona com o GIGA?", 
                options: ["Protege dados críticos e mantém a integridade do sistema", "Reduz a conectividade entre sistemas", "Aumenta a vulnerabilidade a ataques"], 
                correct: 0 // A alternativa correta permanece na posição 0
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