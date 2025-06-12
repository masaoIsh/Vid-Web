# STEM Education for Society 5.0

A modern web platform for distributing educational videos about STEM and Society 5.0 to high school students worldwide. The platform includes interactive elements like Kahoot quizzes and GPT-powered discussions.

## Features

- Responsive design for all devices
- Video library with educational content
- Integrated Kahoot quizzes for each video
- GPT-powered discussion platform
- Additional learning resources
- Topic-based video organization

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- YouTube/Vimeo API integration

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd stem-education-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # App router pages
│   ├── about/             # About page
│   ├── resources/         # Resources page
│   ├── videos/            # Video library
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── ui/               # UI components
│   └── video/            # Video-related components
└── lib/                  # Utility functions and data
    └── data/             # Sample data and types
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Kahoot](https://kahoot.com/)
- [OpenAI GPT](https://openai.com/) 