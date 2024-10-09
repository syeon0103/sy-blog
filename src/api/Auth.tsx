

const clientId = 'b4d86e31fbdc4244a519de0df33e4488';
let redirectUri = '';
const scopes = ['user-read-private', 'user-read-email', 'playlist-read-private'];





const Auth = () => {

    if (import.meta.env.VITE_REACT_APP_ENV === 'development') {
        console.log("로컬 환경에서 실행 중입니다.")
        redirectUri = 'http://localhost:5173/'
    } else {
        console.log("배포 환경에서 실행 중입니다.")
        redirectUri =  'https://sy-blog-vert.vercel.app/'
    }

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join('%20')}&response_type=token`;
    window.location.href = authUrl;

}


export default Auth;
