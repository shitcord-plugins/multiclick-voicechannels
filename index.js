import { Plugin } from '@vizality/entities';
import { getModule } from '@vizality/webpack';

const VoiceModule = getModule('selectVoiceChannel');
const _oldConnect = VoiceModule.selectVoiceChannel;

export default class MultoClickVoiceChannels extends Plugin {
   start() {
      VoiceModule.selectVoiceChannel = this.createMultiClick(_oldConnect);

   }

   createMultiClick(callback) {
      let clicks = 0, timeout;
      const settings = this.settings;

      return function (channelId) {
         if (!channelId) return callback.apply(this, channelId);

         clicks++;
         const time = settings.get('timeout', 300);
         const minClicks = settings.get('timesClick', 2);

         if (clicks < minClicks) {
            timeout = setTimeout(() => clicks = 0, time);
         } else {
            clearTimeout(timeout);
            clicks = 0;
            return callback.call(this, channelId);
         }
      }
   }

   stop() {
      VoiceModule.selectVoiceChannel = _oldConnect;
   }
}