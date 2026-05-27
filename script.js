// CamisetasPelu - Premium Football Jersey Store
// Pure Vanilla JavaScript - All UI text in Spanish

'use strict';

function formatARS(price) {
  return '$ARS ' + Number(price).toLocaleString('es-AR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// ============================================================
// PRODUCT DATA
// ============================================================
let products = [
  // MUNDIAL 2026
  {
    id: 1, name: "Argentina - Camiseta Titular 2026", team: "Argentina", league: "mundial",
    price: 89.99, originalPrice: 109.99, jerseyColor1: "#74ACDF", jerseyColor2: "#FFFFFF",
    jerseyPattern: "stripes", sizes: ["XS","S","M","L","XL","XXL"], stock: 45,
    rating: 4.9, reviews: 312, isNew: true, isBestSeller: true, isLimited: false, isFeatured: true,
    description: "La camiseta oficial de la Selección Argentina para el Mundial 2026. Tejido AeroSwift de alta tecnología con el escudo bordado.", season: "2025/26", badge: "top"
  },
  {
    id: 2, name: "Brasil - Camiseta Titular 2026", team: "Brasil", league: "mundial",
    price: 89.99, originalPrice: null, jerseyColor1: "#009C3B", jerseyColor2: "#FFD700",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 38,
    rating: 4.8, reviews: 278, isNew: true, isBestSeller: true, isLimited: false, isFeatured: true,
    description: "El icónico verde y amarillo de la Canarinha en su versión para el Mundial 2026. Calidad oficial CBF.", season: "2025/26", badge: "top"
  },
  {
    id: 3, name: "Francia - Camiseta Titular 2026", team: "Francia", league: "mundial",
    price: 84.99, originalPrice: null, jerseyColor1: "#002395", jerseyColor2: "#FFFFFF",
    jerseyPattern: "solid", sizes: ["S","M","L","XL","XXL"], stock: 29,
    rating: 4.7, reviews: 195, isNew: true, isBestSeller: false, isLimited: false, isFeatured: true,
    description: "Camiseta oficial de Les Bleus para el Mundial 2026. Azul profundo con el gallo galo bordado en el pecho.", season: "2025/26", badge: "new"
  },
  {
    id: 4, name: "Alemania - Camiseta Titular 2026", team: "Alemania", league: "mundial",
    price: 84.99, originalPrice: 94.99, jerseyColor1: "#FFFFFF", jerseyColor2: "#000000",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 33,
    rating: 4.6, reviews: 167, isNew: false, isBestSeller: false, isLimited: false, isFeatured: true,
    description: "La elegancia clásica de Die Mannschaft. Blanco inmaculado con detalles en negro para el Mundial 2026.", season: "2025/26", badge: null
  },
  {
    id: 5, name: "España - Camiseta Titular 2026", team: "España", league: "mundial",
    price: 84.99, originalPrice: null, jerseyColor1: "#FF0000", jerseyColor2: "#FFD700",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 41,
    rating: 4.8, reviews: 224, isNew: true, isBestSeller: true, isLimited: false, isFeatured: true,
    description: "La Roja en su máximo esplendor. Camiseta oficial de la Selección Española para el Mundial 2026 con tecnología DryFit.", season: "2025/26", badge: "top"
  },
  {
    id: 6, name: "Portugal - Camiseta Titular 2026", team: "Portugal", league: "mundial",
    price: 84.99, originalPrice: 99.99, jerseyColor1: "#006600", jerseyColor2: "#FF0000",
    jerseyPattern: "halves", sizes: ["S","M","L","XL","XXL"], stock: 18,
    rating: 4.7, reviews: 143, isNew: false, isBestSeller: false, isLimited: true, isFeatured: false,
    description: "Edición limitada de la camiseta de Portugal para el Mundial 2026. Solo quedan unidades disponibles.", season: "2025/26", badge: "limited"
  },
  {
    id: 7, name: "Inglaterra - Camiseta Titular 2026", team: "Inglaterra", league: "mundial",
    price: 79.99, originalPrice: null, jerseyColor1: "#FFFFFF", jerseyColor2: "#CF081F",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 36,
    rating: 4.5, reviews: 189, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "Los Tres Leones listos para el Mundial 2026. Camiseta blanca con los emblemáticos leones bordados.", season: "2025/26", badge: "new"
  },
  {
    id: 8, name: "Marruecos - Camiseta Titular 2026", team: "Marruecos", league: "mundial",
    price: 74.99, originalPrice: null, jerseyColor1: "#C1272D", jerseyColor2: "#006233",
    jerseyPattern: "halves", sizes: ["S","M","L","XL","XXL"], stock: 22,
    rating: 4.6, reviews: 97, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "Los Leones del Atlas regresan al Mundial con esta espectacular camiseta bicolor. Diseño exclusivo 2026.", season: "2025/26", badge: "new"
  },
  // PREMIER LEAGUE
  {
    id: 9, name: "Manchester City - Camiseta Titular 25/26", team: "Manchester City", league: "premier",
    price: 94.99, originalPrice: null, jerseyColor1: "#6CABDD", jerseyColor2: "#FFFFFF",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 52,
    rating: 4.8, reviews: 341, isNew: true, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "El cielo azul de Manchester en tu espalda. Camiseta oficial del City para la temporada 2025/26.", season: "2025/26", badge: "top"
  },
  {
    id: 10, name: "Arsenal - Camiseta Titular 25/26", team: "Arsenal", league: "premier",
    price: 89.99, originalPrice: 104.99, jerseyColor1: "#EF0107", jerseyColor2: "#FFFFFF",
    jerseyPattern: "halves", sizes: ["XS","S","M","L","XL","XXL"], stock: 44,
    rating: 4.7, reviews: 287, isNew: false, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "El rojo de los Gunners en versión premium. Camiseta oficial del Arsenal 2025/26 con tecnología de alto rendimiento.", season: "2025/26", badge: "top"
  },
  {
    id: 11, name: "Liverpool - Camiseta Titular 25/26", team: "Liverpool", league: "premier",
    price: 94.99, originalPrice: null, jerseyColor1: "#C8102E", jerseyColor2: "#FFFFFF",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 39,
    rating: 4.9, reviews: 398, isNew: true, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "You'll Never Walk Alone con la camiseta oficial de Liverpool 25/26. El rojo de Anfield en su máxima expresión.", season: "2025/26", badge: "top"
  },
  {
    id: 12, name: "Chelsea - Camiseta Titular 25/26", team: "Chelsea", league: "premier",
    price: 89.99, originalPrice: null, jerseyColor1: "#034694", jerseyColor2: "#FFFFFF",
    jerseyPattern: "solid", sizes: ["S","M","L","XL","XXL"], stock: 31,
    rating: 4.5, reviews: 201, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "El azul real de Stamford Bridge. Camiseta oficial del Chelsea para la temporada 2025/26.", season: "2025/26", badge: null
  },
  {
    id: 13, name: "Manchester United - Camiseta Titular 25/26", team: "Manchester United", league: "premier",
    price: 94.99, originalPrice: 109.99, jerseyColor1: "#DA291C", jerseyColor2: "#FFE500",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 47,
    rating: 4.6, reviews: 312, isNew: false, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "El diablo rojo de Old Trafford en versión 2025/26. Calidad premium con el escudo bordado del United.", season: "2025/26", badge: "top"
  },
  {
    id: 14, name: "Tottenham - Camiseta Titular 25/26", team: "Tottenham", league: "premier",
    price: 84.99, originalPrice: null, jerseyColor1: "#FFFFFF", jerseyColor2: "#132257",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 28,
    rating: 4.4, reviews: 154, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "Los Spurs de blanco para la temporada 2025/26. Camiseta oficial del Tottenham Hotspur con diseño minimalista.", season: "2025/26", badge: "new"
  },
  // LA LIGA
  {
    id: 15, name: "Real Madrid - Camiseta Titular 25/26", team: "Real Madrid", league: "laliga",
    price: 99.99, originalPrice: null, jerseyColor1: "#FFFFFF", jerseyColor2: "#FFD700",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 67,
    rating: 4.9, reviews: 521, isNew: true, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "La camiseta del equipo más laureado de la historia. Real Madrid 2025/26, blanco inmaculado con detalles dorados.", season: "2025/26", badge: "top"
  },
  {
    id: 16, name: "Barcelona - Camiseta Titular 25/26", team: "Barcelona", league: "laliga",
    price: 99.99, originalPrice: 114.99, jerseyColor1: "#A50044", jerseyColor2: "#004D98",
    jerseyPattern: "halves", sizes: ["XS","S","M","L","XL","XXL"], stock: 58,
    rating: 4.8, reviews: 467, isNew: true, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "Més que un club, una camiseta. El blaugrana del Barça en su versión premium para 2025/26.", season: "2025/26", badge: "top"
  },
  {
    id: 17, name: "Atlético Madrid - Camiseta Titular 25/26", team: "Atlético Madrid", league: "laliga",
    price: 89.99, originalPrice: null, jerseyColor1: "#CB3524", jerseyColor2: "#FFFFFF",
    jerseyPattern: "stripes", sizes: ["S","M","L","XL","XXL"], stock: 35,
    rating: 4.7, reviews: 234, isNew: false, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "El colchonero siempre luchador. Camiseta oficial del Atlético de Madrid 2025/26 a rayas rojas y blancas.", season: "2025/26", badge: "top"
  },
  {
    id: 18, name: "Sevilla FC - Camiseta Titular 25/26", team: "Sevilla", league: "laliga",
    price: 79.99, originalPrice: 89.99, jerseyColor1: "#FFFFFF", jerseyColor2: "#FF0000",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 24,
    rating: 4.5, reviews: 143, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "La magia del Pizjuán en una camiseta. Sevilla FC 2025/26 en blanco con detalles en rojo.", season: "2025/26", badge: null
  },
  {
    id: 19, name: "Real Sociedad - Camiseta Titular 25/26", team: "Real Sociedad", league: "laliga",
    price: 74.99, originalPrice: null, jerseyColor1: "#0033A0", jerseyColor2: "#FFFFFF",
    jerseyPattern: "stripes", sizes: ["S","M","L","XL","XXL"], stock: 19,
    rating: 4.4, reviews: 89, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "La txuri-urdin de San Sebastián. Real Sociedad 2025/26 en azul y blanco a rayas.", season: "2025/26", badge: "new"
  },
  {
    id: 20, name: "Athletic Club - Camiseta Titular 25/26", team: "Athletic Club", league: "laliga",
    price: 79.99, originalPrice: null, jerseyColor1: "#EF3340", jerseyColor2: "#FFFFFF",
    jerseyPattern: "stripes", sizes: ["XS","S","M","L","XL","XXL"], stock: 21,
    rating: 4.6, reviews: 112, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "Solo canteras. El Athletic de Bilbao en su histórica camiseta a rayas rojas y blancas para 2025/26.", season: "2025/26", badge: null
  },
  // SERIE A
  {
    id: 21, name: "Inter Milan - Camiseta Titular 25/26", team: "Inter Milan", league: "seriea",
    price: 89.99, originalPrice: null, jerseyColor1: "#010E80", jerseyColor2: "#000000",
    jerseyPattern: "stripes", sizes: ["XS","S","M","L","XL","XXL"], stock: 41,
    rating: 4.8, reviews: 276, isNew: true, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "I Nerazzurri en versión 2025/26. Las icónicas rayas azul y negro del Inter de Milán en calidad premium.", season: "2025/26", badge: "top"
  },
  {
    id: 22, name: "AC Milan - Camiseta Titular 25/26", team: "AC Milan", league: "seriea",
    price: 89.99, originalPrice: 99.99, jerseyColor1: "#FB0404", jerseyColor2: "#000000",
    jerseyPattern: "stripes", sizes: ["XS","S","M","L","XL","XXL"], stock: 38,
    rating: 4.7, reviews: 254, isNew: false, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "El Diablo Rossonero de San Siro. AC Milan 2025/26 con las eternas rayas rojas y negras.", season: "2025/26", badge: "top"
  },
  {
    id: 23, name: "Juventus - Camiseta Titular 25/26", team: "Juventus", league: "seriea",
    price: 94.99, originalPrice: null, jerseyColor1: "#FFFFFF", jerseyColor2: "#000000",
    jerseyPattern: "halves", sizes: ["S","M","L","XL","XXL"], stock: 45,
    rating: 4.6, reviews: 198, isNew: true, isBestSeller: false, isLimited: true, isFeatured: false,
    description: "Edición limitada de la Vecchia Signora. Juventus 2025/26 en blanco y negro, clásico atemporal.", season: "2025/26", badge: "limited"
  },
  {
    id: 24, name: "Napoli - Camiseta Titular 25/26", team: "Napoli", league: "seriea",
    price: 84.99, originalPrice: null, jerseyColor1: "#087FDE", jerseyColor2: "#FFFFFF",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 33,
    rating: 4.7, reviews: 187, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "Il Cielo di Napoli. El azul celeste del Napoli para la temporada 2025/26, plena de ambición.", season: "2025/26", badge: "new"
  },
  {
    id: 25, name: "Roma - Camiseta Titular 25/26", team: "Roma", league: "seriea",
    price: 84.99, originalPrice: 94.99, jerseyColor1: "#8B1E3F", jerseyColor2: "#FFD700",
    jerseyPattern: "solid", sizes: ["S","M","L","XL","XXL"], stock: 26,
    rating: 4.5, reviews: 143, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "La loba capitolina en versión 2025/26. AS Roma en granate con detalles dorados.", season: "2025/26", badge: null
  },
  // BUNDESLIGA
  {
    id: 26, name: "Bayern Munich - Camiseta Titular 25/26", team: "Bayern Munich", league: "bundesliga",
    price: 94.99, originalPrice: null, jerseyColor1: "#DC052D", jerseyColor2: "#FFFFFF",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 55,
    rating: 4.9, reviews: 389, isNew: true, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "El gigante bávaro en su máxima expresión. Bayern München 2025/26 en rojo brillante.", season: "2025/26", badge: "top"
  },
  {
    id: 27, name: "Borussia Dortmund - Camiseta Titular 25/26", team: "Borussia Dortmund", league: "bundesliga",
    price: 89.99, originalPrice: 99.99, jerseyColor1: "#FFE500", jerseyColor2: "#000000",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 43,
    rating: 4.7, reviews: 267, isNew: false, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "El muro amarillo del Signal Iduna Park. BVB Dortmund 2025/26 en amarillo vibrante.", season: "2025/26", badge: "top"
  },
  {
    id: 28, name: "Bayer Leverkusen - Camiseta Titular 25/26", team: "Bayer Leverkusen", league: "bundesliga",
    price: 84.99, originalPrice: null, jerseyColor1: "#E32221", jerseyColor2: "#000000",
    jerseyPattern: "solid", sizes: ["S","M","L","XL","XXL"], stock: 27,
    rating: 4.6, reviews: 134, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "El campeón invicto viste de rojo. Bayer Leverkusen 2025/26, la farmacia más peligrosa de Europa.", season: "2025/26", badge: "new"
  },
  {
    id: 29, name: "RB Leipzig - Camiseta Titular 25/26", team: "RB Leipzig", league: "bundesliga",
    price: 79.99, originalPrice: null, jerseyColor1: "#FFFFFF", jerseyColor2: "#CC0033",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 22,
    rating: 4.4, reviews: 98, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "Die Roten Bullen en versión 2025/26. RB Leipzig en blanco con el toro rojo emblemático.", season: "2025/26", badge: null
  },
  {
    id: 30, name: "Borussia Mönchengladbach - Camiseta Titular 25/26", team: "Borussia Mönchengladbach", league: "bundesliga",
    price: 74.99, originalPrice: 84.99, jerseyColor1: "#FFFFFF", jerseyColor2: "#000000",
    jerseyPattern: "stripes", sizes: ["S","M","L","XL","XXL"], stock: 16,
    rating: 4.3, reviews: 72, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "Die Fohlen listos para el 2025/26. Mönchengladbach en rayas blancas y negras clásicas.", season: "2025/26", badge: null
  },
  // LIGUE 1
  {
    id: 31, name: "Paris Saint-Germain - Camiseta Titular 25/26", team: "Paris Saint-Germain", league: "ligue1",
    price: 99.99, originalPrice: null, jerseyColor1: "#004170", jerseyColor2: "#FF0000",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 61,
    rating: 4.8, reviews: 412, isNew: true, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "La capital del fútbol europeo. PSG 2025/26 en azul profundo con la Torre Eiffel grabada.", season: "2025/26", badge: "top"
  },
  {
    id: 32, name: "Olympique Lyon - Camiseta Titular 25/26", team: "Olympique Lyon", league: "ligue1",
    price: 79.99, originalPrice: null, jerseyColor1: "#FFFFFF", jerseyColor2: "#003DA5",
    jerseyPattern: "solid", sizes: ["S","M","L","XL","XXL"], stock: 24,
    rating: 4.4, reviews: 112, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "L'OL de regreso a la cima. Olympique de Lyon 2025/26 en blanco con detalles azules.", season: "2025/26", badge: null
  },
  {
    id: 33, name: "Olympique Marseille - Camiseta Titular 25/26", team: "Olympique Marseille", league: "ligue1",
    price: 84.99, originalPrice: 94.99, jerseyColor1: "#2CBFEF", jerseyColor2: "#FFFFFF",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 31,
    rating: 4.6, reviews: 178, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "L'OM y el Vieux Port. Olympique Marseille 2025/26 en azul cielo mediterráneo.", season: "2025/26", badge: "new"
  },
  {
    id: 34, name: "Monaco - Camiseta Titular 25/26", team: "Monaco", league: "ligue1",
    price: 84.99, originalPrice: null, jerseyColor1: "#EF0107", jerseyColor2: "#FFFFFF",
    jerseyPattern: "halves", sizes: ["S","M","L","XL","XXL"], stock: 19,
    rating: 4.5, reviews: 94, isNew: false, isBestSeller: false, isLimited: true, isFeatured: false,
    description: "Edición limitada del principado. AS Monaco 2025/26 en su clásico diseño bicolor rojo y blanco.", season: "2025/26", badge: "limited"
  },
  {
    id: 35, name: "RC Lens - Camiseta Titular 25/26", team: "Lens", league: "ligue1",
    price: 74.99, originalPrice: null, jerseyColor1: "#FFE500", jerseyColor2: "#DB0A14",
    jerseyPattern: "stripes", sizes: ["XS","S","M","L","XL","XXL"], stock: 17,
    rating: 4.3, reviews: 67, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "El minero del norte de Francia. RC Lens 2025/26 en rayas amarillas y rojas vibrantes.", season: "2025/26", badge: "new"
  },
  // OTROS
  {
    id: 36, name: "Boca Juniors - Camiseta Titular 25/26", team: "Boca Juniors", league: "otros",
    price: 79.99, originalPrice: 89.99, jerseyColor1: "#003DA5", jerseyColor2: "#F5C300",
    jerseyPattern: "stripes", sizes: ["XS","S","M","L","XL","XXL"], stock: 48,
    rating: 4.8, reviews: 334, isNew: false, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "La Bombonera latiendo en tu pecho. Boca Juniors 2025/26 en azul y amarillo, leyenda xeneize.", season: "2025/26", badge: "top"
  },
  {
    id: 37, name: "River Plate - Camiseta Titular 25/26", team: "River Plate", league: "otros",
    price: 79.99, originalPrice: null, jerseyColor1: "#FFFFFF", jerseyColor2: "#EF0107",
    jerseyPattern: "diagonal", sizes: ["XS","S","M","L","XL","XXL"], stock: 42,
    rating: 4.7, reviews: 289, isNew: true, isBestSeller: true, isLimited: false, isFeatured: false,
    description: "El Millonario en su esencia. River Plate 2025/26 con la banda diagonal roja en blanco pristino.", season: "2025/26", badge: "top"
  },
  {
    id: 38, name: "Flamengo - Camiseta Titular 25/26", team: "Flamengo", league: "otros",
    price: 79.99, originalPrice: 89.99, jerseyColor1: "#CC0000", jerseyColor2: "#000000",
    jerseyPattern: "stripes", sizes: ["S","M","L","XL","XXL"], stock: 35,
    rating: 4.6, reviews: 198, isNew: false, isBestSeller: false, isLimited: true, isFeatured: false,
    description: "Edición limitada del Mengão. Flamengo 2025/26, el más querido de Brasil en rayas rojo y negro.", season: "2025/26", badge: "limited"
  },
  {
    id: 39, name: "Inter Miami - Camiseta Titular 25/26", team: "Inter Miami", league: "otros",
    price: 84.99, originalPrice: null, jerseyColor1: "#F7B5CD", jerseyColor2: "#231F20",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 39,
    rating: 4.5, reviews: 221, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "La revolución rosa de Miami. Inter Miami 2025/26 en rosa vibrante, el equipo que cambió la MLS.", season: "2025/26", badge: "new"
  },
  {
    id: 40, name: "Club América - Camiseta Titular 25/26", team: "Club América", league: "otros",
    price: 74.99, originalPrice: null, jerseyColor1: "#FFD700", jerseyColor2: "#003DA5",
    jerseyPattern: "solid", sizes: ["XS","S","M","L","XL","XXL"], stock: 27,
    rating: 4.4, reviews: 143, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: "El América, el equipo del pueblo mexicano. Club América 2025/26 en dorado y azul imperial.", season: "2025/26", badge: null
  }
];

// ============================================================
// TESTIMONIALS DATA
// ============================================================
const testimonials = [
  {
    name: "Javier García",
    team: "Real Madrid",
    rating: 5,
    text: "Increíble calidad. La camiseta del Madrid llegó en tiempo récord y el bordado del escudo es perfecto. Sin duda la mejor tienda de camisetas que he probado.",
    avatar: "JG",
    date: "Marzo 2026"
  },
  {
    name: "María López",
    team: "Argentina",
    rating: 5,
    text: "Compré la camiseta de Argentina para el Mundial y quedé enamorada. El tejido es suave, los colores son fieles y el talle era exactamente como en la guía. ¡Volveré a comprar!",
    avatar: "ML",
    date: "Febrero 2026"
  },
  {
    name: "Carlos Ruiz",
    team: "Barcelona",
    rating: 5,
    text: "Llevo años buscando camisetas auténticas y CamisetasPelu supera todas las expectativas. El Barça llegó perfectamente embalado y con certificado de autenticidad.",
    avatar: "CR",
    date: "Enero 2026"
  },
  {
    name: "Ana Fernández",
    team: "Liverpool",
    rating: 4,
    text: "Muy buena experiencia en general. La camiseta del Liverpool es preciosa. Tardó 3 días en llegar, muy rápido. Le doy 4 estrellas porque el embalaje podría ser mejor.",
    avatar: "AF",
    date: "Abril 2026"
  },
  {
    name: "Roberto Méndez",
    team: "Bayern Munich",
    rating: 5,
    text: "Pedí la camiseta del Bayern y estoy completamente satisfecho. El servicio al cliente es excelente, me ayudaron con la talla y el envío fue rapidísimo. 100% recomendable.",
    avatar: "RM",
    date: "Marzo 2026"
  },
  {
    name: "Sofia Martínez",
    team: "PSG",
    rating: 5,
    text: "Mi camiseta del PSG es simplemente perfecta. Los detalles son impresionantes y se nota que es de primera calidad. CamisetasPelu se ha convertido en mi tienda favorita.",
    avatar: "SM",
    date: "Mayo 2026"
  }
];

// ============================================================
// FAQ DATA
// ============================================================
const faqData = [
  {
    question: "¿Cuánto tarda el envío?",
    answer: "El envío estándar tarda entre 3-5 días hábiles dentro de España. Para envíos internacionales, el plazo es de 7-10 días hábiles. Ofrecemos también envío exprés en 24-48 horas por un coste adicional."
  },
  {
    question: "¿Las camisetas son auténticas y oficiales?",
    answer: "Sí, todas nuestras camisetas son 100% oficiales y auténticas. Trabajamos directamente con distribuidores autorizados por las federaciones y clubes. Cada camiseta incluye su etiqueta holográfica de autenticidad."
  },
  {
    question: "¿Cómo elijo mi talla correctamente?",
    answer: "Disponemos de una guía de tallas detallada en la página de cada producto. Te recomendamos medir tu pecho, cintura y comparar con nuestra tabla. En caso de duda entre dos tallas, recomendamos elegir la mayor para mayor comodidad."
  },
  {
    question: "¿Puedo personalizar la camiseta con mi nombre y número?",
    answer: "¡Por supuesto! Ofrecemos servicio de personalización con el nombre y número de tu elección mediante serigrafía oficial. El coste adicional es de $ARS 15.000 y el plazo de entrega aumenta en 2-3 días hábiles."
  },
  {
    question: "¿Cuál es la política de devoluciones?",
    answer: "Aceptamos devoluciones dentro de los 30 días posteriores a la recepción, siempre que el artículo esté en perfecto estado, sin usar y con todas sus etiquetas originales. Las camisetas personalizadas no son elegibles para devolución."
  },
  {
    question: "¿Qué métodos de pago aceptáis?",
    answer: "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), PayPal, transferencia bancaria y pago contra reembolso. Todos los pagos están protegidos con encriptación SSL de 256 bits."
  },
  {
    question: "¿Ofrecéis descuentos para compras en grupo o equipos?",
    answer: "Sí, disponemos de precios especiales para pedidos de más de 10 unidades. Si eres representante de un equipo o club, contacta con nosotros por email y te prepararemos un presupuesto personalizado con descuentos de hasta el 30%."
  },
  {
    question: "¿Cómo puedo rastrear mi pedido?",
    answer: "Una vez que tu pedido sea enviado, recibirás un email con el número de seguimiento y un enlace para rastrear tu paquete en tiempo real. También puedes consultar el estado desde tu cuenta en nuestra web."
  }
];

// ============================================================
// STATE
// ============================================================
const state = {
  currentLeague: 'all',
  currentTeam: null,
  searchQuery: '',
  sort: 'default',
  page: 1,
  perPage: 12,
  cartItems: [],
  wishlist: [],
  currentSlide: 0,
  autoPlayTimer: null,
  cursorX: 0,
  cursorY: 0,
  followerX: 0,
  followerY: 0
};

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function padZero(num) {
  return String(num).padStart(2, '0');
}

function getLeagueName(league) {
  const names = {
    mundial: 'Mundial 2026',
    premier: 'Premier League',
    laliga: 'La Liga',
    seriea: 'Serie A',
    bundesliga: 'Bundesliga',
    ligue1: 'Ligue 1',
    otros: 'Otros'
  };
  return names[league] || league;
}

function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars += '<span class="star filled">★</span>';
    } else if (rating >= i - 0.5) {
      stars += '<span class="star half">★</span>';
    } else {
      stars += '<span class="star empty">★</span>';
    }
  }
  return stars;
}

