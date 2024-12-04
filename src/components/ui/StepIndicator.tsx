'use client';

import { Text } from './Text';

interface StepIndicatorProps {
  steps: Array<{
    id: string;
    title: string;
    icon: string;
    description: string;
  }>;
  currentStep: string;
  onStepClick: (stepId: string) => void;
}

export function StepIndicator({ steps, currentStep, onStepClick }: StepIndicatorProps) {
  const currentIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <nav aria-label="Form Steps" className="relative mx-auto max-w-3xl px-4">
      <div className="flex items-center justify-between" role="tablist">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isClickable = index <= currentIndex;

          return (
            <div key={step.id} className="flex flex-1 items-center">
              <div className="relative flex flex-col items-center">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  aria-controls={`${step.id}-panel`}
                  aria-label={`${step.title} - ${isCurrent ? 'Current Step' : isCompleted ? 'Completed' : 'Not Available'}`}
                  id={`${step.id}-tab`}
                  onClick={() => isClickable && onStepClick(step.id)}
                  disabled={!isClickable}
                  className={`group relative flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 ${
                    isCompleted || isCurrent
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-foreground-secondary hover:border-primary/50'
                  }`}
                >
                  <span 
                    className="transform text-xl transition-transform group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {step.icon}
                  </span>
                </button>
                
                {/* Permanent Label */}
                <div className="mt-2 text-center">
                  <Text 
                    variant="sm" 
                    className={`font-medium transition-colors ${
                      isCurrent ? 'text-primary' : isCompleted ? 'text-foreground' : 'text-foreground-secondary'
                    }`}
                  >
                    {step.title}
                  </Text>
                </div>

                {/* Hover Tooltip */}
                <div 
                  role="tooltip"
                  className="absolute left-1/2 top-full z-50 mt-12 hidden w-48 -translate-x-1/2 transform rounded-lg bg-background-secondary p-3 text-center shadow-lg group-hover:block"
                >
                  <div 
                    className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform rotate-45 bg-background-secondary"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <Text variant="sm" className="font-medium">
                      {step.title}
                    </Text>
                    <Text variant="xs" className="mt-1 text-foreground-secondary">
                      {step.description}
                    </Text>
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div 
                  className="relative flex-1 px-2" 
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 flex items-center">
                    <div 
                      className={`h-0.5 w-full transition-all duration-300 ${
                        isCompleted ? 'bg-primary' : 'bg-border'
                      }`} 
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
