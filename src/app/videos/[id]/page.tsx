import { videos } from '@/lib/data/videos';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next'; // Import Metadata for type hinting (optional, but good practice)

export default async function VideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = videos.find((v) => v.id === id);

  if (!video) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 bg-zinc-900 min-h-screen">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Video Player */}
        <div className="lg:col-span-8">
          <div className="aspect-video bg-black rounded-lg overflow-hidden border border-zinc-800 flex items-center justify-center relative">
            {video.videoUrl ? (
              video.videoUrl.includes('drive.google.com') ? (
                <iframe
                  src={video.videoUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <iframe
                  src={video.videoUrl.replace('watch?v=', 'embed/')}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            ) : (
              <div className="text-white text-xl font-medium">This video is no longer available.</div>
            )}
          </div>

          <div className="mt-8">
            <h1 className="text-3xl font-bold text-white">{video.title}</h1>
            <p className="mt-4 text-lg text-zinc-300">{video.description}</p>
          </div>

          <div className="mt-8 flex space-x-4">
            <a
              href="https://chatgpt.com/g/g-6829a7187bdc819193509149f2c7667a-dreamahead"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-300"
            >
              Start Discussion
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <div className="mt-12 lg:mt-0 lg:col-span-4">
          <div className="bg-zinc-800 shadow rounded-lg p-6 border border-zinc-700">
            <h2 className="text-lg font-medium text-cyan-400">Topics Covered</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {video.topics.map((topic) => (
                <span
                  key={topic}
                  className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-cyan-900 text-cyan-300"
                >
                  {topic}
                </span>
              ))}
            </div>

            <h2 className="mt-8 text-lg font-medium text-cyan-400">Related Videos</h2>
            <div className="mt-4 space-y-4">
              {videos
                .filter((v) => v.id !== video.id)
                .slice(0, 3)
                .map((relatedVideo) => (
                  <a
                    key={relatedVideo.id}
                    href={`/videos/${relatedVideo.id}`}
                    className="block hover:bg-zinc-700 rounded-lg p-4"
                  >
                    <h3 className="text-sm font-medium text-white">
                      {relatedVideo.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {relatedVideo.duration}
                    </p>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
