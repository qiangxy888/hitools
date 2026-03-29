import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HiTools — Free AI-Powered Online Tools for Everyone',
  description: 'A collection of free tools for creators, freelancers, and developers. No signup, no ads, no BS.',
};

const tools = [
  {
    name: 'InvoiceFly',
    tagline: 'Free Invoice Generator',
    description: 'Create professional invoices in seconds. PDF export, multi-currency, no signup required.',
    icon: '🧾',
    color: 'from-blue-500 to-blue-600',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
    url: 'https://invoicefly.co',
    features: ['PDF Export', 'Multi-currency', 'Tax Calculation', 'Client Management'],
    users: '10K+',
  },
  {
    name: 'FormForge',
    tagline: 'Free Online Form Builder',
    description: 'Build beautiful forms visually and get clean HTML code. No vendor lock-in.',
    icon: '📝',
    color: 'from-purple-500 to-purple-600',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-600',
    url: 'https://formforge.co',
    features: ['Visual Builder', 'HTML Export', 'Responsive', 'Validation'],
    users: '8K+',
  },
  {
    name: 'AIWritingCheck',
    tagline: 'AI Content Detector',
    description: 'Check if text was written by ChatGPT, Claude, or other AI. Instant, free, private.',
    icon: '🤖',
    color: 'from-emerald-500 to-emerald-600',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    url: 'https://aiwritingcheck.com',
    features: ['Instant Detection', 'Multi-model', 'Paragraph Analysis', 'No Signup'],
    users: '15K+',
  },
  {
    name: 'WordCountHub',
    tagline: 'Word Counter & Text Analyzer',
    description: 'Count words, characters, sentences. Readability scores, keyword density, reading time.',
    icon: '📊',
    color: 'from-blue-400 to-blue-500',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-500',
    url: 'https://wordcounthub.com',
    features: ['Word Count', 'Readability', 'Keyword Density', 'Reading Time'],
    users: '20K+',
  },
  {
    name: 'ClearCut',
    tagline: 'AI Background Remover',
    description: 'Remove image backgrounds instantly using browser-side AI. Your images never leave your device.',
    icon: '✂️',
    color: 'from-violet-500 to-violet-600',
    bgLight: 'bg-violet-50',
    textColor: 'text-violet-600',
    url: 'https://clearcut.tools',
    features: ['Browser AI', '100% Private', 'API Available', 'No Upload'],
    users: '12K+',
    badge: 'API',
  },
  {
    name: 'CompWatch',
    tagline: 'AI Competitor Monitoring',
    description: 'Monitor competitor websites for changes. AI-powered summaries tell you what changed and why it matters.',
    icon: '👁',
    color: 'from-indigo-500 to-indigo-600',
    bgLight: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    url: 'https://compwatch.ai',
    features: ['AI Summaries', 'Daily Checks', 'Email Alerts', 'Change History'],
    users: 'New',
    badge: 'SaaS',
  },
];

const stats = [
  { label: 'Free Tools', value: '6' },
  { label: 'SEO Articles', value: '65+' },
  { label: 'Lines of Code', value: '12K+' },
  { label: 'Monthly Cost', value: '$0' },
];

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HiTools',
    description: 'Free AI-powered online tools for creators, freelancers, and developers.',
    url: 'https://hitools.dev',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-20 sm:py-28 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
            🚀 6 Free Tools, Zero Cost, Open Source
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Free AI Tools for <span className="text-indigo-600">Creators</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Invoice generator, form builder, AI detector, word counter, background remover, and competitor monitor. 
            All free. No signup. No ads.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#tools" className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-200">
              Explore Tools ↓
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(s => (
              <div key={s.label} className="text-center bg-white rounded-xl p-4 border border-gray-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-4">Our Tools</h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">Every tool is free, works in your browser, and respects your privacy.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map(tool => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener"
                className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-200 relative"
              >
                {tool.badge && (
                  <span className="absolute top-4 right-4 bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-full">{tool.badge}</span>
                )}
                <div className={`w-14 h-14 ${tool.bgLight} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{tool.name}</h3>
                <p className={`text-sm font-medium ${tool.textColor} mb-2`}>{tool.tagline}</p>
                <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tool.features.map(f => (
                    <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{f}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Why HiTools?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-sm text-gray-600">Your data stays in your browser. We don&apos;t collect, store, or sell anything.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">💸</div>
              <h3 className="font-bold text-gray-900 mb-2">Actually Free</h3>
              <p className="text-sm text-gray-600">No hidden limits, no forced upgrades, no &quot;free trial.&quot; These tools are free forever.</p>
            </div>
            <div>
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Fast & Simple</h3>
              <p className="text-sm text-gray-600">No bloated frameworks. Each tool does one thing and does it well.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Built for the Long Run</h2>
          <p className="text-gray-600 mb-8">
            HiTools is a growing collection. We add new tools regularly — each one solving a real problem for real people.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.slice(0, 3).map(t => (
              <a key={t.name} href={t.url} target="_blank" rel="noopener" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 text-sm">
                {t.icon} {t.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
