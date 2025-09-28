function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
        Selamat Datang di Silsilah Keluarga
      </h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-xl">
        Jelajahi silsilah keluarga kami yang telah tercatat. Pilih salah satu
        keluarga di bawah ini untuk melihat lebih detail.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        <a
          href="/sisko"
          className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition transform duration-300"
        >
          <img
            src="sisko.png"
            alt="Keluarga Sisko"
            className="w-24 h-24 rounded-full mb-4 border-4 border-blue-200"
          />
          <h2 className="text-xl font-bold text-gray-700">Keluarga Sisko</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Klik untuk melihat detail
          </p>
        </a>
        <a
          href="#"
          className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition transform duration-300"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzd9ZGvo7WpT9OGuaSQwUfoXXXgnBV8fgXSA&s"
            alt="Keluarga Lain"
            className="w-24 h-24 rounded-full mb-4 border-4 border-blue-200"
          />
          <h2 className="text-xl font-bold text-gray-700">Keluarga Lain</h2>
          <p className="text-gray-500 mt-2 text-sm">Segera hadir</p>
        </a>
      </div>
    </div>
  );
}

export default Home;
