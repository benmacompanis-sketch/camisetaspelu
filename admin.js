/* ============================================================
   CAMISETASPELU - ADMIN PANEL JS
   Complete Admin Panel Logic
   ============================================================ */

'use strict';

function formatARS(price) {
  return '$ARS ' + Number(price).toLocaleString('es-AR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

/* ============================================================
   DEFAULT PRODUCTS DATA (36 products)
   ============================================================ */
const DEFAULT_PRODUCTS = [
  {
    id: 1, name: 'Camiseta Manchester City 2024/25', team: 'Manchester City', league: 'Premier League',
    price: 89.99, originalPrice: 109.99, jerseyColor1: '#6caddf', jerseyColor2: '#ffffff',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL'], stock: 28,
    rating: 4.9, reviews: 312, isNew: true, isBestSeller: true, isLimited: false, isFeatured: true,
    description: 'Camiseta oficial del Manchester City temporada 2024/25. Tejido Dri-FIT para máximo rendimiento.', season: '2024/25', badge: 'Nuevo'
  },
  {
    id: 2, name: 'Camiseta Real Madrid 2024/25', team: 'Real Madrid', league: 'La Liga',
    price: 94.99, originalPrice: 119.99, jerseyColor1: '#ffffff', jerseyColor2: '#ffd700',
    jerseyPattern: 'solid', sizes: ['XS','S','M','L','XL','XXL'], stock: 45,
    rating: 4.9, reviews: 528, isNew: true, isBestSeller: true, isLimited: false, isFeatured: true,
    description: 'La camiseta más icónica del mundo. Real Madrid temporada 2024/25.', season: '2024/25', badge: 'Hot'
  },
  {
    id: 3, name: 'Camiseta FC Barcelona 2024/25', team: 'FC Barcelona', league: 'La Liga',
    price: 89.99, originalPrice: null, jerseyColor1: '#a50044', jerseyColor2: '#004d98',
    jerseyPattern: 'stripes', sizes: ['S','M','L','XL'], stock: 32,
    rating: 4.8, reviews: 445, isNew: true, isBestSeller: false, isLimited: false, isFeatured: true,
    description: 'Las rayas del Barça en la versión 2024/25. Estilo y tradición.', season: '2024/25', badge: 'Nuevo'
  },
  {
    id: 4, name: 'Camiseta PSG 2024/25', team: 'Paris Saint-Germain', league: 'Ligue 1',
    price: 84.99, originalPrice: 99.99, jerseyColor1: '#004170', jerseyColor2: '#da291c',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL','XXL'], stock: 19,
    rating: 4.7, reviews: 287, isNew: false, isBestSeller: true, isLimited: false, isFeatured: false,
    description: 'La elegancia parisina de la mano del PSG en su camiseta 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 5, name: 'Camiseta Bayern Munich 2024/25', team: 'Bayern Munich', league: 'Bundesliga',
    price: 87.99, originalPrice: null, jerseyColor1: '#dc052d', jerseyColor2: '#ffffff',
    jerseyPattern: 'solid', sizes: ['XS','S','M','L','XL'], stock: 22,
    rating: 4.8, reviews: 356, isNew: true, isBestSeller: false, isLimited: false, isFeatured: true,
    description: 'El poder del Bayern en su nueva equipación roja 2024/25.', season: '2024/25', badge: 'Nuevo'
  },
  {
    id: 6, name: 'Camiseta Liverpool 2024/25', team: 'Liverpool FC', league: 'Premier League',
    price: 89.99, originalPrice: 104.99, jerseyColor1: '#c8102e', jerseyColor2: '#f6eb61',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL','XXL'], stock: 38,
    rating: 4.9, reviews: 412, isNew: false, isBestSeller: true, isLimited: false, isFeatured: true,
    description: 'You\'ll Never Walk Alone. La camiseta roja de Anfield para la temporada 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 7, name: 'Camiseta Juventus 2024/25', team: 'Juventus FC', league: 'Serie A',
    price: 82.99, originalPrice: 97.99, jerseyColor1: '#000000', jerseyColor2: '#ffffff',
    jerseyPattern: 'stripes', sizes: ['S','M','L','XL'], stock: 14,
    rating: 4.7, reviews: 198, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El clasicísimo blanco y negro de la Vecchia Signora.', season: '2024/25', badge: null
  },
  {
    id: 8, name: 'Camiseta Atlético de Madrid 2024/25', team: 'Atlético de Madrid', league: 'La Liga',
    price: 84.99, originalPrice: null, jerseyColor1: '#cb3524', jerseyColor2: '#ffffff',
    jerseyPattern: 'stripes', sizes: ['XS','S','M','L','XL','XXL'], stock: 26,
    rating: 4.7, reviews: 267, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'Las rayas rojiblancos del Atleti en la nueva temporada 2024/25.', season: '2024/25', badge: 'Nuevo'
  },
  {
    id: 9, name: 'Camiseta Chelsea 2024/25', team: 'Chelsea FC', league: 'Premier League',
    price: 85.99, originalPrice: 99.99, jerseyColor1: '#034694', jerseyColor2: '#ffffff',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL'], stock: 18,
    rating: 4.6, reviews: 189, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El azul de Stamford Bridge en la camiseta oficial de Chelsea 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 10, name: 'Camiseta Arsenal 2024/25', team: 'Arsenal FC', league: 'Premier League',
    price: 88.99, originalPrice: null, jerseyColor1: '#ef0107', jerseyColor2: '#ffffff',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL','XXL'], stock: 31,
    rating: 4.8, reviews: 324, isNew: true, isBestSeller: true, isLimited: false, isFeatured: true,
    description: 'Los Gunners en su mejor versión. Camiseta oficial Arsenal 2024/25.', season: '2024/25', badge: 'Hot'
  },
  {
    id: 11, name: 'Camiseta Inter Milan 2024/25', team: 'Inter Milan', league: 'Serie A',
    price: 83.99, originalPrice: 98.99, jerseyColor1: '#010e80', jerseyColor2: '#000000',
    jerseyPattern: 'stripes', sizes: ['S','M','L','XL'], stock: 21,
    rating: 4.7, reviews: 231, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El internazionalismo de Milán en rayas azul y negra 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 12, name: 'Camiseta AC Milan 2024/25', team: 'AC Milan', league: 'Serie A',
    price: 83.99, originalPrice: null, jerseyColor1: '#fb090b', jerseyColor2: '#000000',
    jerseyPattern: 'stripes', sizes: ['XS','S','M','L','XL'], stock: 17,
    rating: 4.6, reviews: 176, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'Las rayas rossoneras del Milan histórico para la temporada 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 13, name: 'Camiseta Borussia Dortmund 2024/25', team: 'Borussia Dortmund', league: 'Bundesliga',
    price: 84.99, originalPrice: 99.99, jerseyColor1: '#fde100', jerseyColor2: '#000000',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL','XXL'], stock: 24,
    rating: 4.8, reviews: 298, isNew: false, isBestSeller: true, isLimited: false, isFeatured: true,
    description: 'El amarillo brillante del Signal Iduna Park. BVB 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 14, name: 'Camiseta Manchester United 2024/25', team: 'Manchester United', league: 'Premier League',
    price: 88.99, originalPrice: 104.99, jerseyColor1: '#da291c', jerseyColor2: '#fbe122',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL'], stock: 29,
    rating: 4.7, reviews: 389, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El rojo del Old Trafford en la nueva equipación 2024/25. MUFC.', season: '2024/25', badge: 'Nuevo'
  },
  {
    id: 15, name: 'Camiseta Tottenham Hotspur 2024/25', team: 'Tottenham Hotspur', league: 'Premier League',
    price: 82.99, originalPrice: null, jerseyColor1: '#ffffff', jerseyColor2: '#132257',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL'], stock: 16,
    rating: 4.5, reviews: 143, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El blanco clásico de los Spurs. Tottenham Hotspur 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 16, name: 'Camiseta Napoli 2024/25', team: 'SSC Napoli', league: 'Serie A',
    price: 81.99, originalPrice: 96.99, jerseyColor1: '#12a0d7', jerseyColor2: '#ffffff',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL','XXL'], stock: 12,
    rating: 4.7, reviews: 187, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El azul celeste de Nápoles. SSC Napoli 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 17, name: 'Camiseta Olympique Lyon 2024/25', team: 'Olympique Lyon', league: 'Ligue 1',
    price: 78.99, originalPrice: null, jerseyColor1: '#ffffff', jerseyColor2: '#c91414',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL'], stock: 11,
    rating: 4.4, reviews: 98, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El blanco del Stade de Gerland. Olympique Lyon 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 18, name: 'Camiseta Olympique Marsella 2024/25', team: 'Olympique de Marseille', league: 'Ligue 1',
    price: 78.99, originalPrice: 93.99, jerseyColor1: '#2fa3df', jerseyColor2: '#ffffff',
    jerseyPattern: 'solid', sizes: ['XS','S','M','L','XL'], stock: 20,
    rating: 4.5, reviews: 154, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El azul y blanco del Vélodrome. OM 2024/25.', season: '2024/25', badge: 'Nuevo'
  },
  {
    id: 19, name: 'Camiseta Bayer Leverkusen 2024/25', team: 'Bayer Leverkusen', league: 'Bundesliga',
    price: 82.99, originalPrice: null, jerseyColor1: '#e32221', jerseyColor2: '#000000',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL','XXL'], stock: 15,
    rating: 4.7, reviews: 212, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'Los campeones alemanes en su equipación 2024/25. Die Werkself.', season: '2024/25', badge: 'Nuevo'
  },
  {
    id: 20, name: 'Camiseta Sevilla FC 2024/25', team: 'Sevilla FC', league: 'La Liga',
    price: 79.99, originalPrice: 94.99, jerseyColor1: '#ffffff', jerseyColor2: '#d71920',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL'], stock: 18,
    rating: 4.5, reviews: 167, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El blanco y rojo del Nervión. Sevilla FC 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 21, name: 'Camiseta Valencia CF 2024/25', team: 'Valencia CF', league: 'La Liga',
    price: 77.99, originalPrice: null, jerseyColor1: '#ffffff', jerseyColor2: '#f47920',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL'], stock: 13,
    rating: 4.4, reviews: 112, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'Los murciélagos del Mestalla en la temporada 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 22, name: 'Camiseta Fiorentina 2024/25', team: 'ACF Fiorentina', league: 'Serie A',
    price: 79.99, originalPrice: 94.99, jerseyColor1: '#4e2583', jerseyColor2: '#ffffff',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL'], stock: 9,
    rating: 4.5, reviews: 134, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El violeta único de la Viola florentina. Fiorentina 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 23, name: 'Camiseta RB Leipzig 2024/25', team: 'RB Leipzig', league: 'Bundesliga',
    price: 83.99, originalPrice: null, jerseyColor1: '#dd0741', jerseyColor2: '#ffffff',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL','XXL'], stock: 14,
    rating: 4.6, reviews: 145, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'La energía de Leipzig en rojo y blanco. RB Leipzig 2024/25.', season: '2024/25', badge: 'Nuevo'
  },
  {
    id: 24, name: 'Camiseta Newcastle United 2024/25', team: 'Newcastle United', league: 'Premier League',
    price: 84.99, originalPrice: 99.99, jerseyColor1: '#000000', jerseyColor2: '#ffffff',
    jerseyPattern: 'stripes', sizes: ['S','M','L','XL'], stock: 22,
    rating: 4.6, reviews: 178, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'Las rayas negras y blancas del St. James\' Park. Newcastle 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 25, name: 'Camiseta Aston Villa 2024/25', team: 'Aston Villa', league: 'Premier League',
    price: 82.99, originalPrice: null, jerseyColor1: '#670e36', jerseyColor2: '#95bfe5',
    jerseyPattern: 'stripes', sizes: ['S','M','L','XL'], stock: 17,
    rating: 4.6, reviews: 156, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'Las rayas claret y azul de Villa Park. Aston Villa 2024/25.', season: '2024/25', badge: 'Nuevo'
  },
  {
    id: 26, name: 'Camiseta Sporting CP 2024/25', team: 'Sporting CP', league: 'La Liga',
    price: 76.99, originalPrice: 91.99, jerseyColor1: '#006600', jerseyColor2: '#ffffff',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL'], stock: 10,
    rating: 4.4, reviews: 89, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El verde y blanco del Alvalade. Sporting CP 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 27, name: 'Camiseta Lazio 2024/25', team: 'SS Lazio', league: 'Serie A',
    price: 79.99, originalPrice: null, jerseyColor1: '#87ceeb', jerseyColor2: '#ffffff',
    jerseyPattern: 'solid', sizes: ['XS','S','M','L','XL'], stock: 13,
    rating: 4.5, reviews: 123, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El azul celeste del Olimpico romano. SS Lazio 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 28, name: 'Camiseta Villarreal CF 2024/25', team: 'Villarreal CF', league: 'La Liga',
    price: 77.99, originalPrice: 92.99, jerseyColor1: '#ffd600', jerseyColor2: '#ffffff',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL'], stock: 11,
    rating: 4.4, reviews: 97, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El Submarino Amarillo en la temporada 2024/25.', season: '2024/25', badge: null
  },
  {
    id: 29, name: 'Camiseta Ajax 2024/25', team: 'AFC Ajax', league: 'Champions League',
    price: 81.99, originalPrice: null, jerseyColor1: '#d2122e', jerseyColor2: '#ffffff',
    jerseyPattern: 'halves', sizes: ['S','M','L','XL','XXL'], stock: 16,
    rating: 4.6, reviews: 167, isNew: true, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'El mítico diseño del Ajax de Amsterdam en su versión 2024/25.', season: '2024/25', badge: 'Nuevo'
  },
  {
    id: 30, name: 'Camiseta Portugal 2024 Eurocopa', team: 'Selección de Portugal', league: 'Mundial',
    price: 92.99, originalPrice: 114.99, jerseyColor1: '#006600', jerseyColor2: '#ff0000',
    jerseyPattern: 'solid', sizes: ['XS','S','M','L','XL','XXL'], stock: 35,
    rating: 4.8, reviews: 389, isNew: false, isBestSeller: true, isLimited: false, isFeatured: true,
    description: 'La camiseta oficial de Portugal para la Eurocopa 2024.', season: '2024', badge: 'Euro 2024'
  },
  {
    id: 31, name: 'Camiseta España 2024 Eurocopa', team: 'Selección de España', league: 'Mundial',
    price: 92.99, originalPrice: null, jerseyColor1: '#aa151b', jerseyColor2: '#f1bf00',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL','XXL'], stock: 48,
    rating: 4.9, reviews: 567, isNew: false, isBestSeller: true, isLimited: false, isFeatured: true,
    description: 'La Roja campeona de Europa. Camiseta oficial de España Eurocopa 2024.', season: '2024', badge: '¡Campeones!'
  },
  {
    id: 32, name: 'Camiseta Brasil 2024', team: 'Selección de Brasil', league: 'Mundial',
    price: 88.99, originalPrice: 103.99, jerseyColor1: '#009c3b', jerseyColor2: '#ffdf00',
    jerseyPattern: 'solid', sizes: ['XS','S','M','L','XL','XXL'], stock: 40,
    rating: 4.8, reviews: 478, isNew: false, isBestSeller: true, isLimited: false, isFeatured: true,
    description: 'O verde e amarelo do Brasil. Canarinha 2024.', season: '2024', badge: null
  },
  {
    id: 33, name: 'Camiseta Argentina 2024', team: 'Selección Argentina', league: 'Mundial',
    price: 92.99, originalPrice: null, jerseyColor1: '#74acdf', jerseyColor2: '#ffffff',
    jerseyPattern: 'stripes', sizes: ['S','M','L','XL','XXL'], stock: 52,
    rating: 4.9, reviews: 634, isNew: false, isBestSeller: true, isLimited: false, isFeatured: true,
    description: 'La albiceleste campeona del mundo. Argentina 2024.', season: '2024', badge: 'Campeones'
  },
  {
    id: 34, name: 'Camiseta France 2024', team: 'Selección de Francia', league: 'Mundial',
    price: 89.99, originalPrice: 104.99, jerseyColor1: '#002395', jerseyColor2: '#ed2939',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL'], stock: 27,
    rating: 4.7, reviews: 287, isNew: false, isBestSeller: false, isLimited: false, isFeatured: false,
    description: 'Les Bleus en la nueva equipación 2024. Vive le football.', season: '2024', badge: null
  },
  {
    id: 35, name: 'Camiseta Real Madrid Champions 2024 - Ed. Limitada', team: 'Real Madrid', league: 'Champions League',
    price: 139.99, originalPrice: 169.99, jerseyColor1: '#d4af37', jerseyColor2: '#ffffff',
    jerseyPattern: 'solid', sizes: ['S','M','L','XL'], stock: 4,
    rating: 5.0, reviews: 89, isNew: true, isBestSeller: true, isLimited: true, isFeatured: true,
    description: 'Edición limitada conmemorativa de la 15ª Champions League del Real Madrid. Solo 500 unidades.', season: '2024', badge: 'Ed. Limitada'
  },
  {
    id: 36, name: 'Camiseta Retro Barcelona 1992', team: 'FC Barcelona', league: 'La Liga',
    price: 74.99, originalPrice: 89.99, jerseyColor1: '#a50044', jerseyColor2: '#004d98',
    jerseyPattern: 'stripes', sizes: ['S','M','L','XL'], stock: 8,
    rating: 4.8, reviews: 198, isNew: false, isBestSeller: false, isLimited: true, isFeatured: false,
    description: 'La mítica camiseta del Barça del Dream Team de Johan Cruyff. Colección retro.', season: '1992', badge: 'Retro'
  }
];

/* ============================================================
   ORDERS DATA (10 fake orders)
   ============================================================ */
const ORDERS_DATA = [
  { id: '#CP-10042', customer: 'Carlos Martínez', email: 'carlos.m@gmail.com', product: 'Camiseta Real Madrid 2024/25', productId: 2, amount: 94.99, status: 'completado', date: '2024-06-18', address: 'Calle Mayor 24, Madrid' },
  { id: '#CP-10041', customer: 'Laura González', email: 'laura.g@hotmail.com', product: 'Camiseta España 2024 Eurocopa', productId: 31, amount: 92.99, status: 'enviado', date: '2024-06-17', address: 'Av. Diagonal 88, Barcelona' },
  { id: '#CP-10040', customer: 'Marcos Silva', email: 'marcos.s@gmail.com', product: 'Camiseta Argentina 2024', productId: 33, amount: 92.99, status: 'procesando', date: '2024-06-17', address: 'Via Roma 12, Milano' },
  { id: '#CP-10039', customer: 'Ana Rodríguez', email: 'ana.r@yahoo.es', product: 'Camiseta Manchester City 2024/25', productId: 1, amount: 89.99, status: 'completado', date: '2024-06-16', address: 'Baker Street 221B, London' },
  { id: '#CP-10038', customer: 'Javier López', email: 'javier.l@gmail.com', product: 'Camiseta Real Madrid Champions 2024 - Ed. Limitada', productId: 35, amount: 139.99, status: 'completado', date: '2024-06-15', address: 'Calle Serrano 14, Madrid' },
  { id: '#CP-10037', customer: 'María Fernández', email: 'maria.f@outlook.com', product: 'Camiseta Liverpool 2024/25', productId: 6, amount: 89.99, status: 'pendiente', date: '2024-06-15', address: 'Rue de la Paix 8, Paris' },
  { id: '#CP-10036', customer: 'Pedro Sánchez', email: 'pedro.s@gmail.com', product: 'Camiseta Brasil 2024', productId: 32, amount: 88.99, status: 'enviado', date: '2024-06-14', address: 'Rua das Flores 45, Lisboa' },
  { id: '#CP-10035', customer: 'Sophie Dupont', email: 'sophie.d@gmail.fr', product: 'Camiseta PSG 2024/25', productId: 4, amount: 84.99, status: 'completado', date: '2024-06-13', address: 'Champs-Élysées 100, Paris' },
  { id: '#CP-10034', customer: 'Luca Rossi', email: 'luca.r@libero.it', product: 'Camiseta Juventus 2024/25', productId: 7, amount: 82.99, status: 'cancelado', date: '2024-06-12', address: 'Corso Vittorio 22, Torino' },
  { id: '#CP-10033', customer: 'Diego Herrera', email: 'diego.h@gmail.com', product: 'Camiseta FC Barcelona 2024/25', productId: 3, amount: 89.99, status: 'procesando', date: '2024-06-12', address: 'Gran Vía 56, Madrid' }
];

/* ============================================================
   PROMO CODES DATA
   ============================================================ */
const PROMOS_DATA = [
  { code: 'PELU20', discount: 20, uses: 47, limit: 100, expiry: '2024-12-31', active: true },
  { code: 'FUTBOL10', discount: 10, uses: 128, limit: 500, expiry: '2024-09-30', active: true },
  { code: 'EURO2024', discount: 15, uses: 89, limit: 200, expiry: '2024-07-14', active: true },
  { code: 'NUEVOCLIENTE', discount: 25, uses: 312, limit: null, expiry: null, active: true },
  { code: 'REYES2024', discount: 30, uses: 201, limit: 201, expiry: '2024-01-07', active: false },
  { code: 'NAVIDAD23', discount: 25, uses: 445, limit: 445, expiry: '2023-12-26', active: false }
];

/* ============================================================
   CATEGORIES DATA
   ============================================================ */
const CATEGORIES_DATA = [
  { name: 'Premier League', icon: 'fas fa-crown', color: '#9b59b6', count: 8 },
  { name: 'La Liga', icon: 'fas fa-sun', color: '#e74c3c', count: 7 },
  { name: 'Serie A', icon: 'fas fa-star', color: '#3498db', count: 6 },
  { name: 'Bundesliga', icon: 'fas fa-shield-alt', color: '#e67e22', count: 4 },
  { name: 'Ligue 1', icon: 'fas fa-chess-king', color: '#2980b9', count: 3 },
  { name: 'Champions League', icon: 'fas fa-trophy', color: '#f39c12', count: 3 },
  { name: 'Selecciones', icon: 'fas fa-globe', color: '#27ae60', count: 5 },
  { name: 'Edición Limitada', icon: 'fas fa-gem', color: '#00d4ff', count: 2 }
];

/* ============================================================
   BANNERS DATA
   ============================================================ */
const BANNERS_DATA = [
  { title: 'EURO 2024 - COLECCIÓN OFICIAL', subtitle: 'Camisetas de todas las selecciones', active: true, previewClass: 'banner-preview-1' },
  { title: 'EDICIÓN LIMITADA REAL MADRID', subtitle: '15ª Champions League - Solo 500 uds.', active: true, previewClass: 'banner-preview-2' },
  { title: 'NUEVAS TEMPORADA 2024/25', subtitle: 'Primeros en tenerlas', active: false, previewClass: 'banner-preview-3' },
  { title: 'VERANO EN LA LIGA', subtitle: '-20% en toda la selección española', active: true, previewClass: 'banner-preview-4' }
];

/* ============================================================
   ADMIN STATE
   ============================================================ */
const adminState = {
  currentSection: 'dashboard',
  currentUser: null,
  products: [],
  editingProductId: null,
  deleteProductId: null,
  productFilters: { search: '', league: 'all', sort: 'default' },
  currentPage: 1,
  perPage: 10,
  modalTab: 0,
  formData: {},
  ordersFilter: 'all'
};

/* ============================================================
   SECTION TITLES MAP
   ============================================================ */
const SECTION_TITLES = {
  dashboard: 'Dashboard',
  productos: 'Productos',
  categorias: 'Categorías',
  pedidos: 'Pedidos',
  banners: 'Banners',
  promociones: 'Promociones',
  configuracion: 'Configuración'
};

/* ============================================================
   JERSEY SVG GENERATOR
   ============================================================ */
function getJerseySVG(color1, color2, pattern, size = 60) {
  const w = size;
  const h = Math.round(size * 1.15);

  // Collar
  const collarPath = `M${w * 0.38},${h * 0.08} Q${w * 0.5},${h * 0.17} ${w * 0.62},${h * 0.08}`;

  // Body shape
  const bodyPath = `
    M${w * 0.18},${h * 0.12}
    L${w * 0.05},${h * 0.35}
    L${w * 0.18},${h * 0.4}
    L${w * 0.18},${h * 0.95}
    L${w * 0.82},${h * 0.95}
    L${w * 0.82},${h * 0.4}
    L${w * 0.95},${h * 0.35}
    L${w * 0.82},${h * 0.12}
    Q${w * 0.62},${h * 0.06} ${w * 0.5},${h * 0.08}
    Q${w * 0.38},${h * 0.06} ${w * 0.18},${h * 0.12}
    Z
  `;

  // Left sleeve
  const leftSleevePoints = `${w * 0.18},${h * 0.12} ${w * 0.05},${h * 0.35} ${w * 0.18},${h * 0.4}`;
  // Right sleeve
  const rightSleevePoints = `${w * 0.82},${h * 0.12} ${w * 0.95},${h * 0.35} ${w * 0.82},${h * 0.4}`;

  let bodyFill = '';
  let defs = '';
  const uid = 'j' + Math.random().toString(36).substr(2, 6);

  switch (pattern) {
    case 'stripes':
      defs = `<defs>
        <pattern id="${uid}" patternUnits="userSpaceOnUse" width="${w * 0.12}" height="${h}">
          <rect width="${w * 0.06}" height="${h}" fill="${color1}"/>
          <rect x="${w * 0.06}" width="${w * 0.06}" height="${h}" fill="${color2}"/>
        </pattern>
        <clipPath id="clip${uid}"><path d="${bodyPath}"/></clipPath>
      </defs>`;
      bodyFill = `url(#${uid})`;
      break;

    case 'hoops':
      defs = `<defs>
        <pattern id="${uid}" patternUnits="userSpaceOnUse" width="${w}" height="${h * 0.14}">
          <rect width="${w}" height="${h * 0.07}" fill="${color1}"/>
          <rect y="${h * 0.07}" width="${w}" height="${h * 0.07}" fill="${color2}"/>
        </pattern>
        <clipPath id="clip${uid}"><path d="${bodyPath}"/></clipPath>
      </defs>`;
      bodyFill = `url(#${uid})`;
      break;

    case 'halves':
      defs = `<defs>
        <linearGradient id="${uid}" x1="0" y1="0" x2="1" y2="0">
          <stop offset="50%" stop-color="${color1}"/>
          <stop offset="50%" stop-color="${color2}"/>
        </linearGradient>
        <clipPath id="clip${uid}"><path d="${bodyPath}"/></clipPath>
      </defs>`;
      bodyFill = `url(#${uid})`;
      break;

    case 'diagonal':
      defs = `<defs>
        <linearGradient id="${uid}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="45%" stop-color="${color1}"/>
          <stop offset="45%" stop-color="${color2}"/>
          <stop offset="55%" stop-color="${color2}"/>
        </linearGradient>
        <clipPath id="clip${uid}"><path d="${bodyPath}"/></clipPath>
      </defs>`;
      bodyFill = `url(#${uid})`;
      break;

    default: // solid
      bodyFill = color1;
      defs = `<defs><clipPath id="clip${uid}"><path d="${bodyPath}"/></clipPath></defs>`;
  }

  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    ${defs}
    <!-- Body fill with clip -->
    <path d="${bodyPath}" fill="${bodyFill}" clip-path="url(#clip${uid})"/>
    <!-- Body stroke -->
    <path d="${bodyPath}" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.2"/>
    <!-- Left sleeve fill -->
    <polygon points="${leftSleevePoints}" fill="${color2}" opacity="0.85"/>
    <polygon points="${leftSleevePoints}" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.2"/>
    <!-- Right sleeve fill -->
    <polygon points="${rightSleevePoints}" fill="${color2}" opacity="0.85"/>
    <polygon points="${rightSleevePoints}" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.2"/>
    <!-- Collar -->
    <path d="${collarPath}" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
}

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
function showAdminToast(message, type = 'success') {
  const container = document.getElementById('adminToast');
  if (!container) return;

  const icons = {
    success: 'fas fa-check',
    error: 'fas fa-times',
    warning: 'fas fa-exclamation-triangle',
    info: 'fas fa-info'
  };

  const toast = document.createElement('div');
  toast.className = `toast-item ${type}`;
  toast.innerHTML = `
    <div class="toast-icon"><i class="${icons[type] || icons.info}"></i></div>
    <div class="toast-message">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

/* ============================================================
   LOGIN LOGIC
   ============================================================ */
function initLogin() {
  const loginForm = document.getElementById('loginForm');
  const loginCard = document.getElementById('loginCard');
  const loginError = document.getElementById('loginError');

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (email === 'admin@camisetaspelu.com' && password === 'admin123') {
      loginError.style.display = 'none';
      adminState.currentUser = { email, name: 'Admin' };

      // Smooth transition
      loginCard.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      loginCard.style.opacity = '0';
      loginCard.style.transform = 'scale(0.95)';

      setTimeout(() => {
        document.getElementById('loginScreen').style.display = 'none';
        const dash = document.getElementById('adminDashboard');
        dash.style.display = 'grid';
        dash.style.opacity = '0';
        dash.style.transition = 'opacity 0.4s ease';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            dash.style.opacity = '1';
          });
        });
        initDashboard();
      }, 420);
    } else {
      loginError.style.display = 'block';
      loginCard.classList.remove('shake');
      void loginCard.offsetWidth; // force reflow
      loginCard.classList.add('shake');
      showAdminToast('Credenciales incorrectas', 'error');
    }
  });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    document.getElementById('adminDashboard').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    loginCard.style.opacity = '1';
    loginCard.style.transform = '';
    adminState.currentUser = null;
    showAdminToast('Sesión cerrada correctamente', 'info');
  });
}

/* ============================================================
   SIDEBAR NAVIGATION
   ============================================================ */
function initSidebar() {
  const navItems = document.querySelectorAll('.sidebar-nav-item');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const dashboard = document.getElementById('adminDashboard');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');

  function isMobile() { return window.innerWidth <= 640; }

  function openMobileSidebar() {
    sidebar.classList.add('open');
    if (overlay) overlay.style.display = 'block';
  }
  function closeMobileSidebar() {
    sidebar.classList.remove('open');
    if (overlay) overlay.style.display = 'none';
  }

  function updateMobileBtn() {
    if (mobileMenuBtn) mobileMenuBtn.style.display = isMobile() ? 'flex' : 'none';
  }
  updateMobileBtn();
  window.addEventListener('resize', updateMobileBtn);

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) closeMobileSidebar();
      else openMobileSidebar();
    });
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.getAttribute('data-section');
      goToSection(section);
      if (isMobile()) closeMobileSidebar();
    });
  });

  sidebarToggle.addEventListener('click', () => {
    if (isMobile()) {
      if (sidebar.classList.contains('open')) closeMobileSidebar();
      else openMobileSidebar();
    } else {
      dashboard.classList.toggle('sidebar-collapsed');
    }
  });

  // Fullscreen toggle
  const fsBtn = document.getElementById('fullscreenBtn');
  if (fsBtn) {
    fsBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
        fsBtn.innerHTML = '<i class="fas fa-compress"></i>';
      } else {
        document.exitFullscreen().catch(() => {});
        fsBtn.innerHTML = '<i class="fas fa-expand"></i>';
      }
    });
  }
}

function goToSection(sectionName) {
  adminState.currentSection = sectionName;

  // Update nav items
  document.querySelectorAll('.sidebar-nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-section') === sectionName);
  });

  // Show/hide sections
  document.querySelectorAll('.admin-section').forEach(sec => {
    sec.classList.toggle('active', sec.id === `section-${sectionName}`);
  });

  // Update header
  const title = SECTION_TITLES[sectionName] || sectionName;
  document.getElementById('headerPageTitle').textContent = title;
  document.getElementById('headerBreadcrumb').textContent = title;

  // Section-specific renders
  switch (sectionName) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'productos':
      renderProductsTable();
      break;
    case 'categorias':
      renderCategories();
      break;
    case 'pedidos':
      renderOrdersTable();
      break;
    case 'banners':
      renderBanners();
      break;
    case 'promociones':
      renderPromos();
      break;
  }
}

/* ============================================================
   DASHBOARD SECTION
   ============================================================ */
function initDashboard() {
  // Already called by goToSection on first load
  goToSection('dashboard');
}

function renderDashboard() {
  renderStatsCards();
  renderRecentOrders();
  renderTopProducts();
  drawSalesChart();
  drawTrendsChart();
}

function renderStatsCards() {
  const productCount = adminState.products.length;
  animateCountUp('stat-ingresos', 24750, '$ARS ', '');
  animateCountUp('stat-pedidos', 342, '', '');
  animateCountUp('stat-productos', productCount, '', '');
  animateCountUp('stat-clientes', 127, '', '');
}

function animateCountUp(elementId, target, prefix, suffix) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const duration = 1200;
  const start = performance.now();
  const isFloat = String(target).includes('.');

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = `${prefix}${current.toLocaleString('es-ES')}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = `${prefix}${target.toLocaleString('es-ES')}${suffix}`;
  }
  requestAnimationFrame(step);
}

function renderRecentOrders() {
  const tbody = document.getElementById('recentOrdersTbody');
  if (!tbody) return;
  const recent = ORDERS_DATA.slice(0, 5);
  tbody.innerHTML = recent.map((order, i) => `
    <tr style="animation-delay:${i * 0.06}s">
      <td><span style="color:var(--color-primary);font-weight:600;">${order.id}</span></td>
      <td>${order.customer}</td>
      <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${order.product}</td>
      <td><strong style="color:var(--text-primary);">${formatARS(order.amount)}</strong></td>
      <td>${getStatusBadge(order.status)}</td>
    </tr>
  `).join('');
}

function getStatusBadge(status) {
  const map = {
    completado: 'badge-completado',
    procesando: 'badge-procesando',
    pendiente: 'badge-pendiente',
    enviado: 'badge-enviado',
    cancelado: 'badge-cancelado'
  };
  const labels = {
    completado: 'Completado',
    procesando: 'Procesando',
    pendiente: 'Pendiente',
    enviado: 'Enviado',
    cancelado: 'Cancelado'
  };
  return `<span class="status-badge ${map[status] || ''}">${labels[status] || status}</span>`;
}

function renderTopProducts() {
  const container = document.getElementById('topProductsList');
  if (!container) return;
  const top = [...adminState.products]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 5);

  container.innerHTML = top.map((p, i) => `
    <div class="top-product-item">
      <div class="top-product-rank">#${i + 1}</div>
      <div class="top-product-jersey">${getJerseySVG(p.jerseyColor1, p.jerseyColor2, p.jerseyPattern, 36)}</div>
      <div class="top-product-info">
        <div class="top-product-name">${p.name}</div>
        <div class="top-product-meta">${p.league}</div>
      </div>
      <div class="top-product-stats">
        <div class="top-product-revenue">${formatARS(p.price * (p.reviews / 10))}</div>
        <div class="top-product-sales">${p.reviews} ventas</div>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   CHARTS
   ============================================================ */
function drawSalesChart() {
  const canvas = document.getElementById('salesChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  const width = rect.width || 400;
  const height = 200;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.scale(dpr, dpr);

  ctx.clearRect(0, 0, width, height);

  const data = [
    { label: 'Premier', value: 180, color: '#9b59b6' },
    { label: 'La Liga', value: 145, color: '#e74c3c' },
    { label: 'Serie A', value: 120, color: '#3498db' },
    { label: 'Bundesliga', value: 95, color: '#e67e22' },
    { label: 'Ligue 1', value: 80, color: '#2980b9' },
    { label: 'Mundial', value: 220, color: '#00d4ff' },
    { label: 'Otros', value: 60, color: '#7b2fbe' }
  ];

  const maxValue = Math.max(...data.map(d => d.value));
  const padLeft = 40;
  const padRight = 16;
  const padTop = 16;
  const padBottom = 40;
  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;
  const barW = (chartW / data.length) * 0.55;
  const gap = (chartW / data.length) * 0.45;

  // Y grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padTop + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(padLeft + chartW, y);
    ctx.stroke();
    // Y labels
    const val = Math.round(maxValue - (maxValue / 4) * i);
    ctx.fillStyle = 'rgba(150,150,180,0.6)';
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(val, padLeft - 6, y + 4);
  }

  // Animate bars
  let progress = 0;
  const animDuration = 900;
  const startTime = performance.now();

  function animateBars(now) {
    progress = Math.min((now - startTime) / animDuration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    ctx.clearRect(0, 0, width, height);

    // Redraw grid
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padTop + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(padLeft + chartW, y);
      ctx.stroke();
      const val = Math.round(maxValue - (maxValue / 4) * i);
      ctx.fillStyle = 'rgba(150,150,180,0.6)';
      ctx.font = '10px Inter, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(val, padLeft - 6, y + 4);
    }

    data.forEach((d, i) => {
      const x = padLeft + i * (chartW / data.length) + (gap / 2);
      const barH = (d.value / maxValue) * chartH * eased;
      const y = padTop + chartH - barH;

      // Bar gradient
      const grad = ctx.createLinearGradient(0, y, 0, y + barH);
      grad.addColorStop(0, d.color);
      grad.addColorStop(1, d.color + '44');

      ctx.fillStyle = grad;
      const radius = 4;
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + barW - radius, y);
      ctx.quadraticCurveTo(x + barW, y, x + barW, y + radius);
      ctx.lineTo(x + barW, y + barH);
      ctx.lineTo(x, y + barH);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      ctx.fill();

      // Value label on top
      if (progress > 0.8) {
        ctx.fillStyle = 'rgba(240,240,255,0.8)';
        ctx.font = 'bold 9px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(d.value, x + barW / 2, y - 4);
      }

      // X label
      ctx.fillStyle = 'rgba(150,150,180,0.7)';
      ctx.font = '9px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(d.label, x + barW / 2, height - padBottom + 14);
    });

    if (progress < 1) requestAnimationFrame(animateBars);
  }
  requestAnimationFrame(animateBars);
}

function drawTrendsChart() {
  const canvas = document.getElementById('trendsChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  const width = rect.width || 400;
  const height = 200;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.scale(dpr, dpr);

  ctx.clearRect(0, 0, width, height);

  const data = [8200, 11500, 9800, 14200, 18900, 24750];
  const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
  const maxVal = Math.max(...data);
  const minVal = Math.min(...data) * 0.85;

  const padLeft = 52;
  const padRight = 20;
  const padTop = 20;
  const padBottom = 36;
  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  const getX = (i) => padLeft + (i / (data.length - 1)) * chartW;
  const getY = (v) => padTop + chartH - ((v - minVal) / (maxVal - minVal)) * chartH;

  // Grid
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padTop + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(padLeft + chartW, y);
    ctx.stroke();
    const val = Math.round(maxVal - ((maxVal - minVal) / 4) * i);
    ctx.fillStyle = 'rgba(150,150,180,0.6)';
    ctx.font = '9px Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('$' + (val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val), padLeft - 6, y + 4);
  }

  // X labels
  labels.forEach((label, i) => {
    ctx.fillStyle = 'rgba(150,150,180,0.7)';
    ctx.font = '9px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(label, getX(i), height - padBottom + 14);
  });

  // Animate line
  const startTime = performance.now();
  const animDuration = 1100;

  function animateLine(now) {
    const progress = Math.min((now - startTime) / animDuration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const visiblePoints = Math.min(Math.ceil(eased * (data.length - 1)) + 1, data.length);

    ctx.clearRect(0, 0, width, height);

    // Redraw grid
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padTop + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(padLeft + chartW, y);
      ctx.stroke();
      const val = Math.round(maxVal - ((maxVal - minVal) / 4) * i);
      ctx.fillStyle = 'rgba(150,150,180,0.6)';
      ctx.font = '9px Inter, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('$' + (val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val), padLeft - 6, y + 4);
    }

    labels.forEach((label, i) => {
      ctx.fillStyle = 'rgba(150,150,180,0.7)';
      ctx.font = '9px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(label, getX(i), height - padBottom + 14);
    });

    if (visiblePoints < 2) {
      requestAnimationFrame(animateLine);
      return;
    }

    // Gradient fill area
    const gradFill = ctx.createLinearGradient(0, padTop, 0, padTop + chartH);
    gradFill.addColorStop(0, 'rgba(0,212,255,0.25)');
    gradFill.addColorStop(1, 'rgba(0,212,255,0.02)');

    ctx.beginPath();
    ctx.moveTo(getX(0), getY(data[0]));
    for (let i = 1; i < visiblePoints; i++) {
      const cx = (getX(i - 1) + getX(i)) / 2;
      ctx.bezierCurveTo(cx, getY(data[i - 1]), cx, getY(data[i]), getX(i), getY(data[i]));
    }
    ctx.lineTo(getX(visiblePoints - 1), padTop + chartH);
    ctx.lineTo(getX(0), padTop + chartH);
    ctx.closePath();
    ctx.fillStyle = gradFill;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.moveTo(getX(0), getY(data[0]));
    for (let i = 1; i < visiblePoints; i++) {
      const cx = (getX(i - 1) + getX(i)) / 2;
      ctx.bezierCurveTo(cx, getY(data[i - 1]), cx, getY(data[i]), getX(i), getY(data[i]));
    }
    ctx.strokeStyle = '#00d4ff';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.stroke();

    // Dots
    for (let i = 0; i < visiblePoints; i++) {
      const x = getX(i);
      const y = getY(data[i]);
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#00d4ff';
      ctx.fill();
      ctx.strokeStyle = '#080810';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Value label
      if (progress > 0.9) {
        ctx.fillStyle = 'rgba(240,240,255,0.85)';
        ctx.font = 'bold 9px Inter, sans-serif';
        ctx.textAlign = 'center';
        const label = '$' + (data[i] >= 1000 ? (data[i] / 1000).toFixed(1) + 'k' : data[i]);
        ctx.fillText(label, x, y - 10);
      }
    }

    if (progress < 1) requestAnimationFrame(animateLine);
  }
  requestAnimationFrame(animateLine);
}

/* ============================================================
   PRODUCTS TABLE
   ============================================================ */
function renderProductsTable() {
  const search = adminState.productFilters.search.toLowerCase();
  const league = adminState.productFilters.league;
  const sort = adminState.productFilters.sort;

  let filtered = adminState.products.filter(p => {
    const matchSearch = !search ||
      p.name.toLowerCase().includes(search) ||
      p.team.toLowerCase().includes(search) ||
      p.league.toLowerCase().includes(search);
    const matchLeague = league === 'all' || p.league === league;
    return matchSearch && matchLeague;
  });

  switch (sort) {
    case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
    case 'stock-asc': filtered.sort((a, b) => a.stock - b.stock); break;
    case 'name-asc': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / adminState.perPage);
  if (adminState.currentPage > totalPages) adminState.currentPage = 1;

  const start = (adminState.currentPage - 1) * adminState.perPage;
  const paginated = filtered.slice(start, start + adminState.perPage);

  const tbody = document.getElementById('productsTbody');
  const countEl = document.getElementById('productsCount');
  const tableCountEl = document.getElementById('productsTableCount');

  if (countEl) countEl.textContent = `${total} producto${total !== 1 ? 's' : ''} encontrado${total !== 1 ? 's' : ''}`;
  if (tableCountEl) tableCountEl.textContent = `Mostrando ${start + 1}–${Math.min(start + adminState.perPage, total)} de ${total} productos`;

  if (!tbody) return;

  if (paginated.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state"><i class="fas fa-search"></i><p>No se encontraron productos con los filtros aplicados.</p></div></td></tr>`;
  } else {
    tbody.innerHTML = paginated.map((p, i) => {
      const stockClass = p.stock < 5 ? 'low' : p.stock < 15 ? 'medium' : 'high';
      const leagueClass = getLeagueBadgeClass(p.league);

      return `
        <tr style="animation-delay:${i * 0.04}s">
          <td>
            <div class="product-thumb-cell">
              ${p.imageUrl
                ? `<img src="${p.imageUrl}" alt="${p.name}" style="width:50px;height:56px;object-fit:contain;border-radius:4px;">`
                : getJerseySVG(p.jerseyColor1, p.jerseyColor2, p.jerseyPattern, 50)}
              <div class="product-thumb-info">
                <div class="product-name">${p.name}</div>
                <div class="product-team">${p.team}</div>
              </div>
            </div>
          </td>
          <td>
            <span class="league-badge ${leagueClass}">${p.league}</span>
          </td>
          <td>
            <div style="font-weight:600;color:var(--text-primary);">${formatARS(p.price)}</div>
            ${p.originalPrice ? `<div style="font-size:0.75rem;color:var(--text-muted);text-decoration:line-through;">${formatARS(p.originalPrice)}</div>` : ''}
          </td>
          <td>
            <span class="stock-cell ${stockClass}">${p.stock}</span>
            <div style="font-size:0.7rem;color:var(--text-muted);">unidades</div>
          </td>
          <td>
            <label class="toggle-switch">
              <input type="checkbox" ${p.stock > 0 ? 'checked' : ''} onchange="toggleProductStatus(${p.id}, this.checked)">
              <span class="toggle-slider"></span>
            </label>
          </td>
          <td>
            <div class="action-btns">
              <button class="action-btn edit" title="Editar" onclick="openProductModal(${p.id})">
                <i class="fas fa-pen"></i>
              </button>
              <button class="action-btn delete" title="Eliminar" onclick="openDeleteModal(${p.id})">
                <i class="fas fa-trash"></i>
              </button>
              <button class="action-btn view" title="Vista previa" onclick="previewProduct(${p.id})">
                <i class="fas fa-eye"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  renderPagination(total, totalPages);
}

function getLeagueBadgeClass(league) {
  const map = {
    'Premier League': 'premier',
    'La Liga': 'laliga',
    'Serie A': 'seriea',
    'Bundesliga': 'bundesliga',
    'Ligue 1': 'ligue1',
    'Mundial': 'mundial',
    'Champions League': 'ucl'
  };
  return map[league] || '';
}

function renderPagination(total, totalPages) {
  const container = document.getElementById('productsPagination');
  if (!container) return;

  let html = '';
  // Prev
  html += `<button class="page-btn" ${adminState.currentPage === 1 ? 'disabled' : ''} onclick="changePage(${adminState.currentPage - 1})"><i class="fas fa-chevron-left"></i></button>`;

  // Pages
  for (let i = 1; i <= totalPages; i++) {
    if (totalPages > 7 && i > 2 && i < totalPages - 1 && Math.abs(i - adminState.currentPage) > 1) {
      if (i === 3 || i === totalPages - 2) html += `<span style="color:var(--text-muted);padding:0 4px;">...</span>`;
      continue;
    }
    html += `<button class="page-btn ${i === adminState.currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
  }

  // Next
  html += `<button class="page-btn" ${adminState.currentPage === totalPages || totalPages === 0 ? 'disabled' : ''} onclick="changePage(${adminState.currentPage + 1})"><i class="fas fa-chevron-right"></i></button>`;

  container.innerHTML = html;
}

function changePage(page) {
  adminState.currentPage = page;
  renderProductsTable();
}

function toggleProductStatus(productId, active) {
  showAdminToast(`Producto ${active ? 'activado' : 'desactivado'}`, 'info');
}

function previewProduct(productId) {
  showAdminToast('Vista previa del producto', 'info');
}

function initProductsSection() {
  const searchInput = document.getElementById('productSearch');
  const leagueFilter = document.getElementById('leagueFilter');
  const sortFilter = document.getElementById('sortFilter');
  const newProductBtn = document.getElementById('newProductBtn');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      adminState.productFilters.search = searchInput.value;
      adminState.currentPage = 1;
      renderProductsTable();
    });
  }

  if (leagueFilter) {
    leagueFilter.addEventListener('change', () => {
      adminState.productFilters.league = leagueFilter.value;
      adminState.currentPage = 1;
      renderProductsTable();
    });
  }

  if (sortFilter) {
    sortFilter.addEventListener('change', () => {
      adminState.productFilters.sort = sortFilter.value;
      renderProductsTable();
    });
  }

  if (newProductBtn) {
    newProductBtn.addEventListener('click', () => openProductModal(null));
  }
}

