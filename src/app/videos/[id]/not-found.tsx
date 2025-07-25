import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Video Not Found
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              The video you're looking for doesn't exist or has been removed.
            </p>
            <div className="mt-6">
              <Link
                href="/videos"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Browse All Videos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 