// ZeroDay - CSQ v8 Parser
// This script parses structured CSQ output and pushes it into Airtable.

export default defineComponent({
  props: {
    parsed_csq: {
      type: "object",
      label: "Parsed CSQ Output",
    },
  },

  async run({ steps, $ }) {
    const data = this.parsed_csq;

    // Debug block
    console.log("=== CSQ PARSER DEBUG START ===");
    for (const [key, value] of Object.entries(data)) {
      if (!value || value === "") {
        console.log(`⚠️ EMPTY FIELD: ${key}`);
      } else {
        console.log(`${key}: ${JSON.stringify(value)}`);
      }
    }
    console.log("=== CSQ PARSER DEBUG END ===");

    // Airtable Insert
    const insertResult = await $.airtable.insert({
      baseId: process.env.AIRTABLE_BASE_ID,
      tableId: "CSQ_Questions",
      fields: data
    });

    return insertResult;
  },
});
