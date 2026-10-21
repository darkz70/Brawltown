import { world, system, EquipmentSlot, EntityComponentTypes, ItemComponentTypes } from "@minecraft/server";

const GUN_CONFIGS = {
  "gunsaddon:aa12": {
    "maxAmmo": 20,
    "cooldown": 0.12,
    "cooldownCategory": "aa12",
    "projectile": "gunsaddon:aa12_shoot",
    "pelletCount": 9,
    "sound": "gun.aa12",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:aa12_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 5.0,
    "uncertainty": 4.1
  },
  "gunsaddon:aac_honey_badger": {
    "maxAmmo": 30,
    "cooldown": 0.1,
    "cooldownCategory": "aac_honey_badger",
    "projectile": "gunsaddon:aac_honey_badger_shoot",
    "pelletCount": 1,
    "sound": "gun.aac",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:aac_honey_badger_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:ak47": {
    "maxAmmo": 40,
    "cooldown": 0.1,
    "cooldownCategory": "ak47",
    "projectile": "gunsaddon:ak47_shoot",
    "pelletCount": 1,
    "sound": "gun.ak47",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:ak47_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:ak47_shotgun": {
    "maxAmmo": 40,
    "cooldown": 0.1,
    "cooldownCategory": "ak47",
    "projectile": "gunsaddon:ak47_shoot",
    "pelletCount": 1,
    "sound": "gun.ak47",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:ak47_ammo",
    "reloadCount": 1,
    "altFire": {
      "projectile": "gunsaddon:shorty_shoot",
      "ammo": "gunsaddon:cartucho",
      "power": 5.0,
      "uncertainty": 4.1,
      "pelletCount": 8,
      "sound": "gun.shorty"
    },
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:barret_m82a1": {
    "maxAmmo": 10,
    "cooldown": 1.0,
    "cooldownCategory": "barret_m82a1",
    "projectile": "gunsaddon:barret_m82a1_shoot",
    "pelletCount": 1,
    "sound": "gun.barret_m82a1",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:barret_m82a1_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 12.0,
    "uncertainty": 1
  },
  "gunsaddon:barret_m82a1_scope": {
    "maxAmmo": 10,
    "cooldown": 1.0,
    "cooldownCategory": "barret_m82a1_scope",
    "projectile": "gunsaddon:barret_m82a1_shoot",
    "pelletCount": 1,
    "sound": "gun.barret_m82a1",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:barret_m82a1_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 12.0,
    "uncertainty": 1
  },
  "gunsaddon:bazooka": {
    "maxAmmo": 1,
    "cooldown": 1.0,
    "cooldownCategory": "bazooka",
    "projectile": "gunsaddon:rocket_shoot",
    "pelletCount": 1,
    "sound": "gun.rocket",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:rocket",
    "reloadCount": 1,
    "altFire": null,
    "power": 10.0,
    "uncertainty": 1
  },
  "gunsaddon:contender": {
    "maxAmmo": 1,
    "cooldown": 3.0,
    "cooldownCategory": "contender",
    "projectile": "gunsaddon:contender_shoot",
    "pelletCount": 1,
    "sound": "gun.contender",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:bala_pesada",
    "reloadCount": 1,
    "altFire": null,
    "power": 12.0,
    "uncertainty": 1
  },
  "gunsaddon:desert_eagle": {
    "maxAmmo": 9,
    "cooldown": 1.5,
    "cooldownCategory": "desert_eagle",
    "projectile": "gunsaddon:desert_eagle_shoot",
    "pelletCount": 1,
    "sound": "gun.desert_eagle",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:desert_eagle_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 12.0,
    "uncertainty": 1
  },
  "gunsaddon:double_action_revolver": {
    "maxAmmo": 6,
    "cooldown": 0.9,
    "cooldownCategory": "double_action_revolver",
    "projectile": "gunsaddon:double_action_revolver_shoot",
    "pelletCount": 1,
    "sound": "gun.double_action_revolver",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:bala_ligera",
    "reloadCount": 6,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:dual_double_action_revolver": {
    "maxAmmo": 12,
    "cooldown": 0.4,
    "cooldownCategory": "dual_double_action_revolver",
    "projectile": "gunsaddon:double_action_revolver_shoot",
    "pelletCount": 1,
    "sound": "gun.double_action_revolver",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:bala_ligera",
    "reloadCount": 12,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:dual_glock_17": {
    "maxAmmo": 34,
    "cooldown": 0.325,
    "cooldownCategory": "dual_glock_17",
    "projectile": "gunsaddon:glock_17_shoot",
    "pelletCount": 1,
    "sound": "gun.glock_17",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:glock_17_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:dual_micro_uzi": {
    "maxAmmo": 64,
    "cooldown": 0.1,
    "cooldownCategory": "dual_micro_uzi",
    "projectile": "gunsaddon:micro_uzi_shoot",
    "pelletCount": 1,
    "sound": "gun.uzi",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:micro_uzi_ammo",
    "reloadCount": 2,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:dual_sawed_off_shotgun": {
    "maxAmmo": 4,
    "cooldown": 0.2,
    "cooldownCategory": "dual_sawed_off_shotgun",
    "projectile": "gunsaddon:sawed_off_shotgun_shoot",
    "pelletCount": 8,
    "sound": "gun.shorty",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:cartucho",
    "reloadCount": 4,
    "altFire": null,
    "power": 18.0,
    "uncertainty": 4.1
  },
  "gunsaddon:flare_gun": {
    "maxAmmo": 1,
    "cooldown": 1.5,
    "cooldownCategory": "flare_gun",
    "projectile": "gunsaddon:flare_gun_shoot",
    "pelletCount": 1,
    "sound": "firework.launch",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:flare_gun_ammo",
    "reloadCount": 5,
    "altFire": null,
    "power": 0.5,
    "uncertainty": 1
  },
  "gunsaddon:g3sg1": {
    "maxAmmo": 30,
    "cooldown": 0.3,
    "cooldownCategory": "g3sg1",
    "projectile": "gunsaddon:g3sg1_shoot",
    "pelletCount": 1,
    "sound": "gun.g3sg1",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:g3sg1_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 12.0,
    "uncertainty": 1
  },
  "gunsaddon:g3sg1_scope": {
    "maxAmmo": 30,
    "cooldown": 0.3,
    "cooldownCategory": "g3sg1_scope",
    "projectile": "gunsaddon:g3sg1_shoot",
    "pelletCount": 1,
    "sound": "gun.g3sg1",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:g3sg1_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 12.0,
    "uncertainty": 1
  },
  "gunsaddon:glock_17": {
    "maxAmmo": 17,
    "cooldown": 0.75,
    "cooldownCategory": "glock_17",
    "projectile": "gunsaddon:glock_17_shoot",
    "pelletCount": 1,
    "sound": "gun.glock_17",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:glock_17_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:glock_17_with_silencer": {
    "maxAmmo": 17,
    "cooldown": 0.75,
    "cooldownCategory": "glock_17_with_silencer",
    "projectile": "gunsaddon:glock_17_with_silencer_shoot",
    "pelletCount": 1,
    "sound": "gun.glock_17_with_silencer",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:glock_17_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:gold_thompson": {
    "maxAmmo": 50,
    "cooldown": 0.1,
    "cooldownCategory": "gold_thompson",
    "projectile": "gunsaddon:gold_thompson_shoot",
    "pelletCount": 1,
    "sound": "gun.thompson",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:gold_thompson_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 10.0,
    "uncertainty": 1
  },
  "gunsaddon:gold_uzi": {
    "maxAmmo": 50,
    "cooldown": 0.1,
    "cooldownCategory": "gold_uzi",
    "projectile": "gunsaddon:gold_uzi_shoot",
    "pelletCount": 1,
    "sound": "gun.uzi",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:gold_uzi_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:grenade_launcher": {
    "maxAmmo": 8,
    "cooldown": 1.5,
    "cooldownCategory": "grenade_launcher",
    "projectile": "gunsaddon:grenade_launcher_shoot",
    "pelletCount": 1,
    "sound": "gun.grenade_shot",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:grenade_bullet",
    "reloadCount": 5,
    "altFire": null,
    "power": 3.5,
    "uncertainty": 1
  },
  "gunsaddon:luger": {
    "maxAmmo": 8,
    "cooldown": 0.7,
    "cooldownCategory": "luger",
    "projectile": "gunsaddon:luger_shoot",
    "pelletCount": 1,
    "sound": "gun.luger",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:luger_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:m16": {
    "maxAmmo": 50,
    "cooldown": 0.1,
    "cooldownCategory": "m16",
    "projectile": "gunsaddon:m16_shoot",
    "pelletCount": 1,
    "sound": "gun.m16",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:m16_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:m16_m203": {
    "maxAmmo": 50,
    "cooldown": 0.1,
    "cooldownCategory": "m16",
    "projectile": "gunsaddon:m16_shoot",
    "pelletCount": 1,
    "sound": "gun.m16",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:m16_ammo",
    "reloadCount": 1,
    "altFire": {
      "projectile": "gunsaddon:grenade_launcher_shoot",
      "ammo": "gunsaddon:grenade_bullet",
      "power": 3.5,
      "uncertainty": 1,
      "pelletCount": 1,
      "sound": "gun.grenade_shot"
    },
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:m202": {
    "maxAmmo": 4,
    "cooldown": 1.0,
    "cooldownCategory": "m202",
    "projectile": "gunsaddon:rocket_shoot",
    "pelletCount": 1,
    "sound": "gun.rocket",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:m202_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 10.0,
    "uncertainty": 1
  },
  "gunsaddon:m4a1": {
    "maxAmmo": 30,
    "cooldown": 0.1,
    "cooldownCategory": "m4a1",
    "projectile": "gunsaddon:m4a1_shoot",
    "pelletCount": 1,
    "sound": "gun.m4a1",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:m4a1_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:m4a1_shotgun": {
    "maxAmmo": 30,
    "cooldown": 0.1,
    "cooldownCategory": "m4a1",
    "projectile": "gunsaddon:m4a1_shoot",
    "pelletCount": 1,
    "sound": "gun.m4a1",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:m4a1_ammo",
    "reloadCount": 1,
    "altFire": {
      "projectile": "gunsaddon:shorty_shoot",
      "ammo": "gunsaddon:cartucho",
      "power": 5.0,
      "uncertainty": 4.1,
      "pelletCount": 8,
      "sound": "gun.shorty"
    },
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:m60": {
    "maxAmmo": 200,
    "cooldown": 0.1,
    "cooldownCategory": "m60",
    "projectile": "gunsaddon:m60_shoot",
    "pelletCount": 1,
    "sound": "gun.m60",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:m60_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:mauser": {
    "maxAmmo": 12,
    "cooldown": 0.1,
    "cooldownCategory": "mauser",
    "projectile": "gunsaddon:mauser_shoot",
    "pelletCount": 1,
    "sound": "gun.mauser",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:mauser_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:micro_uzi": {
    "maxAmmo": 32,
    "cooldown": 0.1,
    "cooldownCategory": "micro_uzi",
    "projectile": "gunsaddon:micro_uzi_shoot",
    "pelletCount": 1,
    "sound": "gun.uzi",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:micro_uzi_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:minigun": {
    "maxAmmo": 300,
    "cooldown": 0.0,
    "cooldownCategory": "minigun",
    "projectile": "gunsaddon:new_minigun_shoot",
    "pelletCount": 1,
    "sound": "gun.minigun_shoot",
    "requiresSneak": true,
    "reloadItem": "ironmanaddon:minigun_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 10.0,
    "uncertainty": 1
  },
  "gunsaddon:mp40": {
    "maxAmmo": 32,
    "cooldown": 0.1,
    "cooldownCategory": "mp40",
    "projectile": "gunsaddon:mp40_shoot",
    "pelletCount": 1,
    "sound": "gun.mp40",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:mp40_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:mp5": {
    "maxAmmo": 50,
    "cooldown": 0.1,
    "cooldownCategory": "mp5",
    "projectile": "gunsaddon:mp5_shoot",
    "pelletCount": 1,
    "sound": "gun.mp5",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:mp5_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:pkm": {
    "maxAmmo": 100,
    "cooldown": 0.1,
    "cooldownCategory": "pkm",
    "projectile": "gunsaddon:scar_shoot",
    "pelletCount": 1,
    "sound": "gun.scar",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:pkm_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:railgun": {
    "maxAmmo": 1,
    "cooldown": 2.0,
    "cooldownCategory": "railgun",
    "projectile": "gunsaddon:railgun_shoot",
    "pelletCount": 1,
    "sound": "gun.railgun",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:railgun_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 10.0,
    "uncertainty": 1
  },
  "gunsaddon:revolver": {
    "maxAmmo": 7,
    "cooldown": 0.9,
    "cooldownCategory": "revolver",
    "projectile": "gunsaddon:revolver_shoot",
    "pelletCount": 1,
    "sound": "gun.revolver",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:bala_ligera",
    "reloadCount": 7,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:rpg": {
    "maxAmmo": 1,
    "cooldown": 1.0,
    "cooldownCategory": "rpg",
    "projectile": "gunsaddon:rocket_shoot",
    "pelletCount": 1,
    "sound": "gun.rocket",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:rocket",
    "reloadCount": 1,
    "altFire": null,
    "power": 10.0,
    "uncertainty": 1
  },
  "gunsaddon:saiga_12": {
    "maxAmmo": 10,
    "cooldown": 0.3,
    "cooldownCategory": "saiga_12",
    "projectile": "gunsaddon:saiga_12_shoot",
    "pelletCount": 1,
    "sound": "gun.saiga_12",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:saiga_12_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 12.0,
    "uncertainty": 1
  },
  "gunsaddon:sawed_off_shotgun": {
    "maxAmmo": 2,
    "cooldown": 0.4,
    "cooldownCategory": "sawed_off_shotgun",
    "projectile": "gunsaddon:sawed_off_shotgun_shoot",
    "pelletCount": 8,
    "sound": "gun.shorty",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:cartucho",
    "reloadCount": 2,
    "altFire": null,
    "power": 18.0,
    "uncertainty": 4.1
  },
  "gunsaddon:scar": {
    "maxAmmo": 60,
    "cooldown": 0.1,
    "cooldownCategory": "scar",
    "projectile": "gunsaddon:scar_shoot",
    "pelletCount": 1,
    "sound": "gun.scar",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:scar_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:scar_m203": {
    "maxAmmo": 60,
    "cooldown": 0.1,
    "cooldownCategory": "scar",
    "projectile": "gunsaddon:scar_shoot",
    "pelletCount": 1,
    "sound": "gun.scar",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:scar_ammo",
    "reloadCount": 1,
    "altFire": {
      "projectile": "gunsaddon:grenade_launcher_shoot",
      "ammo": "gunsaddon:grenade_bullet",
      "power": 3.5,
      "uncertainty": 1,
      "pelletCount": 1,
      "sound": "gun.grenade_shot"
    },
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:shorty": {
    "maxAmmo": 5,
    "cooldown": 1.5,
    "cooldownCategory": "shorty",
    "projectile": "gunsaddon:shorty_shoot",
    "pelletCount": 8,
    "sound": "gun.shorty",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:cartucho",
    "reloadCount": 5,
    "altFire": null,
    "power": 5.0,
    "uncertainty": 4.1
  },
  "gunsaddon:skorpion": {
    "maxAmmo": 20,
    "cooldown": 0.1,
    "cooldownCategory": "Skorpion",
    "projectile": "gunsaddon:skorpion_shoot",
    "pelletCount": 1,
    "sound": "gun.skorpion",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:skorpion_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:spas": {
    "maxAmmo": 10,
    "cooldown": 0.4,
    "cooldownCategory": "spas",
    "projectile": "gunsaddon:spas_shoot",
    "pelletCount": 8,
    "sound": "gun.spas",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:cartucho",
    "reloadCount": 10,
    "altFire": null,
    "power": 5.0,
    "uncertainty": 4.1
  },
  "gunsaddon:springfield": {
    "maxAmmo": 5,
    "cooldown": 1.0,
    "cooldownCategory": "springfield",
    "projectile": "gunsaddon:springfield_shoot",
    "pelletCount": 1,
    "sound": "gun.springfield",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:springfield_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 12.0,
    "uncertainty": 1
  },
  "gunsaddon:springfield_scope": {
    "maxAmmo": 5,
    "cooldown": 1.0,
    "cooldownCategory": "springfield_scope",
    "projectile": "gunsaddon:springfield_shoot",
    "pelletCount": 1,
    "sound": "gun.springfield",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:springfield_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 12.0,
    "uncertainty": 1
  },
  "gunsaddon:sturmgewehr44": {
    "maxAmmo": 30,
    "cooldown": 0.1,
    "cooldownCategory": "sturmgewehr44",
    "projectile": "gunsaddon:sturmgewehr44_shoot",
    "pelletCount": 1,
    "sound": "gun.sturmgewehr44",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:sturmgewehr44_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:tavor_21": {
    "maxAmmo": 30,
    "cooldown": 0.1,
    "cooldownCategory": "tavor_21",
    "projectile": "gunsaddon:tavor_21_shoot",
    "pelletCount": 1,
    "sound": "gun.tavor_21",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:tavor_21_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:thompson": {
    "maxAmmo": 50,
    "cooldown": 0.1,
    "cooldownCategory": "thompson",
    "projectile": "gunsaddon:thompson_shoot",
    "pelletCount": 1,
    "sound": "gun.thompson",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:thompson_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:uzi": {
    "maxAmmo": 50,
    "cooldown": 0.1,
    "cooldownCategory": "uzi",
    "projectile": "gunsaddon:uzi_shoot",
    "pelletCount": 1,
    "sound": "gun.uzi",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:uzi_ammo",
    "reloadCount": 1,
    "altFire": null,
    "power": 9.0,
    "uncertainty": 1
  },
  "gunsaddon:winchester_1887": {
    "maxAmmo": 5,
    "cooldown": 1.5,
    "cooldownCategory": "winchester_1887",
    "projectile": "gunsaddon:winchester_1887_shoot",
    "pelletCount": 8,
    "sound": "gun.shorty",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:cartucho",
    "reloadCount": 5,
    "altFire": null,
    "power": 5.0,
    "uncertainty": 4.1
  },
  "gunsaddon:winchester_shotgun": {
    "maxAmmo": 5,
    "cooldown": 1.5,
    "cooldownCategory": "winchester_shotgun",
    "projectile": "gunsaddon:winchester_shotgun_shoot",
    "pelletCount": 8,
    "sound": "gun.shotgun",
    "requiresSneak": false,
    "reloadItem": "gunsaddon:cartucho",
    "reloadCount": 5,
    "altFire": null,
    "power": 5.0,
    "uncertainty": 4.1
  }
};

