import { system } from "@minecraft/server";
import { applyDurabilityDamage } from "./utils/helper.js";

const registerItemTrigger = (initEvent) => {
  initEvent.itemComponentRegistry.registerCustomComponent('pa_leon:trigger', {
    onConsume: e => {
      e.source.addEffect("invisibility", 240, { amplifier: 1 });
      e.source.addEffect("speed", 320, { amplifier: 2 });
    },
  });
  initEvent.itemComponentRegistry.registerCustomComponent('pa_roza:trigger', {
    onConsume: e => {
      e.source.addEffect("resistance", 320, { amplifier: 2 });
      e.source.addEffect("speed", 600, { amplifier: 0 });
    },
  });
  initEvent.itemComponentRegistry.registerCustomComponent('pa_gadshed_regenka:trigger', {
    onUse: e => {
      e.source.addEffect("regeneration", 200, { amplifier: 1 });
      if (e.itemStack) applyDurabilityDamage(e.source, e.itemStack, undefined, 1);
    },
  });
  initEvent.itemComponentRegistry.registerCustomComponent('pa_gadshed_speed:trigger', {
    onUse: e => {
      e.source.addEffect("speed", 200, { amplifier: 4 });
      if (e.itemStack) applyDurabilityDamage(e.source, e.itemStack, undefined, 1);
    },
  });
  initEvent.itemComponentRegistry.registerCustomComponent('pa_gadshed_strong:trigger', {
    onUse: e => {
      e.source.addEffect("strength", 200, { amplifier: 1 });
      if (e.itemStack) applyDurabilityDamage(e.source, e.itemStack, undefined, 1);
    },
  });
  initEvent.itemComponentRegistry.registerCustomComponent('pa_gasket_lovkach:trigger', {
    onUse: e => {
      e.source.addEffect("speed", 200, { amplifier: 3 });
      e.source.addEffect("jump_boost", 200, { amplifier: 7 });
      if (e.itemStack) applyDurabilityDamage(e.source, e.itemStack, undefined, 1);
    },
  });
  initEvent.itemComponentRegistry.registerCustomComponent('pa_gasket_podbros:trigger', {
    onUse: e => {
      e.source.addEffect("speed", 200, { amplifier: 3 });
      e.source.addEffect("jump_boost", 200, { amplifier: 7 });
      if (e.itemStack) applyDurabilityDamage(e.source, e.itemStack, undefined, 1);
    },
  });
  initEvent.itemComponentRegistry.registerCustomComponent('pa_gasket_razvorot:trigger', {
    onUse: e => {
      e.source.addEffect("speed", 200, { amplifier: 3 });
      if (e.itemStack) applyDurabilityDamage(e.source, e.itemStack, undefined, 1);
    },
  });
};

system.beforeEvents.startup.subscribe(registerItemTrigger);
