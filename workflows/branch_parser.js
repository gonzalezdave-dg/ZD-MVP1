// ZeroDay - Branch Parser
// Converts structured Branch data into the Airtable "Branches" table.

export default defineComponent({
  props: {
    branch_raw: {
      type: "object",
      label: "Branch Raw Output"
    },
  },

  async run({ steps, $ }) {
    const b = this.branch_raw;

    // Debug logging
    console.log("=== BRANCH PARSER DEBUG START ===");
    for (const [key, value] of Object.entries(b)) {
      if (!value || value === "") {
        console.log(`⚠️ EMPTY FIELD: ${key}`);
      } else {
        console.log(`${key}: ${JSON.stringify(value)}`);
      }
    }
    console.log("=== BRANCH PARSER DEBUG END ===");

    // Format fields according to Airtable schema
    const branchRecord = {
      ID: b.ID || "",
      Term: b.Term || "",
      Related1: b.Related1 || "",
      Related2: b.Related2 || "",
      Related3: b.Related3 || "",
      Explanation: b.Explanation || ""
    };

    // Insert into Airtable
    const result = await $.airtable.insert({
      baseId: process.env.AIRTABLE_BASE_ID,
      tableId: "Branches",
      fields: branchRecord
    });

    return result;
  }
});
