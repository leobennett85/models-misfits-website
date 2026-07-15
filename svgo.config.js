module.exports = {
  multipass: true,

  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          cleanupIds: false,
          removeViewBox: false,
          convertShapeToPath: false,
        },
      },
    },

    "convertTransform",

    {
      name: "removeEditorsNSData",
    },

    {
      name: "removeXMLNS",
      active: false,
    },
  ],
};