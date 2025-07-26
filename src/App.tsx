import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutPCOS from "./pages/AboutPCOS";
import NaturalHealing from "./pages/NaturalHealing";
import SoundTherapy from "./pages/SoundTherapy";
import Shop from "./pages/Shop";
import Benefits from "./pages/Benefits";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-pcos" element={<AboutPCOS />} />
            <Route path="natural-healing" element={<NaturalHealing />} />
            <Route path="sound-therapy" element={<SoundTherapy />} />
            <Route path="shop" element={<Shop />} />
            <Route path="benefits" element={<Benefits />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
