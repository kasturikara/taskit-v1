const NotFoundPages = () => {
  return (
    <div className="flex items-center h-screen p-16 text-gray-800 bg-gray-50">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-gray-400 text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Halaman yang Anda cari tidak ditemukan.
          </p>
          <p className="mt-4 mb-8 text-lg text-gray-600">
            Silahkan periksa kembali URL atau kembali ke halaman sebelumnya.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 font-semibold text-white rounded bg-sky-600"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPages;
