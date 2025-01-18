import React from 'react';
import { FaEnvelope, FaLock, FaUser, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router';
import InputField from '../components/reusableUi/InputField';

export default function SignUp() {
    return (
      <div className="container mx-auto px-4">
          <div className="max-w-sm mx-auto my-20 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-center text-2xl font-semibold mb-6">إنشاء حساب</h2>
          <form>
              {/* Username Field */}
              <InputField
                  id="username"
                  label="اسم المستخدم"
                  type="text"
                  placeholder="أدخل اسم المستخدم"
                  icon={<FaUser />}
                  required={true}
              />
              
              {/* Email Field */}
              <InputField
                  id="email"
                  label="البريد الإلكتروني"
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  icon={<FaEnvelope />}
                  required={true}
              />

              {/* Phone Number Field */}
              <InputField
                  id="phone"
                  label="رقم الهاتف"
                  type="tel"
                  placeholder="أدخل رقم هاتفك"
                  icon={<FaPhone />}
                  required={true}
              />

              {/* Password Field */}
              <InputField
                  id="password"
                  label="كلمة المرور"
                  type="password"
                  placeholder="أدخل كلمة المرور"
                  icon={<FaLock />}
                  required={true}
              />

              {/* Confirm Password Field */}
              <InputField
                  id="confirm-password"
                  label="تأكيد كلمة المرور"
                  type="password"
                  placeholder="أعد إدخال كلمة المرور"
                  icon={<FaLock />}
                  required={true}
              />

              <button
              type="submit"
              className="w-full py-2 bg-PRIMARY text-white text-sm font-semibold rounded-md focus:outline-none"
              >
              إنشاء حساب
              </button>
          </form>
          <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">هل لديك حساب؟</p>
              <Link
                  to="/login"
                  className="text-PRIMARY hover:underline text-sm font-semibold"
              >
                  تسجيل الدخول
              </Link>
          </div>
          </div>
      </div>
    );
}