/* ============================================================
   PRODUCT MODAL
   ============================================================ */
function openProductModal(productId = null) {
  adminState.editingProductId = productId;
  adminState.modalTab = 0;

  const modal = document.getElementById('productModal');
  const title = document.getElementById('productModalTitle');

  if (productId !== null) {
    const product = adminState.products.find(p => p.id === productId);
    if (!product) return;
    title.textContent = 'Editar Producto';
    populateProductForm(product);
  } else {
    title.textContent = 'Nuevo Producto';
    clearProductForm();
  }

  // Switch to first tab
  switchModalTab(0);

  modal.classList.add('open');
  updateJerseyPreview();
}

function clearProductForm() {
  const fields = ['prod-name','prod-team','prod-league','prod-season','prod-price','prod-original-price',
    'prod-description','prod-badge','prod-rating','prod-stock','prod-meta-title','prod-meta-desc','prod-reviews','prod-pattern'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.tagName === 'SELECT') el.selectedIndex = 0;
    else el.value = '';
  });

  // Default colors
  setColor1('#1a5276');
  setColor2('#ffffff');

  // Reset sizes
  ['xs','s','m','l','xl','xxl'].forEach(s => {
    const el = document.getElementById(`size-${s}`);
    if (el) el.checked = ['m','l','xl'].includes(s);
  });

  // Reset toggles
  ['prod-isnew','prod-isbestseller','prod-islimited','prod-isfeatured'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = false;
  });

  // Reset image
  adminState.formData.imageUrl = '';
  adminState.formData.imageFile = null;
  const imgInput = document.getElementById('prod-image-file');
  if (imgInput) imgInput.value = '';
  const imgUrlInput = document.getElementById('prod-image-url');
  if (imgUrlInput) imgUrlInput.value = '';
  const imgPreview = document.getElementById('prod-image-preview');
  if (imgPreview) { imgPreview.src = ''; imgPreview.style.display = 'none'; }
}

