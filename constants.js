export const DATA_URL =
  "https://app-soc-data-server.politefield-c4736012.northeurope.azurecontainerapps.io/dynlogs";

export const THEME = {
  axis: {
    ticks: {
      text: {
        // fill: "white", // Set axis label color to white
      },
    },
  },
  text: {
    fontSize: 11,
    fill: "#FFFFFF",
    color: "#000000",
    outlineColor: "#dfd3d3",
    fontFamily: "Gotham, sans serif",
  },
  labels: {
    text: {
      fill: "#000000",
      color: "#000000",
      fontWeight: "bold",
      fontFamily: "GothamMedium, sans serif",
    },
  },
  tooltip: {
    container: {
      color: "#000000",
    },
  },
};

export const COLORS = {
  blocked: "#FF7777",
  allowed: "#694BDB",
  detected: "#F1E15B",
  forwarded: "#E7A838",
  denied: "#F0E15B",
};
