import { Calendar, Tag, X } from "lucide-react";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Cadastrar atividade </h2>
          <button onClick={closeCreateActivityModal}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>
        <p className="text-sm text-zinc-400 mt-2">
          Todos convidados podem visualizar as atividades.
        </p>

        <form>
          <div className="bg-zinc-950 h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-49
                       00 outline-none flex-1"
            />
          </div>

          <div className="bg-zinc-950 flex-1 h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2 mt-3">
            <Calendar className="text-zinc-400 size-5" />
            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e Horário da atividade"
              className="bg-transparent text-lg placeholder-zinc-49
                       00 outline-none flex-1 [color-scheme:dark]"
            />
          </div>

          <button
            type="submit"
            className="bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-lime-400 transition-all w-full mt-6"
          >
            Salvar atividade
          </button>
        </form>
      </div>
    </div>
  );
}
