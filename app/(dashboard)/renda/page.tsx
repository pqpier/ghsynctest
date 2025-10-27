"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DollarSign, Sparkles, Loader2 } from "lucide-react"

export default function RendaPage() {
  const [rendaFixa, setRendaFixa] = useState("")
  const [rendaVariavel, setRendaVariavel] = useState("")
  const router = useRouter()

  const formatCurrency = (value: string) => {
    // Remove everything that's not a number
    const numbers = value.replace(/\D/g, "")
    
    // Convert to number and format
    const numberValue = parseFloat(numbers) / 100
    
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(numberValue)
  }

  const handleRendaFixaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value)
    setRendaFixa(formatted)
  }

  const handleRendaVariavelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value)
    setRendaVariavel(formatted)
  }

  const parseToNumber = (currencyString: string) => {
    return parseFloat(
      currencyString
        .replace(/[$,\s]/g, "")
        .replace(/,/g, "")
    ) || 0
  }

  const handleSalvar = () => {
    const valorFixo = parseToNumber(rendaFixa)
    const valorVariavel = parseToNumber(rendaVariavel)
    const rendaTotal = valorFixo + valorVariavel

    // Calcular os baldes (50/30/20)
    const essenciais = rendaTotal * 0.5
    const prazeres = rendaTotal * 0.3
    const abundancia = rendaTotal * 0.2

    // Salvar no localStorage
    const dadosRenda = {
      rendaFixa: valorFixo,
      rendaVariavel: valorVariavel,
      rendaTotal,
      essenciais,
      prazeres,
      abundancia,
      // Também salvar com nomes em inglês para compatibilidade
      fixedIncome: valorFixo,
      variableIncome: valorVariavel,
      totalIncome: rendaTotal,
      essentials,
      desires: prazeres,
      abundance,
      dataAtualizacao: new Date().toISOString()
    }

    localStorage.setItem("rendaData", JSON.stringify(dadosRenda))
    
    // Redirecionar para o dashboard principal
    router.push("/")
  }

  const isValid = rendaFixa || rendaVariavel

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-purple-50 to-emerald-50 dark:from-amber-950/20 dark:via-purple-950/20 dark:to-emerald-950/20 p-4">
      <div className="max-w-md mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <DollarSign className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-4">
            Set Up Your Income Flow
          </h1>
          
          <p className="text-gray-600 mb-8">
            Tell us about your monthly income so we can create your personalized abundance buckets
          </p>
        </div>

        {/* Formulário */}
        <div className="space-y-6">
          {/* Renda Fixa */}
          <div className="bg-gradient-to-br from-amber-100/50 to-yellow-100/50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-700/50">
            <label className="block text-amber-800 dark:text-amber-200 font-semibold mb-3">
              💰 Fixed Income (Salary, Pension, etc.)
            </label>
            <input
              type="text"
              value={rendaFixa}
              onChange={handleRendaFixaChange}
              placeholder="$0.00"
              className="w-full px-4 py-3 text-lg font-semibold text-amber-900 dark:text-amber-100 bg-white/50 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 placeholder-amber-400 dark:placeholder-amber-500"
            />
            <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">
              Enter your guaranteed monthly income amount
            </p>
          </div>

          {/* Renda Variável */}
          <div className="bg-gradient-to-br from-purple-100/50 to-violet-100/50 dark:from-purple-900/20 dark:to-violet-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700/50">
            <label className="block text-purple-800 dark:text-purple-200 font-semibold mb-3">
              ✨ Variable Income (Freelances, Commissions, etc.)
            </label>
            <input
              type="text"
              value={rendaVariavel}
              onChange={handleRendaVariavelChange}
              placeholder="$0.00"
              className="w-full px-4 py-3 text-lg font-semibold text-purple-900 dark:text-purple-100 bg-white/50 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 placeholder-purple-400 dark:placeholder-purple-500"
            />
            <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">
              Average monthly amount from your extra income (optional)
            </p>
          </div>

          {/* Resumo dos Baldes */}
          {isValid && (
            <div className="bg-gradient-to-br from-emerald-100/50 to-green-100/50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-700/50">
              <h3 className="text-emerald-800 dark:text-emerald-200 font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Preview of Prosperity Buckets
              </h3>
              
              {(() => {
                const total = parseToNumber(rendaFixa) + parseToNumber(rendaVariavel)
                const essenciais = total * 0.5
                const prazeres = total * 0.3
                const abundancia = total * 0.2
                
                return (
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-xs font-medium text-amber-700 dark:text-amber-300">Essentials</div>
                      <div className="text-sm font-bold text-amber-900 dark:text-amber-100">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD"
                        }).format(essenciais)}
                      </div>
                      <div className="text-xs text-amber-600 dark:text-amber-400">50%</div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-medium text-purple-700 dark:text-purple-300">Pleasures</div>
                      <div className="text-sm font-bold text-purple-900 dark:text-purple-100">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD"
                        }).format(prazeres)}
                      </div>
                      <div className="text-xs text-purple-600 dark:text-purple-400">30%</div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Abundance</div>
                      <div className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD"
                        }).format(abundancia)}
                      </div>
                      <div className="text-xs text-emerald-600 dark:text-emerald-400">20%</div>
                    </div>
                  </div>
                )
              })()}
            </div>
          )}

          {/* Botão de Ação */}
          <button
            onClick={handleSalvar}
            disabled={!isValid}
            className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-200 transform ${
              isValid
                ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white hover:scale-105 shadow-lg"
                : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            } flex items-center justify-center gap-3`}
          >
            <Sparkles className={`w-6 h-6 ${isValid ? "text-white" : "text-gray-500 dark:text-gray-400"}`} />
            {isValid ? "✨ Activate Abundance ✨" : "Enter at least one income"}
          </button>

          {/* Mensagem Motivacional */}
          <div className="text-center p-6 bg-gradient-to-r from-amber-100/30 via-purple-100/30 to-emerald-100/30 dark:from-amber-900/10 dark:via-purple-900/10 dark:to-emerald-900/10 rounded-2xl border border-amber-200/50 dark:border-amber-700/30">
            <p className="text-purple-800 font-medium">
              "Your abundance energy is manifesting through these automatic calculations"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}