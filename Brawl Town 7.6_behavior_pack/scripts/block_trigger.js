import { system, world } from '@minecraft/server';
import { setupCustomBlockDrop, decrementStack, getOppositeDirection, DirectionType, cardinalSides, randomFunction, shouldConnect, safeUpdateStairShape, stripLogWithAxe, pressCustomButton, orientCustomButton } from './utils/helper';
import { directionToVector3 } from './utils/math';

system.beforeEvents.startup.subscribe(initEvent => {
  initEvent.blockComponentRegistry.registerCustomComponent('pa_gem_ore:trigger', {
  onBreak: e => { const { x, y, z } = e.block.location;
const toolTags = [];
    const xpRange = [];

    setupCustomBlockDrop(e, false, toolTags, "blocks/pa_gem_ore", xpRange, true); },
});

initEvent.blockComponentRegistry.registerCustomComponent('pa_krystal_ore:trigger', {
  onBreak: e => { const { x, y, z } = e.block.location;
const toolTags = [];
    const xpRange = [];

    setupCustomBlockDrop(e, false, toolTags, "blocks/pa_krystal_ore", xpRange, true); },
});

initEvent.blockComponentRegistry.registerCustomComponent('pa_loran_ore:trigger', {
  onBreak: e => { const { x, y, z } = e.block.location;
const toolTags = [];
    const xpRange = [];

    setupCustomBlockDrop(e, false, toolTags, "blocks/pa_loran_ore", xpRange, true); },
});

initEvent.blockComponentRegistry.registerCustomComponent('pa_nif_ore:trigger', {
  onBreak: e => { const { x, y, z } = e.block.location;
const toolTags = [];
    const xpRange = [];

    setupCustomBlockDrop(e, false, toolTags, "blocks/pa_nif_ore", xpRange, true); },
});

});
