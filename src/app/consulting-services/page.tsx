import HealthcareSolution from "@/components/HealthcareSolution";
import Component from "@/components/practice-optimization-services";
import ServiceBanner from "@/components/ServiceBanner";
import React from "react";

export default function page() {
  return (
    <div>
      <ServiceBanner />

      <HealthcareSolution/>
      <Component />
    </div>
  );
}