// ============================================================
// JERSEY SVG GENERATION
// ============================================================
function getJerseySVG(color1, color2, pattern, teamName, size) {
  const w = size || 100;
  const scale = w / 100;
  let patternOverlay = '';

  if (pattern === 'stripes') {
    patternOverlay = `
      <rect x="38" y="28" width="8" height="80" fill="${color2}" opacity="0.85" rx="1"/>
      <rect x="54" y="28" width="8" height="80" fill="${color2}" opacity="0.85" rx="1"/>
    `;
  } else if (pattern === 'hoops') {
    patternOverlay = `
      <rect x="20" y="48" width="60" height="12" fill="${color2}" opacity="0.8"/>
      <rect x="20" y="72" width="60" height="12" fill="${color2}" opacity="0.8"/>
    `;
  } else if (pattern === 'halves') {
    patternOverlay = `
      <path d="M50,28 L80,28 L80,108 Q80,111 77,111 L53,111 L50,108 Z" fill="${color2}" opacity="0.9"/>
    `;
  } else if (pattern === 'diagonal') {
    patternOverlay = `
      <polygon points="50,28 80,28 80,75 20,108 20,95" fill="${color2}" opacity="0.85"/>
    `;
  }

  const initials = teamName ? teamName.substring(0, 2).toUpperCase() : '';

  return `<svg viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg" class="jersey-svg" style="width:100%;height:100%;">
    <defs>
      <linearGradient id="jerseyGrad_${color1.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color1};stop-opacity:0.85" />
      </linearGradient>
    </defs>
    <!-- Left sleeve -->
    <polygon points="5,42 22,28 35,38 20,52" fill="${color1}"/>
    <!-- Right sleeve -->
    <polygon points="95,42 78,28 65,38 80,52" fill="${color1}"/>
    <!-- Body -->
    <rect x="20" y="28" width="60" height="80" rx="6" fill="url(#jerseyGrad_${color1.replace('#','')})"/>
    <!-- Pattern overlay -->
    ${patternOverlay}
    <!-- Collar V-neck -->
    <path d="M38,28 Q50,44 62,28 L60,20 Q50,32 40,20 Z" fill="${color2}" opacity="0.95"/>
    <!-- Sleeve cuff lines -->
    <line x1="5" y1="42" x2="20" y2="52" stroke="${color2}" stroke-width="2" opacity="0.5"/>
    <line x1="95" y1="42" x2="80" y2="52" stroke="${color2}" stroke-width="2" opacity="0.5"/>
    <!-- Shine -->
    <path d="M28,35 Q38,32 42,55 L37,55 Q33,35 28,40 Z" fill="rgba(255,255,255,0.12)"/>
    <!-- Team initials -->
    <text x="50" y="75" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="${color2}" opacity="0.7">${initials}</text>
  </svg>`;
}