const activeShooters = new Map();
const lastShotTick = new Map();

function getEquipInventory(player) {
  return player.getComponent(EntityComponentTypes.Equippable);
}

function getAmmoState(itemStack, maxAmmo) {
  const isEmptyFlag = itemStack.getDynamicProperty("gunsaddon:empty") === true;
  if (isEmptyFlag) {
    return 0;
  }
  const dur = itemStack.getComponent(ItemComponentTypes.Durability);
  if (!dur) {
    return maxAmmo;
  }
  const used = dur.damage ?? 0;
  return Math.max(0, maxAmmo - used);
}

function setAmmoState(itemStack, remainingAmmo, maxAmmo) {
  const dur = itemStack.getComponent(ItemComponentTypes.Durability);
  if (remainingAmmo <= 0) {
    try {
      itemStack.setDynamicProperty("gunsaddon:empty", true);
    } catch {}
    if (dur) {
      try {
        dur.damage = Math.min(dur.maxDurability, Math.max(0, dur.maxDurability - 1));
      } catch {}
    }
  } else {
    try {
      itemStack.setDynamicProperty("gunsaddon:empty", undefined);
    } catch {}
    if (dur) {
      const newDamage = Math.max(0, Math.min(dur.maxDurability - 1, maxAmmo - remainingAmmo));
      try {
        dur.damage = newDamage;
      } catch {}
    }
  }
}

