import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Product Growth</h1>
          <div className="flex justify-center gap-4">
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
              Subscribe
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
              Sign in
            </button>
          </div>
        </header>

        {/* Article */}
        <article className="prose prose-lg mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            How to make a product manager portfolio (to actually land your dream job)
          </h1>

          <div className="text-gray-600 mb-8">
            <p className="text-lg mb-4">
              Designers have portfolios, Engineers have Leetcode, PMs have... case questions? 
              Here&apos;s how to level the playing field with the interview preppers.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>Aakash Gupta</span>
              <span>•</span>
              <span>Jun 01, 2024</span>
              <span>•</span>
              <span>Paid</span>
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
              Copy link
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
              Facebook
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
              Email
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
              Notes
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50">
              More
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p>
              Designers have been making portfolios for as long as design has been a profession.
            </p>
            <p>
              For PMs, the portfolio is a much newer invention. And its adoption still varies widely. 
              Fewer than one in six have one:
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              This Actually Presents an Opportunity
            </h2>
            <p>
              But, here&apos;s the thing: the job market (in all geographies) for PMs is 
              <strong> very tough</strong> right now.
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
              I saw a <strong>brand new technique</strong> last week. The candidate had a 
              <strong> portfolio</strong>… like a design portfolio, but for PM.
              <br /><br />
              It was awesome. I <strong>ended up spending nearly an hour reading her portfolio</strong> 
              before the interview and got to know her well.
            </blockquote>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Tested in Today&apos;s Market
            </h2>
            <p>
              → This hypothesis encouraged me to <strong>test the portfolio advice</strong> 
              in the market with 5 members of our Slack community.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gray-50 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">
              Continue Reading with a 7-day free trial
            </h3>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Start Trial
            </button>
          </div>
        </article>
      </div>
    </main>
  );
}
