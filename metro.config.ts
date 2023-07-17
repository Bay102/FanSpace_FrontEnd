//> USED BY FIREBASE

import { getDefaultConfig } from '@expo/metro-config';

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;

 