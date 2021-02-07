import React from 'react';
import { SliderInput } from '@vizality/components/settings';

export default ({getSetting, updateSetting}) => <>
   <SliderInput
      note="Defines the delay between separate clicks."
		onValueChange={value => updateSetting('timeout', value)}
		defaultValue={300}
		minValue={0}
		maxValue={2000}
		handleSize={10}
		initialValue={getSetting('timeout', 300)}
		markers={Array.from(new Array(20)).map((_, i) => (i + 1) * 100)}
   >Timeout</SliderInput>
   <SliderInput
      note="Defines how often you have to click on the voicechannel until you join them."
		onValueChange={value => updateSetting('timesClick', value)}
		defaultValue={2}
		minValue={0}
		maxValue={5}
		handleSize={10}
      stickToMarkers={true}
		initialValue={getSetting('timesClick', 2)}
		markers={Array.from(new Array(5)).map((_, i) => i + 1)}
   >Times to click</SliderInput>
</>;