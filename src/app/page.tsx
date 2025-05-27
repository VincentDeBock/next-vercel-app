import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Product Growth</h1>
        
        <p className="text-xl text-gray-600 mb-8">
          A weekly advice column about building product, driving growth, and accelerating your career.
        </p>

        <div className="mb-12">
          <p className="text-lg font-medium mb-4">Over 1,100,000 subscribers</p>
        </div>

        <div className="space-y-4">
          <button className="w-full max-w-md px-6 py-3 bg-black text-white text-lg font-semibold rounded hover:bg-gray-800 transition-colors">
            Subscribe
          </button>

          <p className="text-sm text-gray-500">
            By subscribing, I agree to Substack&apos;s Terms of Use and acknowledge its Information Collection Notice and Privacy Policy
          </p>

          <button className="text-gray-500 hover:text-gray-700">
            No thanks
          </button>
        </div>
      </div>
    </main>
  );
}
