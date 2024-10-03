"use client"

import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useTheme } from '@/context/ThemeContext';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login: React.FC = () => {
    const router = useRouter();
    const { isDarkMode } = useTheme();
    const { loginWithEmailAndPassword, loginWithPopUp } = useContext(AuthContext);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const email = (form.email as HTMLInputElement).value;
        const password = (form.password as HTMLInputElement).value;

        try {
            const result = await loginWithEmailAndPassword(email, password);
            toast.success('Login successful');
            console.log(result.user);
            router.push('/');
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await loginWithPopUp(googleProvider);
            toast.success('Login successful');
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const handleGithubSignIn = async () => {
        try {
            const result = await loginWithPopUp(githubProvider);
            toast.success('Login successful');
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`flex min-h-screen justify-center items-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="w-full max-w-md">
                <h1 className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Login now!</h1>
                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md rounded-lg p-8`}>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                            <input type="email" id="email" name="email" required 
                                   className={`mt-1 block w-full px-3 py-2 rounded-md text-sm shadow-sm placeholder-gray-400
                                          focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                          ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                                   placeholder="enter email" />
                        </div>
                        <div>
                            <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
                            <input type="password" id="password" name="password" required 
                                   className={`mt-1 block w-full px-3 py-2 rounded-md text-sm shadow-sm placeholder-gray-400
                                          focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                                          ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                                   placeholder="enter password" />
                        </div>
                        <div className="flex items-center justify-between">
                            <Link href="/forgot-password" className={`text-sm ${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'}`}>Forgot password?</Link>
                            <Link href="/register" className={`text-sm ${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'}`}>Create an account</Link>
                        </div>
                        <button type="submit" 
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            LOGIN
                        </button>
                    </form>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className={`w-full border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className={`px-2 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-500'}`}>OR</span>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center space-x-6">
                            <button onClick={handleGoogleSignIn} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-gray-500'}`}>
                                <span className="sr-only">Sign in with Google</span>
                                <FaGoogle className="h-6 w-6" />
                            </button>
                            <button onClick={handleGithubSignIn} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-gray-500'}`}>
                                <span className="sr-only">Sign in with GitHub</span>
                                <FaGithub className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;