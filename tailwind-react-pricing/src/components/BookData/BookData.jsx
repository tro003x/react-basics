import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const BookData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;
        axios
            .get('/booksData.json')
            .then((res) => {
                const payload = res.data;
                // If payload is an array use it, otherwise wrap single object
                const arr = Array.isArray(payload) ? payload : [payload];
                if (mounted) setData(arr);
            })
            .catch((err) => {
                if (mounted) setError(err.message || 'Failed to load');
            })
            .finally(() => {
                if (mounted) setLoading(false);
            });

        return () => {
            mounted = false;
        };
    }, []);

    if (loading) return <div className="p-4">Loading book data…</div>;
    if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
    if (!data || data.length === 0) return <div className="p-4">No data available</div>;

    return (
        <section className="my-8 px-4">
            <h2 className="text-2xl font-semibold mb-4">Book Reservations (Bar Chart)</h2>
            <div style={{ width: '100%', height: 320 }}>
                <ResponsiveContainer>
                    <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="member_name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="member_id" fill="#8884d8" />
                        <Bar dataKey="book_id" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default BookData;