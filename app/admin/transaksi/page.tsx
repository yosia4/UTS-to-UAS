'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { FaEdit, FaTrash } from 'react-icons/fa';

const transactions = [
  {
    id_transaksi: 101,
    id_produk: 1,
    nama_pembeli: 'Amanda',
    tanggal_transaksi: '2025-05-15',
    total_harga: 1000000,
  },
  {
    id_transaksi: 102,
    id_produk: 3,
    nama_pembeli: 'Yosia',
    tanggal_transaksi: '2025-05-14',
    total_harga: 1500000,
  },
  {
    id_transaksi: 103,
    id_produk: 2,
    nama_pembeli: 'Dewi',
    tanggal_transaksi: '2025-05-13',
    total_harga: 1200000,
  },
];

export default function AdminTransaksiPage() {
  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this transaction?')) {
      alert(`Transaksi ${id} akan dihapus di aplikasi asli`);
    }
  };

  return (
    <AdminLayout title="Transaksi">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-rose-800">Riwayat Transaksi</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-rose-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">ID Transaksi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">ID Produk</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Nama Pembeli</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Tanggal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Total Harga</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-rose-800 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((trx) => (
                <tr key={trx.id_transaksi}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-800">{trx.id_transaksi}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trx.id_produk}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trx.nama_pembeli}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trx.tanggal_transaksi}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rp {trx.total_harga.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-rose-600 hover:text-rose-800 mr-4">
                      <FaEdit />
                    </button>
                    <button 
                      className="text-rose-600 hover:text-rose-800"
                      onClick={() => handleDelete(trx.id_transaksi)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
