function sqlInjection(input: string | number | null | undefined): string {
    if (input === null || input === undefined) {
        return '';
    }
    let texto = String(input);
    const peligrosos: { [key: string]: string } = {
        ';': '',
        "'": "''",
        '"': '\\"',
        '--': '',
        '/*': '',
        '*/': '',
        'xp_': '',
        'EXEC': '',
        'exec': '',
        'SELECT': '',
        'select': '',
        'INSERT': '',
        'insert': '',
        'UPDATE': '',
        'update': '',
        'DELETE': '',
        'delete': '',
        'DROP': '',
        'drop': '',
        'UNION': '',
        'union': '',
        'OR': '',
        'or': '',
        'AND': '',
        'and': '',
        '=': '',
        '<': '',
        '>': ''
    };

    for (const [peligroso, reemplazo] of Object.entries(peligrosos)) {
        const regex = new RegExp(peligroso, 'g');
        texto = texto.replace(regex, reemplazo);
    }
    texto = texto.replace(/\s+/g, ' ').trim();

    return texto;
}

export { sqlInjection }