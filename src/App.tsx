import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Index from "./pages/Index";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import Guide from "./pages/Guide";
import Contact from "./pages/Contact";
import Destination from "./pages/Destination";
import NotFound from "./pages/NotFound";
import CappadociaBlogPost from "./pages/BlogPosts/CappadociaBlogPost";
import IstanbulBlogPost from "./pages/BlogPosts/IstanbulBlogPost";
import TurquoiseCoastBlogPost from "./pages/BlogPosts/TurquoiseCoastBlogPost";
import CulinaryJourneyBlogPost from "./pages/BlogPosts/CulinaryJourneyBlogPost";
import SustainableTourismBlogPost from "./pages/BlogPosts/SustainableTourismBlogPost";
import "./i18n";
import "./styles/Font3D.css";

const queryClient = new QueryClient();

const App = () => (
  <I18nextProvider i18n={i18n}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations/:id" element={<Destination />} />
            
            {/* Blog Post Routes */}
            <Route path="/guide/cappadocia" element={<CappadociaBlogPost />} />
            <Route path="/guide/istanbul" element={<IstanbulBlogPost />} />
            <Route path="/guide/turquoise-coast" element={<TurquoiseCoastBlogPost />} />
            <Route path="/guide/culinary-journey" element={<CulinaryJourneyBlogPost />} />
            <Route path="/guide/sustainable-tourism" element={<SustainableTourismBlogPost />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </I18nextProvider>
);

export default App;
