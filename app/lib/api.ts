import { TariffsResponse } from '@/types';

const API_BASE = 'https://t-core.fit-hub.pro/Test';

export async function getTariffs(): Promise<TariffsResponse> {
  try {
    const response = await fetch(`${API_BASE}/GetTariffs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Кэширование: revalidate каждые 30 минут
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch tariffs:', error);
    throw error;
  }
}
