import { videos } from '@/lib/data/videos';
import VideoCard from '@/components/video/VideoCard';

export default function VideosPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          Video Library
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-white">
          Explore our collection of educational videos about STEM and Society 5.0
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            description={video.description}
            thumbnailUrl={video.thumbnailUrl}
            duration={video.duration}
            videoId={video.id}
          />
        ))}
      </div>
    </div>
  );
}
