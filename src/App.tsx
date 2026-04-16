import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import Historia from "@/pages/Historia";
import Obsadenie from "@/pages/Obsadenie";
import Terminy from "@/pages/Terminy";
import Ponuka from "@/pages/Ponuka";
import Diskografia from "@/pages/Diskografia";
import Kontakt from "@/pages/Kontakt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/obsadenie" element={<Obsadenie />} />
            <Route path="/terminy" element={<Terminy />} />
            <Route path="/ponuka" element={<Ponuka />} />
            <Route path="/diskografia" element={<Diskografia />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