function consumeAmmoFromOffhandOrInventory(player, ammoId, neededCount) {
  const equip = getEquipInventory(player);
  if (equip) {
    const offhand = equip.getEquipment(EquipmentSlot.Offhand);
    if (offhand && offhand.typeId === ammoId && offhand.amount >= neededCount) {
      if (offhand.amount > neededCount) {
        offhand.amount -= neededCount;
        equip.setEquipment(EquipmentSlot.Offhand, offhand);
      } else {
        equip.setEquipment(EquipmentSlot.Offhand, undefined);
      }
      return true;
    }
  }
  const inv = player.getComponent(EntityComponentTypes.Inventory)?.container;
  if (!inv) return false;
  let total = 0;
  for (let i = 0; i < inv.size; i++) {
    const it = inv.getItem(i);
    if (it && it.typeId === ammoId) total += it.amount;
  }
  if (total < neededCount) return false;
  let rem = neededCount;
  for (let i = 0; i < inv.size && rem > 0; i++) {
    const it = inv.getItem(i);
    if (it && it.typeId === ammoId) {
      const take = Math.min(rem, it.amount);
      rem -= take;
      if (it.amount > take) {
        it.amount -= take;
        inv.setItem(i, it);
      } else {
        inv.setItem(i, undefined);
      }
    }
  }
  return true;
}

