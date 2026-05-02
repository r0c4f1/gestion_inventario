new gridjs.Grid({
    columns: ["Producto", "Categoría", "Stock", "Precio"],
    search: true,
    sort: true,
    pagination: {
        enabled: true,
        limit: 3,
        page: 1,
        summary: false,
    },
    data: [
        ["Bujía NGK Platinum", "Motor", 45, "$12.50"],
        ["Filtro Aceite XZ", "Mantenimiento", 5, "$8.99"],
        ["Bujía NGK Platinum", "Motor", 45, "$12.50"],
        ["Filtro Aceite XZ", "Mantenimiento", 5, "$8.99"],
        ["Bujía NGK Platinum", "Motor", 45, "$12.50"],
        ["Filtro Aceite XZ", "Mantenimiento", 5, "$8.99"],
    ],
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