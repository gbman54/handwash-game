import Game from "@/components/Game";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-4 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <header className="mb-4 rounded-3xl bg-white px-5 py-4 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-50 text-cyan-700">
                ✳
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">إدارة الصحة العامة ومكافحة العدوى</p>
                <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
                  How do I wash my hands properly?
                </h1>
                <p className="text-sm text-slate-600">كيف أغسل يدي بصورة صحيحة؟</p>
              </div>
            </div>
          </div>
        </header>

        <Game />
      </div>
    </main>
  );
}