function spawnProjectiles(player, projId, count, power, uncertainty, sound) {
  const head = player.getHeadLocation();
  const dir = player.getViewDirection();
  const spawnPos = {
    x: head.x + dir.x * 1.2,
    y: head.y + dir.y * 1.2 - 0.1,
    z: head.z + dir.z * 1.2
  };
  for (let i = 0; i < count; i++) {
    try {
      const proj = player.dimension.spawnEntity(projId, spawnPos);
      const projComp = proj.getComponent(EntityComponentTypes.Projectile);
      if (projComp) {
        projComp.owner = player;
        projComp.shoot(
          {
            x: dir.x * power,
            y: dir.y * power,
            z: dir.z * power
          },
          { uncertainty: count > 1 ? Math.max(uncertainty, 4.0) : uncertainty }
        );
      }
    } catch {}
  }
  try {
    player.dimension.spawnParticle("minecraft:basic_smoke_particle", {
      x: head.x + dir.x * 2.0,
      y: head.y + dir.y * 2.0,
      z: head.z + dir.z * 2.0
    });
  } catch {}
  try {
    player.runCommand("camerashake add @s 0.1 0.1 rotational");
  } catch {}
  if (sound) {
    try {
      player.dimension.playSound(sound, player.location);
    } catch {}
  }
}