// ============================================================
// PRODUCT CARD HTML
// ============================================================
function createProductCard(product, listView) {
  const isWishlisted = state.wishlist.includes(product.id);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPct = hasDiscount ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  let badgeHTML = '';
  if (product.isLimited) {
    badgeHTML += `<span class="product-badge badge-limited">Limitada</span>`;
  } else if (product.isBestSeller) {
    badgeHTML += `<span class="product-badge badge-bestseller">Top Venta</span>`;
  } else if (product.isNew) {
    badgeHTML += `<span class="product-badge badge-new">Nuevo</span>`;
  }
  if (hasDiscount) {
    badgeHTML += `<span class="product-badge badge-sale">-${discountPct}%</span>`;
  }

  const firstSize = product.sizes[0];

  return `
    <div class="product-card reveal${product.isLimited ? ' limited-card' : ''}" data-id="${product.id}" data-league="${product.league}">
      <div class="product-visual">
        <div class="jersey-container">
          ${product.imageUrl
            ? `<img src="${product.imageUrl}" alt="${product.name}" style="width:140px;height:160px;object-fit:contain;">`
            : getJerseySVG(product.jerseyColor1, product.jerseyColor2, product.jerseyPattern, product.team)}
        </div>
        ${badgeHTML}
        <button class="wishlist-btn${isWishlisted ? ' active' : ''}" data-id="${product.id}" aria-label="Añadir a favoritos" title="Favoritos">
          <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <div class="product-hover-overlay">
          <button class="quick-view-btn" data-id="${product.id}">Vista Rápida</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-league-badge">${getLeagueName(product.league)}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          ${generateStars(product.rating)}
          <span class="rating-value">${product.rating.toFixed(1)}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-sizes">
          ${product.sizes.map((s, i) => `<span class="size-chip${i === 0 ? ' selected' : ''}" data-size="${s}">${s}</span>`).join('')}
        </div>
        <div class="product-price-row">
          <span class="product-price">${formatARS(product.price)}</span>
          ${hasDiscount ? `<span class="product-original-price">${formatARS(product.originalPrice)}</span>` : ''}
        </div>
        <button class="add-to-cart-btn" data-id="${product.id}" data-size="${firstSize}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Añadir al Carrito
        </button>
      </div>
    </div>
  `;
}

