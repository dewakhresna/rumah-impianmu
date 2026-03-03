import { Card, CardHeader, CardBody, CardFooter, Input, Button, Avatar } from "@heroui/react";
import { Send } from "lucide-react";

export default function LiveChat() {
  return (
    <div className="sticky top-28 h-[calc(100vh-8rem)] min-h-[500px] max-h-[700px]">
      <Card className="h-full flex flex-col rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 bg-white">
        
        {/* Chat Header */}
        <CardHeader className="bg-blue-600 px-6 py-4 flex items-center gap-4 rounded-t-2xl">
          <div className="relative">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-blue-600 rounded-full"></span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-white font-semibold leading-tight">Sarah from Support</h4>
            <span className="text-blue-100 text-xs">Typically replies in minutes</span>
          </div>
        </CardHeader>

        {/* Chat Body */}
        <CardBody className="flex-1 overflow-y-auto p-6 bg-slate-50 flex flex-col gap-4">
          <p className="text-xs text-center text-slate-400 mb-2">Today, 9:41 AM</p>
          
          {/* Admin Bubble */}
          <div className="flex items-start gap-2 max-w-[85%]">
             <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="sm" className="mt-1" />
             <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-sm shadow-sm text-sm text-slate-700">
               Hi there! 👋 Welcome to EstatePrime. Are you looking to buy or rent today?
             </div>
          </div>

          {/* User Bubble */}
          <div className="flex items-start gap-2 max-w-[85%] self-end flex-row-reverse">
             <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-sm shadow-sm text-sm text-white">
               I'm looking to buy a modern house in Austin.
             </div>
          </div>

          {/* Admin Bubble */}
          <div className="flex items-start gap-2 max-w-[85%]">
             <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="sm" className="mt-1" />
             <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-sm shadow-sm text-sm text-slate-700">
               Great choice! Austin has a beautiful market right now. Let me find some curated options for you.
             </div>
          </div>
        </CardBody>

        {/* Chat Input */}
        <CardFooter className="p-4 bg-white border-t border-slate-100 rounded-b-2xl">
          <form className="w-full flex items-end gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Type your message..."
              variant="flat"
              radius="lg"
              classNames={{
                input: "text-sm",
                inputWrapper: "bg-slate-100 shadow-none hover:bg-slate-200 focus-within:!bg-white focus-within:ring-2 focus-within:ring-blue-100",
              }}
              fullWidth
            />
            <Button isIconOnly color="primary" className="bg-blue-600 rounded-lg shrink-0">
              <Send size={18} />
            </Button>
          </form>
        </CardFooter>

      </Card>
    </div>
  );
}