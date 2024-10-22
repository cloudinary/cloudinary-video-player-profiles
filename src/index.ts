import cldDefault from './default-profiles/cld-default.json';
import cldLooping from './default-profiles/cld-looping.json';
import cldAdaptiveStream from './default-profiles/cld-adaptive-stream.json';

export const cldDefaultProfile = {
  name: 'cld-default',
  isDefault: true,
  config: cldDefault,
};

export const cldLoopingProfile = {
  name: 'cld-looping',
  isDefault: true,
  config: cldLooping,
};

export const cldAdaptiveStreamProfile = {
  name: 'cld-adaptive-stream',
  isDefault: true,
  config: cldAdaptiveStream,
};

export const defaultProfiles = [cldDefaultProfile, cldLoopingProfile, cldAdaptiveStreamProfile];
