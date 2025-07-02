const PLACEHOLDER_GUIDE = `\
=== Player Placeholders ===
{item_in_hand}            → Held item
{player_displayname}      → Player's display name
{player_exp_level}        → Player XP level
{player_food_level}       → Food level (0-20)
{player_gamemode}         → Game mode
{player_health}           → Current health
{player_inventory}        → Full inventory
{player_ip}               → IP address
{player_location}         → X, Y, Z position
{player_max_health}       → Max health
{player_name}             → Username
{player_uuid}             → UUID
{player_uuid_short}       → Short UUID
{player_world}            → Current world

=== Nearby Entity Counts ===
{nearby_allay_count}             → Nearby allays count
{nearby_armadillo_count}         → Nearby armadillos count
{nearby_axolotl_count}           → Nearby axolotls count
{nearby_bat_count}               → Nearby bats count
{nearby_bee_count}               → Nearby bees count
{nearby_blaze_count}             → Nearby blazes count
{nearby_bogged_count}            → Nearby bogged count
{nearby_breeze_count}            → Nearby breeze count
{nearby_camel_count}             → Nearby camels count
{nearby_cat_count}               → Nearby cats count
{nearby_cave_spider_count}       → Nearby cave spiders count
{nearby_chicken_count}           → Nearby chickens count
{nearby_cod_count}               → Nearby cod count
{nearby_cow_count}               → Nearby cows count
{nearby_creeper_count}           → Nearby creepers count
{nearby_dolphin_count}           → Nearby dolphins count
{nearby_donkey_count}            → Nearby donkeys count
{nearby_drowned_count}           → Nearby drowned count
{nearby_elder_guardian_count}    → Nearby elder guardians count
{nearby_ender_dragon_count}      → Nearby ender dragons count
{nearby_endermite_count}         → Nearby endermites count
{nearby_evoker_count}            → Nearby evokers count
{nearby_fox_count}               → Nearby foxes count
{nearby_frog_count}              → Nearby frogs count
{nearby_ghast_count}             → Nearby ghasts count
{nearby_glow_squid_count}        → Nearby glow squids count
{nearby_goat_count}              → Nearby goats count
{nearby_guardian_count}          → Nearby guardians count
{nearby_hoglin_count}            → Nearby hoglins count
{nearby_horse_count}             → Nearby horses count
{nearby_husk_count}              → Nearby husks count
{nearby_illusioner_count}        → Nearby illusioners count
{nearby_iron_golem_count}        → Nearby iron golems count
{nearby_llama_count}             → Nearby llamas count
{nearby_magma_cube_count}        → Nearby magma cubes count
{nearby_mooshroom_count}         → Nearby mooshrooms count
{nearby_mule_count}              → Nearby mules count
{nearby_ocelot_count}            → Nearby ocelots count
{nearby_panda_count}             → Nearby pandas count
{nearby_parrot_count}            → Nearby parrots count
{nearby_phantom_count}           → Nearby phantoms count
{nearby_pig_count}               → Nearby pigs count
{nearby_piglin_brute_count}      → Nearby piglin brutes count
{nearby_piglin_count}            → Nearby piglins count
{nearby_pillager_count}          → Nearby pillagers count
{nearby_polar_bear_count}        → Nearby polar bears count
{nearby_pufferfish_count}        → Nearby pufferfish count
{nearby_rabbit_count}            → Nearby rabbits count
{nearby_ravager_count}           → Nearby ravagers count
{nearby_salmon_count}            → Nearby salmon count
{nearby_sheep_count}             → Nearby sheep count
{nearby_shulker_count}           → Nearby shulkers count
{nearby_silverfish_count}        → Nearby silverfish count
{nearby_skeleton_count}          → Nearby skeletons count
{nearby_skeleton_horse_count}    → Nearby skeleton horses count
{nearby_slime_count}             → Nearby slimes count
{nearby_sniffer_count}           → Nearby sniffers count
{nearby_snow_golem_count}        → Nearby snow golems count
{nearby_spider_count}            → Nearby spiders count
{nearby_squid_count}             → Nearby squids count
{nearby_stray_count}             → Nearby strays count
{nearby_strider_count}           → Nearby striders count
{nearby_trader_llama_count}      → Nearby trader llamas count
{nearby_tropical_fish_count}     → Nearby tropical fish count
{nearby_turtle_count}            → Nearby turtles count
{nearby_vex_count}               → Nearby vexes count
{nearby_vindicator_count}        → Nearby vindicators count
{nearby_warden_count}            → Nearby wardens count
{nearby_witch_count}             → Nearby witches count
{nearby_wither_count}            → Nearby withers count
{nearby_wither_skeleton_count}   → Nearby wither skeletons count
{nearby_wolf_count}              → Nearby wolves count
{nearby_zoglin_count}            → Nearby zoglins count
{nearby_zombie_count}            → Nearby zombies count
{nearby_zombie_horse_count}      → Nearby zombie horses count
{nearby_zombie_villager_count}   → Nearby zombie villagers count
{nearby_zombified_piglin_count}  → Nearby zombified piglins count

=== World Placeholders ===
{world_difficulty}        → Difficulty
{world_entity_count}      → Loaded entities
{world_loaded_chunks}     → Loaded chunks
{world_seed}              → Seed value
{world_time}              → Time in ticks
{world_weather}           → Weather

=== Time Placeholders ===
{time_server}             → Server time
{time_utc}                → UTC time
{time_gmt}                → GMT time

=== Named Time Zones ===
{time_bangkok}            → Bangkok time
{time_berlin}             → Berlin time
{time_london}             → London time
{time_los_angeles}        → LA time
{time_new_york}           → NY time
{time_paris}              → Paris time
{time_singapore}          → Singapore time
{time_sydney}             → Sydney time
{time_tokyo}              → Tokyo time
{time_toronto}            → Toronto time

=== UTC Offset Zones ===
{time_gmt_minus_05_00}    → GMT-05:00
{time_utc_plus_07_00}     → UTC+07:00
`;

