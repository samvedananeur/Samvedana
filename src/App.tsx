import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewIndex from "./pages/NewIndex";
import About from "./pages/About";
import Epilepsy from "./pages/services/Epilepsy";
import Headache from "./pages/services/Headache";
import Stroke from "./pages/services/Stroke";
import MovementDisorders from "./pages/services/MovementDisorders";
import MemoryDisorders from "./pages/services/MemoryDisorders";
import Neuropathy from "./pages/services/Neuropathy";
import Meningoencephalitis from "./pages/services/Meningoencephalitis";
import BackPainSciatica from "./pages/services/BackPainSciatica";
import VertigoBalance from "./pages/services/VertigoBalance";
import MultipleSclerosis from "./pages/services/MultipleSclerosis";
import SleepDisorders from "./pages/services/SleepDisorders";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import ContactUs from  "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<NewIndex />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/epilepsy" element={<Epilepsy />} />
          <Route path="/services/headache" element={<Headache />} />
          <Route path="/services/stroke" element={<Stroke />} />
          <Route path="/services/movement-disorders" element={<MovementDisorders />} />
          <Route path="/services/memory-disorders" element={<MemoryDisorders />} />
          <Route path="/services/neuropathy" element={<Neuropathy />} />
          <Route path="/services/meningoencephalitis" element={<Meningoencephalitis />} />
          <Route path="/services/back-pain-sciatica" element={<BackPainSciatica />} />
          <Route path="/services/vertigo-balance" element={<VertigoBalance />} />
          <Route path="/services/multiple-sclerosis" element={<MultipleSclerosis />} />
          <Route path="/services/sleep-disorders" element={<SleepDisorders />} />
          <Route path="/testimonials" element={<Testimonials />} />
	  <Route path="/contact" element={<ContactUs />} />
	
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
