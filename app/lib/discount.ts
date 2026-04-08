/**
 * Вычисляет размер скидки в процентах
 * @param originalPrice - исходная цена (полная стоимость)
 * @param discountedPrice - цена со скидкой
 * @returns число от 0 до 100 (процент скидки), округлённое до целого
 */
export function calculateDiscountPercent(
  originalPrice: number,
  discountedPrice: number,
): number {
  // Валидация входных данных
  if (
    !Number.isFinite(originalPrice) ||
    !Number.isFinite(discountedPrice) ||
    originalPrice <= 0 ||
    discountedPrice < 0
  ) {
    return 0;
  }

  // Если цена не изменилась или выросла — скидки нет
  if (discountedPrice >= originalPrice) {
    return 0;
  }

  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;

  // Округляем до целого и ограничиваем диапазоном [0, 100]
  return Math.min(100, Math.max(0, Math.round(discount)));
}

/**
 * Форматирует скидку для отображения в UI
 * @param percent - процент скидки
 * @returns строка вида "-25%" или пустая строка, если скидки нет
 */
export function formatDiscount(percent: number): string {
  return percent > 0 ? `−${percent}%` : '';
}

/**
 * Компактная проверка: есть ли скидка у тарифа
 */
export function hasDiscount(
  originalPrice: number,
  discountedPrice: number,
): boolean {
  return (
    Number.isFinite(originalPrice) &&
    Number.isFinite(discountedPrice) &&
    discountedPrice < originalPrice &&
    originalPrice > 0
  );
}
