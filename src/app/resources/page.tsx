import Image from 'next/image';

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          Learning Resources
        </h1>
        {/* DreamAhead GPT Section */}
        <div className="mt-6 mb-12 flex flex-col items-center justify-center">
          <Image
            src="/dreamahead.JPG"
            alt="DreamAhead Logo"
            width={250}
            height={250}
            className="rounded-full mb-6 border-4 border-white shadow-lg shadow-white/50"
            priority
          />
          <h2 className="text-2xl font-bold text-white mb-4">DreamAhead</h2>
          <p className="text-lg text-gray-200 mb-4 max-w-xl">
            Have questions or want to discuss STEM topics? Chat with <span className="font-bold text-white">DreamAhead</span>, our custom GPT model designed to increase STEM interest!
          </p>
          <a
            href="https://chatgpt.com/g/g-6829a7187bdc819193509149f2c7667a-dreamahead"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-full bg-black hover:bg-white hover:text-black transition text-lg shadow"
          >
            Talk to DreamAhead
          </a>
        </div>
      </div>

      {/* Additional Resources Header and Separator */}
      <hr className="border-t border-white my-12" />
      <div className="text-center mt-16 mb-8">
        <h2 className="text-2xl font-bold text-white">Additional Resources</h2>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Reading Materials */}
        <div className="bg-black overflow-hidden shadow rounded-lg border border-zinc-800">
          <div className="p-6">
            <h3 className="text-lg font-medium text-white">Reading Materials</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-white hover:underline">
                  NA
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  NA
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  NA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* External Links */}
        <div className="bg-black overflow-hidden shadow rounded-lg border border-zinc-800">
          <div className="p-6">
            <h3 className="text-lg font-medium text-white">External Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-white hover:underline">
                  NA
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  NA
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  NA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="bg-black overflow-hidden shadow rounded-lg border border-zinc-800">
          <div className="p-6">
            <h3 className="text-lg font-medium text-white">Downloadable Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-white hover:underline">
                  NA
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  NA
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  NA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-white">How do I access the videos?</h3>
            <p className="mt-2 text-white">
              All videos are freely available on our website. Simply visit the Videos page to browse our collection.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">How do I participate in the Kahoot quizzes?</h3>
            <p className="mt-2 text-white">
              Each video has an associated Kahoot quiz. Click the "Take Quiz" button on the video page to access it.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">How do I start a discussion with the GPT?</h3>
            <p className="mt-2 text-white">
              After watching a video, click the "Start Discussion" button to begin an interactive conversation with our AI assistant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 