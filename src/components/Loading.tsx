import logoSimple from "../assets/logof.png";

export function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        <div className="animate-pulse">
          <img 
            src={logoSimple} 
            alt="Pedro França" 
            className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48"
          />
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
}
