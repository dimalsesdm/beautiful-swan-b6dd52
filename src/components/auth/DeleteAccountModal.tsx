import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

interface DeleteAccountModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteAccountModal({ onClose, onConfirm }: DeleteAccountModalProps) {
  const { deleteAccount } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleDelete = async () => {
    if (!confirmed) {
      setError('Veuillez confirmer la suppression');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await deleteAccount();
      onConfirm();
    } catch (err) {
      console.error('Delete account error:', err);
      setError('Erreur lors de la suppression du compte. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚠️ Supprimer mon compte</h2>

        <div className="space-y-4 mb-6">
          <p className="text-gray-700">
            Êtes-vous sûr(e) de vouloir supprimer votre compte ? Cette action est <strong>irréversible</strong>.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-sm text-red-700">
              ⚠️ <strong>Attention :</strong> Toutes vos données personnelles seront supprimées définitivement.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="confirm"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="w-4 h-4 accent-red-600"
              disabled={loading}
            />
            <label htmlFor="confirm" className="text-sm text-gray-700">
              Je comprends que ma suppression est définitive
            </label>
          </div>

          {error && <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 disabled:opacity-50"
          >
            Annuler
          </button>
          <button
            onClick={handleDelete}
            disabled={loading || !confirmed}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? 'Suppression...' : 'Supprimer'}
          </button>
        </div>
      </div>
    </div>
  );
}
