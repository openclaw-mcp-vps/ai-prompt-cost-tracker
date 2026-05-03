import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Prompt Cost Tracker — Track AI API Costs Per Project',
  description: 'Monitor OpenAI and Claude API usage across projects. Calculate cost per feature and customer to optimize your AI spending.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d6002da4-06ae-4f24-ba1e-cd9cceeadf04"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
