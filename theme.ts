"use client";

import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "'Inter', sans-serif",
  headings: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: "600",
  },
  primaryColor: "blue",
  defaultRadius: "md",
  components: {
    Paper: {
      defaultProps: {
        shadow: "sm",
        radius: "md",
        p: "md",
      },
    },
  },
});
