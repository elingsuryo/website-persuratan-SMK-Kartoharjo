import "../../index.css";
import SidebarMenu from "../../component/sidebarMenu";
import { useMail } from "../../hooks/mail/useMail";
import { useUsers } from "../../hooks/user/useUsers";

const AdminDashboard = () => {
  const { data: mails = [] } = useMail();
  const { data: users = [] } = useUsers();

  const totalUser = users.length;

  // Log aktivitas pengguna berdasarkan last_login
  const logAktivitas = users
    .sort(
      (a, b) =>
        new Date(b.last_login).getTime() - new Date(a.last_login).getTime()
    )
    .slice(0, 5);

  const jumlahDiterima = mails.filter(
    (m) => m.keterangan === "Diterima"
  ).length;

  const jumlahTotal = mails.length;

  const suratTerbaru = mails
    .filter((m) => m.keterangan === "Diproses" || m.keterangan === "Diterima")
    .sort(
      (a, b) =>
        new Date(b.tgl_upload).getTime() - new Date(a.tgl_upload).getTime()
    )
    .slice(0, 5);

  return (
    <div className="fixed top-0 z-50 w-full">
      <aside className="fixed z-40 w-64 h-screen">
        <SidebarMenu />
      </aside>

      <main className="flex-1 overflow-auto p-4 sm:ml-64">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-1.5 rounded-full border border-gray-300 focus:outline-none"
            />
            <div className="flex items-center gap-3">
              <span>Admin</span>
              <img
                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none'><circle cx='40' cy='40' r='40' fill='%23E2E8F0'/><circle cx='40' cy='28' r='14' fill='%23CBD5E0'/><path d='M20 62c0-11.046 8.954-20 20-20s20 8.954 20 20' fill='%23CBD5E0'/></svg>"
                alt="Profile"
                className="rounded-full w-10 h-10"
              />
            </div>
          </div>
        </header>

        {/* Ringkasan Surat */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-white rounded-xl shadow text-center">
            <p className="text-3xl font-bold text-blue-700">{jumlahTotal}</p>
            <p className="text-sm">Total Surat</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow text-center">
            <p className="text-3xl font-bold text-purple-700">{totalUser}</p>
            <p className="text-sm">Total User</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow text-center">
            <p className="text-3xl font-bold text-green-600">
              {jumlahDiterima}
            </p>
            <p className="text-sm">Diterima</p>
          </div>
        </div>

        {/* Bagian Bawah */}
        <div className="grid grid-cols-3 gap-4">
          {/* Surat Terbaru */}
          <div className="p-4 bg-white rounded-xl shadow overflow-y-auto max-h-80">
            <h2 className="font-semibold mb-2">Surat Terbaru</h2>
            <div className="space-y-3">
              {suratTerbaru.map((mail) => (
                <div
                  key={mail.id}
                  className="flex items-center justify-between border rounded-xl p-2"
                >
                  <div>
                    <p className="font-semibold">{mail.judul}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(mail.tgl_upload).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                  <div
                    className={`text-sm font-semibold ${
                      mail.keterangan === "Diterima"
                        ? "text-green-600"
                        : "text-yellow-500"
                    }`}
                  >
                    {mail.keterangan}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Log Aktivitas */}
        <div className="p-4 bg-white rounded-xl shadow">
          <h2 className="font-semibold mb-2">Log Aktivitas Pengguna</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {logAktivitas.map((user) => (
              <li
                key={user.id}
                className="flex justify-between border-b pb-2 last:border-none"
              >
                <span>{user.full_name}</span>
                <span className="text-gray-500">
                  {new Date(user.last_login).toLocaleString("id-ID")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