// ============================================================
// PRODUCT FILTERING & RENDERING
// ============================================================
function filterProducts() {
  return products.filter(p => {
    if (state.currentLeague !== 'all' && p.league !== state.currentLeague) return false;
    if (state.currentTeam && p.team !== state.currentTeam) return false;
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      if (!p.name.toLowerCase().includes(q) && !p.team.toLowerCase().includes(q) && !p.league.toLowerCase().includes(q)) return false;
    }
    return true;
  });
}

function sortProducts(arr) {
  const sorted = [...arr];
  switch (state.sort) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    default:
      break;
  }
  return sorted;
}

function renderProducts(append) {
  const grid = document.getElementById('productsGrid');
  const resultsCount = document.getElementById('resultsCount');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (!grid) return;

  const filtered = filterProducts();
  const sorted = sortProducts(filtered);
  const total = sorted.length;
  const sliced = sorted.slice(0, state.page * state.perPage);

  if (!append) {
    grid.innerHTML = '';
  }

  if (total === 0) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-icon">⚽</div><h3>No se encontraron productos</h3><p>Intenta con otros filtros o términos de búsqueda.</p></div>`;
    if (resultsCount) resultsCount.textContent = '0 productos encontrados';
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }

  if (resultsCount) {
    resultsCount.textContent = `${total} producto${total !== 1 ? 's' : ''} encontrado${total !== 1 ? 's' : ''}`;
  }

  const start = append ? (state.page - 1) * state.perPage : 0;
  const toRender = append ? sorted.slice(start, state.page * state.perPage) : sliced;

  toRender.forEach(product => {
    const div = document.createElement('div');
    div.innerHTML = createProductCard(product);
    const card = div.firstElementChild;
    grid.appendChild(card);
  });

  if (loadMoreBtn) {
    loadMoreBtn.style.display = sliced.length < total ? 'flex' : 'none';
  }

  attachProductCardListeners();
  initRevealObserver();
  updateWishlistButtons();
}

