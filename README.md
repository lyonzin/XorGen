
# XorGen Pro - Codificador e Decodificador XOR

![XorGen Pro](https://img.shields.io/badge/Version-1.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 📜 Sobre o Projeto

**XorGen Pro** é uma ferramenta aprimorada para codificação e decodificação de strings usando XOR, desenvolvida para profissionais de Blue Team e cibersegurança. O projeto é uma evolução do código original `XorGen.js` de [D4rC.nEt](http://d4rc.net), com melhorias significativas na interface e a adição de uma nova página para decodificação, feita por **Lyon**.

### 🔥 Funcionalidades

- **Codificação de Strings**: Ofusca strings usando XOR para dificultar a engenharia reversa.
- **Decodificação de Strings**: Reverte a operação XOR para decodificar a string original.
- **Interface Moderna**: Design limpo e responsivo, adaptado para ambientes corporativos de segurança.
- **Fácil Navegação**: Páginas de codificação e decodificação com links diretos.

## 🎨 Demonstração

### Página de Codificação
![Codificação](https://github.com/user-attachments/assets/b4bdcec2-71c6-413e-85b0-947208a1d396)

### Página de Decodificação
![Decodificação](https://private-user-images.githubusercontent.com/48651462/386378852-b6981e68-b8d6-4122-b406-413e04ecc768.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzE2MjExNTEsIm5iZiI6MTczMTYyMDg1MSwicGF0aCI6Ii80ODY1MTQ2Mi8zODYzNzg4NTItYjY5ODFlNjgtYjhkNi00MTIyLWI0MDYtNDEzZTA0ZWNjNzY4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTE0VDIxNDczMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk0ZTUwODJmYjE3NDZhNTg5Y2YxZTFmYWRiYTQ4NDdlMDg1ZTk3NDY2MTkxODFiOTgzODhjNTU4NmNjMmRhMTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.K4n4eK1BA3deR9nPsQBY-37lftKkFIJ9wxm5wtVsx5Q)

## 🚀 Começando

### Requisitos

- Navegador Web (Chrome, Firefox, Edge, etc.)
- Nenhuma dependência adicional é necessária.

### Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/xorgen-pro.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd xorgen-pro
   ```

3. Abra o arquivo `index.html` no seu navegador para começar a usar a ferramenta:

   ```bash
   start index.html
   ```

## 📖 Como Usar

### Codificação

1. Abra `index.html` no navegador.
2. Digite a string que deseja codificar e clique em **"Converter para XOR String"**.
3. O resultado aparecerá na caixa de saída.

### Decodificação

1. Abra `decode.html` no navegador.
2. Digite a string codificada (no formato `XorStr<0xD6,6,0xEDBC9F16>("\x82\x92\x8B\x8D\x9F"+0xEDBC9F16).s`).
3. Clique em **"Decodificar XOR String"**.
4. A string decodificada aparecerá na caixa de saída.

## 📄 Estrutura do Projeto

```bash
xorgen-pro/
├── index.html         # Página de codificação
├── decode.html        # Página de decodificação
├── xorgen.js          # Código original de codificação XOR
├── README.md          # Documentação do projeto
└── LICENSE            # Licença MIT
```

## 🤝 Créditos

- **Código Original**: [D4rC.nEt](http://d4rc.net) - `XorGen.js`
- **Adaptações e Melhorias**: Lyon (2024)
  - Interface moderna e responsiva.
  - Implementação da página de decodificação.
  - Ajustes e aprimoramentos na experiência do usuário.

## 🛡️ Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

```text
MIT License

Copyright (c) 2024 Lyon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 💬 Contato

Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato:

- GitHub: [Lyon.](https://github.com/Lyonzin)

## 🛠️ Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch para suas alterações (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas mudanças (`git commit -m 'Adicionei uma nova funcionalidade'`).
4. Push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

---

Desenvolvido com ❤️ por Lyon. para a comunidade de cibersegurança.
