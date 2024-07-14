import { Dimensions, PixelRatio, Platform } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');
export const { height: FULLSCREEN_HEIGHT } = Dimensions.get('screen');

const width = Math.min(SCREEN_WIDTH, SCREEN_HEIGHT);
const height = Math.max(SCREEN_HEIGHT, SCREEN_WIDTH);

const wscale: number = width / 360;
const hscale: number = height / 640;

export default function normalize(
  size: number,
  based: 'width' | 'height' = 'width',
) {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
