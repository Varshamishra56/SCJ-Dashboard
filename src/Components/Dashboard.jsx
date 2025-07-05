import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Hero from "./Hero";
import ContentVerticals from "./ContentVerticals";
import About from "./About";
import Services from "./Services";
import Partner from "./Partner";
import SubmitContent from "./SubmitContent";
import Catalog from "./Catalog";
import AnalyticsDashboard from "./AnalyticsDashboard";
import Contact from "./Contact";
import Footer from "./Footer";
const Dashboard = () => {
  return (
    <div>
      <>
        {/* Header */}
        <Header />
        {/* Mobile Menu (Hidden by default) */}
        <MobileMenu />
        {/* Hero Section */}
        <Hero />
        {/* Content Verticals */}
        <ContentVerticals />
        {/* About Section */}
        <About />
        {/* Services Section */}
        <Services />
        {/* Partner Showcase */}
        <Partner />
        {/* Submit Content Section */}
        <SubmitContent />
        {/* Catalog Section */}
        <Catalog />
        {/* Analytics Dashboard */}
        <AnalyticsDashboard />
        {/* Contact Section */}
        <Contact />
        {/* Footer */}
        <Footer />
        {/* Scripts */}
      </>
    </div>
  );
};

export default Dashboard;
