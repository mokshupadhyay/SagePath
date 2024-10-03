"use client"

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import { useTheme } from '@/context/ThemeContext';

const RegisterForm = () => {
    const { isDarkMode } = useTheme();
    const router = useRouter();
    const auth = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: '',
        photo: '',
        email: '',
        password: '',
        confirm: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { name, photo, email, password, confirm } = formData;

        if (password !== confirm) {
            toast.error("Passwords don't match");
            return;
        }

        if (!auth) {
            toast.error("Authentication context is not available");
            return;
        }

        try {
            const result = await auth.createUser(email, password);
            console.log(result.user);
            toast.success('Account created successfully');
            await auth.updateUserProfile(name, photo);
            router.push('/');
        } catch (error) {
            console.error('Registration error:', error);
            toast.error((error as Error).message || 'An error occurred during registration');
        }
    };

    return (
        <div className={`flex min-h-screen justify-center items-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="w-full max-w-md">
                <h1 className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Register now!</h1>
                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md rounded-lg p-8`}>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                            <input 
                                type="text" 
                                id="name"
                                name='name' 
                                placeholder="Enter name" 
                                className={`mt-1 block w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400
                                           focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                           ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                                required 
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="photo" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Photo URL</label>
                            <input 
                                type="text" 
                                id="photo"
                                name='photo'
                                placeholder="Enter photo URL"
                                className={`mt-1 block w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400
                                           focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                           ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                                required 
                                value={formData.photo}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name='email' 
                                placeholder="Enter email" 
                                className={`mt-1 block w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400
                                           focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                           ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                                required 
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
                            <input
                                type="password"
                                id="password"
                                name='password'
                                placeholder="Enter password"
                                className={`mt-1 block w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400
                                           focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                           ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="confirm" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Confirm Password</label>
                            <input
                                type="password"
                                id="confirm"
                                name='confirm'
                                placeholder="Confirm password"
                                className={`mt-1 block w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400
                                           focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                           ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                                required
                                value={formData.confirm}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <Link href='/login' className={`text-sm ${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'}`}>
                                Already have an account
                            </Link>
                        </div>
                        
                        <div>
                            <button 
                                type="submit" 
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                REGISTER
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;