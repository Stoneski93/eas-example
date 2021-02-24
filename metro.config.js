const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    },
    resolver: {
      assetExts: [...assetExts, "mp3"],
      assetExts: [...assetExts, "mp3"],
    },
  };
})();
