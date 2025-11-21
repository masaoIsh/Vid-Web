import Link from 'next/link';
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  videoId: string;
}

export default function VideoCard({
  title,
  description,
  thumbnailUrl,
  duration,
  videoId,
}: VideoCardProps) {
  const isGoogleDriveImage = thumbnailUrl.includes('drive.google.com');
  
  // Extract file ID from Google Drive URL and convert to direct image URL
  const getGoogleDriveImageUrl = (url: string) => {
    if (!url.includes('drive.google.com')) return url;
    // Extract ID from various Google Drive URL formats
    const idMatch = url.match(/[?&]id=([^&]+)/);
    if (idMatch) {
      const fileId = idMatch[1];
      // Use the thumbnail API which is more reliable
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
    }
    return url;
  };
  
  const imageUrl = isGoogleDriveImage ? getGoogleDriveImageUrl(thumbnailUrl) : thumbnailUrl;
  
  return (
    <div className="bg-black overflow-hidden shadow rounded-xl border-2 border-white transition-shadow duration-300 hover:shadow-[0_0_24px_6px_rgba(34,197,94,0.7)]">
      <div className="relative aspect-video">
        {isGoogleDriveImage ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          {duration}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="mt-2 text-sm text-white">{description}</p>
        <div className="mt-4">
          <Link
            href={`/videos/${videoId}`}
            className="inline-flex items-center px-6 py-2 border border-white text-sm font-medium rounded-md text-white bg-black hover:bg-white hover:text-black transition w-full justify-center"
          >
            Watch Video
          </Link>
        </div>
      </div>
    </div>
  );
}
