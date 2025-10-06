import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';


const BookReservation = [
  {
    "reservation_id": 101,
    "member_id": 1,
    "member_name": "Oritro",
    "book_id": 501,
    "book_title": "Introduction to Python Programming",
    "author": "John Zelle",
    "reservation_date": "2025-10-06",
    "pickup_deadline": "2025-10-13",
    "status": "Reserved"
  },
  {
    "reservation_id": 102,
    "member_id": 2,
    "member_name": "Bashir",
    "book_id": 502,
    "book_title": "Clean Code",
    "author": "Robert C. Martin",
    "reservation_date": "2025-10-05",
    "pickup_deadline": "2025-10-12",
    "status": "Picked Up"
  },
  {
    "reservation_id": 103,
    "member_id": 3,
    "member_name": "Chowdhury",
    "book_id": 503,
    "book_title": "The Pragmatic Programmer",
    "author": "Andrew Hunt",
    "reservation_date": "2025-10-04",
    "pickup_deadline": "2025-10-11",
    "status": "Cancelled"
  },
  {
    "reservation_id": 104,
    "member_id": 4,
    "member_name": "Rony",
    "book_id": 504,
    "book_title": "Artificial Intelligence: A Modern Approach",
    "author": "Stuart Russell",
    "reservation_date": "2025-10-03",
    "pickup_deadline": "2025-10-10",
    "status": "Pending"
  },
  {
    "reservation_id": 105,
    "member_id": 5,
    "member_name": "Ambia",
    "book_id": 505,
    "book_title": "Deep Learning with Python",
    "author": "François Chollet",
    "reservation_date": "2025-10-02",
    "pickup_deadline": "2025-10-09",
    "status": "Picked Up"
  }
]


const ResultCharts = () => {
  
  const data = [...BookReservation].sort((a, b) => new Date(a.reservation_date) - new Date(b.reservation_date));

  return (
    <section className="my-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Reservation Chart</h2>
      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="reservation_date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="book_id" stroke="#82ca9d" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="member_name" stroke="#ff7300" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ResultCharts;
