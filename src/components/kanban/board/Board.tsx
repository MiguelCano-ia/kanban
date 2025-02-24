import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit2, GripVertical, PlusCircle } from "lucide-react";

const columns = [
  {
    id: 1,
    title: "To Do",
    cards: [
      {
        id: 1,
        title: "Task 1",
        description: "Task 1 description",
      },
      {
        id: 2,
        title: "Task 2",
        description: "Task 2 description",
      },
    ],
  },
];

export const Board = () => {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="flex items-center mb-4">
        <Input type="text" placeholder="New Column Title" className="mr-2" />
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Column
        </Button>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-4">
        {columns.map((column) => (
          <div
            key={column.id}
            className="bg-white shadow rounded-lg p-4 w-80 flex-shrink-0"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">{column.title}</h2>
              <div className="flex items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Column Title</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="column-title" className="text-right">
                          Title
                        </Label>
                        <Input id="column-title" className="col-span-3" />
                      </div>
                    </div>
                    <Button>Save Changes</Button>
                  </DialogContent>
                </Dialog>
                <GripVertical className="text-gray-400 cursor-move" />
              </div>
            </div>
            {column.cards.map((card) => (
              <div key={card.id} className="bg-gray-50 p-3 rounded mb-2">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{card.title}</h3>
                  <div className="flex items-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Card</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="edit-card-title"
                              className="text-right"
                            >
                              Title
                            </Label>
                            <Input
                              id="edit-card-title"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="edit-card-description"
                              className="text-right"
                            >
                              Description
                            </Label>
                            <Textarea
                              id="edit-card-description"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <Button>Save Changes</Button>
                      </DialogContent>
                    </Dialog>
                    <GripVertical className="text-gray-400 cursor-move" />
                  </div>
                </div>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            ))}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full mt-2">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Card
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Card</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="card-title" className="text-right">
                      Title
                    </Label>
                    <Input id="card-title" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="card-description" className="text-right">
                      Description
                    </Label>
                    <Textarea id="card-description" className="col-span-3" />
                  </div>
                </div>
                <Button>Add Card</Button>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
};
