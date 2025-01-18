import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router';
import InputField from '../components/reusableUi/InputField';

export default function Login() {
    return (
    <div className='Container'>
        <div className="max-w-sm mx-auto my-20 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-center text-2xl font-semibold mb-6">تسجيل الدخول</h2>
        <form>
            <InputField
                id="email"
                label="البريد الإلكتروني"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                icon={<FaEnvelope />}
                required={true}
            />
            <InputField
                id="password"
                label="كلمة المرور"
                type="password"
                placeholder="أدخل كلمة المرور"
                icon={<FaLock />}
                required={true}
            />

            <button
            type="submit"
            className="w-full py-2 bg-PRIMARY text-white text-sm font-semibold rounded-md focus:outline-none"
            >
            تسجيل الدخول
            </button>
        </form>
        <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">ليس لديك حساب؟</p>
            <Link
                to="/signup"
                className="text-PRIMARY hover:underline text-sm font-semibold"
                >
                إنشاء حساب
            </Link>
        </div>
        </div>
    </div>
    );
}