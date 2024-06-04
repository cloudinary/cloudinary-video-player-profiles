import cldDefault from './default-profiles/cldDefault.json';
import cldLooping from './default-profiles/cldLooping.json';
import cldAdaptiveStream from './default-profiles/cldAdaptiveStream.json';

export const cldDefaultProfile = {
  name: 'cldDefault',
  isDefault: true,
  config: cldDefault,
};

export const cldLoopingProfile = {
  name: 'cldDefault',
  isDefault: true,
  config: cldLooping,
};

export const cldAdaptiveStreamProfile = {
  name: 'cldAdaptiveStream',
  isDefault: true,
  config: cldAdaptiveStream,
};

export const defaultProfiles = [cldDefaultProfile, cldLoopingProfile, cldAdaptiveStreamProfile];