function renderSubFilters(league) {
  const subFilters = document.getElementById('subFilters');
  if (!subFilters) return;

  if (league === 'all') {
    subFilters.innerHTML = '';
    subFilters.style.display = 'none';
    return;
  }

  const teams = [...new Set(products.filter(p => p.league === league).map(p => p.team))];
  subFilters.style.display = 'flex';
  subFilters.innerHTML = `
    <button class="sub-chip${state.currentTeam === null ? ' active' : ''}" data-team="">Todos</button>
    ${teams.map(t => `<button class="sub-chip${state.currentTeam === t ? ' active' : ''}" data-team="${t}">${t}</button>`).join('')}
  `;

  subFilters.querySelectorAll('.sub-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      state.currentTeam = chip.dataset.team || null;
      state.page = 1;
      subFilters.querySelectorAll('.sub-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      updateActiveFilters();
      renderProducts(false);
    });
  });
}

function updateActiveFilters() {
  const container = document.getElementById('activeFilters');
  if (!container) return;
  let html = '';
  if (state.currentLeague !== 'all') {
    html += `<span class="filter-pill">${getLeagueName(state.currentLeague)} <button class="remove-filter" data-type="league">×</button></span>`;
  }
  if (state.currentTeam) {
    html += `<span class="filter-pill">${state.currentTeam} <button class="remove-filter" data-type="team">×</button></span>`;
  }
  if (state.searchQuery) {
    html += `<span class="filter-pill">Búsqueda: "${state.searchQuery}" <button class="remove-filter" data-type="search">×</button></span>`;
  }
  container.innerHTML = html;

  container.querySelectorAll('.remove-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.type === 'league') {
        state.currentLeague = 'all';
        state.currentTeam = null;
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        const allTab = document.querySelector('.filter-tab[data-league="all"]');
        if (allTab) allTab.classList.add('active');
        renderSubFilters('all');
      } else if (btn.dataset.type === 'team') {
        state.currentTeam = null;
      } else if (btn.dataset.type === 'search') {
        state.searchQuery = '';
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = '';
      }
      state.page = 1;
      updateActiveFilters();
      renderProducts(false);
    });
  });
}

function attachProductCardListeners() {
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.product-card');
      const selectedSize = card ? card.querySelector('.size-chip.selected') : null;
      const size = selectedSize ? selectedSize.dataset.size : 'M';
      addToCart(parseInt(btn.dataset.id), size);
    });
  });

  document.querySelectorAll('.size-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = chip.closest('.product-card');
      if (card) {
        card.querySelectorAll('.size-chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
        const addBtn = card.querySelector('.add-to-cart-btn');
        if (addBtn) addBtn.dataset.size = chip.dataset.size;
      }
    });
  });

  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.id));
    });
  });

  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuickView(parseInt(btn.dataset.id));
    });
  });
}

// ============================================================
// CART SYSTEM
// ============================================================
const CART_KEY = 'camisetaspelu_cart';

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    state.cartItems = saved ? JSON.parse(saved) : [];
  } catch (e) {
    state.cartItems = [];
  }
  updateCartCount();
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(state.cartItems));
  } catch (e) {}
}

function addToCart(productId, size) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cartItems.find(item => item.productId === productId && item.size === size);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cartItems.push({
      productId,
      name: product.name,
      price: product.price,
      size,
      quantity: 1,
      jerseyColor1: product.jerseyColor1,
      jerseyColor2: product.jerseyColor2,
      jerseyPattern: product.jerseyPattern,
      team: product.team
    });
  }
  saveCart();
  updateCartCount();
  renderCartItems();
  showToast('¡Añadido al carrito!', 'success');
}

function removeFromCart(productId, size) {
  state.cartItems = state.cartItems.filter(item => !(item.productId === productId && item.size === size));
  saveCart();
  updateCartCount();
  renderCartItems();
  showToast('Producto eliminado del carrito', 'info');
}

function updateCartQuantity(productId, size, delta) {
  const item = state.cartItems.find(i => i.productId === productId && i.size === size);
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + delta);
  saveCart();
  updateCartCount();
  renderCartItems();
}

