"use client"

import { useState, useEffect } from "react"
import { 
  DollarSign, 
  TrendingUp, 
  Home, 
  Heart,
  Sparkles,
  Droplet
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  // Estados locais
  const [totalIncome, setTotalIncome] = useState(0)
  const [buckets, setBuckets] = useState({
    essentials: 0,
    desires: 0,
    abundance: 0
  })
  
  const router = useRouter()
  
  // Micro-ações LoA
  const microActions = [
    "Guardar R$ 5 em uma moedinha de prosperidade",
    "Anotar 3 coisas pelas quais sou grato financeiramente",
    "Pedir um desconto em alguma compra hoje",
    "Visualizar sua conta bancária crescendo por 2 minutos",
    "Organizar uma gaveta ou espaço como ritual de abundância",
    "Doar R$ 1 para alguém que precisa",
    "Anotar uma ideia para ganhar renda extra",
    "Calcular quanto você economizou essa semana"
  ]

  const getMicroActionOfDay = () => {
    const today = new Date().getDate()
    return microActions[today % microActions.length]
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  // Carregar dados salvos
  useEffect(() => {
    const savedTotalIncome = localStorage.getItem('totalIncome')
    if (savedTotalIncome) {
      const total = parseFloat(savedTotalIncome)
      setTotalIncome(total)
      
      // Calcular baldes automaticamente
      setBuckets({
        essentials: total * 0.5,
        desires: total * 0.3,
        abundance: total * 0.2
      })
    }
  }, [])

  // Se não há dados, redirecionar para cadastro
  if (totalIncome === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-purple-50 to-emerald-50 dark:from-amber-950/20 dark:via-purple-950/20 dark:to-emerald-950/20 p-4 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 dark:from-purple-400 dark:to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <DollarSign className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-4">
            Bem-vindo ao Fluxo de Abundância!
          </h1>
          
          <p className="text-purple-600 dark:text-purple-300 mb-6">
            Vamos começar sua jornada de abundância cadastrando sua renda
          </p>
          
          <button
            onClick={() => router.push('/renda')}
            className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
          >
            <Sparkles className="w-5 h-5" />
            Cadastrar Renda
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-md mx-auto pt-8 pb-20">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-2">
            Fluxo de Abundância
          </h1>
          <p className="text-purple-600 dark:text-purple-300">
            Renda Total: {formatCurrency(totalIncome)}
          </p>
        </div>

        {/* Baldes da Prosperidade */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {/* Balde Essenciais - Dourado */}
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 p-4 rounded-xl border border-amber-200 dark:border-amber-700/50">
            <div className="text-center">
              <div className="w-8 h-8 bg-amber-500 dark:bg-amber-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Home className="w-4 h-4 text-white dark:text-amber-900" />
              </div>
              <h3 className="text-xs font-semibold text-amber-800 dark:text-amber-200 mb-1">Essenciais</h3>
              <p className="text-lg font-bold text-amber-900 dark:text-amber-100">
                {formatCurrency(buckets.essentials)}
              </p>
              <p className="text-xs text-amber-600 dark:text-amber-300">50% da renda</p>
            </div>
          </div>

          {/* Balde Prazeres - Violeta */}
          <div className="bg-gradient-to-br from-purple-100 to-violet-200 dark:from-purple-900/30 dark:to-violet-800/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700/50">
            <div className="text-center">
              <div className="w-8 h-8 bg-purple-500 dark:bg-purple-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white dark:text-purple-900" />
              </div>
              <h3 className="text-xs font-semibold text-purple-800 dark:text-purple-200 mb-1">Prazeres</h3>
              <p className="text-lg font-bold text-purple-900 dark:text-purple-100">
                {formatCurrency(buckets.desires)}
              </p>
              <p className="text-xs text-purple-600 dark:text-purple-300">30% da renda</p>
            </div>
          </div>

          {/* Balde Abundância - Verde Esmeralda */}
          <div className="bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-900/30 dark:to-green-800/30 p-4 rounded-xl border border-emerald-200 dark:border-emerald-700/50">
            <div className="text-center">
              <div className="w-8 h-8 bg-emerald-500 dark:bg-emerald-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white dark:text-emerald-900" />
              </div>
              <h3 className="text-xs font-semibold text-emerald-800 dark:text-emerald-200 mb-1">Abundância</h3>
              <p className="text-lg font-bold text-emerald-900 dark:text-emerald-100">
                {formatCurrency(buckets.abundance)}
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-300">20% da renda</p>
            </div>
          </div>
        </div>

        {/* Medidor de Abundância - Copo Enchendo */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-950/50 dark:to-green-900/30 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-700/50 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
              <Droplet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Copo da Abundância
            </h2>
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              {Math.round((buckets.abundance / (totalIncome * 0.2)) * 100)}% preenchido
            </span>
          </div>
          
          <div className="relative h-32 bg-emerald-100 dark:bg-emerald-900/20 rounded-2xl overflow-hidden border-2 border-emerald-200 dark:border-emerald-700">
            <div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500 via-emerald-400 to-emerald-300 dark:from-emerald-600 dark:via-emerald-500 dark:to-emerald-400 transition-all duration-1000 ease-out"
              style={{ height: `${Math.min((buckets.abundance / (totalIncome * 0.2)) * 100, 100)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 animate-pulse" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-emerald-800 dark:text-emerald-100 drop-shadow-lg">
                {formatCurrency(buckets.abundance)}
              </span>
            </div>
            {/* Ondas da Abundância */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 dark:from-emerald-500 dark:via-green-400 dark:to-emerald-500 opacity-60 animate-pulse" />
          </div>
          
          <p className="text-center text-sm text-emerald-600 dark:text-emerald-300 mt-3">
            ✨ Sua energia de abundância está se manifestando
          </p>
        </div>

        {/* Micro-ação LoA do Dia */}
        <div className="bg-gradient-to-r from-purple-100 via-violet-50 to-purple-100 dark:from-purple-900/30 dark:via-violet-900/20 dark:to-purple-900/30 p-6 rounded-2xl border border-purple-200 dark:border-purple-700/50 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 dark:from-purple-400 dark:to-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-2">
                ✨ Micro-ação de Prosperidade Hoje
              </h3>
              <p className="text-purple-700 dark:text-purple-300 text-sm mb-3">
                {getMicroActionOfDay()}
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105">
                ✓ Feito!
              </button>
            </div>
          </div>
        </div>

        {/* Mensagem Motivacional */}
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-700/50 text-center">
          <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">
            🌟 Energia de Abundância Ativa
          </h3>
          <p className="text-amber-700 dark:text-amber-300 text-sm">
            Você está alinhando sua energia financeira com a prosperidade. Continue nutrindo essa vibração positiva!
          </p>
        </div>
      </div>
    </div>
  )
}