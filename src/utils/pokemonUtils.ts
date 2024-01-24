export function extractPokemonNumber(url: string): string | null {
    const match = url.match(/\/(\d+)\/?$/);
    if (match) {
        const number = match[1].padStart(3, '0');
        return `#${number}`;
    } else {
        return null;
    }
}

