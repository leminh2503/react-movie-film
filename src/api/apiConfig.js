const apiConfig = {
    url: "https://nodejsnetflix.herokuapp.com/api/",
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '001bfc75200a9b46a26d2958578417ff',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;