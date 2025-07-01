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
