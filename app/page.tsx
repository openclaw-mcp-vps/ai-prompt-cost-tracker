export default function Home() {
  const faqs = [
    {
      q: 'Which AI providers are supported?',
      a: 'OpenAI (GPT-3.5, GPT-4, GPT-4o) and Anthropic Claude (Haiku, Sonnet, Opus) are fully supported with up-to-date pricing models.'
    },
    {
      q: 'How does cost tracking work?',
      a: 'Wrap your API calls with our lightweight SDK or point your webhook to our endpoint. We log token counts and calculate costs in real time per project.'
    },
    {
      q: 'Can I set spending alerts?',
      a: 'Yes. Configure daily or monthly budget thresholds per project and receive email alerts before you overspend.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track AI Prompt Costs<br />
          <span className="text-[#58a6ff]">Per Project, Per Feature</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop guessing your OpenAI and Claude API bills. Monitor token usage across every project, calculate cost per customer, and set budget alerts — all in one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Tracking — $25/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-3 gap-4 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          {[['$0 surprise bills','Budget alerts keep you safe'],['Multi-provider','OpenAI + Claude unified'],['Per-feature cost','Know your true AI margin']].map(([title, sub]) => (
            <div key={title}>
              <p className="text-[#58a6ff] font-semibold text-sm">{title}</p>
              <p className="text-[#6e7681] text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#6e7681] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited projects',
              'OpenAI + Claude tracking',
              'Cost per feature breakdown',
              'Real-time usage dashboard',
              'Budget alerts via email',
              'CSV export'
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} AI Prompt Cost Tracker. All rights reserved.
      </footer>
    </main>
  )
}