function populateProductForm(p) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };

  set('prod-name', p.name);
  set('prod-team', p.team);
  set('prod-league', p.league);
  set('prod-season', p.season);
  set('prod-price', p.price);
  set('prod-original-price', p.originalPrice || '');
  set('prod-description', p.description);
  set('prod-badge', p.badge || '');
  set('prod-rating', p.rating);
  set('prod-stock', p.stock);
  set('prod-meta-title', p.metaTitle || '');
  set('prod-meta-desc', p.metaDesc || '');
  set('prod-reviews', p.reviews);
  set('prod-pattern', p.jerseyPattern);

  setColor1(p.jerseyColor1);
  setColor2(p.jerseyColor2);

  // Sizes
  ['xs','s','m','l','xl','xxl'].forEach(s => {
    const el = document.getElementById(`size-${s}`);
    if (el) el.checked = p.sizes && p.sizes.map(x => x.toLowerCase()).includes(s);
  });

  // Toggles
  const setToggle = (id, val) => { const el = document.getElementById(id); if (el) el.checked = !!val; };
  setToggle('prod-isnew', p.isNew);
  setToggle('prod-isbestseller', p.isBestSeller);
  setToggle('prod-islimited', p.isLimited);
  setToggle('prod-isfeatured', p.isFeatured);

  // Image
  adminState.formData.imageUrl = p.imageUrl || '';
  const imgUrlInput = document.getElementById('prod-image-url');
  if (imgUrlInput) imgUrlInput.value = p.imageUrl || '';
  const imgPreview = document.getElementById('prod-image-preview');
  if (imgPreview) {
    if (p.imageUrl) {
      imgPreview.src = p.imageUrl;
      imgPreview.style.display = 'block';
    } else {
      imgPreview.src = '';
      imgPreview.style.display = 'none';
    }
  }
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('open');
}