function handleGunUse(player, itemStack) {
  if (!player || !itemStack) return;
  const cfg = GUN_CONFIGS[itemStack.typeId];
  if (!cfg) return;

  const now = system.currentTick;
  const cdTicks = Math.max(1, Math.round((cfg.cooldown || 0.1) * 20));
  const last = lastShotTick.get(player.id) ?? -999;
  if (now - last < cdTicks) return;
  lastShotTick.set(player.id, now);

  const equip = getEquipInventory(player);
  if (!equip) return;

  // Check alternate underbarrel fire (sneaking + offhand ammo)
  if (cfg.altFire && player.isSneaking) {
    const offhand = equip.getEquipment(EquipmentSlot.Offhand);
    if (offhand && offhand.typeId === cfg.altFire.ammo) {
      if (offhand.amount > 1) {
        offhand.amount -= 1;
        equip.setEquipment(EquipmentSlot.Offhand, offhand);
      } else {
        equip.setEquipment(EquipmentSlot.Offhand, undefined);
      }
      spawnProjectiles(
        player,
        cfg.altFire.projectile,
        cfg.altFire.pelletCount || 1,
        cfg.altFire.power || 5.0,
        cfg.altFire.uncertainty || 1.0,
        cfg.altFire.sound
      );
      return;
    }
  }

  if (cfg.requiresSneak && !player.isSneaking) {
    return;
  }

  const maxAmmo = cfg.maxAmmo || 1;
  let remaining = getAmmoState(itemStack, maxAmmo);

  if (remaining <= 0) {
    // Attempt reload
    if (cfg.reloadItem && consumeAmmoFromOffhandOrInventory(player, cfg.reloadItem, cfg.reloadCount || 1)) {
      setAmmoState(itemStack, maxAmmo, maxAmmo);
      equip.setEquipment(EquipmentSlot.Mainhand, itemStack);
      player.onScreenDisplay.setActionBar(`§l§c[§f${maxAmmo}§c/§f${maxAmmo}§c]§r`);
      try {
        player.playSound("random.click", { volume: 1.0, pitch: 1.2 });
      } catch {}
    } else {
      player.onScreenDisplay.setActionBar("§l§4[NO AMMO]§r");
      try {
        player.playSound("gun.empty", { volume: 1.0, pitch: 0.9 });
      } catch {}
    }
    return;
  }

  // Fire 1 round
  remaining -= 1;
  setAmmoState(itemStack, remaining, maxAmmo);
  equip.setEquipment(EquipmentSlot.Mainhand, itemStack);

  spawnProjectiles(
    player,
    cfg.projectile,
    cfg.pelletCount || 1,
    cfg.power || 9.0,
    cfg.uncertainty || 1.0,
    cfg.sound
  );

  if (remaining <= 0) {
    player.onScreenDisplay.setActionBar("§l§4[NO AMMO]§r");
  } else {
    player.onScreenDisplay.setActionBar(`§l§c[§f${remaining}§c/§f${maxAmmo}§c]§r`);
  }
}

