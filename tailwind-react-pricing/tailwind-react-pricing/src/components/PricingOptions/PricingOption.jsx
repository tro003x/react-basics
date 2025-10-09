import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const PricingOption = () => {
    const [plans, setPlans] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/PricingData.json')
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((data) => {
                setPlans(data.membership_plans || []);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const colors = [
        'bg-white text-gray-900',
        'bg-blue-600 text-white',
        'bg-amber-500 text-black',
        'bg-black text-white',
        'bg-rose-700 text-white',
    ];

    const handleSubscribe = (plan) => {
        // placeholder action - replace with navigation/modal/api call
        console.log('Subscribe clicked for plan:', plan.id, plan.name);
        alert(`Subscribed to ${plan.name} (${plan.price_bdt} BDT)`);
    };

    if (loading) return <div className="p-6">Loading plans…</div>;
    if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

    return (
        <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Membership Plans For Tros Library</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 items-stretch">
                {plans.map((p, idx) => (
                    <div key={p.id} className="flex flex-col h-full">
                        <div className={`flex-1 flex flex-col justify-between p-4 rounded shadow-sm border ${colors[idx % colors.length]} hover:scale-[1.01] transition-transform`}> 
                            <div>
                                <h3 className="text-lg font-medium">{p.name}</h3>
                                <p className="text-2xl font-bold my-2">{p.price_bdt} BDT</p>
                                <p className="text-sm mb-2">Duration: {p.duration_months} month(s)</p>
                                <ul className="text-sm pl-5 space-y-2">
                                    {p.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle className="text-emerald-600" size={20} />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-3 flex justify-center">
                            <button
                                type="button"
                                onClick={() => handleSubscribe(p)}
                                aria-label={`Subscribe to ${p.name}`}
                                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 w-full"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricingOption;