import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '764162d8349d04a2830d',
      clientSecret: '784de3b94afeb961a91b071b09d2106a09a666d2',
    }),
  ],
  secret: 'qkUBUD8GwtHY3o0sBytohh1QTGGC3Vw3WZsx69unVOg=',
};
export default NextAuth(authOptions);
