import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { Template1 } from '../components/templates/Template1';
import { Template2 } from '../components/templates/Template2';
import { Template3 } from '../components/templates/Template3';

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [template, setTemplate] = useState('1');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleSelect = (user) => {
    const exists = selected.find(u => u.id === user.id);
    setSelected(exists ? selected.filter(u => u.id !== user.id) : [...selected, user]);
  };

  const renderSelectedTemplate = () => {
    switch (template) {
      case '1':
        return <Template1 users={selected} />;
      case '2':
        return <Template2 users={selected} />;
      case '3':
        return <Template3 users={selected} />;
      default:
        return null;
    }
  };

  const getFileName = () => {
    switch (template) {
      case '1':
        return 'address_certificate.pdf';
      case '2':
        return 'customer_certificate.pdf';
      case '3':
        return 'customer_info_certificate.pdf';
      default:
        return 'document.pdf';
    }
  };

  const pdfDocument = renderSelectedTemplate();

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
          📋 Օգտատերերի Ցուցակ
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="border rounded px-2 py-1 w-full sm:w-auto"
          >
            <option value="1">📄 Template 1 — Բնակության հասցե</option>
            <option value="2">📄 Template 2 — Հաճախորդի վկայական</option>
            <option value="3">📄 Template 3 — Հայերեն + English Info</option>
          </select>

          {selected.length > 0 ? (
            <PDFDownloadLink
              document={pdfDocument}
              fileName={getFileName()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto text-center"
            >
              {({ loading }) => (loading ? 'Ստեղծում...' : '⬇️ Ստեղծել PDF')}
            </PDFDownloadLink>
          ) : (
            <button
              disabled
              className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed w-full sm:w-auto"
            >
              Նշիր օգտատերեր
            </button>
          )}
        </div>
      </div>

      {/* User List */}
      <div className="grid gap-4">
        {users.slice(0, 5).map((user) => (
          <div
            key={user.id}
            className="border rounded-md p-4 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-500">
                {user.address.city}, {user.address.street}
              </p>
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selected.some(u => u.id === user.id)}
                onChange={() => handleSelect(user)}
                className="w-4 h-4"
              />
              Նշել PDF-ի համար
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
