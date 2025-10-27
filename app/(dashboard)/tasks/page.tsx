'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  Heart,
  Star,
  Target,
  CheckCircle,
  Circle,
  Trash2,
  Sparkles,
  TrendingUp,
  Calendar,
  CheckSquare
} from 'lucide-react';

interface MetaAbundancia {
  id: string;
  titulo: string;
  descricao: string;
  valorAlvo: number;
  valorAtual: number;
  prazo: string;
  prioridade: 'baixa' | 'media' | 'alta';
  categoria: 'economia' | 'investimento' | 'gratidao' | 'manifestacao';
  concluida: boolean;
  dataCriacao: Date;
}

export default function MetasPage() {
  const [metas, setMetas] = useState<MetaAbundancia[]>([]);
  const [novaMeta, setNovaMeta] = useState({
    titulo: '',
    descricao: '',
    valorAlvo: 0,
    categoria: 'economia' as const,
    prioridade: 'media' as const,
    prazo: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [filtro, setFiltro] = useState<'todas' | 'pendentes' | 'concluidas'>('todas');

  useEffect(() => {
    // Load goals from localStorage
    const metasSalvas = localStorage.getItem('metasAbundancia');
    if (metasSalvas) {
      const parsed = JSON.parse(metasSalvas).map((meta: any) => ({
        ...meta,
        dataCriacao: new Date(meta.dataCriacao)
      }));
      setMetas(parsed);
    } else {
      // Default goals for demonstration
      const metasPadrao: MetaAbundancia[] = [
        {
          id: '1',
          titulo: 'Save $1,000 this month',
          descricao: 'Monthly savings goal for emergency fund',
          valorAlvo: 1000,
          valorAtual: 450,
          prazo: '2024-12-31',
          prioridade: 'alta',
          categoria: 'economia',
          concluida: false,
          dataCriacao: new Date()
        },
        {
          id: '2',
          titulo: 'Practice financial gratitude',
          descricao: 'List 3 things I am grateful for financially every day',
          valorAlvo: 90,
          valorAtual: 67,
          prazo: '2024-12-31',
          prioridade: 'media',
          categoria: 'gratidao',
          concluida: false,
          dataCriacao: new Date()
        },
        {
          id: '3',
          titulo: 'Invest $500 in fixed income',
          descricao: 'Apply part of the abundance bucket to safe investments',
          valorAlvo: 500,
          valorAtual: 500,
          prazo: '2024-12-15',
          prioridade: 'media',
          categoria: 'investimento',
          concluida: true,
          dataCriacao: new Date()
        }
      ];
      setMetas(metasPadrao);
      localStorage.setItem('metasAbundancia', JSON.stringify(metasPadrao));
    }
  }, []);

  const salvarMetas = (novasMetas: MetaAbundancia[]) => {
    setMetas(novasMetas);
    localStorage.setItem('metasAbundancia', JSON.stringify(novasMetas));
  };

  const adicionarMeta = () => {
    if (!novaMeta.titulo.trim()) return;

    const meta: MetaAbundancia = {
      id: Date.now().toString(),
      titulo: novaMeta.titulo,
      descricao: novaMeta.descricao,
      valorAlvo: novaMeta.valorAlvo,
      valorAtual: 0,
      prazo: novaMeta.prazo,
      prioridade: novaMeta.prioridade,
      categoria: novaMeta.categoria,
      concluida: false,
      dataCriacao: new Date()
    };

    const novasMetas = [...metas, meta];
    salvarMetas(novasMetas);

    setNovaMeta({
      titulo: '',
      descricao: '',
      valorAlvo: 0,
      categoria: 'economia',
      prioridade: 'media',
      prazo: ''
    });
    setShowForm(false);
  };

  const toggleMeta = (id: string) => {
    const novasMetas = metas.map(meta =>
      meta.id === id
        ? { ...meta, concluida: !meta.concluida }
        : meta
    );
    salvarMetas(novasMetas);
  };

  const deletarMeta = (id: string) => {
    const novasMetas = metas.filter(meta => meta.id !== id);
    salvarMetas(novasMetas);
  };

  const atualizarProgresso = (id: string, novoValor: number) => {
    const novasMetas = metas.map(meta =>
      meta.id === id
        ? { ...meta, valorAtual: Math.max(0, novoValor) }
        : meta
    );
    salvarMetas(novasMetas);
  };

  const getIconeCategoria = (categoria: string) => {
    switch (categoria) {
      case 'economia': return Target;
      case 'investimento': return TrendingUp;
      case 'gratidao': return Heart;
      case 'manifestacao': return Sparkles;
      default: return Star;
    }
  };

  const getCorPrioridade = (prioridade: string) => {
    switch (prioridade) {
      case 'alta': return 'text-red-600 bg-red-50 border-red-200';
      case 'media': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'baixa': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getCorCategoria = (categoria: string) => {
    switch (categoria) {
      case 'economia': return 'text-blue-600 bg-blue-50';
      case 'investimento': return 'text-emerald-600 bg-emerald-50';
      case 'gratidao': return 'text-pink-600 bg-pink-50';
      case 'manifestacao': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(valor);
  };

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('en-US');
  };

  const metasFiltradas = metas.filter(meta => {
    if (filtro === 'pendentes') return !meta.concluida;
    if (filtro === 'concluidas') return meta.concluida;
    return true;
  });

  const progressoGeral = metas.length > 0
    ? Math.round((metas.filter(m => m.concluida).length / metas.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4">
      <div className="max-w-md mx-auto pt-8 pb-24">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎯</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-2">
            Abundance Goals
          </h1>
          <p className="text-gray-600">
            Manifest your financial achievements
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="mb-6 bg-gradient-to-r from-violet-50 to-purple-100 border-violet-300">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <CheckSquare className="w-5 h-5 text-violet-600 mr-2" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-900 mb-2">
                {progressoGeral}%
              </div>
              <div className="bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-gradient-to-r from-violet-400 to-purple-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressoGeral}%` }}
                />
              </div>
              <p className="text-sm text-violet-700">
                {metas.filter(m => m.concluida).length} of {metas.length} goals achieved
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Filters and Add Button */}
        <div className="flex gap-2 mb-6">
          <Button
            onClick={() => setFiltro('todas')}
            variant={filtro === 'todas' ? 'default' : 'outline'}
            size="sm"
            className="flex-1"
          >
            All ({metas.length})
          </Button>
          <Button
            onClick={() => setFiltro('pendentes')}
            variant={filtro === 'pendentes' ? 'default' : 'outline'}
            size="sm"
            className="flex-1"
          >
            Pending ({metas.filter(m => !m.concluida).length})
          </Button>
          <Button
            onClick={() => setFiltro('concluidas')}
            variant={filtro === 'concluidas' ? 'default' : 'outline'}
            size="sm"
            className="flex-1"
          >
            Completed ({metas.filter(m => m.concluida).length})
          </Button>
        </div>

        {!showForm ? (
          <Button
            onClick={() => setShowForm(true)}
            className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-medium py-3 mb-6"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Abundance Goal
          </Button>
        ) : (
          <Card className="mb-6 bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Create New Goal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <input
                type="text"
                placeholder="Goal title (e.g., Save $500 this month)"
                value={novaMeta.titulo}
                onChange={(e) => setNovaMeta({...novaMeta, titulo: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />

              <textarea
                placeholder="Goal description..."
                value={novaMeta.descricao}
                onChange={(e) => setNovaMeta({...novaMeta, descricao: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows={3}
              />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target Value ($)
                  </label>
                  <input
                    type="number"
                    value={novaMeta.valorAlvo}
                    onChange={(e) => setNovaMeta({...novaMeta, valorAlvo: Number(e.target.value)})}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deadline
                  </label>
                  <input
                    type="date"
                    value={novaMeta.prazo}
                    onChange={(e) => setNovaMeta({...novaMeta, prazo: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 'economia', label: '💰 Savings' },
                    { value: 'investimento', label: '📈 Investment' },
                    { value: 'gratidao', label: '🙏 Gratitude' },
                    { value: 'manifestacao', label: '✨ Manifestation' }
                  ].map(cat => (
                    <button
                      key={cat.value}
                      onClick={() => setNovaMeta({...novaMeta, categoria: cat.value as MetaAbundancia['categoria']})}
                      className={`p-2 rounded border text-sm ${
                        novaMeta.categoria === cat.value
                          ? 'bg-purple-100 border-purple-300 text-purple-700'
                          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={adicionarMeta} className="flex-1 bg-purple-600 hover:bg-purple-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Create Goal
                </Button>
                <Button onClick={() => setShowForm(false)} variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Goals List */}
        <div className="space-y-4">
          {metasFiltradas.length === 0 ? (
            <Card className="bg-gradient-to-r from-amber-50 to-emerald-50 border-amber-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌟</div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">
                    No goals yet
                  </h3>
                  <p className="text-amber-700 mb-4">
                    Start creating your first abundance goal and manifest your prosperity!
                  </p>
                  <Button
                    onClick={() => setShowForm(true)}
                    className="bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-600 hover:to-emerald-600"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create First Goal
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            metasFiltradas.map((meta) => {
              const IconeCategoria = getIconeCategoria(meta.categoria);
              const progresso = meta.valorAlvo > 0 ? Math.min((meta.valorAtual / meta.valorAlvo) * 100, 100) : 0;

              return (
                <Card key={meta.id} className={`border-l-4 ${
                  meta.concluida
                    ? 'border-l-green-500 bg-green-50'
                    : meta.prioridade === 'alta'
                      ? 'border-l-red-500 bg-red-50'
                      : meta.prioridade === 'media'
                        ? 'border-l-amber-500 bg-amber-50'
                        : 'border-l-green-500 bg-green-50'
                }`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => toggleMeta(meta.id)}
                        className={`mt-1 ${meta.concluida ? 'text-green-600' : 'text-gray-400'}`}
                      >
                        {meta.concluida ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Circle className="w-5 h-5" />
                        )}
                      </button>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className={`font-bold ${
                              meta.concluida ? 'line-through text-gray-500' : 'text-gray-900'
                            }`}>
                              {meta.titulo}
                            </h3>
                            <p className={`text-sm ${
                              meta.concluida ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {meta.descricao}
                            </p>
                          </div>
                          <button
                            onClick={() => deletarMeta(meta.id)}
                            className="text-red-500 hover:text-red-700 ml-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <Badge className={`${getCorCategoria(meta.categoria)} border-0`}>
                            <IconeCategoria className="w-3 h-3 mr-1" />
                            {meta.categoria === 'economia' ? 'savings' :
                             meta.categoria === 'investimento' ? 'investment' :
                             meta.categoria === 'gratidao' ? 'gratitude' :
                             meta.categoria === 'manifestacao' ? 'manifestation' : meta.categoria}
                          </Badge>
                          <Badge variant="outline" className={getCorPrioridade(meta.prioridade)}>
                            {meta.prioridade === 'alta' ? 'high' :
                             meta.prioridade === 'media' ? 'medium' :
                             meta.prioridade === 'baixa' ? 'low' : meta.prioridade}
                          </Badge>
                          {meta.prazo && (
                            <Badge variant="outline" className="text-xs">
                              <Calendar className="w-3 h-3 mr-1" />
                              {formatarData(meta.prazo)}
                            </Badge>
                          )}
                        </div>

                        {meta.valorAlvo > 0 && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-medium">
                                {formatarMoeda(meta.valorAtual)} / {formatarMoeda(meta.valorAlvo)}
                              </span>
                            </div>
                            <div className="bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-purple-400 to-violet-500 h-2 rounded-full transition-all"
                                style={{ width: `${progresso}%` }}
                              />
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-500">
                                {Math.round(progresso)}% completed
                              </span>
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => atualizarProgresso(meta.id, meta.valorAtual - 10)}
                                  className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                                >
                                  -10
                                </button>
                                <button
                                  onClick={() => atualizarProgresso(meta.id, meta.valorAtual + 10)}
                                  className="text-xs px-2 py-1 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded"
                                >
                                  +10
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Motivational Message */}
        <Card className="mt-6 bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl mb-2">💫</div>
              <p className="text-pink-800 font-medium">
                "Every small financial victory is a step toward your infinite abundance"
              </p>
              <p className="text-sm text-pink-600 mt-2">
                Keep creating and achieving! ✨
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}