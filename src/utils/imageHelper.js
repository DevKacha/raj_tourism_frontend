
const gujaratImages = import.meta.glob('../assets/gujarat/*/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
const indiaImages = import.meta.glob('../assets/india/*/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
const internationalImages = import.meta.glob('../assets/international/*/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });

export const getTourImages = (region, id) => {
    const images = region === 'gujarat' ? gujaratImages :
        region === 'india' ? indiaImages :
            region === 'international' ? internationalImages : {};

    const basePath = `../assets/${region}/id${id}`;

    // Find main image (any extension)
    const mainKey = Object.keys(images).find(key => key.includes(`${basePath}/main.`));
    const mainImage = mainKey ? images[mainKey] : null;

    // Find gallery images
    const galleryKeys = Object.keys(images).filter(key => key.includes(`${basePath}/gallery`));
    // Sort to ensure gallery1, gallery2, etc. order
    galleryKeys.sort((a, b) => {
        const numA = parseInt(a.match(/gallery(\d+)/)?.[1] || '0');
        const numB = parseInt(b.match(/gallery(\d+)/)?.[1] || '0');
        return numA - numB;
    });

    const galleryImages = galleryKeys.map(key => images[key]);

    // Fallbacks
    // If no main image, use first gallery image
    const finalMain = mainImage || galleryImages[0] || '';

    // If no gallery images, use main image
    const finalGallery = galleryImages.length > 0 ? galleryImages : (mainImage ? [mainImage] : []);

    return {
        image: finalMain,
        galleryImages: finalGallery
    };
};