function switchModalTab(index) {
  adminState.modalTab = index;

  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.getAttribute('data-tab')) === index);
  });

  document.querySelectorAll('.tab-pane').forEach((pane, i) => {
    pane.classList.toggle('active', i === index);
  });

  if (index === 1) updateJerseyPreview();
}

function updateJerseyPreview() {
  const color1El = document.getElementById('color1Text');
  const color2El = document.getElementById('color2Text');
  const patternEl = document.getElementById('prod-pattern');
  const previewEl = document.getElementById('jerseyPreviewSvg');

  if (!previewEl) return;

  const imageUrl = adminState.formData && adminState.formData.imageUrl;
  if (imageUrl) {
    previewEl.innerHTML = `<img src="${imageUrl}" alt="Vista previa" style="width:140px;height:160px;object-fit:contain;border-radius:8px;">`;
    return;
  }

  const c1 = (color1El && color1El.value) ? color1El.value : '#1a5276';
  const c2 = (color2El && color2El.value) ? color2El.value : '#ffffff';
  const pattern = patternEl ? patternEl.value : 'solid';

  previewEl.innerHTML = getJerseySVG(c1, c2, pattern, 140);
}

function setColor1(hex) {
  const preview = document.getElementById('color1Preview');
  const picker = document.getElementById('color1Picker');
  const text = document.getElementById('color1Text');
  if (preview) preview.style.background = hex;
  if (picker) picker.value = hex;
  if (text) text.value = hex;
}

