import React, { useState } from 'react';

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const pricingPlans = [
        {
            id: 1,
            title: 'Day Pass',
            price: '$20',
            period: '/pass',
            details: ['1 Day Pass', 'Free Gym Access', '24 Hour Access'],
        },
        {
            id: 2,
            title: 'Month to Month',
            price: '$90',
            period: '/month',
            details: ['No Contract', 'Free Gym Access', '1 Group Class Included', '24 Hour Access'],
        },
        {
            id: 2,
            title: 'year to year',
            price: '$900',
            period: '/month',
            details: ['No Contract', 'Free Gym Access', '1 Group Class Included', '24 Hour Access'],
        },
    ];

    const selectPlan = (id) => {
        setSelectedPlan(id === selectedPlan ? null : id);
    };

    return (
        <div className="min-h-screen bg-white-900 text-white flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold mb-12 text-center">Pricing Section</h2>
            <div className="w-full max-w-5xl flex justify-around flex-wrap">
                {pricingPlans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`w-full sm:w-64 p-6 m-4 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 ${
                            selectedPlan === plan.id ? 'bg-gray-700' : ''
                        }`}
                        onClick={() => selectPlan(plan.id)}
                    >
                        <h3 className="text-2xl font-bold mb-2 text-center">{plan.title}</h3>
                        <p className="text-4xl font-bold text-green-400 text-center">{plan.price}</p>
                        <p className="text-center">{plan.period}</p>
                        {selectedPlan === plan.id && (
                            <ul className="mt-4">
                                {plan.details.map((detail, index) => (
                                    <li key={index} className="text-center mt-2">
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button className="mt-6 w-full py-2 bg-green-500 text-white rounded hover:bg-green-600">
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
