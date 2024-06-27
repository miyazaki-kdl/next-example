/** @type {import('next').NextConfig} */
const nextConfig = {
    logging:{
        fetches:{
            fullUrl: true
        }
    }
};

export default nextConfig;

//データ取得時にキャッシュを利用したかどうかがターミナルで見ることができる