function setColor2(hex) {
  const preview = document.getElementById('color2Preview');
  const picker = document.getElementById('color2Picker');
  const text = document.getElementById('color2Text');
  if (preview) preview.style.background = hex;
  if (picker) picker.value = hex;
  if (text) text.value = hex;
}

async function saveProduct() {
  const name = document.getElementById('prod-name').value.trim();
  const team = document.getElementById('prod-team').value.trim();
  const league = document.getElementById('prod-league').value;
  const priceVal = document.getElementById('prod-price').value;
  const stockVal = document.getElementById('prod-stock').value;

  if (!name) { showAdminToast('El nombre del producto es obligatorio', 'error'); switchModalTab(0); return; }
  if (!team) { showAdminToast('El equipo es obligatorio', 'error'); switchModalTab(0); return; }
  if (!league) { showAdminToast('Selecciona una liga', 'error'); switchModalTab(0); return; }
  if (!priceVal || isNaN(parseFloat(priceVal))) { showAdminToast('El precio es obligatorio', 'error'); switchModalTab(0); return; }
  if (!stockVal || isNaN(parseInt(stockVal))) { showAdminToast('El stock es obligatorio', 'error'); switchModalTab(2); return; }

  // Upload image file to GitHub if a new file was selected
  if (adminState.formData.imageFile) {
    showAdminToast('Subiendo imagen...', 'success');
    const uploadedUrl = await uploadImageToGitHub(adminState.formData.imageFile);
    if (uploadedUrl) {
      adminState.formData.imageUrl = uploadedUrl;
    } else {
      showAdminToast('No se pudo subir la imagen. Verificá el token de GitHub en Ajustes.', 'error');
    }
    adminState.formData.imageFile = null;
  }

  const sizes = ['xs','s','m','l','xl','xxl']
    .filter(s => document.getElementById(`size-${s}`) && document.getElementById(`size-${s}`).checked)
    .map(s => s.toUpperCase());

  const productData = {
    name,
    team,
    league,
    season: document.getElementById('prod-season').value.trim() || '2024/25',
    price: parseFloat(parseFloat(priceVal).toFixed(2)),
    originalPrice: parseFloat(document.getElementById('prod-original-price').value) || null,
    jerseyColor1: document.getElementById('color1Text').value || '#1a5276',
    jerseyColor2: document.getElementById('color2Text').value || '#ffffff',
    jerseyPattern: document.getElementById('prod-pattern').value || 'solid',
    sizes: sizes.length > 0 ? sizes : ['M','L'],
    stock: parseInt(stockVal),
    rating: parseFloat(document.getElementById('prod-rating').value) || 4.5,
    reviews: parseInt(document.getElementById('prod-reviews').value) || 0,
    isNew: document.getElementById('prod-isnew').checked,
    isBestSeller: document.getElementById('prod-isbestseller').checked,
    isLimited: document.getElementById('prod-islimited').checked,
    isFeatured: document.getElementById('prod-isfeatured').checked,
    description: document.getElementById('prod-description').value.trim(),
    badge: document.getElementById('prod-badge').value.trim() || null,
    metaTitle: document.getElementById('prod-meta-title').value.trim(),
    metaDesc: document.getElementById('prod-meta-desc').value.trim(),
    imageUrl: adminState.formData.imageUrl || ''
  };

  if (adminState.editingProductId !== null) {
    // Edit existing
    const idx = adminState.products.findIndex(p => p.id === adminState.editingProductId);
    if (idx !== -1) {
      adminState.products[idx] = { ...adminState.products[idx], ...productData };
      showAdminToast(`Producto "${name}" actualizado correctamente`, 'success');
    }
  } else {
    // Create new
    const newId = Math.max(...adminState.products.map(p => p.id), 0) + 1;
    adminState.products.unshift({ id: newId, ...productData });
    showAdminToast(`Producto "${name}" creado correctamente`, 'success');
  }

  saveProductsToStorage();
  publishProductsToGitHub();
  closeProductModal();
  renderProductsTable();
}

