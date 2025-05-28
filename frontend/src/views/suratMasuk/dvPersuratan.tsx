import "../../index.css";

const DvPersuratan = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Surat Masuk</h1>
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl">
        <p className="mb-4 text-gray-700">Form untuk memasukkan surat</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="nomorSurat">
              Nomor Surat
            </label>
            <input
              type="text"
              id="nomorSurat"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan nomor surat"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="pengirim">
              Pengirim
            </label>
            <input
              type="text"
              id="pengirim"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan nama pengirim"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="tanggal">
              Tanggal Masuk
            </label>
            <input
              type="date"
              id="tanggal"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Simpan Surat
          </button>
        </form>
      </div>
    </div>
  );
};

export default DvPersuratan;
