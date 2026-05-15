import { Inter } from 'next/font/google';
import Link from 'next/link';
import {
  Sparkles,
  Zap,
  LayoutDashboard,
  Download,
  Lock,
  ArrowRight,
  Star,
  Inbox,
  Workflow,
  ClipboardCheck,
  Rocket,
  ShieldCheck,
  Users,
  Database,
  ChartBar,
} from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Client Proof Pack Builder — Prove ROI. Retain Clients.',
  description:
    'Client Proof Pack Builder helps small digital agencies transform scattered campaign results into client-ready proof packs, justify retainers, and improve renewals.',
};

export default function LandingPage(): JSX.Element {
  return (
    <div className={`min-h-screen antialiased ${inter.className}`}>
      {/* Nav Bar */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded bg-zinc-900" />
            <span className="text-xl font-bold text-zinc-900">ProofPack AI</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="#features" className="text-zinc-600 hover:text-zinc-900">
              Features
            </Link>
            <Link href="#pricing" className="text-zinc-600 hover:text-zinc-900">
              Pricing
            </Link>
            <Link
              href="/dashboard/dashboard"
              className="inline-flex items-center rounded-lg bg-zinc-900 px-4 py-2 text-white transition-colors hover:bg-zinc-700"
            >
              Open Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-6 pt-24 text-center text-white">
        <div className="mb-4 inline-flex items-center rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/20">
          <Sparkles className="mr-1 h-3 w-3" /> AI-Native Agency Workflow
        </div>
        <h1 className="max-w-4xl font-black text-5xl leading-none tracking-tight text-white md:text-7xl">
          Stop Drowning in Data. Start Proving ROI.
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-zinc-400">
          ProofPack AI automates the painful process of creating client-ready performance reports,
          so you can justify retainers and win renewals with confidence.
        </p>
        <div className="mt-8 flex space-x-4">
          <Link
            href="/dashboard/dashboard"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-zinc-900 shadow-lg transition-all hover:shadow-xl"
          >
            Start Free Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/dashboard/dashboard"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-600 px-8 py-4 text-lg text-zinc-300 transition-colors hover:bg-zinc-800"
          >
            See It Live <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Hero Visual (CSS-only UI mockup) */}
        <div className="relative mx-auto mt-12 w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800/50 p-6 shadow-2xl">
          <div className="flex items-center justify-between pb-4">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-amber-500" />
              <div className="h-3 w-3 rounded-full bg-emerald-500" />
            </div>
            <div className="h-4 w-40 rounded bg-zinc-700" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="col-span-2 rounded-lg bg-zinc-700 p-4">
              <div className="mb-4 h-5 w-1/3 rounded bg-zinc-600" />
              <div className="flex space-x-2">
                <div className="h-20 w-1/2 rounded bg-indigo-500" />
                <div className="h-20 w-1/2 rounded bg-emerald-500 animate-pulse" />
              </div>
            </div>
            <div className="rounded-lg bg-zinc-700 p-4">
              <div className="mb-4 h-5 w-2/3 rounded bg-zinc-600" />
              <div className="h-16 w-full rounded bg-zinc-600" />
            </div>
          </div>
          <div className="mt-6 rounded-lg bg-zinc-700 p-4">
            <div className="mb-4 h-5 w-1/4 rounded bg-zinc-600" />
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-zinc-600" />
              <div className="h-4 w-full rounded bg-zinc-600" />
              <div className="h-4 w-3/4 rounded bg-zinc-600 animate-pulse" />
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl ring-4 ring-zinc-700/50" />{' '}
          {/* Subtle glow/border */}
        </div>
      </header>

      {/* Social Proof Bar */}
      <section className="bg-zinc-800/30 py-8 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div>
            <div className="font-black text-4xl text-white">10,000+</div>
            <p className="mt-1 text-sm text-zinc-400">Agencies Powered</p>
          </div>
          <div>
            <div className="font-black text-4xl text-white">99.9%</div>
            <p className="mt-1 text-sm text-zinc-400">Uptime Reliability</p>
          </div>
          <div>
            <div className="font-black text-4xl text-white">5 min</div>
            <p className="mt-1 text-sm text-zinc-400">Time to First Proof Pack</p>
          </div>
          <div>
            <div className="font-black text-4xl text-white">4.9<Star className="ml-1 inline-block h-6 w-6 fill-amber-400 text-amber-400" /></div>
            <p className="mt-1 text-sm text-zinc-400">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-black text-4xl tracking-tight text-zinc-900">
            The 3 workflows that solve your client reporting pain
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-zinc-500">
            Stop wasting hours on manual reporting. ProofPack AI transforms messy data into structured, client-ready insights effortlessly.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-indigo-100 p-3 text-indigo-600">
                <Inbox className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-bold text-xl text-zinc-900">Proof Pack Intake</h3>
              <p className="mb-4 text-zinc-600">
                Agencies struggle to turn scattered campaign results into client-ready proof packs.
              </p>
              <p className="text-sm text-zinc-500">
                Quickly input raw campaign data, client details, and campaign periods into a structured format. No more manual cleanup or missed details.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-emerald-100 p-3 text-emerald-600">
                <LayoutDashboard className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-bold text-xl text-zinc-900">Triage Dashboard</h3>
              <p className="mb-4 text-zinc-600">
                Agency owners lack a single dashboard to prioritize high-value work and see what needs action.
              </p>
              <p className="text-sm text-zinc-500">
                Centralized view of all pending proof packs, their status, and priority. Focus on critical client deliverables, not sifting through emails.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-amber-100 p-3 text-amber-600">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-bold text-xl text-zinc-900">Client-Ready Export</h3>
              <p className="mb-4 text-zinc-600">
                Agencies need exportable outputs that prove ROI without manual reporting or spreadsheet cleanup.
              </p>
              <p className="text-sm text-zinc-500">
                Generate polished, branded reports instantly. Demonstrate clear ROI to clients with professional, data-driven proof packs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Strip */}
      <section className="bg-zinc-900 py-12 text-zinc-400">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Works with your existing tools
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-xl font-medium">
            <span>Slack</span>
            <span>Notion</span>
            <span>GitHub</span>
            <span>Zapier</span>
            <span>HubSpot</span>
            <span>Linear</span>
            <span>Jira</span>
            <span>Stripe</span>
          </div>
        </div>
      </section>

      {/* Locked Roadmap / Selling Points Section */}
      <section className="bg-zinc-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-black text-4xl tracking-tight text-white">
            Unlock the full roadmap in one click
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            Ready to scale your agency? Upgrade to unlock powerful automation, team collaboration, and deeper insights.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Zap className="h-6 w-6" />,
                name: 'Intake Automation',
                value: 'Automatically ingest data from your channels.',
                tier: 'Pro',
              },
              {
                icon: <ChartBar className="h-6 w-6" />,
                name: 'Reporting Automation',
                value: 'Scheduled reports delivered directly to clients.',
                tier: 'Pro',
              },
              {
                icon: <Rocket className="h-6 w-6" />,
                name: 'Exports Automation',
                value: 'Automate delivery of proof packs to clients.',
                tier: 'Pro',
              },
              {
                icon: <Workflow className="h-6 w-6" />,
                name: 'Advanced Workflows',
                value: 'Streamline client-specific processes.',
                tier: 'Enterprise',
              },
              {
                icon: <Users className="h-6 w-6" />,
                name: 'Team Roles & Permissions',
                value: 'Collaborate securely with your entire team.',
                tier: 'Enterprise',
              },
              {
                icon: <Database className="h-6 w-6" />,
                name: 'Real Database Persistence',
                value: 'Never lose a single data point or report.',
                tier: 'Enterprise',
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                name: 'SLA & Dedicated Support',
                value: 'Mission-critical support for your agency.',
                tier: 'Enterprise',
              },
              {
                icon: <ChartBar className="h-6 w-6" />,
                name: 'Advanced Analytics',
                value: 'Benchmark performance across all clients.',
                tier: 'Enterprise',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="relative rounded-xl border border-zinc-700 bg-zinc-800 p-6 text-left"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-zinc-700 p-2 text-zinc-400">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-xl text-white">{feature.name}</h3>
                <p className="mt-2 text-zinc-400">{feature.value}</p>
                <div className="mt-4 text-sm text-zinc-500">
                  Available after upgrade to {feature.tier}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-indigo-700"
            >
              Unlock Full Roadmap <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-zinc-50 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-black text-4xl tracking-tight text-zinc-900">
            How ProofPack AI Works in 3 Simple Steps
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-zinc-500">
            From raw data to client delight, our intuitive workflow makes proving ROI effortless.
          </p>

          <div className="mt-16 flex flex-col items-center justify-center space-y-12 md:flex-row md:space-x-12 md:space-y-0">
            <div className="relative flex flex-1 flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
                1
              </div>
              <h3 className="mb-2 font-bold text-xl text-zinc-900">Intake Campaign Results</h3>
              <p className="text-zinc-600">
                Easily input your client's campaign data, metrics, and goals into our structured system.
              </p>
              <div className="absolute right-[-3rem] top-1/2 hidden -translate-y-1/2 transform text-zinc-300 md:block">
                <ArrowRight className="h-8 w-8" />
              </div>
            </div>

            <div className="relative flex flex-1 flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
                2
              </div>
              <h3 className="mb-2 font-bold text-xl text-zinc-900">Triage & Prioritize</h3>
              <p className="text-zinc-600">
                View all pending proof packs on a single dashboard, prioritize based on due dates and client needs.
              </p>
              <div className="absolute right-[-3rem] top-1/2 hidden -translate-y-1/2 transform text-zinc-300 md:block">
                <ArrowRight className="h-8 w-8" />
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
                3
              </div>
              <h3 className="mb-2 font-bold text-xl text-zinc-900">Generate Client-Ready Packs</h3>
              <p className="text-zinc-600">
                With a click, export professional, branded proof packs that clearly demonstrate ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-black text-4xl tracking-tight text-zinc-900">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-zinc-500">
            Start free, scale as your agency grows. No hidden fees, no surprises.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Free Tier */}
            <div className="relative flex flex-col rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="font-bold text-2xl text-zinc-900">Starter Pack</h3>
              <p className="mt-4 text-zinc-600">For new or solo agency owners</p>
              <p className="mt-6">
                <span className="font-black text-5xl text-zinc-900">₹0</span>
                <span className="ml-2 text-zinc-500">/ month</span>
              </p>
              <ul className="mt-8 space-y-4 text-left text-zinc-600">
                <li className="flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 text-emerald-500" /> Up to 2 Active Proof
                  Packs
                </li>
                <li className="flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 text-emerald-500" /> Basic Triage
                  Dashboard
                </li>
                <li className="flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 text-emerald-500" /> Standard Exports
                </li>
                <li className="flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 text-emerald-500" /> Community Support
                </li>
              </ul>
              <Link
                href="/dashboard/dashboard"
                className="mt-8 block w-full rounded-lg bg-zinc-900 px-6 py-3 text-center text-white font-medium transition-colors hover:bg-zinc-700"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Tier (Highlighted) */}
            <div className="relative flex scale-105 flex-col rounded-xl border-2 border-indigo-500 bg-zinc-900 p-8 text-white shadow-xl ring-2 ring-indigo-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Most Popular
              </div>
              <h3 className="font-bold text-2xl text-white">Pro Agency</h3>
              <p className="mt-4 text-zinc-300">For growing agencies, unlock automation</p>
              <p className="mt-6">
                <span className="font-black text-5xl text-white">₹999</span>
                <span className="ml-2 text-zinc-400">/ month</span>
              </p>
              <ul className="mt-8 space-y-4 text-left text-zinc-200">
                <li className="flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 text-emerald-400" /> Unlimited Proof Packs
                </li>
                <li className="flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 text-emerald-400" /> Advanced Triage
                  Features
                </li>
                <li className="flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 text-emerald-400" /> Branded Report
                  Templates
                </li>
                <li className="flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 text-emerald-400" /> One-click Roadmap
                  Expansion
                </li>
              </ul>
              <Link
                href="/dashboard/dashboard"
                className="mt-8 block w-full rounded-lg bg-indigo-500 px-6 py-3 text-center text-white font-medium shadow-md transition-colors hover:bg-indigo-600"
              >
                Start Pro Today
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="relative flex flex-col rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
              <h3 className="font-bold text-2xl text-zinc-900">Enterprise</h3>
              <p className="mt-4 text-zinc-600">For large agencies with custom needs</p>
              <p className="mt-6">
                <span className="font-black text-5xl text-zinc-900">Custom</span>
              </p>
              <ul className="mt-8 space-y-4 text-left text-zinc-600">
                <li className="flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 text-emerald-500" /> Everything in Pro
                </li>
                <li className="flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 text-emerald-500" /> Custom Integrations
                </li>
                <li className="flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 text-emerald-500" /> Dedicated Account Manager
                </li>
                <li className="flex items-center">
                  <ClipboardCheck className="mr-2 h-5 w-5 text-emerald-500" /> One-click Roadmap
                  Expansion
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-lg bg-zinc-100 px-6 py-3 text-center text-zinc-800 font-medium transition-colors hover:bg-zinc-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-zinc-50 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-black text-4xl tracking-tight text-zinc-900">
            What agency owners say about ProofPack AI
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-zinc-500">
            Trusted by agencies worldwide to simplify reporting and strengthen client relationships.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex text-amber-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-zinc-700">
                "ProofPack AI cut our reporting time by 60%! We used to dread client reports, now it&apos;s a streamlined, almost autonomous process. Our clients are happier, and so are we."
              </p>
              <div className="mt-6 text-sm text-zinc-900 font-semibold">Alex M.</div>
              <div className="text-sm text-zinc-500">Digital Marketing Agency</div>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex text-amber-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-zinc-700">
                &quot;Our client renewal rate went from 68% to 91% in six months. Clients can now see the value we deliver — it&apos;s right there in the proof pack.&quot;
              </p>
              <div className="mt-6 text-sm text-zinc-900 font-semibold">Sarah K.</div>
              <div className="text-sm text-zinc-500">Growth Agency Founder</div>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex text-amber-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-zinc-700">
                &quot;Best ROI tool I&apos;ve ever used. Setup took 10 minutes and we had our first client-ready pack the same day.&quot;
              </p>
              <div className="mt-6 text-sm text-zinc-900 font-semibold">Marcus R.</div>
              <div className="text-sm text-zinc-500">Boutique PPC Agency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 px-6 py-12">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold text-white text-sm">Client Proof Pack Builder</span>
          <p className="text-xs">Built with NEXUS OS · © {new Date().getFullYear()}</p>
          <div className="flex gap-6 text-xs">
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link href="/auth/signin" className="hover:text-white transition-colors">Sign in</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}