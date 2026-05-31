import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { DeleteAccountModal } from './DeleteAccountModal';

export function ProfileMenu() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if (!user) return null;

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <>
      <div className="relative">
        {/* Bouton profil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Menu profil"
        >
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
            {user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
          </div>
          <span className="text-sm font-medium hidden sm:inline">{user.displayName || user.email}</span>
        </button>

        {/* Menu déroulant */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <p className="text-sm text-gray-600">Connecté en tant que</p>
              <p className="font-medium text-gray-900 truncate">{user.email}</p>
            </div>

            <div className="p-2">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                📋 Mon profil
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                ⚙️ Paramètres
              </button>

              <hr className="my-2" />

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                🚪 Déconnexion
              </button>

              <button
                onClick={() => {
                  setShowDeleteModal(true);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                🗑️ Supprimer mon compte
              </button>
            </div>
          </div>
        )}
      </div>

      {showDeleteModal && (
        <DeleteAccountModal
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => setShowDeleteModal(false)}
        />
      )}
    </>
  );
}
