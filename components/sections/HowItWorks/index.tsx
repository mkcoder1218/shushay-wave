import Container from "@/components/ui/Container";
import StepItem from "./StepItem";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants/features";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — overlapping phone mockups */}
          <div className="relative flex items-end justify-center h-[520px]">
            <img src="imgs/phone mockup 2.png" alt="" />
          </div>

          {/* Right — steps */}
          <div>
            <p className="text-[#3C3C3C] text-18 font-medium pt-20">
              How It Works
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 leading-snug">
              Start saving with confidence in just a few simple steps.
            </h2>

            <div>
              {HOW_IT_WORKS_STEPS.map((step, index) => (
                <StepItem
                  key={step.id}
                  step={step}
                  isLast={index === HOW_IT_WORKS_STEPS.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 rounded-[2.5rem] border-4 border-gray-700 shadow-2xl overflow-hidden aspect-[9/19]">
      <div className="absolute top-0 inset-x-0 flex justify-center pt-1 z-10">
        <div className="w-16 h-3 bg-black rounded-full" />
      </div>
      <div className="w-full h-full bg-white pt-5 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="px-3 py-2 space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold text-gray-700">Hi, Daniel</p>
        <div className="w-5 h-5 rounded-full bg-teal-100" />
      </div>
      <div className="bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl p-2 text-white">
        <p className="text-[9px]">Enjoy Savings,</p>
        <p className="text-[10px] font-bold">Grow Businesses!</p>
      </div>
      <p className="text-[9px] font-semibold text-gray-500">My Active Equbs</p>
      <div className="bg-teal-700 rounded-xl p-2 text-white">
        <p className="text-[8px] mb-1">Name of Equb</p>
        <p className="text-sm font-bold">50,000 Br</p>
        <p className="text-[8px] mt-1">Paying 4,000</p>
      </div>
    </div>
  );
}

function AccountScreen() {
  return (
    <div className="px-3 py-2 space-y-2">
      <p className="text-[10px] font-semibold text-gray-700">Account</p>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gray-300" />
        <div>
          <p className="text-[9px] font-semibold">Daniel T.</p>
          <p className="text-[8px] text-gray-400">+251 091 22 094</p>
        </div>
      </div>
      <div className="flex gap-4 text-center">
        <div>
          <p className="text-[8px] text-gray-400">Level</p>
          <p className="text-[10px] font-bold text-teal-700">2</p>
        </div>
        <div>
          <p className="text-[8px] text-gray-400">Total Round</p>
          <p className="text-[10px] font-bold text-teal-700">1</p>
        </div>
      </div>
      <div className="bg-teal-700 rounded-xl p-2 text-white">
        <p className="text-[8px]">My Wallet</p>
        <p className="text-xs font-bold">ETB 4,200</p>
      </div>
      <div className="space-y-1 pt-1">
        <p className="text-[8px] text-gray-500">Your Name</p>
        <p className="text-[9px] font-medium text-gray-700">Daniel T.</p>
        <p className="text-[8px] text-gray-500">Email</p>
        <p className="text-[9px] font-medium text-gray-700">
          account@email.com
        </p>
        <p className="text-[8px] text-gray-500 pt-1">Settings</p>
        <p className="text-[9px] text-gray-700">Change PIN</p>
        <p className="text-[9px] text-gray-700">Biometric Login</p>
      </div>
    </div>
  );
}
