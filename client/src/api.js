const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const submitLead = async (payload) => {
  const response = await fetch(`${API_URL}/api/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Unable to submit form.');
  }

  return response.json();
};
