/**
 * ITEMS CONFIGURATION
 *
 * Edit this file to add, remove, or modify items.
 *
 * Each item has:
 * - name: Display name
 * - type: "body", "legs", "arms", "weapon", or "chip"
 * - stats: Object with stat bonuses { hp, defence, speed, attack, combo }
 * - dropRate: Relative chance to drop (higher = more common)
 * - droppedBy: Array of enemy names that can drop this item (empty = all enemies)
 */

const ITEMS = [
    // ==================== BODY (HP & Defence) ====================
    {
        name: "Low-Grade Chassis [+10 HP][+1 DEF]",
        type: "body",
        stats: { hp: 10, defence: 1 },
        dropRate: 10,
        droppedBy: []
    },
    {
        name: "Standard Chassis [+20 HP][+2 DEF]",
        type: "body",
        stats: { hp: 20, defence: 2 },
        dropRate: 10,
        droppedBy: []
    },
    {
        name: "Advanced Chassis [+30 HP][+3 DEF]",
        type: "body",
        stats: { hp: 30, defence: 3 },
        dropRate: 10,
        droppedBy: []
    },
    {
        name: "Military Chassis [+40 HP][+4 DEF]",
        type: "body",
        stats: { hp: 40, defence: 4 },
        dropRate: 10,
        droppedBy: []
    },
    {
        name: "Old Breaker Chassis [+50 HP][+5 DEF]",
        type: "body",
        stats: { hp: 50, defence: 5 },
        dropRate: 10,
        droppedBy: []
    },
    {
        name: "Breaker Chassis [+60 HP][+6 DEF]",
        type: "body",
        stats: { hp: 60, defence: 6 },
        dropRate: 10,
        droppedBy: []
    },
        {
        name: "EVO1 Breaker Chassis [+70 HP][+7 DEF]",
        type: "body",
        stats: { hp: 70, defence: 7 },
        dropRate: 10,
        droppedBy: []
    },
            {
        name: "EVO2 Breaker Chassis [+80 HP][+8 DEF]",
        type: "body",
        stats: { hp: 80, defence: 8 },
        dropRate: 10,
        droppedBy: []
    },
                {
        name: "EVO3 Breaker Chassis [+90 HP][+9 DEF]",
        type: "body",
        stats: { hp: 10, defence: 1 },
        dropRate: 10,
        droppedBy: []
    },
                {
        name: "EVO4 Breaker Chassis [+100 HP][+10 DEF]",
        type: "body",
        stats: { hp: 10, defence: 1 },
        dropRate: 10,
        droppedBy: []
    },

    // ==================== LEGS (Speed) ====================
    {
        name: "Standard Servos [+2 SPD]",
        type: "legs",
        stats: { speed: 2 },
        dropRate: 60,
        droppedBy: []
    },
    {
        name: "Enhanced Servos [+4 SPD]",
        type: "legs",
        stats: { speed: 4 },
        dropRate: 50,
        droppedBy: []
    },
    {
        name: "Quick Striders [+6 SPD]",
        type: "legs",
        stats: { speed: 6 },
        dropRate: 40,
        droppedBy: []
    },
    {
        name: "Hydraulic Boosters [+8 SPD]",
        type: "legs",
        stats: { speed: 8 },
        dropRate: 30,
        droppedBy: []
    },
    {
        name: "Reflex Actuators [+10 SPD]",
        type: "legs",
        stats: { speed: 10 },
        dropRate: 22,
        droppedBy: []
    },
    {
        name: "Kinetic Stabilizers [+12 SPD]",
        type: "legs",
        stats: { speed: 12 },
        dropRate: 16,
        droppedBy: []
    },
    {
        name: "Phase Shift Legs [+14 SPD]",
        type: "legs",
        stats: { speed: 14 },
        dropRate: 12,
        droppedBy: []
    },
    {
        name: "Quantum Thrusters [+16 SPD]",
        type: "legs",
        stats: { speed: 16 },
        dropRate: 8,
        droppedBy: []
    },
    {
        name: "Temporal Drives [+18 SPD]",
        type: "legs",
        stats: { speed: 18 },
        dropRate: 5,
        droppedBy: []
    },
    {
        name: "Singularity Runners [+20 SPD]",
        type: "legs",
        stats: { speed: 20 },
        dropRate: 3,
        droppedBy: []
    },

    // ==================== ARMS (Attack or Defence) ====================
    {
        name: "Standard Manipulators [+2 ATK]",
        type: "arms",
        stats: { attack: 2 },
        dropRate: 55,
        droppedBy: []
    },
    {
        name: "Shield Bracers [+2 DEF]",
        type: "arms",
        stats: { defence: 2 },
        dropRate: 55,
        droppedBy: []
    },
    {
        name: "Power Gauntlets [+4 ATK]",
        type: "arms",
        stats: { attack: 4 },
        dropRate: 40,
        droppedBy: []
    },
    {
        name: "Barrier Arms [+4 DEF]",
        type: "arms",
        stats: { defence: 4 },
        dropRate: 40,
        droppedBy: []
    },
    {
        name: "Crusher Claws [+6 ATK]",
        type: "arms",
        stats: { attack: 6 },
        dropRate: 26,
        droppedBy: []
    },
    {
        name: "Fortress Gauntlets [+6 DEF]",
        type: "arms",
        stats: { defence: 6 },
        dropRate: 26,
        droppedBy: []
    },
    {
        name: "Ravager Arms [+8 ATK]",
        type: "arms",
        stats: { attack: 8 },
        dropRate: 14,
        droppedBy: []
    },
    {
        name: "Aegis Bracers [+8 DEF]",
        type: "arms",
        stats: { defence: 8 },
        dropRate: 14,
        droppedBy: []
    },
    {
        name: "Decimator Arms [+10 ATK]",
        type: "arms",
        stats: { attack: 10 },
        dropRate: 6,
        droppedBy: []
    },
    {
        name: "Citadel Arms [+10 DEF]",
        type: "arms",
        stats: { defence: 10 },
        dropRate: 6,
        droppedBy: []
    },

    // ==================== WEAPON (Attack, Combo, or Defence) ====================
    {
        name: "Pulse Pistol [+2 ATK]",
        type: "weapon",
        stats: { attack: 2 },
        dropRate: 55,
        droppedBy: []
    },
    {
        name: "Energy Shield [+2 DEF]",
        type: "weapon",
        stats: { defence: 2 },
        dropRate: 55,
        droppedBy: []
    },
    {
        name: "Chain Blade [+3 ATK][+2 COMBO]",
        type: "weapon",
        stats: { attack: 3, combo: 2 },
        dropRate: 40,
        droppedBy: []
    },
    {
        name: "Plasma Rifle [+5 ATK]",
        type: "weapon",
        stats: { attack: 5 },
        dropRate: 30,
        droppedBy: []
    },
    {
        name: "Combo Striker [+4 COMBO]",
        type: "weapon",
        stats: { combo: 4 },
        dropRate: 26,
        droppedBy: []
    },
    {
        name: "Fortress Module [+5 DEF]",
        type: "weapon",
        stats: { defence: 5 },
        dropRate: 22,
        droppedBy: []
    },
    {
        name: "Railgun [+8 ATK]",
        type: "weapon",
        stats: { attack: 8 },
        dropRate: 14,
        droppedBy: []
    },
    {
        name: "Breaker Blade [+10 ATK][+6 COMBO]",
        type: "weapon",
        stats: { attack: 10, combo: 6 },
        dropRate: 10,
        droppedBy: []
    },
    {
        name: "Annihilator Cannon [+12 ATK]",
        type: "weapon",
        stats: { attack: 12 },
        dropRate: 6,
        droppedBy: []
    },
    {
        name: "Omega Rupture Cannon [+14 ATK][+8 COMBO]",
        type: "weapon",
        stats: { attack: 14, combo: 8 },
        dropRate: 3,
        droppedBy: []
    },

    // ==================== SYSTEMS CHIP (Any stat) ====================
    {
        name: "Health Booster Chip I [+10 HP]",
        type: "chip",
        stats: { hp: 10 },
        dropRate: 45,
        droppedBy: []
    },
    {
        name: "Health Booster Chip II [+20 HP]",
        type: "chip",
        stats: { hp: 20 },
        dropRate: 18,
        droppedBy: []
    },
    {
        name: "Speed Processor I [+2 SPD]",
        type: "chip",
        stats: { speed: 2 },
        dropRate: 44,
        droppedBy: []
    },
    {
        name: "Speed Processor II [+4 SPD]",
        type: "chip",
        stats: { speed: 4 },
        dropRate: 17,
        droppedBy: []
    },
    {
        name: "Attack Subroutine I [+2 ATK]",
        type: "chip",
        stats: { attack: 2 },
        dropRate: 43,
        droppedBy: []
    },
    {
        name: "Attack Subroutine II [+4 ATK]",
        type: "chip",
        stats: { attack: 4 },
        dropRate: 16,
        droppedBy: []
    },
    {
        name: "Combo Algorithm I [+4 COMBO]",
        type: "chip",
        stats: { combo: 4 },
        dropRate: 42,
        droppedBy: []
    },
    {
        name: "Combo Algorithm II [+8 COMBO]",
        type: "chip",
        stats: { combo: 8 },
        dropRate: 15,
        droppedBy: []
    },
    {
        name: "Defence Matrix I [+2 DEF]",
        type: "chip",
        stats: { defence: 2 },
        dropRate: 41,
        droppedBy: []
    },
    {
        name: "Defence Matrix II [+4 DEF]",
        type: "chip",
        stats: { defence: 4 },
        dropRate: 14,
        droppedBy: []
    }


// Item type labels for UI
const ITEM_TYPES = {
    body: "body",
    legs: "legs",
    arms: "arms",
    weapon: "weapon",
    chip: "chip"
};
