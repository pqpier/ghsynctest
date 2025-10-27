"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Square,
  RotateCcw,
  Timer,
  Heart,
  Sparkles,
  Volume2,
  VolumeX,
  Moon,
  Sun,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type MeditationType = "abundance" | "gratitude" | "manifestation" | "breath";

interface MeditationConfig {
  abundance: number;
  gratitude: number;
  manifestation: number;
  breath: number;
}

interface MeditationInfo {
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const Meditation: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(10 * 60); // 10 minutes default
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentMeditation, setCurrentMeditation] = useState<MeditationType>("abundance");
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [breathPhase, setBreathPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [breathCycle, setBreathCycle] = useState<number>(0);

  // Meditation configurations (in minutes)
  const meditationConfig: MeditationConfig = {
    abundance: 15,
    gratitude: 10,
    manifestation: 12,
    breath: 5,
  };

  // Update timer when meditation changes and timer is not running
  useEffect(() => {
    if (!isRunning) {
      const newTime = meditationConfig[currentMeditation] * 60;
      setTimeLeft(newTime);
    }
  }, [currentMeditation, isRunning, meditationConfig]);

  // Breathing animation for breath meditation
  useEffect(() => {
    if (isRunning && currentMeditation === "breath") {
      const interval = setInterval(() => {
        setBreathCycle(prev => prev + 1);
      }, 4000); // 4 seconds per breath cycle

      return () => clearInterval(interval);
    }
  }, [isRunning, currentMeditation]);

  // Update breath phase based on cycle
  useEffect(() => {
    if (currentMeditation === "breath") {
      const phase = breathCycle % 4;
      if (phase === 0) setBreathPhase("inhale");
      else if (phase === 1) setBreathPhase("hold");
      else if (phase === 2) setBreathPhase("exhale");
      else setBreathPhase("hold");
    }
  }, [breathCycle, currentMeditation]);

  // Start/Stop meditation
  const toggleMeditation = useCallback(() => {
    setIsRunning(!isRunning);
  }, [isRunning]);

  // Reset meditation
  const resetMeditation = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(meditationConfig[currentMeditation] * 60);
    setBreathCycle(0);
    setBreathPhase("inhale");
  }, [currentMeditation, meditationConfig]);

  // Skip to next meditation
  const skipMeditation = useCallback(() => {
    const meditations: MeditationType[] = ["abundance", "gratitude", "manifestation", "breath"];
    const currentIndex = meditations.indexOf(currentMeditation);
    const nextIndex = (currentIndex + 1) % meditations.length;
    setCurrentMeditation(meditations[nextIndex]);
    setIsRunning(false);
    setBreathCycle(0);
    setBreathPhase("inhale");
  }, [currentMeditation]);

  // Format time display
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Get meditation info
  const getMeditationInfo = (): MeditationInfo => {
    switch (currentMeditation) {
      case "abundance":
        return {
          title: "Abundance Flow",
          subtitle: "Connect with the infinite flow of prosperity",
          color: "text-amber-600 dark:text-amber-500",
          bgColor: "bg-amber-50 dark:bg-card dark:border",
          icon: Sparkles,
          description: "Visualize golden light flowing through you, attracting wealth and opportunities."
        };
      case "gratitude":
        return {
          title: "Gratitude Practice",
          subtitle: "Cultivate thankfulness for what you have",
          color: "text-emerald-600 dark:text-emerald-500",
          bgColor: "bg-emerald-50 dark:bg-card dark:border",
          icon: Heart,
          description: "Express gratitude for your current blessings and watch more flow to you."
        };
      case "manifestation":
        return {
          title: "Manifestation",
          subtitle: "Align your energy with your desires",
          color: "text-purple-600 dark:text-purple-500",
          bgColor: "bg-purple-50 dark:bg-card dark:border",
          icon: Moon,
          description: "Focus your intention and believe that what you want is already yours."
        };
      case "breath":
        return {
          title: "Breath Awareness",
          subtitle: "Find peace in the present moment",
          color: "text-blue-600 dark:text-blue-500",
          bgColor: "bg-blue-50 dark:bg-card dark:border",
          icon: Waves,
          description: "Use conscious breathing to center yourself and manifest from a place of calm."
        };
      default:
        return {
          title: "Meditation",
          subtitle: "",
          color: "text-gray-600 dark:text-muted-foreground",
          bgColor: "bg-gray-50 dark:bg-card dark:border",
          icon: Timer,
          description: ""
        };
    }
  };

  // Timer countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            // Meditation completed
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const meditationInfo = getMeditationInfo();
  const progress =
    ((meditationConfig[currentMeditation] * 60 - timeLeft) /
      (meditationConfig[currentMeditation] * 60)) *
    100;

  return (
    <div className="bg-background pb-24">
      {/* Header */}
      <div className="border-b bg-card px-4 py-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-lg font-semibold">Abundance Meditation</h1>
          <p className="text-sm text-muted-foreground">
            Connect with your highest self and manifest prosperity
          </p>
        </div>
      </div>

      {/* Main Meditation */}
      <div className="max-w-md mx-auto p-6">
        {/* Meditation Selector */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { type: "abundance", label: "Abundance", emoji: "✨" },
            { type: "gratitude", label: "Gratitude", emoji: "🙏" },
            { type: "manifestation", label: "Manifest", emoji: "🌙" },
            { type: "breath", label: "Breath", emoji: "🌊" },
          ].map((med) => (
            <Button
              key={med.type}
              onClick={() => {
                setCurrentMeditation(med.type as MeditationType);
                setIsRunning(false);
                setBreathCycle(0);
                setBreathPhase("inhale");
              }}
              variant={currentMeditation === med.type ? "default" : "outline"}
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-3"
            >
              <span className="text-lg">{med.emoji}</span>
              <span className="text-xs">{med.label}</span>
            </Button>
          ))}
        </div>

        {/* Meditation Info */}
        <Card className={`${meditationInfo.bgColor} rounded-3xl p-6 mb-6`}>
          <CardContent className="p-0 text-center">
            <div className="flex justify-center mb-4">
              <meditationInfo.icon className={`h-12 w-12 ${meditationInfo.color}`} />
            </div>

            <h2 className={`text-2xl font-bold ${meditationInfo.color} mb-2`}>
              {meditationInfo.title}
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              {meditationInfo.subtitle}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {meditationInfo.description}
            </p>

            {/* Special breathing visualization for breath meditation */}
            {currentMeditation === "breath" && (
              <div className="mb-6">
                <div className={`text-6xl mb-4 transition-all duration-2000 ${
                  breathPhase === "inhale" ? "scale-125 text-blue-500" :
                  breathPhase === "exhale" ? "scale-75 text-blue-300" :
                  "scale-100 text-blue-400"
                }`}>
                  {breathPhase === "inhale" ? "🫁" : breathPhase === "exhale" ? "🫁" : "⏸️"}
                </div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {breathPhase === "inhale" ? "Breathe In..." :
                   breathPhase === "hold" ? "Hold..." :
                   "Breathe Out..."}
                </p>
              </div>
            )}

            {/* Circular Progress */}
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-200 dark:text-muted"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                  className={meditationInfo.color.replace("text-", "text-")}
                  strokeLinecap="round"
                />
              </svg>

              {/* Time Display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-foreground mb-1">
                    {formatTime(timeLeft)}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {currentMeditation === "breath" ? "BREATH" : "MEDITATE"}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <div className="space-y-4">
          {/* Main Control */}
          <div className="flex justify-center">
            <Button
              onClick={toggleMeditation}
              size="lg"
              className={`w-20 h-20 rounded-full ${
                isRunning
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-amber-500 hover:bg-amber-600"
              }`}
            >
              {isRunning ? (
                <Pause className="h-8 w-8" />
              ) : (
                <Play className="h-8 w-8 ml-1" />
              )}
            </Button>
          </div>

          {/* Secondary Controls */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={resetMeditation}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>

            <Button
              onClick={skipMeditation}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Square className="h-4 w-4" />
              Next
            </Button>

            <Button
              onClick={() => setSoundEnabled(!soundEnabled)}
              variant="outline"
              size="sm"
              className={soundEnabled ? "text-amber-600 dark:text-primary" : "text-gray-400 dark:text-muted-foreground"}
            >
              {soundEnabled ? (
                <Volume2 className="h-4 w-4" />
              ) : (
                <VolumeX className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-amber-600 dark:text-primary">
              15
            </div>
            <div className="text-xs text-muted-foreground">Sessions Today</div>
          </Card>

          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-emerald-600 dark:text-green-500">
              7
            </div>
            <div className="text-xs text-muted-foreground">Days Streak</div>
          </Card>
        </div>

        {/* Next Meditation Preview */}
        <Card className="mt-6 p-4">
          <CardContent className="p-0 text-center">
            <p className="text-sm text-muted-foreground">
              Next meditation:{" "}
              <span className="font-medium">
                {currentMeditation === "abundance" ? "Gratitude Practice" :
                 currentMeditation === "gratitude" ? "Manifestation" :
                 currentMeditation === "manifestation" ? "Breath Awareness" :
                 "Abundance Flow"}
              </span>
            </p>
          </CardContent>
        </Card>

        {/* Motivational Quote */}
        <Card className="mt-6 bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl mb-2">💫</div>
              <p className="text-violet-800 font-medium">
                "Your breath is the bridge between your thoughts and your manifestations"
              </p>
              <p className="text-sm text-violet-600 mt-2">
                Breathe deeply and watch your dreams unfold ✨
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Meditation;