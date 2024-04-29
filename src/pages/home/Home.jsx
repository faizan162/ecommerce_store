import React from "react";
import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import NewArrivals from "../../components/new-arrivals/NewArrivals";
import PeakyBlinders from "../../components/peaky-blinders/PeakyBlinders";
import CustomerFeedback from "../../components/customer-feedback/CustomerFeedback";
import Footer from "../../components/footer/Footer";
import NewsLetter from "../../components/newsletter/NewsLetter";
import DealOfMonth from "../../components/deals-of-month/DealOfMonth";
export default function Home() {
  return (
    <>
      <Banner />
      <Brands />
      <DealOfMonth title={"Deals of the month"} />
      <NewArrivals />
      <PeakyBlinders />
      <CustomerFeedback />
      <NewsLetter />
      <Footer />
    </>
  );
}
