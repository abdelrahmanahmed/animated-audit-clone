import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center opacity-0 animate-fade-up"
          style={{ animationDelay: `${0.4 + index * 0.1}s` }}
        >
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg bg-card/50 backdrop-blur-sm border border-border/30 flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover:bg-card/70">
              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            {/* Subtle glow on active second */}
            {unit.label === "Seconds" && (
              <div className="absolute inset-0 rounded-lg bg-primary/5 animate-pulse-soft pointer-events-none" />
            )}
          </div>
          <span className="mt-2 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
