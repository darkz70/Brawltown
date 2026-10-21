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

const EXPLOSIVE_PROJECTILES = new Set([
  "gunsaddon:flare_gun_shoot",
  "gunsaddon:grenade_launcher_shoot",
  "gunsaddon:railgun_shoot",
  "gunsaddon:rocket_shoot",
  "gunsaddon:dynamite_entity",
  "gunsaddon:grenade_m67_entity"
]);

const BREAKABLE_GLASS_ICE = new Set([
  "minecraft:glass",
  "minecraft:glass_pane",
  "minecraft:tinted_glass",
  "minecraft:ice",
  "minecraft:packed_ice",
  "minecraft:blue_ice",
  "minecraft:frosted_ice"
]);

const activeShooters = new Map();
const lastShotTick = new Map();
const trackedProjectiles = new Map();

function isBreakableByBullet(block) {
  if (!block) return false;
  const id = block.typeId;
  if (BREAKABLE_GLASS_ICE.has(id)) return true;
  if (id.endsWith("_stained_glass") || id.endsWith("_stained_glass_pane")) return true;
  return false;
}

function applySpread(dir, uncertaintyDeg) {
  if (!uncertaintyDeg || uncertaintyDeg <= 0) {
    return { x: dir.x, y: dir.y, z: dir.z };
  }
  const spreadRad = (uncertaintyDeg * Math.PI) / 180 * 0.35;
  const rx = (Math.random() - 0.5) * 2 * spreadRad;
  const ry = (Math.random() - 0.5) * 2 * spreadRad;
  const rz = (Math.random() - 0.5) * 2 * spreadRad;
  const vx = dir.x + rx;
  const vy = dir.y + ry;
  const vz = dir.z + rz;
  const len = Math.hypot(vx, vy, vz) || 1;
  return { x: vx / len, y: vy / len, z: vz / len };
}

function findSolidWallHit(dimension, origin, dir, maxDistance = 120) {
  let curOrigin = { x: origin.x, y: origin.y, z: origin.z };
  let remaining = maxDistance;
  for (let iter = 0; iter < 4 && remaining > 0.05; iter++) {
    let hit;
    try {
      hit = dimension.getBlockFromRay(curOrigin, dir, {
        maxDistance: remaining,
        includePassableBlocks: false,
        includeLiquidBlocks: false
      });
    } catch {
      break;
    }
    if (!hit || !hit.block) {
      return undefined;
    }
    const hitPoint = {
      x: hit.block.location.x + (hit.faceLocation?.x ?? 0.5),
      y: hit.block.location.y + (hit.faceLocation?.y ?? 0.5),
      z: hit.block.location.z + (hit.faceLocation?.z ?? 0.5)
    };
    const distFromStart = Math.hypot(
      hitPoint.x - origin.x,
      hitPoint.y - origin.y,
      hitPoint.z - origin.z
    );
    if (isBreakableByBullet(hit.block)) {
      try {
        dimension.runCommand(
          `fill ${hit.block.location.x} ${hit.block.location.y} ${hit.block.location.z} ${hit.block.location.x} ${hit.block.location.y} ${hit.block.location.z} air [] destroy`
        );
      } catch {}
      curOrigin = {
        x: hitPoint.x + dir.x * 0.15,
        y: hitPoint.y + dir.y * 0.15,
        z: hitPoint.z + dir.z * 0.15
      };
      remaining = maxDistance - distFromStart - 0.15;
      continue;
    }
    return {
      block: hit.block,
      hitPoint,
      distance: distFromStart
    };
  }
  return undefined;
}

