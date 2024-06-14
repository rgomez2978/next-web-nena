// import { NextResponse, NextRequest } from 'next/server';

// export async function middleware(req, ev) {
//   const { pathname } = req.nextUrl;
//   if (pathname === '/') {
//     return NextResponse.redirect('/web');
//   }
//   return NextResponse.next();
// }


/**
 * Obtiene el rol del usuario a partir de la session del token
 * @param {*} tokenRole role session del token
 * @returns
 */
function getUserRole(tokenRole) {

  switch (tokenRole) {
    case 'Admin':
      return 'Admin'

    default:
      return 'Web'
  }
}

/**
 * Obtiene la ruta permitida para el rol actual
 * @param {*} pathname ruta actual
 * @returns
 */
function getRequiredRole(pathname) {
  switch (pathname) {
    case '/admin':
      return 'Admin'

    default:
      return 'Web'
  }
}