export default function LoadingBlogPost() {
  return (
    <main className="bg-white text-black min-h-screen">
      <div className="w-full h-[400px] bg-gray-200 animate-pulse" />

      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="w-24 h-6 bg-gray-200 rounded-full animate-pulse mb-4" />

        <div className="h-12 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="h-12 bg-gray-200 rounded animate-pulse mb-8 w-3/4" />

        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />

          <div>
            <div className="w-32 h-4 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="w-24 h-3 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        <div className="space-y-5">
          <div className="h-5 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6" />
          <div className="h-5 bg-gray-200 rounded animate-pulse" />
        </div>
      </article>
    </main>
  );
}