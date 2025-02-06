"use client"
import React, { useState } from 'react';

// Define types for the invoice and item
interface InvoiceItem {
    description: string;
    quantity: number;
    price: number;
}

interface Invoice {
    invoiceNumber: string;
    date: string;
    customerName: string;
    customerAddress: string;
    items: InvoiceItem[];
    totalAmount: number;
}

const InvoiceForm: React.FC = () => {
    const [invoice, setInvoice] = useState<Invoice>({
        invoiceNumber: '',
        date: '',
        customerName: '',
        customerAddress: '',
        items: [{ description: '', quantity: 0, price: 0 }],
        totalAmount: 0,
    });

    // Handle changes for top-level fields (e.g., invoiceNumber, date, etc.)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInvoice({ ...invoice, [name]: value });
    };

    // Handle changes for individual items in the items array
    const handleItemChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newItems = [...invoice.items];
        newItems[index] = { ...newItems[index], [name]: value };
        setInvoice({ ...invoice, items: newItems });
    };

    // Add a new item to the items array
    const addItem = () => {
        setInvoice({
            ...invoice,
            items: [...invoice.items, { description: '', quantity: 0, price: 0 }],
        });
    };

    // Calculate the total amount based on the items
    const calculateTotal = () => {
        const total = invoice.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
        setInvoice({ ...invoice, totalAmount: total });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        calculateTotal();
        console.log('Invoice Submitted:', invoice);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Invoice Number:</label>
                <input
                    type="text"
                    name="invoiceNumber"
                    value={invoice.invoiceNumber}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    name="date"
                    value={invoice.date}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Customer Name:</label>
                <input
                    type="text"
                    name="customerName"
                    value={invoice.customerName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Customer Address:</label>
                <input
                    type="text"
                    name="customerAddress"
                    value={invoice.customerAddress}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Items:</label>
                {invoice.items.map((item, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={item.description}
                            onChange={(e) => handleItemChange(index, e)}
                        />
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Quantity"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(index, e)}
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={item.price}
                            onChange={(e) => handleItemChange(index, e)}
                        />
                    </div>
                ))}
                <button type="button" onClick={addItem}>
                    Add Item
                </button>
            </div>
            <div>
                <label>Total Amount:</label>
                <input
                    type="number"
                    name="totalAmount"
                    value={invoice.totalAmount}
                    readOnly
                />
            </div>
            <button type="submit">Submit Invoice</button>
        </form>
    );
};

export default InvoiceForm;