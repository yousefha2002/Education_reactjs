import React from 'react';

export default function InputField({ id, label, type, placeholder, icon, required }) {
    return (
        <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="flex items-center border border-gray-300 rounded-md mt-1">
            <div className="text-gray-500 m-2">{icon}</div>
            <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="w-full px-4 py-2 text-sm text-gray-700 focus:outline-none"
            required={required}
            />
        </div>
        </div>
    );
}