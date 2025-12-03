import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, Activity } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section: Image (Hidden on mobile) */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070&h=1380"
          alt="Pharmacy Lab"
        />
        <div className="absolute inset-0 bg-primary-600/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center p-16 text-white">
          <div className="mb-6 flex items-center gap-3">
            <Activity size={40} className="text-white" />
            <span className="text-3xl font-bold">PharmaFlow</span>
          </div>
          <h1 className="text-5xl font-black leading-tight tracking-tight mb-4">
            Gerenciamento inteligente para sua farmácia.
          </h1>
          <p className="max-w-lg text-lg text-white/90">
            Otimize suas operações, controle seu estoque e ofereça o melhor atendimento aos seus pacientes com nossa plataforma completa.
          </p>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="flex flex-1 flex-col justify-center bg-white px-6 py-12 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mb-10 lg:hidden flex items-center gap-2 text-primary-600">
             <Activity size={32} />
             <span className="text-2xl font-bold text-slate-900">PharmaFlow</span>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900">Bem-vindo de volta!</h2>
            <p className="mt-2 text-slate-500">Faça login para continuar.</p>
          </div>

          {/* Toggle Tabs */}
          <div className="mb-8 flex rounded-xl bg-slate-100 p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-all ${
                isLogin ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-all ${
                !isLogin ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Registro
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                E-mail ou Usuário
              </label>
              <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="email"
                  type="text"
                  required
                  className="block w-full rounded-lg border-0 bg-slate-50 py-3 pl-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  placeholder="Digite seu e-mail ou usuário"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Senha
              </label>
              <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="block w-full rounded-lg border-0 bg-slate-50 py-3 pl-10 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">
                  Lembrar-me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-semibold text-primary-600 hover:text-primary-500">
                  Esqueci minha senha
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-lg bg-primary-600 px-3 py-3 text-sm font-bold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Entrar
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Não tem uma conta?{' '}
            <a href="#" className="font-bold text-primary-600 hover:text-primary-500">
              Registre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;