function updateCartCount() {
  const count = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartCount');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function calculateCartTotal() {
  return state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCartItems() {
  const cartItemsEl = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTotal = document.getElementById('cartTotal');

  if (!cartItemsEl) return;

  if (state.cartItems.length === 0) {
    if (cartEmpty) cartEmpty.style.display = 'flex';
    if (cartFooter) cartFooter.style.display = 'none';
    cartItemsEl.innerHTML = '';
    return;
  }

  if (cartEmpty) cartEmpty.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'block';

  cartItemsEl.innerHTML = state.cartItems.map(item => `
    <div class="cart-item">
      <div class="cart-item-visual">
        ${getJerseySVG(item.jerseyColor1, item.jerseyColor2, item.jerseyPattern, item.team, 60)}
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-size">Talla: ${item.size}</div>
        <div class="cart-item-price">${formatARS(item.price * item.quantity)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-id="${item.productId}" data-size="${item.size}" data-delta="-1">−</button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn" data-id="${item.productId}" data-size="${item.size}" data-delta="1">+</button>
          <button class="remove-cart-btn" data-id="${item.productId}" data-size="${item.size}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"></path>
              <path d="M10 11v6M14 11v6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = calculateCartTotal();
  if (cartSubtotal) cartSubtotal.textContent = formatARS(subtotal);
  if (cartTotal) cartTotal.textContent = formatARS(subtotal);

  cartItemsEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateCartQuantity(parseInt(btn.dataset.id), btn.dataset.size, parseInt(btn.dataset.delta));
    });
  });

  cartItemsEl.querySelectorAll('.remove-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(parseInt(btn.dataset.id), btn.dataset.size);
    });
  });
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('active');
  renderCartItems();
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('overlay');
  if (drawer) drawer.classList.remove('open');
  if (!document.getElementById('wishlistDrawer')?.classList.contains('open')) {
    if (overlay) overlay.classList.remove('active');
  }
}

// ============================================================
// WISHLIST SYSTEM
// ============================================================
const WISHLIST_KEY = 'camisetaspelu_wishlist';

function loadWishlist() {
  try {
    const saved = localStorage.getItem(WISHLIST_KEY);
    state.wishlist = saved ? JSON.parse(saved) : [];
  } catch (e) {
    state.wishlist = [];
  }
  updateWishlistCount();
}

function saveWishlist() {
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(state.wishlist));
  } catch (e) {}
}

function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast('Eliminado de favoritos', 'info');
  } else {
    state.wishlist.push(productId);
    showToast('¡Añadido a favoritos!', 'success');
  }
  saveWishlist();
  updateWishlistCount();
  updateWishlistButtons();
  renderWishlistItems();
}

function updateWishlistCount() {
  const badge = document.getElementById('wishlistCount');
  if (badge) {
    badge.textContent = state.wishlist.length;
    badge.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
  }
}

function updateWishlistButtons() {
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    const isWishlisted = state.wishlist.includes(id);
    btn.classList.toggle('active', isWishlisted);
    const svg = btn.querySelector('svg');
    if (svg) svg.setAttribute('fill', isWishlisted ? 'currentColor' : 'none');
  });
}

function renderWishlistItems() {
  const wishlistItemsEl = document.getElementById('wishlistItems');
  const wishlistEmpty = document.getElementById('wishlistEmpty');
  if (!wishlistItemsEl) return;

  if (state.wishlist.length === 0) {
    if (wishlistEmpty) wishlistEmpty.style.display = 'flex';
    wishlistItemsEl.innerHTML = '';
    return;
  }

  if (wishlistEmpty) wishlistEmpty.style.display = 'none';
  const wishProducts = products.filter(p => state.wishlist.includes(p.id));
  wishlistItemsEl.innerHTML = wishProducts.map(p => `
    <div class="wishlist-item">
      <div class="wishlist-item-visual">
        ${getJerseySVG(p.jerseyColor1, p.jerseyColor2, p.jerseyPattern, p.team, 60)}
      </div>
      <div class="wishlist-item-info">
        <div class="wishlist-item-name">${p.name}</div>
        <div class="wishlist-item-price">${formatARS(p.price)}</div>
        <button class="wishlist-to-cart" data-id="${p.id}">Añadir al carrito</button>
      </div>
      <button class="remove-wishlist-btn" data-id="${p.id}" title="Eliminar">×</button>
    </div>
  `).join('');

  wishlistItemsEl.querySelectorAll('.remove-wishlist-btn').forEach(btn => {
    btn.addEventListener('click', () => toggleWishlist(parseInt(btn.dataset.id)));
  });

  wishlistItemsEl.querySelectorAll('.wishlist-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const product = products.find(p => p.id === parseInt(btn.dataset.id));
      if (product) addToCart(parseInt(btn.dataset.id), product.sizes[0]);
    });
  });
}

function openWishlist() {
  const drawer = document.getElementById('wishlistDrawer');
  const overlay = document.getElementById('overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('active');
  renderWishlistItems();
}

function closeWishlist() {
  const drawer = document.getElementById('wishlistDrawer');
  const overlay = document.getElementById('overlay');
  if (drawer) drawer.classList.remove('open');
  if (!document.getElementById('cartDrawer')?.classList.contains('open')) {
    if (overlay) overlay.classList.remove('active');
  }
}

// ============================================================
// QUICK VIEW MODAL
// ============================================================
function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById('quickViewOverlay');
  const content = document.getElementById('quickViewContent');
  if (!overlay || !content) return;

  const isWishlisted = state.wishlist.includes(product.id);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPct = hasDiscount ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  content.innerHTML = `
    <div class="qv-visual">
      <div class="qv-jersey-container">
        ${product.imageUrl
          ? `<img src="${product.imageUrl}" alt="${product.name}" style="width:160px;height:180px;object-fit:contain;">`
          : getJerseySVG(product.jerseyColor1, product.jerseyColor2, product.jerseyPattern, product.team)}
      </div>
    </div>
    <div class="qv-details">
      <div class="qv-league">${getLeagueName(product.league)}</div>
      <h2 class="qv-name">${product.name}</h2>
      <div class="qv-rating">
        ${generateStars(product.rating)}
        <span>${product.rating.toFixed(1)} (${product.reviews} reseñas)</span>
      </div>
      <div class="qv-price-row">
        <span class="qv-price">${formatARS(product.price)}</span>
        ${hasDiscount ? `<span class="qv-original-price">${formatARS(product.originalPrice)}</span><span class="qv-discount-badge">-${discountPct}%</span>` : ''}
      </div>
      <p class="qv-description">${product.description}</p>
      <div class="qv-meta">
        <span>Temporada: ${product.season}</span>
        <span>Stock: ${product.stock} unidades</span>
      </div>
      <div class="qv-sizes-label">Selecciona tu talla:</div>
      <div class="qv-sizes">
        ${product.sizes.map((s, i) => `<span class="qv-size-chip${i === 0 ? ' selected' : ''}" data-size="${s}">${s}</span>`).join('')}
      </div>
      <div class="qv-actions">
        <button class="qv-add-cart" data-id="${product.id}" data-size="${product.sizes[0]}">
          Añadir al Carrito
        </button>
        <button class="qv-add-wishlist${isWishlisted ? ' active' : ''}" data-id="${product.id}" title="${isWishlisted ? 'En favoritos' : 'Añadir a favoritos'}">
          <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" width="20" height="20">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
  `;

  overlay.classList.add('active');

  content.querySelectorAll('.qv-size-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      content.querySelectorAll('.qv-size-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      const addBtn = content.querySelector('.qv-add-cart');
      if (addBtn) addBtn.dataset.size = chip.dataset.size;
    });
  });

  content.querySelector('.qv-add-cart').addEventListener('click', function() {
    addToCart(parseInt(this.dataset.id), this.dataset.size);
    closeQuickView();
    openCart();
  });

  content.querySelector('.qv-add-wishlist').addEventListener('click', function() {
    toggleWishlist(parseInt(this.dataset.id));
    const isNowWishlisted = state.wishlist.includes(parseInt(this.dataset.id));
    this.classList.toggle('active', isNowWishlisted);
    const svg = this.querySelector('svg');
    if (svg) svg.setAttribute('fill', isNowWishlisted ? 'currentColor' : 'none');
  });
}

function closeQuickView() {
  const overlay = document.getElementById('quickViewOverlay');
  if (overlay) overlay.classList.remove('active');
}

// ============================================================
// FEATURED SECTION
// ============================================================
function renderFeatured(tabName) {
  const featuredGrid = document.getElementById('featuredGrid');
  if (!featuredGrid) return;

  let filtered;
  switch (tabName) {
    case 'top-ventas':
      filtered = products.filter(p => p.isBestSeller);
      break;
    case 'nueva-temp':
      filtered = products.filter(p => p.isNew);
      break;
    case 'selecciones':
      filtered = products.filter(p => p.league === 'mundial');
      break;
    case 'edicion-esp':
      filtered = products.filter(p => p.isLimited);
      break;
    default:
      filtered = products.filter(p => p.isFeatured);
  }

  const toShow = filtered.slice(0, 8);
  featuredGrid.innerHTML = toShow.map(p => createProductCard(p)).join('');
  attachProductCardListeners();
  initRevealObserver();
  updateWishlistButtons();
}

// ============================================================
// LIMITED EDITION PRODUCTS
// ============================================================
function renderLimitedProducts() {
  const limitedEl = document.getElementById('limitedProducts');
  if (!limitedEl) return;
  const limited = products.filter(p => p.isLimited);
  limitedEl.innerHTML = limited.map(p => createProductCard(p)).join('');
  attachProductCardListeners();
  initRevealObserver();
  updateWishlistButtons();
}

// ============================================================
// COUNTDOWN TIMER
// ============================================================
function updateCountdown() {
  const target = new Date('2026-06-15T23:59:59');
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    ['countDays','countHours','countMinutes','countSeconds'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '00';
    });
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minutesEl = document.getElementById('countMinutes');
  const secondsEl = document.getElementById('countSeconds');

  if (daysEl) daysEl.textContent = padZero(days);
  if (hoursEl) hoursEl.textContent = padZero(hours);
  if (minutesEl) minutesEl.textContent = padZero(minutes);
  if (secondsEl) secondsEl.textContent = padZero(seconds);
}

function startCountdown() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
function showToast(message, type, duration) {
  type = type || 'success';
  duration = duration || 3000;
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
    <span class="toast-message">${message}</span>
  `;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
  });

  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// ============================================================
// TESTIMONIALS SLIDER
// ============================================================
function renderTestimonials() {
  const track = document.getElementById('sliderTrack');
  const dotsContainer = document.getElementById('sliderDots');
  if (!track) return;

  track.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-header">
        <div class="testimonial-avatar">${t.avatar}</div>
        <div class="testimonial-meta">
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-team">Fan del ${t.team}</div>
        </div>
        <div class="testimonial-date">${t.date}</div>
      </div>
      <div class="testimonial-rating">${generateStars(t.rating)}</div>
      <p class="testimonial-text">"${t.text}"</p>
    </div>
  `).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = testimonials.map((_, i) =>
      `<button class="slider-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Ir a testimonio ${i + 1}"></button>`
    ).join('');

    dotsContainer.querySelectorAll('.slider-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.dataset.index));
      });
    });
  }

  goToSlide(0);
  startAutoPlay();
}

function goToSlide(n) {
  const track = document.getElementById('sliderTrack');
  const dots = document.querySelectorAll('.slider-dot');
  if (!track) return;

  const total = testimonials.length;
  state.currentSlide = (n + total) % total;
  track.style.transform = `translateX(-${state.currentSlide * 100}%)`;

  dots.forEach((dot, i) => dot.classList.toggle('active', i === state.currentSlide));
}

function startAutoPlay() {
  if (state.autoPlayTimer) clearInterval(state.autoPlayTimer);
  state.autoPlayTimer = setInterval(() => {
    goToSlide(state.currentSlide + 1);
  }, 5000);
}

// ============================================================
// FAQ ACCORDION
// ============================================================
function renderFAQ() {
  const faqEl = document.getElementById('faqAccordion');
  if (!faqEl) return;

  faqEl.innerHTML = faqData.map((item, i) => `
    <div class="faq-item${i === 0 ? ' open' : ''}">
      <button class="faq-question">
        <span>${item.question}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer" style="max-height: ${i === 0 ? '300px' : '0'}; overflow: hidden; transition: max-height 0.35s ease;">
        <div class="faq-answer-inner">${item.answer}</div>
      </div>
    </div>
  `).join('');

  faqEl.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');

      faqEl.querySelectorAll('.faq-item').forEach(fi => {
        fi.classList.remove('open');
        const ans = fi.querySelector('.faq-answer');
        const icon = fi.querySelector('.faq-icon');
        if (ans) ans.style.maxHeight = '0';
        if (icon) icon.textContent = '+';
      });

      if (!isOpen) {
        item.classList.add('open');
        const ans = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        if (ans) ans.style.maxHeight = '300px';
        if (icon) icon.textContent = '−';
      }
    });
  });
}

// ============================================================
// NEWSLETTER
// ============================================================
function subscribeNewsletter() {
  const emailInput = document.getElementById('newsletterEmail');
  if (!emailInput) return;
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    showToast('Por favor, introduce tu email.', 'error');
    return;
  }
  if (!emailRegex.test(email)) {
    showToast('Por favor, introduce un email válido.', 'error');
    return;
  }
  emailInput.value = '';
  showToast('¡Suscripción exitosa! Bienvenido al club premium.', 'success', 4000);
}

// ============================================================
// SCROLL ANIMATIONS & INTERSECTION OBSERVER
// ============================================================
let revealObserver = null;

function initRevealObserver() {
  if (revealObserver) {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ============================================================
// STAT NUMBER COUNTER ANIMATION
// ============================================================
function animateCounter(el) {
  const target = parseInt(el.dataset.target || el.dataset.count || el.textContent);
  if (isNaN(target)) return;
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('es-ES');
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initStatCounters() {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num[data-target]').forEach(el => counterObserver.observe(el));
}

// ============================================================
// CUSTOM CURSOR
// ============================================================
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  document.addEventListener('mousemove', (e) => {
    state.cursorX = e.clientX;
    state.cursorY = e.clientY;
    cursor.style.left = (e.clientX - 4) + 'px';
    cursor.style.top = (e.clientY - 4) + 'px';
  });

  const hoverTargets = 'a, button, .product-card, .filter-tab, .size-chip, .featured-tab, input, select, .sub-chip';
  document.addEventListener('mouseover', (e) => {
    if (e.target.matches(hoverTargets) || e.target.closest(hoverTargets)) {
      cursor.classList.add('hovering');
      follower.classList.add('hovering');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.matches(hoverTargets) || e.target.closest(hoverTargets)) {
      cursor.classList.remove('hovering');
      follower.classList.remove('hovering');
    }
  });

  function followCursor() {
    state.followerX += (state.cursorX - state.followerX) * 0.12;
    state.followerY += (state.cursorY - state.followerY) * 0.12;
    follower.style.left = (state.followerX - 18) + 'px';
    follower.style.top = (state.followerY - 18) + 'px';
    requestAnimationFrame(followCursor);
  }
  requestAnimationFrame(followCursor);
}

// ============================================================
// PARTICLE CANVAS
// ============================================================
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const colors = ['#00ffff', '#a855f7', '#ffffff', '#3b82f6'];
  const particleList = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    radius: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.5 + 0.1,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particleList.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ============================================================
// LOADING SCREEN
// ============================================================
function initLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  const loadingBar = document.getElementById('loadingBar');
  const loadingText = document.getElementById('loadingText');
  const loadingParticles = document.getElementById('loadingParticles');

  if (!loadingScreen) return;

  // Create loading particles
  if (loadingParticles) {
    for (let i = 0; i < 30; i++) {
      const dot = document.createElement('div');
      dot.className = 'loading-particle';
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';
      dot.style.width = (Math.random() * 6 + 2) + 'px';
      dot.style.height = dot.style.width;
      dot.style.animationDelay = (Math.random() * 2) + 's';
      dot.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
      loadingParticles.appendChild(dot);
    }
  }

  const stages = [
    { text: 'Cargando experiencia premium...', pct: 15 },
    { text: 'Preparando catálogo...', pct: 55 },
    { text: '¡Listo para jugar!', pct: 100 }
  ];

  let currentStage = 0;
  const stageInterval = setInterval(() => {
    if (currentStage < stages.length) {
      if (loadingText) loadingText.textContent = stages[currentStage].text;
      if (loadingBar) loadingBar.style.width = stages[currentStage].pct + '%';
      currentStage++;
    } else {
      clearInterval(stageInterval);
    }
  }, 900);

  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        triggerHeroAnimations();
      }, 700);
    }
  }, 3200);
}

// ============================================================
// HERO ANIMATIONS
// ============================================================
function triggerHeroAnimations() {
  const heroElements = document.querySelectorAll('.hero-animate');
  heroElements.forEach((el, i) => {
    setTimeout(() => el.classList.add('animate-in'), i * 150);
  });

  // Animate hero stats
  document.querySelectorAll('.hero-stats .stat-number[data-count]').forEach(el => {
    animateCounter(el);
  });
}

// ============================================================
// NAVBAR
// ============================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');
  const searchToggle = document.getElementById('searchToggle');
  const navSearch = document.getElementById('navSearch');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });
  }

  if (searchToggle && navSearch) {
    searchToggle.addEventListener('click', () => {
      navSearch.classList.toggle('expanded');
      const input = document.getElementById('navSearchInput');
      if (navSearch.classList.contains('expanded') && input) input.focus();
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks) navLinks.classList.remove('open');
        if (menuToggle) menuToggle.classList.remove('open');
      }
    });
  });

  // Nav dropdown filter links
  document.querySelectorAll('.nav-dropdown a[data-filter], .nav-link[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const league = link.dataset.filter;
      state.currentLeague = league || 'all';
      state.currentTeam = null;
      state.page = 1;

      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      const tab = document.querySelector(`.filter-tab[data-league="${state.currentLeague}"]`);
      if (tab) tab.classList.add('active');
      renderSubFilters(state.currentLeague);
      updateActiveFilters();
      renderProducts(false);

      const catalog = document.getElementById('catalogo') || document.querySelector('#productos, #catalog, section[id]');
      if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
    });
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

// ============================================================
// MEGA SEARCH
// ============================================================
function initMegaSearch() {
  const inputs = [
    { inputId: 'megaSearchInput', resultsId: 'megaSearchResults' },
    { inputId: 'navSearchInput', resultsId: 'megaSearchResults' }
  ];

  inputs.forEach(({ inputId, resultsId }) => {
    const input = document.getElementById(inputId);
    const results = document.getElementById(resultsId);
    if (!input || !results) return;

    input.addEventListener('input', debounce(() => {
      const q = input.value.trim().toLowerCase();
      if (!q) { results.innerHTML = ''; results.style.display = 'none'; return; }

      const found = products.filter(p =>
        p.name.toLowerCase().includes(q) || p.team.toLowerCase().includes(q) || p.league.toLowerCase().includes(q)
      ).slice(0, 5);

      if (found.length === 0) {
        results.innerHTML = `<div class="mega-result-empty">No se encontraron resultados</div>`;
        results.style.display = 'block';
        return;
      }

      results.style.display = 'block';
      results.innerHTML = found.map(p => `
        <div class="mega-result-item" data-id="${p.id}">
          <div class="mega-result-jersey">
            ${getJerseySVG(p.jerseyColor1, p.jerseyColor2, p.jerseyPattern, p.team, 40)}
          </div>
          <div class="mega-result-info">
            <div class="mega-result-name">${p.name}</div>
            <div class="mega-result-meta">
              <span class="mega-result-league">${getLeagueName(p.league)}</span>
              <span class="mega-result-price">${formatARS(p.price)}</span>
            </div>
          </div>
        </div>
      `).join('');

      results.querySelectorAll('.mega-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = parseInt(item.dataset.id);
          const product = products.find(p => p.id === id);
          if (!product) return;
          results.style.display = 'none';
          input.value = '';
          state.currentLeague = product.league;
          state.currentTeam = product.team;
          state.page = 1;
          updateActiveFilters();
          renderProducts(false);
          const catalog = document.getElementById('catalogo') || document.getElementById('productos');
          if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
        });
      });
    }, 300));

    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !results.contains(e.target)) {
        results.style.display = 'none';
      }
    });
  });
}

// ============================================================
// FILTER TABS
// ============================================================
function initFilterTabs() {
  const filterTabsEl = document.getElementById('filterTabs');
  if (!filterTabsEl) return;

  filterTabsEl.addEventListener('click', (e) => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;
    const league = tab.dataset.league;
    state.currentLeague = league;
    state.currentTeam = null;
    state.page = 1;

    filterTabsEl.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    renderSubFilters(league);
    updateActiveFilters();
    renderProducts(false);
  });
}

// ============================================================
// SEARCH & SORT
// ============================================================
function initSearchAndSort() {
  const searchInput = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearch');
  const sortSelect = document.getElementById('sortSelect');
  const gridView = document.getElementById('gridView');
  const listView = document.getElementById('listView');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
      state.searchQuery = searchInput.value.trim();
      state.page = 1;
      updateActiveFilters();
      renderProducts(false);
      if (clearSearch) clearSearch.style.display = state.searchQuery ? 'block' : 'none';
    }, 300));
  }

  if (clearSearch) {
    clearSearch.addEventListener('click', () => {
      state.searchQuery = '';
      if (searchInput) searchInput.value = '';
      clearSearch.style.display = 'none';
      state.page = 1;
      updateActiveFilters();
      renderProducts(false);
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      state.sort = sortSelect.value;
      state.page = 1;
      renderProducts(false);
    });
  }

  if (gridView && listView) {
    const productsGrid = document.getElementById('productsGrid');
    gridView.addEventListener('click', () => {
      productsGrid?.classList.remove('list-view');
      gridView.classList.add('active');
      listView.classList.remove('active');
    });
    listView.addEventListener('click', () => {
      productsGrid?.classList.add('list-view');
      listView.classList.add('active');
      gridView.classList.remove('active');
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      state.page += 1;
      renderProducts(true);
    });
  }
}

// ============================================================
// FEATURED TABS
// ============================================================
function initFeaturedTabs() {
  const featuredTabs = document.querySelectorAll('.featured-tab');
  featuredTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      featuredTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderFeatured(tab.dataset.tab);
    });
  });
}

// ============================================================
// CART & WISHLIST EVENT LISTENERS
// ============================================================
function initCartAndWishlist() {
  const cartBtn = document.getElementById('cartBtn');
  const cartClose = document.getElementById('cartClose');
  const wishlistBtn = document.getElementById('wishlistBtn');
  const wishlistClose = document.getElementById('wishlistClose');
  const overlay = document.getElementById('overlay');
  const quickViewClose = document.getElementById('quickViewClose');
  const quickViewOverlay = document.getElementById('quickViewOverlay');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (wishlistBtn) wishlistBtn.addEventListener('click', openWishlist);
  if (wishlistClose) wishlistClose.addEventListener('click', closeWishlist);

  if (overlay) {
    overlay.addEventListener('click', () => {
      closeCart();
      closeWishlist();
    });
  }

  if (quickViewClose) quickViewClose.addEventListener('click', closeQuickView);
  if (quickViewOverlay) {
    quickViewOverlay.addEventListener('click', (e) => {
      if (e.target === quickViewOverlay) closeQuickView();
    });
  }
}

// ============================================================
// TESTIMONIALS SLIDER BUTTONS
// ============================================================
function initTestimonialsSlider() {
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  if (prevBtn) prevBtn.addEventListener('click', () => { goToSlide(state.currentSlide - 1); startAutoPlay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goToSlide(state.currentSlide + 1); startAutoPlay(); });
}

// ============================================================
// PROMO BANNER
// ============================================================
function initPromoBanner() {
  const promoClose = document.getElementById('promoClose');
  const promoBanner = document.getElementById('promoBanner');
  if (promoClose && promoBanner) {
    promoClose.addEventListener('click', () => {
      promoBanner.style.maxHeight = promoBanner.offsetHeight + 'px';
      requestAnimationFrame(() => {
        promoBanner.style.transition = 'max-height 0.4s ease, opacity 0.4s ease';
        promoBanner.style.maxHeight = '0';
        promoBanner.style.opacity = '0';
        promoBanner.style.overflow = 'hidden';
        setTimeout(() => promoBanner.style.display = 'none', 400);
      });
    });
  }
}

// ============================================================
// NEWSLETTER EVENT LISTENER
// ============================================================
function initNewsletter() {
  const newsletterEmail = document.getElementById('newsletterEmail');
  if (newsletterEmail) {
    newsletterEmail.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') subscribeNewsletter();
    });
  }

  // Look for subscribe buttons
  document.querySelectorAll('[data-action="subscribe"], .newsletter-btn, #newsletterBtn').forEach(btn => {
    btn.addEventListener('click', subscribeNewsletter);
  });
}

// ============================================================
// PARALLAX
// ============================================================
function initParallax() {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        document.querySelectorAll('.bg-orb').forEach((orb, i) => {
          const speed = i % 2 === 0 ? 0.15 : 0.08;
          const direction = i % 3 === 0 ? 1 : -1;
          orb.style.transform = `translateY(${scrollY * speed * direction}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ============================================================
// MAIN INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Load products: fetch products.json first, fall back to hardcoded array
  function initApp() {
    loadCart();
    loadWishlist();
    initLoadingScreen();
    initParticles();
    initCursor();
    initNavbar();
    initMegaSearch();
    initFilterTabs();
    initSearchAndSort();
    initFeaturedTabs();
    initCartAndWishlist();
    initTestimonialsSlider();
    initPromoBanner();
    initNewsletter();
    initParallax();
    renderProducts(false);
    renderFeatured('top-ventas');
    renderLimitedProducts();
    renderTestimonials();
    renderFAQ();
    startCountdown();
    initRevealObserver();
    initStatCounters();
  }

  const rawUrl = 'https://raw.githubusercontent.com/benmacompanis-sketch/camisetaspelu/gh-pages/products.json?t=' + Date.now();
  fetch(rawUrl)
    .then(r => r.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) products = data;
      initApp();
    })
    .catch(() => {
      // fallback to local
      fetch('products.json?v=' + Date.now())
        .then(r => r.json())
        .then(data => { if (Array.isArray(data) && data.length > 0) products = data; initApp(); })
        .catch(() => initApp());
    });
});
