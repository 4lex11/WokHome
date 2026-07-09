import { useState } from 'react'
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft } from 'lucide-react'

interface AuthProps {
  onLoginSuccess: (userData: { email: string; name: string }) => void
  onBack: () => void
}

export default function Auth({ onLoginSuccess, onBack }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida'
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres'
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    // Simular llamada a API
    setTimeout(() => {
      onLoginSuccess({
        email: formData.email,
        name: isLogin ? formData.email.split('@')[0] : formData.name,
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={onBack}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-foreground" />
          </button>
          <h1 className="text-3xl font-bold text-foreground">
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h1>
        </div>

        {/* Form Card */}
        <div className="bg-card border border-border rounded-xl p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field (Register Only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Juan Pérez"
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Correo Electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field (Register Only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Confirmar Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting
                ? 'Procesando...'
                : isLogin
                  ? 'Iniciar Sesión'
                  : 'Crear Cuenta'}
            </button>
          </form>

          {/* Toggle Form */}
          <div className="text-center text-sm">
            <span className="text-foreground/70">
              {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
            </span>
            <button
              onClick={() => {
                setIsLogin(!isLogin)
                setFormData({ name: '', email: '', password: '', confirmPassword: '' })
                setErrors({})
              }}
              className="text-primary font-semibold hover:underline"
            >
              {isLogin ? 'Registrate' : 'Inicia sesión'}
            </button>
          </div>

          {/* Demo Info */}
          <div className="bg-muted/50 border border-border/50 rounded-lg p-4">
            <p className="text-xs text-foreground/70 mb-2 font-semibold">Datos de prueba:</p>
            <p className="text-xs text-foreground/60">Email: demo@example.com</p>
            <p className="text-xs text-foreground/60">Contraseña: 123456</p>
          </div>
        </div>

        {/* Branding */}
        <div className="text-center mt-8">
          <p className="text-sm text-foreground/70">
            Tu cuenta está segura con <span className="font-semibold text-primary">Wok&Home</span>
          </p>
        </div>
      </div>
    </div>
  )
}
