'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Bell,
  Moon,
  Sun,
  Heart,
  Target,
  Smartphone,
  Mail,
  Shield,
  Star,
  Clock,
  Check
} from 'lucide-react';

interface RendaData {
  total: number;
  essenciais: number;
  prazeres: number;
  abundancia: number;
}

export default function SettingsPage() {
  const [rendaData, setRendaData] = useState<RendaData | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<boolean>(true);
  const [lembretesGratidao, setLembretesGratidao] = useState<boolean>(true);
  const [metaDiariaEconomia, setMetaDiariaEconomia] = useState<number>(50);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('rendaData');
      if (savedData) {
        setRendaData(JSON.parse(savedData));
      }

      // Load saved preferences
      const savedPrefs = localStorage.getItem('fluxoAbundanciaPrefs');
      if (savedPrefs) {
        const prefs = JSON.parse(savedPrefs);
        setDarkMode(prefs.darkMode || false);
        setNotifications(prefs.notifications || true);
        setLembretesGratidao(prefs.lembretesGratidao || true);
        setMetaDiariaEconomia(prefs.metaDiariaEconomia || 50);
      }
    }
  }, []);

  const toggleDarkMode = (): void => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark');

    // Save preference
    const prefs = JSON.parse(localStorage.getItem('fluxoAbundanciaPrefs') || '{}');
    prefs.darkMode = newDarkMode;
    localStorage.setItem('fluxoAbundanciaPrefs', JSON.stringify(prefs));
  };

  const salvarPreferencias = () => {
    const prefs = {
      darkMode,
      notifications,
      lembretesGratidao,
      metaDiariaEconomia
    };
    localStorage.setItem('fluxoAbundanciaPrefs', JSON.stringify(prefs));

    // Show visual feedback
    const button = document.getElementById('save-btn');
    if (button) {
      button.innerHTML = '<span class="flex items-center"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Saved!</span>';
      setTimeout(() => {
        button.innerHTML = '<span class="flex items-center"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Save Preferences</span>';
      }, 2000);
    }
  };

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(valor);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4">
      <div className="max-w-md mx-auto pt-8 pb-24">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">⚙️</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-2">
            Settings
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage your preferences
          </p>
        </div>

        {/* Profile */}
        <Card className="mb-6 bg-gradient-to-r from-purple-50 to-violet-100 border-purple-300">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <User className="w-5 h-5 text-purple-600 mr-2" />
              Your Abundance Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-violet-600 flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-white" />
              </div>
              <p className="font-medium text-gray-900">Manifestor in Progress</p>
              <p className="text-sm text-gray-600">
                {rendaData ? `Monthly income: ${formatarMoeda(rendaData.total)}` : 'Set up your income to begin'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <div className="space-y-4">
          {/* Dark Mode */}
          <Card className="bg-white border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {darkMode ? (
                    <Moon className="w-5 h-5 text-purple-600" />
                  ) : (
                    <Sun className="w-5 h-5 text-amber-600" />
                  )}
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-gray-600">Interface for manifestation nights</p>
                  </div>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    darkMode ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-white border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="font-medium">Abundance Notifications</p>
                    <p className="text-sm text-gray-600">Daily prosperity reminders</p>
                  </div>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications ? 'bg-emerald-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Gratitude Reminders */}
          <Card className="bg-white border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-pink-600" />
                  <div>
                    <p className="font-medium">Gratitude Reminders</p>
                    <p className="text-sm text-gray-600">Daily practice of financial appreciation</p>
                  </div>
                </div>
                <button
                  onClick={() => setLembretesGratidao(!lembretesGratidao)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    lembretesGratidao ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      lembretesGratidao ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Daily Savings Goal */}
          <Card className="bg-white border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-medium">Daily Savings Goal</p>
                    <p className="text-sm text-gray-600">How much to save per day</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-amber-900">
                  {formatarMoeda(metaDiariaEconomia)}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMetaDiariaEconomia(Math.max(5, metaDiariaEconomia - 5))}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-medium">
                    {metaDiariaEconomia}
                  </span>
                  <button
                    onClick={() => setMetaDiariaEconomia(Math.min(500, metaDiariaEconomia + 5))}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About the App */}
          <Card className="bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-bold text-lg text-violet-900 mb-2">
                  About Abundance Flow
                </h3>
                <p className="text-violet-700 mb-4">
                  Your companion on the journey of financial manifestation through the Law of Attraction.
                </p>
                <div className="flex justify-center gap-4 text-sm">
                  <Badge variant="outline" className="border-violet-300 text-violet-700">
                    50/30/20 Method
                  </Badge>
                  <Badge variant="outline" className="border-violet-300 text-violet-700">
                    Law of Attraction
                  </Badge>
                  <Badge variant="outline" className="border-violet-300 text-violet-700">
                    Financial Gratitude
                  </Badge>
                </div>
                <p className="text-xs text-violet-600 mt-3">
                  Version 1.0.0 - Grounded, manifesting prosperity
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <Button
            id="save-btn"
            onClick={salvarPreferencias}
            className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-medium py-3"
          >
            <Check className="w-4 h-4 mr-2" />
            Save Preferences
          </Button>
        </div>

        {/* Motivational Message */}
        <Card className="mt-6 bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl mb-2">💫</div>
              <p className="text-emerald-800 font-medium">
                "Your settings are an extension of your abundance energy"
              </p>
              <p className="text-sm text-emerald-600 mt-2">
                Every adjustment is a step towards prosperity! ✨
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}