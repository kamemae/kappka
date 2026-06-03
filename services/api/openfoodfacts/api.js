export default async function getInformationWithBarcode(barcode) {
    try {
        const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode.trim()}.json?fields=packaging`);

        if(!response.ok) {
            throw new Error("Nie ma takiego produktu w bazie");
        }

        const data = await response.json();
        return data;
    } catch(Exception) {
        console.error(`${Exception}`);
        return null;
    }
} 