function hasEntityBeforeWall(dimension, player, origin, dir, wallDist) {
  if (wallDist <= 0.05) return false;
  try {
    const hits = dimension.getEntitiesFromRay(origin, dir, {
      maxDistance: wallDist,
      ignoreBlockCollision: false
    });
    for (const h of hits) {
      if (h.entity && h.entity.id !== player.id && h.distance < wallDist) {
        return true;
      }
    }
  } catch {}
  return false;
}

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
  const baseDir = player.getViewDirection();
  const isExplosive = EXPLOSIVE_PROJECTILES.has(projId);
  const baseSpeed = Math.min(power || 4.0, 4.0);

  for (let i = 0; i < count; i++) {
    const spreadAmount = count > 1 ? Math.max(uncertainty, 4.0) : (uncertainty > 1 ? uncertainty : 0.4);
    const shotDir = applySpread(baseDir, spreadAmount);
    const wallHit = findSolidWallHit(player.dimension, head, shotDir, 120);
    const wallDist = wallHit ? wallHit.distance : 999;
    const entityInFront = wallHit ? hasEntityBeforeWall(player.dimension, player, head, shotDir, wallDist) : true;

    // If a wall is right in front of the player (or within 1 tick's travel) and no entity is in front of that wall,
    // stop the shot right at the near face of the wall so it can NEVER pass through the wall!
    if (wallHit && !entityInFront && wallDist <= baseSpeed + 0.6) {
      const impactPos = {
        x: wallHit.hitPoint.x - shotDir.x * 0.15,
        y: wallHit.hitPoint.y - shotDir.y * 0.15,
        z: wallHit.hitPoint.z - shotDir.z * 0.15
      };
      if (isExplosive) {
        try {
          const proj = player.dimension.spawnEntity(projId, impactPos);
          const projComp = proj.getComponent(EntityComponentTypes.Projectile);
          if (projComp) projComp.owner = player;
          proj.triggerEvent("hit");
        } catch {}
      } else {
        try {
          player.dimension.spawnParticle("minecraft:basic_smoke_particle", impactPos);
          player.dimension.playSound("bullet.hit", impactPos);
        } catch {}
      }
      continue;
    }

    const spawnOffset = Math.min(0.45, Math.max(0.15, wallDist - 0.3));
    const spawnPos = {
      x: head.x + shotDir.x * spawnOffset,
      y: head.y + shotDir.y * spawnOffset - 0.05,
      z: head.z + shotDir.z * spawnOffset
    };

    try {
      const proj = player.dimension.spawnEntity(projId, spawnPos);
      const projComp = proj.getComponent(EntityComponentTypes.Projectile);
      if (projComp) {
        projComp.owner = player;
        const speed = wallHit ? Math.min(baseSpeed, Math.max(0.5, wallDist - spawnOffset - 0.1)) : baseSpeed;
        projComp.shoot(
          {
            x: shotDir.x * speed,
            y: shotDir.y * speed,
            z: shotDir.z * speed
          },
          { uncertainty: 0 }
        );
      }
      trackedProjectiles.set(proj.id, {
        entity: proj,
        origin: { x: head.x, y: head.y, z: head.z },
        prevPos: { x: spawnPos.x, y: spawnPos.y, z: spawnPos.z },
        shotDir,
        maxDist: wallHit ? Math.max(0.2, wallDist - 0.1) : 120,
        isExplosive,
        spawnTick: system.currentTick
      });
    } catch {}
  }

  const muzzleDist = 0.8;
  try {
    player.dimension.spawnParticle("minecraft:basic_smoke_particle", {
      x: head.x + baseDir.x * muzzleDist,
      y: head.y + baseDir.y * muzzleDist,
      z: head.z + baseDir.z * muzzleDist
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

world.afterEvents.projectileHitBlock.subscribe((ev) => {
  const proj = ev.projectile;
  if (!proj || !proj.isValid) return;
  const typeId = proj.typeId;
  if (!typeId || !typeId.startsWith("gunsaddon:")) return;
  trackedProjectiles.delete(proj.id);
  if (EXPLOSIVE_PROJECTILES.has(typeId)) {
    try {
      proj.triggerEvent("hit");
    } catch {}
  } else {
    try {
      proj.remove();
    } catch {}
  }
});

world.afterEvents.projectileHitEntity.subscribe((ev) => {
  const proj = ev.projectile;
  if (!proj || !proj.isValid) return;
  const typeId = proj.typeId;
  if (!typeId || !typeId.startsWith("gunsaddon:")) return;
  trackedProjectiles.delete(proj.id);
  if (EXPLOSIVE_PROJECTILES.has(typeId)) {
    try {
      proj.triggerEvent("hit");
    } catch {}
  } else {
    try {
      proj.remove();
    } catch {}
  }
});

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
  const now = system.currentTick;
  for (const [projId, info] of trackedProjectiles.entries()) {
    const proj = info.entity;
    if (!proj || !proj.isValid || now - info.spawnTick > 40) {
      trackedProjectiles.delete(projId);
      continue;
    }
    const loc = proj.location;
    const dx = loc.x - info.prevPos.x;
    const dy = loc.y - info.prevPos.y;
    const dz = loc.z - info.prevPos.z;
    const stepDist = Math.hypot(dx, dy, dz);
    if (stepDist > 0.05) {
      const stepDir = { x: dx / stepDist, y: dy / stepDist, z: dz / stepDist };
      const blockHit = findSolidWallHit(proj.dimension, info.prevPos, stepDir, stepDist + 0.2);
      if (blockHit) {
        trackedProjectiles.delete(projId);
        if (info.isExplosive) {
          try {
            proj.teleport({
              x: blockHit.hitPoint.x - stepDir.x * 0.15,
              y: blockHit.hitPoint.y - stepDir.y * 0.15,
              z: blockHit.hitPoint.z - stepDir.z * 0.15
            });
            proj.triggerEvent("hit");
          } catch {}
        } else {
          try {
            proj.remove();
          } catch {}
        }
        continue;
      }
    }
    const totalDist = Math.hypot(
      loc.x - info.origin.x,
      loc.y - info.origin.y,
      loc.z - info.origin.z
    );
    if (totalDist >= info.maxDist) {
      trackedProjectiles.delete(projId);
      if (info.isExplosive) {
        try {
          proj.triggerEvent("hit");
        } catch {}
      } else {
        try {
          proj.remove();
        } catch {}
      }
      continue;
    }
    info.prevPos = { x: loc.x, y: loc.y, z: loc.z };
  }

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
