

const clientId = 'b4d86e31fbdc4244a519de0df33e4488';
const redirectUri = 'https://sy-blog-vert.vercel.app/';
const scopes = ['user-read-private', 'user-read-email', 'playlist-read-private'];



const Auth = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join('%20')}&response_type=token`;
    window.location.href = authUrl;

}


export default Auth;