function initProductModal() {
  document.getElementById('closeProductModal').addEventListener('click', closeProductModal);
  document.getElementById('cancelProductModal').addEventListener('click', closeProductModal);
  document.getElementById('saveProductBtn').addEventListener('click', saveProduct);

  // Tab buttons
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchModalTab(parseInt(btn.getAttribute('data-tab')));
    });
  });

  // Color pickers
  const color1Picker = document.getElementById('color1Picker');
  const color1Text = document.getElementById('color1Text');
  const color1Preview = document.getElementById('color1Preview');

  if (color1Picker) {
    color1Picker.addEventListener('input', (e) => {
      setColor1(e.target.value);
      updateJerseyPreview();
    });
  }
  if (color1Text) {
    color1Text.addEventListener('input', (e) => {
      const val = e.target.value;
      if (/^#[0-9a-fA-F]{6}$/.test(val)) {
        setColor1(val);
        updateJerseyPreview();
      }
    });
  }
  if (color1Preview) {
    color1Preview.addEventListener('click', () => color1Picker && color1Picker.click());
  }

  const color2Picker = document.getElementById('color2Picker');
  const color2Text = document.getElementById('color2Text');
  const color2Preview = document.getElementById('color2Preview');

  if (color2Picker) {
    color2Picker.addEventListener('input', (e) => {
      setColor2(e.target.value);
      updateJerseyPreview();
    });
  }
  if (color2Text) {
    color2Text.addEventListener('input', (e) => {
      const val = e.target.value;
      if (/^#[0-9a-fA-F]{6}$/.test(val)) {
        setColor2(val);
        updateJerseyPreview();
      }
    });
  }
  if (color2Preview) {
    color2Preview.addEventListener('click', () => color2Picker && color2Picker.click());
  }

  const patternSel = document.getElementById('prod-pattern');
  if (patternSel) {
    patternSel.addEventListener('change', updateJerseyPreview);
  }

  // Image upload
  const imgFileInput = document.getElementById('prod-image-file');
  const imgUrlInput2 = document.getElementById('prod-image-url');
  const imgPreviewEl = document.getElementById('prod-image-preview');
  const clearImgBtn = document.getElementById('prod-image-clear');

  if (imgFileInput) {
    imgFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 2 * 1024 * 1024) {
        showAdminToast('La imagen no puede superar 2 MB', 'error');
        imgFileInput.value = '';
        return;
      }
      // Store the file object for upload on save
      adminState.formData.imageFile = file;
      // Show local preview only
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (imgPreviewEl) { imgPreviewEl.src = ev.target.result; imgPreviewEl.style.display = 'block'; }
        if (imgUrlInput2) imgUrlInput2.value = '';
        updateJerseyPreview();
      };
      reader.readAsDataURL(file);
    });
  }

  if (imgUrlInput2) {
    imgUrlInput2.addEventListener('input', (e) => {
      const url = e.target.value.trim();
      adminState.formData.imageUrl = url;
      if (imgPreviewEl) {
        if (url) { imgPreviewEl.src = url; imgPreviewEl.style.display = 'block'; }
        else { imgPreviewEl.src = ''; imgPreviewEl.style.display = 'none'; }
      }
      updateJerseyPreview();
    });
  }

  if (clearImgBtn) {
    clearImgBtn.addEventListener('click', () => {
      adminState.formData.imageUrl = '';
      if (imgFileInput) imgFileInput.value = '';
      if (imgUrlInput2) imgUrlInput2.value = '';
      if (imgPreviewEl) { imgPreviewEl.src = ''; imgPreviewEl.style.display = 'none'; }
      updateJerseyPreview();
    });
  }

  // SEO preview live update
  const nameInput = document.getElementById('prod-name');
  const metaTitleInput = document.getElementById('prod-meta-title');
  const metaDescInput = document.getElementById('prod-meta-desc');

  const updateSeoPreview = () => {
    const title = document.getElementById('seo-preview-title');
    const desc = document.getElementById('seo-preview-desc');
    if (title) title.textContent = (metaTitleInput && metaTitleInput.value) || (nameInput && nameInput.value) || 'Título del producto' + ' - CamisetasPelu';
    if (desc) desc.textContent = (metaDescInput && metaDescInput.value) || 'Descripción del producto aparecerá aquí...';
  };

  if (metaTitleInput) metaTitleInput.addEventListener('input', updateSeoPreview);
  if (metaDescInput) metaDescInput.addEventListener('input', updateSeoPreview);
  if (nameInput) nameInput.addEventListener('input', updateSeoPreview);

  // Close on overlay click
  document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('productModal')) closeProductModal();
  });
}

