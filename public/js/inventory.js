new gridjs.Grid({
    columns: ["ID", "Producto", "Código", "Costo", "Stock", "Precio"],
    server: {
        url: '/products/get-products',
        then: datos => {
            let { data } = datos;
            return data.map(d => [d.id_producto, d.nombre_producto, d.codigo, d.costo, d.cantidad, d.precio]);
        },
        handle: (res) => {
            // no matching records found
            if (res.status === 404) return { data: [] };
            if (res.ok) return res.json();

            throw Error('oh no :(');
        },
    },
    search: true,
    sort: true,
    pagination: {
        enabled: true,
        limit: 10,
        page: 1,
        summary: false,
    },
    className: {
        header: 'border-none',
        footer: 'border-none footer',
        table: 'table',
        th: 'th',
        td: 'my-td-class',
        container: 'container',
        search: 'search',
        pagination: 'pagination',
        paginationButton: 'pagination-button',
        paginationButtonActive: 'pagination-button-active',
        paginationButtonDisabled: 'pagination-button-disabled',
        paginationLimit: 'pagination-limit',
    }

}).render(document.getElementById("table-container"));

