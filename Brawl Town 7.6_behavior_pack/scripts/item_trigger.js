import { system, world } from '@minecraft/server';
import { decrementStack, getOppositeDirection, DirectionType, cardinalSides, randomFunction } from './utils/helper';
import { directionToVector3 } from './utils/math';

system.beforeEvents.startup.subscribe(initEvent => { initEvent.itemComponentRegistry.registerCustomComponent('pa_leon:trigger', {
  
onConsume: e => { e.source.addEffect("minecraft:invisibility", 240, {amplifier: 1});
e.source.addEffect("minecraft:speed", 320, {amplifier: 2}); },
});

initEvent.itemComponentRegistry.registerCustomComponent('pa_roza:trigger', {
  
onConsume: e => { e.source.addEffect("minecraft:resistance", 320, {amplifier: 2});
e.source.addEffect("minecraft:speed", 600, {amplifier: 0}); },
});
 });

