
const NotFoundPage = () => {
  return (
    <section className="py-24 h-[90vh] px-6 bg-white flex justify-center items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">
            Error 404
          </span>
          <h2 className="text-4xl font-serif font-bold text-slate-800">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The page you are looking for doesn’t exist or might have been moved.
            But don’t worry — let’s get you back to where you belong.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            You can return to the homepage or explore some of our other
            destinations.
          </p>

          <div className="pt-4">
            <a
              href="/"
              className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full transition inline-block"
            >
              Go Home
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden">
            <img
              src="https://ik.imagekit.io/iMuhammadAnas/undraw_page-not-found_6wni.png?updatedAt=1754802777231"
              alt="404 illustration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