document.getElementById("placeholderGuide").textContent = PLACEHOLDER_GUIDE;

let rules = [];

function render() {
  const container = document.getElementById("rules");
  container.innerHTML = "";

  rules.forEach((rule, index) => {
    const div = document.createElement("div");
    div.className = "rule";

    // MATCH PHRASES
    rule.match.forEach((text, mIndex) => {
      const matchDiv = document.createElement("div");
      matchDiv.className = "match-input";

      const input = document.createElement("input");
      input.value = text;
      input.placeholder = "Match phrase";
      input.oninput = () => rule.match[mIndex] = input.value;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "❌";
      removeBtn.onclick = () => {
        rule.match.splice(mIndex, 1);
        render();
      };

      matchDiv.appendChild(input);
      matchDiv.appendChild(removeBtn);
      div.appendChild(matchDiv);
    });

    const addMatchBtn = document.createElement("button");
    addMatchBtn.textContent = "➕ Add Match";
    addMatchBtn.onclick = () => {
      rule.match.push("");
      render();
    };
    div.appendChild(addMatchBtn);

    // RESPONSE
    const responseInput = document.createElement("textarea");
    responseInput.placeholder = "Response text (e.g. 'Your XP is {player_exp_level}')"
    responseInput.value = rule.response;
    responseInput.oninput = () => rule.response = responseInput.value;
    div.appendChild(responseInput);

    // REMOVE RULE
    const removeRuleBtn = document.createElement("button");
    removeRuleBtn.textContent = "🗑️ Remove Rule";
    removeRuleBtn.onclick = () => {
      rules.splice(index, 1);
      render();
    };
    div.appendChild(removeRuleBtn);

    container.appendChild(div);
  });

  document.getElementById("jsonOutput").value = JSON.stringify(rules, null, 2);
}

function addRule() {
  rules.push({
    match: [""],
    response: "Your placeholder response here. Example: {player_name}"
  });
  render();
}

function downloadJSON() {
  const blob = new Blob([JSON.stringify(rules, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "function_rules.json";
  a.click();
  URL.revokeObjectURL(url);
}

render();
