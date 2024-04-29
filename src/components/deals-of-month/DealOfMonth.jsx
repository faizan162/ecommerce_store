import { Box } from "@chakra-ui/react";
import React from "react";

import DealOfMonthLeft from "../deals-of-month-left/DealOfMonthLeft";
import DealOfMonthRight from "../deals-of-month-right/DealOfMonthRight";

export default function DealOfMonth({ title }) {
  return (
    <section className="deals-outer bg-slate-100 py-10">
      <div className="container">
        <Box
          display="flex"
          alignItems="center"
          gap="10px"
          className="deals-inner"
        >
          <DealOfMonthLeft title={title} />

          <DealOfMonthRight />
        </Box>
      </div>
    </section>
  );
}
