"use client"

import { useState, useRef, FormEvent, ChangeEvent } from "react"
import { motion } from "framer-motion"
import { Bot, Zap, CheckCircle } from "lucide-react"
import { toast } from "sonner"
import { submitToFormspree } from "@/lib/formspree"

interface WaitlistCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  successMessage?: string;
  className?: string;
}

export const WaitlistCTA = ({
  title = "Automatize seu negócio",
  subtitle = "Receba uma consultoria gratuita sobre automação.",
  buttonText = "Quero Automatizar",
  successMessage = "Entraremos em contato!",
  className,
}: WaitlistCTAProps) => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    try {
      console.log('📝 Enviando waitlist:', { email });
      await submitToFormspree({
        email,
        source: "waitlist-cta",
        sourceUrl: typeof window !== "undefined" ? window.location.href : "",
      })
      setStatus("success")
      setEmail("")
      fireConfetti()
      setTimeout(() => setStatus("idle"), 3200)
    } catch (error) {
      console.error('❌ Erro waitlist:', error);
      const message =
        error instanceof Error ? error.message : "Não foi possível enviar agora."
      toast.error(message)
      setStatus("idle")
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  // --- Confetti Logic ---
  const fireConfetti = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
      size: number;
    }

    const particles: Particle[] = []
    const colors = ["#8350E8", "#3B82F6", "#10b981", "#fbbf24", "#fff"]

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const createParticle = (): Particle => {
      return {
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 2) * 10,
        life: 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2,
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(createParticle())
    }

    const animate = () => {
      if (particles.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.5
        p.life -= 2

        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(0, p.life / 100)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        if (p.life <= 0) {
          particles.splice(i, 1)
          i--
        }
      }

      requestAnimationFrame(animate)
    }

    animate()
  }

  return (
    <section className={`relative w-full bg-black py-24 overflow-hidden ${className || ''}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Animated Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full border border-purple-500/30"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full border border-blue-500/20"
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 mb-8"
          >
            <Bot className="w-10 h-10 text-purple-400" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6"
          >
            <Zap className="w-3 h-3 text-purple-400" />
            <span className="text-xs font-light tracking-tight text-white/80">Consultoria Gratuita</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white mb-4"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg font-light tracking-tight text-white/60 mb-10"
          >
            {subtitle}
          </motion.p>

          {/* Form Container */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative w-full max-w-md mx-auto h-[60px]"
          >
            {/* Confetti Canvas */}
            <canvas
              ref={canvasRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-50"
            />

            {/* Success State */}
            <div
              className={`absolute inset-0 flex items-center justify-center rounded-full transition-all duration-500 ${
                status === "success"
                  ? "opacity-100 scale-100 bg-emerald-500"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
              style={{
                boxShadow: status === "success" ? "0 0 40px rgba(16, 185, 129, 0.5)" : "none"
              }}
            >
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle className="w-5 h-5" />
                <span>{successMessage}</span>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className={`relative w-full h-full transition-all duration-500 ${
                status === "success"
                  ? "opacity-0 scale-95 pointer-events-none"
                  : "opacity-100 scale-100"
              }`}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="seu@email.com"
                value={email}
                disabled={status === "loading"}
                onChange={handleEmailChange}
                className="w-full h-[60px] pl-6 pr-[180px] rounded-full outline-none transition-all duration-200 placeholder-zinc-500 disabled:opacity-70 disabled:cursor-not-allowed bg-zinc-900 text-white border border-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
              />
              <div className="absolute top-[6px] right-[6px] bottom-[6px]">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-full px-6 rounded-full font-medium text-white transition-all active:scale-95 hover:brightness-110 disabled:hover:brightness-100 disabled:active:scale-100 disabled:cursor-wait flex items-center justify-center min-w-[160px] bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500"
                >
                  {status === "loading" ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    buttonText
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-white/40"
          >
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Sem compromisso
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> 100% gratuito
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Resposta em 24h
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WaitlistCTA




