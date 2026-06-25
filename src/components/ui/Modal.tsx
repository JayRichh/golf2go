import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

import { cn } from "~/utils/cn";

import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  /** Accessible label when there is no visible title (e.g. image lightbox) */
  ariaLabel?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, ariaLabel, children, className }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement;
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      // Move focus into the dialog once it has mounted.
      const id = window.setTimeout(() => dialogRef.current?.focus(), 0);
      return () => {
        window.clearTimeout(id);
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
        previouslyFocused.current?.focus?.();
      };
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={title ? undefined : ariaLabel ?? "Dialog"}
              {...(title ? { "aria-labelledby": "modal-title" } : {})}
              tabIndex={-1}
              className={cn(
                "bg-background/95 backdrop-blur-md",
                "rounded-xl shadow-xl border-2 border-border/50",
                "w-full max-w-lg p-6 focus:outline-none",
                className
              )}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute right-3 top-3 z-10 rounded-full bg-background/80 p-2 text-foreground/70 transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <span aria-hidden="true">✕</span>
              </button>
              {title && (
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
                  <h2 id="modal-title" className="text-xl font-semibold">
                    {title}
                  </h2>
                </div>
              )}
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Example usage:
export function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Example Modal">
        <div className="space-y-4">
          <p className="text-foreground/80">
            This is an example modal with a backdrop blur effect and smooth animations. Press ESC or
            click outside to close.
          </p>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// Code preview
export const modalCode = `// Modal Component Usage
const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>
  Open Modal
</Button>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Example Modal"
>
  <div className="space-y-4">
    <p>Modal content goes here...</p>
    <div className="flex justify-end gap-3">
      <Button variant="outline" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button onClick={() => setIsOpen(false)}>
        Confirm
      </Button>
    </div>
  </div>
</Modal>`;
