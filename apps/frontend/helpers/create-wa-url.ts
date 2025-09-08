export const makeWAUrl = (title: string): string => {
  const text = `Здравствуйте, хочу забронировать ${title}. Подскажете свободные даты для заезда?`
  return `https://wa.me/79169074447?text=${encodeURIComponent(text)}`
}
