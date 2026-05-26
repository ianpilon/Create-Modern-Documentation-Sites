# Create Modern Documentation Sites

A comprehensive guide and template for creating beautiful, modern documentation sites using Next.js and Nextra. This project serves both as a guide and a working example of how to build documentation sites with modern web technologies.

## 🚀 Features

- 🤖 **Built-in AI chat panel** (Groq-powered, with BM25 keyword retrieval over your wiki content)
- 🌓 Dark/Light mode support
- 🔍 Full-text search
- 📱 Mobile responsive design
- ✨ Code syntax highlighting
- 📋 Copy code button
- 📚 Table of contents
- ⚡️ Fast page loads
- 🔄 Hot reload in development
- 🎨 Customizable theme
- 📝 MDX support (Markdown + React components)

## 💬 AI Chat

A pill-shaped floating button labeled "Ai" sits on the bottom-right of every page. Click it (or press `Cmd+/`) to ask questions about your wiki content in plain language. Answers cite the wiki pages they draw from with inline clickable links.

**How it works:** per question, the API ranks all `.mdx` pages by BM25 against the user's query, sends the top 4 most relevant pages (plus the page they're viewing) to Groq's Llama 3.3 70B, and asks for an answer with markdown citations.

**Setup:**
1. Copy `.env.local.example` to `.env.local`
2. Get a free [Groq API key](https://console.groq.com/keys) and paste it as `GROQ_API_KEY=...`
3. `npm run dev`

On Vercel, set `GROQ_API_KEY` as an environment variable instead.

**Customizing:** the chat button matches your Nextra primary color automatically (via `--nextra-primary-hue`). Edit `src/components/WikiChat.jsx` to change the suggested prompts.

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Nextra](https://nextra.site/) - Documentation site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [MDX](https://mdxjs.com/) - Markdown + JSX
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📦 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/ianpilon/Create-Modern-Documentation-Sites.git
   cd Create-Modern-Documentation-Sites
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Documentation Structure

```
src/
├── pages/          # Documentation pages (MDX)
├── components/     # React components
└── styles/        # Global styles
```

## 🎨 Customization

1. Theme configuration in `theme.config.jsx`
2. Styling with Tailwind CSS in `tailwind.config.js`
3. Global styles in `src/styles/globals.css`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Manual Build

```bash
npm run build
npm run start
```

## 📖 Using This Guide

This repository serves two purposes:

1. **As a guide**: Follow the documentation to learn how to create your own documentation site
2. **As a template**: Fork this repository to start your own documentation project

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Nextra](https://nextra.site/) team for the documentation template
- [Tailwind CSS](https://tailwindcss.com/) team for the utility-first CSS framework

---
Made with ❤️ by [Ian Pilon](https://github.com/ianpilon)