/* ============================================================
   DELETE MODAL
   ============================================================ */
function openDeleteModal(productId) {
  adminState.deleteProductId = productId;
  const modal = document.getElementById('deleteModal');
  modal.classList.add('open');
}

function closeDeleteModal() {
  const modal = document.getElementById('deleteModal');
  modal.classList.remove('open');
  adminState.deleteProductId = null;
}

function confirmDelete() {
  if (adminState.deleteProductId === null) return;
  const product = adminState.products.find(p => p.id === adminState.deleteProductId);
  const name = product ? product.name : 'Producto';

  adminState.products = adminState.products.filter(p => p.id !== adminState.deleteProductId);
  saveProductsToStorage();
  publishProductsToGitHub();
  renderProductsTable();
  closeDeleteModal();
  showAdminToast(`"${name}" eliminado correctamente`, 'success');
}

function initDeleteModal() {
  document.getElementById('closeDeleteModal').addEventListener('click', closeDeleteModal);
  document.getElementById('cancelDeleteBtn').addEventListener('click', closeDeleteModal);
  document.getElementById('confirmDeleteBtn').addEventListener('click', confirmDelete);

  document.getElementById('deleteModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('deleteModal')) closeDeleteModal();
  });
}

/* ============================================================
   ORDERS TABLE
   ============================================================ */