world.afterEvents.itemUse.subscribe((ev) => {
  const player = ev.source;
  const item = ev.itemStack;
  if (!player || !item) return;
  if (item.typeId === "gunsaddon:dynamite" || item.typeId === "gunsaddon:grenade_m67") {
    try {
      player.playSound("armor.equip_leather", { volume: 1.0, pitch: 1.0 });
    } catch {}
    return;
  }
  if (GUN_CONFIGS[item.typeId]) {
    handleGunUse(player, item);
  }
});

world.afterEvents.itemStartUse.subscribe((ev) => {
  const player = ev.source;
  const item = ev.itemStack;
  if (!player || !item) return;
  if (GUN_CONFIGS[item.typeId]) {
    activeShooters.set(player.id, player);
    handleGunUse(player, item);
  }
});

world.afterEvents.itemStopUse.subscribe((ev) => {
  const player = ev.source;
  if (player) {
    activeShooters.delete(player.id);
  }
});

world.afterEvents.itemCompleteUse.subscribe((ev) => {
  const player = ev.source;
  const item = ev.itemStack;
  if (!player || !item) return;
  if (item.typeId === "leftforcraft:adrenaline") {
    try {
      player.addEffect("absorption", 60 * 20, { amplifier: 1 });
      player.addEffect("regeneration", 5 * 20, { amplifier: 1 });
      player.addEffect("speed", 60 * 20, { amplifier: 1 });
    } catch {}
  }
});

system.runInterval(() => {
  for (const [id, player] of activeShooters.entries()) {
    if (!player || !player.isValid) {
      activeShooters.delete(id);
      continue;
    }
    const equip = getEquipInventory(player);
    const mainItem = equip?.getEquipment(EquipmentSlot.Mainhand);
    if (!mainItem || !GUN_CONFIGS[mainItem.typeId]) {
      activeShooters.delete(id);
      continue;
    }
    handleGunUse(player, mainItem);
  }
}, 1);
