export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const coords = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                    resolve(coords);
                },
                (error) => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            reject("Pengguna menolak permintaan geolocation.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            reject("Informasi lokasi tidak tersedia.");
                            break;
                        case error.TIMEOUT:
                            reject(
                                "Permintaan untuk mendapatkan lokasi pengguna melampaui batas waktu."
                            );
                            break;
                        default:
                            reject("Terjadi kesalahan yang tidak diketahui.");
                            break;
                    }
                }
            );
        } else {
            reject("Geolocation tidak didukung oleh browser ini.");
        }
    });
};