function renderOrdersTable(statusFilter = null) {
  const filter = statusFilter || adminState.ordersFilter;
  const filtered = filter === 'all' ? ORDERS_DATA : ORDERS_DATA.filter(o => o.status === filter);

  const tbody = document.getElementById('ordersTbody');
  const countEl = document.getElementById('ordersCount');

  if (countEl) countEl.textContent = `${filtered.length} pedido${filtered.length !== 1 ? 's' : ''}`;

  if (!tbody) return;

  tbody.innerHTML = filtered.map((o, i) => `
    <tr style="animation-delay:${i * 0.05}s">
      <td><span style="color:var(--color-primary);font-weight:600;">${o.id}</span></td>
      <td><span style="color:var(--text-primary);font-weight:500;">${o.customer}</span></td>
      <td><span style="color:var(--text-muted);font-size:0.8rem;">${o.email}</span></td>
      <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${o.product}</td>
      <td><strong style="color:var(--color-success);">${formatARS(o.amount)}</strong></td>
      <td style="color:var(--text-muted);font-size:0.82rem;">${formatDate(o.date)}</td>
      <td>${getStatusBadge(o.status)}</td>
      <td>
        <div class="action-btns">
          <button class="action-btn edit" title="Ver detalle" onclick="showAdminToast('Detalle de pedido ${o.id}','info')">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn view" title="Marcar enviado" onclick="showAdminToast('Estado actualizado','success')">
            <i class="fas fa-truck"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}

function initOrdersFilters() {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      adminState.ordersFilter = chip.getAttribute('data-status');
      renderOrdersTable();
    });
  });
}

/* ============================================================
   CATEGORIES
   ============================================================ */
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;

  grid.innerHTML = CATEGORIES_DATA.map(cat => `
    <div class="category-card">
      <div class="category-card-icon" style="background: linear-gradient(135deg, ${cat.color}, ${cat.color}88);">
        <i class="${cat.icon}" style="color:#fff;font-size:1.2rem;"></i>
      </div>
      <div class="category-card-name">${cat.name}</div>
      <div class="category-card-count">${cat.count} producto${cat.count !== 1 ? 's' : ''}</div>
      <div class="category-card-actions">
        <button class="btn btn-sm btn-secondary" onclick="showAdminToast('Editar categoría','info')">
          <i class="fas fa-pen"></i> Editar
        </button>
        <button class="btn btn-sm" style="background:rgba(255,62,108,0.08);color:var(--color-danger);border:1px solid rgba(255,62,108,0.2);" onclick="showAdminToast('Eliminar categoría','warning')">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   BANNERS
   ============================================================ */
function renderBanners() {
  const grid = document.getElementById('bannersGrid');
  if (!grid) return;

  grid.innerHTML = BANNERS_DATA.map(banner => `
    <div class="banner-card">
      <div class="banner-preview ${banner.previewClass}">
        <span>${banner.title}</span>
      </div>
      <div class="banner-info">
        <div class="banner-title">${banner.title}</div>
        <div class="banner-meta">${banner.subtitle}</div>
      </div>
      <div class="banner-footer">
        <label class="toggle-switch">
          <input type="checkbox" ${banner.active ? 'checked' : ''} onchange="showAdminToast('Estado del banner actualizado','success')">
          <span class="toggle-slider"></span>
        </label>
        <div class="action-btns">
          <button class="action-btn edit" onclick="showAdminToast('Editando banner','info')">
            <i class="fas fa-pen"></i>
          </button>
          <button class="action-btn delete" onclick="showAdminToast('Banner eliminado','success')">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   PROMOS
   ============================================================ */
function renderPromos() {
  const tbody = document.getElementById('promosTbody');
  if (!tbody) return;

  tbody.innerHTML = PROMOS_DATA.map((promo, i) => `
    <tr style="animation-delay:${i * 0.05}s">
      <td><span class="promo-code-cell">${promo.code}</span></td>
      <td>
        <span style="color:var(--color-success);font-weight:700;font-size:1.1rem;">${promo.discount}%</span>
        <span style="color:var(--text-muted);font-size:0.75rem;margin-left:4px;">de descuento</span>
      </td>
      <td style="color:var(--text-primary);font-weight:500;">${promo.uses}</td>
      <td style="color:var(--text-secondary);">${promo.limit ? promo.limit : '<span style="color:var(--text-muted)">Sin límite</span>'}</td>
      <td style="color:var(--text-muted);font-size:0.82rem;">${promo.expiry ? formatDate(promo.expiry) : '<span style="color:var(--text-muted)">Sin vencimiento</span>'}</td>
      <td>
        <span class="status-badge ${promo.active ? 'badge-completado' : 'badge-cancelado'}">
          ${promo.active ? 'Activo' : 'Inactivo'}
        </span>
      </td>
      <td>
        <div class="action-btns">
          <button class="action-btn edit" onclick="showAdminToast('Editando código ${promo.code}','info')">
            <i class="fas fa-pen"></i>
          </button>
          <button class="action-btn delete" onclick="showAdminToast('Código eliminado','success')">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

/* ============================================================
   SETTINGS
   ============================================================ */
function saveSettings() {
  const name = document.getElementById('settingsStoreName').value.trim();
  if (!name) { showAdminToast('El nombre de la tienda es obligatorio', 'error'); return; }
  showAdminToast('Configuración guardada correctamente', 'success');
}

function initGithubSettings() {
  const tokenInput = document.getElementById('gh-token-input');
  const saveBtn = document.getElementById('gh-token-save');
  const publishBtn = document.getElementById('gh-publish-now');

  if (tokenInput) tokenInput.value = getGithubToken();

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const val = tokenInput ? tokenInput.value.trim() : '';
      localStorage.setItem(GITHUB_TOKEN_KEY, val);
      showAdminToast(val ? 'Token de GitHub guardado.' : 'Token eliminado.', 'success');
    });
  }

  if (publishBtn) {
    publishBtn.addEventListener('click', () => publishProductsToGitHub());
  }
}

/* ============================================================
   STORAGE + GITHUB API
   ============================================================ */
const STORAGE_KEY = 'camisetaspelu_products';
const GITHUB_REPO = 'benmacompanis-sketch/camisetaspelu';
const GITHUB_FILE = 'products.json';
const GITHUB_TOKEN_KEY = 'camisetaspelu_gh_token';

function getGithubToken() {
  return localStorage.getItem(GITHUB_TOKEN_KEY) || '';
}

function loadProductsFromStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        adminState.products = parsed;
        return;
      }
    }
  } catch (e) {}
  adminState.products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  saveProductsToStorage();
}

function saveProductsToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(adminState.products));
  } catch (e) {}
}

async function uploadImageToGitHub(file) {
  const token = getGithubToken();
  if (!token) return null;

  const ext = file.name.split('.').pop().toLowerCase() || 'jpg';
  const filename = `images/product-${Date.now()}.${ext}`;
  const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filename}`;

  const base64 = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const b64 = e.target.result.split(',')[1];
      resolve(b64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const res = await fetch(apiUrl, {
    method: 'PUT',
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Admin: subir imagen de producto',
      content: base64,
      branch: 'gh-pages'
    })
  });

  if (!res.ok) return null;
  return `https://benmacompanis-sketch.github.io/camisetaspelu/${filename}`;
}

async function fetchFileSha(apiUrl, token) {
  const res = await fetch(apiUrl + '?ref=gh-pages&t=' + Date.now(), {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json'
    }
  });
  if (!res.ok) return '';
  const data = await res.json();
  return data.sha || '';
}

async function publishProductsToGitHub() {
  const token = getGithubToken();
  if (!token) {
    showAdminToast('Configurá el token de GitHub en Ajustes para publicar cambios.', 'warning');
    return;
  }

  const content = btoa(unescape(encodeURIComponent(JSON.stringify(adminState.products, null, 2))));
  const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE}`;

  async function tryPut(sha) {
    return fetch(apiUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Admin: actualizar productos',
        content,
        branch: 'gh-pages',
        ...(sha ? { sha } : {})
      })
    });
  }

  const delay = ms => new Promise(r => setTimeout(r, ms));

  try {
    // Up to 3 attempts, fetching fresh SHA each time
    for (let attempt = 1; attempt <= 3; attempt++) {
      const sha = await fetchFileSha(apiUrl, token);
      const putRes = await tryPut(sha);

      if (putRes.ok) {
        showAdminToast('✓ Publicado en GitHub. Cambios visibles en ~1 minuto.', 'success');
        return;
      }

      if (putRes.status === 409 || putRes.status === 422) {
        if (attempt < 3) { await delay(600 * attempt); continue; }
      }

      const err = await putRes.json().catch(() => ({}));
      showAdminToast('Error GitHub: ' + (err.message || putRes.status), 'error');
      return;
    }
  } catch (e) {
    showAdminToast('Error: ' + (e && e.message ? e.message : 'No se pudo conectar con GitHub.'), 'error');
  }
}

/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Escape closes modals
    if (e.key === 'Escape') {
      const productModal = document.getElementById('productModal');
      const deleteModal = document.getElementById('deleteModal');
      if (productModal && productModal.classList.contains('open')) closeProductModal();
      if (deleteModal && deleteModal.classList.contains('open')) closeDeleteModal();
    }
  });
}

/* ============================================================
   MAIN INIT
   ============================================================ */
function initAdmin() {
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('adminDashboard').style.display = 'none';

  initLogin();
  initSidebar();
  initProductsSection();
  initProductModal();
  initDeleteModal();
  initOrdersFilters();
  initKeyboardShortcuts();
  initGithubSettings();

  // Load products: try products.json first, then localStorage, then defaults
  fetch('products.json?v=' + Date.now())
    .then(r => r.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        adminState.products = data;
        saveProductsToStorage();
      } else {
        loadProductsFromStorage();
      }
    })
    .catch(() => loadProductsFromStorage());
}

/* ============================================================
   DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', initAdmin);

/* ============================================================
   GLOBAL HELPERS (called from inline HTML onclick handlers)
   ============================================================ */
window.showAdminToast = showAdminToast;
window.goToSection = goToSection;
window.openProductModal = openProductModal;
window.openDeleteModal = openDeleteModal;
window.toggleProductStatus = toggleProductStatus;
window.previewProduct = previewProduct;
window.changePage = changePage;
window.saveSettings = saveSettings;
