import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { API_BASE_URL } from '../../globals';
import { Link } from 'react-router-dom';

const ProductsTable = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterText, setFilterText] = useState('');
    const [perPage, setPerPage] = useState(10);
    const [totalRows, setTotalRows] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortField, setSortField] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');

    const fetchProducts = async (page, size = perPage, search = filterText, sort = sortField, order = sortOrder) => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/products/get-with-pagination`, {
                params: {
                    page,
                    per_page: size,
                    search,
                    sort_field: sort,
                    sort_order: order,
                },
            });
            setProducts(response.data.data);
            setTotalRows(response.data.total);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage, perPage, filterText, sortField, sortOrder]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePerRowsChange = (newPerPage, page) => {
        setPerPage(newPerPage);
        fetchProducts(page, newPerPage);
    };

    const handleSort = (column, sortDirection) => {
        setSortField(column.sortField); // ensure this matches the column property
        setSortOrder(sortDirection);
    };

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            sortField: 'name',
        },
        {
            name: 'Quantity',
            selector: row => row.quantity,
            sortable: true,
            sortField: 'quantity',
        },
        {
            name: 'Buying Price',
            selector: row => row.buyingPrice,
            sortable: true,
            sortField: 'buyingPrice',
        },
        {
            name: 'Selling Price',
            selector: row => row.sellingPrice,
            sortable: true,
            sortField: 'sellingPrice',
        },
        {
            name: 'Weight',
            selector: row => row.weight,
            sortable: true,
            sortField: 'weight',
        },
        {
            name: 'Description',
            selector: row => row.description,
            sortable: false,
        },
    ];


    return (
        <div className="card">
            <div className="card-header">
                <p>DataTable</p>
                <Link to={'/add-products'} className='btn btn-success'>Add Product</Link>
            </div>
            <div className="card-body">
                <input
                    type="text"
                    placeholder="Filter products"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />
                <DataTable
                    columns={columns}
                    data={products}
                    progressPending={loading}
                    pagination
                    paginationServer
                    paginationTotalRows={totalRows}
                    onChangePage={handlePageChange}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onSort={handleSort}
                    sortServer
                />
            </div>
        </div>
    );
};

export default ProductsTable;
