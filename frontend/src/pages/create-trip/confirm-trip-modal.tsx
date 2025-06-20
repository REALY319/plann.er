import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
          <button onClick={closeConfirmTripModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>
        <p className="text-sm text-zinc-400 mt-2">
          Para concluir a criação da viagem para{" "}
          <span className="font-semibold text-zinc-100">
            Tokyo, Japan
          </span>{" "}
          nas datas de{" "}
          <span className="font-semibold text-zinc-100">
            {" "}
            05 a 15 de Outubro de 2025
          </span>{" "}
          preencha seus dados abaixo:
        </p>

        <form onSubmit={createTrip}>
          <div className="bg-zinc-950 h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-49
                    00 outline-none flex-1"
            />
          </div>

          <div className="bg-zinc-950 h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2 mt-3 mb-6">
            <Mail className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className="bg-transparent text-lg placeholder-zinc-49
                    00 outline-none flex-1"
            />
          </div>

          <Button size="full">Confirmar minha presença</Button>
        </form>
      </div>
    </div>
  );
}
