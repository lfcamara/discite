require('database')();

var dataSchema = new mongoose.Schema({
    instituicao: String,
    regiao: String,
    estado: String,
    campi: [{ cidade: String, cursos: Array }]
});

var Data = mongoose.model("Data", dataSchema);

Data.create({
    instituicao: "Universidade Federal do Paraná",
    regiao: "Sul",
    estado: "Paraná",
    campi: [{
            cidade: "Toledo",
            cursos: ["Medicina"]
        },
        {
            cidade: "Pontal do Paraná",
            cursos: ["Ciências Exatas", "Engenharia Ambiental e Sanitária", "Engenharia Civil", "Engenharia de Aquicultura", "Oceanografia"]
        },
        {
            cidade: "Palotina",
            cursos: ["Agronomia", "Ciências Biológicas", "Ciências Exatas", "Computação", "Engenharia de Aquicultura", "Engenharia de Bioprocessos e Biotecnologia",
                "Engenharia de Energias Renováveis", "Medicina Veterinária"
            ]
        },
        {
            cidade: "Matinhos",
            cursos: ["Administração Pública", "Artes", "Ciências", "Educação do Campo", "Educação Física", "Geografia", "Gestão Ambiental", "Linguagem e Comunicação",
                "Saúde Coletiva", "Serviço Social", "Tecnologia em Agroecologia", "Tecnologia em Gestão Imobiliária", "Tecnologia em Gestão de Turismo"
            ]

        },
        {
            cidade: "Jandaia do Sul",
            cursos: ["Ciências Exatas", "Computação", "Engenharia Agrícola", "Engenharia de Alimetos", "Engenharia de Produção"]
        },
        {
            cidade: "Curitiba",
            cursos: ["Administração", "Agronomia", "Arquitetura e Urbanismo", "Artes Visuais", "Biomedicina", "Ciências Biológicas", "Ciência da Computação",
                "Ciências Contábeis", "Ciências Econômicas", "Ciências Sociais", "Design", "Direito", "Educação Física", "Enfermagem", "Engenharia Ambiental",
                "Engenharia de Bioprocessos e Biotecnologia", "Engenharia Cartográfica e de Agrimensura", "Engenharia Civil", "Engenharia Elétrica",
                "Engenharia Florestal", "Engenharia Industrial Madeireira", "Engenharia Mecânica", "Engenharia de Produção", "Engenharia Química", "Estatística",
                "Expressão Gráfica", "Farmácia", "Filosofia", "Física", "Fisioterapia", "Geografia", "Geologia", "História", "Jornalismo", "Letras",
                "Matemática", "Medicina", "Medicina Veterinária", "Música", "Nutrição", "Odontologia", "Pedagogia", "Psicologia", "Publicidade e Propaganda",
                "Química", "Relações Públicas", "Turismo", "Zootecnia"
            ]
        }
    ]

}, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("Data added!")
    }
});