import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import { Columns } from "./Columns";

export const Board = () => {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="flex items-center mb-4">
        <Input type="text" placeholder="New Column Title" className="mr-2" />
        <Button variant="addColumn">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Column
        </Button>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-4 ">
        <Columns />
      </div>
    </div>
  );
};
