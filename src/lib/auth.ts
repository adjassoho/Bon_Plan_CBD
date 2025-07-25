// Ce fichier n'est plus utilisé car nous utilisons Supabase pour l'authentification
// import { NextAuthOptions } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import { PrismaAdapter } from '@next-auth/prisma-adapter'
// import prisma from '@/lib/prisma'
// import bcrypt from 'bcryptjs'

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           return null
//         }

//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials.email
//           }
//         })

//         if (!user || !user.password) {
//           return null
//         }

//         const isPasswordValid = await bcrypt.compare(
//           credentials.password,
//           user.password
//         )

//         if (!isPasswordValid) {
//           return null
//         }

//         return {
//           id: user.id,
//           email: user.email,
//           name: user.name,
//           role: user.role,
//         }
//       }
//     })
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id as string
//         session.user.role = token.role as string
//       }
//       return session
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id
//         token.role = user.role
//       }
//       return token
//     }
//   },
//   pages: {
//     signIn: '/auth/signin',
//     error: '/auth/error',
//   },
//   session: {
//     strategy: 'jwt'
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// }

// Export temporaire pour éviter les erreurs
export const authOptions = {}
