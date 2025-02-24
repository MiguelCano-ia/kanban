import { Board } from "@/components/kanban/board/Board";
import { NavBar } from "@/components/kanban/NavBar";
import { Toggle } from "@/components/shared/darkmode/Toggle";

export const metadata = {
  title: "Kanban Board",
  description: "Kanban Board",
};

export default function KanbanPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold">Kanban Board</h1>
            </div>
            <div className="flex items-center gap-5">
              <NavBar />
              <Toggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Board />
      </main>
    </div>
  );
}
